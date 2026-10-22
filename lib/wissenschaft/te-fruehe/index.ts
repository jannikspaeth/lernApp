import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { BUCHDRUCK } from './buchdruck';
import { UHREN } from './uhren';

export const TE_FRUEHE: HistEvent = {
  id: 'te-fruehe',
  title: 'Frühe Erfindungen',
  date: 'Steinzeit – 18. Jahrhundert',
  text: [
    'Feuer und Rad, Papier und Kompass, Gutenbergs Buchdruck und die Kunst, die Zeit zu messen: Erfindungen, die die Welt lange vor der Industrialisierung veränderten.',
  ],
  subtopics: [UEBERBLICK, BUCHDRUCK, UHREN],
};
