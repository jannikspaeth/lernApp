import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-samurai';
import { E3 } from './e3-modernisierung';
import { E4 } from './e4-nachkrieg';

export const JP: CountryHistory = { code: 'JP', epochs: [E1, E2, E3, E4] };
