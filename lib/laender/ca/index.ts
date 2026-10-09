import type { CountryHistory } from '../types';
import { E1 } from './e1-kolonie';
import { E2 } from './e2-expansion';
import { E3 } from './e3-jh20';
import { E4 } from './e4-heute';

// Canada in full depth: epochs → topics → subtopics with 20 questions per level.
export const CA: CountryHistory = {
  code: 'CA',
  epochs: [E1, E2, E3, E4],
};
