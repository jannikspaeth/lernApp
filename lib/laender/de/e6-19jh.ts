import type { Epoch } from '../types';
import { NAPOLEON, VORMAERZ_1848 } from './e6-napoleon-1848';
import { INDUSTRIALISIERUNG, REICHSGRUENDUNG } from './e6-industrie-reich';

export const E6: Epoch = {
  id: 'jh19',
  name: 'Das 19. Jahrhundert',
  period: '1789–1914',
  events: [NAPOLEON, VORMAERZ_1848, INDUSTRIALISIERUNG, REICHSGRUENDUNG],
};
