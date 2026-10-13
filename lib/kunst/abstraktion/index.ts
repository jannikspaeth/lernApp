import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MALEWITSCH_MONDRIAN } from './malewitsch-mondrian';

export const ABSTRAKTION: HistEvent = {
  id: 'abstraktion',
  title: 'Abstrakte Kunst',
  date: 'um 1910–1950',
  text: [
    'Farbe und Form ohne Gegenstand: Kandinsky, Malewitsch und Mondrian befreiten die Malerei vom Abbilden und schufen eine neue Bildsprache.',
  ],
  subtopics: [UEBERBLICK, MALEWITSCH_MONDRIAN],
};
