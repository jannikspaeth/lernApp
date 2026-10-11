import type { Epoch } from '../types';
import { FRUEHZEIT } from './e1-fruehzeit-sub';
import { AKSUM } from './e1-aksum-sub';
import { LALIBELA } from './e1-lalibela-sub';
import { GONDAR } from './e1-gondar-sub';

export const E1: Epoch = {
  id: 'antike',
  name: 'Aksum und das christliche Hochland',
  period: 'bis 1855',
  events: [
    {
      id: 'aksum',
      title: 'Lucy, Aksum und die Königin von Saba',
      date: 'bis 10. Jahrhundert',
      text: [
        'Äthiopien ist eine Wiege der Menschheit. Aus den frühen Kulturen im Hochland entstand das Reich von Aksum, das als eines der ersten das Christentum annahm.',
      ],
      subtopics: [FRUEHZEIT, AKSUM],
    },
    {
      id: 'lalibela',
      title: 'Lalibela und das christliche Hochland',
      date: '10.–19. Jahrhundert',
      text: [
        'Im Hochland behauptete sich das christliche Kaiserreich gegen Angriffe von allen Seiten – mit Felsenkirchen in Lalibela und den Burgen von Gondar als Zeugnissen.',
      ],
      subtopics: [LALIBELA, GONDAR],
    },
  ],
};
