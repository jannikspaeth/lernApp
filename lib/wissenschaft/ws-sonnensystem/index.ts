import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { SONNE } from './sonne';
import { MERKUR_VENUS } from './merkur-venus';
import { ERDE_MOND } from './erde-mond';
import { MARS } from './mars';
import { JUPITER_SATURN } from './jupiter-saturn';
import { URANUS_NEPTUN } from './uranus-neptun';
import { KLEINKOERPER } from './kleinkoerper';

export const WS_SONNENSYSTEM: HistEvent = {
  id: 'ws-sonnensystem',
  title: 'Das Sonnensystem',
  date: 'vor 4,6 Mrd. Jahren – heute',
  text: [
    'Die Sonne, acht Planeten mit ihren Monden, Zwergplaneten, Asteroiden und Kometen: Unser Sonnensystem entstand vor rund 4,6 Milliarden Jahren aus einer Gas- und Staubwolke. Ein Kapitel stellt das Ganze vor, die weiteren reisen von der Sonne bis an den Rand des Systems.',
  ],
  subtopics: [UEBERBLICK, SONNE, MERKUR_VENUS, ERDE_MOND, MARS, JUPITER_SATURN, URANUS_NEPTUN, KLEINKOERPER],
};
