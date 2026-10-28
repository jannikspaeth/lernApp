import type { HistEvent } from '../../laender/types';
import { PARLAMENT } from './parlament';
import { KOMMISSION } from './kommission';
import { RAT } from './rat';
import { GERICHTSHOF_EZB } from './gerichtshof-ezb';
import { EU_GESETZGEBUNG } from './gesetzgebung';

export const EU_INSTITUTIONEN: HistEvent = {
  id: 'eu-institutionen',
  title: 'Die Institutionen der EU',
  date: 'Brüssel, Straßburg, Luxemburg, Frankfurt',
  text: [
    'Parlament, Kommission, Rat, Europäischer Rat, Gerichtshof und Zentralbank: wer in der EU was entscheidet, wie europäische Gesetze entstehen und woher das Geld der EU kommt.',
  ],
  subtopics: [PARLAMENT, KOMMISSION, RAT, GERICHTSHOF_EZB, EU_GESETZGEBUNG],
};
