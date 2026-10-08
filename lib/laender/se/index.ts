import type { CountryHistory } from '../types';
import { SE_ALT } from '../se-alt';
import { E1 } from './e1-fruehzeit';

// Sweden in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in se-alt.ts.
const ORDER = ['fruehzeit', 'mittelalter', 'grossmacht', 'jh20'];
const rewritten = [E1];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...SE_ALT.epochs.filter(e => !done.has(e.id))];

export const SE: CountryHistory = {
  code: 'SE',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
