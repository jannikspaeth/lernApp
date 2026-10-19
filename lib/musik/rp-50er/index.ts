import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ELVIS } from './elvis';
import { CHUCK_BERRY } from './chuck-berry';

export const RP_50ER: HistEvent = {
  id: 'rp-50er',
  title: 'Rock ’n’ Roll',
  date: '1950–1960',
  text: [
    'Rhythm and Blues trifft Country: Mit E-Gitarre, Backbeat und Hüftschwung erobert der Rock ’n’ Roll die Teenager – und die Erwachsenen sind entsetzt.',
  ],
  subtopics: [UEBERBLICK, ELVIS, CHUCK_BERRY],
};
