import type { HistEvent } from '../../laender/types';
import { WAHLRECHT } from './wahlrecht';
import { WAHLSYSTEM } from './wahlsystem';
import { PARTEIEN } from './parteien';
import { UNION } from './union';
import { SPD } from './spd';
import { GRUENE_FDP } from './gruene-fdp';
import { LINKE_AFD_BSW } from './linke-afd-bsw';
import { BETEILIGUNG } from './beteiligung';

export const DE_WAHLEN: HistEvent = {
  id: 'de-wahlen',
  title: 'Wahlen und Parteien',
  date: 'Wahlrecht, Parteien, Beteiligung',
  text: [
    'Wie gewählt wird, warum die Zweitstimme zählt und was die Fünfprozenthürde bewirkt – dazu die Geschichte und die Positionen der Parteien von der Union bis zum BSW und die vielen Wege, sich zwischen den Wahlen politisch einzumischen.',
  ],
  subtopics: [WAHLRECHT, WAHLSYSTEM, PARTEIEN, UNION, SPD, GRUENE_FDP, LINKE_AFD_BSW, BETEILIGUNG],
};
