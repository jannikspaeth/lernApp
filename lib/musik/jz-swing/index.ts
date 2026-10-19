import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ELLINGTON } from './ellington';
import { GOODMAN } from './goodman';
import { BILLIE_HOLIDAY } from './billie-holiday';
import { ELLA_FITZGERALD } from './ella-fitzgerald';

export const JZ_SWING: HistEvent = {
  id: 'jz-swing',
  title: 'Swing',
  date: '1930–1945',
  text: [
    'Big Bands, Ballsäle und Radio: In der Swing-Ära wird der Jazz zur populärsten Musik Amerikas, mit großen Bandleadern und unvergesslichen Stimmen.',
  ],
  subtopics: [UEBERBLICK, ELLINGTON, GOODMAN, BILLIE_HOLIDAY, ELLA_FITZGERALD],
};
