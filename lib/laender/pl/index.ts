import type { CountryHistory } from '../types';
import { E1 } from './e1-mittelalter';
import { E2 } from './e2-adelsrepublik';
import { E3 } from './e3-teilungen';
import { E4 } from './e4-jh20';

// Poland in full depth (epochs → topics → subtopics, 20 questions per level).
export const PL: CountryHistory = { code: 'PL', epochs: [E1, E2, E3, E4] };
