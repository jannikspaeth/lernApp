import type { CountryHistory } from '../types';
import { ES_ALT } from '../es-alt';
import { E1 } from './e1-antike';
import { E2 } from './e2-mittelalter';
import { E3 } from './e3-weltreich';
import { E4 } from './e4-jh19';
import { E5 } from './e5-jh20';

// Spain in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in es-alt.ts.
const ORDER = ['antike', 'mittelalter', 'weltreich', 'jh19', 'jh20', 'demokratie'];
const rewritten = [E1, E2, E3, E4, E5];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...ES_ALT.epochs.filter(e => !done.has(e.id))];

export const ES: CountryHistory = {
  code: 'ES',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
