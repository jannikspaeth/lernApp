'use client';

import { useState } from 'react';
import { GrammarTopic, GrammarItem } from '@/lib/grammar-exercises';
import { upsertGrammarAttempt, recordMistakes } from '@/lib/storage';
import { grammarMistake } from '@/lib/mistakes';
import type { Lang } from '@/lib/lang';
import SpeakButton from '@/components/SpeakButton';
import { useT } from '@/lib/ui-lang';
import { checkClozeAnswer } from '@/lib/answer-check';

interface Props {
  topic: GrammarTopic;
  lang: Lang;
  onComplete?: (correct: number, total: number) => void;
}

type Mode = 'type' | 'mc';

function isCorrect(value: string, item: GrammarItem): boolean {
  return checkClozeAnswer(value, item.answer, item.alternatives);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// A fresh round: items in random order, each with shuffled options.
function newRound(topic: GrammarTopic) {
  return shuffle(topic.items).map(item => ({ item, options: shuffle(item.options) }));
}

export default function GrammarExercise({ topic, lang, onComplete }: Props) {
  const t = useT();
  const [round, setRound] = useState(() => newRound(topic));
  const [mode, setMode] = useState<Mode>('mc');
  const [answers, setAnswers] = useState<string[]>(() => round.map(() => ''));
  const [retypes, setRetypes] = useState<string[]>(() => round.map(() => ''));
  const [checked, setChecked] = useState(false);
  const [showRule, setShowRule] = useState(true);

  const results = checked ? round.map((r, i) => isCorrect(answers[i], r.item)) : [];
  const correct = results.filter(Boolean).length;
  const answeredCount = answers.filter(a => a.trim()).length;

  function restart(nextMode: Mode = mode) {
    const r = newRound(topic);
    setRound(r);
    setMode(nextMode);
    setAnswers(r.map(() => ''));
    setRetypes(r.map(() => ''));
    setChecked(false);
  }

  function setAt(list: string[], set: (v: string[]) => void, i: number, value: string) {
    const next = [...list];
    next[i] = value;
    set(next);
  }

  async function check() {
    const res = round.map((r, i) => isCorrect(answers[i], r.item));
    const mistakes = round
      .map((r, i) =>
        res[i]
          ? null
          : { prompt: `${r.item.before}___${r.item.after}`, correct: r.item.answer, userAnswer: answers[i] },
      )
      .filter((m): m is NonNullable<typeof m> => m !== null);
    const nCorrect = res.filter(Boolean).length;
    setChecked(true);
    recordMistakes(
      round.flatMap((r, i) =>
        res[i]
          ? []
          : [grammarMistake({ topicId: topic.id, ...r.item, userAnswer: answers[i] })],
      ),
    );
    try {
      await upsertGrammarAttempt(topic.id, nCorrect, round.length, mistakes);
    } catch {
      // Progress couldn't be saved; the exercise result is still shown.
    }
    onComplete?.(nCorrect, round.length);
  }

  return (
    <div className="space-y-5">
      {/* Mode toggle */}
      <div className="flex gap-1 bg-line-soft rounded-xl p-1">
        {([
          ['mc', t('Choose', 'Auswählen')],
          ['type', t('Type', 'Tippen')],
        ] as [Mode, string][]).map(([id, label]) => (
          <button
            key={id}
            onClick={() => { if (id !== mode) restart(id); }}
            className={`flex-1 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              mode === id ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Rule + examples (collapsible) */}
      <div className="rounded-xl bg-blue-50 border border-blue-100">
        <button
          onClick={() => setShowRule(v => !v)}
          className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-blue-900"
        >
          <span>📘 {t('Rule', 'Regel')}</span>
          <span className="text-blue-400">{showRule ? '▲' : '▼'}</span>
        </button>
        {showRule && (
          <div className="px-4 pb-4 space-y-2">
            <p className="text-sm text-blue-900 leading-relaxed">{topic.explanation}</p>
            <div className="space-y-1">
              {topic.examples.map((ex, i) => (
                <p key={i} className="text-sm flex items-center gap-1.5 flex-wrap">
                  <SpeakButton text={ex.target} lang={lang} />
                  <span className="font-semibold text-ink">{ex.target}</span>
                  <span className="text-muted"> → </span>
                  <span className="text-muted">{ex.de}</span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="text-muted text-sm">{topic.instruction}</p>

      <div className="space-y-3">
        {round.map(({ item, options }, i) => {
          const ok = checked && results[i];
          const wrong = checked && !results[i];
          const retypeOk = wrong && isCorrect(retypes[i], item);
          return (
            <div
              key={i}
              className={`p-4 rounded-xl border-2 transition-colors ${
                ok ? 'border-green-400 bg-green-50' : wrong ? 'border-red-300 bg-red-50' : 'border-line bg-surface'
              }`}
            >
              {mode === 'type' ? (
                <p className="text-ink leading-relaxed flex items-baseline flex-wrap gap-x-1">
                  <span>{item.before}</span>
                  <input
                    type="text"
                    value={answers[i]}
                    disabled={checked}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    onChange={e => setAt(answers, setAnswers, i, e.target.value)}
                    placeholder="..."
                    className={`border-b-2 bg-transparent px-1 min-w-16 max-w-40 text-center outline-none transition-colors disabled:opacity-100 ${
                      ok
                        ? 'border-green-500 text-green-700'
                        : wrong
                        ? 'border-red-400 text-red-700'
                        : 'border-gray-400 focus:border-accent text-ink'
                    }`}
                  />
                  <span>{item.after}</span>
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-ink leading-relaxed">
                    {item.before}
                    <span className="font-semibold text-muted">＿＿</span>
                    {item.after}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {options.map(opt => {
                      const isSel = answers[i] === opt;
                      const isAnswer = checked && opt === item.answer;
                      const isWrongSel = checked && isSel && !isAnswer;
                      return (
                        <button
                          key={opt}
                          disabled={checked}
                          onClick={() => setAt(answers, setAnswers, i, opt)}
                          className={`px-3 py-2 rounded-xl border-2 text-sm font-medium transition-all ${
                            isAnswer
                              ? 'border-green-500 bg-green-50 text-green-800'
                              : isWrongSel
                              ? 'border-red-400 bg-red-50 text-red-700'
                              : isSel
                              ? 'border-red-600 bg-red-50 text-red-800'
                              : 'border-line bg-surface text-ink hover:border-faint hover:bg-canvas disabled:hover:border-gray-200 disabled:hover:bg-white'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {wrong && (
                <p className="mt-2 text-sm text-red-700 flex items-center gap-2 flex-wrap">
                  <span>
                    ✓ <strong>{item.answer}</strong>
                    <span className="text-muted ml-2 font-normal">({item.hint})</span>
                  </span>
                  <SpeakButton text={`${item.before}${item.answer}${item.after}`} lang={lang} />
                </p>
              )}
              {ok && (
                <p className="mt-2 text-xs text-green-700 flex items-center gap-2">
                  <span>✓ {item.answer} · {item.hint}</span>
                  <SpeakButton text={`${item.before}${item.answer}${item.after}`} lang={lang} />
                </p>
              )}

              {/* Rewrite-to-learn (type mode only) */}
              {mode === 'type' && wrong && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-amber-600 shrink-0">{t('Rewrite to learn:', 'Zum Einprägen abschreiben:')}</span>
                  <input
                    type="text"
                    value={retypes[i]}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    onChange={e => setAt(retypes, setRetypes, i, e.target.value)}
                    placeholder={item.answer}
                    className={`flex-1 min-w-0 border-b bg-transparent text-sm py-0.5 outline-none transition-colors ${
                      retypeOk
                        ? 'border-green-500 text-green-700'
                        : 'border-amber-400 text-amber-700 focus:border-amber-600'
                    }`}
                  />
                  {retypeOk && <span className="text-green-600 text-sm shrink-0">✓</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!checked ? (
        <button
          onClick={check}
          className="w-full py-3 bg-accent hover:bg-accent-strong text-white rounded-xl font-medium transition-colors"
        >
          {t('Check', 'Prüfen')}{' '}
          {answeredCount < round.length && t(`(${answeredCount}/${round.length} answered)`, `(${answeredCount}/${round.length} beantwortet)`)}
        </button>
      ) : (
        <div className="space-y-3">
          <div
            className={`p-4 rounded-xl text-center font-medium ${
              correct === round.length
                ? 'bg-green-100 text-green-800'
                : correct >= round.length / 2
                ? 'bg-amber-50 text-amber-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {t(`${correct} of ${round.length} correct`, `${correct} von ${round.length} richtig`)}
            {correct === round.length && ' – Perfetto! 🎉'}
          </div>
          <button
            onClick={() => restart()}
            className="w-full py-2 border border-line hover:bg-canvas text-muted rounded-xl text-sm transition-colors"
          >
            {t('Try again', 'Nochmal')}
          </button>
        </div>
      )}
    </div>
  );
}
