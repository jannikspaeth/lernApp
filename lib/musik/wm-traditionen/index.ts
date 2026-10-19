import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { RAVI_SHANKAR } from './ravi-shankar';
import { MIRIAM_MAKEBA } from './miriam-makeba';

export const WM_TRADITIONEN: HistEvent = {
  id: 'wm-traditionen',
  title: 'Musiktraditionen der Welt',
  date: 'Jahrtausende – heute',
  text: [
    'Trommeln aus Westafrika, Ragas aus Indien, Gamelan aus Indonesien, Flamenco, Fado und Jodler: Jede Kultur hat ihre eigene Musik – mit Hörbeispielen.',
  ],
  subtopics: [UEBERBLICK, RAVI_SHANKAR, MIRIAM_MAKEBA],
};
