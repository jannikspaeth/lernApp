import type { Topic } from '../wissen/types';
import { GROUP } from './cats';
import { cards, pairs } from './helpers';

const G = GROUP.staedte;

export const biggestCities = pairs('groesste-staedte', ['Biggest cities', 'Größte Städte der Welt'], G, k => `Welche ist die größte Stadt ${k}?`, [
  ['der Erde (Ballungsraum)', 'Tokio', 'Rund 37 Mio. Einwohner im Großraum.'],
  ['Europas (Stadtgebiet)', 'Istanbul', 'Rund 15 Mio. Einwohner.'],
  ['Deutschlands', 'Berlin'], ['Österreichs', 'Wien'], ['der Schweiz', 'Zürich'], ['Italiens', 'Rom'], ['Frankreichs', 'Paris'], ['Spaniens', 'Madrid'],
  ['des Vereinigten Königreichs', 'London'], ['der USA', 'New York'], ['Kanadas', 'Toronto'], ['Brasiliens', 'São Paulo'], ['Australiens', 'Sydney'],
  ['Afrikas', 'Kairo', 'Der Großraum Lagos ist ebenfalls sehr groß.'], ['Chinas', 'Shanghai'], ['Russlands', 'Moskau'], ['Mexikos', 'Mexiko-Stadt'],
  ['Argentiniens', 'Buenos Aires'], ['Nigerias', 'Lagos'], ['Pakistans', 'Karatschi'], ['Indonesiens', 'Jakarta'], ['Japans', 'Tokio'],
  ['Südamerikas', 'São Paulo'], ['Südkoreas', 'Seoul'], ['der Türkei', 'Istanbul'],
]);

export const notCapital = pairs('groesste-nicht-hauptstadt', ['Biggest city, not the capital', 'Größte Stadt, aber nicht Hauptstadt'], G,
  k => `Welche Stadt ist die größte ${k}, obwohl sie nicht die Hauptstadt ist?`, [
    ['Australiens', 'Sydney', 'Hauptstadt ist Canberra.'], ['Kanadas', 'Toronto', 'Hauptstadt ist Ottawa.'], ['der USA', 'New York', 'Hauptstadt ist Washington, D. C.'],
    ['Brasiliens', 'São Paulo', 'Hauptstadt ist Brasília.'], ['der Türkei', 'Istanbul', 'Hauptstadt ist Ankara.'], ['der Schweiz', 'Zürich', 'Bern ist der Bundessitz.'],
    ['Marokkos', 'Casablanca', 'Hauptstadt ist Rabat.'], ['Neuseelands', 'Auckland', 'Hauptstadt ist Wellington.'], ['Pakistans', 'Karatschi', 'Hauptstadt ist Islamabad.'],
    ['Nigerias', 'Lagos', 'Hauptstadt ist Abuja.'], ['Südafrikas', 'Johannesburg', 'Verwaltungssitz ist Pretoria.'], ['Indiens', 'Mumbai', 'Hauptstadt ist Neu-Delhi.'],
    ['Kasachstans', 'Almaty', 'Hauptstadt ist Astana.'], ['Tansanias', 'Daressalam', 'Hauptstadt ist Dodoma.'], ['Chinas', 'Shanghai', 'Hauptstadt ist Peking.'],
    ['Vietnams', 'Ho-Chi-Minh-Stadt', 'Hauptstadt ist Hanoi.'], ['Myanmars', 'Rangun (Yangon)', 'Hauptstadt ist Naypyidaw.'],
  ]);

