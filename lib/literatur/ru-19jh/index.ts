import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { PUSCHKIN_GOGOL } from './puschkin-gogol';
import { DOSTOJEWSKI } from './dostojewski';
import { TOLSTOI } from './tolstoi';
import { TSCHECHOW } from './tschechow';

export const RU_19JH: HistEvent = {
  id: 'ru-19jh',
  title: 'Das goldene Zeitalter',
  date: '1820–1900',
  text: [
    'Unter Zar und Zensur entsteht in wenigen Jahrzehnten eine Weltliteratur: Puschkin, Gogol, Dostojewski, Tolstoi und Tschechow.',
  ],
  subtopics: [UEBERBLICK, PUSCHKIN_GOGOL, DOSTOJEWSKI, TOLSTOI, TSCHECHOW],
};
