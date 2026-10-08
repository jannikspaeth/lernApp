import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-rus';
import { E3 } from './e3-jh19-20';
import { E4 } from './e4-unabhaengig';

// Ukraine in full depth: epochs → topics → subtopics with 20 questions per level.
export const UA: CountryHistory = {
  code: 'UA',
  epochs: [E1, E2, E3, E4],
};
