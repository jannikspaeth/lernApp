import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { SCHOPENHAUER } from './schopenhauer';
import { KIERKEGAARD } from './kierkegaard';
import { MARX } from './marx';
import { MILL } from './mill';
import { NIETZSCHE } from './nietzsche';

export const JH_19: HistEvent = {
  id: 'jh-19',
  title: 'Nach Hegel: Wille, Existenz, Gesellschaft',
  date: 'um 1830–1900',
  text: [
    'Das Ende der großen Systeme: Schopenhauer sieht die Welt als blinden Willen, Kierkegaard stellt den Einzelnen vor die Entscheidung, Marx will die Welt verändern, Mill verteidigt die Freiheit – und Nietzsche verkündet den Tod Gottes.',
  ],
  subtopics: [UEBERBLICK, SCHOPENHAUER, KIERKEGAARD, MARX, MILL, NIETZSCHE],
};
