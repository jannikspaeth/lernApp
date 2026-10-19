import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HEIDEGGER } from './heidegger';
import { SARTRE } from './sartre';
import { BEAUVOIR } from './beauvoir';
import { CAMUS } from './camus';

export const ZJ_EXISTENZ: HistEvent = {
  id: 'zj-existenz',
  title: 'Phänomenologie und Existentialismus',
  date: 'um 1900–1970',
  text: [
    '„Zu den Sachen selbst!“: Von Husserls Phänomenologie über Heideggers „Sein und Zeit“ bis zu den Pariser Existentialisten Sartre, Beauvoir und Camus, die nach Freiheit, Angst und dem Absurden fragen.',
  ],
  subtopics: [UEBERBLICK, HEIDEGGER, SARTRE, BEAUVOIR, CAMUS],
};
