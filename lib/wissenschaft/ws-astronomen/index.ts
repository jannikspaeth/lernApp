import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { KOPERNIKUS } from './kopernikus';
import { KEPLER } from './kepler';
import { GALILEI } from './galilei';
import { HERSCHEL } from './herschel';
import { HUBBLE } from './hubble';
import { HAWKING } from './hawking';

export const WS_ASTRONOMEN: HistEvent = {
  id: 'ws-astronomen',
  title: 'Große Astronomen',
  date: 'um 1800 v. Chr. – heute',
  text: [
    'Von der Himmelsscheibe von Nebra bis zu Stephen Hawking: Wie Menschen lernten, den Himmel zu lesen, die Erde aus dem Zentrum der Welt rückten und das Universum vermaßen – erzählt in einem Überblick und sechs Lebensgeschichten.',
  ],
  subtopics: [UEBERBLICK, KOPERNIKUS, KEPLER, GALILEI, HERSCHEL, HUBBLE, HAWKING],
};
