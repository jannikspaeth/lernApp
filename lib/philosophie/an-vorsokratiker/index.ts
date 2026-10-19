import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { THALES } from './thales';
import { PYTHAGORAS } from './pythagoras';
import { HERAKLIT } from './heraklit';
import { PARMENIDES } from './parmenides';
import { DEMOKRIT } from './demokrit';

export const AN_VORSOKRATIKER: HistEvent = {
  id: 'an-vorsokratiker',
  title: 'Die Vorsokratiker',
  date: 'um 600–400 v. Chr.',
  text: [
    'Woraus besteht die Welt, und gibt es Veränderung überhaupt? Die ersten Philosophen in Ionien und Süditalien ersetzten die Mythen durch Argumente – von Thales’ Wasser über Heraklits Feuer und Parmenides’ unveränderliches Sein bis zu Demokrits Atomen.',
  ],
  subtopics: [UEBERBLICK, THALES, PYTHAGORAS, HERAKLIT, PARMENIDES, DEMOKRIT],
};
