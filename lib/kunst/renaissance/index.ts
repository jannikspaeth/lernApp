import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { LEONARDO } from './leonardo';
import { MICHELANGELO } from './michelangelo';
import { RAFFAEL } from './raffael';
import { BOTTICELLI } from './botticelli';
import { DUERER } from './duerer';
import { TIZIAN } from './tizian';

export const RENAISSANCE: HistEvent = {
  id: 'renaissance',
  title: 'Renaissance',
  date: 'um 1400–1600',
  text: [
    'Die Wiedergeburt der Antike: In Florenz, Rom und Venedig entstand eine Kunst der Perspektive, der Proportion und des selbstbewussten Künstlers. Zuerst der Überblick, dann die großen Meister.',
  ],
  subtopics: [UEBERBLICK, LEONARDO, MICHELANGELO, RAFFAEL, BOTTICELLI, DUERER, TIZIAN],
};
