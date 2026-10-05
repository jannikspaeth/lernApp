import type { Epoch } from '../types';
import { BESATZUNG, BRD } from './e8-teilung-brd';
import { DDR, EINHEIT } from './e8-ddr-einheit';

export const E8: Epoch = {
  id: 'nachkriegszeit',
  name: 'Teilung und Einheit',
  period: 'seit 1945',
  events: [BESATZUNG, BRD, DDR, EINHEIT],
};
