import type { Epoch } from '../types';
import { ADWA } from './e2-adwa-sub';
import { SELASSIE } from './e2-selassie-sub';
import { DERG } from './e3-derg-sub';
import { EPRDF } from './e3-eprdf-sub';
import { HEUTE } from './e3-heute-sub';

export const E2: Epoch = {
  id: 'moderne',
  name: 'Freiheit und Umbrüche',
  period: 'seit 1855',
  events: [
    {
      id: 'adwa',
      title: 'Adwa und Haile Selassie',
      date: '1855–1974',
      text: [
        'Als einziges Land Afrikas außer Liberia blieb Äthiopien unabhängig: Kaiser Menelik II. besiegte 1896 bei Adwa die Italiener. Haile Selassie führte das Land in die Moderne und wurde zur Ikone der Rastafari.',
      ],
      subtopics: [ADWA, SELASSIE],
    },
    {
      id: 'gegenwart',
      title: 'Derg, Hungersnot und Gegenwart',
      date: 'seit 1974',
      text: [
        'Nach dem Sturz des Kaisers prägten Militärdiktatur, Hunger, Krieg und die Frage des Zusammenlebens der Volksgruppen das Land, das heute zu den größten und jüngsten Afrikas zählt.',
      ],
      subtopics: [DERG, EPRDF, HEUTE],
    },
  ],
};
