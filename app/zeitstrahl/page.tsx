'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { EVENTS, TimelineEvent, formatYear } from '@/lib/wissen/zeitstrahl';

const PER_ROUND = 5;

// Five events with different years, in random order.
function pickEvents(): TimelineEvent[] {
  const pool = [...EVENTS];
  const out: TimelineEvent[] = [];
  while (out.length < PER_ROUND && pool.length) {
    const [e] = pool.splice(Math.floor(Math.random() * pool.length), 1);
    if (!out.some(o => o[0] === e[0])) out.push(e);
  }
  return out;
}

// Timeline game: tap the events from earliest to latest, then check.
export default function ZeitstrahlPage() {
  const t = useT();
  // Picked in the browser only (a random pick on the server wouldn't match).
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [order, setOrder] = useState<number[]>([]); // indexes into events, in tapped order
  const [checked, setChecked] = useState(false);
  const [total, setTotal] = useState({ points: 0, rounds: 0 });

  useEffect(() => {
    const id = setTimeout(() => setEvents(pickEvents()), 0);
    return () => clearTimeout(id);
  }, []);

  const sorted = [...events].sort((a, b) => a[0] - b[0]);
  const points = order.filter((i, pos) => events[i][0] === sorted[pos][0]).length;

  function tap(i: number) {
    if (checked) return;
    setOrder(o => (o.includes(i) ? o.filter(x => x !== i) : [...o, i]));
  }

  function check() {
    setChecked(true);
    setTotal(s => ({ points: s.points + points, rounds: s.rounds + 1 }));
  }

  function next() {
    setEvents(pickEvents());
    setOrder([]);
    setChecked(false);
  }

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <Link href="/wissen/geschichte" className="text-xs text-gray-400 hover:text-gray-600">← {t('History', 'Geschichte')}</Link>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mt-1">
            <span>⏳</span> {t('Timeline', 'Zeitstrahl')}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {t('Tap the events from earliest to latest.', 'Tipp die Ereignisse vom frühesten zum spätesten an.')}
            {total.rounds > 0 && ` · ${total.points} / ${total.rounds * PER_ROUND} ${t('points', 'Punkte')}`}
          </p>
        </div>

        {!checked ? (
          <div className="space-y-2">
            {events.map((e, i) => {
              const pos = order.indexOf(i);
              return (
                <button
                  key={e[1]}
                  onClick={() => tap(i)}
                  className={`w-full flex items-center gap-3 text-left p-4 rounded-2xl border-2 transition-colors ${
                    pos >= 0 ? 'border-amber-400 bg-amber-50' : 'border-gray-100 bg-white hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <span
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${
                      pos >= 0 ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-300'
                    }`}
                  >
                    {pos >= 0 ? pos + 1 : '?'}
                  </span>
                  <span className="text-gray-900 font-medium">{e[1]}</span>
                </button>
              );
            })}
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setOrder([])}
                disabled={order.length === 0}
                className="flex-1 py-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 rounded-xl text-sm disabled:opacity-40 transition-colors"
              >
                {t('Reset', 'Zurücksetzen')}
              </button>
              <button
                onClick={check}
                disabled={events.length === 0 || order.length < events.length}
                className="flex-1 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold disabled:opacity-40 transition-colors"
              >
                {t('Check', 'Prüfen')}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
              <p className="text-3xl">{points === PER_ROUND ? '🎉' : points >= 3 ? '👍' : '💪'}</p>
              <p className="font-semibold text-gray-900 mt-1">
                {points} / {PER_ROUND} {t('in the right place', 'an der richtigen Stelle')}
              </p>
            </div>
            <ol className="relative border-l-2 border-amber-300 ml-4 space-y-3">
              {sorted.map((e, pos) => {
                const mine = events[order[pos]];
                const right = mine[0] === e[0];
                return (
                  <li key={e[1]} className="ml-4">
                    <span className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-amber-500" />
                    <p className="text-xs font-bold text-amber-700">{formatYear(e[0])}</p>
                    <p className="text-gray-900 font-medium">{e[1]}</p>
                    {!right && (
                      <p className="text-xs text-red-600">
                        ✗ {t('You put here:', 'Du hattest hier:')} {mine[1]} ({formatYear(mine[0])})
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
            <button
              onClick={next}
              className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
            >
              {t('Next round →', 'Nächste Runde →')}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
