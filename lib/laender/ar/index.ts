import type { CountryHistory } from '../types';
import { E1 } from './e1-kolonie';
import { E2 } from './e2-unabhaengigkeit';
import { E3 } from './e3-aufstieg';
import { E4 } from './e4-gegenwart';

export const AR: CountryHistory = { code: 'AR', epochs: [E1, E2, E3, E4] };
