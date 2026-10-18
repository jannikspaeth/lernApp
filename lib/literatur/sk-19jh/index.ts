import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ANDERSEN_KIERKEGAARD } from './andersen-kierkegaard';
import { IBSEN_STRINDBERG } from './ibsen-strindberg';

export const SK_19JH: HistEvent = {
  id: 'sk-19jh',
  title: 'Das 19. Jahrhundert im Norden',
  date: '1800–1900',
  text: [
    'Andersens Märchen, Kierkegaards Denken, Ibsens und Strindbergs Dramen: Aus dem Norden Europas kommt ein neues, ernstes Theater.',
  ],
  subtopics: [UEBERBLICK, ANDERSEN_KIERKEGAARD, IBSEN_STRINDBERG],
};
