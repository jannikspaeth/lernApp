import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { THERAVADA } from './theravada';
import { MAHAYANA } from './mahayana';
import { TIBET } from './tibet';
import { ZEN } from './zen';

export const RE_BUDDHISMUS: HistEvent = {
  id: 're-buddhismus',
  title: 'Buddhismus',
  date: 'um 500 v. Chr. – heute',
  text: [
    'Der Weg des Erwachens als gelebte Religion: die Drei Juwelen, Mönche und Klöster des Theravada, die Bodhisattvas des Mahayana, der Dalai Lama und Tibet, Zen in Japan.',
  ],
  subtopics: [UEBERBLICK, THERAVADA, MAHAYANA, TIBET, ZEN],
};
