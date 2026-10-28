import type { HistEvent } from '../../laender/types';
import { MARKTWIRTSCHAFT } from './marktwirtschaft';
import { STEUERN_HAUSHALT } from './steuern-haushalt';
import { GELD_INFLATION } from './geld-inflation';
import { ARBEIT_GEWERKSCHAFTEN } from './arbeit-gewerkschaften';

export const GE_WIRTSCHAFT: HistEvent = {
  id: 'ge-wirtschaft',
  title: 'Wirtschaftspolitik',
  date: 'Marktwirtschaft, Steuern, Geld, Arbeit',
  text: [
    'Wie Wirtschaft und Politik zusammenhängen: die Soziale Marktwirtschaft, Steuern, Haushalt und Schuldenbremse, Geld, Inflation und die Europäische Zentralbank sowie Gewerkschaften, Streiks und Mindestlohn.',
  ],
  subtopics: [MARKTWIRTSCHAFT, STEUERN_HAUSHALT, GELD_INFLATION, ARBEIT_GEWERKSCHAFTEN],
};
