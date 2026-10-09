import type { CountryHistory } from '../types';
import { E1 } from './e1-hochkulturen';
import { E2 } from './e2-unabhaengigkeit';
import { E3 } from './e3-modern';

// Mexico in full depth: epochs → topics → subtopics with 20 questions per level.
export const MX: CountryHistory = {
  code: 'MX',
  epochs: [E1, E2, E3],
};
