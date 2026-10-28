import type { HistEvent } from '../../laender/types';
import { GLOBALISIERUNG } from './globalisierung';
import { KLIMAPOLITIK } from './klimapolitik';
import { ENTWICKLUNG } from './entwicklung';
import { VOELKERRECHT } from './voelkerrecht';
import { FLUCHT } from './flucht';

export const IN_GLOBAL: HistEvent = {
  id: 'in-global',
  title: 'Globale Herausforderungen',
  date: 'Welthandel, Klima, Armut, Recht, Flucht',
  text: [
    'Probleme, die kein Land allein lösen kann: die Globalisierung mit ihren Gewinnern und Verlierern, der Klimawandel, Armut und Hunger, das Völkerrecht mit seinen Gerichten und die weltweite Flucht und Vertreibung.',
  ],
  subtopics: [GLOBALISIERUNG, KLIMAPOLITIK, ENTWICKLUNG, VOELKERRECHT, FLUCHT],
};
