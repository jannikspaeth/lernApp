import type { Topic } from '../wissen/types';
import { GROUP } from './cats';
import { cards, pairs } from './helpers';

const G = GROUP.physisch;

export const mountains = pairs('berge', ['Highest mountains', 'Höchste Berge'], G, k => `Wie heißt der höchste Berg ${k}?`, [
  ['der Erde', 'Mount Everest', 'Rund 8.849 m, im Himalaya an der Grenze von Nepal und China.'],
  ['Afrikas', 'Kilimandscharo', '5.895 m, ein Vulkan in Tansania.'],
  ['Südamerikas', 'Aconcagua', '6.961 m in Argentinien – der höchste Berg außerhalb Asiens.'],
  ['Nordamerikas', 'Denali', '6.190 m in Alaska, früher Mount McKinley.'],
  ['Europas (Russland, Kaukasus)', 'Elbrus', '5.642 m.'],
  ['der Alpen', 'Mont Blanc', 'Rund 4.806 m an der Grenze von Frankreich und Italien.'],
  ['Antarktikas', 'Mount Vinson', '4.892 m.'],
  ['Ozeaniens', 'Puncak Jaya', 'Rund 4.884 m, in Neuguinea (Indonesien).'],
  ['Deutschlands', 'Zugspitze', '2.962 m.'],
  ['Österreichs', 'Großglockner', '3.798 m.'],
  ['der Schweiz', 'Dufourspitze', '4.634 m im Monte-Rosa-Massiv.'],
  ['Japans', 'Fuji', '3.776 m.'],
  ['der Türkei', 'Ararat', '5.137 m.'],
  ['Neuseelands', 'Aoraki / Mount Cook', '3.724 m.'],
  ['Kenias', 'Mount Kenya', '5.199 m.'],
  ['Kanadas', 'Mount Logan', '5.959 m.'],
  ['Mexikos', 'Pico de Orizaba', '5.636 m, ein Vulkan.'],
  ['Spaniens (mit den Kanaren)', 'Teide', '3.718 m auf Teneriffa.'],
  ['des Irans', 'Damavand', '5.610 m.'],
  ['Australiens (Festland)', 'Mount Kosciuszko', '2.228 m.'],
]);

export const mountainFacts = cards('berge-fakten', ['Mountain facts', 'Berge: Rekorde und Fakten'], G, [
  ['Welcher Berg ist der zweithöchste der Erde?', 'K2', ['Kangchendzönga', 'Lhotse', 'Makalu'], '8.611 m im Karakorum.'],
  ['Welcher Berg hat den größten Abstand zum Erdmittelpunkt?', 'Chimborazo', ['Mount Everest', 'Kilimandscharo', 'Denali'], 'Wegen der Abplattung der Erde am Äquator.'],
  ['Wie viele Achttausender gibt es?', '14', ['10', '12', '20']],
  ['In welchem Gebirge liegt der K2?', 'Karakorum', ['Himalaya', 'Hindukusch', 'Pamir']],
  ['In welchem Gebirge liegt das Matterhorn?', 'Alpen', ['Pyrenäen', 'Karpaten', 'Apenninen']],
  ['Wie heißt das längste Gebirge der Erde (an Land)?', 'Anden', ['Rocky Mountains', 'Himalaya', 'Alpen'], 'Rund 7.000 km entlang der Westküste Südamerikas.'],
  ['In welchem Gebirge liegt der Mount Everest?', 'Himalaya', ['Karakorum', 'Kunlun', 'Altai']],
  ['Welches Gebirge trennt Europa und Asien?', 'Ural', ['Kaukasus', 'Karpaten', 'Balkan']],
  ['Welches Gebirge trennt Frankreich und Spanien?', 'Pyrenäen', ['Alpen', 'Vogesen', 'Apenninen']],
  ['Welches Gebirge verläuft durch ganz Italien?', 'Apenninen', ['Alpen', 'Dolomiten', 'Karpaten']],
  ['Wie heißt der höchste Berg des Harzes?', 'Brocken', ['Feldberg', 'Zugspitze', 'Watzmann'], '1.141 m.'],
  ['In welchem Gebirge liegt der Feldberg (1.493 m)?', 'Schwarzwald', ['Harz', 'Bayerischer Wald', 'Eifel'], 'Der höchste Berg der deutschen Mittelgebirge außerhalb der Alpen.'],
  ['In welchem Gebirge liegt der Fichtelberg (höchster Berg Sachsens)?', 'Erzgebirge', ['Harz', 'Riesengebirge', 'Thüringer Wald']],
  ['In welchem Land liegen die Dolomiten?', 'Italien', ['Österreich', 'Schweiz', 'Slowenien']],
  ['Wo liegen die Rocky Mountains?', 'Im Westen Nordamerikas', ['Im Osten der USA', 'In Südamerika', 'In Asien']],
  ['Wie heißt das Gebirge im Osten der USA?', 'Appalachen', ['Rocky Mountains', 'Sierra Nevada', 'Anden']],
  ['In welchem Land liegt der Uluru (Ayers Rock)?', 'Australien', ['Neuseeland', 'Südafrika', 'Namibia'], 'Ein heiliger Inselberg der Aborigines.'],
  ['Welcher Berg gilt in Griechenland als Sitz der Götter?', 'Olymp', ['Ida', 'Athos', 'Parnass']],
  ['In welchem Gebirge liegt Machu Picchu?', 'Anden', ['Sierra Madre', 'Rocky Mountains', 'Himalaya'], 'Die Inkastadt in Peru liegt auf rund 2.400 m.'],
]);

