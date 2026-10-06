import type { CountryHistory } from '../types';
import { E1 } from './e1-anfaenge';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-neuzeit';
import { E4 } from './e4-revolution';
import { E5 } from './e5-19jh';
import { E6 } from './e6-weltkriege';
import { E7 } from './e7-gegenwart';

// France in full depth: epochs → topics → subtopics with 20 questions per level.
export const FR: CountryHistory = {
  code: 'FR',
  epochs: [E1, E2, E3, E4, E5, E6, E7],
};
