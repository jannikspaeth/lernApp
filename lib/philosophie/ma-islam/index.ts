import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { AVICENNA } from './avicenna';
import { AVERROES } from './averroes';
import { MAIMONIDES } from './maimonides';

export const MA_ISLAM: HistEvent = {
  id: 'ma-islam',
  title: 'Islamische und jüdische Philosophie',
  date: '8.–13. Jh.',
  text: [
    'Von Bagdads „Haus der Weisheit“ bis Córdoba: Arabische, persische und jüdische Denker bewahrten Aristoteles, entwickelten Medizin und Philosophie weiter und gaben sie an das christliche Europa weiter.',
  ],
  subtopics: [UEBERBLICK, AVICENNA, AVERROES, MAIMONIDES],
};
