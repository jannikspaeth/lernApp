import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { SAEUGETIERE } from './saeugetiere';
import { VOEGEL } from './voegel';
import { MEER } from './meer';
import { INSEKTEN } from './insekten';
import { REPTILIEN } from './reptilien';
import { DINOSAURIER } from './dinosaurier';
import { VERHALTEN } from './verhalten';

export const BI_TIERE: HistEvent = {
  id: 'bi-tiere',
  title: 'Die Tierwelt',
  date: 'vor 600 Mio. Jahren – heute',
  text: [
    'Vom Blauwal bis zur Ameise, vom Tyrannosaurus bis zum Wanderfalken: ein Streifzug durch die Tierwelt, ihre Rekorde und Rätsel – und wie Forscher wie Konrad Lorenz und Jane Goodall das Verhalten der Tiere entschlüsselten.',
  ],
  subtopics: [UEBERBLICK, SAEUGETIERE, VOEGEL, MEER, INSEKTEN, REPTILIEN, DINOSAURIER, VERHALTEN],
};
