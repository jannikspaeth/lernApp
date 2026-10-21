import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ARCHIMEDES } from './archimedes';
import { NEWTON } from './newton';
import { ENERGIE } from './energie';
import { WAERME } from './waerme';
import { SCHALL } from './schall';

export const PH_MECHANIK: HistEvent = {
  id: 'ph-mechanik',
  title: 'Mechanik, Energie und Wärme',
  date: 'Antike – 19. Jahrhundert',
  text: [
    'Hebel und Auftrieb, Newtons Bewegungsgesetze, Energie, Wärme und Schall: die klassische Physik, die bis heute erklärt, wie Brücken halten, Motoren laufen und Töne entstehen.',
  ],
  subtopics: [UEBERBLICK, ARCHIMEDES, NEWTON, ENERGIE, WAERME, SCHALL],
};
