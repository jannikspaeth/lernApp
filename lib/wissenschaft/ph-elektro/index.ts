import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { STROM } from './strom';
import { FARADAY } from './faraday';
import { WELLEN } from './wellen';
import { LICHT } from './licht';

export const PH_ELEKTRO: HistEvent = {
  id: 'ph-elektro',
  title: 'Elektrizität, Magnetismus und Licht',
  date: '1600 – 1900',
  text: [
    'Vom geriebenen Bernstein über Franklins Drachen, Voltas Batterie und Faradays Induktion bis zu Maxwells Gleichungen, Funkwellen und Röntgenstrahlen: Wie die Menschen Elektrizität, Magnetismus und Licht als ein einziges Phänomen begriffen.',
  ],
  subtopics: [UEBERBLICK, STROM, FARADAY, WELLEN, LICHT],
};
