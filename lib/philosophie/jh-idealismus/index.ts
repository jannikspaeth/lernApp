import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { FICHTE } from './fichte';
import { SCHELLING } from './schelling';
import { HEGEL } from './hegel';

export const JH_IDEALISMUS: HistEvent = {
  id: 'jh-idealismus',
  title: 'Deutscher Idealismus',
  date: 'um 1790–1840',
  text: [
    'Nach Kant suchen Fichte, Schelling und Hegel ein einziges Prinzip für alles: das Ich, das Absolute, den Geist. In Jena treffen sie auf die Romantiker – und Hegels Dialektik prägt das ganze 19. Jahrhundert.',
  ],
  subtopics: [UEBERBLICK, FICHTE, SCHELLING, HEGEL],
};
