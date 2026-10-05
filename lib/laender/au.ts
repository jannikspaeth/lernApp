import type { CountryHistory } from './types';

export const AU: CountryHistory = {
  code: 'AU',
  epochs: [
    {
      id: 'kolonie',
      name: 'Ureinwohner und Kolonie',
      period: 'bis 1900',
      events: [
        {
          id: 'aborigines',
          title: 'Die Aborigines und die ersten Europäer',
          date: 'bis 1770',
          text: [
            'Die Vorfahren der Aborigines erreichten Australien vor mindestens 50.000 Jahren – ihre Kultur gehört zu den ältesten fortbestehenden der Welt. Vor der Ankunft der Europäer lebten auf dem Kontinent Hunderte Völker mit über 250 Sprachen. Ihre Felsmalereien, etwa im Kakadu-Nationalpark, und ihre Erzählungen aus der „Traumzeit“ über die Entstehung der Welt sind bis heute lebendig.',
            '1606 landete der Niederländer Willem Janszoon als erster Europäer nachweislich in Australien; 1642 erreichte Abel Tasman die später nach ihm benannte Insel Tasmanien. 1770 erkundete der britische Kapitän James Cook die Ostküste, landete in der Botany Bay und beanspruchte das Land für Großbritannien – obwohl es bewohnt war.',
          ],
          quiz: {
            leicht: [
              ['Wie nennt man die Ureinwohner Australiens?', 'Aborigines', ['Maori', 'Inuit', 'First Nations']],
              ['Welcher Kapitän beanspruchte 1770 die Ostküste für Großbritannien?', 'James Cook', ['Abel Tasman', 'Christoph Kolumbus', 'Vasco da Gama']],
              ['Welche Insel ist nach Abel Tasman benannt?', 'Tasmanien', ['Neuseeland', 'Neuguinea', 'Fidschi']],
            ],
            mittel: [
              ['Seit wann leben die Vorfahren der Aborigines mindestens in Australien?', 'Seit 50.000 Jahren', ['Seit 5.000 Jahren', 'Seit 500 Jahren', 'Seit 500.000 Jahren']],
              ['Wie heißen die Schöpfungserzählungen der Aborigines?', 'Traumzeit', ['Urzeit', 'Sternenzeit', 'Feuerzeit']],
              ['Wo landete Cook 1770?', 'In der Botany Bay', ['In der Sydney Cove', 'In Perth', 'In Darwin']],
            ],
            schwer: [
              ['Wer landete 1606 als erster Europäer in Australien?', 'Willem Janszoon', ['Abel Tasman', 'James Cook', 'Ferdinand Magellan']],
              ['Wie viele Sprachen gab es vor der Kolonisierung etwa?', 'Über 250', ['Rund 5', 'Rund 25', 'Über 2.500']],
              ['In welchem Nationalpark gibt es berühmte Felsmalereien?', 'Im Kakadu-Nationalpark', ['Im Yellowstone', 'In der Serengeti', 'Im Banff-Nationalpark']],
            ],
          },
        },
        {
          id: 'first-fleet',
          title: 'Die Sträflingskolonie',
          date: '1788–1868',
          text: [
            'Nach dem Verlust der amerikanischen Kolonien suchte Großbritannien einen neuen Ort für verurteilte Straftäter. Am 26. Januar 1788 landete die „First Fleet“ mit elf Schiffen und rund 750 Sträflingen unter Kapitän Arthur Phillip in der Sydney Cove und gründete die Kolonie New South Wales. Der 26. Januar ist heute als „Australia Day“ Nationalfeiertag – viele Aborigines nennen ihn „Invasion Day“.',
            'Bis 1868 wurden rund 160.000 Sträflinge nach Australien gebracht, oft wegen kleiner Diebstähle. Viele blieben nach ihrer Strafe als freie Siedler. Für die Aborigines brachte die Kolonisierung Landraub, Gewalt und eingeschleppte Krankheiten; ihre Zahl sank drastisch.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt entstand 1788 als erste Siedlung?', 'Sydney', ['Melbourne', 'Perth', 'Canberra']],
              ['Wer wurde zuerst in großer Zahl nach Australien gebracht?', 'Sträflinge', ['Mönche', 'Goldsucher', 'Bauern aus Irland']],
              ['Wie heißt der australische Nationalfeiertag?', 'Australia Day', ['Independence Day', 'Canada Day', 'Commonwealth Day']],
            ],
            mittel: [
              ['An welchem Tag landete die First Fleet?', '26. Januar 1788', ['4. Juli 1776', '25. April 1915', '1. Januar 1901']],
              ['Wie nennen viele Aborigines den 26. Januar?', 'Invasion Day', ['Freedom Day', 'Dreamtime Day', 'Sorry Day']],
              ['Wie viele Sträflinge wurden insgesamt gebracht?', 'Rund 160.000', ['Rund 1.600', 'Rund 16.000', 'Rund 1,6 Millionen']],
            ],
            schwer: [
              ['Wer führte die First Fleet an?', 'Arthur Phillip', ['James Cook', 'Lachlan Macquarie', 'William Bligh']],
              ['Bis wann wurden Sträflinge nach Australien gebracht?', 'Bis 1868', ['Bis 1800', 'Bis 1901', 'Bis 1945']],
              ['Wie hieß die erste Kolonie?', 'New South Wales', ['Victoria', 'Queensland', 'Western Australia']],
            ],
          },
        },
        {
          id: 'foederation',
          title: 'Goldrausch und Föderation',
          date: '1851–1927',
          text: [
            '1851 wurden in New South Wales und Victoria große Goldvorkommen entdeckt. Hunderttausende Glückssucher strömten ins Land, die Bevölkerung verdreifachte sich in zehn Jahren, und Melbourne wurde zu einer der reichsten Städte der Welt. 1854 lehnten sich Goldgräber in der „Eureka Stockade“ bei Ballarat gegen hohe Lizenzgebühren auf; der blutig niedergeschlagene Aufstand gilt als Meilenstein der australischen Demokratie.',
            'Am 1. Januar 1901 schlossen sich die sechs Kolonien zum Commonwealth of Australia zusammen, einem Bundesstaat mit dem britischen Monarchen als Staatsoberhaupt. Als Kompromiss zwischen den Rivalen Sydney und Melbourne entstand eine neue Hauptstadt: Canberra, ab 1913 gebaut und seit 1927 Sitz des Parlaments. Die „White Australia Policy“ beschränkte von Anfang an die Einwanderung nicht-weißer Menschen.',
          ],
          quiz: {
            leicht: [
              ['Was wurde 1851 in Australien entdeckt?', 'Gold', ['Öl', 'Diamanten', 'Uran']],
              ['Was ist die Hauptstadt Australiens?', 'Canberra', ['Sydney', 'Melbourne', 'Perth']],
              ['Wann entstand der australische Bundesstaat?', '1901', ['1788', '1851', '1945']],
            ],
            mittel: [
              ['Wie heißt der Goldgräberaufstand von 1854?', 'Eureka Stockade', ['Boston Tea Party', 'Ned-Kelly-Aufstand', 'Rum-Rebellion']],
              ['Welche Städte rivalisierten um den Hauptstadtsitz?', 'Sydney und Melbourne', ['Perth und Adelaide', 'Brisbane und Darwin', 'Hobart und Sydney']],
              ['Wie hieß die Politik, die nicht-weiße Einwanderung beschränkte?', 'White Australia Policy', ['Apartheid', 'Stolen Generations', 'Commonwealth Policy']],
            ],
            schwer: [
              ['Bei welcher Stadt lag die Eureka Stockade?', 'Bei Ballarat', ['Bei Sydney', 'Bei Perth', 'Bei Adelaide']],
              ['Seit wann tagt das Parlament in Canberra?', 'Seit 1927', ['Seit 1901', 'Seit 1913', 'Seit 1950']],
              ['Wie viele Kolonien bildeten 1901 den Bund?', 'Sechs', ['Drei', 'Acht', 'Zwölf']],
            ],
          },
        },
      ],
    },
    {
      id: 'nation',
      name: 'Eine eigene Nation',
      period: 'seit 1914',
      events: [
        {
          id: 'anzac',
          title: 'Gallipoli und die Weltkriege',
          date: '1915–1945',
          text: [
            'Im Ersten Weltkrieg kämpften australische und neuseeländische Soldaten, das ANZAC (Australian and New Zealand Army Corps), auf britischer Seite. Am 25. April 1915 landeten sie bei Gallipoli in der heutigen Türkei; der verlustreiche, gescheiterte Feldzug wurde zum Gründungsmythos der australischen Nation. Der 25. April ist heute als ANZAC Day Gedenktag. Über 60.000 Australier fielen im Ersten Weltkrieg.',
            'Im Zweiten Weltkrieg rückte der Krieg nah: Am 19. Februar 1942 bombardierten japanische Flugzeuge die Stadt Darwin im Norden. Australische Soldaten kämpften auf Neuguinea, unter anderem auf dem Kokoda-Pfad, gegen japanische Truppen. Danach orientierte sich Australien außenpolitisch stärker an den USA als an Großbritannien.',
          ],
          quiz: {
            leicht: [
              ['Wo landeten ANZAC-Truppen 1915?', 'Bei Gallipoli', ['In der Normandie', 'Bei Dünkirchen', 'In Pearl Harbor']],
              ['Wie heißt der australische Gedenktag am 25. April?', 'ANZAC Day', ['Australia Day', 'Remembrance Day', 'Victory Day']],
              ['Welche australische Stadt bombardierte Japan 1942?', 'Darwin', ['Perth', 'Canberra', 'Adelaide']],
            ],
            mittel: [
              ['Wofür steht ANZAC?', 'Australian and New Zealand Army Corps', ['Australian National Army Command', 'Allied North Zone Army Corps', 'Australian Navy and Air Command']],
              ['Auf welcher Insel kämpften Australier gegen Japan?', 'Auf Neuguinea', ['Auf Hawaii', 'Auf Madagaskar', 'Auf Island']],
              ['An welchem Land orientierte sich Australien nach 1945 stärker?', 'An den USA', ['An Japan', 'An Frankreich', 'An China']],
            ],
            schwer: [
              ['Wie viele Australier fielen im Ersten Weltkrieg etwa?', 'Über 60.000', ['Rund 6.000', 'Rund 600.000', 'Rund 600']],
              ['Wie heißt der berühmte Pfad auf Neuguinea?', 'Kokoda-Pfad', ['Ho-Chi-Minh-Pfad', 'Inkapfad', 'Jakobsweg']],
              ['An welchem Tag wurde Darwin bombardiert?', '19. Februar 1942', ['7. Dezember 1941', '25. April 1915', '15. August 1945']],
            ],
          },
        },
        {
          id: 'versoehnung',
          title: 'Vielfalt und Versöhnung',
          date: 'seit 1967',
          text: [
            '1967 stimmten über 90 Prozent der Australier in einem Referendum dafür, dass Aborigines bei der Volkszählung berücksichtigt werden und der Bund Gesetze für sie erlassen darf. Ab 1973 wurde die „White Australia Policy“ endgültig abgeschafft; Einwanderer aus Asien und aller Welt machten Australien zu einem vielfältigen Land. 1992 erkannte das Oberste Gericht im Fall Mabo erstmals traditionelle Landrechte der Ureinwohner an.',
            'Etwa zwischen 1910 und 1970 waren Zehntausende Kinder von Aborigines ihren Familien weggenommen worden – die „Stolen Generations“. 2008 entschuldigte sich Premierminister Kevin Rudd im Parlament offiziell dafür. 2000 richtete Sydney die Olympischen Spiele aus. 2023 lehnte eine Mehrheit in einem Referendum eine in der Verfassung verankerte Vertretung der Ureinwohner, die „Voice“, ab.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt richtete 2000 die Olympischen Spiele aus?', 'Sydney', ['Melbourne', 'Canberra', 'Perth']],
              ['Wie nennt man die weggenommenen Kinder der Aborigines?', 'Stolen Generations', ['Lost Boys', 'Forgotten Children', 'First Fleet']],
              ['Welcher Premierminister entschuldigte sich 2008?', 'Kevin Rudd', ['John Howard', 'Julia Gillard', 'Malcolm Turnbull']],
            ],
            mittel: [
              ['Was erkannte das Gericht im Fall Mabo 1992 an?', 'Traditionelle Landrechte der Ureinwohner', ['Das Frauenwahlrecht', 'Die Unabhängigkeit von Großbritannien', 'Die Republik']],
              ['Ab wann wurde die White Australia Policy endgültig abgeschafft?', 'Ab 1973', ['Ab 1901', 'Ab 1945', 'Ab 2008']],
              ['Wie viel Prozent stimmten 1967 für die Änderung zugunsten der Aborigines?', 'Über 90 Prozent', ['Rund 50 Prozent', 'Rund 30 Prozent', 'Rund 70 Prozent']],
            ],
            schwer: [
              ['Worüber stimmte Australien 2023 ab?', 'Über eine Vertretung der Ureinwohner („Voice“)', ['Über die Republik', 'Über die Todesstrafe', 'Über den Austritt aus dem Commonwealth']],
              ['Wie ging das Referendum von 2023 aus?', 'Es wurde mehrheitlich abgelehnt', ['Es wurde klar angenommen', 'Es wurde knapp angenommen', 'Es war ungültig']],
              ['In welchem Zeitraum wurden Kinder ihren Familien weggenommen?', 'Etwa 1910–1970', ['1788–1800', '1950–2000', '1850–1870']],
            ],
          },
        },
      ],
    },
  ],
};
