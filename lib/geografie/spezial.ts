import type { Topic } from '../wissen/types';
import { GROUP } from './cats';
import { cards, pairs, trueFalse } from './helpers';

const G = GROUP.spezial;

export const myths = trueFalse('mythen', ['True or false: myths', 'Wahr oder falsch: Geografie-Mythen'], G, [
  ['Die Chinesische Mauer ist mit bloßem Auge vom Mond aus zu sehen.', false, 'Sie ist zu schmal; selbst aus der Erdumlaufbahn ist sie kaum erkennbar.'],
  ['Der Mount Everest ist der Berg mit dem größten Abstand zum Erdmittelpunkt.', false, 'Das ist der Chimborazo in Ecuador.'],
  ['Australien ist ein Kontinent und ein Land zugleich.', true, 'Mit Tasmanien, aber ohne Neuguinea und Neuseeland.'],
  ['Die Hauptstadt der Schweiz heißt Zürich.', false, 'Bern ist Bundesstadt.'],
  ['Kanada hat mehr Seen als alle anderen Länder zusammen.', true, 'Weltweit rund 60 % der Seen liegen in Kanada.'],
  ['Der Nil ist der längste Fluss der Erde.', true, 'Rund 6.650 km – der Amazonas ist je nach Messung vergleichbar.'],
  ['Die Sahara ist die größte Wüste der Erde.', false, 'Größte Wüste ist die Antarktis; die Sahara ist die größte Heißwüste.'],
  ['Der Atlantik wird breiter.', true, 'Durch die Plattenverschiebung etwa 2,5 cm pro Jahr.'],
  ['Die Erde ist eine perfekte Kugel.', false, 'Sie ist an den Polen abgeplattet (Geoid).'],
  ['Es gibt einen Staat, der komplett von einem anderen Staat umschlossen ist (z. B. San Marino).', true, 'San Marino, der Vatikan und Lesotho.'],
  ['Der Äquator verläuft durch Brasilien.', true, 'Außerdem durch Ecuador, Kolumbien, Gabun, Kongo, Uganda, Kenia, Somalia und Indonesien.'],
  ['Die Hauptstadt der USA ist New York.', false, 'Washington, D. C.'],
  ['Russland liegt komplett in Europa.', false, 'Der größere Teil liegt in Asien (Sibirien).'],
  ['Der Pazifik ist größer als alle Landflächen der Erde zusammen.', true, 'Rund 165 Mio. km² gegenüber 149 Mio. km² Land.'],
  ['Die Türkei liegt nur in Asien.', false, 'Ein kleiner Teil (Ostthrakien) liegt in Europa.'],
  ['Ägypten liegt nur in Afrika.', false, 'Die Sinai-Halbinsel liegt in Asien.'],
  ['Berlin liegt weiter nördlich als London.', true, 'London liegt bei etwa 51,5° N, Berlin bei etwa 52,5° N.'],
  ['Es gibt keinen Fluss in Saudi-Arabien, der ganzjährig Wasser führt.', true, 'Das Land hat keine permanenten Flüsse.'],
  ['Grönland ist größer als Afrika.', false, 'Afrika ist rund 14-mal so groß, Grönland wirkt nur auf Mercator-Karten so groß.'],
  ['Die Datumsgrenze verläuft schnurgerade entlang des 180. Längengrads.', false, 'Sie macht Umwege, um Staaten nicht zu teilen.'],
  ['Die Antarktis hat keine ständige Bevölkerung.', true, 'Nur Forschende leben dort zeitweise.'],
  ['Island liegt in Nordamerika.', false, 'Es liegt auf der Grenze von Eurasischer und Nordamerikanischer Platte, gehört aber zu Europa.'],
  ['Alle Hauptstädte liegen am Meer.', false, 'Viele Hauptstädte liegen im Binnenland, z. B. Berlin oder Wien.'],
  ['Die Niederlande und Holland sind dasselbe.', false, 'Holland sind nur zwei der zwölf Provinzen.'],
  ['Kairo ist die größte Stadt Afrikas.', true, 'Mit rund 21 Mio. im Großraum.'],
]);

export const worldHeritage = pairs('weltkulturerbe', ['World Heritage sites', 'Weltkulturerbe-Stätten'], G, k => `In welchem Land liegt ${k}?`, [
  ['Machu Picchu', 'Peru'], ['die Akropolis von Athen', 'Griechenland'], ['das Taj Mahal', 'Indien'], ['Petra', 'Jordanien'], ['Angkor Wat', 'Kambodscha'],
  ['die Pyramiden von Gizeh', 'Ägypten'], ['die Verbotene Stadt', 'China'], ['das Great Barrier Reef', 'Australien'], ['die Galápagosinseln', 'Ecuador'],
  ['der Kölner Dom', 'Deutschland'], ['die Altstadt von Dubrovnik', 'Kroatien'], ['der Kilimandscharo-Nationalpark', 'Tansania'], ['Chichén Itzá', 'Mexiko'],
  ['die Altstadt von Salzburg', 'Österreich'], ['Schloss Schönbrunn', 'Österreich'], ['die Altstadt von Bern', 'Schweiz'], ['der Aletschgletscher', 'Schweiz'],
  ['Pompeji', 'Italien'], ['Venedig und seine Lagune', 'Italien'], ['die Sagrada Família', 'Spanien'], ['die Alhambra', 'Spanien'], ['Mont-Saint-Michel', 'Frankreich'],
  ['das Schloss Versailles', 'Frankreich'], ['Stonehenge', 'Vereinigtes Königreich'], ['Hallstatt', 'Österreich'], ['Rapa Nui (Osterinsel)', 'Chile'],
  ['die Hagia Sophia', 'Türkei'], ['Göbekli Tepe', 'Türkei'], ['die Iguazú-Wasserfälle', 'Argentinien und Brasilien'], ['Ha-Long-Bucht', 'Vietnam'], ['Borobudur', 'Indonesien'],
  ['der Fuji', 'Japan'], ['Himeji-Burg', 'Japan'], ['Bagan', 'Myanmar'], ['Timbuktu', 'Mali'], ['die Felsenkirchen von Lalibela', 'Äthiopien'],
  ['die Dolomiten', 'Italien'], ['das Wattenmeer', 'Deutschland, Dänemark und Niederlande'], ['die Wartburg', 'Deutschland'], ['die Museumsinsel Berlin', 'Deutschland'],
]);

