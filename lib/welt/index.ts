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

export function countryNames(c: Country): string[] {
  return [c.name, ...c.alt];
}
