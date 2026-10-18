import type { Topic } from '../wissen/types';
import { GROUP } from './cats';
import { pairs } from './helpers';

const G = GROUP.regionen;
const cap = (k: string) => `Was ist die Hauptstadt von ${k}?`;

export const usStates = pairs('us-staaten', ['US states', 'US-Bundesstaaten'], G, cap, [
  ['Alabama', 'Montgomery'], ['Alaska', 'Juneau'], ['Arizona', 'Phoenix'], ['Arkansas', 'Little Rock'], ['Kalifornien', 'Sacramento', 'Nicht Los Angeles.'],
  ['Colorado', 'Denver'], ['Connecticut', 'Hartford'], ['Delaware', 'Dover'], ['Florida', 'Tallahassee', 'Nicht Miami.'], ['Georgia', 'Atlanta'],
  ['Hawaii', 'Honolulu'], ['Idaho', 'Boise'], ['Illinois', 'Springfield', 'Nicht Chicago.'], ['Indiana', 'Indianapolis'], ['Iowa', 'Des Moines'],
  ['Kansas', 'Topeka'], ['Kentucky', 'Frankfort'], ['Louisiana', 'Baton Rouge', 'Nicht New Orleans.'], ['Maine', 'Augusta'], ['Maryland', 'Annapolis'],
  ['Massachusetts', 'Boston'], ['Michigan', 'Lansing', 'Nicht Detroit.'], ['Minnesota', 'Saint Paul'], ['Mississippi', 'Jackson'], ['Missouri', 'Jefferson City'],
  ['Montana', 'Helena'], ['Nebraska', 'Lincoln'], ['Nevada', 'Carson City', 'Nicht Las Vegas.'], ['New Hampshire', 'Concord'], ['New Jersey', 'Trenton'],
  ['New Mexico', 'Santa Fe'], ['New York', 'Albany', 'Nicht New York City.'], ['North Carolina', 'Raleigh'], ['North Dakota', 'Bismarck'], ['Ohio', 'Columbus'],
  ['Oklahoma', 'Oklahoma City'], ['Oregon', 'Salem'], ['Pennsylvania', 'Harrisburg', 'Nicht Philadelphia.'], ['Rhode Island', 'Providence'],
  ['South Carolina', 'Columbia'], ['South Dakota', 'Pierre'], ['Tennessee', 'Nashville'], ['Texas', 'Austin'], ['Utah', 'Salt Lake City'], ['Vermont', 'Montpelier'],
  ['Virginia', 'Richmond'], ['Washington (Bundesstaat)', 'Olympia'], ['West Virginia', 'Charleston'], ['Wisconsin', 'Madison'], ['Wyoming', 'Cheyenne'],
], { shuffle: true });

export const canadaAustralia = pairs('kanada-australien', ['Canada & Australia', 'Kanadische Provinzen, australische Bundesstaaten'], G, cap, [
  ['Alberta', 'Edmonton'], ['British Columbia', 'Victoria', 'Nicht Vancouver.'], ['Manitoba', 'Winnipeg'], ['New Brunswick', 'Fredericton'],
  ['Neufundland und Labrador', 'St. John’s'], ['Nova Scotia', 'Halifax'], ['Ontario', 'Toronto'], ['Prince Edward Island', 'Charlottetown'],
  ['Québec', 'Québec (Stadt)', 'Nicht Montréal.'], ['Saskatchewan', 'Regina'], ['Yukon', 'Whitehorse'], ['den Nordwest-Territorien', 'Yellowknife'], ['Nunavut', 'Iqaluit'],
  ['New South Wales', 'Sydney'], ['dem Bundesstaat Victoria (Australien)', 'Melbourne'], ['Queensland', 'Brisbane'], ['South Australia', 'Adelaide'],
  ['Western Australia', 'Perth'], ['Tasmanien', 'Hobart'], ['dem Northern Territory', 'Darwin'], ['dem Australian Capital Territory', 'Canberra'],
], { shuffle: true });

export const franceSpain = pairs('frankreich-spanien', ['France & Spain', 'Regionen in Frankreich und Spanien'], G, cap, [
  ['Auvergne-Rhône-Alpes', 'Lyon'], ['Bourgogne-Franche-Comté', 'Dijon'], ['der Bretagne', 'Rennes'], ['Centre-Val de Loire', 'Orléans'], ['Korsika', 'Ajaccio'],
  ['Grand Est', 'Straßburg'], ['Hauts-de-France', 'Lille'], ['Île-de-France', 'Paris'], ['der Normandie', 'Rouen'], ['Nouvelle-Aquitaine', 'Bordeaux'],
  ['Okzitanien (Occitanie)', 'Toulouse'], ['Pays de la Loire', 'Nantes'], ['Provence-Alpes-Côte d’Azur', 'Marseille'],
  ['Andalusien', 'Sevilla'], ['Aragonien', 'Saragossa'], ['Asturien', 'Oviedo'], ['den Balearen', 'Palma'], ['dem Baskenland', 'Vitoria-Gasteiz'],
  ['Kantabrien', 'Santander'], ['Kastilien-La Mancha', 'Toledo'], ['Kastilien und León', 'Valladolid'], ['Katalonien', 'Barcelona'],
  ['Extremadura', 'Mérida'], ['Galicien', 'Santiago de Compostela'], ['La Rioja', 'Logroño'], ['Murcia', 'Murcia'], ['Navarra', 'Pamplona'], ['Valencia', 'Valencia'],
]);

export const brazilUk = pairs('brasilien-uk', ['Brazil & the UK', 'Regionen in Brasilien und Großbritannien'], G, cap, [
  ['dem Bundesstaat São Paulo (Brasilien)', 'São Paulo'], ['Minas Gerais', 'Belo Horizonte'], ['Bahia', 'Salvador'], ['dem Bundesstaat Amazonas', 'Manaus'],
  ['Pará', 'Belém'], ['Ceará', 'Fortaleza'], ['Pernambuco', 'Recife'], ['Paraná', 'Curitiba'], ['Rio Grande do Sul', 'Porto Alegre'],
  ['Santa Catarina', 'Florianópolis'], ['Goiás', 'Goiânia'], ['Mato Grosso', 'Cuiabá'], ['dem Bundesstaat Rio de Janeiro', 'Rio de Janeiro'],
  ['England', 'London'], ['Schottland', 'Edinburgh'], ['Wales', 'Cardiff'], ['Nordirland', 'Belfast'],
]);

export const regionTopics: Topic[] = [usStates, canadaAustralia, franceSpain, brazilUk];
