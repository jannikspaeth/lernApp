import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { FRIEDRICH } from './friedrich';
import { TURNER } from './turner';
import { GOYA } from './goya';
import { DELACROIX } from './delacroix';

export const ROMANTIK: HistEvent = {
  id: 'romantik',
  title: 'Romantik',
  date: 'um 1790–1850',
  text: [
    'Gefühl, Natur und Sehnsucht: Die Romantik malte Seelenlandschaften, Revolutionen und Albträume – von Friedrichs Nebelmeer über Turners Dampf bis zu Goyas Schrecken.',
  ],
  subtopics: [UEBERBLICK, FRIEDRICH, TURNER, GOYA, DELACROIX],
};
