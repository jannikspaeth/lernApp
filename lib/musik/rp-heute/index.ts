import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { NIRVANA } from './nirvana';
import { BEYONCE } from './beyonce';
import { TAYLOR_SWIFT } from './taylor-swift';

export const RP_HEUTE: HistEvent = {
  id: 'rp-heute',
  title: 'Von den 90ern bis heute',
  date: '1990 – heute',
  text: [
    'Grunge, Britpop und Boygroups, dann Napster, Streaming und TikTok: Die Musik wird digital und global – mit neuen Superstars wie Beyoncé und Taylor Swift.',
  ],
  subtopics: [UEBERBLICK, NIRVANA, BEYONCE, TAYLOR_SWIFT],
};
