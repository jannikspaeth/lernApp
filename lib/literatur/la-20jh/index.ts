import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { BORGES_CORTAZAR } from './borges-cortazar';
import { NERUDA_PAZ } from './neruda-paz';
import { GARCIA_MARQUEZ } from './garcia-marquez';

export const LA_20JH: HistEvent = {
  id: 'la-20jh',
  title: 'Lateinamerika im 20. Jahrhundert',
  date: 'ab 1900',
  text: [
    'Borges, Neruda und García Márquez: Der „Boom“ der lateinamerikanischen Literatur machte den magischen Realismus weltberühmt.',
  ],
  subtopics: [UEBERBLICK, BORGES_CORTAZAR, NERUDA_PAZ, GARCIA_MARQUEZ],
};
