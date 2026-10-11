import type { Epoch } from '../types';
import { FRUEHE_REICHE } from './e1-fruehe-reiche-sub';
import { MAJAPAHIT } from './e1-majapahit-sub';
import { VOC } from './e1-voc-sub';
import { KOLONIAL } from './e1-kolonial-sub';

export const E1: Epoch = {
  id: 'reiche',
  name: 'Seereiche und Gewürzhandel',
  period: 'bis 1942',
  events: [
    {
      id: 'srivijaya',
      title: 'Srivijaya, Borobudur und Majapahit',
      date: 'bis 1600',
      text: [
        'Zwischen Indien und China beherrschten Hafenreiche den Handel. Auf Srivijaya und Borobudur folgten Majapahit und die muslimischen Sultanate.',
      ],
      subtopics: [FRUEHE_REICHE, MAJAPAHIT],
    },
    {
      id: 'voc',
      title: 'Gewürzinseln und Niederländisch-Indien',
      date: '1511–1942',
      text: [
        'Der Gewürzhandel lockte Portugiesen und Niederländer. Aus der VOC wurde eine Kolonie, gegen die sich eine Nationalbewegung formierte.',
      ],
      subtopics: [VOC, KOLONIAL],
    },
  ],
};
