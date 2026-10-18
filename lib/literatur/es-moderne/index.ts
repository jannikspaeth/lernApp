import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { GALDOS_UNAMUNO } from './galdos-unamuno';
import { LORCA_MACHADO } from './lorca-machado';

export const ES_MODERNE: HistEvent = {
  id: 'es-moderne',
  title: 'Spanien im 19. und 20. Jahrhundert',
  date: 'ab 1800',
  text: [
    'Vom Realismus eines Galdós über die „Generation von 98“ bis zu Federico García Lorca, dessen Ermordung 1936 zum Symbol des Bürgerkriegs wurde.',
  ],
  subtopics: [UEBERBLICK, GALDOS_UNAMUNO, LORCA_MACHADO],
};
