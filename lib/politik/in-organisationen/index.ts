import type { HistEvent } from '../../laender/types';
import { UNO } from './uno';
import { SICHERHEITSRAT } from './sicherheitsrat';
import { UN_ORGANISATIONEN } from './un-organisationen';
import { NATO } from './nato';
import { WIRTSCHAFTSORGANISATIONEN } from './wirtschaftsorganisationen';
import { WEITERE } from './weitere';

export const IN_ORGANISATIONEN: HistEvent = {
  id: 'in-organisationen',
  title: 'Internationale Organisationen',
  date: '1863 – heute',
  text: [
    'Die Vereinten Nationen mit Sicherheitsrat und Unterorganisationen, die NATO, die Wirtschaftsorganisationen von IWF bis G20 und regionale Bündnisse in Europa, Afrika und Asien – wo die Staaten der Welt zusammenarbeiten und wo sie aneinandergeraten.',
  ],
  subtopics: [UNO, SICHERHEITSRAT, UN_ORGANISATIONEN, NATO, WIRTSCHAFTSORGANISATIONEN, WEITERE],
};
