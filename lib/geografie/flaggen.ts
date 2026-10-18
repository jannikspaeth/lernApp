import type { Card, Topic } from '../wissen/types';
import { COUNTRIES } from '../welt';
import { GROUP } from './cats';
import { cards, pairs, S } from './helpers';

const G = GROUP.flaggen;
const nm = (code: string) => COUNTRIES.find(c => c.code === code)?.name ?? code;

// Flags that are easily mixed up: [flag shown, look-alikes, what to look at].
const LOOKALIKES: [string, string[], string][] = [
  ['TD', ['RO', 'AD', 'MD'], 'Tschad: das Blau ist dunkler als bei Rumänien. Andorra hat ein Wappen in der Mitte.'],
  ['RO', ['TD', 'AD', 'MD'], 'Rumänien hat helleres Blau als der Tschad und kein Wappen wie Andorra und Moldau.'],
  ['AD', ['RO', 'TD', 'MD'], 'Andorra trägt das Wappen mit zwei Kühen in der Mitte.'],
  ['MD', ['RO', 'TD', 'AD'], 'Moldau zeigt einen Adlerschild in der Mitte.'],
  ['ID', ['MC', 'PL', 'AT'], 'Indonesien: Rot oben, Weiß unten. Monaco hat die gleiche Flagge, nur schmaler.'],
  ['MC', ['ID', 'PL', 'AT'], 'Monaco: Flagge beinahe identisch mit Indonesien, aber im Format 4:5.'],
  ['PL', ['ID', 'MC', 'AT'], 'Polen: Weiß oben, Rot unten – umgekehrt wie Indonesien.'],
  ['IE', ['CI', 'IT', 'MX'], 'Irland: Grün links, Orange rechts. Die Elfenbeinküste ist umgekehrt.'],
  ['CI', ['IE', 'IT', 'MX'], 'Elfenbeinküste: Orange links, Grün rechts.'],
  ['IT', ['IE', 'CI', 'MX'], 'Italien: Grün, Weiß, Rot ohne Wappen. Mexiko hat einen Adler in der Mitte.'],
  ['MX', ['IT', 'IE', 'CI'], 'Mexiko: das Wappen mit dem Adler auf dem Kaktus in der Mitte.'],
  ['AU', ['NZ', 'FJ', 'TV'], 'Australien: sieben Zacken im großen Stern (Commonwealth-Stern) und fünf weiße Sterne.'],
  ['NZ', ['AU', 'FJ', 'TV'], 'Neuseeland: vier rote Sterne mit weißem Rand.'],
  ['SK', ['SI', 'RU', 'HR'], 'Slowakei: Wappen mit Doppelkreuz auf einem Berg.'],
  ['SI', ['SK', 'RU', 'HR'], 'Slowenien: Wappen mit dem Berg Triglav und drei Sternen.'],
  ['RU', ['SK', 'SI', 'NL'], 'Russland: Weiß, Blau, Rot ohne Wappen.'],
  ['NL', ['LU', 'RU', 'FR'], 'Niederlande: Rot, Weiß, Blau (von oben) – dunkleres Blau als Luxemburg.'],
  ['LU', ['NL', 'RU', 'FR'], 'Luxemburg: hellblauer unterer Streifen, Flagge länger als die niederländische.'],
  ['SN', ['ML', 'GN', 'GH'], 'Senegal: grünes Pentagramm in der Mitte.'],
  ['ML', ['SN', 'GN', 'GH'], 'Mali: senkrechte Streifen Grün, Gelb, Rot ohne Stern.'],
  ['GN', ['SN', 'ML', 'GH'], 'Guinea: senkrechte Streifen Rot, Gelb, Grün (Reihenfolge wie Mali, aber umgekehrt).'],
  ['VE', ['CO', 'EC', 'AM'], 'Venezuela: Bogen aus acht Sternen im blauen Streifen.'],
  ['CO', ['VE', 'EC', 'AM'], 'Kolumbien: das Gelb nimmt die obere Hälfte ein, ohne Wappen.'],
  ['EC', ['CO', 'VE', 'AM'], 'Ecuador: Wappen mit dem Kondor in der Mitte.'],
  ['AT', ['LV', 'PL', 'ID'], 'Österreich: Rot-Weiß-Rot in gleich breiten Streifen.'],
  ['LV', ['AT', 'PL', 'ID'], 'Lettland: dunkles Karminrot mit schmalem weißem Streifen.'],
  ['LR', ['US', 'MY', 'CU'], 'Liberia: nur ein weißer Stern in einem blauen Quadrat.'],
  ['MY', ['US', 'LR', 'CU'], 'Malaysia: Halbmond und 14-zackiger Stern.'],
  ['NO', ['IS', 'DK', 'GB'], 'Norwegen: blaues Kreuz mit weißer Einfassung auf Rot.'],
  ['IS', ['NO', 'DK', 'FI'], 'Island: rotes Kreuz mit weißer Einfassung auf Blau.'],
  ['BD', ['JP', 'PW', 'LA'], 'Bangladesch: roter Kreis leicht zur Stange verschoben auf Grün.'],
  ['PW', ['JP', 'BD', 'LA'], 'Palau: gelber Kreis (Vollmond) auf Hellblau.'],
  ['TH', ['CR', 'FR', 'NL'], 'Thailand: Blau-Streifen in der Mitte, Rot und Weiß außen.'],
  ['CR', ['TH', 'NL', 'FR'], 'Costa Rica: Wappen auf einem roten Streifen.'],
  ['DK', ['SE', 'FI', 'NO'], 'Dänemark: weißes Kreuz auf Rot – die älteste Flagge der Welt in Gebrauch.'],
  ['SE', ['FI', 'DK', 'NO'], 'Schweden: gelbes Kreuz auf Blau.'],
  ['FI', ['SE', 'DK', 'NO'], 'Finnland: blaues Kreuz auf Weiß.'],
];

