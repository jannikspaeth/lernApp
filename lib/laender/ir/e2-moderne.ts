import type { Epoch } from '../types';
import { REZA } from './e2-reza-sub';
import { MOSSADEGH } from './e2-mossadegh-sub';
import { REVOLUTION } from './e2-revolution-sub';
import { KRIEG } from './e2-krieg-sub';
import { ATOM } from './e3-atom-sub';
import { PROTESTE } from './e3-proteste-sub';

export const E2: Epoch = {
  id: 'moderne',
  name: 'Schahs und Islamische Republik',
  period: 'seit 1906',
  events: [
    {
      id: 'schah',
      title: 'Schahs, Öl und der Putsch von 1953',
      date: '1906–1978',
      text: [
        'Mit der Verfassung von 1906 begann Irans Weg in die Moderne. Unter den Pahlavi-Schahs wuchsen Industrie und Öleinnahmen, doch der Putsch von 1953 und die Diktatur der SAVAK bereiteten den Boden für die Revolution.',
      ],
      subtopics: [REZA, MOSSADEGH],
    },
    {
      id: 'revolution',
      title: 'Die Islamische Revolution',
      date: '1978–1988',
      text: [
        '1979 stürzte eine Massenbewegung den Schah, und Khomeini gründete die Islamische Republik. Es folgten die Geiselnahme in der US-Botschaft und ein achtjähriger Krieg gegen den Irak.',
      ],
      subtopics: [REVOLUTION, KRIEG],
    },
    {
      id: 'gegenwart',
      title: 'Atomstreit und Protestbewegungen',
      date: 'seit 1989',
      text: [
        'Seit Khomeinis Tod regiert Chamenei als Oberster Führer. Der Streit um das Atomprogramm, Sanktionen, regionale Konflikte und immer neue Protestwellen bestimmen das Land.',
      ],
      subtopics: [ATOM, PROTESTE],
    },
  ],
};
