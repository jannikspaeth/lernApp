import type { Card, Topic } from '../wissen/types';
import { CONTINENTS, COUNTRIES, countriesIn, type Country } from '../welt';
import { GROUP } from './cats';
import { cards, pairs, S } from './helpers';
import NEIGH from './neighbours.json';

const G = GROUP.laender;
const NB = NEIGH as Record<string, string[]>;
const byCode = new Map(COUNTRIES.map(c => [c.code, c]));
const name = (code: string) => byCode.get(code)?.name ?? code;

// Deterministic pick of n entries from a list, starting at an offset (no randomness in the build).
const take = <T,>(list: T[], start: number, n: number): T[] =>
  list.length === 0 ? [] : Array.from({ length: Math.min(n, list.length) }, (_, i) => list[(start + i) % list.length]);

// Capital → country, per continent.
export const reverseTopics: Topic[] = CONTINENTS.map(k => ({
  id: `umgekehrt-${k.id}`,
  name: k.name,
  icon: '',
  group: G,
  shuffle: true,
  cards: countriesIn(k.id).filter(c => c.capital && !c.capitalInfo).map((c): Card => ({
    id: `${S}.umgekehrt.${c.code}`,
    q: `Von welchem Land ist ${c.capital} die Hauptstadt?`,
    a: c.name,
  })),
}));

// Outline → country, per continent.
export const outlineTopics: Topic[] = CONTINENTS.map(k => ({
  id: `umriss-${k.id}`,
  name: k.name,
  icon: '',
  group: G,
  shuffle: true,
  cards: countriesIn(k.id).map((c): Card => ({
    id: `${S}.umriss.${c.code}`,
    q: 'Welches Land hat diese Umrissform?',
    img: `/umriss/${c.code.toLowerCase()}.svg`,
    a: c.name,
  })),
}));

// "Which of these countries borders X?" — answer: one real neighbour, wrong: countries of the
// neighbourhood that do not border X (two steps away, so the options are plausible).
export const neighbourTopics: Topic[] = CONTINENTS.map(k => ({
  id: `nachbarn-${k.id}`,
  name: k.name,
  icon: '',
  group: G,
  shuffle: true,
  cards: countriesIn(k.id).flatMap((c, i): Card[] => {
    const nb = NB[c.code] ?? [];
    if (nb.length === 0) return [];
    const second = [...new Set(nb.flatMap(n => NB[n] ?? []))].filter(x => x !== c.code && !nb.includes(x));
    const pool = second.length >= 3 ? second : [...second, ...countriesIn(k.id).map(x => x.code).filter(x => x !== c.code && !nb.includes(x) && !second.includes(x))];
    const wrong = take(pool, i, 3).map(name);
    if (wrong.length < 3) return [];
    return [{
      id: `${S}.nachbarn.${c.code}`,
      q: `Welches dieser Länder grenzt an ${c.name}?`,
      a: name(nb[i % nb.length]),
      wrong,
      info: `${c.name} grenzt an: ${nb.map(name).join(', ')}.`,
    }];
  }),
}));