export const rivers = pairs('fluesse', ['Rivers and their mouths', 'Flüsse und ihre Mündungen'], G, k => `In welches Meer mündet ${k}?`, [
  ['die Donau', 'Schwarzes Meer', 'Sie fließt durch zehn Länder.'], ['der Rhein', 'Nordsee', 'Bei Rotterdam.'], ['die Elbe', 'Nordsee', 'Bei Cuxhaven.'],
  ['die Oder', 'Ostsee', 'Über das Stettiner Haff.'], ['die Weser', 'Nordsee'], ['die Wolga', 'Kaspisches Meer'], ['der Nil', 'Mittelmeer'],
  ['der Amazonas', 'Atlantik'], ['der Mississippi', 'Golf von Mexiko'], ['der Ganges', 'Golf von Bengalen'], ['der Jangtse', 'Ostchinesisches Meer'],
  ['der Gelbe Fluss (Huang He)', 'Bohai-See (Gelbes Meer)'], ['der Mekong', 'Südchinesisches Meer'], ['der Kongo', 'Atlantik'], ['die Rhône', 'Mittelmeer'],
  ['die Seine', 'Ärmelkanal'], ['die Loire', 'Atlantik'], ['der Po', 'Adria'], ['der Tiber', 'Tyrrhenisches Meer'], ['der Ebro', 'Mittelmeer'],
  ['der Tejo', 'Atlantik'], ['die Themse', 'Nordsee'], ['der Indus', 'Arabisches Meer'], ['Euphrat und Tigris (als Schatt al-Arab)', 'Persischer Golf'],
  ['die Lena', 'Laptewsee'], ['der Ob', 'Karasee'], ['der Orinoco', 'Atlantik'], ['der Sambesi', 'Indischer Ozean'], ['der Niger', 'Golf von Guinea'],
  ['der Colorado River', 'Golf von Kalifornien'], ['der Murray', 'Indischer Ozean'], ['der Dnepr', 'Schwarzes Meer'], ['der Don', 'Asowsches Meer'],
]);

