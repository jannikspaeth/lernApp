'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { useT } from '@/lib/ui-lang';
import { useLocalSetting } from '@/lib/use-local-setting';
import { TIMELINE_REGIONS, TimelineEvent, TimelineRegion, eventsOf, formatYear } from '@/lib/wissen/zeitstrahl';

type Pick = TimelineRegion | 'alle';
const isPick = (v: string): v is Pick => v === 'alle' || TIMELINE_REGIONS.some(r => r.id === v);

const PER_ROUND = 5;

// Five events with different years, in random order.
function pickEvents(region: Pick): TimelineEvent[] {
  const pool = eventsOf(region);
  const out: TimelineEvent[] = [];
  while (out.length < PER_ROUND && pool.length) {
    const [e] = pool.splice(Math.floor(Math.random() * pool.length), 1);
    if (!out.some(o => o.y === e.y)) out.push(e);
  }
  return out;
}

// Timeline game: tap the events from earliest to latest, then check.
export default function ZeitstrahlPage() {
  const t = useT();
  const [region, setRegion] = useLocalSetting<Pick>('lernapp_zeitstrahl_region', 'alle', isPick);
  // Picked in the browser only (a random pick on the server wouldn't match).
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [order, setOrder] = useState<number[]>([]); // indexes into events, in tapped order
  const [checked, setChecked] = useState(false);
  const [total, setTotal] = useState({ points: 0, rounds: 0 });

  useEffect(() => {
    const id = setTimeout(() => {
      setEvents(pickEvents(region));
      setOrder([]);
      setChecked(false);
    }, 0);
    return () => clearTimeout(id);
  }, [region]);

  const sorted = [...events].sort((a, b) => a.y - b.y);
  const points = order.filter((i, pos) => events[i].y === sorted[pos].y).length;

  function tap(i: number) {
    if (checked) return;
    setOrder(o => (o.includes(i) ? o.filter(x => x !== i) : [...o, i]));
  }

  function check() {
    setChecked(true);
    setTotal(s => ({ points: s.points + points, rounds: s.rounds + 1 }));
  }

  function next() {
    setEvents(pickEvents(region));
    setOrder([]);
    setChecked(false);
  }

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-5">
        <div className="space-y-2">
          <Link href="/wissen/geschichte" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> {t('History', 'Geschichte')}
          </Link>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">{t('Timeline', 'Zeitstrahl')}</h1>
          <p className="text-muted text-sm">
            {t('Tap the events from earliest to latest.', 'Tipp die Ereignisse vom frühesten zum spätesten an.')}
            {total.rounds > 0 && ` · ${total.points} / ${total.rounds * PER_ROUND} ${t('points', 'Punkte')}`}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {([['alle', t('All', 'Alle')], ...TIMELINE_REGIONS.filter(r => r.id !== 'welt').map(r => [r.id, t(...r.name)])] as [Pick, string][]).map(
            ([id, name]) => (
              <button
                key={id}
                onClick={() => setRegion(id)}
                aria-pressed={region === id}
                className={`px-3 h-8 rounded-full text-[13px] font-medium border transition-colors ${
                  region === id ? 'bg-ink border-ink text-canvas' : 'bg-surface border-line text-muted hover:text-ink'
                }`}
              >
                {name}
              </button>
            ),
          )}
        </div>

        {!checked ? (
          <div className="space-y-2">
            {events.map((e, i) => {
              const pos = order.indexOf(i);
              return (
                <button
                  key={e.text}
                  onClick={() => tap(i)}
                  className={`w-full flex items-center gap-3 text-left p-4 rounded-2xl border transition-colors ${
                    pos >= 0 ? 'border-accent bg-accent-soft' : 'border-line bg-surface hover:border-faint'
                  }`}
                >
                  <span
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${
                      pos >= 0 ? 'bg-accent text-white' : 'bg-canvas border border-line text-muted'
                    }`}
                  >
                    {pos >= 0 ? pos + 1 : '?'}
                  </span>
                  <span className="text-ink font-medium">{e.text}</span>
                </button>
              );
            })}
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setOrder([])}
                disabled={order.length === 0}
                className="flex-1 h-12 border border-line bg-surface hover:bg-canvas text-ink rounded-xl text-sm font-medium disabled:opacity-40 transition-colors"
              >
                {t('Reset', 'Zurücksetzen')}
              </button>
              <button
                onClick={check}
                disabled={events.length === 0 || order.length < events.length}
                className="flex-1 h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold disabled:opacity-40 transition-colors"
              >
                {t('Check', 'Prüfen')}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-surface rounded-2xl border border-line p-5 text-center space-y-2">
              <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${points === PER_ROUND ? 'bg-good-soft text-good' : 'bg-accent-soft text-accent'}`}>
                <Icon name={points === PER_ROUND ? 'check' : 'target'} size={24} strokeWidth={2} />
              </div>
              <p className="font-semibold text-ink">
                {points} / {PER_ROUND} {t('in the right place', 'an der richtigen Stelle')}
              </p>
            </div>
            <ol className="relative border-l border-line ml-3 space-y-4 py-1">
              {sorted.map((e, pos) => {
                const mine = events[order[pos]];
                const right = mine.y === e.y;
                return (
                  <li key={e.text} className="ml-4">
                    <span className={`absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-canvas ${right ? 'bg-good' : 'bg-bad'}`} />
                    <p className="text-xs font-semibold text-accent tabular-nums">{formatYear(e.y, e.ca)}</p>
                    <p className="text-ink font-medium">{e.text}</p>
                    {!right && (
                      <p className="text-xs text-bad mt-0.5">
                        {t('You put here:', 'Du hattest hier:')} {mine.text} ({formatYear(mine.y, mine.ca)})
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
            <button
              onClick={next}
              className="w-full h-12 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors"
            >
              {t('Next round', 'Nächste Runde')}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
