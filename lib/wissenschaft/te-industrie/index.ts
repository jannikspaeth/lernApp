import type { HistEvent } from '../../laender/types';
import { DAMPFMASCHINE } from './dampfmaschine';
import { EISENBAHN } from './eisenbahn';
import { ELEKTRIZITAET } from './elektrizitaet';
import { TELEFON } from './telefon';
import { AUTO } from './auto';
import { FLUGZEUG } from './flugzeug';

export const TE_INDUSTRIE: HistEvent = {
  id: 'te-industrie',
  title: 'Industrielle Revolution und Moderne',
  date: '1712 – 1970',
  text: [
    'Dampfmaschine und Eisenbahn, Glühbirne und Stromnetz, Telegraf und Telefon, Auto und Flugzeug: wie Erfinder und Ingenieure in zwei Jahrhunderten Arbeit, Reisen und Kommunikation völlig veränderten.',
  ],
  subtopics: [DAMPFMASCHINE, EISENBAHN, ELEKTRIZITAET, TELEFON, AUTO, FLUGZEUG],
};
