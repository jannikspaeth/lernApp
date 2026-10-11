import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-kriege';
import { E3 } from './e3-gegenwart';

export const VN: CountryHistory = { code: 'VN', epochs: [E1, E2, E3] };