export const riverFacts = cards('fluesse-fakten', ['Longest rivers & facts', 'Längste Flüsse und Fakten'], G, [
  ['Welcher ist der längste Fluss der Erde?', 'Nil', ['Amazonas', 'Jangtse', 'Mississippi'], 'Rund 6.650 km – der Amazonas ist je nach Messung gleich lang oder wasserreicher.'],
  ['Welcher Fluss führt die größte Wassermenge?', 'Amazonas', ['Kongo', 'Nil', 'Jangtse']],
  ['Welcher ist der längste Fluss Europas?', 'Wolga', ['Donau', 'Rhein', 'Dnepr'], 'Rund 3.530 km.'],
  ['Welcher ist der längste Fluss Asiens?', 'Jangtse', ['Gelber Fluss', 'Mekong', 'Ganges']],
  ['Welcher ist der längste Fluss Deutschlands?', 'Rhein', ['Elbe', 'Donau', 'Main'], 'Der Rhein hat rund 865 km in Deutschland.'],
  ['Welcher Fluss ist der zweitlängste Europas?', 'Donau', ['Rhein', 'Elbe', 'Ural']],
  ['Durch wie viele Länder fließt die Donau?', 'Zehn', ['Fünf', 'Sieben', 'Zwölf']],
  ['Welche Stadt liegt nicht an der Donau?', 'Berlin', ['Wien', 'Budapest', 'Belgrad']],
  ['Welcher Fluss fließt durch Paris?', 'Seine', ['Loire', 'Rhône', 'Garonne']],
  ['Welcher Fluss fließt durch Rom?', 'Tiber', ['Arno', 'Po', 'Etsch']],
  ['Welcher Fluss fließt durch London?', 'Themse', ['Severn', 'Mersey', 'Trent']],
  ['Welcher Fluss fließt durch Köln?', 'Rhein', ['Main', 'Mosel', 'Ruhr']],
  ['Welcher Fluss fließt durch Hamburg?', 'Elbe', ['Weser', 'Oder', 'Rhein']],
  ['Welcher Fluss fließt durch Kairo?', 'Nil', ['Euphrat', 'Jordan', 'Niger']],
  ['Welcher Fluss bildet die Grenze zwischen Deutschland und Polen?', 'Oder', ['Elbe', 'Weichsel', 'Weser'], 'Zusammen mit der Lausitzer Neiße.'],
  ['Welcher Fluss fließt durch Prag?', 'Moldau', ['Elbe', 'Donau', 'Oder']],
  ['Welcher Fluss fließt durch Wien?', 'Donau', ['Inn', 'Enns', 'Mur']],
  ['In welchem Land liegt das Mündungsdelta des Nils?', 'Ägypten', ['Sudan', 'Libyen', 'Äthiopien']],
  ['Aus welchen Quellflüssen entsteht die Donau bei Donaueschingen?', 'Brigach und Breg', ['Isar und Inn', 'Iller und Lech', 'Main und Neckar']],
  ['Welcher Fluss mündet bei Koblenz in den Rhein?', 'Mosel', ['Main', 'Neckar', 'Ahr'], 'Am Deutschen Eck.'],
  ['Welcher Fluss mündet bei Mainz in den Rhein?', 'Main', ['Neckar', 'Mosel', 'Lahn']],
]);

export const lakes = cards('seen', ['Lakes of the world', 'Seen der Welt'], G, [
  ['Welcher ist der tiefste See der Erde?', 'Baikalsee', ['Tanganjikasee', 'Titicacasee', 'Genfer See'], 'Rund 1.640 m tief, in Sibirien.'],
  ['Welcher ist der größte See der Erde (nach Fläche)?', 'Kaspisches Meer', ['Oberer See', 'Victoriasee', 'Baikalsee'], 'Ein Salzsee, über 370.000 km².'],
  ['Welcher ist der größte Süßwassersee der Erde nach Fläche?', 'Oberer See (Lake Superior)', ['Victoriasee', 'Baikalsee', 'Michigansee']],
  ['Welcher ist der größte See Afrikas?', 'Victoriasee', ['Tanganjikasee', 'Tschadsee', 'Malawisee'], 'Die Nilquelle liegt dort.'],
  ['Welcher große schiffbare See liegt am höchsten?', 'Titicacasee', ['Genfer See', 'Baikalsee', 'Tschadsee'], 'Rund 3.800 m, Peru und Bolivien.'],
  ['Welcher ist der größte See Deutschlands (ganz innerhalb)?', 'Müritz', ['Chiemsee', 'Bodensee', 'Starnberger See'], 'Der Bodensee ist größer, liegt aber auch in Österreich und der Schweiz.'],
  ['Welcher See liegt an der Grenze von Deutschland, Österreich und der Schweiz?', 'Bodensee', ['Genfer See', 'Chiemsee', 'Gardasee']],
  ['Welcher See liegt zwischen der Schweiz und Frankreich?', 'Genfer See', ['Bodensee', 'Lago Maggiore', 'Neuenburger See']],
  ['Welcher See ist der größte Italiens?', 'Gardasee', ['Comer See', 'Lago Maggiore', 'Trasimenischer See']],
  ['Welcher ist der größte See Europas?', 'Ladogasee', ['Onegasee', 'Vänern', 'Bodensee']],
  ['Welcher flache Steppensee liegt an der Grenze von Österreich und Ungarn?', 'Neusiedler See', ['Attersee', 'Wörthersee', 'Plattensee'], 'Er ist nur etwa 1–2 m tief.'],
  ['Welcher See ist der größte Mitteleuropas (Ungarn)?', 'Plattensee (Balaton)', ['Neusiedler See', 'Bodensee', 'Gardasee']],
  ['Welche Seen bilden die Großen Seen Nordamerikas?', 'Oberer, Michigan-, Huron-, Erie- und Ontariosee', ['Titicaca, Maracaibo und Nicaragua', 'Winnipeg, Athabasca und Great Salt Lake', 'Victoria, Tanganjika und Malawi']],
  ['Welcher Salzsee in den USA liegt in Utah?', 'Great Salt Lake', ['Mono Lake', 'Salton Sea', 'Lake Tahoe']],
  ['Welcher See liegt am tiefsten Punkt der Erdoberfläche an Land?', 'Totes Meer', ['Kaspisches Meer', 'Baikalsee', 'Tschadsee'], 'Rund 430 m unter dem Meeresspiegel.'],
  ['An welchem See in Schottland soll ein Ungeheuer leben?', 'Loch Ness', ['Loch Lomond', 'Loch Tay', 'Loch Awe']],
  ['Welcher See schrumpfte seit den 1960er-Jahren stark durch Bewässerung?', 'Aralsee', ['Baikalsee', 'Tschadsee', 'Kaspisches Meer'], 'Heute größtenteils Wüste.'],
  ['Welcher See ist der größte Südamerikas?', 'Titicacasee', ['Maracaibosee', 'Poopó-See', 'Lago Argentino']],
  ['Welcher See ist der zweittiefste der Erde?', 'Tanganjikasee', ['Baikalsee', 'Kaspisches Meer', 'Malawisee']],
]);

