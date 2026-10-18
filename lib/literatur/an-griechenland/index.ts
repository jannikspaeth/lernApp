import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HOMER_SAPPHO } from './homer-sappho';
import { TRAGIKER } from './tragiker';

export const AN_GRIECHENLAND: HistEvent = {
  id: 'an-griechenland',
  title: 'Das antike Griechenland',
  date: 'um 750 – 300 v. Chr.',
  text: [
    'Von Homers Epen über die Tragödie in Athen bis zur Komödie: Hier entstehen die Gattungen, aus denen die europäische Literatur bis heute lebt.',
  ],
  subtopics: [UEBERBLICK, HOMER_SAPPHO, TRAGIKER],
};
