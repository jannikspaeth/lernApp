import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MOLIERE } from './moliere';
import { VOLTAIRE_ROUSSEAU } from './voltaire-rousseau';

export const FR_KLASSIK: HistEvent = {
  id: 'fr-klassik',
  title: 'Klassik und Aufklärung',
  date: '1630–1789',
  text: [
    'Strenge Regeln am Hof Ludwigs XIV., dann der Angriff auf Kirche und Adel: von Molières Komödien bis zu Voltaire, Rousseau und der Encyclopédie.',
  ],
  subtopics: [UEBERBLICK, MOLIERE, VOLTAIRE_ROUSSEAU],
};
