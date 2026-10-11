import type { Epoch } from '../types';
import { ANFAENGE } from './e2-anfaenge-sub';
import { AKBAR } from './e2-akbar-sub';
import { SPAET } from './e2-spaet-sub';
import { KOMPANIE } from './e2-kompanie-sub';
import { GANDHI } from './e2-gandhi-sub';

export const E2: Epoch = {
  id: 'mogul-briten',
  name: 'Mogulreich und britische Herrschaft',
  period: '1206–1947',
  events: [
    {
      id: 'mogulreich',
      title: 'Das Mogulreich',
      date: '1206–1857',
      text: [
        'Aus den Sultanaten von Delhi ging das Mogulreich hervor, das unter Akbar und Shah Jahan Indiens Kultur prägte. Seine Spuren sind bis heute im Taj Mahal, in der Küche und in der Sprache zu sehen.',
      ],
      subtopics: [ANFAENGE, AKBAR, SPAET],
    },
    {
      id: 'gandhi',
      title: 'Britische Herrschaft und Gandhi',
      date: '1600–1947',
      text: [
        'Aus einer Handelsgesellschaft wurde eine Kolonialmacht: Erst herrschte die Ostindien-Kompanie, ab 1858 die Krone. Gegen sie führte Mahatma Gandhi die Unabhängigkeitsbewegung mit gewaltlosem Widerstand an.',
      ],
      subtopics: [KOMPANIE, GANDHI],
    },
  ],
};
