import type { HistEvent } from '../../laender/types';
import { BINNENMARKT } from './binnenmarkt';
import { SCHENGEN_MIGRATION } from './schengen-migration';
import { KRISEN } from './krisen';
import { BREXIT } from './brexit';
import { AUSSENPOLITIK } from './aussenpolitik';

export const EU_POLITIK: HistEvent = {
  id: 'eu-politik',
  title: 'Europa heute',
  date: 'Binnenmarkt, Krisen, Brexit',
  text: [
    'Was die EU im Alltag bedeutet und womit sie ringt: Binnenmarkt und offene Grenzen, Migration, Euro-, Corona- und Energiekrise, der Austritt Großbritanniens und die Rolle Europas in der Welt.',
  ],
  subtopics: [BINNENMARKT, SCHENGEN_MIGRATION, KRISEN, BREXIT, AUSSENPOLITIK],
};
