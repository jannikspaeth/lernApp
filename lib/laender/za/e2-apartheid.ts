import type { Epoch } from '../types';
import { SEGREGATION } from './e2-segregation-sub';
import { APARTHEID } from './e2-apartheid-sub';
import { ENDE } from './e2-ende-sub';
import { MANDELA } from './e3-mandela-sub';
import { HEUTE } from './e3-heute-sub';

export const E2: Epoch = {
  id: 'apartheid',
  name: 'Apartheid und Befreiung',
  period: 'seit 1910',
  events: [
    {
      id: 'apartheid',
      title: 'Die Apartheid',
      date: '1910–1990',
      text: [
        'Aus der Segregation der Union wurde ab 1948 die Apartheid: ein System der Rassentrennung, das fast vier Jahrzehnte die Menschen trennte und entrechtete – bis Widerstand und Boykott es zu Fall brachten.',
      ],
      subtopics: [SEGREGATION, APARTHEID, ENDE],
    },
    {
      id: 'mandela',
      title: 'Mandela und die Regenbogennation',
      date: 'seit 1990',
      text: [
        'Nelson Mandela führte das Land friedlich in die Demokratie. Seitdem ringt die „Regenbogennation“ mit den Folgen von Ungleichheit, Armut und Korruption.',
      ],
      subtopics: [MANDELA, HEUTE],
    },
  ],
};
