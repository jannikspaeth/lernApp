import type { HistEvent } from '../../laender/types';
import { WETTER } from './wetter';
import { STUERME } from './stuerme';
import { KLIMA } from './klima';
import { KLIMAWANDEL } from './klimawandel';
import { OZEANE } from './ozeane';

export const ER_KLIMA: HistEvent = {
  id: 'er-klima',
  title: 'Wetter, Klima und Ozeane',
  date: 'Atmosphäre und Meer',
  text: [
    'Wie entsteht Wetter, was treibt Stürme an, warum gab es Eiszeiten, und was bedeutet der menschengemachte Klimawandel? Dazu die Ozeane, die das Klima der Erde wie eine gewaltige Heizung steuern.',
  ],
  subtopics: [WETTER, STUERME, KLIMA, KLIMAWANDEL, OZEANE],
};
