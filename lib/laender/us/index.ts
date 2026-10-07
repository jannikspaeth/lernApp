import type { CountryHistory } from '../types';
import { E1 } from './e1-kolonialzeit';
import { E2 } from './e2-gruendung';
import { E3 } from './e3-buergerkrieg';
import { E4 } from './e4-weltmacht';
import { E5 } from './e5-supermacht';

// USA in full depth (epochs → topics → subtopics, 20 questions per level).
export const US: CountryHistory = { code: 'US', epochs: [E1, E2, E3, E4, E5] };
