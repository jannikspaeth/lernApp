import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { BEATLES } from './beatles';
import { ROLLING_STONES } from './rolling-stones';
import { BOB_DYLAN } from './bob-dylan';
import { HENDRIX } from './hendrix';

export const RP_60ER: HistEvent = {
  id: 'rp-60er',
  title: 'Beat, Folk und Rock',
  date: '1960–1970',
  text: [
    'Von Liverpool in die Welt: Beatles und Rolling Stones lösen die British Invasion aus, Bob Dylan gibt dem Protest eine Stimme, und Jimi Hendrix erfindet die E-Gitarre neu – bis Woodstock.',
  ],
  subtopics: [UEBERBLICK, BEATLES, ROLLING_STONES, BOB_DYLAN, HENDRIX],
};
