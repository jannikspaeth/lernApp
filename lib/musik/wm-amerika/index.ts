import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { PIAZZOLLA } from './piazzolla';
import { BOB_MARLEY } from './bob-marley';
import { CELIA_CRUZ } from './celia-cruz';

export const WM_AMERIKA: HistEvent = {
  id: 'wm-amerika',
  title: 'Lateinamerika und Karibik',
  date: 'um 1880 – heute',
  text: [
    'Tango, Samba, Bossa Nova, Salsa und Reggae: Aus indigenen, europäischen und afrikanischen Wurzeln entstehen Rhythmen, die die ganze Welt zum Tanzen bringen.',
  ],
  subtopics: [UEBERBLICK, CELIA_CRUZ, PIAZZOLLA, BOB_MARLEY],
};
