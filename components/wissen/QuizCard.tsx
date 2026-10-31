'use client';

import { useEffect, useState } from 'react';
import type { Card } from '@/lib/wissen';
import { useT } from '@/lib/ui-lang';
import Icon from '@/components/Icon';
import AudioClip from '@/components/musik/AudioClip';

// One knowledge question with four options: tap (or key 1–4) → feedback (+ background info) → Next (or Enter).
export default function QuizCard({
  card,
  label,
  options,
  onResult,
}: {
  card: Card;
  label: string;
  options: string[];
  onResult: (correct: boolean) => void;
}) {
  // Options are shuffled by the caller; keep the first order for this card.
  const [shown] = useState(options);
  const [picked, setPicked] = useState<string | null>(null);
  const t = useT();
  const correct = picked === card.a;

  // Before picking: keys 1–4 choose an option.
  useEffect(() => {
    if (picked !== null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
      const n = Number(e.key);
      if (n >= 1 && n <= shown.length) {
        e.preventDefault();
        setPicked(shown[n - 1]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [picked, shown]);

  // After picking, Enter moves on (registered a tick later, see ChoiceCard).
  useEffect(() => {
    if (picked === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.repeat) {
        e.preventDefault();
        onResult(picked === card.a);
      }
    };
    const id = setTimeout(() => window.addEventListener('keydown', onKey), 0);
    return () => {
      clearTimeout(id);
      window.removeEventListener('keydown', onKey);
    };
  }, [picked, card.a, onResult]);

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <span className="inline-flex items-center h-6 px-2 rounded-md bg-surface border border-line text-xs font-semibold text-muted">{label}</span>
        {card.img && (
          // eslint-disable-next-line @next/next/no-img-element -- local files (flags, artworks), no optimisation needed
          <img
            src={card.img}
            alt=""
            className={/^\/(kunst|literatur|musik|philosophie|wissenschaft|politik|geo|umriss)\//.test(card.img) ? 'max-h-80 max-w-full rounded-lg border border-line bg-surface object-contain' : 'h-28 max-w-full rounded-lg border border-line'}
          />
        )}
        {card.audio && <AudioClip sources={card.audio.sources} start={card.audio.start} />}
        <p className="text-xl md:text-[22px] text-ink leading-snug font-semibold tracking-tight">{card.q}</p>
      </div>
      <div className="grid gap-2">
        {shown.map((opt, i) => {
          const isAnswer = picked !== null && opt === card.a;
          const isWrongPick = picked === opt && opt !== card.a;
          return (
            <button
              key={opt}
              disabled={picked !== null}
              onClick={() => setPicked(opt)}
              className={`min-h-13 px-3.5 py-3 rounded-xl border text-[15px] font-medium text-left flex items-center gap-3 transition-colors ${
                isAnswer
                  ? 'border-good bg-good-soft text-good'
                  : isWrongPick
                  ? 'border-bad bg-bad-soft text-bad'
                  : picked !== null
                  ? 'border-line bg-surface text-muted'
                  : 'border-line bg-surface text-ink hover:border-accent/50 hover:bg-accent-soft/40'
              }`}
            >
              <span
                className={`hidden sm:flex w-6 h-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold ${
                  isAnswer ? 'border-good bg-surface' : isWrongPick ? 'border-bad bg-surface' : 'border-line bg-canvas text-muted'
                }`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="flex-1">{opt}</span>
              {isAnswer && <Icon name="check" size={20} strokeWidth={2} />}
              {isWrongPick && <Icon name="x" size={20} strokeWidth={2} />}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <>
          <div className="rounded-xl border border-line bg-surface p-4 text-sm" role="status">
            <p className={`font-semibold ${correct ? 'text-good' : 'text-bad'}`}>
              {correct ? t('Correct', 'Richtig') : <>{t('Correct answer', 'Richtige Antwort')}: {card.a}</>}
            </p>
            {card.info && <p className="text-muted mt-1 leading-relaxed">{card.info}</p>}
            {card.credit && <p className="text-xs text-faint mt-2">{card.credit}</p>}
            {card.source && (
              <a href={card.source.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline mt-2">
                {card.source.label} <Icon name="chevronRight" size={14} />
              </a>
            )}
          </div>
          <button
            onClick={() => onResult(correct)}
            autoFocus
            className="w-full h-12 flex items-center justify-center gap-2 bg-ink hover:bg-ink/85 text-canvas rounded-xl font-semibold transition-colors"
          >
            {t('Next', 'Weiter')}
            <span className="hidden sm:inline text-canvas/60 font-medium text-sm">↵</span>
          </button>
        </>
      )}
    </div>
  );
}
