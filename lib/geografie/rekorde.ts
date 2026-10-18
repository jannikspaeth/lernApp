import type { Topic } from '../wissen/types';
import { GROUP } from './cats';
import { cards, pairs } from './helpers';

const G = GROUP.rekorde;

export const sizes = cards('groesse', ['Biggest & smallest countries', 'Größte und kleinste Länder'], G, [
  ['Welches ist das flächenmäßig größte Land der Erde?', 'Russland', ['Kanada', 'China', 'USA'], 'Rund 17,1 Mio. km².'],
  ['Welches ist das zweitgrößte Land der Erde?', 'Kanada', ['USA', 'China', 'Brasilien'], 'Rund 10 Mio. km².'],
  ['Welches ist das drittgrößte Land der Erde?', 'USA', ['China', 'Brasilien', 'Australien'], 'Ob die USA oder China als drittes zählen, hängt von der Messung ab.'],
  ['Welches ist das viertgrößte Land der Erde?', 'China', ['Brasilien', 'Australien', 'Indien'], 'Rund 9,6 Mio. km².'],
  ['Welches ist das fünftgrößte Land der Erde?', 'Brasilien', ['Australien', 'Indien', 'Argentinien']],
  ['Welches ist das sechstgrößte Land der Erde?', 'Australien', ['Indien', 'Argentinien', 'Kasachstan']],
  ['Welches ist das siebtgrößte Land der Erde?', 'Indien', ['Argentinien', 'Kasachstan', 'Algerien']],
  ['Welches ist das größte Land Afrikas?', 'Algerien', ['DR Kongo', 'Sudan', 'Libyen'], 'Rund 2,38 Mio. km².'],
  ['Welches ist das größte Land Südamerikas?', 'Brasilien', ['Argentinien', 'Peru', 'Kolumbien']],
  ['Welches ist das größte Land der Europäischen Union?', 'Frankreich', ['Spanien', 'Schweden', 'Deutschland'], 'Rund 550.000 km² im europäischen Teil.'],
  ['Welches ist das größte Land der Erde ohne Zugang zum Meer?', 'Kasachstan', ['Mongolei', 'Tschad', 'Niger'], 'Rund 2,7 Mio. km².'],
  ['Welches ist das größte Land Europas ohne Russland?', 'Ukraine', ['Frankreich', 'Spanien', 'Schweden']],
  ['Welches ist das kleinste Land der Erde?', 'Vatikanstadt', ['Monaco', 'San Marino', 'Liechtenstein'], 'Rund 0,44 km².'],
  ['Welches ist das zweitkleinste Land der Erde?', 'Monaco', ['Nauru', 'Tuvalu', 'San Marino']],
  ['Welches ist das kleinste Land Afrikas?', 'Seychellen', ['Komoren', 'Gambia', 'Mauritius'], 'Rund 460 km².'],
  ['Welches ist das kleinste Land Asiens (Fläche)?', 'Malediven', ['Singapur', 'Bahrain', 'Brunei'], 'Rund 300 km².'],
  ['Welches ist das kleinste Land Südamerikas?', 'Suriname', ['Uruguay', 'Guyana', 'Ecuador']],
  ['Welches Land ist größer: Deutschland oder Japan?', 'Japan', ['Deutschland', 'Gleich groß', 'Das ist nicht messbar'], 'Japan: rund 378.000 km², Deutschland rund 357.000 km².'],
  ['Wie viele Länder gibt es (UN-Mitglieder)?', '193', ['150', '195', '200'], '193 UN-Mitglieder; dazu kommen Beobachterstaaten.'],
  ['Welcher Kontinent hat die meisten Länder?', 'Afrika', ['Asien', 'Europa', 'Südamerika'], '54 Staaten.'],
]);

