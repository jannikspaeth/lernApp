import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { AN_VORSOKRATIKER } from './an-vorsokratiker';
import { AN_KLASSIK } from './an-klassik';
import { AN_HELLENISMUS } from './an-hellenismus';
import { MA_CHRISTLICH } from './ma-christlich';
import { MA_ISLAM } from './ma-islam';
import { NZ_RENAISSANCE } from './nz-renaissance';
import { NZ_RATIONALISMUS } from './nz-rationalismus';
import { NZ_EMPIRISMUS } from './nz-empirismus';
import { NZ_AUFKLAERUNG } from './nz-aufklaerung';
import { NZ_KANT } from './nz-kant';
import { JH_IDEALISMUS } from './jh-idealismus';
import { JH_19 } from './jh-19';
import { ZJ_ANALYTISCH } from './zj-analytisch';
import { ZJ_EXISTENZ } from './zj-existenz';
import { ZJ_GESELLSCHAFT } from './zj-gesellschaft';
import { OS_CHINA } from './os-china';
import { OS_INDIEN } from './os-indien';

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
    {
      id: 'neuzeit',
      name: 'Neuzeit und Aufklärung',
      period: 'um 1350 – 1804',
      events: [NZ_RENAISSANCE, NZ_RATIONALISMUS, NZ_EMPIRISMUS, NZ_AUFKLAERUNG, NZ_KANT],
    },
    {
      id: 'jh19',
      name: '19. Jahrhundert',
      period: 'um 1790 – 1900',
      events: [JH_IDEALISMUS, JH_19],
    },
    {
      id: 'jh20',
      name: '20. Jahrhundert und Gegenwart',
      period: 'um 1880 – heute',
      events: [ZJ_ANALYTISCH, ZJ_EXISTENZ, ZJ_GESELLSCHAFT],
    },
    {
      id: 'osten',
      name: 'Östliche Philosophie',
      period: 'um 1500 v. Chr. – heute',
      events: [OS_CHINA, OS_INDIEN],
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
  neuzeit: 'kant', 'nz-renaissance': 'machiavelli', 'nz-rationalismus': 'descartes', 'nz-empirismus': 'locke',
  'nz-aufklaerung': 'voltaire', 'nz-kant': 'kant',
  jh19: 'nietzsche', 'jh-idealismus': 'hegel', 'jh-19': 'marx',
  jh20: 'sartre', 'zj-analytisch': 'wittgenstein', 'zj-existenz': 'camus', 'zj-gesellschaft': 'arendt',
  osten: 'konfuzius', 'os-china': 'laozi', 'os-indien': 'buddha',
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
