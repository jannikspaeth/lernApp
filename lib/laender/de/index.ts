import type { CountryHistory } from '../types';
import { E1 } from './e1-antike';
import { E2 } from './e2-fruehmittelalter';
import { E3 } from './e3-hochmittelalter';
import { E4 } from './e4-spaetmittelalter';
import { E5 } from './e5-fruehe-neuzeit';
import { E6 } from './e6-19jh';
import { E7 } from './e7-1914-1945';
import { DE_ALT } from '../de-alt';

// Germany in full depth: epochs → topics → subtopics with 20 questions per level.
// Epochs not yet rewritten still come from the shorter version in de-alt.ts
// ('mittelalter' there is replaced by E3 + E4).
const rewritten = [E1, E2, E3, E4, E5, E6, E7];
const replaced = new Set(['antike', 'fruehmittelalter', 'mittelalter', 'fruehe-neuzeit', 'jh19', 'weltkriege']);

export const DE: CountryHistory = {
  code: 'DE',
  epochs: [...rewritten, ...DE_ALT.epochs.filter(e => !replaced.has(e.id))],
};
