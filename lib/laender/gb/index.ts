import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-tudors-stuarts';
import { E4 } from './e4-empire';
import { E5 } from './e5-weltkriege';
import { E6 } from './e6-gegenwart';

// Britain in full depth (epochs → topics → subtopics, 20 questions per level).
export const GB: CountryHistory = { code: 'GB', epochs: [E1, E2, E3, E4, E5, E6] };
