import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { TUPAC } from './tupac';
import { EMINEM } from './eminem';
import { KENDRICK_LAMAR } from './kendrick-lamar';

export const SH_HIPHOP: HistEvent = {
  id: 'sh-hiphop',
  title: 'Hip-Hop',
  date: '1973 – heute',
  text: [
    'Aus einer Party in der Bronx wird die meistgehörte Musik der Welt: DJing, Rap, Breakdance und Graffiti – von Grandmaster Flash über Tupac und Eminem bis Kendrick Lamar.',
  ],
  subtopics: [UEBERBLICK, TUPAC, EMINEM, KENDRICK_LAMAR],
};
