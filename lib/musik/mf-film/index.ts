import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MORRICONE } from './morricone';
import { JOHN_WILLIAMS } from './john-williams';
import { HANS_ZIMMER } from './hans-zimmer';

export const MF_FILM: HistEvent = {
  id: 'mf-film',
  title: 'Filmmusik',
  date: '1895 – heute',
  text: [
    'Vom Kinopianisten zum großen Orchester: Filmmusik erzeugt Spannung, Gefühl und unvergessliche Themen – von Morricones Western über „Star Wars“ bis zu Hans Zimmer.',
  ],
  subtopics: [UEBERBLICK, MORRICONE, JOHN_WILLIAMS, HANS_ZIMMER],
};
