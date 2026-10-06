import type { CountryHistory } from '../types';
import { ES_ALT } from '../es-alt';
import { E1 } from './e1-antike';

// Spain in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in es-alt.ts.
const ORDER = ['antike', 'mittelalter', 'weltreich', 'jh19', 'jh20', 'demokratie'];
const rewritten = [E1];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...ES_ALT.epochs.filter(e => !done.has(e.id))];

export const ES: CountryHistory = {
  code: 'ES',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
