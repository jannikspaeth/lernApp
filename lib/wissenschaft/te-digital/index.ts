import type { HistEvent } from '../../laender/types';
import { COMPUTER } from './computer';
import { INTERNET } from './internet';
import { SMARTPHONE } from './smartphone';
import { KI } from './ki';
import { ENERGIE } from './energie';

export const TE_DIGITAL: HistEvent = {
  id: 'te-digital',
  title: 'Digitale Welt und Zukunftstechnik',
  date: '1843 – heute',
  text: [
    'Vom ersten Computerprogramm über das Internet und das Smartphone bis zur künstlichen Intelligenz – und die Technik, mit der die Welt ihre Energieversorgung neu erfinden will.',
  ],
  subtopics: [COMPUTER, INTERNET, SMARTPHONE, KI, ENERGIE],
};
