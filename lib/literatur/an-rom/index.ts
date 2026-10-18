import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { VERGIL_HORAZ } from './vergil-horaz';
import { OVID_CICERO } from './ovid-cicero';

export const AN_ROM: HistEvent = {
  id: 'an-rom',
  title: 'Das antike Rom',
  date: '240 v. Chr. – 200 n. Chr.',
  text: [
    'Die Römer übernehmen die griechischen Vorbilder und schaffen daraus eine eigene Literatur: Vergils Aeneis, Ovids Metamorphosen, Ciceros Reden.',
  ],
  subtopics: [UEBERBLICK, VERGIL_HORAZ, OVID_CICERO],
};
