import type { CountryHistory } from '../types';
import { AR_ALT } from '../ar-alt';
import { E1 } from './e1-kolonie';
import { E2 } from './e2-unabhaengigkeit';

const ORDER = ['kolonie', 'unabhaengigkeit', 'aufstieg', 'gegenwart'];
const rewritten = [E1, E2];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...AR_ALT.epochs.filter(e => !done.has(e.id))];

export const AR: CountryHistory = { code: 'AR', epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)) };
