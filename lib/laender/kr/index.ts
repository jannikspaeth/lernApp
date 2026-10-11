import type { CountryHistory } from '../types';
import { E1 } from './e1-koenigreiche';
import { E2 } from './e2-jh20';
import { E3 } from './e3-suedkorea';

export const KR: CountryHistory = { code: 'KR', epochs: [E1, E2, E3] };
