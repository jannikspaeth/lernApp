import type { Topic } from '../wissen/types';
import { GROUP } from './cats';
import { cards, pairs } from './helpers';

const G = GROUP.kultur;

export const languages = pairs('amtssprachen', ['Official languages', 'Amtssprachen'], G, k => `Welche Sprache ist Amtssprache in ${k}?`, [
  ['Brasilien', 'Portugiesisch', 'Das größte portugiesischsprachige Land.'], ['Argentinien', 'Spanisch'], ['Österreich', 'Deutsch'], ['Iran', 'Persisch (Farsi)'],
  ['Ägypten', 'Arabisch'], ['Israel', 'Hebräisch', 'Arabisch hat einen Sonderstatus.'], ['der Türkei', 'Türkisch'], ['der Ukraine', 'Ukrainisch'], ['Äthiopien', 'Amharisch'],
  ['Tansania (neben Englisch)', 'Swahili'], ['Angola', 'Portugiesisch'], ['Mosambik', 'Portugiesisch'], ['dem Senegal', 'Französisch'], ['Indonesien', 'Indonesisch'],
  ['Malaysia', 'Malaiisch'], ['Vietnam', 'Vietnamesisch'], ['Thailand', 'Thailändisch'], ['Pakistan (neben Englisch)', 'Urdu'], ['Bangladesch', 'Bengalisch'],
['Polen', 'Polnisch'], ['Ungarn', 'Ungarisch'], ['Griechenland', 'Griechisch'], ['Finnland (neben Schwedisch)', 'Finnisch'],
  ['Island', 'Isländisch'], ['Kolumbien', 'Spanisch'], ['Peru (neben Quechua und Aymara)', 'Spanisch'], ['Paraguay (neben Spanisch)', 'Guaraní'],
  ['Haiti (neben Kreol)', 'Französisch'], ['Südkorea', 'Koreanisch'], ['Japan', 'Japanisch'], ['den Philippinen (neben Englisch)', 'Filipino'], ['Kasachstan (neben Russisch)', 'Kasachisch'],
]);

export const languageFacts = cards('sprachen-fakten', ['Language facts', 'Sprachen: Fakten'], G, [
  ['Welche Sprache hat weltweit die meisten Muttersprachler?', 'Mandarin-Chinesisch', ['Englisch', 'Spanisch', 'Hindi']],
  ['Wie viele Amtssprachen hat die Schweiz?', 'Vier', ['Zwei', 'Drei', 'Fünf'], 'Deutsch, Französisch, Italienisch, Rätoromanisch.'],
  ['Welche Sprachen sind in Belgien Amtssprachen?', 'Niederländisch, Französisch und Deutsch', ['Nur Niederländisch und Französisch', 'Französisch und Englisch', 'Niederländisch und Deutsch']],
  ['Welche Sprachen sind in Kanada Amtssprachen?', 'Englisch und Französisch', ['Nur Englisch', 'Englisch und Spanisch', 'Französisch und Inuktitut']],
  ['Wie viele Amtssprachen hat Südafrika?', 'Elf', ['Zwei', 'Vier', 'Zwanzig']],
  ['Wie viele Sprachen listet die indische Verfassung als offizielle Sprachen auf?', '22', ['Zwei', 'Zwölf', '100'], 'Die Verfassung listet 22 Sprachen auf.'],
  ['Welche Sprache sprechen die meisten Menschen in Brasilien?', 'Portugiesisch', ['Spanisch', 'Englisch', 'Französisch']],
  ['In welchem Land wird Katalanisch Amtssprache (neben Spanisch)?', 'Spanien (Katalonien) und Andorra', ['Frankreich', 'Italien', 'Portugal']],
  ['Welche Sprache spricht man in Mexiko?', 'Spanisch', ['Portugiesisch', 'Nahuatl allein', 'Englisch']],
  ['Welche Länder haben Deutsch als Amtssprache?', 'Deutschland, Österreich, Liechtenstein', ['Nur Deutschland', 'Deutschland und die Niederlande', 'Deutschland und Belgien allein']],
  ['Welche Sprache spricht man in Quebec?', 'Französisch', ['Englisch', 'Spanisch', 'Italienisch']],
  ['Welches Land hat die meisten Amtssprachen der Welt (nach Zählung)?', 'Bolivien', ['Indien', 'Südafrika', 'Schweiz'], 'Spanisch und 36 indigene Sprachen.'],
  ['Wie viele Sprachen gibt es auf der Welt etwa?', 'Rund 7.000', ['Rund 700', 'Rund 70.000', 'Rund 2.000']],
  ['Welche Sprache wird in Papua-Neuguinea besonders vielfältig gesprochen?', 'Über 800 Sprachen', ['Nur 50', 'Genau 10', 'Nur Englisch'], 'Das Land mit den meisten Sprachen der Welt.'],
]);