export const whereAmI = cards('wo-bin-ich', ['Where am I?', '„Wo bin ich?“ anhand von Hinweisen'], G, [
  ['Hinweise: Hauptstadt – am Tiber – Kolosseum – Vatikan ganz in der Nähe. Wo bin ich?', 'Rom', ['Florenz', 'Venedig', 'Athen']],
  ['Hinweise: Stadt an zwei Kontinenten – Hagia Sophia – Bosporus. Wo bin ich?', 'Istanbul', ['Ankara', 'Athen', 'Kairo']],
  ['Hinweise: Land – vier Amtssprachen – Matterhorn – Banken und Schokolade. Wo bin ich?', 'Schweiz', ['Österreich', 'Belgien', 'Liechtenstein']],
  ['Hinweise: Inselstaat – Kängurus – Uluru – Canberra. Wo bin ich?', 'Australien', ['Neuseeland', 'Südafrika', 'Papua-Neuguinea']],
  ['Hinweise: Stadt – Sagrada Família – Ramblas – Katalonien. Wo bin ich?', 'Barcelona', ['Madrid', 'Valencia', 'Lissabon']],
  ['Hinweise: Land – Fjorde – Mitternachtssonne – Lofoten – Hauptstadt Oslo. Wo bin ich?', 'Norwegen', ['Schweden', 'Finnland', 'Island']],
  ['Hinweise: Stadt – Moskwa – Roter Platz – Kreml. Wo bin ich?', 'Moskau', ['Sankt Petersburg', 'Kiew', 'Minsk']],
  ['Hinweise: Land – Pyramiden – Nil – Hauptstadt Kairo. Wo bin ich?', 'Ägypten', ['Sudan', 'Libyen', 'Jordanien']],
  ['Hinweise: Stadt – Kanäle – Gondeln – Lagune – Markusplatz. Wo bin ich?', 'Venedig', ['Amsterdam', 'Florenz', 'Triest']],
  ['Hinweise: Land – Andenstaat – Inkas – Machu Picchu – Hauptstadt Lima. Wo bin ich?', 'Peru', ['Bolivien', 'Ecuador', 'Chile']],
  ['Hinweise: Insel – Vulkane – Geysire – Reykjavik. Wo bin ich?', 'Island', ['Grönland', 'Färöer', 'Irland']],
  ['Hinweise: Stadt – Freiheitsstatue – Broadway – Central Park. Wo bin ich?', 'New York', ['Chicago', 'Boston', 'Washington']],
  ['Hinweise: Stadt – Spree – Brandenburger Tor – Mauer bis 1989. Wo bin ich?', 'Berlin', ['Hamburg', 'Potsdam', 'Leipzig']],
  ['Hinweise: Land – Savanne – Kilimandscharo – Serengeti – Sansibar. Wo bin ich?', 'Tansania', ['Kenia', 'Uganda', 'Sambia']],
  ['Hinweise: Stadt – Opernhaus am Hafen – Harbour Bridge – größte Stadt Australiens. Wo bin ich?', 'Sydney', ['Melbourne', 'Canberra', 'Perth']],
  ['Hinweise: Land – Fjorde, Seen, Sauna – Hauptstadt Helsinki. Wo bin ich?', 'Finnland', ['Schweden', 'Estland', 'Norwegen']],
  ['Hinweise: Stadt – Eiffelturm – Seine – Louvre – Montmartre. Wo bin ich?', 'Paris', ['Lyon', 'Brüssel', 'Straßburg']],
  ['Hinweise: Land – Eisberge, Gletscher, Inuit – größte Insel der Erde. Wo bin ich?', 'Grönland', ['Island', 'Kanada', 'Svalbard']],
  ['Hinweise: Stadt – Christusstatue – Zuckerhut – Copacabana. Wo bin ich?', 'Rio de Janeiro', ['São Paulo', 'Salvador', 'Buenos Aires']],
  ['Hinweise: Land – Kirschblüte – Fuji – Shinkansen – Tokio. Wo bin ich?', 'Japan', ['Südkorea', 'China', 'Taiwan']],
  ['Hinweise: Stadt – Hafen mit Kranichen – Elbe – Reeperbahn. Wo bin ich?', 'Hamburg', ['Bremen', 'Kiel', 'Rostock']],
  ['Hinweise: Land – Walzer – Sachertorte – Alpen – Hauptstadt an der Donau. Wo bin ich?', 'Österreich', ['Ungarn', 'Slowakei', 'Tschechien']],
  ['Hinweise: Stadt – Tafelberg – Robben Island – Kap der Guten Hoffnung nahe. Wo bin ich?', 'Kapstadt', ['Johannesburg', 'Durban', 'Pretoria']],
]);

export const specialTopics: Topic[] = [myths, worldHeritage, whereAmI];
