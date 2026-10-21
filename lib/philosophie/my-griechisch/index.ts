import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { OLYMPIER } from './olympier';
import { HELDEN } from './helden';
import { TROJA } from './troja';
import { ODYSSEE } from './odyssee';
import { SAGEN } from './sagen';
import { UNTERWELT } from './unterwelt';

export const MY_GRIECHISCH: HistEvent = {
  id: 'my-griechisch',
  title: 'Griechische Mythologie',
  date: 'um 800 v. Chr. – 400 n. Chr.',
  text: [
    'Vom Chaos und den Titanen über die zwölf Olympier, Herakles, Perseus und Theseus, den Trojanischen Krieg und die Irrfahrten des Odysseus bis zu Prometheus, Ödipus und der Unterwelt.',
  ],
  subtopics: [UEBERBLICK, OLYMPIER, HELDEN, TROJA, ODYSSEE, SAGEN, UNTERWELT],
};
