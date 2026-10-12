import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { ANTIKE } from './antike';
import { ROMANIK } from './romanik';
import { GOTIK } from './gotik';
import { RENAISSANCE } from './renaissance';

// Kunst: epochs → styles (events) → overview + artists (subtopics), reusing the history types.
// Progress is stored like the countries' under `land.kunst.<style>.<subtopic>.<level>.<n>`.
export const KUNST_CODE = 'KUNST';

export const KUNST: CountryHistory = {
  code: KUNST_CODE,
  epochs: [
    { id: 'antike-mittelalter', name: 'Antike und Mittelalter', period: 'ca. 800 v. Chr. – 1500', events: [ANTIKE, ROMANIK, GOTIK] },
    { id: 'neuzeit', name: 'Renaissance und Barock', period: 'um 1400–1750', events: [RENAISSANCE] },
  ],
};

export function findStil(id: string): { epoch: Epoch; event: HistEvent; next?: HistEvent; prev?: HistEvent } | null {
  const all = KUNST.epochs.flatMap(epoch => epoch.events.map(event => ({ epoch, event })));
  const i = all.findIndex(x => x.event.id === id);
  return i < 0 ? null : { ...all[i], next: all[i + 1]?.event, prev: all[i - 1]?.event };
}

export function findKapitel(stilId: string, subId: string): { epoch: Epoch; event: HistEvent; sub: Subtopic; next?: Subtopic; prev?: Subtopic } | null {
  const f = findStil(stilId);
  const subs = f?.event.subtopics;
  if (!f || !subs) return null;
  const i = subs.findIndex(s => s.id === subId);
  return i < 0 ? null : { epoch: f.epoch, event: f.event, sub: subs[i], next: subs[i + 1], prev: subs[i - 1] };
}
