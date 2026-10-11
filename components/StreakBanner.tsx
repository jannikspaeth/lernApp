'use client';

import { Flame } from 'lucide-react';
import { useT } from '@/lib/ui-lang';

interface Props {
  streak: number;
  todayCount: number;
  goal: number;
}

export default function StreakBanner({ streak, todayCount, goal }: Props) {
  const pct = goal > 0 ? Math.min(100, Math.round((todayCount / goal) * 100)) : 0;
  const reached = todayCount >= goal;
  const t = useT();

  return (
    <div className="bg-surface rounded-xl border border-line shadow-sm p-4 flex items-center gap-4">
      <div className="flex items-center gap-2 shrink-0">
        <Flame className={`w-6 h-6 ${streak > 0 ? 'text-accent' : 'text-faint'}`} />
        <div className="leading-tight">
          <p className="text-lg font-bold text-ink tabular-nums">{streak}</p>
          <p className="text-xs text-muted -mt-0.5">{streak === 1 ? t('day', 'Tag') : t('days', 'Tage')}</p>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-muted">{t('Today’s goal', 'Tagesziel')}</span>
          <span className="text-xs font-semibold tabular-nums text-ink">
            {todayCount} / {goal}
          </span>
        </div>
        <div className="h-2 bg-line-soft rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${reached ? 'bg-good' : 'bg-accent'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
