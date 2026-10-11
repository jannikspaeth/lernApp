import type { Epoch } from '../types';
import { DOIMOI } from './e3-doimoi-sub';
import { HEUTE } from './e3-heute-sub';

export const E3: Epoch = {
  id: 'gegenwart',
  name: 'Erneuerung',
  period: 'seit 1976',
  events: [
    {
      id: 'doi-moi',
      title: 'Đổi Mới und wirtschaftlicher Aufstieg',
      date: 'seit 1976',
      text: [
        'Aus einem verwüsteten, isolierten Land wurde in wenigen Jahrzehnten eine Wirtschaftsmacht: Mit der Reformpolitik Đổi Mới öffnete sich Vietnam der Welt, ohne das Machtmonopol der Partei aufzugeben.',
      ],
      subtopics: [DOIMOI, HEUTE],
    },
  ],
};
