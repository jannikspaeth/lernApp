import type { CountryHistory } from '../types';
import { PL_ALT } from '../pl-alt';
import { E1 } from './e1-mittelalter';
import { E2 } from './e2-adelsrepublik';
import { E3 } from './e3-teilungen';

// Poland in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in pl-alt.ts.
const ORDER = ['mittelalter', 'adelsrepublik', 'teilungen', 'jh20'];
const rewritten = [E1, E2, E3];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...PL_ALT.epochs.filter(e => !done.has(e.id))];

export const PL: CountryHistory = {
  code: 'PL',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
