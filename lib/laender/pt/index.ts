import type { CountryHistory } from '../types';
import { PT_ALT } from '../pt-alt';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-mittelalter';

// Portugal in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in pt-alt.ts.
const ORDER = ['fruehzeit', 'mittelalter', 'neuzeit', 'demokratie'];
const rewritten = [E1, E2];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...PT_ALT.epochs.filter(e => !done.has(e.id))];

export const PT: CountryHistory = {
  code: 'PT',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
