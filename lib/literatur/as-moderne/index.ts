import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { TAGORE_LU_XUN } from './tagore-lu-xun';
import { JAPAN_MODERNE } from './japan-moderne';

export const AS_MODERNE: HistEvent = {
  id: 'as-moderne',
  title: 'Asien seit 1900',
  date: 'ab 1900',
  text: [
    'Tagore, Lu Xun, Sōseki, Kawabata und Murakami: Asien öffnet sich dem Westen, ohne seine Tradition zu verlieren, und gewinnt Weltgeltung.',
  ],
  subtopics: [UEBERBLICK, TAGORE_LU_XUN, JAPAN_MODERNE],
};
