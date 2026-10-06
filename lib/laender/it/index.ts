import type { CountryHistory } from '../types';
import { E1 } from './e1-antike';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-renaissance';
import { E4 } from './e4-einigung';
import { E5 } from './e5-faschismus';
import { E6 } from './e6-republik';

// Italy in full depth (epochs → topics → subtopics, 20 questions per level).
export const IT: CountryHistory = { code: 'IT', epochs: [E1, E2, E3, E4, E5, E6] };
