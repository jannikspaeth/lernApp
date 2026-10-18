import type { Tile } from '@/components/wissen/TileWall';
import type { Epoch, HistEvent } from '@/lib/laender/types';
import { quizCounts, quizItems } from '@/lib/laender/types';
import { LITERATUR, LITERATUR_CODE } from '@/lib/literatur';
import { KUNST, KUNST_CODE } from '@/lib/kunst';
import { bildView } from '@/lib/bild';
import { DETAILED } from '@/lib/laender';
import { COUNTRIES } from '@/lib/welt';
import { COUNTRY_COVERS } from '@/lib/geschichte/portraits';

// Fallback fills (visible while a picture loads), one per position.
const TINTS = ['bg-amber-200 dark:bg-amber-900', 'bg-rose-200 dark:bg-rose-900', 'bg-sky-200 dark:bg-sky-900', 'bg-violet-200 dark:bg-violet-900', 'bg-emerald-200 dark:bg-emerald-900', 'bg-stone-300 dark:bg-stone-800'];

const cover = (key?: string, pos: 'top' | 'center' = 'top'): Tile['cover'] => {
  const w = key ? bildView(key) : null;
  return w ? { src: w.src, alt: w.title, pos } : undefined;
};

const items = (events: HistEvent[]) =>
  events.flatMap(ev => quizItems(ev).map(i => ({ path: i.path, counts: quizCounts(i.quiz) })));

const chapters = (events: HistEvent[]) => events.reduce((n, ev) => n + (ev.subtopics?.length ?? 0), 0);

// Literatur: one tile per country, in learning order.
export function literaturLandTiles(): Tile[] {
  return LITERATUR.epochs.map((land, i) => ({
    key: land.id,
    href: `/literatur/laender/${land.id}`,
    title: land.name,
    sub: `${land.events.length} Epochen · ${chapters(land.events)} Kapitel`,
    cover: cover(land.cover),
    flag: land.flag,
    tint: TINTS[i % TINTS.length],
    code: LITERATUR_CODE,
    items: items(land.events),
  }));
}

// Literatur: the epochs of one country.
export function literaturEpochTiles(land: Epoch): Tile[] {
  return land.events.map((ev, i) => ({
    key: ev.id,
    href: `/literatur/${ev.id}`,
    title: ev.title,
    sub: ev.date,
    cover: cover(ev.cover),
    tint: TINTS[i % TINTS.length],
    code: LITERATUR_CODE,
    items: items([ev]),
  }));
}

// Kunst: one tile per epoch.
export function kunstEpochTiles(): Tile[] {
  return KUNST.epochs.map((ep, i) => ({
    key: ep.id,
    href: `/kunst/epochen/${ep.id}`,
    title: ep.name,
    sub: `${ep.period} · ${ep.events.length} Stile`,
    cover: cover(ep.cover, 'center'),
    tint: TINTS[i % TINTS.length],
    code: KUNST_CODE,
    items: items(ep.events),
  }));
}

// Kunst: the styles of one epoch.
export function kunstStilTiles(ep: Epoch): Tile[] {
  return ep.events.map((ev, i) => ({
    key: ev.id,
    href: `/kunst/${ev.id}`,
    title: ev.title,
    sub: `${ev.date} · ${ev.subtopics?.length ?? 0} Kapitel`,
    cover: cover(ev.cover, 'center'),
    tint: TINTS[i % TINTS.length],
    code: KUNST_CODE,
    items: items([ev]),
  }));
}

// ISO code → flag emoji (two regional indicator symbols).
const flagEmoji = (code: string) => String.fromCodePoint(...[...code.toUpperCase()].map(ch => 0x1f1a5 + ch.charCodeAt(0)));

// Geschichte: every country with a detailed history, in the order they were written (learning order).
export function geschichteLandTiles(): Tile[] {
  return Object.entries(DETAILED).flatMap(([code, h], i) => {
    const c = COUNTRIES.find(x => x.code === code);
    if (!c) return [];
    const events = h.epochs.flatMap(ep => ep.events);
    const chapters = events.reduce((n, ev) => n + (ev.subtopics?.length ?? 1), 0);
    return [{
      key: code,
      href: `/weltgeschichte/land/${code.toLowerCase()}`,
      title: c.name,
      sub: `${h.epochs.length} Epochen · ${chapters} Kapitel`,
      cover: cover(COUNTRY_COVERS[code]),
      flag: flagEmoji(code),
      tint: TINTS[i % TINTS.length],
      code,
      items: items(events),
    }];
  });
}
