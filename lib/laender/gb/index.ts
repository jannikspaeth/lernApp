import type { CountryHistory } from '../types';
import { GB_ALT } from '../gb-alt';
import { E1 } from './e1-fruehzeit';

// Britain in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in gb-alt.ts.
const rewritten = [E1];
const done = new Set(rewritten.map(e => e.id));

export const GB: CountryHistory = {
  code: 'GB',
  epochs: [...rewritten, ...GB_ALT.epochs.filter(e => !done.has(e.id))],
};