export const lookalikeTopic: Topic = {
  id: 'aehnliche-flaggen',
  name: ['Look-alike flags', 'Flaggen mit ähnlichem Aussehen'],
  icon: '',
  group: G,
  shuffle: true,
  cards: LOOKALIKES.map(([code, alike, info]): Card => ({
    id: `${S}.aehnlich.${code}`,
    q: 'Welches Land hat diese Flagge?',
    img: `/flags/${code.toLowerCase()}.svg`,
    a: nm(code),
    wrong: alike.map(nm),
    info,
  })),
};

export const coatsOfArms = cards('wappen', ['Coats of arms & national symbols', 'Wappen und Nationalsymbole'], G, [
  ['Welches Tier zeigt das Wappen Mexikos?', 'Einen Adler auf einem Kaktus, der eine Schlange frisst', ['Einen Jaguar', 'Einen Kondor', 'Ein Lama'], 'Gründungslegende von Tenochtitlán.'],
  ['Welches Wappentier hat Deutschland?', 'Den Bundesadler', ['Den Löwen', 'Den Bären', 'Den Greif'], 'Schwarzer Adler auf goldenem Grund.'],
  ['Welches Wappentier zeigt das Wappen Österreichs?', 'Einen Adler mit Mauerkrone, Hammer und Sichel', ['Einen Löwen', 'Einen Bären', 'Einen Greif']],
  ['Welches Wappentier ist auf dem Wappen der Schweiz?', 'Keines – ein weißes Kreuz auf Rot', ['Ein Bär', 'Ein Adler', 'Ein Löwe'], 'Die Schweiz hat ein quadratisches Kreuz auf rotem Grund.'],
  ['Welches Land hat einen Löwen und ein Einhorn als Schildhalter im Wappen?', 'Vereinigtes Königreich', ['Dänemark', 'Belgien', 'Schweden'], 'Der Löwe steht für England, das Einhorn für Schottland.'],
  ['Welches Land hat den Quetzal-Vogel auf Wappen und Währung?', 'Guatemala', ['Mexiko', 'Peru', 'Kolumbien'], 'Die Währung heißt Quetzal.'],
  ['Welches Land hat eine Zeder auf Flagge und Wappen?', 'Libanon', ['Zypern', 'Syrien', 'Israel']],
  ['Welches Land zeigt einen Drachen in der Flagge?', 'Bhutan', ['China', 'Wales', 'Vietnam'], 'Der „Donnerdrache“ Druk.'],
  ['Welches Land zeigt ein Ahornblatt auf der Flagge?', 'Kanada', ['Schweden', 'Liberia', 'Irland']],
  ['Welches Land hat ein Schwert mit Schriftzug in der Flagge?', 'Saudi-Arabien', ['Iran', 'Irak', 'Kuwait']],
  ['Welches Land hat als einziges eine Flagge, die nicht rechteckig ist?', 'Nepal', ['Schweiz', 'Bhutan', 'Vatikanstadt'], 'Zwei übereinanderliegende Wimpel.'],
  ['Welche Flagge ist quadratisch?', 'Die der Schweiz und des Vatikans', ['Die Dänemarks', 'Die Österreichs', 'Die Italiens']],
  ['Welches Wappentier hat Polen?', 'Einen weißen Adler', ['Einen schwarzen Adler', 'Einen Löwen', 'Einen Bären']],
  ['Welches Tier zeigt Albaniens Flagge?', 'Einen schwarzen Doppeladler', ['Einen Löwen', 'Einen Wolf', 'Einen Bären']],
  ['Was ist auf dem Wappen Australiens zu sehen?', 'Känguru und Emu', ['Koala und Kakadu', 'Kiwi und Känguru', 'Dingo und Emu'], 'Beide Tiere können nicht rückwärts gehen – Symbol für Fortschritt.'],
  ['Welches Land hat einen Kronenkranich als Nationalvogel?', 'Uganda', ['Kenia', 'Tansania', 'Ruanda']],
]);

