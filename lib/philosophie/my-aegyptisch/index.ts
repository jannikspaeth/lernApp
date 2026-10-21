import type { HistEvent } from '../../laender/types';
import { GOETTER } from './goetter';
import { OSIRIS } from './osiris';
import { TOTENREICH } from './totenreich';

export const MY_AEGYPTISCH: HistEvent = {
  id: 'my-aegyptisch',
  title: 'Ägyptische Mythologie',
  date: 'um 3000 v. Chr. – 400 n. Chr.',
  text: [
    'Götter mit Tierköpfen, der Sonnengott Ra und die Schöpfung aus dem Urozean, der Mythos von Osiris, Isis, Seth und Horus und der Weg der Toten von der Mumie bis zum Totengericht.',
  ],
  subtopics: [GOETTER, OSIRIS, TOTENREICH],
};
