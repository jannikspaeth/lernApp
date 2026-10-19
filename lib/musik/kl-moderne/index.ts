import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { DEBUSSY } from './debussy';
import { RAVEL } from './ravel';
import { STRAWINSKY } from './strawinsky';
import { SCHOENBERG } from './schoenberg';
import { SCHOSTAKOWITSCH } from './schostakowitsch';
import { RICHARD_STRAUSS } from './richard-strauss';
import { BARTOK } from './bartok';

export const KL_MODERNE: HistEvent = {
  id: 'kl-moderne',
  title: 'Impressionismus und Moderne',
  date: '1890–1975',
  text: [
    'Schwebende Klangfarben, Skandale und zwölf gleichberechtigte Töne: Im 20. Jahrhundert sprengen Debussy, Strawinsky und Schönberg die Regeln, und die Musik muss sich unter Diktaturen behaupten.',
  ],
  subtopics: [UEBERBLICK, RICHARD_STRAUSS, DEBUSSY, RAVEL, STRAWINSKY, SCHOENBERG, BARTOK, SCHOSTAKOWITSCH],
};
