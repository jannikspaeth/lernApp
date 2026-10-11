import type { Epoch } from '../types';
import { NAPOLEON } from './e2-napoleon-sub';
import { SUEZ } from './e2-suez-sub';
import { NASSER } from './e2-nasser-sub';
import { SADAT } from './e2-sadat-sub';
import { MUBARAK } from './e3-mubarak-sub';
import { HEUTE } from './e3-heute-sub';

export const E2: Epoch = {
  id: 'moderne',
  name: 'Das moderne Ägypten',
  period: 'seit 1798',
  events: [
    {
      id: 'suezkanal',
      title: 'Napoleon, Suezkanal und britische Herrschaft',
      date: '1798–1952',
      text: [
        'Mit Napoleons Expedition begann die Neuzeit. Muhammad Ali baute einen modernen Staat auf, der Suezkanal brachte Ruhm und Schulden, und Großbritannien beherrschte das Land bis ins 20. Jahrhundert.',
      ],
      subtopics: [NAPOLEON, SUEZ],
    },
    {
      id: 'nasser',
      title: 'Nasser, Suezkrise und Frieden mit Israel',
      date: '1952–1981',
      text: [
        'Die Freien Offiziere stürzten den König, Nasser wurde zum Helden der arabischen Welt. Nach Kriegen mit Israel schloss Sadat 1979 als erster arabischer Führer Frieden.',
      ],
      subtopics: [NASSER, SADAT],
    },
    {
      id: 'tahrir',
      title: 'Mubarak, Tahrir-Platz und Militärherrschaft',
      date: 'seit 1981',
      text: [
        'Nach fast 30 Jahren Mubarak stürzte 2011 eine Volksbewegung den Präsidenten. Auf einen kurzen Versuch der Demokratie folgte die autoritäre Herrschaft des Militärs unter Sisi.',
      ],
      subtopics: [MUBARAK, HEUTE],
    },
  ],
};
