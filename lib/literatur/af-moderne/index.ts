import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ACHEBE_SOYINKA } from './achebe-soyinka';
import { MAHFUS_SUEDAFRIKA } from './mahfus-suedafrika';

export const AF_MODERNE: HistEvent = {
  id: 'af-moderne',
  title: 'Afrika seit 1950',
  date: 'ab 1950',
  text: [
    'Von Achebes „Things Fall Apart“ bis Coetzee: Afrikas Autoren erzählen von Kolonialismus, Unabhängigkeit und der Suche nach der eigenen Stimme.',
  ],
  subtopics: [UEBERBLICK, ACHEBE_SOYINKA, MAHFUS_SUEDAFRIKA],
};