export const riversOfCities = pairs('stadt-fluss', ['River through the city', 'Stadt am Fluss'], G, k => `Welcher Fluss fließt durch ${k}?`, [
  ['Paris', 'Seine'], ['London', 'Themse'], ['Rom', 'Tiber'], ['Wien', 'Donau'], ['Budapest', 'Donau'], ['Belgrad', 'Donau und Save'], ['Prag', 'Moldau'],
  ['Berlin', 'Spree'], ['Köln', 'Rhein'], ['Frankfurt am Main', 'Main'], ['Hamburg', 'Elbe'], ['Dresden', 'Elbe'], ['München', 'Isar'], ['Bremen', 'Weser'],
  ['Basel', 'Rhein'], ['Zürich', 'Limmat'], ['Bern', 'Aare'], ['Florenz', 'Arno'], ['Lissabon', 'Tejo'], ['Madrid', 'Manzanares'], ['Sevilla', 'Guadalquivir'],
  ['Kairo', 'Nil'], ['Bagdad', 'Tigris'], ['Moskau', 'Moskwa'], ['Sankt Petersburg', 'Newa'], ['Kiew', 'Dnepr'], ['Warschau', 'Weichsel'], ['Straßburg', 'Ill'],
  ['Lyon', 'Rhône und Saône'], ['Bordeaux', 'Garonne'], ['Dublin', 'Liffey'], ['Glasgow', 'Clyde'], ['Washington, D. C.', 'Potomac'], ['New Orleans', 'Mississippi'],
  ['Bangkok', 'Chao Phraya'], ['Kalkutta', 'Hugli'], ['Varanasi', 'Ganges'], ['Regensburg', 'Donau'], ['Heidelberg', 'Neckar'], ['Trier', 'Mosel'], ['Würzburg', 'Main'],
  ['Hannover', 'Leine'], ['Nürnberg', 'Pegnitz'],
]);

export const landmarks = pairs('wahrzeichen', ['Landmarks', 'Wahrzeichen der Stadt'], G, k => `In welcher Stadt steht ${k}?`, [
  ['der Eiffelturm', 'Paris'], ['Big Ben', 'London'], ['das Kolosseum', 'Rom'], ['das Brandenburger Tor', 'Berlin'], ['die Akropolis', 'Athen'],
  ['die Freiheitsstatue', 'New York'], ['die Sagrada Família', 'Barcelona'], ['der Schiefe Turm', 'Pisa'], ['das Opernhaus mit den Segeldächern', 'Sydney'],
  ['der Burj Khalifa', 'Dubai'], ['die Christusstatue (Cristo Redentor)', 'Rio de Janeiro'], ['das Taj Mahal', 'Agra'], ['die Verbotene Stadt', 'Peking'],
  ['der Kreml', 'Moskau'], ['die Hagia Sophia', 'Istanbul'], ['die Petronas Towers', 'Kuala Lumpur'], ['das Atomium', 'Brüssel'], ['die Kleine Meerjungfrau', 'Kopenhagen'],
  ['das Riesenrad im Prater', 'Wien'], ['das Schloss Schönbrunn', 'Wien'], ['die Karlsbrücke', 'Prag'], ['der Markusplatz', 'Venedig'], ['die Alhambra', 'Granada'],
  ['die Golden Gate Bridge', 'San Francisco'], ['der CN Tower', 'Toronto'], ['der Kölner Dom', 'Köln'], ['die Frauenkirche', 'Dresden'], ['die Elbphilharmonie', 'Hamburg'],
  ['die Westmauer (Klagemauer)', 'Jerusalem'], ['die Marina Bay Sands', 'Singapur'], ['der Tokyo Skytree', 'Tokio'], ['der Table Mountain', 'Kapstadt'],
  ['der Fernsehturm am Alexanderplatz', 'Berlin'], ['der Dogenpalast', 'Venedig'], ['der Petersdom', 'Vatikanstadt (Rom)'], ['die Blaue Moschee', 'Istanbul'],
  ['die Ramblas', 'Barcelona'], ['der Louvre', 'Paris'], ['der Times Square', 'New York'], ['der Hollywood-Schriftzug', 'Los Angeles'],
]);

