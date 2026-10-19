import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { RUSSELL } from './russell';
import { WITTGENSTEIN } from './wittgenstein';
import { POPPER } from './popper';

export const ZJ_ANALYTISCH: HistEvent = {
  id: 'zj-analytisch',
  title: 'Analytische Philosophie',
  date: 'um 1880–heute',
  text: [
    'Die Wende zur Sprache: Frege und Russell erneuern die Logik, Wittgenstein zieht die Grenzen des Sagbaren, der Wiener Kreis will Metaphysik als sinnlos entlarven und Popper zeigt, dass Wissenschaft durch Widerlegung fortschreitet.',
  ],
  subtopics: [UEBERBLICK, RUSSELL, WITTGENSTEIN, POPPER],
};
