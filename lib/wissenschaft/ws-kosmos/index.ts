import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { STERNE } from './sterne';
import { SCHWARZE_LOECHER } from './schwarze-loecher';
import { GALAXIEN } from './galaxien';
import { URKNALL } from './urknall';
import { EXOPLANETEN } from './exoplaneten';

export const WS_KOSMOS: HistEvent = {
  id: 'ws-kosmos',
  title: 'Sterne, Galaxien und Universum',
  date: 'vor 13,8 Mrd. Jahren – heute',
  text: [
    'Jenseits des Sonnensystems beginnt das eigentliche Weltall: Milliarden Sterne in unserer Milchstraße, Milliarden Galaxien im Universum. Die Kapitel erzählen vom Leben und Sterben der Sterne, von Schwarzen Löchern, vom Urknall und von der Suche nach Planeten um fremde Sonnen.',
  ],
  subtopics: [UEBERBLICK, STERNE, SCHWARZE_LOECHER, GALAXIEN, URKNALL, EXOPLANETEN],
};
