import type { Epoch } from '../types';
import { ERSTER_KAISER } from './e2-qin-han-event';
import { MING } from './e2-ming-event';

export const E2: Epoch = {
  id: 'kaiserreich',
  name: 'Das Kaiserreich',
  period: '221 v. Chr. – 1644',
  events: [ERSTER_KAISER, MING],
};