export const extremes = cards('extremwerte', ['Extreme places', 'Extremwerte: heiß, kalt, trocken'], G, [
  ['Wo wurde die höchste jemals zuverlässig gemessene Lufttemperatur registriert?', 'Death Valley (USA)', ['Sahara (Libyen)', 'Dasht-e Lut (Iran)', 'Sossusvlei (Namibia)'], '56,7 °C am 10. Juli 1913.'],
  ['Wo wurde die tiefste Temperatur gemessen?', 'Wostok-Station (Antarktis)', ['Oimjakon (Russland)', 'Grönland', 'Nordpol'], '−89,2 °C am 21. Juli 1983.'],
  ['Welcher dauerhaft bewohnte Ort gilt als der kälteste der Erde?', 'Oimjakon (Russland)', ['Barrow (Alaska)', 'Longyearbyen', 'Nuuk'], 'Bis −67,7 °C.'],
  ['Welcher Ort gilt als einer der niederschlagsreichsten der Erde?', 'Mawsynram (Indien)', ['Cherrapunji', 'Manaus', 'Hilo'], 'Über 11 m Regen im Jahr; Cherrapunji liegt in der Nähe.'],
  ['Wo regnet es fast nie?', 'Atacama (Chile)', ['Gobi', 'Kalahari', 'Namib'], 'In manchen Gebieten wurde jahrelang kein Regen gemessen.'],
  ['Wie hoch war die höchste in Deutschland gemessene Temperatur?', '41,2 °C', ['38,5 °C', '45 °C', '39,8 °C'], 'Gemessen am 25. Juli 2019 in Lingen (Ems).'],
  ['Wie heißt der tiefste Punkt Deutschlands?', 'Neuendorf-Sachsenbande (−3,5 m)', ['Wilhelmshaven', 'Hamburg-Rissen', 'Rügen'], 'In der Wilstermarsch in Schleswig-Holstein.'],
  ['Welche Hauptstadt ist die höchstgelegene der Welt?', 'La Paz (Bolivien)', ['Quito', 'Bogotá', 'Addis Abeba'], 'Rund 3.650 m; Sucre ist die verfassungsmäßige Hauptstadt.'],
  ['Welche Hauptstadt ist die nördlichste der Welt?', 'Reykjavík', ['Oslo', 'Helsinki', 'Nuuk'], 'Nuuk (Grönland) liegt weiter nördlich, ist aber keine Staatshauptstadt.'],
  ['Welche Hauptstadt ist die südlichste der Welt?', 'Wellington', ['Canberra', 'Buenos Aires', 'Pretoria']],
  ['Welcher Ort hat die meisten Sonnenstunden?', 'Yuma (USA, Arizona)', ['Kairo', 'Phoenix', 'Dubai'], 'Rund 90 % der möglichen Sonnenstunden.'],
  ['Welcher bewohnte Ort liegt am höchsten?', 'La Rinconada (Peru)', ['La Paz', 'Lhasa', 'Quito'], 'Rund 5.100 m, eine Goldgräberstadt.'],
  ['Wo wurde die höchste Windgeschwindigkeit gemessen?', 'Barrow Island (Australien), 408 km/h im Zyklon Olivia', ['Mount Washington', 'Zugspitze', 'Antarktis'], 'Bei einem tropischen Wirbelsturm 1996.'],
  ['Welcher Kontinent ist der trockenste?', 'Antarktis', ['Australien', 'Afrika', 'Südamerika']],
  ['Welcher Kontinent ist der kälteste?', 'Antarktis', ['Arktis', 'Europa', 'Asien']],
]);

export const highLow = pairs('hoechste-tiefste', ['Highest & lowest points', 'Höchste und tiefste Punkte der Kontinente'], G, k => k, [
  ['Höchster Punkt Asiens?', 'Mount Everest'], ['Höchster Punkt Afrikas?', 'Kilimandscharo'], ['Höchster Punkt Nordamerikas?', 'Denali'],
  ['Höchster Punkt Südamerikas?', 'Aconcagua'], ['Höchster Punkt Europas (Kaukasus gerechnet)?', 'Elbrus'], ['Höchster Punkt der Antarktis?', 'Mount Vinson'],
  ['Höchster Punkt Australiens (Festland)?', 'Mount Kosciuszko'], ['Tiefster Punkt der Erde an Land?', 'Ufer des Toten Meeres (rund −430 m)'],
  ['Tiefster Punkt Afrikas?', 'Assalsee (Dschibuti)'], ['Tiefster Punkt Nordamerikas?', 'Death Valley (Badwater Basin)'], ['Tiefster Punkt Südamerikas?', 'Laguna del Carbón (Argentinien)'],
  ['Tiefster Punkt Europas (Land)?', 'Kaspische Senke (Russland)'], ['Tiefster Punkt Australiens?', 'Lake Eyre'], ['Tiefster Punkt der Ozeane?', 'Witjastief im Marianengraben'],
  ['Höchster Punkt des Meeresbodens (Berg, vom Meeresboden gemessen)?', 'Mauna Kea (Hawaii)'],
]);

