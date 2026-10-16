import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { JOYCE_WOOLF } from './joyce-woolf';
import { ORWELL } from './orwell';

export const EN_MODERNE: HistEvent = {
  id: 'en-moderne',
  title: 'Moderne und Gegenwart',
  date: 'ab 1900',
  text: [
    'Nach dem Ersten Weltkrieg zerbricht die alte Erzählform: Joyce und Woolf verlegen den Roman ins Innere, Orwell schreibt die Warnung vor dem totalen Staat.',
  ],
  subtopics: [UEBERBLICK, JOYCE_WOOLF, ORWELL],
};
