import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { JESUS } from './jesus';
import { FRUEHE_KIRCHE } from './fruehe-kirche';
import { BIBEL } from './bibel';
import { KIRCHENJAHR } from './kirchenjahr';
import { KONFESSIONEN } from './konfessionen';

export const RE_CHRISTENTUM: HistEvent = {
  id: 're-christentum',
  title: 'Christentum',
  date: 'um 30 n. Chr. – heute',
  text: [
    'Die größte Religion der Welt: Jesus von Nazaret, Paulus und die frühe Kirche, die Bibel, Kirchenjahr und Sakramente und die Wege von Orthodoxen, Katholiken und Protestanten.',
  ],
  subtopics: [UEBERBLICK, JESUS, FRUEHE_KIRCHE, BIBEL, KIRCHENJAHR, KONFESSIONEN],
};
