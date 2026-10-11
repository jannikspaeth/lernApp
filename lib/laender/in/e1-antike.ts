import type { Epoch } from '../types';
import { INDUS } from './e1-indus-sub';
import { VEDEN } from './e1-veden-sub';
import { MAURYA } from './e1-maurya-sub';
import { GUPTA } from './e1-gupta-sub';

export const E1: Epoch = {
  id: 'antike',
  name: 'Frühe Hochkulturen und Reiche',
  period: 'ca. 2600 v. Chr. – 6. Jahrhundert',
  events: [
    {
      id: 'indus',
      title: 'Induskultur, Veden und Buddha',
      date: 'ca. 2600–300 v. Chr.',
      text: [
        'Am Indus entstand eine der ersten Hochkulturen der Welt. Später prägten die Veden, das Kastenwesen und die Lehre des Buddha Indien bis heute.',
      ],
      subtopics: [INDUS, VEDEN],
    },
    {
      id: 'ashoka',
      title: 'Ashoka und das Goldene Zeitalter der Gupta',
      date: '4. Jh. v. Chr. – 6. Jh.',
      text: [
        'Zweimal einte ein Reich fast den ganzen Norden: unter den Maurya mit Kaiser Ashoka und unter den Gupta, deren Gelehrte die Null und das Stellenwertsystem hervorbrachten.',
      ],
      subtopics: [MAURYA, GUPTA],
    },
  ],
};
