import type { Epoch } from '../types';
import { REFORMATION, DREISSIGJAEHRIGER } from './e5-reformation';
import { PREUSSEN } from './e5-preussen';

export const E5: Epoch = {
  id: 'fruehe-neuzeit',
  name: 'Frühe Neuzeit',
  period: '1517–1789',
  events: [REFORMATION, DREISSIGJAEHRIGER, PREUSSEN],
};
