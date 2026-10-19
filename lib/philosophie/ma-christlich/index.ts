import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { AUGUSTINUS } from './augustinus';
import { BOETHIUS } from './boethius';
import { ANSELM } from './anselm';
import { THOMAS } from './thomas';
import { ECKHART } from './eckhart';
import { OCKHAM } from './ockham';

export const MA_CHRISTLICH: HistEvent = {
  id: 'ma-christlich',
  title: 'Kirchenväter und Scholastik',
  date: 'um 200–1450',
  text: [
    'Glaube und Vernunft: Von Augustinus über Anselms Gottesbeweis und Thomas von Aquins Synthese mit Aristoteles bis zu Meister Eckharts Mystik und Ockhams Rasiermesser.',
  ],
  subtopics: [UEBERBLICK, AUGUSTINUS, BOETHIUS, ANSELM, THOMAS, ECKHART, OCKHAM],
};
