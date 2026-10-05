import type { CountryHistory } from '../types';
import { DE_ALT } from '../de-alt';
import { E1 } from './e1-antike';
import { E2 } from './e2-fruehmittelalter';

// Germany in full depth: epochs → topics → subtopics with 20 questions per level.
// Epochs not yet rewritten still come from the shorter version in de-alt.ts.
const rewritten = [E1, E2];
const done = new Set(rewritten.map(e => e.id));

export const DE: CountryHistory = {
  code: 'DE',
  epochs: [...rewritten, ...DE_ALT.epochs.filter(e => !done.has(e.id))],
};
