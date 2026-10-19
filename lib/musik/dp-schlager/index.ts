import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { UDO_JUERGENS } from './udo-juergens';
import { WOLF_BIERMANN } from './wolf-biermann';

export const DP_SCHLAGER: HistEvent = {
  id: 'dp-schlager',
  title: 'Schlager und Liedermacher',
  date: '1950–1980',
  text: [
    'Fernweh und heile Welt im Schlager, Kritik und Poesie bei den Liedermachern: Die deutschsprachige Musik der Nachkriegszeit zwischen Wirtschaftswunder, Hitparade und DDR-Zensur.',
  ],
  subtopics: [UEBERBLICK, UDO_JUERGENS, WOLF_BIERMANN],
};
