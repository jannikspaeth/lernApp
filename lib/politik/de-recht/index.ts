import type { HistEvent } from '../../laender/types';
import { RECHTSORDNUNG } from './rechtsordnung';
import { GERICHTE } from './gerichte';
import { STRAFRECHT } from './strafrecht';
import { JUGENDLICHE } from './jugendliche';
import { SICHERHEIT } from './sicherheit';

export const DE_RECHT: HistEvent = {
  id: 'de-recht',
  title: 'Recht und Sicherheit',
  date: 'Gerichte, Strafrecht, Polizei',
  text: [
    'Wie die deutsche Rechtsordnung aufgebaut ist, welche Gerichte wofür zuständig sind und wie ein Strafverfahren abläuft – dazu die Rechte und Pflichten von Kindern und Jugendlichen und die Aufgaben von Polizei, Nachrichtendiensten und Bundeswehr.',
  ],
  subtopics: [RECHTSORDNUNG, GERICHTE, STRAFRECHT, JUGENDLICHE, SICHERHEIT],
};
