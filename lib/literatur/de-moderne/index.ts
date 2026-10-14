import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MANN } from './mann';
import { KAFKA } from './kafka';
import { BRECHT } from './brecht';

export const DE_MODERNE: HistEvent = {
  id: 'de-moderne',
  title: 'Moderne',
  date: '1890–1945',
  text: [
    'Großstadt, Krieg und Zerfall der alten Ordnung: Von Naturalismus und Expressionismus bis zur Neuen Sachlichkeit – und mit Mann, Kafka und Brecht drei Autoren, die die Weltliteratur verändert haben.',
  ],
  subtopics: [UEBERBLICK, MANN, KAFKA, BRECHT],
};
