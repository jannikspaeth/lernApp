import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { LED_ZEPPELIN } from './led-zeppelin';
import { PINK_FLOYD } from './pink-floyd';
import { QUEEN } from './queen';
import { ELTON_JOHN } from './elton-john';
import { BOWIE } from './bowie';
import { ABBA } from './abba';

export const RP_70ER: HistEvent = {
  id: 'rp-70er',
  title: 'Hard Rock, Disco und Punk',
  date: '1970–1980',
  text: [
    'Stadionrock und Konzeptalben, Glitzer und Disco-Kugel, und als Antwort darauf der Punk: Die 70er sind das Jahrzehnt der großen Bands – von Led Zeppelin bis ABBA.',
  ],
  subtopics: [UEBERBLICK, LED_ZEPPELIN, PINK_FLOYD, QUEEN, ELTON_JOHN, BOWIE, ABBA],
};
