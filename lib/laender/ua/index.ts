import type { CountryHistory } from '../types';
import { UA_ALT } from '../ua-alt';
import { E1 } from './e1-fruehzeit';

// Ukraine in full depth (epochs → topics → subtopics, 20 questions per level).
// Epochs not yet rewritten still come from the short version in ua-alt.ts.
const ORDER = ['fruehzeit', 'rus', 'jh19-20', 'unabhaengige-ukraine'];
const rewritten = [E1];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...UA_ALT.epochs.filter(e => !done.has(e.id))];

export const UA: CountryHistory = {
  code: 'UA',
  epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
};
