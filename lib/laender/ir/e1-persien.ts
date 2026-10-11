import type { Epoch } from '../types';
import { ACHAEMENIDEN } from './e1-achaemeniden-sub';
import { PARTHER } from './e1-parther-sub';
import { SASSANIDEN } from './e1-sassaniden-sub';
import { ISLAM } from './e1-islam-sub';
import { SAFAWIDEN } from './e1-safawiden-sub';

export const E1: Epoch = {
  id: 'persien',
  name: 'Das alte Persien',
  period: '550 v. Chr. – 1906',
  events: [
    {
      id: 'perserreich',
      title: 'Das Perserreich',
      date: '550 v. Chr. – 224 n. Chr.',
      text: [
        'Unter Kyros und Dareios entstand das erste Weltreich der Geschichte. Auf Alexander folgten Seleukiden und Parther, bis die Sassaniden die persische Tradition erneuerten.',
      ],
      subtopics: [ACHAEMENIDEN, PARTHER],
    },
    {
      id: 'safawiden',
      title: 'Sassaniden, Islam und Safawiden',
      date: '224–1906',
      text: [
        'Von den Sassaniden über die arabische Eroberung, die Dichter und den Mongolensturm bis zu den Safawiden, die den Schiismus zur Staatsreligion machten, und den schwachen Qajaren.',
      ],
      subtopics: [SASSANIDEN, ISLAM, SAFAWIDEN],
    },
  ],
};
