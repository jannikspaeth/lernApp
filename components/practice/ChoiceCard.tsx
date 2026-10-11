'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Lang } from '@/lib/lang';
import SpeakButton from '@/components/SpeakButton';
import FeedbackBar from './FeedbackBar';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// One grammar cloze with answer options: tap an option → instant feedback → Next.
export default function ChoiceCard({
  label,
  before,
  after,
  answer,
  options,
  hint,
  lang,
  onResult,
}: {
  label: string;
  before: string;
  after: string;
  answer: string;
  options: string[];
  hint?: string;
  lang: Lang;
  onResult: (correct: boolean, userAnswer: string) => void;
}) {
  const shuffled = useMemo(() => shuffle(options), [options]);
  const [picked, setPicked] = useState<string | null>(null);
  const correct = picked === answer;

  // After picking, a new Enter press moves on (see TypeCard for why not autoFocus).
  useEffect(() => {
    if (picked === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.repeat) {
        e.preventDefault();
        onResult(picked === answer, picked);
      }
    };
    // Register on the next tick: React runs this effect while the Enter that
    // checked the answer is still bubbling, so a listener added right away
    // would receive that same key press and skip the result.
    const t = setTimeout(() => window.addEventListener('keydown', onKey), 0);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [picked, answer, onResult]);

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-sm p-5 space-y-4">
      <p className="text-xs font-semibold text-muted uppercase tracking-wider text-center">{label}</p>
      <p className="text-lg text-ink leading-relaxed text-center">
        {before}
        {picked ? (
          <span className={`font-bold ${correct ? 'text-good' : 'text-bad'}`}>{answer}</span>
        ) : (
          <span className="font-semibold text-muted">＿＿</span>
        )}
        {after}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {shuffled.map(opt => {
          const isAnswer = picked !== null && opt === answer;
          const isWrongPick = picked === opt && opt !== answer;
          return (
            <button
              key={opt}
              disabled={picked !== null}
              onClick={() => setPicked(opt)}
              className={`px-3 py-3 rounded-xl border-2 text-base font-medium transition-all ${
                isAnswer
                  ? 'border-good bg-good-soft text-good'
                  : isWrongPick
                  ? 'border-bad/60 bg-bad-soft text-bad'
                  : 'border-line bg-surface text-ink hover:border-line hover:bg-canvas disabled:hover:bg-surface'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <FeedbackBar correct={correct} onNext={() => onResult(correct, picked)}>
          <p className="text-base flex items-center justify-between gap-2">
            <span>
              {before}<strong>{answer}</strong>{after}
              {hint && <span className="block text-sm text-muted mt-0.5">{hint}</span>}
            </span>
            <SpeakButton text={`${before}${answer}${after}`} lang={lang} />
          </p>
        </FeedbackBar>
      )}
    </div>
  );
}
