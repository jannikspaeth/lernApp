import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { SCHUBERT } from './schubert';
import { MENDELSSOHN } from './mendelssohn';
import { SCHUMANN } from './schumann';
import { CHOPIN } from './chopin';
import { LISZT } from './liszt';
import { BERLIOZ } from './berlioz';
import { PAGANINI } from './paganini';

export const KL_ROMANTIK: HistEvent = {
  id: 'kl-romantik',
  title: 'Romantik',
  date: '1815–1850',
  text: [
    'Gefühl, Nacht und Sehnsucht: Die Romantiker machen die Musik zur höchsten Kunst. Kunstlied und Klavierstück blühen auf, Virtuosen werden zu Stars.',
  ],
  subtopics: [UEBERBLICK, PAGANINI, SCHUBERT, BERLIOZ, MENDELSSOHN, SCHUMANN, CHOPIN, LISZT],
};
