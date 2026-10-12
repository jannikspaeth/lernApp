import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { GIOTTO } from './giotto';
import { NAUMBURG } from './naumburg';

export const GOTIK: HistEvent = {
  id: 'gotik',
  title: 'Gotik',
  date: 'um 1140–1500',
  text: [
    'Himmelstürmende Kathedralen, bunte Glasfenster und lebendigere Figuren: Die Gotik suchte Licht und Höhe – und bereitete in Italien die Renaissance vor.',
  ],
  subtopics: [UEBERBLICK, GIOTTO, NAUMBURG],
};