export const organisations = cards('organisationen', ['EU, NATO, G7, OPEC & Co.', 'EU, NATO, G7, OPEC und Co.'], G, [
  ['Welches dieser Länder gehört nicht zur EU?', 'Norwegen', ['Schweden', 'Dänemark', 'Finnland'], 'Norwegen ist über den EWR eng angebunden.'],
  ['Welches dieser Länder ist kein EU-Mitglied?', 'Schweiz', ['Österreich', 'Belgien', 'Portugal']],
  ['Welches dieser Länder ist EU-Mitglied?', 'Kroatien', ['Serbien', 'Bosnien und Herzegowina', 'Albanien'], 'Seit 2013 EU-Mitglied.'],
  ['Welches Land verließ 2020 die EU?', 'Vereinigtes Königreich', ['Schweiz', 'Norwegen', 'Island'], 'Brexit am 31. Januar 2020.'],
  ['Wie viele Staaten hat die EU?', '27', ['25', '28', '30'], 'Seit dem Brexit 2020.'],
  ['Welche Länder gründeten 1951 die Montanunion?', 'Deutschland, Frankreich, Italien, Belgien, Niederlande, Luxemburg', ['Deutschland, Frankreich, Italien, Spanien, Portugal, Belgien', 'Frankreich, UK, Deutschland, Belgien, Dänemark, Irland', 'Deutschland, Österreich, Italien, Schweiz, Frankreich, Niederlande'], 'Die „Sechs“.'],
  ['Welches Land gehört nicht zur G7?', 'Russland', ['Japan', 'Kanada', 'Italien'], 'Russland war bis 2014 Mitglied (G8).'],
  ['Welches Land gehört zur G7?', 'Japan', ['China', 'Indien', 'Brasilien']],
  ['Wie viele Staaten gehören zur G7?', 'Sieben', ['Acht', 'Zehn', 'Zwanzig'], 'USA, Japan, Deutschland, Vereinigtes Königreich, Frankreich, Italien, Kanada.'],
  ['Welches dieser Länder ist kein ständiges Mitglied des UN-Sicherheitsrats?', 'Deutschland', ['Frankreich', 'China', 'Russland'], 'Ständig: USA, Russland, China, Frankreich, Vereinigtes Königreich.'],
  ['Welches Land ist OPEC-Mitglied?', 'Saudi-Arabien', ['Norwegen', 'Russland', 'USA']],
  ['Welches Land ist nicht OPEC-Mitglied?', 'Norwegen', ['Irak', 'Venezuela', 'Nigeria']],
  ['Welche Staaten bilden die BRICS-Gründerstaaten?', 'Brasilien, Russland, Indien, China, Südafrika', ['Belgien, Russland, Indien, China, Schweden', 'Brasilien, Rumänien, Indonesien, China, Singapur', 'Bolivien, Russland, Irak, Chile, Syrien']],
  ['Welches Land ist nicht NATO-Mitglied?', 'Österreich', ['Polen', 'Türkei', 'Norwegen'], 'Österreich ist neutral.'],
  ['Welches Land ist NATO-Mitglied?', 'Türkei', ['Schweiz', 'Serbien', 'Irland']],
  ['Welches Land gehört zum Schengen-Raum?', 'Schweiz', ['Irland', 'Zypern', 'Vereinigtes Königreich'], 'Die Schweiz ist assoziiertes Schengen-Mitglied.'],
  ['Welches EU-Land hat den Euro nicht eingeführt?', 'Polen', ['Finnland', 'Slowakei', 'Estland']],
  ['Welcher Staatenbund umfasst Argentinien, Brasilien, Paraguay und Uruguay als Gründer?', 'Mercosur', ['Anden-Gemeinschaft', 'NAFTA', 'ASEAN']],
  ['Welche Organisation hat ihren Sitz in Genf und kümmert sich um Gesundheit?', 'Weltgesundheitsorganisation (WHO)', ['UNESCO', 'UNICEF', 'FAO']],
  ['Wo hat die UNO ihren Hauptsitz?', 'New York', ['Genf', 'Wien', 'Brüssel']],
  ['Wo haben EU-Kommission und NATO ihren Sitz?', 'Brüssel', ['Straßburg', 'Luxemburg', 'Den Haag']],
  ['Wo hat der Internationale Strafgerichtshof seinen Sitz?', 'Den Haag', ['Genf', 'Brüssel', 'Wien']],
  ['Wo hat die OPEC ihren Sitz?', 'Wien', ['Riad', 'Genf', 'Abu Dhabi']],
  ['Welche Hauptstadt ist Sitz des Europäischen Parlaments (Plenarsitzungen)?', 'Straßburg', ['Brüssel', 'Luxemburg', 'Berlin'], 'Zusätzlich tagt es in Brüssel.'],
]);

export const recordTopics: Topic[] = [sizes, extremes, highLow, organisations];
