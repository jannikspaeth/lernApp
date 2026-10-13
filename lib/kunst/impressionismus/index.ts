import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MONET } from './monet';
import { RENOIR_MANET_DEGAS } from './renoir-manet-degas';

export const IMPRESSIONISMUS: HistEvent = {
  id: 'impressionismus',
  title: 'Impressionismus',
  date: 'um 1860–1890',
  text: [
    'Licht, Luft und der flüchtige Augenblick: Die Impressionisten malten im Freien und das moderne Paris – von Monets Seerosen bis zu Degas’ Tänzerinnen.',
  ],
  subtopics: [UEBERBLICK, MONET, RENOIR_MANET_DEGAS],
};
