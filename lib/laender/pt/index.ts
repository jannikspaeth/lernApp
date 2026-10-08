import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-neuzeit';
import { E4 } from './e4-demokratie';

// Portugal in full depth: epochs → topics → subtopics with 20 questions per level.
export const PT: CountryHistory = {
  code: 'PT',
  epochs: [E1, E2, E3, E4],
};
