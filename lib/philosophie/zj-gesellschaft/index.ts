import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ADORNO } from './adorno';
import { ARENDT } from './arendt';
import { HABERMAS } from './habermas';
import { FOUCAULT } from './foucault';
import { RAWLS } from './rawls';

export const ZJ_GESELLSCHAFT: HistEvent = {
  id: 'zj-gesellschaft',
  title: 'Kritische Theorie und politische Philosophie',
  date: 'um 1920–heute',
  text: [
    'Nach Weltkriegen und Holocaust fragt die Philosophie nach Macht und Gerechtigkeit: die Frankfurter Schule nach der Dialektik der Aufklärung, Hannah Arendt nach der totalen Herrschaft, Habermas nach Verständigung, Foucault nach Überwachung und Rawls nach einer fairen Gesellschaft.',
  ],
  subtopics: [UEBERBLICK, ADORNO, ARENDT, HABERMAS, FOUCAULT, RAWLS],
};
