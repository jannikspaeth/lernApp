import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { KLEIST } from './kleist';
import { HEINE } from './heine';
import { BUECHNER } from './buechner';

export const DE_VORMAERZ: HistEvent = {
  id: 'de-vormaerz',
  title: 'Biedermeier und Vormärz',
  date: '1805–1848',
  text: [
    'Zensur und Aufbruch: Während sich das Biedermeier ins Private zurückzieht, greifen Heine und Büchner die Verhältnisse an – und Kleist schreibt, was in keine Epoche passt.',
  ],
  subtopics: [UEBERBLICK, KLEIST, HEINE, BUECHNER],
};
