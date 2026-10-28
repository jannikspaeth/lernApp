import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { STAAT } from './staat';
import { DEMOKRATIE } from './demokratie';
import { GEWALTENTEILUNG } from './gewaltenteilung';
import { MENSCHENRECHTE } from './menschenrechte';
import { RECHTSSTAAT } from './rechtsstaat';
import { DIKTATUR } from './diktatur';

export const GR_BEGRIFFE: HistEvent = {
  id: 'gr-begriffe',
  title: 'Staat, Macht und Demokratie',
  date: 'Grundbegriffe',
  text: [
    'Was ist Politik, was ein Staat, und wie unterscheidet sich eine Demokratie von einer Diktatur? Die Grundbegriffe des politischen Denkens – von der athenischen Volksversammlung über Gewaltenteilung, Menschenrechte und Rechtsstaat bis zu den Merkmalen totaler Herrschaft.',
  ],
  subtopics: [UEBERBLICK, STAAT, DEMOKRATIE, GEWALTENTEILUNG, MENSCHENRECHTE, RECHTSSTAAT, DIKTATUR],
};
