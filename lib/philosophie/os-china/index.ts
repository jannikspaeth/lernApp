import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { KONFUZIUS } from './konfuzius';
import { LAOZI } from './laozi';

export const OS_CHINA: HistEvent = {
  id: 'os-china',
  title: 'Chinesische Philosophie',
  date: 'um 600 v. Chr. – heute',
  text: [
    'Die „hundert Schulen“ Chinas fragen, wie man gut lebt und gerecht regiert: Konfuzius lehrt Menschlichkeit und Riten, Laozi und Zhuangzi den Weg des Dao, Mozi die allumfassende Liebe und die Legalisten die Herrschaft des Gesetzes.',
  ],
  subtopics: [UEBERBLICK, KONFUZIUS, LAOZI],
};
