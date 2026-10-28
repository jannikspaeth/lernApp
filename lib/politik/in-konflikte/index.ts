import type { HistEvent } from '../../laender/types';
import { KALTER_KRIEG } from './kalter-krieg';
import { NAHOST } from './nahost';
import { UKRAINE } from './ukraine';
import { TERRORISMUS } from './terrorismus';
import { ATOMWAFFEN } from './atomwaffen';
import { FRIEDENSSICHERUNG } from './friedenssicherung';

export const IN_KONFLIKTE: HistEvent = {
  id: 'in-konflikte',
  title: 'Kriege, Konflikte und Frieden',
  date: '1945 – heute',
  text: [
    'Vom Kalten Krieg über den Nahostkonflikt und Russlands Krieg gegen die Ukraine bis zum internationalen Terrorismus – dazu Atomwaffen und Abrüstung und die Frage, wie sich Frieden sichern lässt.',
  ],
  subtopics: [KALTER_KRIEG, NAHOST, UKRAINE, TERRORISMUS, ATOMWAFFEN, FRIEDENSSICHERUNG],
};
