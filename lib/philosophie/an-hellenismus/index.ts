import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { DIOGENES } from './diogenes';
import { EPIKUR } from './epikur';
import { STOA } from './stoa';
import { MARK_AUREL } from './mark-aurel';
import { PLOTIN } from './plotin';

export const AN_HELLENISMUS: HistEvent = {
  id: 'an-hellenismus',
  title: 'Hellenismus und Rom',
  date: '323 v. Chr. – 529 n. Chr.',
  text: [
    'Nach Alexander wird die Philosophie zur Lebenskunst: Kyniker, Epikureer, Stoiker und Skeptiker suchen die Seelenruhe des Einzelnen – vom Bettler Diogenes bis zum Kaiser Mark Aurel. Mit Plotins Neuplatonismus endet die Antike.',
  ],
  subtopics: [UEBERBLICK, DIOGENES, EPIKUR, STOA, MARK_AUREL, PLOTIN],
};
