import type { CountryHistory } from '../types';
import { IT_ALT } from '../it-alt';
import { E1 } from './e1-antike';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-renaissance';
import { E4 } from './e4-einigung';
import { E5 } from './e5-faschismus';

// Italy in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in it-alt.ts.
const rewritten = [E1, E2, E3, E4, E5];
const done = new Set(rewritten.map(e => e.id));

export const IT: CountryHistory = {
  code: 'IT',
  epochs: [...rewritten, ...IT_ALT.epochs.filter(e => !done.has(e.id))],
};
