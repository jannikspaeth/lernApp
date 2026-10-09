import type { Epoch } from '../types';
import { AZTEKEN } from './e1-azteken';
import { EROBERUNG } from './e1-eroberung';

export const E1: Epoch = {
  id: 'hochkulturen',
  name: 'Hochkulturen und Eroberung',
  period: 'bis 1810',
  events: [AZTEKEN, EROBERUNG],
};
