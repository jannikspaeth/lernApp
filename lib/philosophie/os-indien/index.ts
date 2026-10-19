import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { BUDDHA } from './buddha';
import { SHANKARA } from './shankara';
import { GANDHI } from './gandhi';

export const OS_INDIEN: HistEvent = {
  id: 'os-indien',
  title: 'Indische Philosophie',
  date: 'um 1500 v. Chr. – heute',
  text: [
    'Von den Veden und Upanishaden über Buddhas Weg aus dem Leiden und Shankaras Lehre von der Einheit aller Dinge bis zu Gandhis gewaltlosem Widerstand: die Philosophie Indiens fragt nach dem wahren Selbst und der Befreiung.',
  ],
  subtopics: [UEBERBLICK, BUDDHA, SHANKARA, GANDHI],
};
