import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { DAVID } from './david';

export const KLASSIZISMUS: HistEvent = {
  id: 'klassizismus',
  title: 'Klassizismus',
  date: 'um 1750–1830',
  text: [
    'Vernunft statt Verspieltheit: Der Klassizismus blickte zurück auf die Antike und schuf klare, ruhige Werke – oft im Dienst von Revolution und Kaiserreich.',
  ],
  subtopics: [UEBERBLICK, DAVID],
};
