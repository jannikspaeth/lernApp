import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { EIFFEL_GAUDI } from './eiffel-gaudi';
import { BAUHAUS_WRIGHT } from './bauhaus-wright';
import { UTZON } from './utzon';

export const BAUKUNST_MODERNE: HistEvent = {
  id: 'baukunst-moderne',
  title: 'Architektur der Moderne',
  date: 'um 1850–heute',
  text: [
    'Eisen, Glas und Beton veränderten das Bauen: vom Eiffelturm über das Bauhaus bis zur Skulptur am Hafen von Sydney.',
  ],
  subtopics: [UEBERBLICK, EIFFEL_GAUDI, BAUHAUS_WRIGHT, UTZON],
};
