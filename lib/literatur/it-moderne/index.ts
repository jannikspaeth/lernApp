import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MANZONI_LEOPARDI } from './manzoni-leopardi';
import { PIRANDELLO_SVEVO } from './pirandello-svevo';
import { LEVI_CALVINO_ECO } from './levi-calvino-eco';

export const IT_MODERNE: HistEvent = {
  id: 'it-moderne',
  title: 'Italien seit 1800',
  date: 'ab 1800',
  text: [
    'Von Manzonis historischem Roman über Pirandellos Maskenspiele bis zu Calvino und Eco: Die italienische Literatur der Moderne ist witzig, klug und politisch.',
  ],
  subtopics: [UEBERBLICK, MANZONI_LEOPARDI, PIRANDELLO_SVEVO, LEVI_CALVINO_ECO],
};
