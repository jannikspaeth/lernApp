import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ATOME } from './atome';
import { PERIODENSYSTEM } from './periodensystem';
import { REAKTIONEN } from './reaktionen';
import { SAEUREN } from './saeuren';

export const CH_GRUNDLAGEN: HistEvent = {
  id: 'ch-grundlagen',
  title: 'Grundlagen der Chemie',
  date: 'Alchemie – heute',
  text: [
    'Von den Alchemisten, die Gold machen wollten, über Lavoisiers Waage und Daltons Atome bis zu Mendelejews Periodensystem: wie die Chemie zur Wissenschaft wurde und was Atome, Bindungen, Reaktionen, Säuren und Basen sind.',
  ],
  subtopics: [UEBERBLICK, ATOME, PERIODENSYSTEM, REAKTIONEN, SAEUREN],
};
