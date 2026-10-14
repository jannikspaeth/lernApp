import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { LYRIK } from './lyrik';
import { GRIMM } from './grimm';
import { HOFFMANN } from './hoffmann';

export const DE_ROMANTIK: HistEvent = {
  id: 'de-romantik',
  title: 'Romantik',
  date: '1795–1835',
  text: [
    'Blaue Blume, Mondnacht und Märchen: Die Romantik sucht das Geheimnis hinter den Dingen – bei Hoffmann wird es unheimlich, bei den Brüdern Grimm zur Weltliteratur für Kinder.',
  ],
  subtopics: [UEBERBLICK, LYRIK, GRIMM, HOFFMANN],
};
