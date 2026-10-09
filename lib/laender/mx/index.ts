import type { CountryHistory } from '../types';
import { MX_ALT } from '../mx-alt';
import { E1 } from './e1-hochkulturen';
import { E2 } from './e2-unabhaengigkeit';

// Mexico in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in mx-alt.ts.
const ORDER = ['hochkulturen', 'unabhaengigkeit', 'modern'];
const rewritten = [E1, E2];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...MX_ALT.epochs.filter(e => !done.has(e.id))];

export const MX: CountryHistory = {
  code: 'MX',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
