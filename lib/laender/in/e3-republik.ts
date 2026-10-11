import type { Epoch } from '../types';
import { TEILUNG } from './e3-teilung-sub';
import { NEHRU } from './e3-nehru-sub';
import { HEUTE } from './e3-heute-sub';

export const E3: Epoch = {
  id: 'republik',
  name: 'Die Republik Indien',
  period: 'seit 1947',
  events: [
    {
      id: 'unabhaengigkeit',
      title: 'Unabhängigkeit und Teilung',
      date: 'seit 1947',
      text: [
        'Am 15. August 1947 wurde Indien unabhängig – um den Preis der Teilung. Seitdem ist Indien die bevölkerungsreichste Demokratie der Welt und ein aufstrebender Wirtschaftsriese mit vielen Herausforderungen.',
      ],
      subtopics: [TEILUNG, NEHRU, HEUTE],
    },
  ],
};
