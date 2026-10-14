import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { BOELL_GRASS } from './boell-grass';
import { CELAN_BACHMANN } from './celan-bachmann';
import { FRISCH_DUERRENMATT } from './frisch-duerrenmatt';

export const DE_GEGENWART: HistEvent = {
  id: 'de-gegenwart',
  title: 'Nach 1945',
  date: 'ab 1945',
  text: [
    'Nach Krieg und Zerstörung musste die Literatur neu anfangen: Trümmerliteratur und Gruppe 47, geteiltes Land, Nobelpreise – und eine Gegenwart mit vielen Stimmen.',
  ],
  subtopics: [UEBERBLICK, BOELL_GRASS, CELAN_BACHMANN, FRISCH_DUERRENMATT],
};
