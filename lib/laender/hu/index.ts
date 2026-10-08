import type { CountryHistory } from '../types';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-koenigreich';
import { E3 } from './e3-habsburg';
import { E4 } from './e4-nachkrieg';

// Hungary in full depth: epochs → topics → subtopics with 20 questions per level.
export const HU: CountryHistory = {
  code: 'HU',
  epochs: [E1, E2, E3, E4],
};
