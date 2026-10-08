import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-boehmen';
import { E3 } from './e3-tschechoslowakei';
import { E4 } from './e4-tschechien';

// Czechia in full depth: epochs → topics → subtopics with 20 questions per level.
export const CZ: CountryHistory = {
  code: 'CZ',
  epochs: [E1, E2, E3, E4],
};
