import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HAYDN } from './haydn';
import { MOZART } from './mozart';
import { BEETHOVEN } from './beethoven';

export const KL_WIENER_KLASSIK: HistEvent = {
  id: 'kl-wiener-klassik',
  title: 'Wiener Klassik',
  date: '1770–1827',
  text: [
    'Klarheit, Ebenmaß und Drama in Tönen: Haydn, Mozart und Beethoven machen Wien zur Hauptstadt der Musik und schaffen Sinfonie, Streichquartett und Sonate in ihrer klassischen Form.',
  ],
  subtopics: [UEBERBLICK, HAYDN, MOZART, BEETHOVEN],
};
