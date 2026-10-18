// Typed quizzes in the style of Jetpunk: a title, a timer, one input field; every correct answer
// fills its cell, in any order. Built from the same data as the multiple-choice topics.
import '../wissen/geografie'; // registers the PAIR_SETS
import { CATS } from './cats';
import { PAIR_SETS } from './helpers';
import { CONTINENTS, COUNTRIES, countriesIn, countryNames, flagUrl, type Country } from '../welt';
import NEIGH from './neighbours.json';
import { coatsImages, satellites } from './bilder';
import { POINTS, RIVER_NAMES, SHAPE_NAMES } from './coords';

export interface QuizItem {
  prompt?: string; // grid quiz: what is shown in front of the cell
  img?: string; // grid quiz: picture instead of text (flag, outline, coat of arms)
  answer: string; // shown when solved or revealed
  accepts: string[]; // accepted spellings, in addition to `answer`
  group?: string; // list quiz: heading the cell belongs to
  code?: string; // ISO code when the answer is a country (preview flags)
  shape?: string; // region in the theme map (public/maps/admin-<cc>.json)
  river?: string[]; // rivers in public/maps/rivers.json
  lake?: string; // lake in public/maps/lakes.json
  pt?: [number, number]; // point [lon, lat]
}

export interface ThemeMap {
  layer?: string; // admin-<cc>: states/regions of one country
  projection?: 'albersUsa' | 'mercator';
}

export interface GeoQuiz {
  id: string;
  cat: string; // id of the category (cats.ts)
  section: string; // heading inside the category
  title: string;
  blurb: string;
  seconds: number;
  mode: 'list' | 'grid' | 'tiles'; // tiles: pictures in a grid, the answer under each
  items: QuizItem[];
  art?: string[]; // preview pictures for the tile (flags, outlines, arms)
  map?: { region: 'welt' | Country['continent']; focus?: string }; // countries are coloured on a map as they are found
  theme?: ThemeMap; // regions, points, rivers or lakes drawn on a map
}

// Typing aids for long answers: "Italien (bei Neapel)" is accepted as "Italien", "A und B" as "A" and "B"
// only when the answer is a list of equal parts.
function accepts(answer: string, extra: string[] = []): string[] {
  const out = new Set<string>(extra);
  const noParen = answer.replace(/\s*\([^)]*\)/g, '').trim();
  if (noParen && noParen !== answer) out.add(noParen);
  const inParen = [...answer.matchAll(/\(([^)]*)\)/g)].map(m => m[1].trim());
  for (const p of inParen) if (p.length > 2 && !/\d|km|m²/.test(p)) out.add(p);
  out.add(noParen.replace(/^(Der|Die|Das)\s+/, ''));
  out.add(noParen.replace(/\s+\/.*$/, ''));
  if (/ und /.test(noParen) && !/^(St\.|Saint)/.test(noParen) && noParen.split(' und ').length <= 3 && noParen.length < 50) {
    for (const part of noParen.split(' und ')) out.add(part.trim());
  }
  out.delete(answer);
  return [...out].filter(Boolean);
}

const item = (answer: string, extra: Partial<QuizItem> = {}, alt: string[] = []): QuizItem => ({ answer, accepts: accepts(answer, alt), ...extra });
const secs = (n: number, per = 15, min = 90) => Math.max(min, Math.ceil((n * per) / 30) * 30);
const catOf = (group: [string, string]) => CATS.find(c => c.group[1] === group[1])!.id;

const quizzes: GeoQuiz[] = [];
const add = (q: GeoQuiz) => { if (q.items.length >= 3) quizzes.push(q); };

// ── Länder & Hauptstädte ──
const countryItem = (c: Country, extra: Partial<QuizItem> = {}) => ({ answer: c.name, accepts: countryNames(c).filter(n => n !== c.name), code: c.code, ...extra });