export const deserts = pairs('wuesten', ['Deserts', 'Wüsten'], G, k => `Wo liegt die Wüste ${k}?`, [
  ['Sahara', 'Nordafrika', 'Größte Heißwüste der Erde (~9 Mio. km²).'], ['Gobi', 'Mongolei und China'], ['Kalahari', 'Südliches Afrika (Botswana, Namibia, Südafrika)'],
  ['Namib', 'Namibia', 'Eine der ältesten Wüsten der Erde.'], ['Atacama', 'Chile', 'Eine der trockensten Orte der Erde.'], ['Mojave', 'USA (Kalifornien, Nevada)'],
  ['Thar', 'Indien und Pakistan'], ['Negev', 'Israel'], ['Rub al-Chali', 'Arabische Halbinsel', 'Die „Leere Zone“.'],
  ['Taklamakan', 'China (Tarimbecken)'], ['Große Victoriawüste', 'Australien'], ['Sonora', 'Mexiko und USA'],
  ['Karakum', 'Turkmenistan'], ['Danakil', 'Äthiopien (Afar-Senke)', 'Einer der heißesten Orte der Erde.'], ['Libysche Wüste', 'Libyen, Ägypten, Sudan'],
]);

export const desertFacts = cards('wuesten-fakten', ['Desert facts', 'Wüsten: Rekorde und Fakten'], G, [
  ['Welche ist die größte Wüste der Erde (mit Eiswüsten)?', 'Antarktis', ['Sahara', 'Arktis', 'Gobi'], 'Eine Kältewüste mit kaum Niederschlag.'],
  ['Welche ist die größte Heißwüste der Erde?', 'Sahara', ['Gobi', 'Kalahari', 'Arabische Wüste']],
  ['Welche Wüste gilt als die trockenste der Erde?', 'Atacama', ['Sahara', 'Namib', 'Gobi']],
  ['Wie nennt man einzelne Wasserstellen in der Wüste?', 'Oasen', ['Wadis', 'Dünen', 'Salzpfannen']],
  ['Wie nennt man ein Trockental in der Wüste?', 'Wadi', ['Oase', 'Düne', 'Erg']],
  ['Wie nennt man eine Sandwüste mit Dünen?', 'Erg', ['Hamada', 'Reg', 'Wadi']],
  ['Welcher Kontinent hat keine große Heißwüste?', 'Europa', ['Afrika', 'Asien', 'Australien'], 'In Europa gibt es nur Halbwüsten.'],
  ['In welcher Wüste liegen die Pyramiden von Gizeh?', 'Libysche Wüste (Sahara)', ['Negev', 'Sinai', 'Namib']],
  ['Welches Tier wird „Schiff der Wüste“ genannt?', 'Kamel', ['Esel', 'Pferd', 'Lama'], 'Eigentlich Dromedar oder Trampeltier.'],
  ['Welches Kamel hat zwei Höcker?', 'Trampeltier', ['Dromedar', 'Lama', 'Alpaka']],
]);

