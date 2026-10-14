import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { DE_MITTELALTER_BAROCK } from './de-mittelalter-barock';
import { DE_AUFKLAERUNG } from './de-aufklaerung';
import { DE_KLASSIK } from './de-klassik';

// Literatur: countries (epochs) → literary epochs (events) → overview + authors (subtopics),
// reusing the history types. Progress is stored like the countries' under
// `land.lit.<epoch>.<chapter>.<level>.<n>`, so epoch and chapter ids must stay stable.
export const LITERATUR_CODE = 'LIT';

export const LITERATUR: CountryHistory = {
  code: LITERATUR_CODE,
  epochs: [
    {
      id: 'deutschland',
      name: 'Deutschsprachige Literatur',
      period: 'um 1200 – heute',
      events: [DE_MITTELALTER_BAROCK, DE_AUFKLAERUNG, DE_KLASSIK],
    },
  ],
};

export function findEpoche(id: string): { land: Epoch; event: HistEvent; next?: HistEvent; prev?: HistEvent } | null {
  const all = LITERATUR.epochs.flatMap(land => land.events.map(event => ({ land, event })));
  const i = all.findIndex(x => x.event.id === id);
  return i < 0 ? null : { ...all[i], next: all[i + 1]?.event, prev: all[i - 1]?.event };
}

export function findKapitel(epocheId: string, subId: string): { land: Epoch; event: HistEvent; sub: Subtopic; next?: Subtopic; prev?: Subtopic } | null {
  const f = findEpoche(epocheId);
  const subs = f?.event.subtopics;
  if (!f || !subs) return null;
  const i = subs.findIndex(s => s.id === subId);
  return i < 0 ? null : { land: f.land, event: f.event, sub: subs[i], next: subs[i + 1], prev: subs[i - 1] };
}
