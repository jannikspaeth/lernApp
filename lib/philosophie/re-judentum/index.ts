import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ABRAHAM_MOSE } from './abraham-mose';
import { TANACH_TALMUD } from './tanach-talmud';
import { FESTE } from './feste';
import { DIASPORA } from './diaspora';

export const RE_JUDENTUM: HistEvent = {
  id: 're-judentum',
  title: 'Judentum',
  date: 'um 1800 v. Chr. – heute',
  text: [
    'Die älteste der abrahamitischen Religionen: vom Bund Gottes mit Abraham und Mose über Tora und Talmud, Schabbat und Feste bis zu Diaspora, Schoa und dem Staat Israel.',
  ],
  subtopics: [UEBERBLICK, ABRAHAM_MOSE, TANACH_TALMUD, FESTE, DIASPORA],
};
