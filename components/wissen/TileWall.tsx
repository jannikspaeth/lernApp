'use client';

import Link from 'next/link';
import { LEVELS, questionId } from '@/lib/laender/types';
import { useWissenProgress, type StarItem } from '@/components/laender/EventProgress';
import { useLastVisit } from '@/components/RememberVisit';
import Icon from '@/components/Icon';

export interface Tile {
  key: string;
  href: string;
  title: string;
  sub?: string; // second line, e.g. "8 Epochen · 28 Kapitel"
  cover?: { src: string; alt: string; pos?: 'top' | 'center' }; // picture filling the tile
  flag?: string;
  tint: string; // Tailwind classes of the fallback fill, used while the picture loads or when none exists
  code: string; // progress code (questionId)
  items: StarItem[]; // quizzes below this tile, for the progress
}

// Share of the questions below a tile that were answered correctly at least once.
function share(prog: ReturnType<typeof useWissenProgress>, t: Tile): number | null {
  if (!prog) return null;
  let total = 0;
  let done = 0;
  for (const it of t.items) {
    for (const l of LEVELS) {
      for (let n = 0; n < it.counts[l.id]; n++) {
        total++;
        if ((prog.cards[questionId(t.code, it.path, l.id, n)]?.r ?? 0) > 0) done++;
      }
    }
  }
  return total ? done / total : 0;
}

// Square tiles with a well-known person or work as the picture; the title sits on a dark gradient.
export default function TileWall({ tiles, cols = 'grid-cols-2 md:grid-cols-3' }: { tiles: Tile[]; cols?: string }) {
  const prog = useWissenProgress();
  return (
    <div className={`grid ${cols} gap-3`}>
      {tiles.map(t => {
        const p = share(prog, t);
        const pct = p == null ? null : Math.round(p * 100);
        return (
          <Link
            key={t.key}
            href={t.href}
            className={`group relative block aspect-square rounded-2xl overflow-hidden border border-line ${t.tint} focus-visible:outline-2 focus-visible:outline-accent`}
          >
            {t.cover && (
              // eslint-disable-next-line @next/next/no-img-element -- local portrait and artwork files
              <img
                src={t.cover.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${t.cover.pos === 'center' ? 'object-center' : 'object-top'}`}
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/10" />
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-2">
              {t.flag ? <span className="text-xl leading-none drop-shadow" aria-hidden="true">{t.flag}</span> : <span />}
              {pct != null && pct > 0 && (
                <span className="text-[11px] font-semibold tabular-nums text-white bg-black/45 backdrop-blur-sm rounded-full px-2 py-0.5">{pct} %</span>
              )}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3 text-white">
              <p className="font-semibold text-[17px] leading-tight tracking-tight text-balance">{t.title}</p>
              {t.sub && <p className="text-[12px] text-white/80 mt-0.5 leading-snug">{t.sub}</p>}
              <div className="h-1 rounded-full bg-white/25 mt-2.5 overflow-hidden">
                <div className="h-full rounded-full bg-white" style={{ width: `${pct ?? 0}%` }} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// "Continue" card: the last chapter opened under a given path prefix.
export function ContinueCard({ prefix, label }: { prefix: string; label: string }) {
  const last = useLastVisit();
  if (!last || !last.href.startsWith(prefix)) return null;
  return (
    <Link href={last.href} className="flex items-center gap-3 bg-surface rounded-2xl border border-line p-3.5 hover:border-accent/40 transition-colors">
      <span className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
        <Icon name="arrowRight" size={20} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-muted">{label}</p>
        <p className="font-semibold text-ink truncate">{last.title}</p>
        <p className="text-[13px] text-muted truncate">{last.context}</p>
      </div>
      <Icon name="chevronRight" size={18} className="text-faint" />
    </Link>
  );
}
