import type { Epoch } from '../types';
import { ERSTER_WELTKRIEG, WEIMAR } from './e7-krieg-weimar';
import { NS_ZEIT } from './e7-ns';

export const E7: Epoch = {
  id: 'weltkriege',
  name: 'Weltkriege, Weimar und NS-Zeit',
  period: '1914–1945',
  events: [ERSTER_WELTKRIEG, WEIMAR, NS_ZEIT],
};
