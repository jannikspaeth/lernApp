import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { PROUST } from './proust';
import { CAMUS_SARTRE } from './camus-sartre';

export const FR_MODERNE: HistEvent = {
  id: 'fr-moderne',
  title: 'Moderne und Gegenwart',
  date: 'ab 1900',
  text: [
    'Erinnerung, Traum und Freiheit: Proust schreibt den Roman der Zeit, die Surrealisten befreien das Unbewusste, und der Existenzialismus fragt, wie man ohne vorgegebenen Sinn leben soll.',
  ],
  subtopics: [UEBERBLICK, PROUST, CAMUS_SARTRE],
};