add({
  id: 'laender-welt', cat: 'laender', section: 'Länder', title: 'Alle Länder der Erde', blurb: 'Nenne alle 197 Staaten – in beliebiger Reihenfolge.',
  seconds: 1500, mode: 'list',
  items: CONTINENTS.flatMap(k => countriesIn(k.id).map(c => countryItem(c, { group: k.name[1] }))),
});
for (const k of CONTINENTS) {
  const list = countriesIn(k.id);
  add({ id: `laender-${k.id}`, cat: 'laender', section: 'Länder', title: `Länder: ${k.name[1]}`, blurb: `Nenne alle ${list.length} Länder.`, seconds: secs(list.length, 14), mode: 'list', items: list.map(c => countryItem(c)) });
  add({
    id: `hauptstaedte-${k.id}`, cat: 'laender', section: 'Hauptstädte', title: `Hauptstädte: ${k.name[1]}`, blurb: 'Tippe zu jedem Land die Hauptstadt.',
    seconds: secs(list.length, 22), mode: 'grid',
    items: list.filter(c => c.capital).map(c => item(c.capital as string, { prompt: c.name, code: c.code })),
  });
  add({
    id: `land-zur-hauptstadt-${k.id}`, cat: 'laender', section: 'Hauptstädte', title: `Land zur Hauptstadt: ${k.name[1]}`, blurb: 'Zu welchem Land gehört die Hauptstadt?',
    seconds: secs(list.length, 22), mode: 'grid',
    items: list.filter(c => c.capital && !c.capitalInfo).map(c => ({ ...countryItem(c), prompt: c.capital as string })),
  });
  add({
    id: `umrisse-${k.id}`, cat: 'laender', section: 'Umrisse', title: `Umrissformen: ${k.name[1]}`, blurb: 'Erkenne das Land an seiner Form.',
    seconds: secs(list.length, 25), mode: 'tiles',
    items: list.map(c => countryItem(c, { img: `/umriss/${c.code.toLowerCase()}.svg` })),
  });
  add({
    id: `flaggen-${k.id}`, cat: 'flaggen', section: 'Flaggen', title: `Flaggen: ${k.name[1]}`, blurb: 'Zu welchem Land gehört die Flagge?',
    seconds: secs(list.length, 20), mode: 'tiles',
    items: list.map(c => countryItem(c, { img: flagUrl(c.code) })),
  });
}

const NB = NEIGH as Record<string, string[]>;
const regionFor = (cs: Country[]): 'welt' | Country['continent'] => (cs.every(x => x.continent === cs[0].continent) ? cs[0].continent : 'welt');
const byCode = new Map(COUNTRIES.map(c => [c.code, c]));
const NEIGHBOUR_PICKS = 'DE FR RU CN BR IN TR AT PL IT UA CD SA IR AR ES ZA NG KZ US CH CZ HU RS SD ET TZ ZM ID CO PE DZ'.split(' ');
for (const code of NEIGHBOUR_PICKS) {
  const c = byCode.get(code);
  const nb = (NB[code] ?? []).map(x => byCode.get(x)).filter((x): x is Country => !!x);
  if (!c || nb.length < 3) continue;
  add({ id: `nachbarn-${code.toLowerCase()}`, cat: 'laender', section: 'Nachbarländer', title: `Nachbarländer von ${c.name}`, blurb: `${nb.length} Länder grenzen an ${c.name}.`, seconds: secs(nb.length, 25, 60), mode: 'list', items: nb.map(x => countryItem(x)), art: [flagUrl(c.code)], map: { region: regionFor([c, ...nb]), focus: c.code } });
}

