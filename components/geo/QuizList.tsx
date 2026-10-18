'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { useT } from '@/lib/ui-lang';

export interface QuizRow { id: string; title: string; blurb: string; total: number; seconds: number; section: string }
interface Best { solved: number; total: number; seconds: number }

export function useBests(): Record<string, Best> {
  const [b, setB] = useState<Record<string, Best>>({});
  useEffect(() => {
    try { setB(JSON.parse(localStorage.getItem('lernapp_geo_best') ?? '{}')); } catch { /* none */ }
  }, []);
  return b;
}

// The typed quizzes of a category, grouped by section, with the best result of this device.
export default function QuizList({ rows }: { rows: QuizRow[] }) {
  const t = useT();
  const best = useBests();
  const sections = [...new Set(rows.map(r => r.section))];
  return (
    <div className="space-y-6">
      {sections.map(sec => (
        <section key={sec} className="space-y-2">
          <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">{sec}</h2>
          <div className="bg-surface rounded-2xl border border-line divide-y divide-line-soft overflow-hidden">
            {rows.filter(r => r.section === sec).map(r => {
              const b = best[r.id];
              const perfect = b && b.solved === b.total;
              return (
                <Link key={r.id} href={`/geografie/quiz/${r.id}`} className="flex items-center gap-3 px-4 py-3 hover:bg-canvas transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-ink leading-snug">{r.title}</p>
                    <p className="text-[13px] text-muted mt-0.5 truncate">{r.total} {t('answers', 'Antworten')} · {Math.round(r.seconds / 60)} min</p>
                  </div>
                  {b && (
                    <span className={`text-[12px] font-semibold tabular-nums px-2 py-1 rounded-md ${perfect ? 'bg-good-soft text-good' : 'bg-canvas text-muted border border-line'}`}>
                      {b.solved}/{b.total}
                    </span>
                  )}
                  <Icon name="chevronRight" size={18} className="text-faint" />
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
