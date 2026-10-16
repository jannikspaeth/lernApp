import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { AUSTEN } from './austen';
import { BYRON_SHELLEY_KEATS } from './byron-shelley-keats';

export const EN_ROMANTIK: HistEvent = {
  id: 'en-romantik',
  title: 'Romantik',
  date: '1789–1837',
  text: [
    'Natur gegen Fabrik, Gefühl gegen Regel: Wordsworth und Coleridge erneuern die Lyrik, Jane Austen den Roman – und am Genfersee entsteht „Frankenstein“.',
  ],
  subtopics: [UEBERBLICK, AUSTEN, BYRON_SHELLEY_KEATS],
};
