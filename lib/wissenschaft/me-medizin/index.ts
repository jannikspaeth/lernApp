import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ANATOMIE } from './anatomie';
import { SEUCHEN } from './seuchen';
import { ERREGER } from './erreger';
import { ANTIBIOTIKA } from './antibiotika';
import { MODERNE } from './moderne';

export const ME_MEDIZIN: HistEvent = {
  id: 'me-medizin',
  title: 'Geschichte der Medizin',
  date: 'um 3000 v. Chr. – heute',
  text: [
    'Von Hippokrates und Galen über Vesalius, Jenner, Pasteur und Koch bis zu Penicillin, Narkose, Transplantation und mRNA-Impfstoff: wie die Medizin lernte, Krankheiten zu verstehen und zu besiegen – und die großen Seuchen, die die Geschichte prägten.',
  ],
  subtopics: [UEBERBLICK, ANATOMIE, SEUCHEN, ERREGER, ANTIBIOTIKA, MODERNE],
};
