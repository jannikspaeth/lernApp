import type { Continent, Country } from './types';
import { COUNTRIES } from './countries';

export type { Continent, Country } from './types';
export { COUNTRIES };

export const CONTINENTS: { id: Continent; name: [string, string]; icon: string }[] = [
  { id: 'europa', name: ['Europe', 'Europa'], icon: '🇪🇺' },
  { id: 'asien', name: ['Asia', 'Asien'], icon: '🌏' },
  { id: 'afrika', name: ['Africa', 'Afrika'], icon: '🌍' },
  { id: 'nordamerika', name: ['North & Central America', 'Nord- & Mittelamerika'], icon: '🌎' },
  { id: 'suedamerika', name: ['South America', 'Südamerika'], icon: '🌎' },
  { id: 'ozeanien', name: ['Oceania', 'Ozeanien'], icon: '🏝️' },
];

export const flagUrl = (code: string) => `/flags/${code.toLowerCase()}.svg`;

export function countriesIn(continent: Continent): Country[] {
  return COUNTRIES.filter(c => c.continent === continent);
}

// For typed answers: case, accents, punctuation and spaces don't matter
// ("Elfenbeinkuste", "st kitts und nevis", "Sao Tome und Principe").
export function normName(s: string): string {
  return s
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\bst\.?\s/g, 'saint ')
    .replace(/[^a-z0-9]/g, '');
}

// Small typos are forgiven in typed answers: none for short names (Iran / Irak), one letter from five
// letters on, two from nine (normalised length).
export const typoTolerance = (len: number) => (len < 5 ? 0 : len < 9 ? 1 : 2);

// Edit distance where swapping two neighbouring letters counts as one typo ("Nigerai"), stopping early once it exceeds `max`.
export function editDistance(a: string, b: string, max = 2): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let pp: number[] = [];
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) cur[j] = Math.min(cur[j], pp[j - 2] + 1);
      rowMin = Math.min(rowMin, cur[j]);
    }
    if (rowMin > max) return max + 1;
    pp = prev;
    prev = cur;
  }
  return prev[b.length];
}

// Short forms of two-part names: "St. Vincent und die Grenadinen" → "St. Vincent", "Trinidad und Tobago" → "Trinidad".
export function shortForms(name: string): string[] {
  const m = name.match(/^(.{4,}?) und /);
  return m ? [m[1].trim()] : [];
}

export function countryNames(c: Country): string[] {
  return [c.name, ...c.alt];
}
