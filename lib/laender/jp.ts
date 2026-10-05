import type { CountryHistory } from './types';

export const JP: CountryHistory = {
  code: 'JP',
  epochs: [
    {
      id: 'fruehzeit',
      name: 'Kaiser und Samurai',
      period: 'bis 1853',
      events: [
        {
          id: 'heian',
          title: 'Kaiser, Shinto und das Heian-Zeitalter',
          date: 'bis 1185',
          text: [
            'Japan ist eine Inselkette; ab etwa dem 3. und 4. Jahrhundert einte das Yamato-Herrscherhaus große Teile des Landes. Das japanische Kaiserhaus gilt als älteste noch regierende Erbmonarchie der Welt. Neben dem einheimischen Shinto, dem Glauben an zahlreiche Naturgottheiten (Kami), kamen im 6. Jahrhundert aus China und Korea der Buddhismus und die chinesische Schrift ins Land.',
            '794 wurde Heian-kyō, das heutige Kyoto, Hauptstadt; es blieb über tausend Jahre lang Sitz des Kaisers. In der Heian-Zeit (794–1185) blühte am Hof eine verfeinerte Kultur. Die Hofdame Murasaki Shikibu schrieb um das Jahr 1000 die „Geschichte vom Prinzen Genji“, die oft als einer der ersten Romane der Welt bezeichnet wird.',
          ],
          quiz: {
            leicht: [
              ['Welche Religion mit vielen Naturgottheiten ist in Japan heimisch?', 'Shinto', ['Hinduismus', 'Islam', 'Christentum']],
              ['Welche Stadt war über tausend Jahre Sitz des Kaisers?', 'Kyoto', ['Tokio', 'Osaka', 'Hiroshima']],
              ['Welche Religion kam im 6. Jahrhundert aus China und Korea?', 'Der Buddhismus', ['Der Islam', 'Das Christentum', 'Der Hinduismus']],
            ],
            mittel: [
              ['Wie heißen die Gottheiten des Shinto?', 'Kami', ['Buddhas', 'Samurai', 'Shogune']],
              ['Wer schrieb die „Geschichte vom Prinzen Genji“?', 'Murasaki Shikibu', ['Konfuzius', 'Matsuo Bashō', 'Yukio Mishima']],
              ['In welchem Jahr wurde Heian-kyō Hauptstadt?', '794', ['1185', '1603', '1868']],
            ],
            schwer: [
              ['Welches Herrscherhaus einte das frühe Japan?', 'Das Yamato-Haus', ['Das Tokugawa-Haus', 'Das Minamoto-Haus', 'Das Meiji-Haus']],
              ['Welchen Zeitraum umfasst die Heian-Zeit?', '794–1185', ['1603–1868', '538–710', '1185–1333']],
              ['Was gilt als älteste noch regierende Erbmonarchie der Welt?', 'Das japanische Kaiserhaus', ['Das britische Königshaus', 'Das dänische Königshaus', 'Das thailändische Königshaus']],
            ],
          },
        },
        {
          id: 'samurai',
          title: 'Samurai und Shogune',
          date: '1185–1853',
          text: [
            'Ab dem 12. Jahrhundert übernahmen Kriegerfamilien die Macht. 1192 wurde Minamoto no Yoritomo zum Shogun ernannt, zum obersten Militärherrscher, während der Kaiser nur noch symbolisch regierte. Die Samurai, eine Kriegerkaste mit eigenem Ehrenkodex, prägten das Land. 1274 und 1281 scheiterten zwei mongolische Invasionen – auch an Taifunen, die die Japaner „Kamikaze“ (Götterwind) nannten.',
            'Nach Jahrzehnten des Bürgerkriegs einte Tokugawa Ieyasu das Land und wurde 1603 Shogun; sein Regierungssitz Edo ist das heutige Tokio. Die Tokugawa-Shogune schlossen Japan ab den 1630er Jahren fast völlig von der Außenwelt ab: Christen wurden verfolgt, nur Chinesen und Niederländer durften in Nagasaki begrenzt Handel treiben. Über 250 Jahre lang herrschte Frieden.',
          ],
          quiz: {
            leicht: [
              ['Wie hießen die japanischen Krieger?', 'Samurai', ['Wikinger', 'Ritter', 'Mamluken']],
              ['Wie heißt der oberste Militärherrscher Japans?', 'Shogun', ['Kaiser', 'Sultan', 'Daimyo']],
              ['Wie heißt Edo heute?', 'Tokio', ['Kyoto', 'Osaka', 'Nagoya']],
            ],
            mittel: [
              ['Wer wurde 1603 Shogun und einte Japan?', 'Tokugawa Ieyasu', ['Minamoto no Yoritomo', 'Oda Nobunaga', 'Toyotomi Hideyoshi']],
              ['Wessen Invasionen scheiterten 1274 und 1281?', 'Die der Mongolen', ['Die der Chinesen', 'Die der Portugiesen', 'Die der Koreaner']],
              ['Was bedeutet „Kamikaze“?', 'Götterwind', ['Heiliger Krieger', 'Sturmflut', 'Feuerberg']],
            ],
            schwer: [
              ['Wer wurde 1192 zum Shogun ernannt?', 'Minamoto no Yoritomo', ['Tokugawa Ieyasu', 'Oda Nobunaga', 'Ashikaga Takauji']],
              ['Welche Europäer durften während der Abschließung in Nagasaki handeln?', 'Die Niederländer', ['Die Portugiesen', 'Die Briten', 'Die Spanier']],
              ['Wie lange herrschte unter den Tokugawa Frieden?', 'Über 250 Jahre', ['25 Jahre', '100 Jahre', '500 Jahre']],
            ],
          },
        },
      ],
    },
    {
      id: 'modernisierung',
      name: 'Modernisierung und Krieg',
      period: '1853–1952',
      events: [
        {
          id: 'meiji',
          title: 'Öffnung und Meiji-Restauration',
          date: '1853–1912',
          text: [
            '1853 erschien der amerikanische Kommodore Matthew Perry mit Kriegsschiffen, den „schwarzen Schiffen“, in der Bucht von Edo und erzwang die Öffnung Japans für den Handel. Das geschwächte Shogunat geriet in die Krise; 1868 wurde die Macht des Kaisers wiederhergestellt – die Meiji-Restauration. Der junge Kaiser Meiji verlegte seinen Sitz nach Edo, das nun Tokio („östliche Hauptstadt“) hieß.',
            'In wenigen Jahrzehnten modernisierte sich Japan nach westlichem Vorbild: Der Samurai-Stand wurde abgeschafft, Wehrpflicht, Schulpflicht, Eisenbahnen und 1889 eine Verfassung nach preußischem Vorbild eingeführt. Japan stieg zur Großmacht auf, besiegte 1895 China und 1905 – als erstes asiatisches Land in der Neuzeit eine europäische Großmacht – Russland. 1910 annektierte es Korea.',
          ],
          quiz: {
            leicht: [
              ['Wer erzwang 1853 die Öffnung Japans?', 'Matthew Perry', ['James Cook', 'Christoph Kolumbus', 'Douglas MacArthur']],
              ['Wie heißt die Wiederherstellung der Kaisermacht 1868?', 'Meiji-Restauration', ['Kulturrevolution', 'Tokugawa-Reform', 'Edo-Revolution']],
              ['Was bedeutet „Tokio“?', 'Östliche Hauptstadt', ['Westliche Hauptstadt', 'Stadt der Sonne', 'Neue Stadt']],
            ],
            mittel: [
              ['Welche europäische Großmacht besiegte Japan 1905?', 'Russland', ['Großbritannien', 'Frankreich', 'Deutschland']],
              ['Welcher Stand wurde abgeschafft?', 'Der Samurai-Stand', ['Der Kaiser', 'Die Kaufleute', 'Die Bauern']],
              ['Welches Land annektierte Japan 1910?', 'Korea', ['China', 'Vietnam', 'Die Philippinen']],
            ],
            schwer: [
              ['Wie nannte man Perrys Kriegsschiffe?', 'Schwarze Schiffe', ['Weiße Flotte', 'Rote Drachen', 'Eiserne Wale']],
              ['Nach welchem Vorbild entstand die Verfassung von 1889?', 'Nach preußischem', ['Nach französischem', 'Nach amerikanischem', 'Nach britischem']],
              ['Wen besiegte Japan 1895?', 'China', ['Russland', 'Korea', 'Die USA']],
            ],
          },
        },
        {
          id: 'zweiter-weltkrieg',
          title: 'Militarismus und Zweiter Weltkrieg',
          date: '1931–1952',
          text: [
            'In den 1930er Jahren gewann das Militär die Oberhand. 1931 besetzte Japan die Mandschurei, 1937 begann es einen umfassenden Krieg gegen China mit schweren Verbrechen wie dem Massaker von Nanking. 1940 verbündete es sich mit Deutschland und Italien. Am 7. Dezember 1941 griff Japan Pearl Harbor an und eroberte große Teile Südostasiens und des Pazifiks.',
            'Nach Niederlagen wie bei Midway 1942 wurde Japan zurückgedrängt. Im August 1945 warfen die USA Atombomben auf Hiroshima (6. August) und Nagasaki (9. August); bis Ende 1945 starben über 200.000 Menschen. Am 15. August verkündete Kaiser Hirohito im Radio die Kapitulation. Unter amerikanischer Besatzung erhielt Japan 1947 eine demokratische Verfassung, in deren Artikel 9 es für immer auf Krieg verzichtet. 1952 endete die Besatzung.',
          ],
          quiz: {
            leicht: [
              ['Welcher Stützpunkt wurde am 7. Dezember 1941 angegriffen?', 'Pearl Harbor', ['Midway', 'Okinawa', 'Guam']],
              ['Auf welche Städte fielen 1945 Atombomben?', 'Hiroshima und Nagasaki', ['Tokio und Osaka', 'Kyoto und Kobe', 'Nagoya und Sapporo']],
              ['Welcher Kaiser verkündete 1945 die Kapitulation?', 'Hirohito', ['Meiji', 'Akihito', 'Naruhito']],
            ],
            mittel: [
              ['Welches Gebiet Chinas besetzte Japan 1931?', 'Die Mandschurei', ['Tibet', 'Hongkong', 'Taiwan']],
              ['In welcher Seeschlacht erlitt Japan 1942 eine schwere Niederlage?', 'Bei Midway', ['Bei Trafalgar', 'Am Skagerrak', 'Bei Lepanto']],
              ['Was regelt Artikel 9 der japanischen Verfassung?', 'Den Verzicht auf Krieg', ['Die Rolle des Kaisers', 'Die Amtssprache', 'Das Frauenwahlrecht']],
            ],
            schwer: [
              ['An welchem Tag fiel die Bombe auf Hiroshima?', '6. August 1945', ['9. August 1945', '15. August 1945', '2. September 1945']],
              ['Wann trat die neue Verfassung in Kraft?', '1947', ['1945', '1952', '1964']],
              ['Wann endete die amerikanische Besatzung?', '1952', ['1945', '1947', '1972']],
            ],
          },
        },
      ],
    },
    {
      id: 'nachkrieg',
      name: 'Wirtschaftsmacht',
      period: 'seit 1952',
      events: [
        {
          id: 'wirtschaftswunder',
          title: 'Wirtschaftswunder und Gegenwart',
          date: 'seit 1952',
          text: [
            'Nach dem Krieg erlebte Japan einen rasanten Aufschwung. 1964 fanden in Tokio die ersten Olympischen Spiele Asiens statt; pünktlich dazu eröffnete der Shinkansen, der erste Hochgeschwindigkeitszug der Welt. 1968 wurde Japan zur zweitgrößten Volkswirtschaft der Welt. Marken wie Toyota, Sony und Nintendo wurden weltbekannt.',
            'Um 1990 platzte eine Spekulationsblase an Börse und Immobilienmarkt; es folgten Jahrzehnte schwachen Wachstums. Am 11. März 2011 lösten ein schweres Erdbeben und ein Tsunami die Atomkatastrophe von Fukushima aus; rund 18.000 Menschen starben durch Beben und Tsunami. Japan altert stark: Fast jeder dritte Einwohner ist über 65 Jahre alt.',
          ],
          quiz: {
            leicht: [
              ['Wie heißt der japanische Hochgeschwindigkeitszug?', 'Shinkansen', ['TGV', 'ICE', 'Eurostar']],
              ['Wo ereignete sich 2011 eine Atomkatastrophe?', 'In Fukushima', ['In Tschernobyl', 'In Hiroshima', 'In Tokio']],
              ['Welche Firma stammt aus Japan?', 'Nintendo', ['Samsung', 'Apple', 'Siemens']],
            ],
            mittel: [
              ['In welchem Jahr eröffnete der Shinkansen zu den Olympischen Spielen in Tokio?', '1964', ['1945', '1988', '2000']],
              ['Was löste die Katastrophe von Fukushima aus?', 'Ein Erdbeben und ein Tsunami', ['Ein Krieg', 'Ein Flugzeugabsturz', 'Ein Vulkanausbruch']],
              ['Seit wann war Japan die zweitgrößte Volkswirtschaft der Welt?', 'Seit 1968', ['Seit 1945', 'Seit 1990', 'Seit 2010']],
            ],
            schwer: [
              ['Wie viele Menschen starben 2011 durch Beben und Tsunami etwa?', 'Rund 18.000', ['Rund 1.800', 'Rund 180.000', 'Rund 180']],
              ['Was platzte um 1990?', 'Eine Spekulationsblase', ['Ein Staudamm', 'Ein Militärbündnis', 'Ein Atomreaktor']],
              ['Welcher Anteil der Japaner ist über 65 Jahre alt?', 'Fast jeder dritte', ['Jeder zehnte', 'Die Hälfte', 'Jeder zwanzigste']],
            ],
          },
        },
      ],
    },
  ],
};
