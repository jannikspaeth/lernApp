'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { matchesName } from '@/lib/name-match';
import { PROMI_FIELDS, PROMIS_PER_ROUND, type Promi } from '@/lib/promis';
import Icon from '@/components/Icon';

export interface PromiPicture { src: string; credit: string }

const SEEN_KEY = 'lernapp_promis_seen';

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

// Faces not shown yet come first; once all of a selection were shown, it starts over.
function draw(pool: Promi[]): Promi[] {
  let seen = new Set<string>();
  try { seen = new Set(JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]')); } catch { /* no storage */ }
  const fresh = shuffle(pool.filter(p => !seen.has(p.key)));
  let pick = fresh.slice(0, PROMIS_PER_ROUND);
  if (pick.length < PROMIS_PER_ROUND) {
    for (const p of pool) seen.delete(p.key);
    const taken = new Set(pick.map(p => p.key));
    pick = [...pick, ...shuffle(pool.filter(p => !taken.has(p.key))).slice(0, PROMIS_PER_ROUND - pick.length)];
  }
  for (const p of pick) seen.add(p.key);
  try { localStorage.setItem(SEEN_KEY, JSON.stringify([...seen])); } catch { /* private mode */ }
  return pick;
}

interface Run { items: Promi[]; idx: number; right: boolean[]; shown: boolean }

// Celebrity picture quiz: a photo, type who it is (small typos are fine, the surname alone too).
export default function PromiQuiz({ promis, pictures }: { promis: Promi[]; pictures: Record<string, PromiPicture> }) {
  const t = useT();
  const [field, setField] = useState<string>('');
  const [run, setRun] = useState<Run | null>(null);
  const [value, setValue] = useState('');
  const [wrong, setWrong] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const playable = promis.filter(p => pictures[p.key]);
  const pool = field ? playable.filter(p => p.field === field) : playable;

  useEffect(() => {
    if (!run) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [run]);

  const item = run && run.idx < run.items.length ? run.items[run.idx] : null;
  const score = run?.right.filter(Boolean).length ?? 0;

  function start() {
    setRun({ items: draw(pool), idx: 0, right: [], shown: false });
    setValue('');
    setWrong(false);
    setTimeout(() => input.current?.focus(), 0);
  }

  function check() {
    if (!run || !item || run.shown || !value.trim()) return;
    if (matchesName(value, [item.name, ...item.accepts])) {
      setRun({ ...run, right: [...run.right, true], shown: true });
      setWrong(false);
    } else {
      setWrong(true);
    }
  }

  function reveal() {
    if (!run || run.shown) return;
    setRun({ ...run, right: [...run.right, false], shown: true });
    setWrong(false);
  }

  function next() {
    if (!run) return;
    setRun({ ...run, idx: run.idx + 1, shown: false });
    setValue('');
    setTimeout(() => input.current?.focus(), 0);
  }

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        {!run && (
          <>
            <div className="space-y-3">
              <Link href="/wissen/allgemeinwissen" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
                <Icon name="chevronLeft" size={18} /> {t('General knowledge', 'Allgemeinwissen')}
              </Link>
              <div>
                <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">{t('Who is that?', 'Wer ist das?')}</h1>
                <p className="text-sm text-muted mt-1">
                  {t(
                    `A photo of a celebrity – type the name. Small typos are fine, often the surname alone is enough. ${PROMIS_PER_ROUND} faces per round, new ones first.`,
                    `Ein Foto eines Promis – schreib den Namen hin. Kleine Tippfehler sind egal, oft reicht der Nachname. ${PROMIS_PER_ROUND} Gesichter pro Runde, neue zuerst.`,
                  )}
                </p>
              </div>
            </div>
            <div className="bg-surface rounded-2xl border border-line p-5 space-y-4">
              <div className="flex flex-wrap gap-2">
                {['', ...PROMI_FIELDS].map(f => (
                  <button
                    key={f || 'all'}
                    onClick={() => setField(f)}
                    className={`h-9 px-3.5 rounded-full border text-[14px] font-medium transition-colors ${field === f ? 'border-accent bg-accent text-white' : 'border-line bg-canvas text-ink hover:border-accent/50'}`}
                  >
                    {f || t('All', 'Alle')} <span className={field === f ? 'text-white/80' : 'text-muted'}>{(f ? playable.filter(p => p.field === f) : playable).length}</span>
                  </button>
                ))}
              </div>
              <button onClick={start} disabled={pool.length === 0} className="w-full h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors disabled:opacity-40">
                {t('Start', 'Los geht’s')}
              </button>
            </div>
          </>
        )}

        {run && item && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setRun(null)} aria-label={t('Quit', 'Beenden')} className="w-9 h-9 -ml-1 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-surface">
                <Icon name="x" size={20} />
              </button>
              <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full transition-[width] duration-300" style={{ width: `${Math.round((run.idx / run.items.length) * 100)}%` }} />
              </div>
              <span className="text-[13px] font-semibold text-muted tabular-nums">{run.idx + 1}/{run.items.length} · {score} ✓</span>
            </div>
            <div className="bg-surface rounded-2xl border border-line overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element -- local pictures */}
              <img src={pictures[item.key].src} alt={t('Who is that?', 'Wer ist das?')} className="w-full h-80 md:h-96 object-cover object-top bg-canvas" />
              {run.shown && (
                <div className="p-4 space-y-1">
                  <p className={`text-sm font-semibold ${run.right[run.idx] ? 'text-good' : 'text-bad'}`}>{run.right[run.idx] ? t('Correct', 'Richtig') : t('Solution', 'Auflösung')}</p>
                  <p className="text-2xl font-bold text-ink tracking-tight">{item.name}</p>
                  <p className="text-xs text-faint">{pictures[item.key].credit}</p>
                </div>
              )}
            </div>
            {!run.shown ? (
              <div className="space-y-2">
                <form onSubmit={e => { e.preventDefault(); check(); }} className="flex gap-2">
                  <input
                    ref={input}
                    value={value}
                    onChange={e => { setValue(e.target.value); setWrong(false); }}
                    placeholder={t('Name', 'Name')}
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    className={`flex-1 min-w-0 h-12 px-4 rounded-xl border bg-surface text-ink text-[16px] focus:outline-none ${wrong ? 'border-bad' : 'border-line focus:border-accent'}`}
                  />
                  <button type="submit" className="h-12 px-5 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors">{t('Check', 'Prüfen')}</button>
                </form>
                {wrong && <p className="text-[14px] text-bad">{t('Not quite – try again or show the answer.', 'Nicht ganz – versuch es nochmal oder lass dir die Lösung zeigen.')}</p>}
                <button onClick={reveal} className="w-full h-11 border border-line bg-surface hover:bg-canvas text-muted rounded-xl text-[14px] font-medium transition-colors">
                  {t('I don’t know', 'Weiß ich nicht')}
                </button>
              </div>
            ) : (
              <button onClick={next} autoFocus className="w-full h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors">
                {run.idx + 1 < run.items.length ? t('Next', 'Weiter') : t('See result', 'Zum Ergebnis')}
              </button>
            )}
          </div>
        )}

        {run && !item && (
          <div className="space-y-4">
            <div className="bg-surface rounded-2xl border border-line p-5 text-center space-y-1">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider">{t('Your score', 'Dein Ergebnis')}</p>
              <p className="text-4xl font-bold text-ink tabular-nums">{score}<span className="text-xl text-muted">/{run.items.length}</span></p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {run.items.map((p, i) => (
                <div key={p.key} className={`rounded-xl border overflow-hidden ${run.right[i] ? 'border-good/40' : 'border-bad/40'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- local pictures */}
                  <img src={pictures[p.key].src} alt="" className="w-full h-24 object-cover object-top bg-canvas" />
                  <p className={`px-2 py-1 text-[12px] font-medium leading-tight ${run.right[i] ? 'text-good' : 'text-bad'}`}>{p.name}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              <button onClick={start} className="h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors">{t('Next round', 'Nächste Runde')}</button>
              <button onClick={() => setRun(null)} className="h-12 border border-line bg-surface hover:bg-canvas text-ink rounded-xl font-medium transition-colors">{t('Done', 'Fertig')}</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
