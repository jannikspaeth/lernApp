import type { Epoch } from '../types';
import { CHINESISCH } from './e1-chinesisch-sub';
import { LY_TRAN } from './e1-ly-tran-sub';
import { NGUYEN } from './e1-nguyen-sub';

export const E1: Epoch = {
  id: 'fruehzeit',
  name: 'Unabhängigkeit und Dynastien',
  period: 'bis 1883',
  events: [
    {
      id: 'china',
      title: 'Tausend Jahre chinesische Herrschaft',
      date: '111 v. Chr. – 938',
      text: [
        'Das Delta des Roten Flusses stand fast tausend Jahre unter chinesischer Herrschaft. Die Vietnamesen übernahmen viel von China, bewahrten aber Sprache und Identität und erkämpften 938 ihre Unabhängigkeit.',
      ],
      subtopics: [CHINESISCH],
    },
    {
      id: 'dynastien',
      title: 'Dynastien, Mongolenabwehr und die Nguyễn',
      date: '939–1883',
      text: [
        'Unter Lý, Trần und Lê entstand ein selbstbewusster Staat, der Mongolen und Ming-Truppen besiegte, sich nach Süden ausdehnte und 1802 unter den Nguyễn geeint wurde.',
      ],
      subtopics: [LY_TRAN, NGUYEN],
    },
  ],
};
