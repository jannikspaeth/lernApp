import type { CountryHistory } from '../types';
import { CH_ALT } from '../ch-alt';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-eidgenossenschaft';
import { E3 } from './e3-moderne-schweiz';

// Switzerland in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in ch-alt.ts.
const ORDER = ['fruehzeit', 'eidgenossenschaft', 'moderne-schweiz', 'jh20'];
const rewritten = [E1, E2, E3];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...CH_ALT.epochs.filter(e => !done.has(e.id))];

export const CH: CountryHistory = {
  code: 'CH',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
