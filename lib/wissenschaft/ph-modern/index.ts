import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { EINSTEIN } from './einstein';
import { QUANTEN } from './quanten';
import { CURIE } from './curie';
import { KERNSPALTUNG } from './kernspaltung';
import { TEILCHEN } from './teilchen';

export const PH_MODERN: HistEvent = {
  id: 'ph-modern',
  title: 'Moderne Physik',
  date: '1895 – heute',
  text: [
    'Um 1900 geriet die Physik ins Wanken: Relativitätstheorie und Quantenphysik stellten Raum, Zeit und Wirklichkeit auf den Kopf, die Radioaktivität öffnete den Blick ins Innere der Atome – mit Folgen von der Atombombe bis zum Higgs-Teilchen.',
  ],
  subtopics: [UEBERBLICK, EINSTEIN, QUANTEN, CURIE, KERNSPALTUNG, TEILCHEN],
};