export const volcanoes = pairs('vulkane', ['Volcanoes', 'Vulkane'], G, k => `Wo liegt der Vulkan ${k}?`, [
  ['Vesuv', 'Italien (bei Neapel)', 'Zerstörte 79 n. Chr. Pompeji und Herculaneum.'], ['Ätna', 'Sizilien', 'Der höchste aktive Vulkan Europas.'], ['Stromboli', 'Liparische Inseln (Italien)'],
  ['Krakatau', 'Indonesien', 'Ausbruch 1883.'], ['Fuji', 'Japan'], ['Mount St. Helens', 'USA (Bundesstaat Washington)', 'Ausbruch 1980.'],
  ['Eyjafjallajökull', 'Island', 'Der Ausbruch 2010 legte den Flugverkehr lahm.'], ['Popocatépetl', 'Mexiko'], ['Pinatubo', 'Philippinen', 'Ausbruch 1991.'],
  ['Kilauea', 'Hawaii'], ['Mauna Loa', 'Hawaii', 'Der größte aktive Vulkan der Erde nach Volumen.'], ['Mount Pelée', 'Martinique', 'Zerstörte 1902 die Stadt Saint-Pierre.'],
  ['Tambora', 'Indonesien', '1815: Ausbruch löste das „Jahr ohne Sommer“ aus.'], ['Teide', 'Teneriffa (Spanien)'], ['Cotopaxi', 'Ecuador'],
  ['Santorin (Thera)', 'Griechenland', 'Ausbruch um 1600 v. Chr.'], ['Ojos del Salado', 'Chile und Argentinien', 'Der höchste aktive Vulkan der Erde.'],
  ['Erebus', 'Antarktis', 'Der südlichste aktive Vulkan.'], ['Merapi', 'Indonesien (Java)'],
]);

export const volcanoFacts = cards('vulkan-fakten', ['Volcano facts', 'Vulkane: Fakten'], G, [
  ['Wie nennt man den Gürtel aktiver Vulkane rund um den Pazifik?', 'Pazifischer Feuerring', ['Mittelatlantischer Rücken', 'Großer Afrikanischer Grabenbruch', 'Alpidischer Gürtel']],
  ['Wie nennt man flüssiges Gestein unter der Erdoberfläche?', 'Magma', ['Lava', 'Asche', 'Tuff']],
  ['Wie nennt man flüssiges Gestein an der Erdoberfläche?', 'Lava', ['Magma', 'Basalt', 'Obsidian']],
  ['Welche Insel entstand 1963 vor Island durch einen Vulkanausbruch?', 'Surtsey', ['Jan Mayen', 'Heimaey', 'Kapverden'], 'Heute Naturschutzgebiet.'],
  ['Was ist eine Caldera?', 'Ein durch Einsturz entstandener Kessel', ['Ein Lavasee', 'Ein Aschenkegel', 'Ein Schildvulkan']],
  ['Welcher Vulkantyp ist flach und breit wie bei Hawaii?', 'Schildvulkan', ['Schichtvulkan', 'Maar', 'Aschenkegel']],
  ['In welchem Land liegt der Supervulkan Yellowstone?', 'USA (Wyoming)', ['Island', 'Italien', 'Japan']],
  ['Wie viele aktive Vulkane gibt es in Deutschland?', 'Keine', ['Drei', 'Zwei', 'Fünf'], 'Die Eifel ist vulkanisch geprägt, aktive Vulkane gibt es aber nicht.'],
  ['Welcher Ort wurde 79 n. Chr. unter Asche begraben?', 'Pompeji', ['Rom', 'Neapel', 'Paestum']],
  ['Wie heißt der größte Vulkan des Sonnensystems?', 'Olympus Mons', ['Mauna Kea', 'Vesuv', 'Mount Everest'], 'Auf dem Mars, rund 22 km hoch.'],
]);

