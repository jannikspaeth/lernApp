import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { PARTHENON } from './parthenon';
import { ROM } from './rom';

export const BAUKUNST_ANTIKE: HistEvent = {
  id: 'baukunst-antike',
  title: 'Baukunst der Antike',
  date: 'um 700 v. Chr. – 300 n. Chr.',
  text: [
    'Säulen, Bögen und Beton: Griechen und Römer schufen die Bauformen, auf die Europa bis heute zurückgreift.',
  ],
  subtopics: [UEBERBLICK, PARTHENON, ROM],
};
