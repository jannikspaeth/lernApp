import type { HistEvent } from '../../laender/types';
import { PI } from './pi';
import { UNENDLICHKEIT } from './unendlichkeit';
import { PROBLEME } from './probleme';
import { ZUFALL } from './zufall';

export const MA_IDEEN: HistEvent = {
  id: 'ma-ideen',
  title: 'Große Ideen der Mathematik',
  date: 'Zahlen, Unendlichkeit, Zufall',
  text: [
    'Die Kreiszahl Pi, verschiedene Unendlichkeiten, berühmte ungelöste und gelöste Probleme und die Mathematik des Zufalls: Ideen, die Mathematiker seit Jahrhunderten faszinieren – und überraschend oft im Alltag stecken.',
  ],
  subtopics: [PI, UNENDLICHKEIT, PROBLEME, ZUFALL],
};
