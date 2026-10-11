import type { Epoch } from '../types';
import { UNABH } from './e2-unabh-sub';
import { SUKARNO } from './e2-sukarno-sub';
import { UMSTURZ } from './e2-umsturz-sub';
import { NEUE_ORDNUNG } from './e2-neue-ordnung-sub';
import { REFORMASI } from './e3-reformasi-sub';
import { HEUTE } from './e3-heute-sub';

export const E2: Epoch = {
  id: 'republik',
  name: 'Die Republik Indonesien',
  period: 'seit 1942',
  events: [
    {
      id: 'sukarno',
      title: 'Unabhängigkeit unter Sukarno',
      date: '1942–1965',
      text: [
        'Nach der japanischen Besatzung rief Sukarno 1945 die Unabhängigkeit aus und erkämpfte sie gegen die Niederlande. Als Präsident führte er das Land in eine autoritäre „Gelenkte Demokratie“.',
      ],
      subtopics: [UNABH, SUKARNO],
    },
    {
      id: 'suharto',
      title: 'Suharto und die „Neue Ordnung“',
      date: '1965–1998',
      text: [
        'Nach dem Putschversuch von 1965 und blutigen Massakern an Kommunisten regierte General Suharto über 30 Jahre autoritär. Das Land wuchs wirtschaftlich stark, litt aber unter Korruption und Gewalt.',
      ],
      subtopics: [UMSTURZ, NEUE_ORDNUNG],
    },
    {
      id: 'gegenwart',
      title: 'Demokratie, Tsunami und eine neue Hauptstadt',
      date: 'seit 1998',
      text: [
        'Seit der Reformasi ist Indonesien eine lebendige Demokratie. Der Tsunami von 2004 brachte Leid und Frieden in Aceh, heute wächst das Land als Wirtschaftsmacht und baut eine neue Hauptstadt.',
      ],
      subtopics: [REFORMASI, HEUTE],
    },
  ],
};
