import type { Epoch } from '../types';
import { ALTES_REICH } from './e1-altes-reich-sub';
import { NEUES_REICH } from './e1-neues-reich-sub';
import { PTOLEMAEER } from './e1-ptolemaeer-sub';
import { ISLAM } from './e1-islam-sub';

export const E1: Epoch = {
  id: 'antike',
  name: 'Pharaonen und Fremdherrscher',
  period: 'ca. 3100 v. Chr. – 1798',
  events: [
    {
      id: 'pharaonen',
      title: 'Das Reich der Pharaonen',
      date: 'ca. 3100–1070 v. Chr.',
      text: [
        'Am Nil entstand vor über 5.000 Jahren eine der ersten Hochkulturen: mit Pharaonen, Pyramiden, Hieroglyphen und dem Glauben an ein Leben nach dem Tod.',
      ],
      subtopics: [ALTES_REICH, NEUES_REICH],
    },
    {
      id: 'kairo',
      title: 'Alexandria, Rom und das islamische Kairo',
      date: '525 v. Chr. – 1798',
      text: [
        'Perser, Griechen und Römer beherrschten Ägypten, dann kamen die Araber. Aus Fustat wurde Kairo, das über Jahrhunderte Zentrum der islamischen Welt war.',
      ],
      subtopics: [PTOLEMAEER, ISLAM],
    },
  ],
};
