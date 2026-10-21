import type { HistEvent } from '../../laender/types';
import { PHOTOSYNTHESE } from './photosynthese';
import { PFLANZENWELT } from './pflanzenwelt';
import { WALD } from './wald';
import { NUTZPFLANZEN } from './nutzpflanzen';

export const BI_PFLANZEN: HistEvent = {
  id: 'bi-pflanzen',
  title: 'Pflanzen',
  date: 'vor 470 Mio. Jahren – heute',
  text: [
    'Pflanzen ernähren fast alles Leben auf der Erde und liefern den Sauerstoff, den wir atmen. Vier Kapitel über Photosynthese, die Vielfalt der Pflanzen, den Wald und die Nutzpflanzen, die die Menschheit ernähren.',
  ],
  subtopics: [PHOTOSYNTHESE, PFLANZENWELT, WALD, NUTZPFLANZEN],
};
