import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { UDO_LINDENBERG } from './udo-lindenberg';
import { NENA } from './nena';
import { GROENEMEYER } from './groenemeyer';

export const DP_80ER: HistEvent = {
  id: 'dp-80er',
  title: 'Neue Deutsche Welle und Deutschrock',
  date: '1975–1990',
  text: [
    'Rock auf Deutsch wird cool: Von Udo Lindenberg über die Neue Deutsche Welle mit Nenas „99 Luftballons“ bis zu Grönemeyers „Bochum“ – und am Ende fällt die Mauer.',
  ],
  subtopics: [UEBERBLICK, UDO_LINDENBERG, NENA, GROENEMEYER],
};
