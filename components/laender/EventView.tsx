'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { useLocalSetting } from '@/lib/use-local-setting';
import { updateWissen } from '@/lib/storage';
import { applyAnswer } from '@/lib/wissen/progress';
import { LEVELS, questionId, type Level } from '@/lib/laender/types';
import type { RawCard } from '@/lib/wissen/types';
import QuizCard from '@/components/wissen/QuizCard';
import { levelDone, useWissenProgress } from './EventProgress';

type Tab = 'info' | 'quiz';
const isLevel = (v: string): v is Level => v === 'leicht' || v === 'mittel' || v === 'schwer';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// One historic event: info text and a quiz in three levels.
export default function EventView({
  code,
  path,
  text,
  quiz,
  next,
  sourceUrl,
}: {
  code: string;
  path: string; // event id, or <event>.<subtopic>
  text: string[];
  quiz: Record<Level, RawCard[]>;
  next?: { href: string; title: string };
  sourceUrl?: string;
}) {
  const t = useT();
  const [tab, setTab] = useState<Tab>('info');
  const [level, setLevel] = useLocalSetting<Level>('lernapp_land_level', 'leicht', isLevel);
  const [run, setRun] = useState<{ level: Level; order: number[]; idx: number; right: number } | null>(null);
  const prog = useWissenProgress();
  const [doneNow, setDoneNow] = useState<Partial<Record<Level, boolean>>>({});
  const [saveError, setSaveError] = useState(false);

  const done = (l: Level) => doneNow[l] || levelDone(prog, code, path, l, quiz[l].length);

  function start(l: Level) {
    setLevel(l);
    setRun({ level: l, order: shuffle(quiz[l].map((_, i) => i)), idx: 0, right: 0 });
  }

  const current = run && run.idx < run.order.length ? run.order[run.idx] : null;
  const card = run && current != null ? quiz[run.level][current] : null;
  const options = useMemo(() => (card ? shuffle([card[1], ...(card[2] ?? [])]) : []), [card]);

  function answer(correct: boolean) {
    if (!run || current == null) return;
    const id = questionId(code, path, run.level, current);
    updateWissen(p => {
      p.cards[id] = applyAnswer(p.cards[id], correct);
    })
      .then(() => setSaveError(false))
      .catch(() => setSaveError(true));
    const right = run.right + (correct ? 1 : 0);
    const idx = run.idx + 1;
    if (idx >= run.order.length && right === run.order.length) setDoneNow(d => ({ ...d, [run.level]: true }));
    setRun({ ...run, idx, right });
  }

  const tabs: [Tab, string][] = [
    ['info', t('📖 Info', '📖 Info')],
    ['quiz', t('❓ Quiz', '❓ Quiz')],
  ];

  return (
    <div className="space-y-4">
      <div className="flex bg-white rounded-xl border border-gray-200 p-0.5 text-sm">
        {tabs.map(([id, name]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${tab === id ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-800'}`}
          >
            {name}
          </button>
        ))}
      </div>

      {tab === 'info' && (
        <div className="space-y-3">
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
            {text.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-gray-800">{p}</p>
            ))}
            {sourceUrl && (
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-block pt-1 text-xs font-medium text-sky-700 hover:text-sky-800">
                {t('More on Wikipedia ↗', 'Mehr bei Wikipedia ↗')}
              </a>
            )}
          </article>
          <button
            onClick={() => setTab('quiz')}
            className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
          >
            {t('Test yourself →', 'Wissen testen →')}
          </button>
        </div>
      )}

      {tab === 'quiz' && !run && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
          <p className="text-sm font-medium text-gray-700">{t('Choose a level', 'Schwierigkeit wählen')}</p>
          <div className="grid grid-cols-3 gap-2">
            {LEVELS.map(l => (
              <button
                key={l.id}
                onClick={() => setLevel(l.id)}
                className={`py-3 rounded-xl border-2 text-sm font-semibold transition-colors ${
                  level === l.id ? 'border-amber-500 bg-amber-50 text-amber-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t(...l.name)}
                <span className={`block text-base ${done(l.id) ? 'text-amber-500' : 'text-gray-200'}`}>★</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => start(level)}
            className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
          >
            {t(`Start · ${quiz[level].length} questions`, `Los geht’s · ${quiz[level].length} Fragen`)} →
          </button>
          <p className="text-xs text-gray-400">
            {t('A star means: every question of this level answered correctly.', 'Ein Stern heißt: alle Fragen dieser Stufe richtig beantwortet.')}
          </p>
        </div>
      )}

      {tab === 'quiz' && run && card && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="font-medium text-gray-600">{t(...LEVELS.find(l => l.id === run.level)!.name)}</span>
            <div className="flex items-center gap-3">
              <span className="tabular-nums">{run.idx + 1} / {run.order.length}</span>
              <button onClick={() => setRun(null)} className="hover:text-gray-600">{t('Finish', 'Beenden')}</button>
            </div>
          </div>
          <QuizCard
            key={`${run.level}-${current}-${run.idx}`}
            card={{ id: questionId(code, path, run.level, current!), q: card[0], a: card[1], ...(card[3] ? { info: card[3] } : {}) }}
            label={t(...LEVELS.find(l => l.id === run.level)!.name)}
            options={options}
            onResult={answer}
          />
        </div>
      )}

      {tab === 'quiz' && run && !card && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center space-y-4">
          <p className="text-4xl">{run.right === run.order.length ? '⭐' : '💪'}</p>
          <p className="font-semibold text-gray-900">
            {run.right} / {run.order.length} {t('correct', 'richtig')}
          </p>
          {run.right === run.order.length && (
            <p className="text-sm text-amber-700">{t('Level complete — star earned!', 'Stufe geschafft – Stern verdient!')}</p>
          )}
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => start(run.level)} className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm">
              {t('Again', 'Nochmal')}
            </button>
            {run.level !== 'schwer' && (
              <button
                onClick={() => start(run.level === 'leicht' ? 'mittel' : 'schwer')}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold"
              >
                {t('Next level', 'Nächste Stufe')} →
              </button>
            )}
            {next && (
              <Link href={next.href} className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold">
                {next.title} →
              </Link>
            )}
          </div>
        </div>
      )}

      {saveError && (
        <p className="text-sm text-red-600">⚠ {t('Progress could not be saved.', 'Der Fortschritt konnte nicht gespeichert werden.')}</p>
      )}
    </div>
  );
}
