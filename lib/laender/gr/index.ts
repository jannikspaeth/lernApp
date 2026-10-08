import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-antike';
import { E3 } from './e3-byzanz';
import { E4 } from './e4-neuzeit';

// Greece in full depth: epochs → topics → subtopics with 20 questions per level.
export const GR: CountryHistory = {
  code: 'GR',
  epochs: [E1, E2, E3, E4],
};
