import type { CountryHistory } from '../types';
import { E1 } from './e1-antike';
import { E2 } from './e2-fruehmittelalter';
import { E3 } from './e3-hochmittelalter';
import { E4 } from './e4-spaetmittelalter';
import { E5 } from './e5-fruehe-neuzeit';
import { E6 } from './e6-19jh';
import { E7 } from './e7-1914-1945';
import { E8 } from './e8-seit-1945';

// Germany in full depth: epochs → topics → subtopics with 20 questions per level.
export const DE: CountryHistory = {
  code: 'DE',
  epochs: [E1, E2, E3, E4, E5, E6, E7, E8],
};
