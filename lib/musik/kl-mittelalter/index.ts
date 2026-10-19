import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HILDEGARD } from './hildegard';
import { PALESTRINA } from './palestrina';
import { JOSQUIN } from './josquin';

export const KL_MITTELALTER: HistEvent = {
  id: 'kl-mittelalter',
  title: 'Mittelalter und Renaissance',
  date: 'um 800–1600',
  text: [
    'Vom einstimmigen Choral der Klöster zur kunstvollen Vielstimmigkeit der Renaissance: In diesen 800 Jahren entstehen die Notenschrift, die Mehrstimmigkeit und die großen Formen der Kirchenmusik.',
  ],
  subtopics: [UEBERBLICK, HILDEGARD, JOSQUIN, PALESTRINA],
};
