import type { Epoch } from '../types';
import { KOLONIE } from './e1-kolonie-event';
import { UNABHAENGIGKEIT, REPUBLIK } from './e1-kaiserreich';

export const E1: Epoch = {
  id: 'kolonie',
  name: 'Kolonie und Kaiserreich',
  period: '1500–1930',
  events: [KOLONIE, UNABHAENGIGKEIT, REPUBLIK],
};
