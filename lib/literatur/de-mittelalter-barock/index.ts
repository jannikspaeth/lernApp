import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HOEFISCHE_DICHTUNG } from './hoefische-dichtung';
import { BAROCK } from './barock';

export const DE_MITTELALTER_BAROCK: HistEvent = {
  id: 'de-mittelalter-barock',
  title: 'Mittelalter und Barock',
  date: 'um 750–1720',
  text: [
    'Von den ersten Zeilen in deutscher Sprache über die Ritterdichtung um 1200 bis zur Vergänglichkeitsdichtung nach dem Dreißigjährigen Krieg.',
  ],
  subtopics: [UEBERBLICK, HOEFISCHE_DICHTUNG, BAROCK],
};
