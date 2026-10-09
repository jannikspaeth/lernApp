import type { CountryHistory } from '../types';
import { AU_ALT } from '../au-alt';
import { E1 } from './e1-ureinwohner';
import { E2 } from './e2-kolonie';

const ORDER = ['ureinwohner', 'kolonie', 'nation', 'gegenwart'];
const rewritten = [E1, E2];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...AU_ALT.epochs.filter(e => !done.has(e.id))];

export const AU: CountryHistory = { code: 'AU', epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)) };
