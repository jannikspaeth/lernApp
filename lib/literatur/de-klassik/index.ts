import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { GOETHE } from './goethe';
import { SCHILLER } from './schiller';

export const DE_KLASSIK: HistEvent = {
  id: 'de-klassik',
  title: 'Weimarer Klassik',
  date: '1786–1805',
  text: [
    'Zwei Dichter in einer kleinen Residenzstadt: Goethe und Schiller suchen nach Maß, Form und Menschlichkeit und schreiben die bekanntesten Werke der deutschen Literatur.',
  ],
  subtopics: [UEBERBLICK, GOETHE, SCHILLER],
};