// Landlocked countries.
const LANDLOCKED = 'AF AD AM AT AZ BY BT BO BW BF BI CF TD CZ SZ ET HU KZ KG LA LS LI LU MW ML MD MN NP NE MK PY RW SM RS SK SS CH TJ TM UG UZ VA ZM ZW'.split(' ');
const landlocked: Country[] = LANDLOCKED.map(c => byCode.get(c)).filter((c): c is Country => !!c);
const coastal = (k: string) => countriesIn(k as Country['continent']).filter(c => !LANDLOCKED.includes(c.code) && (NB[c.code] ?? []).length > 0);
const joinDe = (l: string[]) => (l.length < 2 ? l.join('') : `${l.slice(0, -1).join(', ')} und ${l[l.length - 1]}`);
export const landlockedTopic: Topic = {
  id: 'binnenstaaten',
  name: ['Landlocked countries', 'Binnenstaaten'],
  icon: '',
  group: G,
  shuffle: true,
  cards: landlocked.map((c, i): Card => {
    const nb = (NB[c.code] ?? []).slice(0, 3);
    const same = landlocked.filter(x => (NB[x.code] ?? []).slice(0, 3).join() === nb.join());
    const hint = same.length > 1 && c.capital ? ` (Hauptstadt mit „${c.capital[0]}“)` : '';
    const alike = (x: Country) => nb.every(n => (NB[x.code] ?? []).includes(n));
    return {
      id: `${S}.binnen.${c.code}`,
      q: `Welches Binnenland ohne Meerzugang grenzt an ${joinDe(nb.map(name))}${hint}?`,
      a: c.name,
      wrong: take(coastal(c.continent).filter(x => !alike(x)), i, 3).map(x => x.name),
      info: `${c.name} grenzt an: ${(NB[c.code] ?? []).map(name).join(', ')}.`,
    };
  }),
};

export const smallStates = cards('kleinstaaten', ['Microstates', 'Kleinstaaten und Mikronationen'], G, [
  ['Welcher Staat ist der kleinste der Welt?', 'Vatikanstadt', ['Monaco', 'San Marino', 'Liechtenstein'], 'Rund 0,44 km² – ein Staat in der Stadt Rom.'],
  ['Welcher Staat ist der zweitkleinste der Welt?', 'Monaco', ['Nauru', 'Tuvalu', 'San Marino'], 'Rund 2 km² an der Côte d’Azur.'],
  ['Welcher Inselstaat im Pazifik ist mit rund 21 km² die kleinste Republik der Welt?', 'Nauru', ['Tuvalu', 'Palau', 'Kiribati']],
  ['Welcher Zwergstaat liegt in den Pyrenäen zwischen Frankreich und Spanien?', 'Andorra', ['Monaco', 'Liechtenstein', 'Malta']],
  ['Welcher Zwergstaat liegt zwischen der Schweiz und Österreich?', 'Liechtenstein', ['Luxemburg', 'Andorra', 'San Marino']],
  ['Welcher Zwergstaat ist komplett von Italien umgeben (neben dem Vatikan)?', 'San Marino', ['Monaco', 'Malta', 'Andorra']],
  ['Welcher Inselstaat im Mittelmeer hat Valletta als Hauptstadt?', 'Malta', ['Zypern', 'Monaco', 'Kreta']],
  ['Welches Fürstentum liegt an der Côte d’Azur?', 'Monaco', ['Andorra', 'Liechtenstein', 'Luxemburg']],
  ['Welches Großherzogtum liegt zwischen Belgien, Deutschland und Frankreich?', 'Luxemburg', ['Liechtenstein', 'Monaco', 'Andorra']],
  ['Welcher Inselstaat im Pazifik besteht aus neun Atollen und hat rund 11.000 Einwohner?', 'Tuvalu', ['Nauru', 'Palau', 'Samoa']],
  ['Welcher Inselstaat im Indischen Ozean besteht aus rund 1.200 Koralleninseln?', 'Malediven', ['Seychellen', 'Komoren', 'Mauritius']],
  ['Welcher Stadtstaat in Südostasien ist nur etwa 735 km² groß?', 'Singapur', ['Brunei', 'Macau', 'Hongkong']],
  ['Welcher Staat auf einer Insel in der Karibik teilt sich St. Kitts mit Nevis?', 'St. Kitts und Nevis', ['Antigua und Barbuda', 'Grenada', 'St. Lucia'], 'Der kleinste Staat Amerikas.'],
  ['Wie heißt die „Mikronation“ auf einer ehemaligen Flakplattform in der Nordsee?', 'Sealand', ['Atlantis', 'Hutt River', 'Molossien'], 'Seit 1967 von der Familie Bates als Fürstentum beansprucht, aber nicht anerkannt.'],
  ['Welche „Mikronation“ rief 1970 Leonard Casley in Westaustralien aus?', 'Hutt River', ['Sealand', 'Seborga', 'Christiania'], 'Das Fürstentum Hutt River bestand bis 2020.'],
  ['Welches Dorf in Ligurien beansprucht seit 1963 den Status eines unabhängigen Fürstentums?', 'Seborga', ['Sealand', 'Rosenau', 'Molossien'], 'Nicht anerkannt.'],
  ['Welcher Freistaat in Kopenhagen wurde 1971 von Hausbesetzern ausgerufen?', 'Christiania', ['Sealand', 'Seborga', 'Utopia'], 'Ein alternatives Wohnviertel auf einem ehemaligen Militärgelände.'],
  ['Welche beiden Länder sind „doppelte Binnenstaaten“ (nur von Binnenstaaten umgeben)?', 'Liechtenstein und Usbekistan', ['Luxemburg und Andorra', 'Bolivien und Paraguay', 'Österreich und die Schweiz'], 'Man muss zwei Grenzen überqueren, um das Meer zu erreichen.'],
  ['Welcher Staat ist der bevölkerungsärmste der Welt?', 'Vatikanstadt', ['Nauru', 'Tuvalu', 'Palau'], 'Rund 800 Einwohner.'],
]);

