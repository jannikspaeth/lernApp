import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { POE } from './poe';
import { MELVILLE_TWAIN } from './melville-twain';

export const US_19JH: HistEvent = {
  id: 'us-19jh',
  title: 'Das 19. Jahrhundert',
  date: '1820–1900',
  text: [
    'Eine eigene amerikanische Literatur entsteht: Thoreau am Walden-See, Poes Schauergeschichten, Melvilles weißer Wal und Twains Floßfahrt auf dem Mississippi.',
  ],
  subtopics: [UEBERBLICK, POE, MELVILLE_TWAIN],
};
