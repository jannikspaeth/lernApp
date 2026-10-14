import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { LESSING } from './lessing';
import { STURM_UND_DRANG } from './sturm-und-drang';

export const DE_AUFKLAERUNG: HistEvent = {
  id: 'de-aufklaerung',
  title: 'Aufklärung und Sturm und Drang',
  date: '1720–1785',
  text: [
    'Erst die Vernunft, dann das Gefühl: Lessing kämpft für Toleranz und ein bürgerliches Theater, bevor eine junge Generation um Goethe und Schiller alle Regeln sprengt.',
  ],
  subtopics: [UEBERBLICK, LESSING, STURM_UND_DRANG],
};