const LANDLOCKED = 'AF AD AM AT AZ BY BT BO BW BF BI CF TD CZ SZ ET HU KZ KG LA LS LI LU MW ML MD MN NP NE MK PY RW SM RS SK SS CH TJ TM UG UZ VA ZM ZW'.split(' ');
add({
  id: 'binnenstaaten', cat: 'laender', section: 'Besondere Länder', title: 'Binnenstaaten', blurb: 'Länder ohne Zugang zum Meer.', seconds: 600, mode: 'list',
  items: LANDLOCKED.map(x => byCode.get(x)).filter((c): c is Country => !!c).map(c => countryItem(c, { group: CONTINENTS.find(k => k.id === c.continent)!.name[1] })),
});
const small = [...COUNTRIES].sort((a, b) => a.area - b.area).slice(0, 25);
add({ id: 'kleinste-laender', cat: 'laender', section: 'Besondere Länder', title: 'Die 25 kleinsten Länder', blurb: 'Nach Fläche, vom Vatikan aufwärts.', seconds: 420, mode: 'list', items: small.map(c => countryItem(c)) });
const big = [...COUNTRIES].sort((a, b) => b.area - a.area).slice(0, 20);
add({ id: 'groesste-laender', cat: 'rekorde', section: 'Größe', title: 'Die 20 größten Länder', blurb: 'Nach Fläche, von Russland abwärts.', seconds: 420, mode: 'list', items: big.map(c => countryItem(c)) });

const set = (codes: string, id: string, cat: string, section: string, title: string, blurb: string, seconds: number) =>
  add({ id, cat, section, title, blurb, seconds, mode: 'list', items: codes.split(' ').map(x => byCode.get(x)).filter((c): c is Country => !!c).map(c => countryItem(c)) });
set('AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE', 'eu-mitglieder', 'rekorde', 'Organisationen', 'EU-Mitgliedstaaten', 'Alle 27 Mitglieder der Europäischen Union.', 480);
set('US JP DE GB FR IT CA', 'g7', 'rekorde', 'Organisationen', 'Die G7-Staaten', 'Die sieben großen westlichen Industriestaaten.', 180);
set('AL BE BG CA HR CZ DK EE FI FR DE GR HU IS IT LV LT LU ME NL MK NO PL PT RO SK SI ES SE TR GB US', 'nato', 'rekorde', 'Organisationen', 'NATO-Mitglieder', 'Alle 32 Mitgliedstaaten.', 600);
set('US RU CN FR GB', 'sicherheitsrat', 'rekorde', 'Organisationen', 'Ständige Mitglieder im UN-Sicherheitsrat', 'Die fünf Staaten mit Vetorecht.', 120);
set('DZ AO CG GQ GA IR IQ KW LY NG SA AE VE', 'opec', 'rekorde', 'Organisationen', 'OPEC-Mitglieder', 'Die Mitglieder der Organisation Erdöl exportierender Länder.', 300);
set('DK FI IS NO SE', 'nordische-laender', 'rekorde', 'Organisationen', 'Die nordischen Länder', 'Skandinavien und seine Nachbarn im Norden.', 120);
set('EE LV LT', 'baltikum', 'rekorde', 'Organisationen', 'Die baltischen Staaten', 'Die drei Staaten am Baltikum.', 90);
set('AR BO BR CL CO EC GY PY PE SR UY VE', 'suedamerika-laender', 'rekorde', 'Organisationen', 'Staaten Südamerikas', 'Alle zwölf unabhängigen Staaten.', 300);
set('GT BZ HN SV NI CR PA', 'mittelamerika', 'rekorde', 'Organisationen', 'Die Länder Mittelamerikas', 'Von Guatemala bis Panama.', 150);
set('KZ KG TJ TM UZ', 'zentralasien', 'rekorde', 'Organisationen', 'Die Länder Zentralasiens', 'Die fünf „-stan“-Staaten.', 150);

// ── Aus den Paaren: Gitter-Quizze ──
for (const ps of PAIR_SETS) {
  const items = ps.rows.map(([k, a]) => item(a, { prompt: ps.question(k) }));
  add({ id: `p-${ps.id}`, cat: catOf(ps.group), section: ps.group[1] === 'Weitere Regionen' ? 'Hauptstädte' : 'Zuordnen', title: ps.name[1], blurb: `${items.length} Fragen – tippe die Antworten in beliebiger Reihenfolge.`, seconds: secs(items.length, 20, 120), mode: 'grid', items });
}

