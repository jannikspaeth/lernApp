import type { CountryHistory } from '@/lib/laender/types';
import { DETAILED } from '@/lib/laender';
import { KUNST } from '@/lib/kunst';
import { LITERATUR } from '@/lib/literatur';
import { MUSIK } from '@/lib/musik';
import { PHILOSOPHIE } from '@/lib/philosophie';
import { WISSENSCHAFT } from '@/lib/wissenschaft';
import { POLITIK } from '@/lib/politik';
import { COUNTRY_COVERS } from '@/lib/geschichte/portraits';
import { bildView } from '@/lib/bild';
import { fachTiles } from '@/lib/wissen/faecher';

// Data for the home page, built on the server so the client only gets what it shows.

export interface DailyQuestion {
  fach: string; // subject id (lib/wissen)
  q: string;
  a: string;
  wrong: string[];
  info?: string;
  img: string | null;
  href: string; // chapter page
  chapter: string;
}

// Questions that lean on the chapter or the previous question ("Wann starb er?") make no sense on their own.
const DEPENDENT = /(^|[\s(„])(er|sie|ihn|ihm|ihr|ihre[mnrs]?|sein|seine[mnrs]?|dort|damals|diese[mnrs]?|dieser|dabei|danach|daraufhin|dafür|damit)([\s?,.“)]|$)/i;
const standalone = (q: string) => !DEPENDENT.test(q) && q.split(/\s+/).length >= 4;

const src = (key?: string) => (key ? bildView(key)?.src ?? null : null);

// A spread of chapters from one deep subject: the first easy/medium question with info and a picture.
function pick(fach: string, h: CountryHistory, base: (ev: string, sub: string) => string, n: number, fallback: (epoch: number) => string | null) {
  const all = h.epochs.flatMap((ep, ei) =>
    ep.events.flatMap(ev => (ev.subtopics ?? []).map(sub => ({ ep, ei, ev, sub }))),
  );
  const out: DailyQuestion[] = [];
  if (!all.length) return out;
  const step = all.length / n;
  for (let i = 0; i < n; i++) {
    const { ep, ei, ev, sub } = all[Math.floor(i * step)];
    const level = i % 2 ? sub.quiz.mittel : sub.quiz.leicht;
    const card = [...level, ...sub.quiz.leicht, ...sub.quiz.mittel].find(c => c[2] && c[2].length >= 3 && c[3] && standalone(c[0]));
    if (!card || !card[2]) continue;
    const img = src(card[4] as string | undefined) ?? src(sub.images?.[0]) ?? src(ev.cover) ?? src(ep.cover) ?? fallback(ei);
    out.push({
      fach,
      q: card[0],
      a: card[1],
      wrong: card[2].slice(0, 3),
      info: card[3] ?? undefined,
      img,
      href: base(ev.id, sub.id),
      chapter: sub.title,
    });
  }
  return out;
}

// About 20 questions per subject, interleaved so consecutive days change subject.
export function dailyPool(): DailyQuestion[] {
  const covers = fachTiles();
  const cov = (f: string) => () => covers[f]?.cover ?? null;
  const lists = [
    pick('wissenschaft', WISSENSCHAFT, (e, s) => `/wissenschaft/${e}/${s}`, 24, cov('wissenschaft')),
    pick('kunst', KUNST, (e, s) => `/kunst/${e}/${s}`, 20, cov('kunst')),
    pick('musik', MUSIK, (e, s) => `/musik/${e}/${s}`, 20, cov('musik')),
    pick('literatur', LITERATUR, (e, s) => `/literatur/${e}/${s}`, 20, cov('literatur')),
    pick('politik', POLITIK, (e, s) => `/politik/${e}/${s}`, 20, cov('politik')),
    pick('philosophie', PHILOSOPHIE, (e, s) => `/philosophie/${e}/${s}`, 20, cov('philosophie')),
    Object.entries(DETAILED).flatMap(([code, h]) =>
      pick('geschichte', h, (e, s) => `/weltgeschichte/land/${code.toLowerCase()}/${e}/${s}`, 1, () => src(COUNTRY_COVERS[code])),
    ),
  ];
  const out: DailyQuestion[] = [];
  for (let i = 0; lists.some(l => i < l.length); i++) for (const l of lists) if (l[i]) out.push(l[i]);
  return out;
}

// Pictures for the "continue" card, by path prefix of the last visited page.
export function visitCovers(): Record<string, string | null> {
  const c = fachTiles();
  const m: Record<string, string | null> = {
    '/wissenschaft': c.wissenschaft.cover,
    '/kunst': c.kunst.cover,
    '/musik': c.musik.cover,
    '/literatur': c.literatur.cover,
    '/philosophie': c.philosophie.cover,
    '/politik': c.politik.cover,
    '/weltgeschichte': c.geschichte.cover,
    '/geografie': c.geografie.cover,
  };
  for (const [code, key] of Object.entries(COUNTRY_COVERS)) m[`/weltgeschichte/land/${code.toLowerCase()}`] = src(key);
  for (const [id, f] of Object.entries(c)) m[`/wissen/${id}`] = f.cover;
  return m;
}
