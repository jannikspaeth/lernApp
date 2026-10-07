import type { CountryHistory } from '../types';
import { E1 } from './e1-rus';
import { E2 } from './e2-zarenreich';
import { E3 } from './e3-sowjetunion';
import { E4 } from './e4-russland-heute';

// Russia in full depth (epochs → topics → subtopics, 20 questions per level).
export const RU: CountryHistory = { code: 'RU', epochs: [E1, E2, E3, E4] };
