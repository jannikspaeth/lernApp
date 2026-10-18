'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { normName } from '@/lib/welt';
import { useT } from '@/lib/ui-lang';
import type { GeoQuiz } from '@/lib/geografie/quizzes';

type Phase = 'ready' | 'running' | 'done';
const BEST_KEY = 'lernapp_geo_best';

interface Best { solved: number; total: number; seconds: number }
function readBest(id: string): Best | null {
  try { return (JSON.parse(localStorage.getItem(BEST_KEY) ?? '{}') as Record<string, Best>)[id] ?? null; } catch { return null; }
}
function saveBest(id: string, b: Best): boolean {
  try {
    const all = JSON.parse(localStorage.getItem(BEST_KEY) ?? '{}') as Record<string, Best>;
    const old = all[id];
    if (old && (old.solved > b.solved || (old.solved === b.solved && old.seconds <= b.seconds))) return false;
    localStorage.setItem(BEST_KEY, JSON.stringify({ ...all, [id]: b }));
    return true;
  } catch { return false; }
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.max(0, s) % 60).padStart(2, '0')}`;

// A typed quiz in the style of Jetpunk: type any answer, correct ones fill their cell; timer, counter, "give up".
export default function QuizRunner({ quiz, backHref, backLabel }: { quiz: GeoQuiz; backHref: string; backLabel: string }) {
  const t = useT();
  const [phase, setPhase] = useState<Phase>('ready');
  const [solved, setSolved] = useState<Set<number>>(new Set());
  const [value, setValue] = useState('');
  const [elapsed, setElapsed] = useState(0);
  const [shake, setShake] = useState(false);
  const [best, setBest] = useState<Best | null>(null);
  const [newBest, setNewBest] = useState(false);
  const startAt = useRef(0);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => setBest(readBest(quiz.id)), [quiz.id]);

  // Normalised spellings per item.
  const keys = useMemo(() => quiz.items.map(i => [i.answer, ...i.accepts].map(normName).filter(Boolean)), [quiz]);

  useEffect(() => {
    if (phase !== 'running') return;
    const id = setInterval(() => {
      const e = Math.floor((Date.now() - startAt.current) / 1000);
      setElapsed(e);
      if (e >= quiz.seconds) finish();
    }, 250);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- finish reads the latest state through refs below
  }, [phase, quiz.seconds]);

  const solvedRef = useRef(solved);
  solvedRef.current = solved;

  function start() {
    startAt.current = Date.now();
    setElapsed(0);
    setSolved(new Set());
    setValue('');
    setNewBest(false);
    setPhase('running');
    setTimeout(() => input.current?.focus(), 0);
  }

  function finish() {
    const e = Math.min(quiz.seconds, Math.floor((Date.now() - startAt.current) / 1000));
    setElapsed(e);
    setPhase('done');
    const b = { solved: solvedRef.current.size, total: quiz.items.length, seconds: e };
    if (b.solved > 0 && saveBest(quiz.id, b)) { setNewBest(true); setBest(b); }
  }

  // Type: an exact match fills every cell with that answer at once. Names that begin another name
  // ("Niger" / "Nigeria", "Guinea" / "Guinea-Bissau") wait for Enter.
  function submit(raw: string, enter: boolean) {
    const v = normName(raw);
    if (!v) return;
    const open = quiz.items.map((_, i) => i).filter(i => !solved.has(i));
    const hits = open.filter(i => keys[i].includes(v));
    if (hits.length === 0) {
      if (enter) { setShake(true); setTimeout(() => setShake(false), 300); }
      return;
    }
    const longer = open.some(i => keys[i].some(k => k !== v && k.startsWith(v)));
    if (longer && !enter) return;
    const next = new Set(solved);
    for (const i of hits) next.add(i);
    setSolved(next);
    solvedRef.current = next;
    setValue('');
    if (next.size === quiz.items.length) setTimeout(finish, 0);
  }

  const total = quiz.items.length;
  const left = Math.max(0, quiz.seconds - elapsed);
  const running = phase === 'running';
  const done = phase === 'done';

  const cell = (i: number, className = '') => {
    const ok = solved.has(i);
    const missed = done && !ok;
    return (
      <span
        className={`flex items-center min-h-9 px-3 rounded-lg border text-[14px] font-medium ${
          ok ? 'border-good/40 bg-good-soft text-good' : missed ? 'border-bad/30 bg-bad-soft text-bad' : 'border-line bg-surface text-transparent select-none'
        } ${className}`}
      >
        {ok || missed ? quiz.items[i].answer : '·'}
      </span>
    );
  };

  const groups = useMemo(() => {
    const map = new Map<string, number[]>();
    quiz.items.forEach((it, i) => { const g = it.group ?? ''; map.set(g, [...(map.get(g) ?? []), i]); });
    return [...map.entries()];
  }, [quiz]);

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-3xl mx-auto px-5 pt-4 md:pt-8 space-y-4">
        <Link href={backHref} className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
          <Icon name="chevronLeft" size={18} /> {backLabel}
        </Link>
        <div>
          <h1 className="text-[26px] md:text-3xl font-bold text-ink tracking-tight leading-tight">{quiz.title}</h1>
          <p className="text-muted text-sm mt-1">{quiz.blurb}</p>
        </div>

        <div className="sticky top-0 z-30 -mx-5 px-5 py-3 bg-canvas/95 backdrop-blur border-b border-line space-y-2.5">
          <div className="flex items-center gap-3">
            <input
              ref={input}
              value={value}
              disabled={!running}
              onChange={e => { setValue(e.target.value); submit(e.target.value, false); }}
              onKeyDown={e => { if (e.key === 'Enter') submit(value, true); }}
              placeholder={running ? t('Type an answer…', 'Antwort eintippen …') : t('Press Start', 'Start drücken')}
              autoCapitalize="off" autoCorrect="off" autoComplete="off" spellCheck={false}
              className={`flex-1 min-w-0 h-12 px-4 rounded-xl border bg-surface text-base text-ink focus:outline-none focus:border-accent disabled:opacity-60 ${shake ? 'border-bad' : 'border-line'}`}
            />
            <div className="text-right tabular-nums shrink-0">
              <p className="text-xl font-bold text-ink leading-none">{solved.size} / {total}</p>
              <p className={`text-[13px] mt-1 ${running && left <= 15 ? 'text-bad font-semibold' : 'text-muted'}`}>{fmt(running || done ? left : quiz.seconds)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {phase === 'ready' && (
              <button onClick={start} className="h-10 px-5 bg-accent hover:bg-accent-strong text-white rounded-xl text-sm font-semibold">{t('Start', 'Start')}</button>
            )}
            {running && (
              <button onClick={finish} className="h-10 px-4 border border-line hover:bg-surface text-ink rounded-xl text-sm font-medium">{t('Give up', 'Aufgeben')}</button>
            )}
            {done && (
              <button onClick={start} className="h-10 px-5 bg-accent hover:bg-accent-strong text-white rounded-xl text-sm font-semibold">{t('Again', 'Nochmal')}</button>
            )}
            <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full transition-[width]" style={{ width: `${(solved.size / total) * 100}%` }} />
            </div>
            {best && !done && <span className="text-[12px] text-muted tabular-nums shrink-0">{t('Best', 'Bestwert')} {best.solved}/{best.total}</span>}
          </div>
        </div>

        {done && (
          <div className="rounded-2xl border border-line bg-surface p-5 text-center space-y-1">
            <p className="text-3xl font-bold text-ink tabular-nums">{solved.size} / {total}</p>
            <p className="text-sm text-muted">
              {Math.round((solved.size / total) * 100)} % · {t('time', 'Zeit')} {fmt(elapsed)}
              {solved.size === total ? ` · ${t('perfect!', 'perfekt!')}` : ''}
            </p>
            {newBest && <p className="text-sm font-semibold text-good">{t('New best!', 'Neuer Bestwert!')}</p>}
          </div>
        )}

        {quiz.mode === 'list' && (
          <div className="space-y-4">
            {groups.map(([g, idx]) => (
              <section key={g} className="space-y-2">
                {g && (
                  <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">
                    {g} <span className="tabular-nums normal-case">· {idx.filter(i => solved.has(i)).length}/{idx.length}</span>
                  </h2>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{idx.map(i => <div key={i}>{cell(i)}</div>)}</div>
              </section>
            ))}
          </div>
        )}

        {quiz.mode === 'grid' && (
          <div className="bg-surface rounded-2xl border border-line divide-y divide-line-soft overflow-hidden">
            {quiz.items.map((it, i) => (
              <div key={i} className="grid sm:grid-cols-[1fr_minmax(0,260px)] items-center gap-2 px-3 py-2">
                <p className="text-[14px] text-ink leading-snug">{it.prompt}</p>
                {cell(i)}
              </div>
            ))}
          </div>
        )}

        {quiz.mode === 'tiles' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {quiz.items.map((it, i) => (
              <div key={i} className="bg-surface rounded-2xl border border-line p-2.5 space-y-2">
                {/* eslint-disable-next-line @next/next/no-img-element -- local SVG/JPG files */}
                <img src={it.img} alt="" loading="lazy" className="h-24 w-full object-contain rounded-lg" />
                {cell(i, 'justify-center text-center')}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
