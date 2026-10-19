import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { KRAFTWERK } from './kraftwerk';
import { DAFT_PUNK } from './daft-punk';

export const SH_ELEKTRONIK: HistEvent = {
  id: 'sh-elektronik',
  title: 'Elektronische Musik',
  date: '1920 – heute',
  text: [
    'Vom Theremin über Synthesizer und Drumcomputer zu House und Techno: Elektronische Klänge erobern die Tanzflächen – mit Kraftwerk aus Düsseldorf als großen Pionieren.',
  ],
  subtopics: [UEBERBLICK, KRAFTWERK, DAFT_PUNK],
};
