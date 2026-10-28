import type { CountryHistory, HistEvent } from '@/lib/laender/types';
import { LEVELS, quizCounts, quizItems } from '@/lib/laender/types';
import { DETAILED } from '@/lib/laender';
import { KUNST, KUNST_CODE } from '@/lib/kunst';
import { LITERATUR, LITERATUR_CODE } from '@/lib/literatur';
import { MUSIK, MUSIK_CODE } from '@/lib/musik';
import { PHILOSOPHIE, PHILO_CODE } from '@/lib/philosophie';
import { WISSENSCHAFT, WIS_CODE } from '@/lib/wissenschaft';
import { POLITIK, POL_CODE } from '@/lib/politik';
import { QUIZZES } from '@/lib/geografie/quizzes';
import { CATS } from '@/lib/geografie/cats';
import { COUNTRY_COVERS } from '@/lib/geschichte/portraits';
import { bildView } from '@/lib/bild';

// One tile of the subject overview (/faecher), built on the server so the client gets only numbers.
export interface FachTile {
  id: string;
  cover: string | null;
  pos: 'top' | 'center';
  sub: [string, string];
  prefixes: string[]; // progress-key prefixes of the in-depth chapters (land.<code>.)
  deepTotal: number; // questions in those chapters
  geoTotal: number; // places in the typed geography quizzes
}

const events = (h: CountryHistory): HistEvent[] => h.epochs.flatMap(ep => ep.events);
const chapters = (evs: HistEvent[]) => evs.reduce((n, ev) => n + (ev.subtopics?.length ?? 1), 0);
const questions = (evs: HistEvent[]) =>
  evs.flatMap(quizItems).reduce((n, i) => {
    const c = quizCounts(i.quiz);
    return n + LEVELS.reduce((m, l) => m + c[l.id], 0);
  }, 0);
const src = (key: string) => bildView(key)?.src ?? null;
const prefix = (code: string) => `land.${code.toLowerCase()}.`;

function deep(h: CountryHistory, code: string, unit: [string, string], cover: string, pos: 'top' | 'center' = 'top') {
  const evs = events(h);
  const n = chapters(evs);
  return {
    cover: src(cover),
    pos,
    sub: [`${h.epochs.length} ${unit[0]} · ${n} chapters`, `${h.epochs.length} ${unit[1]} · ${n} Kapitel`] as [string, string],
    prefixes: [prefix(code)],
    deepTotal: questions(evs),
    geoTotal: 0,
  };
}

export function fachTiles(): Record<string, Omit<FachTile, 'id'>> {
  const lands = Object.entries(DETAILED);
  const gEvents = lands.flatMap(([, h]) => events(h));
  return {
    geschichte: {
      cover: src(COUNTRY_COVERS.DE),
      pos: 'top',
      sub: [`${lands.length} countries · ${chapters(gEvents)} chapters`, `${lands.length} Länder · ${chapters(gEvents)} Kapitel`],
      prefixes: lands.map(([code]) => prefix(code)),
      deepTotal: questions(gEvents),
      geoTotal: 0,
    },
    geografie: {
      cover: '/geo/cover-erde.jpg',
      pos: 'center',
      sub: [`${CATS.length} areas · ${QUIZZES.length} quizzes`, `${CATS.length} Bereiche · ${QUIZZES.length} Quiz`],
      prefixes: [],
      deepTotal: 0,
      geoTotal: QUIZZES.reduce((n, q) => n + q.items.length, 0),
    },
    kunst: deep(KUNST, KUNST_CODE, ['epochs', 'Epochen'], 'mona-lisa'),
    literatur: deep(LITERATUR, LITERATUR_CODE, ['countries', 'Länder'], 'goethe'),
    wissenschaft: deep(WISSENSCHAFT, WIS_CODE, ['areas', 'Bereiche'], 'einstein'),
    musik: deep(MUSIK, MUSIK_CODE, ['genres', 'Genres'], 'beethoven'),
    politik: deep(POLITIK, POL_CODE, ['areas', 'Bereiche'], 'reichstag', 'center'),
    philosophie: deep(PHILOSOPHIE, PHILO_CODE, ['areas', 'Bereiche'], 'sokrates'),
  };
}
