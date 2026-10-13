import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { VANGOGH } from './vangogh';
import { CEZANNE } from './cezanne';

export const POSTIMPRESSIONISMUS: HistEvent = {
  id: 'postimpressionismus',
  title: 'Postimpressionismus',
  date: 'um 1880–1905',
  text: [
    'Nach dem Impressionismus suchten die Maler Struktur, Gefühl und Symbolik: Cézanne zerlegte die Natur in Formen, Van Gogh malte seine Seele, Seurat setzte Punkt neben Punkt.',
  ],
  subtopics: [UEBERBLICK, VANGOGH, CEZANNE],
};
