import type { Epoch } from '../types';
import { UREINWOHNER } from './e1-ureinwohner-sub';
import { KAPKOLONIE } from './e1-kapkolonie-sub';
import { TRECK } from './e1-treck-sub';
import { GOLD } from './e1-gold-sub';

export const E1: Epoch = {
  id: 'kolonie',
  name: 'Ureinwohner, Buren und Briten',
  period: 'bis 1910',
  events: [
    {
      id: 'kap',
      title: 'Ureinwohner und die Kapkolonie',
      date: 'bis 1806',
      text: [
        'Am Südzipfel Afrikas lebten San, Khoikhoi und Bantu-Völker, bevor 1652 die Niederländer eine Versorgungsstation gründeten, aus der die Kapkolonie wurde.',
      ],
      subtopics: [UREINWOHNER, KAPKOLONIE],
    },
    {
      id: 'burenkriege',
      title: 'Großer Treck, Gold und Burenkriege',
      date: '1806–1910',
      text: [
        'Unter britischer Herrschaft zogen Buren ins Landesinnere, wo sie auf das Zulu-Reich trafen. Diamanten und Gold führten zum Burenkrieg und zur Südafrikanischen Union.',
      ],
      subtopics: [TRECK, GOLD],
    },
  ],
};
