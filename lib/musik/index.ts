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
import { RP_50ER } from './rp-50er';
import { RP_60ER } from './rp-60er';
import { RP_70ER } from './rp-70er';
import { RP_80ER } from './rp-80er';
import { RP_HEUTE } from './rp-heute';
import { SH_SOUL } from './sh-soul';
import { SH_HIPHOP } from './sh-hiphop';
import { SH_ELEKTRONIK } from './sh-elektronik';
import { MF_MUSICAL } from './mf-musical';
import { MF_FILM } from './mf-film';
import { DP_SCHLAGER } from './dp-schlager';
import { DP_80ER } from './dp-80er';
import { DP_HEUTE } from './dp-heute';
import { WM_AMERIKA } from './wm-amerika';
import { WM_TRADITIONEN } from './wm-traditionen';

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
    {
      id: 'rock-pop',
      name: 'Rock und Pop',
      period: '1950 – heute',
      events: [RP_50ER, RP_60ER, RP_70ER, RP_80ER, RP_HEUTE],
    },
    {
      id: 'soul-hiphop',
      name: 'Soul, Hip-Hop und Elektronik',
      period: '1955 – heute',
      events: [SH_SOUL, SH_HIPHOP, SH_ELEKTRONIK],
    },
    {
      id: 'musical-film',
      name: 'Musical und Filmmusik',
      period: '1895 – heute',
      events: [MF_MUSICAL, MF_FILM],
    },
    {
      id: 'deutsch',
      name: 'Deutschsprachige Popmusik',
      period: '1920 – heute',
      events: [DP_SCHLAGER, DP_80ER, DP_HEUTE],
    },
    {
      id: 'weltmusik',
      name: 'Weltmusik',
      period: 'Jahrtausende – heute',
      events: [WM_AMERIKA, WM_TRADITIONEN],
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
  klassik: 'beethoven', jazz: 'armstrong', 'rock-pop': 'freddie-mercury',
  'rp-50er': 'elvis', 'rp-60er': 'beatles', 'rp-70er': 'bowie', 'rp-80er': 'michael-jackson', 'rp-heute': 'taylor-swift',
  'soul-hiphop': 'aretha-franklin', 'sh-soul': 'james-brown', 'sh-hiphop': 'kendrick-lamar', 'sh-elektronik': 'daft-punk',
  'musical-film': 'bernstein', 'mf-musical': 'gershwin', 'mf-film': 'john-williams',
  deutsch: 'nena', 'dp-schlager': 'udo-juergens', 'dp-80er': 'udo-lindenberg', 'dp-heute': 'rammstein',
  weltmusik: 'bob-marley', 'wm-amerika': 'gardel', 'wm-traditionen': 'ravi-shankar',
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
