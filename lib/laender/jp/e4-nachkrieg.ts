import type { Epoch } from '../types';
import { WUNDER } from './e4-wunder-sub';
import { REIWA } from './e4-reiwa-sub';

export const E4: Epoch = {
  id: 'nachkrieg',
  name: 'Wirtschaftsmacht',
  period: 'seit 1952',
  events: [
    {
      id: 'wirtschaftswunder',
      title: 'Wirtschaftswunder und Gegenwart',
      date: 'seit 1952',
      text: [
        'Nach dem Krieg wurde Japan in wenigen Jahrzehnten zur zweitgrößten Volkswirtschaft der Welt. Seit dem Platzen der Blase 1990 kämpft es mit Stagnation, Naturkatastrophen und einer alternden Gesellschaft – und bleibt doch eine technische und kulturelle Großmacht.',
      ],
      subtopics: [WUNDER, REIWA],
    },
  ],
};
