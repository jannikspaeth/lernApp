import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-grossmacht';
import { E4 } from './e4-jh20';

// Sweden in full depth: epochs → topics → subtopics with 20 questions per level.
export const SE: CountryHistory = {
  code: 'SE',
  epochs: [E1, E2, E3, E4],
};
