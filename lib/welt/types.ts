export type Continent = 'europa' | 'asien' | 'afrika' | 'nordamerika' | 'suedamerika' | 'ozeanien';

export interface Country {
  code: string; // ISO 3166-1 alpha-2, flag file /flags/<code lower>.svg
  num: string | null; // ISO numeric = id in the world-atlas map (Kosovo has none)
  name: string; // German
  alt: string[]; // other accepted German spellings
  continent: Continent;
  capital: string | null; // German; null = left out of the capital quiz
  capitalInfo?: string;
  area: number; // km²
}
