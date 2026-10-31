'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { useT } from '@/lib/ui-lang';
import { useWissenProgress } from '@/components/laender/EventProgress';
import { recordGeoBest } from '@/lib/storage';
import { betterGeoBest, type GeoBest } from '@/lib/wissen/progress';

export interface QuizRow { id: string; title: string; blurb: string; total: number; seconds: number; section: string; art: string[]; cover?: string | null }

const LOCAL_KEY = 'lernapp_geo_best';

export function readLocalBests(): Record<string, GeoBest> {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) ?? '{}'); } catch { return {}; }
}
export function writeLocalBest(id: string, b: GeoBest) {
  try {
    const all = readLocalBests();
    if (betterGeoBest(all[id], b)) localStorage.setItem(LOCAL_KEY, JSON.stringify({ ...all, [id]: b }));
  } catch { /* storage unavailable */ }
}

// Best runs: from the account; results that only exist on this device (older runs) are moved there.
export function useBests(): Record<string, GeoBest> {
  const prog = useWissenProgress();
  const [local, setLocal] = useState<Record<string, GeoBest>>({});
  const moved = useRef(false);
  useEffect(() => setLocal(readLocalBests()), []);
  useEffect(() => {
    if (!prog || moved.current) return;
    moved.current = true;
    for (const [id, b] of Object.entries(readLocalBests())) {
      if (betterGeoBest(prog.geo?.[id], b)) recordGeoBest(id, b).catch(() => {});
    }
  }, [prog]);
  const out: Record<string, GeoBest> = { ...local };
  for (const [id, b] of Object.entries(prog?.geo ?? {})) if (betterGeoBest(out[id], b) || !out[id]) out[id] = b;
  return out;
}

const TINTS = ['from-emerald-600 to-teal-800', 'from-sky-600 to-blue-800', 'from-violet-600 to-purple-800', 'from-amber-600 to-orange-800', 'from-rose-600 to-red-800', 'from-slate-600 to-slate-800'];

function Badge({ b }: { b?: GeoBest }) {
  if (!b) return null;
  const perfect = b.solved === b.total;
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold tabular-nums rounded-full px-2 py-0.5 ${perfect ? 'bg-good text-white' : 'bg-black/45 text-white backdrop-blur-sm'}`}>
      {perfect && <Icon name="check" size={11} strokeWidth={2.5} />}
      {b.solved}/{b.total}
    </span>
  );
}

// Quizzes of a category: a tile each (picture mosaic, title, best run); long runs of similar quizzes become compact chips.
export default function QuizList({ rows, compactAll = false, base = '/geografie/quiz' }: { rows: QuizRow[]; tint?: string; compactAll?: boolean; base?: string }) {
  const t = useT();
  const best = useBests();
  const sections = [...new Set(rows.map(r => r.section))];
  return (
    <div className="space-y-8">
      {sections.map((sec, si) => {
        const list = rows.filter(r => r.section === sec);
        const done = list.filter(r => best[r.id] && best[r.id].solved === best[r.id].total).length;
        const compact = compactAll || list.length > 14;
        return (
          <section key={sec} className="space-y-3">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-lg font-bold text-ink tracking-tight">{sec}</h2>
              <p className="text-[13px] text-muted tabular-nums">{done}/{list.length}</p>
            </div>
            {compact ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {list.map(r => {
                  const b = best[r.id];
                  const perfect = b && b.solved === b.total;
                  return (
                    <Link key={r.id} href={`${base}/${r.id}`} className="flex items-center gap-2 bg-surface rounded-xl border border-line px-3 py-2.5 hover:border-accent/40 transition-colors">
                      {r.art[0] && (
                        // eslint-disable-next-line @next/next/no-img-element -- local SVG flag
                        <img src={r.art[0]} alt="" loading="lazy" className="h-4 w-6 object-cover rounded-sm border border-line shrink-0" />
                      )}
                      <span className="text-[13px] text-ink truncate flex-1">{r.title.replace(/^Nachbarländer von /, '')}</span>
                      {b && <span className={`text-[11px] font-semibold tabular-nums ${perfect ? 'text-good' : 'text-muted'}`}>{perfect ? '✓' : `${b.solved}/${b.total}`}</span>}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {list.map((r, i) => {
                  const b = best[r.id];
                  const pct = b ? Math.round((b.solved / b.total) * 100) : 0;
                  return (
                    <Link
                      key={r.id}
                      href={`${base}/${r.id}`}
                      className="group flex flex-col bg-surface rounded-2xl border border-line overflow-hidden hover:border-accent/40 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <div className={`relative aspect-[16/10] bg-linear-to-br ${TINTS[(si + i) % TINTS.length]}`}>
                        {r.art.length >= 4 && (r.id.startsWith('umrisse') || r.id === 'wappen' || r.id === 'satellitenbilder' || r.id.startsWith('flaggen')) ? (
                          <div className="absolute inset-0 grid grid-cols-4 bg-white dark:bg-slate-800">
                            {r.art.slice(0, 4).map(src => (
                              // eslint-disable-next-line @next/next/no-img-element -- local SVG/JPG files
                              <img key={src} src={src} alt="" loading="lazy" className={`w-full h-full ${r.id.startsWith('flaggen') ? 'object-cover' : 'object-contain p-1.5'}`} />
                            ))}
                          </div>
                        ) : r.cover ? (
                          // eslint-disable-next-line @next/next/no-img-element -- local photo
                          <img src={r.cover} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                        ) : (
                          <span className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <span className="text-5xl font-bold tabular-nums leading-none text-white/90">{r.total}</span>
                            <span className="text-[11px] uppercase tracking-wider text-white/70 mt-1.5">{t('answers', 'Antworten')}</span>
                          </span>
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />
                        <div className="absolute top-2 right-2"><Badge b={b} /></div>
                      </div>
                      <div className="p-3 space-y-1.5 flex-1">
                        <p className="font-semibold text-[15px] text-ink leading-snug text-balance">{r.title}</p>
                        <p className="text-[12px] text-muted tabular-nums">{r.total} {t('answers', 'Antworten')} · {Math.max(1, Math.round(r.seconds / 60))} min</p>
                        <div className="h-1 rounded-full bg-line overflow-hidden"><div className="h-full bg-accent rounded-full" style={{ width: `${pct}%` }} /></div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
