import type { Epoch } from '../types';
import { BIAFRA } from './e2-biafra-sub';
import { MILITAER } from './e2-militaer-sub';
import { DEMOKRATIE } from './e2-demokratie-sub';
import { HEUTE } from './e2-heute-sub';

export const E2: Epoch = {
  id: 'unabhaengig',
  name: 'Das unabhängige Nigeria',
  period: 'seit 1960',
  events: [
    {
      id: 'biafra',
      title: 'Unabhängigkeit und Biafra-Krieg',
      date: '1960–1999',
      text: [
        'Das 1960 unabhängige Nigeria zerbrach schon sechs Jahre später an Putschen und Pogromen. Der Biafra-Krieg kostete bis zu drei Millionen Menschen das Leben. Danach regierten fast drei Jahrzehnte Militärs.',
      ],
      subtopics: [BIAFRA, MILITAER],
    },
    {
      id: 'gegenwart',
      title: 'Afrikas Riese',
      date: 'seit 1999',
      text: [
        'Seit 1999 ist Nigeria wieder eine Demokratie – trotz Boko Haram, Korruption und Armut. Es ist das bevölkerungsreichste Land Afrikas, mit weltberühmter Musik, Literatur und Filmen.',
      ],
      subtopics: [DEMOKRATIE, HEUTE],
    },
  ],
};
