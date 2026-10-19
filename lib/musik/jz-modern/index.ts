import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { PARKER } from './parker';
import { MILES_DAVIS } from './miles-davis';
import { COLTRANE } from './coltrane';

export const JZ_MODERN: HistEvent = {
  id: 'jz-modern',
  title: 'Bebop und Modern Jazz',
  date: '1940–1975',
  text: [
    'Musik zum Zuhören statt zum Tanzen: Vom Bebop über Cool, Modal und Free Jazz bis zur Fusion mit dem Rock erfindet sich der Jazz immer wieder neu.',
  ],
  subtopics: [UEBERBLICK, PARKER, MILES_DAVIS, COLTRANE],
};
