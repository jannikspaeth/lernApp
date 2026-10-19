import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { JOPLIN } from './joplin';
import { BESSIE_SMITH } from './bessie-smith';
import { ARMSTRONG } from './armstrong';

export const JZ_WURZELN: HistEvent = {
  id: 'jz-wurzeln',
  title: 'Blues, Ragtime und New Orleans',
  date: 'um 1890–1930',
  text: [
    'Aus Spirituals, Blues und Ragtime entsteht in New Orleans eine völlig neue Musik. Mit Louis Armstrong wird der Jazz zur Kunst der großen Solisten.',
  ],
  subtopics: [UEBERBLICK, JOPLIN, BESSIE_SMITH, ARMSTRONG],
};
