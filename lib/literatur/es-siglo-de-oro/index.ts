import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { CERVANTES } from './cervantes';
import { LOPE_CALDERON } from './lope-calderon';

export const ES_SIGLO_DE_ORO: HistEvent = {
  id: 'es-siglo-de-oro',
  title: 'Das Goldene Zeitalter',
  date: '1500–1700',
  text: [
    'Zwischen Entdeckung Amerikas und Niedergang der Weltmacht blühen in Spanien Roman, Theater und Dichtung wie nie zuvor: Cervantes, Lope de Vega, Calderón.',
  ],
  subtopics: [UEBERBLICK, CERVANTES, LOPE_CALDERON],
};
