import type { HistEvent } from '../../laender/types';
import { MEDIEN } from './medien';
import { MIGRATION } from './migration';
import { DIGITALISIERUNG } from './digitalisierung';
import { GLEICHBERECHTIGUNG } from './gleichberechtigung';
import { BILDUNG } from './bildung';

export const GE_THEMEN: HistEvent = {
  id: 'ge-themen',
  title: 'Gesellschaftliche Themen',
  date: 'Medien, Migration, Digitales, Gleichberechtigung, Bildung',
  text: [
    'Große Streitfragen der Gegenwart: Pressefreiheit und Desinformation, Einwanderung und Integration, Datenschutz und künstliche Intelligenz, Gleichberechtigung und Vielfalt sowie Schule, Ausbildung und Studium.',
  ],
  subtopics: [MEDIEN, MIGRATION, DIGITALISIERUNG, GLEICHBERECHTIGUNG, BILDUNG],
};
