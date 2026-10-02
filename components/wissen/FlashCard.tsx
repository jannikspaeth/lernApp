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
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <p className="text-xs text-gray-400 uppercase tracking-wide text-center">{label}</p>
      {card.img && (
        // eslint-disable-next-line @next/next/no-img-element -- local SVG flags, no optimisation needed
        <img src={card.img} alt="" className="mx-auto h-28 max-w-full rounded-md border border-gray-200 shadow-sm" />
      )}
      <p className="text-lg text-gray-900 leading-relaxed text-center font-medium">{card.q}</p>
      {revealed ? (
        <>
          <div className="rounded-xl bg-gray-50 p-4 text-center">
            <p className="text-xl font-bold text-gray-900">{card.a}</p>
            {card.info && <p className="text-sm text-gray-500 mt-1">{card.info}</p>}
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
          className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
        >
          {t('Show answer', 'Antwort zeigen')}
        </button>
      )}
    </div>
  );
}
