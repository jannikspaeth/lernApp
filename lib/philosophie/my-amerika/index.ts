import type { HistEvent } from '../../laender/types';
import { AZTEKEN } from './azteken';
import { MAYA } from './maya';
import { INKA } from './inka';

export const MY_AMERIKA: HistEvent = {
  id: 'my-amerika',
  title: 'Mythen Mittel- und Südamerikas',
  date: 'um 2000 v. Chr. – 1572',
  text: [
    'Die fünf Sonnen und die Gefiederte Schlange der Azteken, das Popol Vuh und die Heldenzwillinge der Maya, Viracocha, Inti und Pachamama in den Anden.',
  ],
  subtopics: [AZTEKEN, MAYA, INKA],
};
