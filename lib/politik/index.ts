import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { GR_BEGRIFFE } from './gr-begriffe';
import { GR_IDEEN } from './gr-ideen';

// Politik: areas (epochs: Grundlagen, Deutschland, Bundesrepublik, Europa, Internationales, Systeme, Gesellschaft)
// → topics (events) → chapters (subtopics), reusing the history types. Progress is stored like the countries' under
// `land.pol.<topic>.<chapter>.<level>.<n>`, so topic and chapter ids must stay stable.
export const POL_CODE = 'POL';

const RAW: CountryHistory = {
  code: POL_CODE,
  epochs: [
    {
      id: 'grundlagen',
      name: 'Grundlagen der Politik',
      period: 'Staat, Demokratie und politische Ideen',
      events: [GR_BEGRIFFE, GR_IDEEN],
    },
  ],
};

export function findEpoche(id: string): { land: Epoch; event: HistEvent; next?: HistEvent; prev?: HistEvent } | null {
  const all = POLITIK.epochs.flatMap(land => land.events.map(event => ({ land, event })));
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
  grundlagen: 'perikles', 'gr-begriffe': 'montesquieu', 'gr-ideen': 'hambacher-fest',
};

export const POLITIK: CountryHistory = {
  ...RAW,
  epochs: RAW.epochs.map(g => ({
    ...g,
    cover: COVERS[g.id],
    events: g.events.map(ev => ({ ...ev, cover: COVERS[ev.id] })),
  })),
};

export const findBereich = (id: string) => POLITIK.epochs.find(g => g.id === id);
