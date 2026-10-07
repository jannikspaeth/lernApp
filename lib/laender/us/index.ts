import type { CountryHistory } from '../types';
import { US_ALT } from '../us-alt';
import { E1 } from './e1-kolonialzeit';
import { E2 } from './e2-gruendung';
import { E3 } from './e3-buergerkrieg';

// USA in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in us-alt.ts.
const ORDER = ['kolonialzeit', 'gruendung', 'buergerkrieg-epoche', 'weltmacht', 'supermacht'];
const rewritten = [E1, E2, E3];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...US_ALT.epochs.filter(e => !done.has(e.id))];

export const US: CountryHistory = {
  code: 'US',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
