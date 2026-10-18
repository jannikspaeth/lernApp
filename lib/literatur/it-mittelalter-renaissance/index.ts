import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { DANTE } from './dante';
import { PETRARCA_BOCCACCIO } from './petrarca-boccaccio';
import { RENAISSANCE } from './renaissance';

export const IT_MITTELALTER_RENAISSANCE: HistEvent = {
  id: 'it-mittelalter-renaissance',
  title: 'Mittelalter und Renaissance in Italien',
  date: '1250–1600',
  text: [
    'Mit Dante, Petrarca und Boccaccio schreibt Italien zum ersten Mal in der Volkssprache große Literatur und leitet die Renaissance ein.',
  ],
  subtopics: [UEBERBLICK, DANTE, PETRARCA_BOCCACCIO, RENAISSANCE],
};
