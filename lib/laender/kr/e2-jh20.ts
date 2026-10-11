import type { Epoch } from '../types';
import { ANNEXION } from './e2-annexion-sub';
import { KOLONIALZEIT } from './e2-kolonialzeit-sub';
import { TEILUNG } from './e2-teilung-sub';
import { KOREAKRIEG } from './e2-koreakrieg-sub';

export const E2: Epoch = {
  id: 'jh20',
  name: 'Kolonie, Teilung und Krieg',
  period: '1895–1953',
  events: [
    {
      id: 'kolonie',
      title: 'Japanische Kolonialherrschaft',
      date: '1895–1945',
      text: [
        'Japan machte Korea 1905 zum Protektorat und annektierte es 1910. Die Koreaner antworteten mit Widerstand, der 1919 in der friedlichen Märzbewegung gipfelte, und litten bis 1945 unter Unterdrückung und Zwangsarbeit.',
      ],
      subtopics: [ANNEXION, KOLONIALZEIT],
    },
    {
      id: 'koreakrieg',
      title: 'Teilung und Koreakrieg',
      date: '1945–1953',
      text: [
        'Nach der Befreiung teilten die Supermächte die Halbinsel am 38. Breitengrad. Aus der Teilung wurde ein Krieg, der bis heute nicht mit einem Friedensvertrag beendet ist.',
      ],
      subtopics: [TEILUNG, KOREAKRIEG],
    },
  ],
};
