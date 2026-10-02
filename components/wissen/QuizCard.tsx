'use client';

import { useEffect, useState } from 'react';
import type { Card } from '@/lib/wissen';
import { useT } from '@/lib/ui-lang';

// One knowledge question with four options: tap → feedback (+ background info) → Next.
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
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <p className="text-xs text-gray-400 uppercase tracking-wide text-center">{label}</p>
      <p className="text-lg text-gray-900 leading-relaxed text-center font-medium">{card.q}</p>
      <div className="grid gap-2">
        {shown.map(opt => {
          const isAnswer = picked !== null && opt === card.a;
          const isWrongPick = picked === opt && opt !== card.a;
          return (
            <button
              key={opt}
              disabled={picked !== null}
              onClick={() => setPicked(opt)}
              className={`px-4 py-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                isAnswer
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : isWrongPick
                  ? 'border-red-400 bg-red-50 text-red-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 disabled:hover:bg-white'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <>
          <div className={`rounded-xl p-3 text-sm ${correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'}`}>
            {correct ? t('✓ Correct', '✓ Richtig') : <>✓ <strong>{card.a}</strong></>}
            {card.info && <p className="text-gray-600 mt-1">{card.info}</p>}
          </div>
          <button
            onClick={() => onResult(correct)}
            className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
          >
            {t('Next →', 'Weiter →')}
          </button>
        </>
      )}
    </div>
  );
}
