import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { WETTLAUF } from './wettlauf';
import { APOLLO } from './apollo';
import { RAUMSTATIONEN } from './raumstationen';
import { SONDEN } from './sonden';
import { TELESKOPE } from './teleskope';
import { NEUE_RAUMFAHRT } from './neue-raumfahrt';

export const WS_RAUMFAHRT: HistEvent = {
  id: 'ws-raumfahrt',
  title: 'Raumfahrt',
  date: '1926 – heute',
  text: [
    'Von den ersten Flüssigkeitsraketen über Sputnik, Gagarin und die Mondlandung bis zur Internationalen Raumstation, zu Voyager und dem James-Webb-Teleskop: In nicht einmal hundert Jahren hat der Mensch den Sprung ins All gewagt.',
  ],
  subtopics: [UEBERBLICK, WETTLAUF, APOLLO, RAUMSTATIONEN, SONDEN, TELESKOPE, NEUE_RAUMFAHRT],
};
