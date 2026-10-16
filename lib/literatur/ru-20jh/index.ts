import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { BULGAKOW_PASTERNAK } from './bulgakow-pasternak';
import { SOLSCHENIZYN } from './solschenizyn';

export const RU_20JH: HistEvent = {
  id: 'ru-20jh',
  title: 'Das 20. Jahrhundert',
  date: 'ab 1900',
  text: [
    'Revolution, Zensur und Lager: Die größten Bücher dieser Zeit entstanden im Verborgenen und erschienen erst Jahrzehnte später oder im Ausland.',
  ],
  subtopics: [UEBERBLICK, BULGAKOW_PASTERNAK, SOLSCHENIZYN],
};
