import type { CountryHistory } from '../types';
import { NL_ALT } from '../nl-alt';
import { E1 } from './e1-fruehzeit';

// Netherlands in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in nl-alt.ts.
const ORDER = ['fruehzeit', 'republik', 'koenigreich', 'jh20'];
const rewritten = [E1];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...NL_ALT.epochs.filter(e => !done.has(e.id))];

export const NL: CountryHistory = {
  code: 'NL',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