export const nationalAnimals = pairs('nationaltiere', ['National animals', 'Nationaltiere'], G, k => `Welches Land hat ${k} als Nationaltier?`, [
  ['den Kiwi', 'Neuseeland'], ['den Bengalischen Tiger', 'Indien', 'Auch Bangladesch hat ihn.'], ['den Kondor', 'Bolivien', 'Auch Ecuador und Chile.'],
  ['den Weißkopfseeadler', 'USA'], ['den Großen Panda', 'China'], ['den Biber', 'Kanada'], ['das Känguru', 'Australien'],
  ['den Löwen', 'England', 'Auch Singapur („Löwenstadt“).'], ['den Elefanten', 'Thailand'], ['den Springbock', 'Südafrika'],
  ['den Quetzal', 'Guatemala'], ['den Kronenkranich', 'Uganda'], ['den Braunbären', 'Russland'], ['den Gallischen Hahn', 'Frankreich'],
  ['den Adler', 'Deutschland'], ['den Stier', 'Spanien'], ['den Drachen', 'Bhutan', 'Auch Wales.'], ['den Grauen Wolf', 'Türkei'],
  ['den Jaguar', 'Brasilien', 'Auch Mexiko und Peru verbinden ihn mit ihrer Kultur.'], ['das Vikunja', 'Peru'],
]);

export const nationalFlowers = pairs('nationalblumen', ['National flowers', 'Nationalblumen'], G, k => `Welches Land hat ${k} als Nationalblume?`, [
  ['die Kirschblüte', 'Japan'], ['den Lotus', 'Indien', 'Auch Vietnam, Ägypten und Sri Lanka.'], ['das Edelweiß', 'Österreich'],
  ['die Rose', 'England'], ['den Klee (Shamrock)', 'Irland'], ['die Distel', 'Schottland'], ['den Lauch (Porree)', 'Wales', 'Daneben die Narzisse.'],
  ['die Lilie', 'Frankreich', 'Die Lilie („fleur-de-lis“) war das königliche Symbol; auch die Iris.'], ['die Kornblume', 'Deutschland', 'Inoffiziell.'],
  ['die Protea', 'Südafrika'], ['die Mohnblume', 'Polen', 'Inoffiziell; in vielen Ländern Symbol des Gedenkens.'],
  ['die Orchidee', 'Singapur'], ['den Hibiskus', 'Malaysia'], ['die Zeder (Baum)', 'Libanon'], ['den Ahorn (Baum)', 'Kanada'],
  ['die Mimose (Akazie)', 'Australien', 'Die Goldene Akazie.'], ['die Sonnenblume', 'Ukraine'], ['die Rose (Beschluss 1986)', 'USA'],
  ['die Dahlie', 'Mexiko'],
]);
