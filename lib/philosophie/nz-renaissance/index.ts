import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MACHIAVELLI } from './machiavelli';
import { ERASMUS } from './erasmus';
import { MONTAIGNE } from './montaigne';
import { BRUNO } from './bruno';
import { BACON } from './bacon';

export const NZ_RENAISSANCE: HistEvent = {
  id: 'nz-renaissance',
  title: 'Renaissance und Humanismus',
  date: 'um 1350–1626',
  text: [
    'Die Wiedergeburt der Antike stellt den Menschen in den Mittelpunkt: Machiavelli beschreibt die Macht, wie sie ist, Erasmus und Morus spotten und entwerfen Utopien, Montaigne erfindet den Essay, Bruno denkt ein unendliches All und Bacon eine neue Wissenschaft.',
  ],
  subtopics: [UEBERBLICK, MACHIAVELLI, ERASMUS, MONTAIGNE, BRUNO, BACON],
};