// ── Listen mit eigenen Namen ──
const lst = (id: string, cat: string, section: string, title: string, blurb: string, names: (string | [string, ...string[]])[], seconds?: number) =>
  add({ id, cat, section, title, blurb, seconds: seconds ?? secs(names.length, 15), mode: 'list', items: names.map(n => (typeof n === 'string' ? item(n) : item(n[0], {}, n.slice(1)))) });

lst('bundeslaender', 'dach', 'Auflistungen', 'Die 16 Bundesländer', 'Nenne alle deutschen Bundesländer.', ['Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen', 'Mecklenburg-Vorpommern', 'Niedersachsen', 'Nordrhein-Westfalen', ['Rheinland-Pfalz', 'Rheinlandpfalz'], 'Saarland', 'Sachsen', 'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen']);
lst('oesterreich-bundeslaender', 'dach', 'Auflistungen', 'Die 9 Bundesländer Österreichs', 'Nenne alle österreichischen Bundesländer.', ['Burgenland', 'Kärnten', 'Niederösterreich', 'Oberösterreich', 'Salzburg', 'Steiermark', 'Tirol', 'Vorarlberg', 'Wien']);
lst('kantone', 'dach', 'Auflistungen', 'Die 26 Schweizer Kantone', 'Nenne alle Kantone.', ['Zürich', 'Bern', 'Luzern', 'Uri', 'Schwyz', 'Obwalden', 'Nidwalden', 'Glarus', 'Zug', ['Freiburg', 'Fribourg'], 'Solothurn', 'Basel-Stadt', 'Basel-Landschaft', 'Schaffhausen', 'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'St. Gallen', 'Graubünden', 'Aargau', 'Thurgau', ['Tessin', 'Ticino'], ['Waadt', 'Vaud'], ['Wallis', 'Valais'], ['Neuenburg', 'Neuchâtel'], ['Genf', 'Genève'], 'Jura'], 480);
lst('italien-regionen', 'dach', 'Auflistungen', 'Die 20 Regionen Italiens', 'Nenne alle italienischen Regionen.', [['Aostatal', 'Valle d’Aosta'], 'Piemont', 'Lombardei', ['Trentino-Südtirol', 'Südtirol', 'Trentino'], 'Venetien', ['Friaul-Julisch Venetien', 'Friaul'], 'Ligurien', 'Emilia-Romagna', 'Toskana', 'Umbrien', 'Marken', 'Latium', 'Abruzzen', 'Molise', 'Kampanien', 'Apulien', 'Basilikata', 'Kalabrien', 'Sizilien', 'Sardinien'], 420);
lst('us-staaten', 'regionen', 'Auflistungen', 'Die 50 US-Bundesstaaten', 'Nenne alle Bundesstaaten der USA.', ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Kalifornien', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'], 900);
lst('kanada-provinzen', 'regionen', 'Auflistungen', 'Provinzen und Territorien Kanadas', 'Nenne alle 13.', ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', ['Neufundland und Labrador', 'Neufundland'], 'Nova Scotia', 'Ontario', 'Prince Edward Island', ['Québec', 'Quebec'], 'Saskatchewan', 'Yukon', ['Nordwest-Territorien', 'Northwest Territories'], 'Nunavut'], 300);
lst('australien-staaten', 'regionen', 'Auflistungen', 'Staaten und Territorien Australiens', 'Nenne alle acht.', ['New South Wales', 'Victoria', 'Queensland', 'South Australia', 'Western Australia', 'Tasmanien', 'Northern Territory', ['Australian Capital Territory', 'ACT']], 240);
lst('frankreich-regionen', 'regionen', 'Auflistungen', 'Die 13 Regionen Frankreichs', 'Nenne alle Regionen des Festlands.', [['Auvergne-Rhône-Alpes', 'Auvergne Rhone Alpes'], ['Bourgogne-Franche-Comté', 'Burgund'], ['Bretagne'], ['Centre-Val de Loire', 'Centre'], 'Korsika', 'Grand Est', 'Hauts-de-France', ['Île-de-France', 'Ile de France'], 'Normandie', 'Nouvelle-Aquitaine', ['Okzitanien', 'Occitanie'], 'Pays de la Loire', ['Provence-Alpes-Côte d’Azur', 'Provence']], 420);
lst('spanien-regionen', 'regionen', 'Auflistungen', 'Autonome Gemeinschaften Spaniens', 'Nenne die 17 Gemeinschaften.', ['Andalusien', 'Aragonien', 'Asturien', 'Balearen', 'Baskenland', 'Kanarische Inseln', 'Kantabrien', 'Kastilien-La Mancha', 'Kastilien und León', 'Katalonien', 'Extremadura', 'Galicien', 'La Rioja', 'Madrid', 'Murcia', 'Navarra', 'Valencia'], 480);
lst('brasilien-staaten', 'regionen', 'Auflistungen', 'Bundesstaaten Brasiliens (Auswahl)', 'Nenne diese 14 Staaten.', ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Amazonas', 'Pará', 'Ceará', 'Pernambuco', 'Paraná', 'Rio Grande do Sul', 'Santa Catarina', 'Goiás', 'Mato Grosso', 'Distrito Federal'], 420);
lst('achttausender', 'physisch', 'Berge', 'Die 14 Achttausender', 'Nenne alle Berge über 8.000 m.', [['Mount Everest', 'Everest'], 'K2', ['Kangchendzönga', 'Kangchenjunga'], 'Lhotse', 'Makalu', 'Cho Oyu', 'Dhaulagiri', 'Manaslu', 'Nanga Parbat', 'Annapurna', 'Gasherbrum I', 'Broad Peak', 'Gasherbrum II', 'Shishapangma'], 600);
lst('hoechste-berge-der-welt', 'physisch', 'Berge', 'Höchste Berge der Kontinente', 'Die „Seven Summits“.', [['Mount Everest', 'Everest'], 'Aconcagua', 'Denali', ['Kilimandscharo', 'Kilimanjaro'], 'Elbrus', 'Mount Vinson', ['Puncak Jaya', 'Carstensz-Pyramide']], 300);
lst('laengste-fluesse', 'physisch', 'Flüsse', 'Die längsten Flüsse der Erde', 'Zehn Ströme.', ['Nil', 'Amazonas', 'Jangtse', 'Mississippi', 'Jenissei', 'Gelber Fluss', ['Ob', 'Irtysch'], 'Paraná', 'Kongo', 'Amur'], 300);
lst('fluesse-deutschland', 'physisch', 'Flüsse', 'Große Flüsse Deutschlands', 'Nenne zehn bedeutende Flüsse.', ['Rhein', 'Elbe', 'Donau', 'Main', 'Weser', 'Oder', 'Neckar', 'Mosel', 'Ems', 'Isar', 'Spree', 'Saale'], 300);
lst('grosse-seen', 'physisch', 'Seen', 'Die Großen Seen Nordamerikas', 'Alle fünf.', [['Oberer See', 'Lake Superior', 'Superior'], ['Michigansee', 'Lake Michigan', 'Michigan'], ['Huronsee', 'Lake Huron', 'Huron'], ['Eriesee', 'Lake Erie', 'Erie'], ['Ontariosee', 'Lake Ontario', 'Ontario']], 180);
lst('ozeane', 'physisch', 'Meere', 'Die Ozeane', 'Die fünf Weltmeere.', [['Pazifik', 'Pazifischer Ozean', 'Stiller Ozean'], ['Atlantik', 'Atlantischer Ozean'], 'Indischer Ozean', ['Arktischer Ozean', 'Nordpolarmeer', 'Arktis'], ['Südlicher Ozean', 'Südpolarmeer', 'Antarktischer Ozean']], 150);
lst('kontinente', 'physisch', 'Meere', 'Die Kontinente', 'Alle sieben.', ['Afrika', 'Antarktis', 'Asien', 'Australien', 'Europa', 'Nordamerika', 'Südamerika', ['Ozeanien', 'Australien und Ozeanien']], 150);
lst('meere-europas', 'physisch', 'Meere', 'Meere rund um Europa', 'Die großen Randmeere.', ['Nordsee', 'Ostsee', 'Mittelmeer', 'Schwarzes Meer', 'Adria', 'Ägäis', ['Atlantik'], 'Barentssee', 'Tyrrhenisches Meer', 'Ionisches Meer', 'Ärmelkanal', 'Kaspisches Meer'], 360);
lst('klimazonen', 'physisch', 'Klima', 'Die Klimazonen', 'Die fünf Klimazonen der Erde.', [['Tropen', 'Tropische Zone'], ['Subtropen', 'Subtropische Zone'], ['Gemäßigte Zone', 'Gemäßigt'], ['Subpolare Zone', 'Subpolar', 'Subarktische Zone'], ['Polare Zone', 'Polar', 'Polarzone']], 150);
lst('groesste-staedte-welt', 'staedte', 'Städte', 'Die 20 größten Städte der Erde', 'Nach Einwohnern im Ballungsraum (Auswahl).', ['Tokio', ['Delhi', 'Neu-Delhi'], 'Shanghai', ['Dhaka', 'Dacca'], ['São Paulo', 'Sao Paulo'], ['Mexiko-Stadt', 'Mexico City'], ['Kairo', 'Cairo'], ['Peking', 'Beijing'], ['Mumbai', 'Bombay'], ['Osaka'], ['Chongqing'], ['Karatschi', 'Karachi'], ['Istanbul'], ['Buenos Aires'], ['Kolkata', 'Kalkutta'], ['Lagos'], ['Kinshasa'], ['Manila'], ['Tianjin'], ['Rio de Janeiro']], 480);
lst('deutsche-grossstaedte', 'staedte', 'Städte', 'Deutsche Großstädte', 'Die 15 größten Städte Deutschlands.', ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg'], 420);

const tilesOf = (t: { cards: { img?: string; a: string }[] }) => t.cards.filter(c => c.img).map(c => item(c.a, { img: c.img }));
add({ id: 'wappen', cat: 'flaggen', section: 'Wappen', title: 'Wappen der Welt', blurb: 'Zu welchem Land gehört das Wappen?', seconds: 300, mode: 'tiles', items: tilesOf(coatsImages) });
add({ id: 'satellitenbilder', cat: 'spezial', section: 'Bilder', title: 'Satellitenbilder erkennen', blurb: 'Welcher Ort ist von oben zu sehen?', seconds: 300, mode: 'tiles', items: tilesOf(satellites) });

// German state capitals (with the map of the states).
const DE_CAPITALS: [string, string][] = [['Baden-Württemberg', 'Stuttgart'], ['Bayern', 'München'], ['Berlin', 'Berlin'], ['Brandenburg', 'Potsdam'], ['Bremen', 'Bremen'],
  ['Hamburg', 'Hamburg'], ['Hessen', 'Wiesbaden'], ['Mecklenburg-Vorpommern', 'Schwerin'], ['Niedersachsen', 'Hannover'], ['Nordrhein-Westfalen', 'Düsseldorf'],
  ['Rheinland-Pfalz', 'Mainz'], ['Saarland', 'Saarbrücken'], ['Sachsen', 'Dresden'], ['Sachsen-Anhalt', 'Magdeburg'], ['Schleswig-Holstein', 'Kiel'], ['Thüringen', 'Erfurt']];
add({ id: 'landeshauptstaedte', cat: 'dach', section: 'Auflistungen', title: 'Die 16 Landeshauptstädte', blurb: 'Tippe zu jedem Bundesland die Hauptstadt.', seconds: 300, mode: 'grid',
  items: DE_CAPITALS.map(([land, city]) => item(city, { prompt: land, shape: land, pt: POINTS[city] })), theme: { layer: 'admin-de' } });

// ── Thematic maps: states and regions, mountains, cities, rivers, lakes ──
const bare = (k: string) => k.replace(/^(der|die|das|dem|den) /, '').replace(/^Bundesstaat /, '');
const shapeOf = (name: string) => SHAPE_NAMES[name] ?? name;
const LAYERS: Record<string, string> = {
  bundeslaender: 'admin-de', 'oesterreich-bundeslaender': 'admin-at', kantone: 'admin-ch', 'italien-regionen': 'admin-it', 'us-staaten': 'admin-us',
  'kanada-provinzen': 'admin-ca', 'australien-staaten': 'admin-au', 'frankreich-regionen': 'admin-fr', 'spanien-regionen': 'admin-es', 'brasilien-staaten': 'admin-br',
  'p-oesterreich': 'admin-at', 'p-schweiz': 'admin-ch', 'p-italien': 'admin-it', 'p-us-staaten': 'admin-us',
};
const POINT_BY_ANSWER = new Set(['achttausender', 'hoechste-berge-der-welt', 'p-berge', 'groesste-staedte-welt', 'deutsche-grossstaedte']);
const POINT_BY_KEY = new Set(['p-vulkane', 'p-wasserfaelle', 'p-wuesten']);
const RIVER_BY_ANSWER = new Set(['laengste-fluesse', 'fluesse-deutschland']);
const LAKES: Record<string, string> = { 'Oberer See': 'Lake Superior', 'Michigansee': 'Lake Michigan', 'Huronsee': 'Lake Huron', 'Eriesee': 'Lake Erie', 'Ontariosee': 'Lake Ontario' };
const keyOf = (q: GeoQuiz, i: number) => {
  const ps = PAIR_SETS.find(p => `p-${p.id}` === q.id);
  return ps ? bare(ps.rows[i][0]) : q.items[i].prompt ?? '';
};
for (const q of quizzes) {
  const layer = LAYERS[q.id];
  if (layer) {
    q.theme = { layer, projection: layer === 'admin-us' ? 'albersUsa' : 'mercator' };
    q.items.forEach((it, i) => { it.shape = shapeOf(q.mode === 'grid' ? keyOf(q, i).replace(/ \(.*\)$/, '') : it.answer); });
  } else if (POINT_BY_ANSWER.has(q.id) || POINT_BY_KEY.has(q.id)) {
    q.theme = {};
    q.items.forEach((it, i) => { it.pt = POINTS[POINT_BY_KEY.has(q.id) ? keyOf(q, i) : it.answer]; });
  } else if (RIVER_BY_ANSWER.has(q.id) || q.id === 'p-fluesse') {
    q.theme = {};
    q.items.forEach((it, i) => { it.river = RIVER_NAMES[q.id === 'p-fluesse' ? keyOf(q, i) : it.answer]; });
  } else if (q.id === 'grosse-seen') {
    q.theme = {};
    q.items.forEach(it => { it.lake = LAKES[it.answer]; });
  }
}

// Preview pictures: the quiz's own pictures, else the flags of the countries it asks for.
for (const q of quizzes) {
  // A map for every quiz about countries (not the picture quizzes), like Jetpunk's map quizzes.
  const codes = q.items.map(i => i.code).filter((c): c is string => !!c);
  if (!q.map && q.mode !== 'tiles' && codes.length >= q.items.length * 0.8) {
    q.map = { region: regionFor(codes.map(c => byCode.get(c)).filter((c): c is Country => !!c)) };
  }
  if (q.art?.length) continue; // set by hand (neighbours: the country itself)
  const pics = q.items.filter(i => i.img).map(i => i.img as string);
  const flags = q.items.filter(i => i.code).map(i => flagUrl(i.code as string));
  const src = q.id.startsWith('umrisse') || q.id === 'wappen' || q.id === 'satellitenbilder' ? pics : flags.length >= 4 ? flags : pics;
  const step = Math.max(1, Math.floor(src.length / 4));
  q.art = [0, 1, 2, 3].map(i => src[i * step]).filter(Boolean);
}

export const QUIZZES = quizzes;
export const quizById = (id: string) => quizzes.find(q => q.id === id);
