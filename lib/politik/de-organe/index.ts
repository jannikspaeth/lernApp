import type { HistEvent } from '../../laender/types';
import { BUNDESTAG } from './bundestag';
import { BUNDESRAT } from './bundesrat';
import { BUNDESREGIERUNG } from './bundesregierung';
import { BUNDESPRAESIDENT } from './bundespraesident';
import { GESETZGEBUNG } from './gesetzgebung';
import { LAENDER_KOMMUNEN } from './laender-kommunen';

export const DE_ORGANE: HistEvent = {
  id: 'de-organe',
  title: 'Die Verfassungsorgane',
  date: 'Bund, Länder und Gemeinden',
  text: [
    'Bundestag, Bundesrat, Bundesregierung und Bundespräsident: wer was entscheidet, wie ein Gesetz entsteht und wie Politik in den Ländern und Gemeinden funktioniert.',
  ],
  subtopics: [BUNDESTAG, BUNDESRAT, BUNDESREGIERUNG, BUNDESPRAESIDENT, GESETZGEBUNG, LAENDER_KOMMUNEN],
};
