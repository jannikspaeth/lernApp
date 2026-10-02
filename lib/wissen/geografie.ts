import { Subject, Topic, topic } from './types';
import { CONTINENTS, countriesIn, flagUrl } from '../welt';

const S = 'geografie';

const FLAGS: [string, string] = ['Flags', 'Flaggen'];
const CAPITALS: [string, string] = ['Capitals', 'Hauptstädte'];
const MORE: [string, string] = ['Germany & nature', 'Deutschland & Natur'];

// One topic per continent, generated from the country list (card id = ISO code).
const flagTopics: Topic[] = CONTINENTS.map(k => ({
  id: `flaggen-${k.id}`,
  name: k.name,
  icon: k.icon,
  group: FLAGS,
  shuffle: true,
  cards: countriesIn(k.id).map(c => ({
    id: `${S}.flaggen.${c.code}`,
    q: 'Zu welchem Land gehört diese Flagge?',
    img: flagUrl(c.code),
    a: c.name,
  })),
}));

const capitalTopics: Topic[] = CONTINENTS.map(k => ({
  id: `hauptstadt-${k.id}`,
  name: k.name,
  icon: k.icon,
  group: CAPITALS,
  shuffle: true,
  cards: countriesIn(k.id)
    .filter(c => c.capital)
    .map(c => ({
      id: `${S}.hauptstadt.${c.code}`,
      q: `Was ist die Hauptstadt von ${c.name}?`,
      img: flagUrl(c.code),
      a: c.capital as string,
      ...(c.capitalInfo ? { info: c.capitalInfo } : {}),
    })),
}));

export const geografie: Subject = {
  id: S,
  name: ['Geography', 'Geografie'],
  icon: '🗺️',
  blurb: ['Flags, capitals, the world map and more', 'Flaggen, Hauptstädte, Weltkarte und mehr'],
  color: { bg: 'bg-emerald-50', text: 'text-emerald-800', bar: 'bg-emerald-500', border: 'border-emerald-200' },
  links: [
    { href: '/karte', icon: '🗺️', name: ['World map quiz', 'Weltkarten-Quiz'], blurb: ['Find or type in every country', 'Alle Länder finden oder eintippen'] },
  ],
  topics: [
    ...flagTopics,
    ...capitalTopics,
    ...[
    topic(S, 'deutschland', ['German states', 'Bundesländer'], '🇩🇪', [
      ['Was ist die Landeshauptstadt von Bayern?', 'München'],
      ['Was ist die Landeshauptstadt von Baden-Württemberg?', 'Stuttgart'],
      ['Was ist die Landeshauptstadt von Hessen?', 'Wiesbaden', null, 'Nicht Frankfurt – die größte Stadt Hessens.'],
      ['Was ist die Landeshauptstadt von Niedersachsen?', 'Hannover'],
      ['Was ist die Landeshauptstadt von Nordrhein-Westfalen?', 'Düsseldorf', null, 'Nicht Köln – die größte Stadt des Landes.'],
      ['Was ist die Landeshauptstadt von Rheinland-Pfalz?', 'Mainz'],
      ['Was ist die Landeshauptstadt des Saarlandes?', 'Saarbrücken'],
      ['Was ist die Landeshauptstadt von Sachsen?', 'Dresden'],
      ['Was ist die Landeshauptstadt von Sachsen-Anhalt?', 'Magdeburg'],
      ['Was ist die Landeshauptstadt von Thüringen?', 'Erfurt'],
      ['Was ist die Landeshauptstadt von Brandenburg?', 'Potsdam'],
      ['Was ist die Landeshauptstadt von Mecklenburg-Vorpommern?', 'Schwerin', null, 'Nicht Rostock – die größte Stadt des Landes.'],
      ['Was ist die Landeshauptstadt von Schleswig-Holstein?', 'Kiel'],
    ]),
    topic(S, 'natur', ['Rivers, mountains & records', 'Flüsse, Berge & Rekorde'], '⛰️', [
      ['Welcher Fluss hat die längste Strecke in Deutschland?', 'Rhein', ['Elbe', 'Donau', 'Main'], 'Rund 865 km des Rheins liegen in Deutschland.'],
      ['Wie heißt der höchste Berg Deutschlands?', 'Zugspitze', ['Watzmann', 'Feldberg', 'Brocken'], '2.962 m, an der Grenze zu Österreich.'],
      ['Wie heißt der höchste Berg der Alpen?', 'Mont Blanc', ['Matterhorn', 'Großglockner', 'Eiger']],
      ['Wie heißt der höchste Berg der Erde?', 'Mount Everest', ['K2', 'Kilimandscharo', 'Aconcagua'], 'Etwa 8.849 m im Himalaya.'],
      ['Welcher ist der größte Ozean?', 'Pazifik', ['Atlantik', 'Indischer Ozean', 'Arktischer Ozean']],
      ['Welche ist die größte Wüste außerhalb der Polargebiete?', 'Sahara', ['Gobi', 'Kalahari', 'Atacama']],
      ['Welches Land hat die größte Fläche?', 'Russland', ['Kanada', 'China', 'USA']],
      ['Welches ist der größte See, der ganz in Deutschland liegt?', 'Müritz', ['Chiemsee', 'Bodensee', 'Starnberger See'], 'Der Bodensee ist größer, liegt aber auch in Österreich und der Schweiz.'],
      ['Welcher ist der längste Fluss Europas?', 'Wolga', ['Donau', 'Rhein', 'Dnepr']],
      ['Durch wie viele Hauptstädte fließt die Donau?', 'Vier', ['Zwei', 'Drei', 'Fünf'], 'Wien, Bratislava, Budapest und Belgrad.'],
      ['Welches Gebirge gilt als Grenze zwischen Europa und Asien?', 'Ural', ['Karpaten', 'Pyrenäen', 'Apennin']],
      ['Welcher Fluss fließt durch Paris?', 'Seine', ['Loire', 'Rhône', 'Garonne']],
      ['Welcher Kontinent hat die meisten Länder?', 'Afrika', ['Asien', 'Europa', 'Südamerika'], '54 Staaten.'],
      ['Welches Land hat die meisten Einwohner?', 'Indien', ['China', 'USA', 'Indonesien'], 'Indien hat China um 2023 überholt.'],
    ]),
    ].map(t => ({ ...t, group: MORE })),
  ],
};
