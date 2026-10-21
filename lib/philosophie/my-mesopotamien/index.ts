import type { HistEvent } from '../../laender/types';
import { GOETTER } from './goetter';
import { GILGAMESCH } from './gilgamesch';

export const MY_MESOPOTAMIEN: HistEvent = {
  id: 'my-mesopotamien',
  title: 'Mesopotamische Mythologie',
  date: 'um 3500 – 500 v. Chr.',
  text: [
    'Die ältesten Mythen der Welt zwischen Euphrat und Tigris: Zikkurate, Ischtars Gang in die Unterwelt, Marduks Kampf gegen Tiamat und das Gilgamesch-Epos mit seiner Sintflut.',
  ],
  subtopics: [GOETTER, GILGAMESCH],
};
