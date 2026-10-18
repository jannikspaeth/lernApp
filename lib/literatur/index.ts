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
import { ES_SIGLO_DE_ORO } from './es-siglo-de-oro';
import { ES_MODERNE } from './es-moderne';
import { LA_20JH } from './la-20jh';
import { AN_GRIECHENLAND } from './an-griechenland';
import { AN_ROM } from './an-rom';
import { IT_MITTELALTER_RENAISSANCE } from './it-mittelalter-renaissance';
import { IT_MODERNE } from './it-moderne';
import { SK_19JH } from './sk-19jh';
import { SK_20JH } from './sk-20jh';

// Literatur: countries (epochs) → literary epochs (events) → overview + authors (subtopics),
// reusing the history types. Progress is stored like the countries' under
// `land.lit.<epoch>.<chapter>.<level>.<n>`, so epoch and chapter ids must stay stable.
export const LITERATUR_CODE = 'LIT';

const RAW: CountryHistory = {
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
    {
      id: 'spanien',
      name: 'Spanien und Lateinamerika',
      period: 'um 1550 – heute',
      events: [ES_SIGLO_DE_ORO, ES_MODERNE, LA_20JH],
    },
    {
      id: 'antike-italien',
      name: 'Antike und Italien',
      period: 'um 750 v. Chr. – heute',
      events: [AN_GRIECHENLAND, AN_ROM, IT_MITTELALTER_RENAISSANCE, IT_MODERNE],
    },
    {
      id: 'skandinavien',
      name: 'Skandinavien',
      period: 'um 1800 – heute',
      events: [SK_19JH, SK_20JH],
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

// A well-known person (portrait) per country and per epoch for the tiles.
const COVERS: Record<string, string> = {
  deutschland: 'goethe', england: 'shakespeare', frankreich: 'hugo', russland: 'tolstoi', usa: 'twain', spanien: 'cervantes', 'antike-italien': 'dante', skandinavien: 'ibsen',
  'de-mittelalter-barock': 'walther', 'de-aufklaerung': 'lessing', 'de-klassik': 'schiller', 'de-romantik': 'eichendorff',
  'de-vormaerz': 'heine', 'de-realismus': 'fontane', 'de-moderne': 'kafka', 'de-gegenwart': 'grass',
  'en-renaissance': 'marlowe', 'en-aufklaerung': 'defoe', 'en-romantik': 'byron', 'en-viktorianisch': 'dickens', 'en-moderne': 'woolf',
  'fr-klassik': 'moliere', 'fr-19jh': 'balzac', 'fr-moderne': 'camus',
  'ru-19jh': 'dostojewski', 'ru-20jh': 'bulgakow',
  'us-19jh': 'poe', 'us-20jh': 'hemingway',
  'es-siglo-de-oro': 'cervantes', 'es-moderne': 'lorca', 'la-20jh': 'garcia-marquez',
  'an-griechenland': 'homer', 'an-rom': 'vergil', 'it-mittelalter-renaissance': 'petrarca', 'it-moderne': 'calvino',
  'sk-19jh': 'andersen', 'sk-20jh': 'lindgren',
};
const FLAGS: Record<string, string> = { deutschland: '🇩🇪', england: '🇬🇧', frankreich: '🇫🇷', russland: '🇷🇺', usa: '🇺🇸', spanien: '🇪🇸', 'antike-italien': '🇮🇹', skandinavien: '🇸🇪' };

export const LITERATUR: CountryHistory = {
  ...RAW,
  epochs: RAW.epochs.map(land => ({
    ...land,
    cover: COVERS[land.id],
    flag: FLAGS[land.id],
    events: land.events.map(ev => ({ ...ev, cover: COVERS[ev.id] })),
  })),
};

export const findLand = (id: string) => LITERATUR.epochs.find(l => l.id === id);
