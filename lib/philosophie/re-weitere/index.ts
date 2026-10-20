import type { HistEvent } from '../../laender/types';
import { ZOROASTRISMUS } from './zoroastrismus';
import { JAINISMUS } from './jainismus';
import { SIKHISMUS } from './sikhismus';
import { BAHAI } from './bahai';
import { INDIGENE } from './indigene';

export const RE_WEITERE: HistEvent = {
  id: 're-weitere',
  title: 'Weitere Religionen',
  date: 'Urzeit – heute',
  text: [
    'Von Zarathustras Kampf zwischen Gut und Böse über die Gewaltlosigkeit der Jainas, die zehn Gurus der Sikhs und die Bahai bis zu Schamanen, Traumzeit und den Orishas Afrikas.',
  ],
  subtopics: [ZOROASTRISMUS, JAINISMUS, SIKHISMUS, BAHAI, INDIGENE],
};
