import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { MOHAMMED } from './mohammed';
import { KORAN } from './koran';
import { FUENF_SAEULEN } from './fuenf-saeulen';
import { RICHTUNGEN } from './richtungen';
import { GESCHICHTE } from './geschichte';

export const RE_ISLAM: HistEvent = {
  id: 're-islam',
  title: 'Islam',
  date: '610 – heute',
  text: [
    'Die zweitgrößte Religion der Welt: der Prophet Mohammed, der Koran, die Fünf Säulen, Sunniten, Schiiten und Sufis und der Weg des Islam von Mekka bis nach Europa.',
  ],
  subtopics: [UEBERBLICK, MOHAMMED, KORAN, FUENF_SAEULEN, RICHTUNGEN, GESCHICHTE],
};
