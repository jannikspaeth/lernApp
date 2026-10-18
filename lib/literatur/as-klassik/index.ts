import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { JAPAN } from './japan';
import { CHINA } from './china';
import { PERSIEN_ARABIEN } from './persien-arabien';

export const AS_KLASSIK: HistEvent = {
  id: 'as-klassik',
  title: 'Klassische Literatur Asiens',
  date: '700 – 1700',
  text: [
    'Genji-Roman, Haiku, Tang-Lyrik und persische Dichtung: Asien schreibt Weltliteratur, lange bevor Europa sie entdeckt.',
  ],
  subtopics: [UEBERBLICK, JAPAN, CHINA, PERSIEN_ARABIEN],
};
