import type { HistEvent } from '../../laender/types';
import { VORFAHREN } from './vorfahren';
import { NEANDERTALER } from './neandertaler';
import { SAPIENS } from './sapiens';

export const ME_MENSCH: HistEvent = {
  id: 'me-mensch',
  title: 'Die Entwicklung des Menschen',
  date: 'vor 7 Mio. Jahren – heute',
  text: [
    'Von den ersten aufrecht gehenden Vormenschen in Afrika über Homo erectus und die Neandertaler bis zum Homo sapiens, der die ganze Welt besiedelte: die Geschichte unserer Herkunft, rekonstruiert aus Knochen, Werkzeugen und alter DNA.',
  ],
  subtopics: [VORFAHREN, NEANDERTALER, SAPIENS],
};
