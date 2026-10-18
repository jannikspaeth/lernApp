'use client';

import Link from 'next/link';
import { summarize } from '@/lib/wissen/progress';
import { useWissenProgress } from '@/components/laender/EventProgress';
import type { Card } from '@/lib/wissen/types';
import { useBests } from '@/components/geo/QuizList';

export interface CategoryTile {
  key: string;
  href: string;
  index: number;
  title: string;
  sub: string;
  tint: string; // Tailwind gradient classes
  art: string[]; // up to four pictures (flags, outlines) shown as a faint mosaic
  cards: Pick<Card, 'id'>[];
  quizIds?: string[]; // typed quizzes of the category: progress counts perfect runs
}

// Square tiles for the categories of a subject: gradient, picture mosaic, title and progress.
export default function CategoryWall({ tiles }: { tiles: CategoryTile[] }) {
  const prog = useWissenProgress();
  const bests = useBests();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {tiles.map(t => {
        const s = t.quizIds
          ? { mastered: t.quizIds.filter(id => bests[id] && bests[id].solved === bests[id].total).length, total: t.quizIds.length }
          : prog ? summarize(t.cards as Card[], prog) : null;
        const pct = s && s.total ? Math.round((s.mastered / s.total) * 100) : 0;
        return (
          <Link
            key={t.key}
            href={t.href}
            className={`group relative block aspect-square rounded-2xl overflow-hidden border border-line bg-linear-to-br ${t.tint} focus-visible:outline-2 focus-visible:outline-accent`}
          >
            {t.art.length > 0 && (
              <div className="absolute top-3 right-3 grid grid-cols-2 gap-1.5 w-[46%] opacity-90 transition-transform duration-500 group-hover:scale-105" aria-hidden="true">
                {t.art.slice(0, 4).map(src => (
                  // eslint-disable-next-line @next/next/no-img-element -- local SVG files
                  <img key={src} src={src} alt="" loading="lazy" className="aspect-[3/2] w-full object-contain rounded-md bg-white/85 p-0.5" />
                ))}
              </div>
            )}
            <span className="absolute top-3 left-3.5 text-[26px] font-bold leading-none tabular-nums text-white/35" aria-hidden="true">{String(t.index).padStart(2, '0')}</span>
            <div className="absolute inset-x-0 bottom-0 p-3.5 text-white bg-linear-to-t from-black/55 to-transparent pt-10">
              <p className="font-semibold text-[17px] leading-tight tracking-tight text-balance">{t.title}</p>
              <p className="text-[12px] text-white/80 mt-0.5 leading-snug line-clamp-2">{t.sub}</p>
              <div className="flex items-center gap-2 mt-2.5">
                <div className="h-1 flex-1 rounded-full bg-white/25 overflow-hidden">
                  <div className="h-full rounded-full bg-white" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-[11px] font-semibold tabular-nums text-white/90">{s ? `${s.mastered}/${s.total}` : ''}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