export const currencies = pairs('waehrungen', ['Currencies', 'Währungen'], G, k => `Wie heißt die Währung ${k}?`, [
  ['Japans', 'Yen'], ['Chinas', 'Renminbi (Yuan)'], ['der Schweiz', 'Franken'], ['des Vereinigten Königreichs', 'Pfund Sterling'], ['Indiens', 'Rupie'],
  ['Russlands', 'Rubel'], ['der Türkei', 'Lira'], ['Polens', 'Złoty'], ['Tschechiens', 'Tschechische Krone'], ['Ungarns', 'Forint'], ['Schwedens', 'Schwedische Krone'],
  ['Dänemarks', 'Dänische Krone'], ['Norwegens', 'Norwegische Krone'], ['Islands', 'Isländische Krone'], ['Brasiliens', 'Real'], ['Mexikos', 'Peso'],
  ['Südafrikas', 'Rand'], ['Südkoreas', 'Won'], ['Thailands', 'Baht'], ['Vietnams', 'Dong'], ['Indonesiens', 'Rupiah'], ['Israels', 'Schekel'], ['Saudi-Arabiens', 'Riyal'],
  ['der Vereinigten Arabischen Emirate', 'Dirham'], ['Nigerias', 'Naira'], ['Ghanas', 'Cedi'], ['Malaysias', 'Ringgit'], ['Kasachstans', 'Tenge'],
  ['der Ukraine', 'Hrywnja'], ['Rumäniens', 'Leu'], ['Bulgariens', 'Lew'], ['Georgiens', 'Lari'], ['Armeniens', 'Dram'], ['Bangladeschs', 'Taka'],
  ['Perus', 'Sol'], ['Guatemalas', 'Quetzal'], ['Irans', 'Rial'], ['des Iraks', 'Dinar'], ['Kroatiens (seit 2023)', 'Euro'], ['Kanadas', 'Kanadischer Dollar'],
  ['Australiens', 'Australischer Dollar'], ['Neuseelands', 'Neuseeland-Dollar'],
]);

