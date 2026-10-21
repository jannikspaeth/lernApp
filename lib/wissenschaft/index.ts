import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { WS_SONNENSYSTEM } from './ws-sonnensystem';
import { WS_KOSMOS } from './ws-kosmos';
import { WS_ASTRONOMEN } from './ws-astronomen';
import { WS_RAUMFAHRT } from './ws-raumfahrt';
import { PH_MECHANIK } from './ph-mechanik';
import { PH_ELEKTRO } from './ph-elektro';
import { PH_MODERN } from './ph-modern';

// Wissenschaft: areas (epochs: Weltall, Physik, Chemie, Biologie …) → topics (events) → overview + chapters
// (subtopics), reusing the history types. Progress is stored like the countries' under
// `land.wis.<topic>.<chapter>.<level>.<n>`, so topic and chapter ids must stay stable.
export const WIS_CODE = 'WIS';

const RAW: CountryHistory = {
  code: WIS_CODE,
  epochs: [
    {
      id: 'weltall',
      name: 'Weltall und Raumfahrt',
      period: 'Sonnensystem, Sterne und Raumfahrt',
      events: [WS_SONNENSYSTEM, WS_KOSMOS, WS_ASTRONOMEN, WS_RAUMFAHRT],
    },
    {
      id: 'physik',
      name: 'Physik',
      period: 'Kräfte, Energie, Licht und Atome',
      events: [PH_MECHANIK, PH_ELEKTRO, PH_MODERN],
    },
  ],
};

export function findEpoche(id: string): { land: Epoch; event: HistEvent; next?: HistEvent; prev?: HistEvent } | null {
  const all = WISSENSCHAFT.epochs.flatMap(land => land.events.map(event => ({ land, event })));
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

// A picture per area and per topic for the tiles.
const COVERS: Record<string, string> = {
  weltall: 'pillars-of-creation', 'ws-sonnensystem': 'planet-saturn', 'ws-kosmos': 'andromeda', 'ws-astronomen': 'kopernikus', 'ws-raumfahrt': 'aldrin-mond',
  physik: 'einstein', 'ph-mechanik': 'newton', 'ph-elektro': 'faraday', 'ph-modern': 'marie-curie',
};

export const WISSENSCHAFT: CountryHistory = {
  ...RAW,
  epochs: RAW.epochs.map(g => ({
    ...g,
    cover: COVERS[g.id],
    events: g.events.map(ev => ({ ...ev, cover: COVERS[ev.id] })),
  })),
};

export const findBereich = (id: string) => WISSENSCHAFT.epochs.find(g => g.id === id);
