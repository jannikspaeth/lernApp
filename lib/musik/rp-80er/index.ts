import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MICHAEL_JACKSON } from './michael-jackson';
import { MADONNA } from './madonna';
import { PRINCE } from './prince';
import { U2 } from './u2';
import { WHITNEY_HOUSTON } from './whitney-houston';

export const RP_80ER: HistEvent = {
  id: 'rp-80er',
  title: 'Pop der 80er',
  date: '1980–1990',
  text: [
    'MTV, Synthesizer und Superstars: Michael Jackson, Madonna und Prince prägen das Jahrzehnt des Musikvideos, und mit Live Aid wird Musik zur weltweiten Hilfsaktion.',
  ],
  subtopics: [UEBERBLICK, MICHAEL_JACKSON, MADONNA, PRINCE, WHITNEY_HOUSTON, U2],
};
