import type { HistEvent } from '../../laender/types';
import { DDR_STAAT } from './ddr-staat';
import { STASI } from './stasi';
import { EINHEIT } from './einheit';

export const BR_DDR: HistEvent = {
  id: 'br-ddr',
  title: 'DDR und Einheit',
  date: '1949–1990',
  text: [
    'Die DDR als Diktatur der SED – mit Mauer, Planwirtschaft und Staatssicherheit – und wie mutige Bürger sie 1989 friedlich stürzten. Vom Aufstand des 17. Juni über die Montagsdemonstrationen und den Mauerfall bis zum 3. Oktober 1990.',
  ],
  subtopics: [DDR_STAAT, STASI, EINHEIT],
};
