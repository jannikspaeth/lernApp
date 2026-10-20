import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { DAOISMUS } from './daoismus';
import { KONFUZIANISMUS } from './konfuzianismus';
import { SHINTO } from './shinto';

export const RE_OSTASIEN: HistEvent = {
  id: 're-ostasien',
  title: 'Religionen Ostasiens',
  date: 'um 1600 v. Chr. – heute',
  text: [
    'Chinas „drei Lehren“ und Japans Weg der Götter: Volksreligion und Ahnen, religiöser Daoismus, Konfuzianismus als Ritual und Staatskult und der Shinto mit seinen Kami und Schreinen.',
  ],
  subtopics: [UEBERBLICK, DAOISMUS, KONFUZIANISMUS, SHINTO],
};
