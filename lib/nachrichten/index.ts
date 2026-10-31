// News quiz (/nachrichten): questions on what happened in Germany and the world, in fragen.json.
// The file is filled once a day by a scheduled Claude routine (see scripts/nachrichten-routine.md) from
// Wikipedia's "Portal:Current events" (world) and tagesschau.de / Deutschlandfunk (Germany).
// Ids are `<date>.<region>.<n>` — never reuse one; check with `npx tsx scripts/check-nachrichten.ts`.
import RAW from './fragen.json';

export type NewsRegion = 'de' | 'welt';

export interface NewsQuestion {
  id: string;
  d: string; // date of the event, YYYY-MM-DD (Europe/Berlin)
  r: NewsRegion;
  k: string; // category: Politik, Wirtschaft, Gesellschaft, Wissenschaft, Sport, Kultur, Katastrophen, Konflikte
  q: string; // stands alone and names the time ("Ende Oktober 2026 …")
  a: string;
  w: [string, string, string];
  i: string; // background shown after answering
  src: string; // source URL
  p: 1 | 2 | 3; // importance: 3 = big story of the month, 1 = minor
}

export const NEWS: NewsQuestion[] = RAW as NewsQuestion[];

export const NEWS_PERIODS = [
  { id: 'woche', days: 7, name: ['Last week', 'Letzte Woche'] as [string, string] },
  { id: 'monat', days: 31, name: ['Last month', 'Letzter Monat'] as [string, string] },
  { id: 'halbjahr', days: 183, name: ['Last 6 months', 'Letzte 6 Monate'] as [string, string] },
];

export const NEWS_REGIONS: { id: NewsRegion; name: [string, string] }[] = [
  { id: 'de', name: ['Germany', 'Deutschland'] },
  { id: 'welt', name: ['World', 'Welt'] },
];

const MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
export function newsDate(d: string): string {
  const [y, m, day] = d.split('-').map(Number);
  return `${day}. ${MONTHS[m - 1]} ${y}`;
}

export function sourceLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '').replace(/^(de|en)\.wikipedia\.org$/, 'Wikipedia');
  } catch {
    return 'Quelle';
  }
}
