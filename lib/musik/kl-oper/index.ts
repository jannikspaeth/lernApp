import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ROSSINI } from './rossini';
import { VERDI } from './verdi';
import { WAGNER } from './wagner';
import { PUCCINI } from './puccini';
import { BIZET } from './bizet';

export const KL_OPER: HistEvent = {
  id: 'kl-oper',
  title: 'Die große Oper',
  date: '1810–1926',
  text: [
    'Belcanto, Musikdrama und Verismo: Im 19. Jahrhundert ist die Oper die beliebteste Musik überhaupt. Rossini, Verdi, Wagner und Puccini schreiben die Werke, die bis heute die Spielpläne füllen.',
  ],
  subtopics: [UEBERBLICK, ROSSINI, VERDI, WAGNER, BIZET, PUCCINI],
};
