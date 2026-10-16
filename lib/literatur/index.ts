import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { DE_MITTELALTER_BAROCK } from './de-mittelalter-barock';
import { DE_AUFKLAERUNG } from './de-aufklaerung';
import { DE_KLASSIK } from './de-klassik';
import { DE_ROMANTIK } from './de-romantik';
import { DE_VORMAERZ } from './de-vormaerz';
import { DE_REALISMUS } from './de-realismus';
import { DE_MODERNE } from './de-moderne';
import { DE_GEGENWART } from './de-gegenwart';
import { EN_RENAISSANCE } from './en-renaissance';
import { EN_AUFKLAERUNG } from './en-aufklaerung';
import { EN_ROMANTIK } from './en-romantik';
import { EN_VIKTORIANISCH } from './en-viktorianisch';
import { EN_MODERNE } from './en-moderne';
import { FR_KLASSIK } from './fr-klassik';
import { FR_19JH } from './fr-19jh';
import { FR_MODERNE } from './fr-moderne';
import { RU_19JH } from './ru-19jh';
import { RU_20JH } from './ru-20jh';
import { US_19JH } from './us-19jh';
import { US_20JH } from './us-20jh';

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
      events: [DE_MITTELALTER_BAROCK, DE_AUFKLAERUNG, DE_KLASSIK, DE_ROMANTIK, DE_VORMAERZ, DE_REALISMUS, DE_MODERNE, DE_GEGENWART],
    },
    {
      id: 'england',
      name: 'England und Irland',
      period: 'um 1550 – heute',
      events: [EN_RENAISSANCE, EN_AUFKLAERUNG, EN_ROMANTIK, EN_VIKTORIANISCH, EN_MODERNE],
    },
    {
      id: 'frankreich',
      name: 'Frankreich',
      period: 'um 1630 – heute',
      events: [FR_KLASSIK, FR_19JH, FR_MODERNE],
    },
    {
      id: 'russland',
      name: 'Russland',
      period: 'um 1820 – heute',
      events: [RU_19JH, RU_20JH],
    },
    {
      id: 'usa',
      name: 'USA',
      period: 'um 1820 – heute',
      events: [US_19JH, US_20JH],
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
