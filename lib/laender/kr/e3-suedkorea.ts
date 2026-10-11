import type { Epoch } from '../types';
import { PARK } from './e3-park-sub';
import { DEMOKRATIE } from './e3-demokratie-sub';
import { HEUTE } from './e3-heute-sub';

export const E3: Epoch = {
  id: 'suedkorea',
  name: 'Südkorea',
  period: 'seit 1953',
  events: [
    {
      id: 'wunder-am-han',
      title: 'Wunder am Han-Fluss und Demokratie',
      date: 'seit 1953',
      text: [
        'Aus einem zerstörten, armen Land wurde in wenigen Jahrzehnten eine Industrienation und eine lebendige Demokratie, die heute mit K-Pop und Technik die Welt prägt.',
      ],
      subtopics: [PARK, DEMOKRATIE, HEUTE],
    },
  ],
};
