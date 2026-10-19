import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { GERSHWIN } from './gershwin';
import { BERNSTEIN } from './bernstein';
import { LLOYD_WEBBER } from './lloyd-webber';

export const MF_MUSICAL: HistEvent = {
  id: 'mf-musical',
  title: 'Das Musical',
  date: '1900 – heute',
  text: [
    'Vom Broadway ins West End und nach Hamburg: Gesang, Tanz und Theater verschmelzen zum Musical – von Gershwin über die „West Side Story“ bis zum „Phantom der Oper“.',
  ],
  subtopics: [UEBERBLICK, GERSHWIN, BERNSTEIN, LLOYD_WEBBER],
};