export const population = cards('bevoelkerung', ['Most & least populated', 'Bevölkerungsreichste und -ärmste Länder'], G, [
  ['Welches Land hat die meisten Einwohner?', 'Indien', ['China', 'USA', 'Indonesien'], 'Indien hat China um 2023 überholt, jeweils rund 1,4 Mrd.'],
  ['Welches Land hat nach Indien und China die meisten Einwohner?', 'USA', ['Indonesien', 'Pakistan', 'Brasilien'], 'Rund 340 Mio.'],
  ['Welches ist das bevölkerungsreichste muslimische Land?', 'Indonesien', ['Pakistan', 'Ägypten', 'Türkei']],
  ['Welches ist das bevölkerungsreichste Land Afrikas?', 'Nigeria', ['Ägypten', 'Äthiopien', 'DR Kongo'], 'Rund 220 Mio. Menschen.'],
  ['Welches ist das bevölkerungsreichste Land Südamerikas?', 'Brasilien', ['Argentinien', 'Kolumbien', 'Peru']],
  ['Welches ist das bevölkerungsreichste Land Europas?', 'Russland', ['Deutschland', 'Türkei', 'Frankreich'], 'Mit europäischem Teil. Das EU-Land mit den meisten Einwohnern ist Deutschland.'],
  ['Welches ist das bevölkerungsreichste Land der EU?', 'Deutschland', ['Frankreich', 'Italien', 'Spanien']],
  ['Welches ist das bevölkerungsärmste Land der Welt?', 'Vatikanstadt', ['Nauru', 'Tuvalu', 'Monaco'], 'Rund 800 Einwohner.'],
  ['Welches Land hat die niedrigste Bevölkerungsdichte?', 'Mongolei', ['Australien', 'Kanada', 'Namibia'], 'Rund 2 Einwohner pro km².'],
  ['Welcher Staat ist am dichtesten besiedelt?', 'Monaco', ['Singapur', 'Malta', 'Bangladesch'], 'Über 18.000 Einwohner pro km².'],
  ['Welche große Industrienation hat die älteste Bevölkerung?', 'Japan', ['Deutschland', 'Italien', 'Finnland'], 'Mit einem Medianalter über 48 Jahren.'],
  ['Welches Land hat die jüngste Bevölkerung?', 'Niger', ['Mali', 'Uganda', 'Nigeria'], 'Medianalter unter 16 Jahren.'],
  ['Wie viele Menschen leben etwa auf der Erde?', 'Rund 8 Milliarden', ['Rund 6 Milliarden', 'Rund 10 Milliarden', 'Rund 4 Milliarden'], 'Seit November 2022.'],
  ['Welcher Kontinent hat die meisten Einwohner?', 'Asien', ['Afrika', 'Europa', 'Nordamerika'], 'Rund 60 % der Weltbevölkerung.'],
  ['Welche ist die größte Stadt Deutschlands nach Einwohnern?', 'Berlin', ['Hamburg', 'München', 'Köln'], 'Rund 3,7 Mio.'],
]);

export const religions = pairs('religionen', ['Religions by region', 'Religionen nach Region'], G, k => `Welche Religion ist die Mehrheitsreligion in ${k}?`, [
  ['Indien', 'Hinduismus'], ['Thailand', 'Buddhismus'], ['Saudi-Arabien', 'Islam', 'Mit Mekka und Medina als heiligen Städten.'], ['Indonesien', 'Islam'],
  ['Italien', 'Katholizismus'], ['Russland', 'Orthodoxes Christentum'], ['Israel', 'Judentum'], ['Brasilien', 'Katholizismus'], ['Äthiopien', 'Orthodoxes Christentum'],
  ['Nepal', 'Hinduismus'], ['Sri Lanka', 'Buddhismus'], ['den Philippinen', 'Katholizismus'], ['Griechenland', 'Orthodoxes Christentum'], ['dem Iran', 'Schiitischer Islam'],
  ['Bhutan', 'Buddhismus'], ['Polen', 'Katholizismus'], ['Dänemark', 'Evangelisch-lutherisches Christentum'], ['der Türkei', 'Sunnitischer Islam'], ['Myanmar', 'Buddhismus'],
  ['Mexiko', 'Katholizismus'], ['Marokko', 'Islam'], ['Armenien', 'Armenisch-apostolisches Christentum', 'Armenien war 301 das erste christliche Land.'],
]);

export const dishes = pairs('gerichte', ['National dishes', 'Nationalgerichte'], G, k => `Aus welchem Land stammt ${k}?`, [
  ['Paella', 'Spanien', 'Aus Valencia.'], ['Sushi', 'Japan'], ['Pizza Napoletana', 'Italien'], ['Haggis', 'Schottland'], ['Kimchi', 'Südkorea'], ['Borschtsch', 'Ukraine'],
  ['Gulasch', 'Ungarn'], ['Moussaka', 'Griechenland'], ['Fondue', 'Schweiz'], ['das Wiener Schnitzel', 'Österreich'], ['Tacos', 'Mexiko'], ['Poutine', 'Kanada'],
  ['Pho', 'Vietnam'], ['Tajine', 'Marokko'], ['Fish and Chips', 'England'], ['Pierogi', 'Polen'], ['Bouillabaisse', 'Frankreich'], ['Feijoada', 'Brasilien'],
  ['Ceviche', 'Peru'], ['Pad Thai', 'Thailand'], ['Biryani', 'Indien'], ['die Peking-Ente', 'China'], ['Smørrebrød', 'Dänemark'], ['Köttbullar', 'Schweden'],
  ['Pastéis de Nata', 'Portugal'], ['Baklava', 'Türkei'], ['Empanadas', 'Argentinien'], ['Injera', 'Äthiopien'], ['der Kaiserschmarrn', 'Österreich'],
  ['Rösti', 'Schweiz'], ['Stroopwafels', 'Niederlande'], ['Waffeln und Pommes frites (Frites)', 'Belgien'], ['Moules-frites', 'Belgien'],
]);

