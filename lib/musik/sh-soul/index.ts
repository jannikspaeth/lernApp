import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { RAY_CHARLES } from './ray-charles';
import { ARETHA_FRANKLIN } from './aretha-franklin';
import { JAMES_BROWN } from './james-brown';
import { STEVIE_WONDER } from './stevie-wonder';

export const SH_SOUL: HistEvent = {
  id: 'sh-soul',
  title: 'Soul und Funk',
  date: '1955–1980',
  text: [
    'Gospel trifft Rhythm and Blues: Mit Motown, Stax und großen Stimmen wird der Soul zum Klang der Bürgerrechtsbewegung – und James Brown erfindet den Funk.',
  ],
  subtopics: [UEBERBLICK, RAY_CHARLES, ARETHA_FRANKLIN, JAMES_BROWN, STEVIE_WONDER],
};
