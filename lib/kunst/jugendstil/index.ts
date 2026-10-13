import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { KLIMT } from './klimt';
import { MUNCH } from './munch';

export const JUGENDSTIL: HistEvent = {
  id: 'jugendstil',
  title: 'Jugendstil und Symbolismus',
  date: 'um 1890–1910',
  text: [
    'Geschwungene Linien, Gold und Seelenängste: Zwischen 1890 und 1910 suchten Künstler in Wien, Paris und Oslo nach einer neuen Bildsprache für Schönheit, Liebe und Angst.',
  ],
  subtopics: [UEBERBLICK, KLIMT, MUNCH],
};
