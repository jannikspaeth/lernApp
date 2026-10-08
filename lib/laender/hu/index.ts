import type { CountryHistory } from '../types';
import { HU_ALT } from '../hu-alt';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-koenigreich';
import { E3 } from './e3-habsburg';

// Hungary in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in hu-alt.ts.
const ORDER = ['fruehzeit', 'koenigreich', 'habsburg', 'nachkrieg'];
const rewritten = [E1, E2, E3];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...HU_ALT.epochs.filter(e => !done.has(e.id))];

export const HU: CountryHistory = {
  code: 'HU',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
