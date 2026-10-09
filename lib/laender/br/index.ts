import type { CountryHistory } from '../types';
import { BR_ALT } from '../br-alt';
import { E1 } from './e1-kolonie';

const ORDER = ['kolonie', 'republik'];
const rewritten = [E1];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...BR_ALT.epochs.filter(e => !done.has(e.id))];

export const BR: CountryHistory = { code: 'BR', epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)) };
