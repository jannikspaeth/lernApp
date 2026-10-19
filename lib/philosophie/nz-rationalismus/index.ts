import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { DESCARTES } from './descartes';
import { PASCAL } from './pascal';
import { SPINOZA } from './spinoza';
import { LEIBNIZ } from './leibniz';

export const NZ_RATIONALISMUS: HistEvent = {
  id: 'nz-rationalismus',
  title: 'Rationalismus',
  date: '17. Jh.',
  text: [
    'Sicheres Wissen nach dem Vorbild der Mathematik: Descartes gründet alles auf das denkende Ich, Pascal setzt das Herz gegen den Verstand, Spinoza denkt Gott als Natur und Leibniz die beste aller möglichen Welten.',
  ],
  subtopics: [UEBERBLICK, DESCARTES, PASCAL, SPINOZA, LEIBNIZ],
};
