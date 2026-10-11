import type { Epoch } from '../types';
import { KOLONIE } from './e2-kolonie-sub';
import { INDOCHINAKRIEG } from './e2-indochina-sub';
import { ESKALATION } from './e2-eskalation-sub';
import { ENDE } from './e2-ende-sub';

export const E2: Epoch = {
  id: 'kriege',
  name: 'Kolonie und Kriege',
  period: '1858–1976',
  events: [
    {
      id: 'indochina',
      title: 'Französische Kolonie und Unabhängigkeitskampf',
      date: '1858–1954',
      text: [
        'Frankreich unterwarf Vietnam im 19. Jahrhundert und machte es zum Teil von Indochina. Gegen die Kolonialherren formierte sich Widerstand, den Hồ Chí Minh schließlich bis zum Sieg bei Điện Biên Phủ führte.',
      ],
      subtopics: [KOLONIE, INDOCHINAKRIEG],
    },
    {
      id: 'vietnamkrieg',
      title: 'Der Vietnamkrieg',
      date: '1955–1976',
      text: [
        'Das geteilte Land wurde zum Schauplatz des Kalten Krieges. Mit mehr als einer halben Million Soldaten griffen die USA ein und konnten den Krieg doch nicht gewinnen; 1975 fiel Saigon.',
      ],
      subtopics: [ESKALATION, ENDE],
    },
  ],
};