export const islands = pairs('inseln', ['Islands', 'Inseln und Inselgruppen'], G, k => `Zu welchem Land gehört ${k}?`, [
  ['Grönland', 'Dänemark', 'Weitgehend selbstverwaltet.'], ['Korsika', 'Frankreich'], ['Sardinien', 'Italien'], ['Sizilien', 'Italien'], ['Kreta', 'Griechenland'],
  ['Mallorca', 'Spanien'], ['Teneriffa', 'Spanien'], ['Madeira', 'Portugal'], ['die Azoren', 'Portugal'], ['Sylt', 'Deutschland'], ['Rügen', 'Deutschland'],
  ['Gotland', 'Schweden'], ['Bornholm', 'Dänemark'], ['Hawaii', 'USA'], ['Tasmanien', 'Australien'], ['Sansibar', 'Tansania'], ['Bali', 'Indonesien'],
  ['die Galápagosinseln', 'Ecuador'], ['die Osterinsel', 'Chile'],
  ['die Färöer', 'Dänemark'], ['die Shetlandinseln', 'Vereinigtes Königreich'], ['Helgoland', 'Deutschland'], ['den Kykladen (Santorin, Mykonos)', 'Griechenland'],
  ['Réunion', 'Frankreich', 'Ein französisches Übersee-Département.'], ['Tahiti', 'Frankreich (Französisch-Polynesien)'],
]);

export const islandFacts = cards('inseln-fakten', ['Island facts', 'Inseln: Rekorde und Fakten'], G, [
  ['Welche ist die größte Insel der Erde?', 'Grönland', ['Neuguinea', 'Borneo', 'Madagaskar'], 'Rund 2,17 Mio. km² (Australien zählt als Kontinent).'],
  ['Welche ist die zweitgrößte Insel der Erde?', 'Neuguinea', ['Borneo', 'Madagaskar', 'Baffin Island']],
  ['Welche ist die größte Insel Europas?', 'Großbritannien', ['Island', 'Irland', 'Sizilien']],
  ['Welche ist die größte Insel im Mittelmeer?', 'Sizilien', ['Sardinien', 'Zypern', 'Kreta']],
  ['Welche ist die größte Insel Deutschlands?', 'Rügen', ['Usedom', 'Fehmarn', 'Sylt']],
  ['Welches Land besteht aus über 17.000 Inseln?', 'Indonesien', ['Philippinen', 'Japan', 'Malediven']],
  ['Welches Land besteht aus rund 7.600 Inseln?', 'Philippinen', ['Indonesien', 'Japan', 'Griechenland']],
  ['Welche Inselgruppe gehört zu Ecuador und ist für Darwins Finken bekannt?', 'Galápagos', ['Falkland', 'Azoren', 'Kanaren']],
  ['Welche Inselgruppe liegt vor Marokko und gehört zu Spanien?', 'Kanaren', ['Balearen', 'Azoren', 'Kapverden']],
  ['Welche Inselgruppe umfasst Mallorca, Menorca und Ibiza?', 'Balearen', ['Kanaren', 'Kykladen', 'Ionische Inseln']],
  ['Welche Inselgruppe im Atlantik gehört zu Portugal?', 'Azoren', ['Kanaren', 'Kapverden', 'Bermudas']],
  ['Welcher Inselstaat liegt östlich von Madagaskar?', 'Mauritius', ['Seychellen', 'Komoren', 'Malediven']],
  ['Welche Inselgruppe vor Argentinien war 1982 Kriegsschauplatz?', 'Falklandinseln', ['Südgeorgien', 'Feuerland', 'Galápagos']],
  ['Welche Insel nennt man „Insel der Götter“?', 'Bali', ['Java', 'Lombok', 'Sumatra']],
  ['Wie heißt die Inselgruppe aus rund 1.200 Atollen im Indischen Ozean?', 'Malediven', ['Seychellen', 'Komoren', 'Lakkadiven']],
]);

