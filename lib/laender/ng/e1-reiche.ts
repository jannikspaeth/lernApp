import type { Epoch } from '../types';
import { NOK_BENIN } from './e1-nok-benin-sub';
import { SOKOTO } from './e1-sokoto-sub';
import { KOLONIE } from './e1-kolonie-sub';
import { UNABH } from './e1-unabh-sub';

export const E1: Epoch = {
  id: 'reiche',
  name: 'Alte Reiche und Kolonialzeit',
  period: 'bis 1960',
  events: [
    {
      id: 'benin',
      title: 'Nok, Benin und das Kalifat von Sokoto',
      date: 'bis 1903',
      text: [
        'Lange vor den Europäern entstanden im heutigen Nigeria große Kulturen und Reiche: Nok, Ife, Oyo, Benin im Süden und Kanem-Bornu und das Kalifat von Sokoto im Norden.',
      ],
      subtopics: [NOK_BENIN, SOKOTO],
    },
    {
      id: 'kolonie',
      title: 'Sklavenhandel und britische Kolonie',
      date: '1500–1960',
      text: [
        'Der Atlantik-Sklavenhandel traf Nigeria hart. Danach schufen die Briten einen künstlichen Staat, aus dem 1960 die unabhängige Nation hervorging.',
      ],
      subtopics: [KOLONIE, UNABH],
    },
  ],
};
