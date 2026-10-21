import type { HistEvent } from '../../laender/types';
import { WASSER } from './wasser';
import { LUFT } from './luft';
import { METALLE } from './metalle';
import { KOHLENSTOFF } from './kohlenstoff';
import { KUNSTSTOFFE } from './kunststoffe';
import { NOBEL_HABER } from './nobel-haber';

export const CH_STOFFE: HistEvent = {
  id: 'ch-stoffe',
  title: 'Stoffe in Natur und Alltag',
  date: 'Bronzezeit – heute',
  text: [
    'Wasser und Luft, Metalle, Kohlenstoff und Kunststoffe – und zwei Chemiker, deren Erfindungen Segen und Fluch zugleich waren: Alfred Nobel und Fritz Haber.',
  ],
  subtopics: [WASSER, LUFT, METALLE, KOHLENSTOFF, KUNSTSTOFFE, NOBEL_HABER],
};
