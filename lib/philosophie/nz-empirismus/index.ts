import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { HOBBES } from './hobbes';
import { LOCKE } from './locke';
import { BERKELEY } from './berkeley';
import { HUME } from './hume';

export const NZ_EMPIRISMUS: HistEvent = {
  id: 'nz-empirismus',
  title: 'Empirismus und Gesellschaftsvertrag',
  date: '17.–18. Jh.',
  text: [
    'Alles Wissen kommt aus der Erfahrung: Die britischen Denker Hobbes, Locke, Berkeley und Hume fragen, wie weit unser Erkennen reicht – und begründen den Staat durch einen Vertrag freier Menschen.',
  ],
  subtopics: [UEBERBLICK, HOBBES, LOCKE, BERKELEY, HUME],
};
