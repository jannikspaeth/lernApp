import type { HistEvent } from '../../laender/types';
import { SOZIALSTAAT } from './sozialstaat';
import { RENTE } from './rente';
import { GESUNDHEIT } from './gesundheit';
import { BUERGERGELD } from './buergergeld';

export const GE_SOZIALSTAAT: HistEvent = {
  id: 'ge-sozialstaat',
  title: 'Sozialpolitik',
  date: 'Sozialstaat, Rente, Gesundheit, Grundsicherung',
  text: [
    'Wie der deutsche Sozialstaat funktioniert: von Bismarcks Sozialversicherungen über die Rente und den Generationenvertrag, Krankenkassen und Pflege bis zu Hartz IV, Bürgergeld und der Neuen Grundsicherung von 2026.',
  ],
  subtopics: [SOZIALSTAAT, RENTE, GESUNDHEIT, BUERGERGELD],
};
