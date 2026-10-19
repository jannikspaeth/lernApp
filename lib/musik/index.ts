import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { KL_MITTELALTER } from './kl-mittelalter';
import { KL_BAROCK } from './kl-barock';
import { KL_WIENER_KLASSIK } from './kl-wiener-klassik';
import { KL_ROMANTIK } from './kl-romantik';
import { KL_OPER } from './kl-oper';
import { KL_SPAETROMANTIK } from './kl-spaetromantik';
import { KL_MODERNE } from './kl-moderne';
import { JZ_WURZELN } from './jz-wurzeln';
import { JZ_SWING } from './jz-swing';
import { JZ_MODERN } from './jz-modern';

// Musik: genres (epochs) → eras or styles (events) → overview + composers/musicians (subtopics),
// reusing the history types. Progress is stored like the countries' under
// `land.mus.<era>.<chapter>.<level>.<n>`, so era and chapter ids must stay stable.
// Listening examples (Subtopic.audio, quiz key) come from lib/musik/audio.json.
export const MUSIK_CODE = 'MUS';

const RAW: CountryHistory = {
  code: MUSIK_CODE,
  epochs: [
    {
      id: 'klassik',
      name: 'Klassische Musik',
      period: 'um 800 – heute',
      events: [KL_MITTELALTER, KL_BAROCK, KL_WIENER_KLASSIK, KL_ROMANTIK, KL_OPER, KL_SPAETROMANTIK, KL_MODERNE],
    },
    {
      id: 'jazz',
      name: 'Jazz und Blues',
      period: 'um 1890 – heute',
      events: [JZ_WURZELN, JZ_SWING, JZ_MODERN],
    },
  ],
};

export function findEpoche(id: string): { land: Epoch; event: HistEvent; next?: HistEvent; prev?: HistEvent } | null {
  const all = MUSIK.epochs.flatMap(land => land.events.map(event => ({ land, event })));
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

// A well-known musician (portrait) per genre and per era for the tiles.
const COVERS: Record<string, string> = {
  klassik: 'beethoven', jazz: 'armstrong',
  'jz-wurzeln': 'joplin', 'jz-swing': 'ellington', 'jz-modern': 'miles-davis',
  'kl-mittelalter': 'hildegard', 'kl-barock': 'bach', 'kl-wiener-klassik': 'mozart', 'kl-romantik': 'chopin',
  'kl-oper': 'verdi', 'kl-spaetromantik': 'tschaikowsky', 'kl-moderne': 'debussy',
};

export const MUSIK: CountryHistory = {
  ...RAW,
  epochs: RAW.epochs.map(g => ({
    ...g,
    cover: COVERS[g.id],
    events: g.events.map(ev => ({ ...ev, cover: COVERS[ev.id] })),
  })),
};

export const findGenre = (id: string) => MUSIK.epochs.find(g => g.id === id);
