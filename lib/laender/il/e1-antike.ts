import type { Epoch } from '../types';
import { KOENIGREICHE } from './e1-koenigreiche-sub';
import { ROM } from './e1-rom-sub';
import { ZIONISMUS } from './e1-zionismus-sub';
import { MANDAT } from './e1-mandat-sub';

export const E1: Epoch = {
  id: 'antike',
  name: 'Antike und Diaspora',
  period: 'ca. 1200 v. Chr. – 1947',
  events: [
    {
      id: 'antikes-israel',
      title: 'Das antike Israel',
      date: 'ca. 1200 v. Chr. – 1800',
      text: [
        'Von den Königreichen Israel und Juda über das Babylonische Exil und die römische Zerstörung Jerusalems bis zur jahrhundertelangen Diaspora: Die Geschichte des jüdischen Volkes und seiner Verbindung zum Land Israel.',
      ],
      subtopics: [KOENIGREICHE, ROM],
    },
    {
      id: 'zionismus',
      title: 'Zionismus und britisches Mandat',
      date: '1800–1947',
      text: [
        'Antisemitismus und der Wunsch nach Sicherheit brachten die zionistische Bewegung hervor. Im britischen Mandat Palästina wuchs der Konflikt zwischen jüdischer und arabischer Bevölkerung.',
      ],
      subtopics: [ZIONISMUS, MANDAT],
    },
  ],
};
