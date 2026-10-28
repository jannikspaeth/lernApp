import type { HistEvent } from '../../laender/types';
import { CHINA } from './china';
import { RUSSLAND } from './russland';
import { IRAN } from './iran';
import { NORDKOREA } from './nordkorea';
import { WELTWEIT } from './weltweit';

export const SY_AUTOKRATIEN: HistEvent = {
  id: 'sy-autokratien',
  title: 'Autokratien und Diktaturen',
  date: 'China, Russland, Iran, Nordkorea, weltweiter Trend',
  text: [
    'Wie Autokratien funktionieren: die Herrschaft der Kommunistischen Partei in China, Putins System in Russland, die Islamische Republik Iran, die Erbdiktatur Nordkorea – und wie Demokratien weltweit unter Druck geraten.',
  ],
  subtopics: [CHINA, RUSSLAND, IRAN, NORDKOREA, WELTWEIT],
};
