import type { HistEvent } from '../../laender/types';
import { SLAWISCH } from './slawisch';
import { KALEVALA } from './kalevala';
import { CHINA } from './china';
import { OZEANIEN } from './ozeanien';

export const MY_WEITERE: HistEvent = {
  id: 'my-weitere',
  title: 'Weitere Mythologien',
  date: 'Mythos – heute',
  text: [
    'Perun und Baba Jaga bei den Slawen, das finnische Kalevala, Pangu, Nüwa und die Drachen Chinas und die Götter und Helden Polynesiens von Maui bis Pele.',
  ],
  subtopics: [SLAWISCH, KALEVALA, CHINA, OZEANIEN],
};
