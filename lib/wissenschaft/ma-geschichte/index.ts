import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { EUKLID } from './euklid';
import { ALGEBRA } from './algebra';
import { GAUSS_EULER } from './gauss-euler';

export const MA_GESCHICHTE: HistEvent = {
  id: 'ma-geschichte',
  title: 'Geschichte der Mathematik',
  date: 'vor 20.000 Jahren – 1855',
  text: [
    'Vom Zählen mit Kerben über die Null aus Indien, Pythagoras und Euklid, al-Chwarizmis Algebra bis zu Euler und Gauß: wie die Menschen das Rechnen, Messen und Beweisen erfanden.',
  ],
  subtopics: [UEBERBLICK, EUKLID, ALGEBRA, GAUSS_EULER],
};
