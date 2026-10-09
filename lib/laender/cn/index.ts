import type { CountryHistory } from '../types';
import { CN_ALT } from '../cn-alt';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-kaiserreich';

const ORDER = ['fruehzeit', 'kaiserreich', 'qing', 'moderne'];
const rewritten = [E1, E2];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...CN_ALT.epochs.filter(e => !done.has(e.id))];

export const CN: CountryHistory = { code: 'CN', epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)) };
