import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { DEFOE_SWIFT } from './defoe-swift';

export const EN_AUFKLAERUNG: HistEvent = {
  id: 'en-aufklaerung',
  title: 'Aufklärung und der Roman',
  date: '1660–1800',
  text: [
    'In den Kaffeehäusern Londons entsteht ein neues Publikum – und mit Robinson Crusoe und Gullivers Reisen die Gattung, die die Literatur bis heute beherrscht: der Roman.',
  ],
  subtopics: [UEBERBLICK, DEFOE_SWIFT],
};
