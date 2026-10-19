import type { HistEvent } from '../../laender/types';
import { LEBEN } from './leben';
import { ETHIK } from './ethik';
import { FRIEDEN } from './frieden';

export const NZ_KANT: HistEvent = {
  id: 'nz-kant',
  title: 'Immanuel Kant',
  date: '1724–1804',
  text: [
    'Was kann ich wissen, was soll ich tun, was darf ich hoffen? Kant prüft die Grenzen der Vernunft, begründet die Moral im kategorischen Imperativ und entwirft den Weg zum ewigen Frieden – Höhepunkt der Aufklärung und Beginn einer neuen Philosophie.',
  ],
  subtopics: [LEBEN, ETHIK, FRIEDEN],
};
