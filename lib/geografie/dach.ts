import type { Topic } from '../wissen/types';
import { GROUP } from './cats';
import { cards, pairs } from './helpers';

const G = GROUP.dach;

export const austria = pairs('oesterreich', ['Austrian states', 'Österreichische Bundesländer'], G, k => `Was ist die Landeshauptstadt von ${k}?`, [
  ['Burgenland', 'Eisenstadt'], ['Kärnten', 'Klagenfurt'], ['Niederösterreich', 'St. Pölten', 'Seit 1986; zuvor wurde Niederösterreich von Wien aus regiert.'],
  ['Oberösterreich', 'Linz'], ['Salzburg', 'Salzburg'], ['der Steiermark', 'Graz'], ['Tirol', 'Innsbruck'], ['Vorarlberg', 'Bregenz'], ['Wien', 'Wien'],
]);

export const switzerland = pairs('schweiz', ['Swiss cantons', 'Schweizer Kantone'], G, k => `Was ist der Hauptort des Kantons ${k}?`, [
  ['Zürich', 'Zürich'], ['Bern', 'Bern'], ['Luzern', 'Luzern'], ['Uri', 'Altdorf'], ['Schwyz', 'Schwyz'], ['Obwalden', 'Sarnen'], ['Nidwalden', 'Stans'],
  ['Glarus', 'Glarus'], ['Zug', 'Zug'], ['Freiburg', 'Freiburg (Fribourg)'], ['Solothurn', 'Solothurn'], ['Basel-Stadt', 'Basel'], ['Basel-Landschaft', 'Liestal'],
  ['Schaffhausen', 'Schaffhausen'], ['Appenzell Ausserrhoden', 'Herisau'], ['Appenzell Innerrhoden', 'Appenzell'], ['St. Gallen', 'St. Gallen'],
  ['Graubünden', 'Chur'], ['Aargau', 'Aarau'], ['Thurgau', 'Frauenfeld'], ['Tessin', 'Bellinzona'], ['Waadt', 'Lausanne'], ['Wallis', 'Sitten (Sion)'],
  ['Neuenburg', 'Neuenburg (Neuchâtel)'], ['Genf', 'Genf'], ['Jura', 'Delsberg (Delémont)'],
]);

export const italy = pairs('italien', ['Italian regions', 'Italienische Regionen'], G, k => `Was ist die Hauptstadt der Region ${k}?`, [
  ['Aostatal', 'Aosta'], ['Piemont', 'Turin'], ['Lombardei', 'Mailand'], ['Trentino-Südtirol', 'Trient', 'Mit den autonomen Provinzen Trient und Bozen.'],
  ['Venetien', 'Venedig'], ['Friaul-Julisch Venetien', 'Triest'], ['Ligurien', 'Genua'], ['Emilia-Romagna', 'Bologna'], ['Toskana', 'Florenz'],
  ['Umbrien', 'Perugia'], ['Marken', 'Ancona'], ['Latium', 'Rom'], ['Abruzzen', 'L’Aquila'], ['Molise', 'Campobasso'], ['Kampanien', 'Neapel'],
  ['Apulien', 'Bari'], ['Basilikata', 'Potenza'], ['Kalabrien', 'Catanzaro'], ['Sizilien', 'Palermo'], ['Sardinien', 'Cagliari'],
]);

