import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { KANDINSKY } from './kandinsky';
import { MARC_KLEE } from './marc-klee';

export const EXPRESSIONISMUS: HistEvent = {
  id: 'expressionismus',
  title: 'Expressionismus',
  date: 'um 1905–1925',
  text: [
    'Gefühl statt Abbild: Die Brücke in Dresden und der Blaue Reiter in München malten mit grellen Farben und verzerrten Formen, was die Seele erlebt.',
  ],
  subtopics: [UEBERBLICK, KANDINSKY, MARC_KLEE],
};
