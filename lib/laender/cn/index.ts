import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-kaiserreich';
import { E3 } from './e3-qing';
import { E4 } from './e4-moderne';

export const CN: CountryHistory = { code: 'CN', epochs: [E1, E2, E3, E4] };
