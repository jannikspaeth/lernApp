'use client';

import { useState } from 'react';
import type { Card } from '@/lib/wissen';
import { useT } from '@/lib/ui-lang';

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
    <div className="bg-surface rounded-2xl border border-line p-5 space-y-4">
      <p className="text-xs text-muted uppercase tracking-wide text-center">{label}</p>
      {card.img && (
        // eslint-disable-next-line @next/next/no-img-element -- local SVG flags, no optimisation needed
        <img src={card.img} alt="" className="mx-auto h-28 max-w-full rounded-md border border-line" />
      )}
      <p className="text-lg text-ink leading-relaxed text-center font-medium">{card.q}</p>
      {revealed ? (
        <>
          <div className="rounded-xl bg-canvas p-4 text-center">
            <p className="text-xl font-bold text-ink">{card.a}</p>
            {card.info && <p className="text-sm text-muted mt-1">{card.info}</p>}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onResult(false)}
              className="py-3 border-2 border-red-200 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-semibold transition-colors"
            >
              ✗ {t("Didn't know", 'Nicht gewusst')}
            </button>
            <button
              onClick={() => onResult(true)}
              className="py-3 border-2 border-green-200 bg-green-50 hover:bg-green-100 text-green-800 rounded-xl font-semibold transition-colors"
            >
              ✓ {t('Knew it', 'Gewusst')}
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="w-full py-3 bg-ink hover:bg-ink/85 text-white rounded-xl font-semibold transition-colors"
        >
          {t('Show answer', 'Antwort zeigen')}
        </button>
      )}
    </div>
  );
}
