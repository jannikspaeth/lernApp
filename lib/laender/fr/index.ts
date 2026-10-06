import type { CountryHistory } from '../types';
import { FR_ALT } from '../fr-alt';
import { E1 } from './e1-anfaenge';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-neuzeit';

// France in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in fr-alt.ts.
const rewritten = [E1, E2, E3];
const done = new Set(rewritten.map(e => e.id));

export const FR: CountryHistory = {
  code: 'FR',
  epochs: [...rewritten, ...FR_ALT.epochs.filter(e => !done.has(e.id))],
};
