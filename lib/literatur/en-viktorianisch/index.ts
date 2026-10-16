import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { DICKENS } from './dickens';
import { BRONTES } from './brontes';
import { WILDE } from './wilde';

export const EN_VIKTORIANISCH: HistEvent = {
  id: 'en-viktorianisch',
  title: 'Viktorianisches Zeitalter',
  date: '1837–1901',
  text: [
    'Industrie, Empire und strenge Moral: Dickens schreibt gegen das Elend an, die Schwestern Brontë sprengen das Frauenbild, und Oscar Wilde verspottet die ganze Gesellschaft.',
  ],
  subtopics: [UEBERBLICK, DICKENS, BRONTES, WILDE],
};