export const sameNames = cards('gleiche-namen', ['Cities with the same name', 'Städte mit gleichen Namen'], G, [
  ['In welchem Land liegt Alexandria, die berühmte antike Hafenstadt?', 'Ägypten', ['Griechenland', 'Türkei', 'Libyen'], 'Es gibt aber auch ein Alexandria in Virginia (USA).'],
  ['In welchem US-Bundesstaat liegt das Birmingham, das nicht in England liegt?', 'Alabama', ['Georgia', 'Texas', 'Ohio']],
  ['Welcher US-Bundesstaat trägt denselben Namen wie ein Land im Kaukasus?', 'Georgia', ['Virginia', 'Kentucky', 'Montana'], 'Georgien und Georgia haben denselben Namen, aber nichts miteinander zu tun.'],
  ['In welchem US-Bundesstaat liegt ein Paris, das nicht in Frankreich liegt?', 'Texas', ['Nevada', 'Maine', 'Alaska'], 'Es gibt außerdem ein Paris in Tennessee, Kentucky und Illinois.'],
  ['In welchem Land liegt das Cambridge, das nicht in England liegt?', 'USA (Massachusetts)', ['Kanada', 'Australien', 'Irland'], 'Mit Harvard und dem MIT.'],
  ['In welchem Land liegt ein Hamburg, das nicht in Deutschland liegt?', 'USA (New York)', ['Kanada', 'Brasilien', 'Südafrika'], 'Es gibt mehrere kleine Orte namens Hamburg in den USA.'],
  ['Welche Stadt gibt es als San José in Costa Rica, aber auch in den USA?', 'San José (Kalifornien)', ['San José (Texas)', 'San José (Florida)', 'San José (Ohio)'], 'Die größte Stadt des Silicon Valley.'],
  ['Wo liegt das Newcastle, das nicht in England liegt?', 'Australien (New South Wales)', ['Kanada', 'Irland', 'Neuseeland'], 'Newcastle ist dort ein wichtiger Kohlehafen.'],
  ['Wo liegt das Sydney, das nicht Australiens Metropole ist?', 'Kanada (Nova Scotia)', ['USA (Ohio)', 'Neuseeland', 'Südafrika']],
  ['Welcher Name kommt in Europa mehrfach vor: Frankfurt am Main und …?', 'Frankfurt (Oder)', ['Frankfurt-Süd', 'Frankfurt (Elbe)', 'Frankfurt (Rhein)']],
  ['Welches Land hat Städte mit den Namen Rom, Athen und Paris in den USA?', 'USA', ['Kanada', 'Mexiko', 'Brasilien'], 'Die Gründer gaben gern europäischen Vorbildern Namen.'],
  ['Wo liegt Venedig außer in Italien?', 'Venice, Florida (USA)', ['Venedig, Slowenien', 'Venedig, Kroatien', 'Venedig, Mexiko']],
]);

export const nicknames = pairs('spitznamen', ['City nicknames', 'Spitznamen von Städten'], G, k => `Welche Stadt wird „${k}“ genannt?`, [
  ['Big Apple', 'New York'], ['Ewige Stadt', 'Rom'], ['Stadt der Liebe', 'Paris', 'Auch „Stadt der Lichter“.'], ['Windy City', 'Chicago'], ['Sin City', 'Las Vegas'],
  ['Stadt der Engel', 'Los Angeles'], ['Motor City', 'Detroit'], ['Big Easy', 'New Orleans'], ['Goldene Stadt', 'Prag', 'Auch „Stadt der hundert Türme“.'],
  ['Rosa Stadt', 'Jaipur'], ['Elbflorenz', 'Dresden'], ['Spree-Athen', 'Berlin'], ['Isar-Athen', 'München'], ['Tor zur Welt', 'Hamburg'],
  ['Mile High City', 'Denver'], ['City of Brotherly Love', 'Philadelphia'], ['Beantown', 'Boston'], ['Music City', 'Nashville'], ['Emerald City', 'Seattle'],
  ['Perle der Adria', 'Dubrovnik'], ['Weiße Stadt (am Mittelmeer)', 'Tel Aviv'],
  ['Stadt der Sieben Hügel', 'Rom', 'Auch Lissabon wird so genannt.'], ['Venedig des Nordens (Gracht-Stadt)', 'Amsterdam'],
  ['Stadt der Tausend Minarette', 'Kairo'], ['Stadt der Kanäle und Gondeln', 'Venedig'], ['Pforte zum Westen', 'St. Louis', 'Der Gateway Arch.'],
]);

export const cityTopics: Topic[] = [biggestCities, notCapital, riversOfCities, landmarks, sameNames, nicknames];
