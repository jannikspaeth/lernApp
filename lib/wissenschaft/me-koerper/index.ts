import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HERZ } from './herz';
import { ORGANE } from './organe';
import { GEHIRN } from './gehirn';
import { SINNE } from './sinne';
import { IMMUNSYSTEM } from './immunsystem';

export const ME_KOERPER: HistEvent = {
  id: 'me-koerper',
  title: 'Der menschliche Körper',
  date: 'Anatomie und Physiologie',
  text: [
    'Knochen und Muskeln, Herz und Blut, Lunge, Magen und Nieren, Gehirn und Sinne, das Immunsystem: eine Reise durch den menschlichen Körper und seine erstaunlichen Leistungen.',
  ],
  subtopics: [UEBERBLICK, HERZ, ORGANE, GEHIRN, SINNE, IMMUNSYSTEM],
};
