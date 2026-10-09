import type { CountryHistory } from '../types';
import { JP_ALT } from '../jp-alt';
import { E1 } from './e1-fruehzeit';
import { E2 } from './e2-samurai';
import { E3 } from './e3-modernisierung';

const ORDER = ['fruehzeit', 'samurai-zeit', 'modernisierung', 'nachkrieg'];
const rewritten = [E1, E2, E3];
const done = new Set(rewritten.map(e => e.id));
const epochs = [...rewritten, ...JP_ALT.epochs.filter(e => !done.has(e.id))];

export const JP: CountryHistory = { code: 'JP', epochs: epochs.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)) };
