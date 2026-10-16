import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HEMINGWAY_FITZGERALD } from './hemingway-fitzgerald';
import { STEINBECK_FAULKNER } from './steinbeck-faulkner';

export const US_20JH: HistEvent = {
  id: 'us-20jh',
  title: 'Das 20. Jahrhundert',
  date: 'ab 1900',
  text: [
    'Von der verlorenen Generation über die Harlem Renaissance bis zu Toni Morrison: Die amerikanische Literatur wird zur meistgelesenen der Welt.',
  ],
  subtopics: [UEBERBLICK, HEMINGWAY_FITZGERALD, STEINBECK_FAULKNER],
};
