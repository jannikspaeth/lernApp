import type { CountryHistory } from '../types';
import { E1 } from './e1-ureinwohner';
import { E2 } from './e2-kolonie';
import { E3 } from './e3-nation';
import { E4 } from './e4-gegenwart';

export const AU: CountryHistory = { code: 'AU', epochs: [E1, E2, E3, E4] };
