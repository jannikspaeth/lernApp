'use client';

import Link from 'next/link';
import { useBests } from '@/components/geo/QuizList';

export interface CategoryTile {
  key: string;
  href: string;
  index: number;
  title: string;
  sub: string;
  tint: string; // Tailwind gradient classes, shown behind or instead of the picture
  cover?: string | null; // photo filling the tile
  mosaic?: string[]; // flags shown as a full-bleed grid when there is no photo
  quizIds: string[]; // progress counts perfect runs
}

// Square tiles for the categories of Geografie: photo, title and progress (perfect quizzes).
export default function CategoryWall({ tiles }: { tiles: CategoryTile[] }) {
  const bests = useBests();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {tiles.map(t => {
        const done = t.quizIds.filter(id => bests[id] && bests[id].solved === bests[id].total).length;
        const pct = t.quizIds.length ? Math.round((done / t.quizIds.length) * 100) : 0;
        return (
          <Link
            key={t.key}
            href={t.href}
            className={`group relative block aspect-square rounded-2xl overflow-hidden border border-line bg-linear-to-br ${t.tint} focus-visible:outline-2 focus-visible:outline-accent`}
          >
            {t.cover ? (
              // eslint-disable-next-line @next/next/no-img-element -- local photo
              <img src={t.cover} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            ) : t.mosaic ? (
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3" aria-hidden="true">
                {t.mosaic.slice(0, 9).map(src => (
                  // eslint-disable-next-line @next/next/no-img-element -- local SVG flags
                  <img key={src} src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                ))}
              </div>
            ) : null}
            <div className={`absolute inset-0 bg-linear-to-t ${t.cover ? 'from-black/80 via-black/20 to-black/10' : 'from-black/90 via-black/45 to-black/25'}`} />
            <span className="absolute top-3 left-3.5 text-[22px] font-bold leading-none tabular-nums text-white/80 drop-shadow" aria-hidden="true">{String(t.index).padStart(2, '0')}</span>
            {pct > 0 && <span className="absolute top-3 right-3 text-[11px] font-semibold tabular-nums text-white bg-black/45 backdrop-blur-sm rounded-full px-2 py-0.5">{pct} %</span>}
            <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
              <p className="font-semibold text-[17px] leading-tight tracking-tight text-balance">{t.title}</p>
              <p className="text-[12px] text-white/80 mt-0.5 leading-snug">{t.sub}</p>
              <div className="h-1 rounded-full bg-white/25 mt-2.5 overflow-hidden"><div className="h-full rounded-full bg-white" style={{ width: `${pct}%` }} /></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
