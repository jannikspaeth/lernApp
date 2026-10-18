'use client';

import { useState } from 'react';
import type { ConjugationExercise, ConjugationRecord } from '@/lib/types';
import { upsertConjugationAttempt, recordMistakes } from '@/lib/storage';
import { conjugationMatches as answersMatch } from '@/lib/conjugation-match';
import { verbMistake } from '@/lib/mistakes';
import { spokenForm } from '@/lib/speech';
import type { Lang } from '@/lib/lang';
import SpeakButton from '@/components/SpeakButton';
import { useT, useUiLang, tenseName } from '@/lib/ui-lang';
import FeedbackBar from '@/components/practice/FeedbackBar';
import { Lightbulb, ChevronDown, ChevronUp, Check } from 'lucide-react';

interface Props {
  exercise: ConjugationExercise;
  lang: Lang;
  // Called right away; `saved` resolves with the updated verb records once the
  // result is stored, so the next verb can open without waiting for the network.
  onComplete?: (correct: number, total: number, saved: Promise<ConjugationRecord[]>) => void;
  continueLabel?: string; // the button that saves the result and moves on
}

export default function Conjugation({ exercise, lang, onComplete, continueLabel }: Props) {
  const t = useT();
  const [uiLang] = useUiLang();
  const [answers, setAnswers] = useState<string[][]>(
    exercise.sections.map(s => s.pronouns.map(() => ''))
  );
  const [checked, setChecked] = useState(false);
  // Tense notes can give the answer away: folded until asked for (open after checking).
  const [openNotes, setOpenNotes] = useState<Set<number>>(new Set());
  // Rewrite-to-learn: after checking, the learner retypes each wrong form.
  const [retypes, setRetypes] = useState<string[][]>(
    exercise.sections.map(s => s.pronouns.map(() => ''))
  );
  const [typoForgiven, setTypoForgiven] = useState<boolean[][]>(
    exercise.sections.map(s => s.pronouns.map(() => false))
  );

  const results: boolean[][] = checked
    ? exercise.sections.map((s, si) =>
        s.pronouns.map((_, pi) => answersMatch(answers[si][pi], s.answers[pi]))
      )
    : exercise.sections.map(s => s.pronouns.map(() => false));

  const effectiveResults: boolean[][] = checked
    ? exercise.sections.map((s, si) =>
        s.pronouns.map((_, pi) => results[si][pi] || typoForgiven[si][pi])
      )
    : exercise.sections.map(s => s.pronouns.map(() => false));

  const totalCorrect = effectiveResults.flat().filter(Boolean).length;
  const totalQuestions = exercise.sections.reduce((sum, s) => sum + s.pronouns.length, 0);
  const perfectSections = checked ? effectiveResults.filter(r => r.every(Boolean)).length : 0;

  function retypeOk(si: number, pi: number): boolean {
    return answersMatch(retypes[si][pi], exercise.sections[si].answers[pi]);
  }

  const allWrongHandled = checked && exercise.sections.every((s, si) =>
    s.pronouns.every((_, pi) => results[si][pi] || retypeOk(si, pi) || typoForgiven[si][pi])
  );

  function setAnswer(si: number, pi: number, value: string) {
    setAnswers(prev => {
      const next = prev.map(row => [...row]);
      next[si][pi] = value;
      return next;
    });
  }

  function setRetype(si: number, pi: number, value: string) {
    setRetypes(prev => {
      const next = prev.map(row => [...row]);
      next[si][pi] = value;
      return next;
    });
  }

  function forgiveTypo(si: number, pi: number) {
    setTypoForgiven(prev => {
      const next = prev.map(row => [...row]);
      next[si][pi] = true;
      return next;
    });
  }

  function check() {
    setChecked(true);
  }

  function saveAndContinue() {
    // Wrong forms (not forgiven as typos) go to "My mistakes".
    recordMistakes(
      exercise.sections.flatMap((s, si) =>
        s.pronouns.flatMap((p, pi) =>
          results[si][pi] || typoForgiven[si][pi]
            ? []
            : [verbMistake({
                verb: exercise.verb,
                tense: s.tense,
                tenseLabel: s.tenseName_de,
                pronoun: p,
                answer: s.answers[pi],
                userAnswer: answers[si][pi],
              })],
        ),
      ),
    );
    const saved = upsertConjugationAttempt(
      exercise.verb,
      exercise.sections.map((s, si) => ({
        tense: s.tense,
        tenseName_de: s.tenseName_de,
        pronouns: s.pronouns,
        correctAnswers: s.answers,
        userAnswers: s.pronouns.map((_, pi) =>
          typoForgiven[si][pi] && !results[si][pi] ? s.answers[pi] : answers[si][pi]
        ),
      }))
    );
    onComplete?.(totalCorrect, totalQuestions, saved);
  }

  function reset() {
    setAnswers(exercise.sections.map(s => s.pronouns.map(() => '')));
    setRetypes(exercise.sections.map(s => s.pronouns.map(() => '')));
    setTypoForgiven(exercise.sections.map(s => s.pronouns.map(() => false)));
    setOpenNotes(new Set());
    setChecked(false);
  }

  return (
    <div className="space-y-5">
      {/* Verb header */}
      <div className="bg-surface border border-line rounded-3xl p-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted uppercase tracking-wide font-medium">{t('Verb', 'Verb')}</p>
          <p className="font-display text-4xl text-ink mt-1">{exercise.verb}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted uppercase tracking-wide font-medium">{t('Tenses', 'Zeitformen')}</p>
          <p className="text-sm font-semibold text-accent mt-0.5">{exercise.sections.length}</p>
        </div>
      </div>

      <p className="text-muted text-sm">{uiLang === 'de'
          ? exercise.instruction.replace(/^Conjugate "(.+?)" \((.+?)\): (.+)$/, 'Konjugiere „$1“ ($2): $3')
          : exercise.instruction}</p>

      {/* Tense sections */}
      <div className="space-y-4">
        {exercise.sections.map((section, si) => {
          const sectionResults = checked ? effectiveResults[si] : [];
          const sectionCorrect = sectionResults.filter(Boolean).length;
          const sectionPerfect = checked && sectionResults.every(Boolean);
          const sectionWrong = checked && !sectionPerfect;

          return (
            <div
              key={si}
              className={`rounded-xl border-2 overflow-hidden transition-colors ${
                sectionPerfect
                  ? 'border-good/40'
                  : sectionWrong
                  ? 'border-bad/30'
                  : 'border-line'
              }`}
            >
              {/* Section header */}
              <div
                className={`px-4 py-2.5 flex items-center justify-between ${
                  sectionPerfect
                    ? 'bg-good-soft'
                    : sectionWrong
                    ? 'bg-bad-soft'
                    : 'bg-canvas'
                }`}
              >
                <div>
                  <span className="font-semibold text-ink text-sm">{tenseName(section.tenseName_de, uiLang)}</span>
                  <span className="text-muted text-xs ml-2 italic">{section.tense}</span>
                </div>
                {checked && (
                  <span className="flex items-center gap-2">
                    <SpeakButton
                      lang={lang}
                      text={section.pronouns.map((p, pi) => spokenForm(p, section.answers[pi], lang)).join(', ')}
                    />
                    <span
                      className={`text-xs font-semibold ${
                        sectionPerfect ? 'text-good' : 'text-accent'
                      }`}
                    >
                      {sectionCorrect}/{section.pronouns.length}
                      {sectionPerfect && <Check className="w-4 h-4 inline ml-1 text-green-700" />}
                    </span>
                  </span>
                )}
              </div>

              {/* Pronoun rows */}
              <div className="bg-surface divide-y divide-line-soft">
                {section.pronouns.map((pronoun, pi) => {
                  const isCorrect = checked && effectiveResults[si][pi];
                  const isWrong = checked && !results[si][pi] && !typoForgiven[si][pi];
                  const isTypo = checked && typoForgiven[si][pi] && !results[si][pi];
                  const target = section.answers[pi];
                  const retyped = retypeOk(si, pi);
                  return (
                    <div
                      key={pi}
                      className={`px-4 py-2 ${
                        isCorrect ? 'bg-good-soft' : isTypo ? 'bg-warn-soft' : isWrong ? 'bg-bad-soft' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted w-24 sm:w-36 shrink-0 break-words">{pronoun}</span>
                        {!checked ? (
                          <input
                            type="text"
                            value={answers[si][pi]}
                            onChange={e => setAnswer(si, pi, e.target.value)}
                            onKeyDown={e => {
                              if (e.key === 'Enter') {
                                const nextPi = pi + 1;
                                const nextSi = si + (nextPi >= section.pronouns.length ? 1 : 0);
                                const actualPi = nextPi >= section.pronouns.length ? 0 : nextPi;
                                if (nextSi < exercise.sections.length) {
                                  const id = `inp-${nextSi}-${actualPi}`;
                                  document.getElementById(id)?.focus();
                                }
                              }
                            }}
                            id={`inp-${si}-${pi}`}
                            placeholder="..."
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck={false}
                            className="flex-1 min-w-0 border-b bg-transparent text-base sm:text-sm transition-colors border-line focus:border-accent text-ink"
                          />
                        ) : (
                          // Checked: plain text instead of a disabled input — phones grey
                          // disabled inputs out and squeeze them next to the answer.
                          <div className="flex-1 min-w-0 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-base sm:text-sm [overflow-wrap:anywhere]">
                            {isWrong ? (
                              <>
                                <span className="text-bad line-through decoration-bad/60">
                                  {answers[si][pi].trim() || '—'}
                                </span>
                                <span className="font-semibold text-good">→ {target}</span>
                              </>
                            ) : (
                              <span className="font-medium text-good">
                                {answers[si][pi].trim()}
                                {isTypo && <span className="text-muted font-normal"> → {target}</span>}
                              </span>
                            )}
                            {isTypo && (
                              <span className="text-xs text-warn font-medium">{t('typo', 'Tippfehler')}</span>
                            )}
                          </div>
                        )}
                      </div>

                      {isWrong && (
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-2 gap-y-1 mt-1.5 sm:pl-[9.75rem]">
                          <span className="w-full sm:w-auto text-xs text-warn shrink-0">{t('Rewrite to learn:', 'Zum Einprägen abschreiben:')}</span>
                          <input
                            type="text"
                            value={retypes[si][pi]}
                            onChange={e => setRetype(si, pi, e.target.value)}
                            placeholder={target}
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck={false}
                            className={`flex-1 min-w-0 border-b bg-transparent text-base sm:text-sm py-0.5 outline-none transition-colors ${
                              retyped
                                ? 'border-good text-good'
                                : 'border-warn/50 text-warn focus:border-warn'
                            }`}
                          />
                          {retyped && <Check className="w-4 h-4 shrink-0 text-good" />}
                          <button
                            type="button"
                            onClick={() => forgiveTypo(si, pi)}
                            disabled={!retyped}
                            className="shrink-0 text-xs font-semibold px-2 py-1 rounded-lg bg-warn-soft text-warn hover:bg-warn-soft disabled:opacity-40 transition-colors"
                          >
                            {t('Typo', 'Tippfehler')}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Notes */}
              {section.notes && (checked || openNotes.has(si) ? (
                <div className="px-4 py-2 bg-warn-soft border-t border-warn/30 text-xs text-warn flex items-start gap-2">
                  <Lightbulb className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span className="flex-1">{section.notes}</span>
                  {!checked && (
                    <button
                      type="button"
                      onClick={() => setOpenNotes(prev => { const n = new Set(prev); n.delete(si); return n; })}
                      aria-label={t('Hide hint', 'Hinweis ausblenden')}
                      className="shrink-0 text-warn hover:text-warn"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpenNotes(prev => new Set(prev).add(si))}
                  className="w-full px-4 py-2 bg-warn-soft/60 border-t border-warn/30 text-xs font-medium text-warn hover:bg-warn-soft flex items-center gap-2 transition-colors"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span className="flex-1 text-left">{t('Show hint', 'Hinweis anzeigen')}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              ))}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      {!checked ? (
        <button
          onClick={check}
          className="w-full h-12 bg-accent hover:bg-accent-strong text-white rounded-full font-semibold transition-colors"
        >
          {t('Check', 'Prüfen')}
        </button>
      ) : (
        <FeedbackBar
          correct={totalCorrect === totalQuestions}
          title={totalCorrect === totalQuestions ? t('Perfect!', 'Perfekt!') : t('Check your mistakes', 'Schau dir die Fehler an')}
          actions={
            <div className="space-y-2 pt-1">
              {!allWrongHandled && (
                <p className="text-xs text-accent-strong text-center">
                  {t(
                    'Rewrite each wrong form above – or tap “Typo” if it was just a slip.',
                    'Schreib jede falsche Form oben ab – oder tippe auf „Tippfehler“, wenn es nur ein Vertipper war.',
                  )}
                </p>
              )}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={reset}
                  className="px-4 h-12 rounded-full border-2 border-line text-ink text-sm font-semibold hover:bg-surface/60 transition-colors"
                >
                  {t('Try again', 'Nochmal')}
                </button>
                <button
                  type="button"
                  onClick={saveAndContinue}
                  disabled={!allWrongHandled}
                  className={`flex-1 h-12 rounded-full text-white font-semibold disabled:opacity-40 transition-colors ${
                    totalCorrect === totalQuestions ? 'bg-good hover:bg-good/90' : 'bg-bad hover:bg-bad/90'
                  }`}
                >
                  {continueLabel ?? t('Continue', 'Weiter')}
                </button>
              </div>
            </div>
          }
        >
          <p className="text-sm">
            <strong>{totalCorrect}/{totalQuestions}</strong> {t('forms correct', 'Formen richtig')} ·{' '}
            <strong>{perfectSections}/{exercise.sections.length}</strong> {t('tenses perfect', 'Zeitformen fehlerfrei')}
          </p>
        </FeedbackBar>
      )}
    </div>
  );
}
