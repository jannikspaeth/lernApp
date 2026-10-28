import type { CountryHistory, Epoch, HistEvent, Subtopic } from '../laender/types';
import { GR_BEGRIFFE } from './gr-begriffe';
import { GR_IDEEN } from './gr-ideen';
import { DE_GRUNDGESETZ } from './de-grundgesetz';
import { DE_ORGANE } from './de-organe';
import { DE_WAHLEN } from './de-wahlen';
import { DE_RECHT } from './de-recht';
import { BR_ANFAENGE } from './br-anfaenge';
import { BR_WANDEL } from './br-wandel';
import { BR_DDR } from './br-ddr';
import { BR_GEGENWART } from './br-gegenwart';
import { EU_GESCHICHTE } from './eu-geschichte';
import { EU_INSTITUTIONEN } from './eu-institutionen';
import { EU_POLITIK } from './eu-politik';
import { IN_ORGANISATIONEN } from './in-organisationen';
import { IN_KONFLIKTE } from './in-konflikte';
import { IN_GLOBAL } from './in-global';
import { SY_DEMOKRATIEN } from './sy-demokratien';
import { SY_AUTOKRATIEN } from './sy-autokratien';

// Politik: areas (epochs: Grundlagen, Deutschland, Bundesrepublik, Europa, Internationales, Systeme, Gesellschaft)
// → topics (events) → chapters (subtopics), reusing the history types. Progress is stored like the countries' under
// `land.pol.<topic>.<chapter>.<level>.<n>`, so topic and chapter ids must stay stable.
export const POL_CODE = 'POL';

const RAW: CountryHistory = {
  code: POL_CODE,
  epochs: [
    {
      id: 'grundlagen',
      name: 'Grundlagen der Politik',
      period: 'Staat, Demokratie und politische Ideen',
      events: [GR_BEGRIFFE, GR_IDEEN],
    },
    {
      id: 'deutschland',
      name: 'Das politische System Deutschlands',
      period: 'Grundgesetz, Verfassungsorgane, Wahlen und Recht',
      events: [DE_GRUNDGESETZ, DE_ORGANE, DE_WAHLEN, DE_RECHT],
    },
    {
      id: 'bundesrepublik',
      name: 'Politische Geschichte der Bundesrepublik',
      period: 'Von der Besatzung bis heute',
      events: [BR_ANFAENGE, BR_WANDEL, BR_DDR, BR_GEGENWART],
    },
    {
      id: 'europa',
      name: 'Europäische Union',
      period: 'Geschichte, Institutionen und Europa heute',
      events: [EU_GESCHICHTE, EU_INSTITUTIONEN, EU_POLITIK],
    },
    {
      id: 'international',
      name: 'Internationale Politik',
      period: 'Organisationen, Konflikte und globale Herausforderungen',
      events: [IN_ORGANISATIONEN, IN_KONFLIKTE, IN_GLOBAL],
    },
    {
      id: 'systeme',
      name: 'Politische Systeme der Welt',
      period: 'Demokratien und Autokratien im Vergleich',
      events: [SY_DEMOKRATIEN, SY_AUTOKRATIEN],
    },
  ],
};

export function findEpoche(id: string): { land: Epoch; event: HistEvent; next?: HistEvent; prev?: HistEvent } | null {
  const all = POLITIK.epochs.flatMap(land => land.events.map(event => ({ land, event })));
  const i = all.findIndex(x => x.event.id === id);
  return i < 0 ? null : { ...all[i], next: all[i + 1]?.event, prev: all[i - 1]?.event };
}

export function findKapitel(epocheId: string, subId: string): { land: Epoch; event: HistEvent; sub: Subtopic; next?: Subtopic; prev?: Subtopic } | null {
  const f = findEpoche(epocheId);
  const subs = f?.event.subtopics;
  if (!f || !subs) return null;
  const i = subs.findIndex(s => s.id === subId);
  return i < 0 ? null : { land: f.land, event: f.event, sub: subs[i], next: subs[i + 1], prev: subs[i - 1] };
}

// A picture per area and per topic for the tiles.
const COVERS: Record<string, string> = {
  grundlagen: 'perikles', 'gr-begriffe': 'montesquieu', 'gr-ideen': 'hambacher-fest',
  deutschland: 'reichstag', 'de-grundgesetz': 'grundgesetz-glaswand', 'de-organe': 'reichstag-kuppel', 'de-wahlen': 'wahlurne', 'de-recht': 'bundesgerichtshof',
  bundesrepublik: 'brandt', 'br-anfaenge': 'adenauer', 'br-wandel': 'kohl-mitterrand', 'br-ddr': 'mauerfall', 'br-gegenwart': 'merkel',
  europa: 'eu-flaggen', 'eu-geschichte': 'schuman', 'eu-institutionen': 'berlaymont', 'eu-politik': 'schengen-denkmal',
  international: 'uno-hauptquartier', 'in-organisationen': 'sicherheitsrat', 'in-konflikte': 'reagan-brandenburger-tor', 'in-global': 'containerschiff',
  systeme: 'us-kapitol', 'sy-demokratien': 'westminster', 'sy-autokratien': 'kreml',
};

export const POLITIK: CountryHistory = {
  ...RAW,
  epochs: RAW.epochs.map(g => ({
    ...g,
    cover: COVERS[g.id],
    events: g.events.map(ev => ({ ...ev, cover: COVERS[ev.id] })),
  })),
};

export const findBereich = (id: string) => POLITIK.epochs.find(g => g.id === id);
