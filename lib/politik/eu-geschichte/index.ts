import type { HistEvent } from '../../laender/types';
import { IDEE } from './idee';
import { ROEMISCHE_VERTRAEGE } from './roemische-vertraege';
import { ERWEITERUNG } from './erweiterung';
import { MAASTRICHT_EURO } from './maastricht-euro';
import { LISSABON } from './lissabon';

export const EU_GESCHICHTE: HistEvent = {
  id: 'eu-geschichte',
  title: 'Die Geschichte der EU',
  date: '1950 – heute',
  text: [
    'Wie aus dem Wunsch nach Frieden die Montanunion, die EWG und schließlich die Europäische Union wurde – mit Erweiterungen von sechs auf 27 Länder, dem Euro und dem Vertrag von Lissabon.',
  ],
  subtopics: [IDEE, ROEMISCHE_VERTRAEGE, ERWEITERUNG, MAASTRICHT_EURO, LISSABON],
};
