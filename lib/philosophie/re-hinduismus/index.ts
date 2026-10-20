import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { GOETTER } from './goetter';
import { SCHRIFTEN } from './schriften';
import { KARMA_KASTEN } from './karma-kasten';
import { FESTE } from './feste';

export const RE_HINDUISMUS: HistEvent = {
  id: 're-hinduismus',
  title: 'Hinduismus',
  date: 'um 1500 v. Chr. – heute',
  text: [
    'Die älteste lebendige Religion ohne Gründer: Brahma, Vishnu, Shiva und die Götterwelt, Veden, Epen und Bhagavad Gita, Karma, Kasten und Yoga, Diwali, Holi und der Ganges.',
  ],
  subtopics: [UEBERBLICK, GOETTER, SCHRIFTEN, KARMA_KASTEN, FESTE],
};
