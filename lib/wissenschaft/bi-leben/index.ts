import type { HistEvent } from '../../laender/types';
import { UEBERBLICK } from './ueberblick';
import { ZELLE } from './zelle';
import { MIKROBEN } from './mikroben';
import { GENETIK } from './genetik';
import { EVOLUTION } from './evolution';
import { OEKOLOGIE } from './oekologie';

export const BI_LEBEN: HistEvent = {
  id: 'bi-leben',
  title: 'Grundlagen des Lebens',
  date: 'vor 3,8 Mrd. Jahren – heute',
  text: [
    'Was ist Leben, und wie funktioniert es? Von der Zelle und den Mikroben über Mendels Erbsen und die Doppelhelix bis zu Darwins Evolutionstheorie und den Netzwerken der Ökosysteme.',
  ],
  subtopics: [UEBERBLICK, ZELLE, MIKROBEN, GENETIK, EVOLUTION, OEKOLOGIE],
};
