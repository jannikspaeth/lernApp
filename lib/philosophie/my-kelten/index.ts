import type { HistEvent } from '../../laender/types';
import { GOETTER } from './goetter';
import { ARTUS } from './artus';

export const MY_KELTEN: HistEvent = {
  id: 'my-kelten',
  title: 'Keltische Mythologie und Artussage',
  date: 'um 600 v. Chr. – 1485',
  text: [
    'Druiden, Samhain und das Feenvolk Irlands, der Held Cú Chulainn und die Welt von König Artus, Merlin, der Tafelrunde und dem Heiligen Gral.',
  ],
  subtopics: [GOETTER, ARTUS],
};
