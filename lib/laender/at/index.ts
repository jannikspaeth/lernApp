import type { CountryHistory } from '../types';
import { AT_ALT } from '../at-alt';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-mittelalter';

// Austria in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in at-alt.ts.
const ORDER = ['fruehzeit', 'mittelalter', 'grossmacht', 'republik', 'zweite-republik'];
const rewritten = [E1, E2];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...AT_ALT.epochs.filter(e => !done.has(e.id))];

export const AT: CountryHistory = {
  code: 'AT',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
