import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { USA } from './usa';
import { USA_WAHLEN } from './usa-wahlen';
import { GROSSBRITANNIEN } from './grossbritannien';
import { FRANKREICH } from './frankreich';
import { SCHWEIZ } from './schweiz';
import { INDIEN } from './indien';

export const SY_DEMOKRATIEN: HistEvent = {
  id: 'sy-demokratien',
  title: 'Demokratien im Vergleich',
  date: 'USA, Großbritannien, Frankreich, Schweiz, Indien',
  text: [
    'Wie andere Demokratien funktionieren: parlamentarische und präsidentielle Systeme, das amerikanische Wahlmännersystem, die Westminster-Demokratie, Frankreichs starker Präsident, die direkte Demokratie der Schweiz und die größte Demokratie der Welt.',
  ],
  subtopics: [UEBERBLICK, USA, USA_WAHLEN, GROSSBRITANNIEN, FRANKREICH, SCHWEIZ, INDIEN],
};
