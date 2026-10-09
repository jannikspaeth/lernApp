import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-anatolien';
import { E3 } from './e3-niedergang';
import { E4 } from './e4-moderne';

// Turkey in full depth: epochs → topics → subtopics with 20 questions per level.
export const TR: CountryHistory = {
  code: 'TR',
  epochs: [E1, E2, E3, E4],
};
