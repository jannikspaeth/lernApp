import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { SHAKESPEARE } from './shakespeare';
import { MILTON } from './milton';

export const EN_RENAISSANCE: HistEvent = {
  id: 'en-renaissance',
  title: 'Renaissance und elisabethanisches Theater',
  date: '1550–1660',
  text: [
    'Im London Elisabeths I. entsteht ein Theaterbetrieb, wie es ihn nie gab – und mit Shakespeare der meistgespielte Dramatiker der Welt.',
  ],
  subtopics: [UEBERBLICK, SHAKESPEARE, MILTON],
};
