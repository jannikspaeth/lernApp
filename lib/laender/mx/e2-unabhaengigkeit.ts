import type { Epoch } from '../types';
import { GRITO, JUAREZ } from './e2-grito-juarez';
import { REVOLUTION } from './e2-revolution';

export const E2: Epoch = {
  id: 'unabhaengigkeit',
  name: 'Unabhängigkeit und Revolution',
  period: '1810–1920',
  events: [GRITO, JUAREZ, REVOLUTION],
};