export const timeZones = cards('zeitzonen', ['Time zones', 'Zeitzonen'], G, [
  ['Wie viele Zeitzonen gibt es auf der Erde (nominal)?', '24', ['12', '18', '36'], 'Für jede Stunde eine; in der Praxis über 30 durch halbstündige Abweichungen.'],
  ['Nach welchem Ort wird die Weltzeit UTC benannt (früher GMT)?', 'Greenwich bei London', ['Paris', 'Berlin', 'Rom']],
  ['Welcher Längengrad ist der Nullmeridian?', '0° (Greenwich)', ['10° Ost', '90° West', '180°']],
  ['Wie viele Stunden ist Mitteleuropäische Zeit (MEZ) gegenüber UTC voraus?', 'Eine Stunde', ['Zwei Stunden', 'Keine', 'Drei Stunden']],
  ['Welches Land hat die meisten Zeitzonen (mit Überseegebieten)?', 'Frankreich', ['Russland', 'USA', 'China'], 'Wegen seiner Überseegebiete 12 bis 13.'],
  ['Wie viele Zeitzonen hat Russland?', '11', ['3', '6', '9']],
  ['Wie viele Zeitzonen hat China?', 'Eine', ['Drei', 'Fünf', 'Zwei'], 'Offiziell gilt überall die Pekinger Zeit.'],
  ['Wie viele Stunden ist Indien gegenüber UTC voraus?', '5½ Stunden', ['5 Stunden', '6 Stunden', '4 Stunden'], 'Eine halbe Stunde Abweichung.'],
  ['Wenn es in Berlin 12 Uhr (Winterzeit) ist, wie spät ist es in New York?', '6 Uhr', ['7 Uhr', '5 Uhr', '8 Uhr'], 'New York liegt 6 Stunden zurück.'],
  ['Wenn es in Berlin 12 Uhr (Winterzeit) ist, wie spät ist es in Tokio?', '20 Uhr', ['18 Uhr', '21 Uhr', '19 Uhr'], 'Tokio liegt 8 Stunden voraus.'],
  ['Welche Linie bestimmt den Beginn eines neuen Kalendertages?', 'Die Datumsgrenze', ['Der Nullmeridian', 'Der Äquator', 'Der Wendekreis'], 'Sie verläuft etwa entlang 180° im Pazifik.'],
  ['Wie viele Zeitzonen haben die USA (mit Alaska und Hawaii)?', 'Sechs', ['Drei', 'Vier', 'Neun']],
  ['Welcher Staat liegt westlich der Datumsgrenze und ist als erster im neuen Tag?', 'Kiribati (Kiritimati)', ['Neuseeland', 'Fidschi', 'Samoa']],
  ['In welcher Zeitzone liegt Spanien trotz westlicher Lage?', 'In der Mitteleuropäischen Zeit', ['In der Westeuropäischen Zeit', 'In UTC', 'In UTC−1']],
  ['Seit wann gibt es die Sommerzeit in Deutschland?', 'Seit 1980', ['Seit 1950', 'Seit 1990', 'Seit 2001'], 'Zuvor gab es sie bereits 1916–1918 und 1940–1949.'],
  ['Wie viele Zeitzonen hat Kanada?', 'Sechs', ['Zwei', 'Drei', 'Zehn']],
  ['Welche Zeitzone gilt in Japan?', 'UTC+9', ['UTC+7', 'UTC+8', 'UTC+10']],
]);

export const cultureTopics: Topic[] = [languages, languageFacts, currencies, population, religions, dishes, timeZones];
