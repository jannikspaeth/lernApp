import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { RAMMSTEIN } from './rammstein';
import { HELENE_FISCHER } from './helene-fischer';

export const DP_HEUTE: HistEvent = {
  id: 'dp-heute',
  title: 'Von den 90ern bis heute',
  date: '1990 – heute',
  text: [
    'Deutschrap, Punk in Stadien, Schlager-Renaissance und Neue Deutsche Härte: Seit der Wiedervereinigung ist deutschsprachige Musik vielfältiger und erfolgreicher denn je.',
  ],
  subtopics: [UEBERBLICK, RAMMSTEIN, HELENE_FISCHER],
};
