import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { FONTANE } from './fontane';
import { STORM_KELLER } from './storm-keller';

export const DE_REALISMUS: HistEvent = {
  id: 'de-realismus',
  title: 'Bürgerlicher Realismus',
  date: '1848–1890',
  text: [
    'Der genaue Blick auf die Wirklichkeit: Fontane erzählt die Gesellschaft des Kaiserreichs, Storm die Macht des Meeres und Keller die Schwächen seiner Landsleute.',
  ],
  subtopics: [UEBERBLICK, FONTANE, STORM_KELLER],
};
