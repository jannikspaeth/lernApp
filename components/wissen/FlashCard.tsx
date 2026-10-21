'use client';

import { useState } from 'react';
import type { Card } from '@/lib/wissen';
import { useT } from '@/lib/ui-lang';
import Icon from '@/components/Icon';

// Classic flashcard: think of the answer, reveal it, say honestly whether you knew it.
export default function FlashCard({
  card,
  label,
  onResult,
}: {
  card: Card;
  label: string;
  onResult: (correct: boolean) => void;
}) {
  const [revealed, setRevealed] = useState(false);
  const t = useT();

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <span className="inline-flex items-center h-6 px-2 rounded-md bg-surface border border-line text-xs font-semibold text-muted">{label}</span>
        {card.img && (
          // eslint-disable-next-line @next/next/no-img-element -- local SVG flags, no optimisation needed
          <img src={card.img} alt="" className={/^\/(kunst|literatur|musik|philosophie|wissenschaft|geo|umriss)\//.test(card.img) ? 'max-h-72 max-w-full rounded-lg border border-line bg-surface object-contain' : 'h-28 max-w-full rounded-lg border border-line'} />
        )}
        <p className="text-xl md:text-[22px] text-ink leading-snug font-semibold tracking-tight">{card.q}</p>
      </div>
      {revealed ? (
        <>
          <div className="rounded-2xl bg-surface border border-line p-5" role="status">
            <p className="text-xl font-bold text-ink">{card.a}</p>
            {card.info && <p className="text-sm text-muted mt-1.5 leading-relaxed">{card.info}</p>}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onResult(false)}
              className="h-12 border border-bad/30 bg-surface hover:bg-bad-soft text-bad rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icon name="x" size={18} strokeWidth={2} /> {t("Didn't know", 'Nicht gewusst')}
            </button>
            <button
              onClick={() => onResult(true)}
              className="h-12 border border-good/30 bg-surface hover:bg-good-soft text-good rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icon name="check" size={18} strokeWidth={2} /> {t('Knew it', 'Gewusst')}
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="w-full h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors"
        >
          {t('Show answer', 'Antwort zeigen')}
        </button>
      )}
    </div>
  );
}
