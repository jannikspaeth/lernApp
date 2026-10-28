import type { HistEvent } from '../../laender/types';
import { ENTSTEHUNG } from './entstehung';
import { GRUNDRECHTE } from './grundrechte';
import { PRINZIPIEN } from './prinzipien';
import { FOEDERALISMUS } from './foederalismus';
import { VERFASSUNGSGERICHT } from './verfassungsgericht';
import { SYMBOLE } from './symbole';

export const DE_GRUNDGESETZ: HistEvent = {
  id: 'de-grundgesetz',
  title: 'Das Grundgesetz',
  date: 'seit 1949',
  text: [
    'Wie das Grundgesetz 1948/49 entstand, welche Grundrechte es garantiert und auf welchen Prinzipien der Staat ruht – vom Föderalismus über das Bundesverfassungsgericht bis zu Flagge, Hymne und Feiertagen.',
  ],
  subtopics: [ENTSTEHUNG, GRUNDRECHTE, PRINZIPIEN, FOEDERALISMUS, VERFASSUNGSGERICHT, SYMBOLE],
};