export const dachNature = cards('dach-natur', ['Rivers, mountains & islands', 'Flüsse, Gebirge und Inseln'], G, [
  ['Welcher Fluss entspringt in der Schweiz und mündet in der Nordsee?', 'Rhein', ['Donau', 'Elbe', 'Rhône'], 'Er entspringt im Kanton Graubünden.'],
  ['Welcher Fluss entspringt in der Schweiz und mündet im Mittelmeer?', 'Rhône', ['Rhein', 'Aare', 'Ticino'], 'Sie durchfließt den Genfer See.'],
  ['Welcher Fluss fließt durch Bern?', 'Aare', ['Reuss', 'Limmat', 'Rhône']],
  ['Welcher Fluss fließt durch Innsbruck?', 'Inn', ['Isar', 'Salzach', 'Lech']],
  ['Welcher Fluss fließt durch Salzburg?', 'Salzach', ['Inn', 'Enns', 'Traun']],
  ['Welcher Fluss fließt durch Graz?', 'Mur', ['Drau', 'Enns', 'Raab']],
  ['Welcher Fluss fließt durch Villach in Kärnten?', 'Drau', ['Mur', 'Enns', 'Salzach']],
  ['Welcher größte Fluss Italiens mündet in die Adria?', 'Po', ['Tiber', 'Arno', 'Etsch'], 'Rund 650 km lang.'],
  ['Welcher Fluss fließt durch Florenz?', 'Arno', ['Tiber', 'Po', 'Piave']],
  ['Welcher Fluss fließt durch Verona?', 'Etsch', ['Po', 'Brenta', 'Piave']],
  ['Welches Gebirge bildet die Grenze Italiens zum Norden?', 'Alpen', ['Apenninen', 'Dolomiten', 'Karpaten']],
  ['Welches Gebirge ist das „Rückgrat“ Italiens?', 'Apenninen', ['Alpen', 'Dolomiten', 'Abruzzen']],
  ['Welche Berge zählt man zum UNESCO-Weltnaturerbe in Südtirol/Trentino?', 'Dolomiten', ['Karnische Alpen', 'Ötztaler Alpen', 'Julische Alpen']],
  ['In welchem Gebirge liegt der Großglockner?', 'Hohe Tauern', ['Karwendel', 'Ötztaler Alpen', 'Dachstein']],
  ['Welches Gebirge trennt Schweiz und Frankreich im Nordwesten (Juragebirge)?', 'Jura', ['Vogesen', 'Alpen', 'Schwarzwald']],
  ['Welche Insel im Golf von Neapel ist ein Ausflugsziel mit Blauer Grotte?', 'Capri', ['Ischia', 'Procida', 'Elba']],
  ['Welche Insel vor der Toskana war Napoleons Verbannungsort 1814/15?', 'Elba', ['Capri', 'Sardinien', 'Korsika']],
  ['Welche italienische Insel liegt am weitesten südlich (nahe Afrika)?', 'Lampedusa', ['Pantelleria', 'Capri', 'Elba']],
  ['Welche Nordseeinsel ist die größte deutsche Nordseeinsel?', 'Sylt', ['Föhr', 'Borkum', 'Norderney'], 'Rund 99 km².'],
  ['Welche Insel ist die größte der deutschen Ostsee?', 'Rügen', ['Usedom', 'Fehmarn', 'Hiddensee']],
  ['Welche Insel teilen sich Deutschland und Polen?', 'Usedom', ['Rügen', 'Fehmarn', 'Wollin']],
  ['Welcher See an der Grenze von Italien und der Schweiz hat die Borromäischen Inseln?', 'Lago Maggiore', ['Gardasee', 'Comer See', 'Luganer See']],
]);

export const plates = pairs('kennzeichen', ['Number plates', 'Autokennzeichen'], G, k => `Zu welcher Stadt gehört das Kennzeichen „${k}“?`, [
  ['M', 'München'], ['B', 'Berlin'], ['HH', 'Hamburg', 'Hansestadt Hamburg.'], ['K', 'Köln'], ['F', 'Frankfurt am Main'], ['S', 'Stuttgart'], ['D', 'Düsseldorf'],
  ['HB', 'Bremen'], ['H', 'Hannover'], ['N', 'Nürnberg'], ['DD', 'Dresden'], ['L', 'Leipzig'], ['DO', 'Dortmund'], ['E', 'Essen'], ['MS', 'Münster'],
  ['KA', 'Karlsruhe'], ['HD', 'Heidelberg'], ['AC', 'Aachen'], ['FR', 'Freiburg im Breisgau'], ['KI', 'Kiel'], ['HRO', 'Rostock'], ['MZ', 'Mainz'],
  ['WI', 'Wiesbaden'], ['SB', 'Saarbrücken'], ['KS', 'Kassel'], ['OF', 'Offenbach'], ['HRO', 'Rostock'], ['GÖ', 'Göttingen'], ['PB', 'Paderborn'],
  ['W', 'Wien (Österreich)'], ['G', 'Graz (Österreich)'], ['I', 'Innsbruck (Österreich)'], ['ZH', 'Zürich (Schweiz)'], ['GE', 'Genf (Schweiz)'], ['TI', 'Tessin (Schweiz)'],
].filter((r, i, a) => a.findIndex(x => x[0] === r[0]) === i) as [string, string, string?][]);

export const countryPlates = pairs('kennzeichen-laender', ['International plates', 'Internationale Kennzeichen'], G, k => `Welches Land hat das internationale Kennzeichen „${k}“?`, [
  ['A', 'Österreich'], ['CH', 'Schweiz'], ['D', 'Deutschland'], ['F', 'Frankreich'], ['I', 'Italien'], ['E', 'Spanien'], ['NL', 'Niederlande'], ['B', 'Belgien'],
  ['PL', 'Polen'], ['CZ', 'Tschechien'], ['H', 'Ungarn'], ['S', 'Schweden'], ['N', 'Norwegen'], ['DK', 'Dänemark'], ['FIN', 'Finnland'], ['GB', 'Vereinigtes Königreich'],
  ['IRL', 'Irland'], ['P', 'Portugal'], ['GR', 'Griechenland'], ['TR', 'Türkei'], ['L', 'Luxemburg'], ['FL', 'Liechtenstein'], ['SK', 'Slowakei'], ['SLO', 'Slowenien'],
  ['HR', 'Kroatien'], ['RO', 'Rumänien'], ['BG', 'Bulgarien'], ['RUS', 'Russland'], ['UA', 'Ukraine'], ['USA', 'USA'], ['J', 'Japan'], ['RA', 'Argentinien'],
]);

export const dachTopics: Topic[] = [austria, switzerland, italy, dachNature, plates, countryPlates];
