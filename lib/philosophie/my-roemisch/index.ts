import type { HistEvent } from '../../laender/types';
import { GOETTER } from './goetter';
import { GRUENDUNG } from './gruendung';

export const MY_ROEMISCH: HistEvent = {
  id: 'my-roemisch',
  title: 'Römische Mythologie',
  date: 'um 750 v. Chr. – 400 n. Chr.',
  text: [
    'Jupiter, Janus, Vesta und die Hausgötter, Aeneas’ Flucht aus Troja, Romulus und Remus und die Sagen von Roms Gründung und früher Tugend.',
  ],
  subtopics: [GOETTER, GRUENDUNG],
};
