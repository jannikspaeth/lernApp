import type { CountryHistory } from '../types';
import { RU_ALT } from '../ru-alt';
import { E1 } from './e1-rus';

// Russia in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in ru-alt.ts.
const ORDER = ['rus', 'zarenreich', 'sowjetunion', 'russland-heute'];
const rewritten = [E1];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...RU_ALT.epochs.filter(e => !done.has(e.id))];

export const RU: CountryHistory = {
  code: 'RU',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
