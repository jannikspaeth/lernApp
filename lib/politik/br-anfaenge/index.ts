import type { HistEvent } from '../../laender/types';
import { BESATZUNG } from './besatzung';
import { ADENAUER } from './adenauer';
import { ERHARD_KIESINGER } from './erhard-kiesinger';

export const BR_ANFAENGE: HistEvent = {
  id: 'br-anfaenge',
  title: 'Die Anfänge der Bundesrepublik',
  date: '1945–1969',
  text: [
    'Von der Besatzungszeit über die Luftbrücke und die Gründung zweier deutscher Staaten zur Ära Adenauer mit Westbindung und Wirtschaftswunder – bis zur Großen Koalition, den Protesten von 1968 und dem ersten Machtwechsel 1969.',
  ],
  subtopics: [BESATZUNG, ADENAUER, ERHARD_KIESINGER],
};
