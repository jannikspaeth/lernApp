import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { CARAVAGGIO } from './caravaggio';
import { RUBENS } from './rubens';
import { REMBRANDT } from './rembrandt';
import { VERMEER } from './vermeer';
import { VELAZQUEZ } from './velazquez';
import { BERNINI } from './bernini';

export const BAROCK: HistEvent = {
  id: 'barock',
  title: 'Barock',
  date: 'um 1600–1750',
  text: [
    'Pracht, Bewegung und starke Gefühle: Der Barock begeisterte Kirche, Fürsten und Bürger – vom römischen Marmor Berninis über Rubens’ Fülle bis zu Rembrandts Licht und Vermeers stiller Stube.',
  ],
  subtopics: [UEBERBLICK, CARAVAGGIO, RUBENS, REMBRANDT, VERMEER, VELAZQUEZ, BERNINI],
};
