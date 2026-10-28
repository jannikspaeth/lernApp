import type { HistEvent } from '../../laender/types';
import { BRANDT } from './brandt';
import { SCHMIDT } from './schmidt';
import { KOHL } from './kohl';

export const BR_WANDEL: HistEvent = {
  id: 'br-wandel',
  title: 'Ostpolitik, Terror und Einheit',
  date: '1969–1998',
  text: [
    'Willy Brandts Ostpolitik und Kniefall, Helmut Schmidts Kampf gegen Wirtschaftskrise und RAF-Terror und Helmut Kohls lange Kanzlerschaft mit Wiedervereinigung, Maastricht und Euro.',
  ],
  subtopics: [BRANDT, SCHMIDT, KOHL],
};
