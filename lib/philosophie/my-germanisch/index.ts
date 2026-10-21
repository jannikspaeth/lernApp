import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { GOETTER } from './goetter';
import { RAGNAROEK } from './ragnaroek';
import { HELDEN } from './helden';

export const MY_GERMANISCH: HistEvent = {
  id: 'my-germanisch',
  title: 'Nordisch-germanische Mythologie',
  date: 'um 500 – 1300',
  text: [
    'Die Edda und die Weltesche Yggdrasil, Odin, Thor, Loki und Freyja, Baldrs Tod und die Götterdämmerung, Siegfried, die Nibelungen und Beowulf.',
  ],
  subtopics: [UEBERBLICK, GOETTER, RAGNAROEK, HELDEN],
};
