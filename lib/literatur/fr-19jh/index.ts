import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HUGO } from './hugo';
import { BALZAC_FLAUBERT } from './balzac-flaubert';
import { BAUDELAIRE_ZOLA } from './baudelaire-zola';

export const FR_19JH: HistEvent = {
  id: 'fr-19jh',
  title: 'Das 19. Jahrhundert',
  date: '1800–1900',
  text: [
    'Romantik, Realismus, Naturalismus und moderne Lyrik in einem Jahrhundert: Hugo, Balzac, Flaubert, Baudelaire und Zola schreiben die Gesellschaft und die Großstadt neu.',
  ],
  subtopics: [UEBERBLICK, HUGO, BALZAC_FLAUBERT, BAUDELAIRE_ZOLA],
};
