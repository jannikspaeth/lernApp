'use client';

import { QuizDirection, quizDirections } from '@/lib/use-quiz-direction';
import { useT } from '@/lib/ui-lang';

export default function QuizDirectionToggle({
  value,
  onChange,
  flag,
}: {
  value: QuizDirection;
  onChange: (d: QuizDirection) => void;
  flag: string; // target language flag
}) {
  const t = useT();
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted shrink-0">{t('Ask', 'Abfrage')}</span>
      <div className="flex gap-1">
        {quizDirections(flag, t('Mixed', 'Gemischt')).map(([id, label]) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
              value === id ? 'bg-accent text-white' : 'bg-line-soft text-muted hover:bg-line'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
