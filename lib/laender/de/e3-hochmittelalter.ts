import type { Epoch } from '../types';
import { OTTONEN, SALIER, STAUFER } from './e3-herrscher';
import { GESELLSCHAFT } from './e3-gesellschaft';

export const E3: Epoch = {
  id: 'hochmittelalter',
  name: 'Hochmittelalter',
  period: '919–1273',
  events: [OTTONEN, SALIER, STAUFER, GESELLSCHAFT],
};
