import type { Epoch } from '../types';
import { REICHE } from './e1-reiche-sub';
import { SILLA_GORYEO } from './e1-silla-goryeo-sub';
import { JOSEON } from './e1-joseon-sub';
import { IMJIN } from './e1-imjin-sub';

export const E1: Epoch = {
  id: 'koenigreiche',
  name: 'Koreanische Königreiche',
  period: 'bis 1897',
  events: [
    {
      id: 'goryeo',
      title: 'Drei Reiche, Silla und Goryeo',
      date: 'bis 1392',
      text: [
        'Von der Gründungslegende Danguns über die Drei Reiche bis zu Goryeo, nach dem Korea seinen Namen trägt, entwickelte die Halbinsel früh eine eigene Kultur zwischen China und Japan.',
      ],
      subtopics: [REICHE, SILLA_GORYEO],
    },
    {
      id: 'joseon',
      title: 'Joseon, Hangeul und Admiral Yi',
      date: '1392–1897',
      text: [
        'Die Joseon-Dynastie regierte über 500 Jahre. Sie schenkte Korea die Schrift Hangeul, überstand die japanische Invasion dank Admiral Yi Sun-sin und schottete sich im 19. Jahrhundert ab, bis die Öffnung erzwungen wurde.',
      ],
      subtopics: [JOSEON, IMJIN],
    },
  ],
};
