import type { CountryHistory } from '../types';
import { GR_ALT } from '../gr-alt';
import { E1 } from './e1-fruehzeit';

// Greece in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in gr-alt.ts.
const ORDER = ['fruehzeit', 'antike', 'byzanz', 'neuzeit'];
const rewritten = [E1];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...GR_ALT.epochs.filter(e => !done.has(e.id))];

export const GR: CountryHistory = {
  code: 'GR',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
