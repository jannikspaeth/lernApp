import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HAMSUN_LAGERLOEF } from './hamsun-lagerloef';
import { BLIXEN_LAXNESS } from './blixen-laxness';
import { LINDGREN_MANKELL } from './lindgren-mankell';

export const SK_20JH: HistEvent = {
  id: 'sk-20jh',
  title: 'Das 20. Jahrhundert im Norden',
  date: 'ab 1900',
  text: [
    'Von Hamsun und Lagerlöf bis zu Astrid Lindgren, Henning Mankell und Jon Fosse: Der Norden schreibt Kinderbücher, Krimis und leise, genaue Prosa.',
  ],
  subtopics: [UEBERBLICK, HAMSUN_LAGERLOEF, BLIXEN_LAXNESS, LINDGREN_MANKELL],
};
