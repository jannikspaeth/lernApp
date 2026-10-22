import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { PLATTENTEKTONIK } from './plattentektonik';
import { VULKANE } from './vulkane';
import { ERDBEBEN } from './erdbeben';
import { GESTEINE } from './gesteine';

export const ER_GEOLOGIE: HistEvent = {
  id: 'er-geologie',
  title: 'Die feste Erde',
  date: 'vor 4,54 Mrd. Jahren – heute',
  text: [
    'Schalenbau und Alter der Erde, wandernde Kontinente, Vulkane, Erdbeben und Gesteine: die Geologie erzählt, wie unser Planet entstand und sich bis heute ständig verändert.',
  ],
  subtopics: [UEBERBLICK, PLATTENTEKTONIK, VULKANE, ERDBEBEN, GESTEINE],
};