export const seasFacts = cards('meere', ['Oceans, seas & straits', 'Meere, Ozeane und Meerengen'], G, [
  ['Welcher ist der größte Ozean?', 'Pazifik', ['Atlantik', 'Indischer Ozean', 'Arktischer Ozean'], 'Rund 165 Mio. km².'],
  ['Wie viele Ozeane unterscheidet man üblicherweise?', 'Fünf', ['Drei', 'Vier', 'Sieben'], 'Pazifik, Atlantik, Indischer, Südlicher und Arktischer Ozean.'],
  ['Welcher ist der kleinste Ozean?', 'Arktischer Ozean', ['Indischer Ozean', 'Südlicher Ozean', 'Atlantik']],
  ['Wo liegt der tiefste bekannte Punkt der Ozeane?', 'Im Marianengraben', ['Im Puerto-Rico-Graben', 'Im Java-Graben', 'Im Atacamagraben'], 'Rund 11.000 m tief, im westlichen Pazifik.'],
  ['Welches Meer hat keine Küste?', 'Sargassosee', ['Rotes Meer', 'Schwarzes Meer', 'Karibisches Meer'], 'Sie wird von Strömungen im Atlantik begrenzt.'],
  ['Welches Meer ist das salzigste?', 'Totes Meer', ['Rotes Meer', 'Mittelmeer', 'Schwarzes Meer'], 'Rund 34 % Salzgehalt.'],
  ['Welche Meerenge verbindet Atlantik und Mittelmeer?', 'Straße von Gibraltar', ['Bosporus', 'Dardanellen', 'Bab al-Mandab']],
  ['Welche Meerenge teilt Istanbul?', 'Bosporus', ['Dardanellen', 'Gibraltar', 'Kattegat']],
  ['Welche Meerenge verbindet das Marmarameer mit der Ägäis?', 'Dardanellen', ['Bosporus', 'Skagerrak', 'Straße von Otranto']],
  ['Welche Meerenge trennt Asien und Nordamerika?', 'Beringstraße', ['Magellanstraße', 'Straße von Hormus', 'Malakkastraße']],
  ['Welche Meerenge trennt England und Frankreich?', 'Ärmelkanal (Straße von Dover)', ['Nordkanal', 'Skagerrak', 'Bosporus']],
  ['Welche Meerenge verbindet den Persischen Golf mit dem Golf von Oman?', 'Straße von Hormus', ['Malakkastraße', 'Bab al-Mandab', 'Suezkanal'], 'Ein Fünftel des weltweiten Ölhandels.'],
  ['Welche Meerenge liegt zwischen Malaysia/Singapur und Sumatra?', 'Malakkastraße', ['Sundastraße', 'Straße von Hormus', 'Taiwanstraße']],
  ['Welcher Kanal verbindet Mittelmeer und Rotes Meer?', 'Suezkanal', ['Panamakanal', 'Kielkanal', 'Rhein-Main-Donau-Kanal'], 'Eröffnet 1869.'],
  ['Welcher Kanal verbindet Atlantik und Pazifik?', 'Panamakanal', ['Suezkanal', 'Kielkanal', 'Nordostkanal'], 'Eröffnet 1914.'],
  ['Welcher Kanal verbindet Nord- und Ostsee?', 'Nord-Ostsee-Kanal', ['Suezkanal', 'Mittellandkanal', 'Elbe-Lübeck-Kanal']],
  ['Welche Meerenge trennt Dänemark und Schweden?', 'Öresund', ['Skagerrak', 'Kattegat', 'Großer Belt'], 'Mit der Öresundbrücke verbunden.'],
  ['Welche Meerenge trennt Sizilien vom italienischen Festland?', 'Straße von Messina', ['Straße von Otranto', 'Straße von Bonifacio', 'Straße von Sizilien']],
  ['Welches Meer liegt zwischen Italien und dem Balkan?', 'Adria', ['Ägäis', 'Tyrrhenisches Meer', 'Ionisches Meer']],
  ['Welches Meer liegt zwischen Griechenland und der Türkei?', 'Ägäis', ['Adria', 'Ionisches Meer', 'Schwarzes Meer']],
  ['Welcher Ozean liegt östlich von Afrika?', 'Indischer Ozean', ['Atlantik', 'Pazifik', 'Südlicher Ozean']],
  ['Welcher Ozean umgibt den Nordpol?', 'Arktischer Ozean', ['Atlantik', 'Südlicher Ozean', 'Pazifik']],
]);

export const waterfalls = pairs('wasserfaelle', ['Waterfalls', 'Wasserfälle'], G, k => `In welchem Land liegen ${k}?`, [
  ['die Angel Falls (höchster Wasserfall der Erde)', 'Venezuela', 'Rund 979 m hoch.'], ['die Victoriafälle', 'Sambia und Simbabwe', 'An der Grenze am Sambesi.'],
  ['die Niagarafälle', 'USA und Kanada'], ['die Iguazú-Wasserfälle', 'Argentinien und Brasilien'], ['der Rheinfall (größter Wasserfall Mitteleuropas)', 'Schweiz', 'Bei Schaffhausen.'],
  ['die Krimmler Wasserfälle', 'Österreich'], ['der Gullfoss', 'Island'], ['der Dettifoss', 'Island', 'Der wasserreichste Wasserfall Europas.'],
  ['die Yosemite Falls', 'USA'], ['die Kaieteur-Fälle', 'Guyana'], ['die Tugela-Fälle', 'Südafrika'], ['die Sutherland Falls', 'Neuseeland'],
  ['die Plitvicer Wasserfälle', 'Kroatien'], ['die Triberger Wasserfälle', 'Deutschland (Schwarzwald)'], ['die Gavarnie-Fälle', 'Frankreich'],
]);

