'use client';

import { useEffect, useRef, useState } from 'react';
import { useT } from '@/lib/ui-lang';
import { matchesName } from '@/lib/name-match';
import { MAX_POINTS, PER_GAME, type Person } from '@/lib/wer-bin-ich';
import Icon from '@/components/Icon';

export interface PersonPicture { src: string | null; credit: string }

const SEEN_KEY = 'lernapp_werbinich_seen';

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

// People not played yet come first; once everyone was asked, the pool starts over.
function draw(persons: Person[]): Person[] {
  let seen = new Set<string>();
  try { seen = new Set(JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]')); } catch { /* no storage */ }
  const fresh = shuffle(persons.filter(p => !seen.has(p.id)));
  let pick = fresh.slice(0, PER_GAME);
  if (pick.length < PER_GAME) {
    seen = new Set();
    const taken = new Set(pick.map(p => p.id));
    pick = [...pick, ...shuffle(persons.filter(p => !taken.has(p.id))).slice(0, PER_GAME - pick.length)];
  }
  for (const p of pick) seen.add(p.id);
  try { localStorage.setItem(SEEN_KEY, JSON.stringify([...seen])); } catch { /* private mode */ }
  return pick;
}

interface Run { people: Person[]; idx: number; hints: number; points: number[]; result: 'solved' | 'given-up' | null }

// "Wer bin ich?": a hard hint first; guess at any time or ask for the next, easier hint.
// Points: 5 after the first hint, one less per further hint, 0 when giving up.
export default function WerBinIch({ persons, pictures }: { persons: Person[]; pictures: Record<string, PersonPicture> }) {
  const t = useT();
  const [run, setRun] = useState<Run | null>(null);
  const [value, setValue] = useState('');
  const [wrong, setWrong] = useState<string | null>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!run) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [run]);

  const person = run && run.idx < run.people.length ? run.people[run.idx] : null;
  const finished = run && !person;
  const total = run?.points.reduce((a, b) => a + b, 0) ?? 0;

  function start() {
    setRun({ people: draw(persons), idx: 0, hints: 1, points: [], result: null });
    setValue('');
    setWrong(null);
    setTimeout(() => input.current?.focus(), 0);
  }

  function guess() {
    if (!run || !person || run.result || !value.trim()) return;
    if (matchesName(value, [person.name, ...person.accepts])) {
      setRun({ ...run, result: 'solved', points: [...run.points, MAX_POINTS + 1 - run.hints] });
      setWrong(null);
    } else {
      setWrong(value.trim());
    }
    setValue('');
  }

  function nextHint() {
    if (!run || run.result || run.hints >= person!.hints.length) return;
    setRun({ ...run, hints: run.hints + 1 });
    setWrong(null);
    input.current?.focus();
  }

  function giveUp() {
    if (!run || run.result) return;
    setRun({ ...run, result: 'given-up', points: [...run.points, 0], hints: person!.hints.length });
    setWrong(null);
  }

  function next() {
    if (!run) return;
    setRun({ ...run, idx: run.idx + 1, hints: 1, result: null });
    setValue('');
    setTimeout(() => input.current?.focus(), 0);
  }

  if (!run) {
    return (
      <div className="bg-surface rounded-2xl border border-line p-5 space-y-4">
        <div className="space-y-1.5">
          <p className="font-semibold text-ink">{t('How it works', 'So geht’s')}</p>
          <p className="text-[15px] text-ink leading-relaxed">
            {t(
              `You get a hard hint about a famous person. Type who it is straight away – or ask for the next, easier hint. The fewer hints you need, the more points: ${MAX_POINTS} for the first hint, 1 for the last. ${PER_GAME} people per game.`,
              `Du bekommst einen schweren Tipp zu einer berühmten Person. Tippe gleich ein, wer es ist – oder hol dir den nächsten, leichteren Tipp. Je weniger Tipps du brauchst, desto mehr Punkte: ${MAX_POINTS} beim ersten Tipp, 1 beim letzten. ${PER_GAME} Personen pro Spiel.`,
            )}
          </p>
          <p className="text-[13px] text-muted">{t(`${persons.length} people – each comes back only after you have met all of them.`, `${persons.length} Personen – jede kommt erst wieder, wenn alle einmal dran waren.`)}</p>
        </div>
        <button onClick={start} className="w-full h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors">
          {t('Start', 'Los geht’s')}
        </button>
      </div>
    );
  }

  if (finished) {
    const max = PER_GAME * MAX_POINTS;
    return (
      <div className="space-y-4">
        <div className="bg-surface rounded-2xl border border-line p-5 text-center space-y-1">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider">{t('Your score', 'Dein Ergebnis')}</p>
          <p className="text-4xl font-bold text-ink tabular-nums">{total}<span className="text-xl text-muted">/{max}</span></p>
          <p className="text-[15px] text-muted">{t('points', 'Punkte')}</p>
        </div>
        <div className="bg-surface rounded-2xl border border-line divide-y divide-line-soft">
          {run.people.map((p, i) => (
            <div key={p.id} className="flex items-center justify-between px-4 py-2.5 text-[15px]">
              <span className="text-ink">{p.name}</span>
              <span className={`font-semibold tabular-nums ${run.points[i] > 0 ? 'text-good' : 'text-bad'}`}>{run.points[i]}</span>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          <button onClick={start} className="h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors">{t('Play again', 'Nochmal spielen')}</button>
          <button onClick={() => setRun(null)} className="h-12 border border-line bg-surface hover:bg-canvas text-ink rounded-xl font-medium transition-colors">{t('Done', 'Fertig')}</button>
        </div>
      </div>
    );
  }

  const p = person!;
  const pic = pictures[p.id];
  const points = MAX_POINTS + 1 - run.hints;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => setRun(null)} aria-label={t('Quit', 'Beenden')} className="w-9 h-9 -ml-1 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-surface">
          <Icon name="x" size={20} />
        </button>
        <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full transition-[width] duration-300" style={{ width: `${Math.round((run.idx / run.people.length) * 100)}%` }} />
        </div>
        <span className="text-[13px] font-semibold text-muted tabular-nums">{run.idx + 1}/{run.people.length} · {total} {t('pts', 'P.')}</span>
      </div>

      <div className="space-y-2">
        {p.hints.slice(0, run.hints).map((h, i) => (
          <div key={i} className={`rounded-2xl border px-4 py-3 ${i === run.hints - 1 && !run.result ? 'border-accent/40 bg-accent-soft/40' : 'border-line bg-surface'}`}>
            <p className="text-[12px] font-semibold text-muted uppercase tracking-wider">{t(`Hint ${i + 1}`, `Tipp ${i + 1}`)}</p>
            <p className="text-[16px] text-ink leading-snug mt-0.5">{h}</p>
          </div>
        ))}
      </div>

      {!run.result ? (
        <div className="space-y-2">
          <form onSubmit={e => { e.preventDefault(); guess(); }} className="flex gap-2">
            <input
              ref={input}
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder={t('Who am I?', 'Wer bin ich?')}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="flex-1 min-w-0 h-12 px-4 rounded-xl border border-line bg-surface text-ink text-[16px] focus:outline-none focus:border-accent"
            />
            <button type="submit" className="h-12 px-5 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors">{t('Guess', 'Raten')}</button>
          </form>
          {wrong && <p className="text-[14px] text-bad">{t(`“${wrong}” is not right.`, `„${wrong}“ stimmt nicht.`)}</p>}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={nextHint}
              disabled={run.hints >= p.hints.length}
              className="h-11 border border-line bg-surface hover:bg-canvas text-ink rounded-xl text-[14px] font-medium transition-colors disabled:opacity-40"
            >
              {run.hints < p.hints.length ? t(`Next hint (${points - 1} pts)`, `Nächster Tipp (${points - 1} P.)`) : t('No more hints', 'Keine Tipps mehr')}
            </button>
            <button onClick={giveUp} className="h-11 border border-line bg-surface hover:bg-canvas text-muted rounded-xl text-[14px] font-medium transition-colors">
              {t('Give up', 'Auflösen')}
            </button>
          </div>
          <p className="text-[13px] text-muted text-center">{t(`Right now: ${points} points`, `Jetzt gibt es noch ${points} ${points === 1 ? 'Punkt' : 'Punkte'}`)}</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-surface rounded-2xl border border-line overflow-hidden">
            {pic?.src && (
              // eslint-disable-next-line @next/next/no-img-element -- local pictures
              <img src={pic.src} alt={p.name} className="w-full max-h-80 object-cover object-top bg-canvas" />
            )}
            <div className="p-4 space-y-1">
              <p className={`text-sm font-semibold ${run.result === 'solved' ? 'text-good' : 'text-bad'}`}>
                {run.result === 'solved'
                  ? t(`Correct – ${run.points[run.idx]} points`, `Richtig – ${run.points[run.idx]} ${run.points[run.idx] === 1 ? 'Punkt' : 'Punkte'}`)
                  : t('Solution', 'Auflösung')}
              </p>
              <p className="text-2xl font-bold text-ink tracking-tight">{p.name}</p>
              {pic?.credit && <p className="text-xs text-faint">{pic.credit}</p>}
            </div>
          </div>
          <button onClick={next} autoFocus className="w-full h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors">
            {run.idx + 1 < run.people.length ? t('Next person', 'Nächste Person') : t('See result', 'Zum Ergebnis')}
          </button>
        </div>
      )}
    </div>
  );
}
