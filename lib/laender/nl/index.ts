import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-republik';
import { E3 } from './e3-koenigreich';
import { E4 } from './e4-jh20';

// Netherlands in full depth (epochs → topics → subtopics, 20 questions per level).
export const NL: CountryHistory = { code: 'NL', epochs: [E1, E2, E3, E4] };