export const climate = cards('klima', ['Climate & vegetation zones', 'Klimazonen und Vegetationszonen'], G, [
  ['Wie heißt die Klimazone rund um den Äquator?', 'Tropen', ['Subtropen', 'Gemäßigte Zone', 'Polarzone']],
  ['Wie heißt die Klimazone zwischen Tropen und gemäßigter Zone?', 'Subtropen', ['Tropen', 'Subpolare Zone', 'Polarzone']],
  ['In welcher Klimazone liegt Deutschland?', 'Gemäßigte Zone', ['Subtropen', 'Subpolare Zone', 'Tropen']],
  ['Wie heißt der Breitenkreis bei 23,4° Nord?', 'Wendekreis des Krebses', ['Wendekreis des Steinbocks', 'Polarkreis', 'Äquator']],
  ['Wie heißt der Breitenkreis bei 23,4° Süd?', 'Wendekreis des Steinbocks', ['Wendekreis des Krebses', 'Südlicher Polarkreis', 'Äquator']],
  ['Bei welcher Breite liegt der nördliche Polarkreis?', 'Etwa 66,5° Nord', ['Etwa 23,5° Nord', 'Etwa 45° Nord', 'Etwa 80° Nord']],
  ['Wie nennt man die baumlose Vegetationszone im hohen Norden?', 'Tundra', ['Taiga', 'Steppe', 'Savanne']],
  ['Wie nennt man den nördlichen Nadelwaldgürtel?', 'Taiga', ['Tundra', 'Savanne', 'Prärie'], 'Der größte zusammenhängende Wald der Erde.'],
  ['Wie nennt man die tropische Graslandschaft mit einzelnen Bäumen?', 'Savanne', ['Steppe', 'Prärie', 'Pampa']],
  ['Wie heißt die Graslandschaft Nordamerikas?', 'Prärie', ['Pampa', 'Steppe', 'Savanne']],
  ['Wie heißt die Graslandschaft Argentiniens?', 'Pampa', ['Prärie', 'Llanos', 'Steppe']],
  ['Wie heißt die Graslandschaft Eurasiens?', 'Steppe', ['Prärie', 'Pampa', 'Savanne']],
  ['Wie nennt man den dauerhaft gefrorenen Boden?', 'Permafrost', ['Gletscher', 'Tundra', 'Firn']],
  ['Wie heißen die Regenwinde in Südasien?', 'Monsun', ['Passat', 'Mistral', 'Föhn']],
  ['Wie heißen die beständigen Winde der Tropen?', 'Passatwinde', ['Monsune', 'Westwinde', 'Polarwinde']],
  ['Welcher Wind weht warm und trocken vom Alpenhauptkamm ins Tal?', 'Föhn', ['Mistral', 'Bora', 'Scirocco']],
  ['Wie heißt der kalte Fallwind in Südfrankreich?', 'Mistral', ['Föhn', 'Bora', 'Scirocco']],
  ['Welcher Kontinent hat den größten Regenwald?', 'Südamerika', ['Afrika', 'Asien', 'Australien'], 'Der Amazonas-Regenwald.'],
  ['Wie viele Klimazonen unterscheidet man in der Regel?', 'Fünf', ['Drei', 'Sieben', 'Zehn'], 'Tropisch, subtropisch, gemäßigt, subpolar, polar.'],
  ['Wo regnet es besonders viel?', 'Cherrapunji und Mawsynram (Indien)', ['Sahara', 'Kalahari', 'Atacama'], 'Mehr als 11 m Regen im Jahr.'],
  ['Wie nennt man das trockene Landesinnere Australiens?', 'Outback', ['Bush', 'Savanne', 'Veld']],
  ['Welche Linie trennt Nord- und Südhalbkugel?', 'Äquator', ['Nullmeridian', 'Wendekreis', 'Datumsgrenze']],
  ['Welcher Längengrad ist der Nullmeridian?', 'Der durch Greenwich (London)', ['Der durch Paris', 'Der durch Berlin', 'Der durch Rom']],
]);

export const physicalTopics: Topic[] = [
  mountains, mountainFacts, rivers, riverFacts, lakes, deserts, desertFacts, volcanoes, volcanoFacts, islands, islandFacts, seasFacts, waterfalls, climate,
];
