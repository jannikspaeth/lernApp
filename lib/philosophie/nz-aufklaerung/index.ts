import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MONTESQUIEU } from './montesquieu';
import { VOLTAIRE } from './voltaire';
import { ROUSSEAU } from './rousseau';
import { DIDEROT } from './diderot';
import { SMITH } from './smith';

export const NZ_AUFKLAERUNG: HistEvent = {
  id: 'nz-aufklaerung',
  title: 'Die Aufklärung',
  date: 'um 1680–1800',
  text: [
    'Das Licht der Vernunft gegen Aberglauben und Willkür: Montesquieu teilt die Gewalten, Voltaire kämpft für Toleranz, Rousseau entwirft den Gesellschaftsvertrag, Diderot ordnet das Wissen der Welt und Adam Smith begründet die Volkswirtschaft.',
  ],
  subtopics: [UEBERBLICK, MONTESQUIEU, VOLTAIRE, ROUSSEAU, DIDEROT, SMITH],
};
