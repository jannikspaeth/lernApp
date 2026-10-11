import type { Epoch } from '../types';
import { UNABHAENGIGKEIT } from './e2-unabhaengigkeit-sub';
import { SECHSTAGE } from './e2-sechstage-sub';
import { JOMKIPPUR } from './e2-jomkippur-sub';
import { OSLO } from './e3-oslo-sub';
import { GAZA } from './e3-gaza-sub';
import { HEUTE } from './e3-heute-sub';

export const E2: Epoch = {
  id: 'staat',
  name: 'Der Staat Israel',
  period: 'seit 1947',
  events: [
    {
      id: 'staatsgruendung',
      title: 'Staatsgründung und Krieg',
      date: '1947–1967',
      text: [
        'Am 14. Mai 1948 wurde der Staat Israel ausgerufen. Für die Juden war es die Erfüllung eines Jahrtausendtraums und eine Zuflucht nach dem Holocaust, für die Palästinenser die Nakba, Flucht und Vertreibung.',
      ],
      subtopics: [UNABHAENGIGKEIT],
    },
    {
      id: 'kriege',
      title: 'Sechstagekrieg, Jom-Kippur-Krieg und Frieden mit Ägypten',
      date: '1964–1982',
      text: [
        'Zwei Kriege veränderten den Nahen Osten: 1967 eroberte Israel große Gebiete und wurde Besatzungsmacht, 1973 erschütterte der Überraschungsangriff das Selbstbild des Landes. Er führte schließlich zum ersten Frieden mit einem arabischen Staat.',
      ],
      subtopics: [SECHSTAGE, JOMKIPPUR],
    },
    {
      id: 'oslo-gaza',
      title: 'Oslo, Intifada und der Gaza-Krieg',
      date: 'seit 1987',
      text: [
        'Seit den Intifadas, dem Oslo-Friedensprozess und dem Krieg nach dem 7. Oktober 2023 steht Israel im Zentrum eines ungelösten Konflikts. Zugleich ist es eine lebendige Demokratie und Hightech-Nation.',
      ],
      subtopics: [OSLO, GAZA, HEUTE],
    },
  ],
};
