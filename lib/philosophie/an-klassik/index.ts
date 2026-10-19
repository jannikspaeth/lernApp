import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { SOKRATES } from './sokrates';
import { PLATON } from './platon';
import { ARISTOTELES } from './aristoteles';

export const AN_KLASSIK: HistEvent = {
  id: 'an-klassik',
  title: 'Athen: Sokrates, Platon, Aristoteles',
  date: '450–322 v. Chr.',
  text: [
    'In drei Generationen schufen Sokrates, Platon und Aristoteles in Athen die Grundlagen von Ethik, Logik und Staatsphilosophie – im Streit mit den Sophisten, die Redekunst gegen Geld lehrten.',
  ],
  subtopics: [UEBERBLICK, SOKRATES, PLATON, ARISTOTELES],
};
