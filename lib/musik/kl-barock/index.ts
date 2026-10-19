import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MONTEVERDI } from './monteverdi';
import { VIVALDI } from './vivaldi';
import { BACH } from './bach';
import { HAENDEL } from './haendel';

export const KL_BAROCK: HistEvent = {
  id: 'kl-barock',
  title: 'Barock',
  date: '1600–1750',
  text: [
    'Generalbass, Pracht und starke Gefühle: Im Barock entstehen Oper, Oratorium, Konzert und Fuge – von Monteverdis „Orfeo“ bis zu Bachs Passionen und Händels „Messias“.',
  ],
  subtopics: [UEBERBLICK, MONTEVERDI, VIVALDI, BACH, HAENDEL],
};
