import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { ANTIKE } from './antike';
import { ROMANIK } from './romanik';
import { GOTIK } from './gotik';
import { RENAISSANCE } from './renaissance';
import { BAROCK } from './barock';
import { ROKOKO } from './rokoko';
import { KLASSIZISMUS } from './klassizismus';
import { ROMANTIK } from './romantik';
import { IMPRESSIONISMUS } from './impressionismus';
import { POSTIMPRESSIONISMUS } from './postimpressionismus';

// Kunst: epochs → styles (events) → overview + artists (subtopics), reusing the history types.
// Progress is stored like the countries' under `land.kunst.<style>.<subtopic>.<level>.<n>`.
export const KUNST_CODE = 'KUNST';

export const KUNST: CountryHistory = {
  code: KUNST_CODE,
  epochs: [
    { id: 'antike-mittelalter', name: 'Antike und Mittelalter', period: 'ca. 800 v. Chr. – 1500', events: [ANTIKE, ROMANIK, GOTIK] },
    { id: 'neuzeit', name: 'Renaissance bis Rokoko', period: 'um 1400–1780', events: [RENAISSANCE, BAROCK, ROKOKO] },
    { id: 'revolutionszeit', name: 'Klassizismus und Romantik', period: 'um 1750–1850', events: [KLASSIZISMUS, ROMANTIK] },
    { id: 'moderne-anfaenge', name: 'Impressionismus und Postimpressionismus', period: 'um 1860–1905', events: [IMPRESSIONISMUS, POSTIMPRESSIONISMUS] },
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
