import type { HistEvent } from '../../laender/types';
import { SCHROEDER } from './schroeder';
import { MERKEL } from './merkel';
import { SCHOLZ } from './scholz';
import { MERZ } from './merz';

export const BR_GEGENWART: HistEvent = {
  id: 'br-gegenwart',
  title: 'Die Berliner Republik',
  date: '1998 – heute',
  text: [
    'Von Rot-Grün und der Agenda 2010 über Angela Merkels 16 Krisenjahre und die Ampel mit der „Zeitenwende“ bis zur Regierung von Friedrich Merz.',
  ],
  subtopics: [SCHROEDER, MERKEL, SCHOLZ, MERZ],
};