export const formerNames = pairs('ehemalige-namen', ['Former country names', 'Ehemalige Ländernamen'], G, k => `Wie heißt das Land heute, das früher „${k}“ hieß?`, [
  ['Siam', 'Thailand', 'Bis 1939 und nochmals 1945–49.'],
  ['Ceylon', 'Sri Lanka', 'Seit 1972.'],
  ['Zaire', 'Demokratische Republik Kongo', 'Von 1971 bis 1997.'],
  ['Birma', 'Myanmar', 'Seit 1989 offiziell.'],
  ['Persien', 'Iran', 'Seit 1935 international.'],
  ['Abessinien', 'Äthiopien'],
  ['Rhodesien (Südrhodesien)', 'Simbabwe', 'Unabhängig seit 1980.'],
  ['Goldküste', 'Ghana', 'Erste unabhängige Kolonie Schwarzafrikas 1957.'],
  ['Obervolta', 'Burkina Faso', 'Seit 1984.'],
  ['Dahomey', 'Benin', 'Seit 1975.'],
  ['Betschuanaland', 'Botswana', 'Unabhängig 1966.'],
  ['Nyassaland', 'Malawi', 'Unabhängig 1964.'],
  ['Basutoland', 'Lesotho', 'Unabhängig 1966.'],
  ['Swasiland', 'Eswatini', 'Seit 2018.'],
  ['Tanganjika und Sansibar', 'Tansania', 'Vereinigt 1964.'],
  ['Kampuchea', 'Kambodscha', 'Unter den Roten Khmer.'],
  ['Formosa', 'Taiwan'],
  ['Niederländisch-Indien', 'Indonesien', 'Unabhängig 1949.'],
  ['Britisch-Honduras', 'Belize', 'Seit 1973.'],
  ['Niederländisch-Guayana', 'Suriname', 'Unabhängig 1975.'],
  ['Tschechoslowakei', 'Tschechien und Slowakei', 'Geteilt zum 1. Januar 1993.'],
  ['Jugoslawien', 'Serbien, Kroatien, Slowenien, Bosnien und Herzegowina, Nordmazedonien, Montenegro, Kosovo', 'Zerfall ab 1991.'],
  ['Ostpakistan', 'Bangladesch', 'Unabhängig seit 1971.'],
  ['Neue Hebriden', 'Vanuatu', 'Unabhängig 1980.'],
  ['Gilbertinseln', 'Kiribati', 'Seit 1979.'],
  ['Mazedonien (bis 2019)', 'Nordmazedonien', 'Umbenennung nach dem Prespa-Abkommen.'],
  ['Belgisch-Kongo', 'Demokratische Republik Kongo', 'Unabhängig 1960.'],
  ['Französisch-Sudan', 'Mali', 'Unabhängig 1960.'],
]);
