import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-eidgenossenschaft';
import { E3 } from './e3-moderne-schweiz';
import { E4 } from './e4-jh20';

// Switzerland in full depth (epochs → topics → subtopics, 20 questions per level).
export const CH: CountryHistory = { code: 'CH', epochs: [E1, E2, E3, E4] };
