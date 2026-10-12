import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { GRIECHEN } from './griechen';
import { HELLENISMUS } from './hellenismus';
import { ROM } from './rom';

export const ANTIKE: HistEvent = {
  id: 'antike',
  title: 'Antike',
  date: 'ca. 800 v. Chr. – 400 n. Chr.',
  text: [
    'Griechen und Römer legten das Fundament der europäischen Kunst: das Ideal des schönen Körpers, die Säulenordnungen und die Baukunst mit Bogen und Kuppel.',
  ],
  subtopics: [UEBERBLICK, GRIECHEN, HELLENISMUS, ROM],
};
