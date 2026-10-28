import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { LIBERALISMUS } from './liberalismus';
import { KONSERVATISMUS } from './konservatismus';
import { SOZIALISMUS } from './sozialismus';
import { NATIONALISMUS } from './nationalismus';
import { OEKOLOGIE } from './oekologie';
import { FEMINISMUS } from './feminismus';
import { EXTREMISMUS } from './extremismus';

export const GR_IDEEN: HistEvent = {
  id: 'gr-ideen',
  title: 'Politische Ideen und Strömungen',
  date: '17. Jahrhundert – heute',
  text: [
    'Woher kommen „links“ und „rechts“, und was wollen Liberale, Konservative und Sozialisten? Die großen politischen Strömungen von der Aufklärung bis heute – und die Bewegungen, die die Politik der Gegenwart prägen: Nationalismus, Ökologie, Feminismus, Populismus und Extremismus.',
  ],
  subtopics: [UEBERBLICK, LIBERALISMUS, KONSERVATISMUS, SOZIALISMUS, NATIONALISMUS, OEKOLOGIE, FEMINISMUS, EXTREMISMUS],
};
