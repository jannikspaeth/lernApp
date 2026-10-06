import type { CountryHistory } from '../types';
import { E1 } from './e1-antike';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-weltreich';
import { E4 } from './e4-jh19';
import { E5 } from './e5-jh20';
import { E6 } from './e6-demokratie';

// Spain in full depth (epochs → topics → subtopics, 20 questions per level).
export const ES: CountryHistory = { code: 'ES', epochs: [E1, E2, E3, E4, E5, E6] };
