import type { CountryHistory } from '../types';
import { CZ_ALT } from '../cz-alt';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-boehmen';
import { E3 } from './e3-tschechoslowakei';

// Czechia in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in cz-alt.ts.
const ORDER = ['fruehzeit', 'boehmen', 'tschechoslowakei', 'tschechien'];
const rewritten = [E1, E2, E3];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...CZ_ALT.epochs.filter(e => !done.has(e.id))];

export const CZ: CountryHistory = {
  code: 'CZ',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
