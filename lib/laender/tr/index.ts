import type { CountryHistory } from '../types';
import { TR_ALT } from '../tr-alt';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-anatolien';
import { E3 } from './e3-niedergang';

// Turkey in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in tr-alt.ts.
const ORDER = ['fruehzeit', 'anatolien', 'niedergang', 'moderne'];
const rewritten = [E1, E2, E3];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...TR_ALT.epochs.filter(e => !done.has(e.id))];

export const TR: CountryHistory = {
  code: 'TR',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
