import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { AN_VORSOKRATIKER } from './an-vorsokratiker';
import { AN_KLASSIK } from './an-klassik';
import { AN_HELLENISMUS } from './an-hellenismus';
import { MA_CHRISTLICH } from './ma-christlich';
import { MA_ISLAM } from './ma-islam';

// Philosophie: areas (epochs: periods or regions) → schools or periods (events) → overview +
// one chapter per thinker (subtopics), reusing the history types. Progress is stored like the
// countries' under `land.phi.<school>.<chapter>.<level>.<n>`, so school and chapter ids must stay stable.
export const PHILO_CODE = 'PHI';

const RAW: CountryHistory = {
  code: PHILO_CODE,
  epochs: [
    {
      id: 'antike',
      name: 'Antike Philosophie',
      period: 'um 600 v. Chr. – 529 n. Chr.',
      events: [AN_VORSOKRATIKER, AN_KLASSIK, AN_HELLENISMUS],
    },
    {
      id: 'mittelalter',
      name: 'Mittelalter',
      period: 'um 200 – 1450',
      events: [MA_CHRISTLICH, MA_ISLAM],
    },
  ],
};

export function findEpoche(id: string): { land: Epoch; event: HistEvent; next?: HistEvent; prev?: HistEvent } | null {
  const all = PHILOSOPHIE.epochs.flatMap(land => land.events.map(event => ({ land, event })));
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

// A well-known thinker (portrait) per area and per school for the tiles.
const COVERS: Record<string, string> = {
  antike: 'schule-von-athen', 'an-vorsokratiker': 'heraklit', 'an-klassik': 'sokrates', 'an-hellenismus': 'mark-aurel',
  mittelalter: 'thomas-aquin', 'ma-christlich': 'augustinus', 'ma-islam': 'avicenna',
};

export const PHILOSOPHIE: CountryHistory = {
  ...RAW,
  epochs: RAW.epochs.map(g => ({
    ...g,
    cover: COVERS[g.id],
    events: g.events.map(ev => ({ ...ev, cover: COVERS[ev.id] })),
  })),
};

export const findBereich = (id: string) => PHILOSOPHIE.epochs.find(g => g.id === id);
