import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { RENAISSANCE } from './renaissance';
import { BAROCK } from './barock';

export const BAUKUNST_NEUZEIT: HistEvent = {
  id: 'baukunst-neuzeit',
  title: 'Baukunst von Renaissance und Barock',
  date: 'um 1420–1750',
  text: [
    'Von Brunelleschis Kuppel bis zum Spiegelsaal von Versailles: Renaissance und Barock bauten für Kirche und Fürsten Anlagen, die Ordnung und Macht inszenierten.',
  ],
  subtopics: [UEBERBLICK, RENAISSANCE, BAROCK],
};
