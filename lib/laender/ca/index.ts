import type { CountryHistory } from '../types';
import { CA_ALT } from '../ca-alt';
import { E1 } from './e1-kolonie';
import { E2 } from './e2-expansion';

// Canada in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in ca-alt.ts.
const ORDER = ['kolonie', 'expansion', 'jh20', 'heute'];
const rewritten = [E1, E2];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...CA_ALT.epochs.filter(e => !done.has(e.id))];

export const CA: CountryHistory = {
  code: 'CA',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
