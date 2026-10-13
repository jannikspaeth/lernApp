import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { FRUEH } from './frueh';
import { ROMANIK } from './romanik';
import { GOTIK } from './gotik';

export const BAUKUNST_MITTELALTER: HistEvent = {
  id: 'baukunst-mittelalter',
  title: 'Kirchenbau des Mittelalters',
  date: 'um 500–1500',
  text: [
    'Vom byzantinischen Kuppelbau über die wuchtige Romanik bis zu den lichtdurchfluteten gotischen Kathedralen: Die Kirche war im Mittelalter der große Bauherr.',
  ],
  subtopics: [UEBERBLICK, FRUEH, ROMANIK, GOTIK],
};
