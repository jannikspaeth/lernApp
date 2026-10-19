import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { BRAHMS } from './brahms';
import { STRAUSS } from './strauss';
import { TSCHAIKOWSKY } from './tschaikowsky';
import { DVORAK } from './dvorak';
import { GRIEG } from './grieg';
import { MAHLER } from './mahler';

export const KL_SPAETROMANTIK: HistEvent = {
  id: 'kl-spaetromantik',
  title: 'Spätromantik und nationale Schulen',
  date: '1850–1910',
  text: [
    'Riesige Orchester, Walzerseligkeit und der Klang der Heimat: Brahms bewahrt die Form, Strauss lässt Wien tanzen, und in Russland, Böhmen und Norwegen entstehen eigene nationale Stimmen.',
  ],
  subtopics: [UEBERBLICK, BRAHMS, STRAUSS, TSCHAIKOWSKY, DVORAK, GRIEG, MAHLER],
};
