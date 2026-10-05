import type { CountryHistory } from './types';

export const CH: CountryHistory = {
  code: 'CH',
  epochs: [
    {
      id: 'eidgenossenschaft',
      name: 'Die alte Eidgenossenschaft',
      period: '1291–1798',
      events: [
        {
          id: 'bundesbrief',
          title: 'Der Bund von 1291 und die Eidgenossen',
          date: '1291–1499',
          text: [
            'Um 1291 schlossen die Talschaften Uri, Schwyz und Unterwalden einen Bund, um einander gegen äußere Feinde beizustehen und ihre Freiheiten zu wahren. Der Bundesbrief vom Anfang August 1291 gilt als Gründungsdokument der Schweiz; der 1. August ist Nationalfeiertag. Die Legende verbindet die Gründung mit dem Rütlischwur auf einer Wiese am Vierwaldstättersee und mit dem Freiheitshelden Wilhelm Tell, der den Landvogt Gessler erschossen haben soll.',
            'Die Eidgenossen besiegten die Habsburger 1315 bei Morgarten und 1386 bei Sempach; weitere Orte wie Luzern, Zürich und Bern schlossen sich an. Nach dem Schwabenkrieg 1499 waren sie praktisch unabhängig vom Reich; formell anerkannt wurde das 1648 im Westfälischen Frieden. Der Name „Schweiz“ geht auf den Ort Schwyz zurück.',
          ],
          quiz: {
            leicht: [
              ['Welcher Freiheitsheld schoss der Legende nach einen Apfel vom Kopf seines Sohnes?', 'Wilhelm Tell', ['Robin Hood', 'Arnold Winkelried', 'Hermann der Cherusker']],
              ['Welcher Tag ist der Schweizer Nationalfeiertag?', '1. August', ['14. Juli', '3. Oktober', '1. Mai']],
              ['In welchem Jahr wurde der Bundesbrief geschlossen?', '1291', ['1066', '1515', '1848']],
            ],
            mittel: [
              ['Welche drei Orte schlossen den ersten Bund?', 'Uri, Schwyz und Unterwalden', ['Zürich, Bern und Basel', 'Luzern, Zug und Glarus', 'Genf, Waadt und Wallis']],
              ['Auf welcher Wiese soll der Schwur stattgefunden haben?', 'Auf dem Rütli', ['Auf dem Lechfeld', 'Auf dem Marchfeld', 'Auf der Allmend']],
              ['Gegen welche Herrscherfamilie kämpften die Eidgenossen?', 'Die Habsburger', ['Die Hohenzollern', 'Die Medici', 'Die Bourbonen']],
            ],
            schwer: [
              ['Wo siegten die Eidgenossen 1315?', 'Bei Morgarten', ['Bei Sempach', 'Bei Marignano', 'Bei Murten']],
              ['Wann wurde die Unabhängigkeit vom Reich formell anerkannt?', '1648', ['1291', '1499', '1815']],
              ['Welchen Landvogt soll Wilhelm Tell erschossen haben?', 'Gessler', ['Habsburg', 'Winkelried', 'Stauffacher']],
            ],
          },
        },
        {
          id: 'reformation',
          title: 'Reformation in Zürich und Genf',
          date: '1519–1564',
          text: [
            'Ab 1519 predigte Ulrich Zwingli am Großmünster in Zürich und führte die Stadt zur Reformation – ähnlich wie Luther, aber mit eigenen Lehren, etwa zum Abendmahl. Bern und Basel folgten, die Innerschweizer Orte blieben katholisch. Im Zweiten Kappelerkrieg 1531 fiel Zwingli im Kampf gegen die katholischen Orte.',
            'In Genf wirkte ab 1536 der Franzose Johannes Calvin. Er machte die Stadt zum „protestantischen Rom“, dessen strenge Lehre sich nach Frankreich, in die Niederlande, nach Schottland und später nach Nordamerika verbreitete. Die konfessionelle Spaltung prägte die Eidgenossenschaft über Jahrhunderte.',
          ],
          quiz: {
            leicht: [
              ['Welcher Reformator wirkte in Zürich?', 'Ulrich Zwingli', ['Martin Luther', 'Johannes Calvin', 'Thomas Müntzer']],
              ['In welcher Stadt wirkte Johannes Calvin?', 'Genf', ['Zürich', 'Bern', 'Basel']],
              ['Welche Glaubensrichtung entstand durch die Reformation?', 'Der Protestantismus', ['Der Katholizismus', 'Der Islam', 'Die Orthodoxie']],
            ],
            mittel: [
              ['An welcher Kirche predigte Zwingli?', 'Am Großmünster', ['Am Berner Münster', 'In der Kathedrale St. Pierre', 'Im Basler Münster']],
              ['Wie wurde Genf wegen Calvin genannt?', 'Das protestantische Rom', ['Das Paris der Alpen', 'Das Venedig des Nordens', 'Die Stadt der Uhren']],
              ['Wie starb Zwingli?', 'Im Kampf im Kappelerkrieg', ['Auf dem Scheiterhaufen', 'Im Exil', 'An der Pest']],
            ],
            schwer: [
              ['In welchem Jahr fiel Zwingli?', '1531', ['1519', '1536', '1564']],
              ['Seit wann wirkte Calvin in Genf?', 'Seit 1536', ['Seit 1517', 'Seit 1555', 'Seit 1600']],
              ['Wie nennt man die französischen Anhänger Calvins?', 'Hugenotten', ['Puritaner', 'Täufer', 'Lutheraner']],
            ],
          },
        },
      ],
    },
    {
      id: 'moderne-schweiz',
      name: 'Die moderne Schweiz',
      period: '1798–1864',
      events: [
        {
          id: 'bundesstaat',
          title: 'Neutralität und Bundesstaat',
          date: '1815–1848',
          text: [
            'Napoleon hatte die alte Eidgenossenschaft 1798 durch die Helvetische Republik ersetzt. Der Wiener Kongress bestätigte 1815 die Grenzen der Schweiz und ihre immerwährende Neutralität; Genf, Wallis und Neuenburg kamen als Kantone hinzu. Die Eidgenossenschaft blieb aber ein lockerer Staatenbund.',
            '1847 kam es zum letzten Krieg auf Schweizer Boden: Im Sonderbundskrieg besiegten die liberalen Kantone unter General Guillaume-Henri Dufour in wenigen Wochen die katholisch-konservativen Kantone, die sich zu einem „Sonderbund“ zusammengeschlossen hatten. 1848 gab sich die Schweiz eine Bundesverfassung und wurde ein Bundesstaat mit Parlament und Bundesrat; Bern wurde Bundesstadt.',
          ],
          quiz: {
            leicht: [
              ['Welche außenpolitische Haltung wurde der Schweiz 1815 bestätigt?', 'Die Neutralität', ['Ein Bündnis mit Frankreich', 'Die Mitgliedschaft im Deutschen Bund', 'Die Monarchie']],
              ['Welche Stadt wurde 1848 Bundesstadt?', 'Bern', ['Zürich', 'Genf', 'Basel']],
              ['In welchem Jahr wurde die Schweiz ein Bundesstaat?', '1848', ['1291', '1815', '1918']],
            ],
            mittel: [
              ['Wie hieß der letzte Krieg auf Schweizer Boden?', 'Sonderbundskrieg', ['Schwabenkrieg', 'Kappelerkrieg', 'Bauernkrieg']],
              ['Wer schuf 1798 die Helvetische Republik?', 'Napoleon', ['Metternich', 'Ludwig XIV.', 'Friedrich der Große']],
              ['Welche Kantone kamen 1815 hinzu?', 'Genf, Wallis und Neuenburg', ['Zürich, Bern und Luzern', 'Jura, Basel und Zug', 'Uri, Schwyz und Glarus']],
            ],
            schwer: [
              ['Welcher General führte 1847 die siegreichen Truppen?', 'Guillaume-Henri Dufour', ['Henri Guisan', 'Arnold Winkelried', 'Ulrich Wille']],
              ['Wie heißt die Schweizer Regierung seit 1848?', 'Bundesrat', ['Bundestag', 'Tagsatzung', 'Landsgemeinde']],
              ['Wie lange dauerte der Sonderbundskrieg etwa?', 'Wenige Wochen', ['Drei Jahre', 'Dreißig Jahre', 'Sechs Monate']],
            ],
          },
        },
        {
          id: 'rotes-kreuz',
          title: 'Henri Dunant und das Rote Kreuz',
          date: '1859–1864',
          text: [
            '1859 kam der Genfer Geschäftsmann Henri Dunant zufällig auf das Schlachtfeld von Solferino in Norditalien, wo Zehntausende Verwundete fast ohne Hilfe zurückgeblieben waren. Erschüttert organisierte er mit Frauen aus der Gegend die Versorgung und schrieb darüber das Buch „Eine Erinnerung an Solferino“.',
            '1863 gründete er in Genf mit anderen das Komitee, aus dem das Internationale Komitee vom Roten Kreuz wurde. 1864 unterzeichneten zwölf Staaten die erste Genfer Konvention zum Schutz verwundeter Soldaten. Das Zeichen – ein rotes Kreuz auf weißem Grund – ist die umgekehrte Schweizer Flagge. Dunant erhielt 1901 den ersten Friedensnobelpreis.',
          ],
          quiz: {
            leicht: [
              ['Wer gründete das Rote Kreuz?', 'Henri Dunant', ['Florence Nightingale', 'Alfred Nobel', 'Albert Schweitzer']],
              ['In welcher Stadt wurde es gegründet?', 'Genf', ['Zürich', 'Bern', 'Paris']],
              ['Woher stammt das Zeichen des Roten Kreuzes?', 'Es ist die umgekehrte Schweizer Flagge', ['Es stammt von den Kreuzrittern', 'Es ist das Wappen Genfs', 'Es war ein altes Apothekerzeichen']],
            ],
            mittel: [
              ['Welche Schlacht erlebte Dunant 1859?', 'Solferino', ['Waterloo', 'Sedan', 'Königgrätz']],
              ['Wie heißt das Abkommen von 1864 zum Schutz Verwundeter?', 'Genfer Konvention', ['Haager Konvention', 'Wiener Konvention', 'Berner Übereinkunft']],
              ['Welchen Preis erhielt Dunant 1901?', 'Den ersten Friedensnobelpreis', ['Den Literaturnobelpreis', 'Den Oscar', 'Den Karlspreis']],
            ],
            schwer: [
              ['In welchem heutigen Land liegt Solferino?', 'Italien', ['Frankreich', 'Österreich', 'Schweiz']],
              ['Wie viele Staaten unterzeichneten 1864 die erste Genfer Konvention?', 'Zwölf', ['Drei', 'Fünfzig', 'Hundert']],
              ['Wie heißt Dunants Buch über das Schlachtfeld?', '„Eine Erinnerung an Solferino“', ['„Im Westen nichts Neues“', '„Krieg und Frieden“', '„Die Waffen nieder!“']],
            ],
          },
        },
      ],
    },
    {
      id: 'jh20',
      name: 'Neutral im 20. Jahrhundert',
      period: 'seit 1914',
      events: [
        {
          id: 'neutralitaet',
          title: 'Weltkriege, Frauenstimmrecht und direkte Demokratie',
          date: '1914–2002',
          text: [
            'In beiden Weltkriegen blieb die Schweiz neutral. Im Zweiten Weltkrieg setzte General Henri Guisan auf die Verteidigung im „Réduit“, einer Festungszone in den Alpen. Zugleich wies die Schweiz viele jüdische Flüchtlinge an der Grenze ab und machte Geschäfte mit dem nationalsozialistischen Deutschland – das wurde erst in den 1990er Jahren gründlich aufgearbeitet.',
            'Die direkte Demokratie mit häufigen Volksabstimmungen prägt das Land. Frauen erhielten das Stimmrecht auf Bundesebene aber erst 1971 – später als in fast allen anderen Staaten Europas; der Kanton Appenzell Innerrhoden musste es 1990 auf Anordnung des Bundesgerichts einführen. Der EU trat die Schweiz nicht bei, sie regelt ihr Verhältnis über bilaterale Verträge; 2002 wurde sie per Volksabstimmung Mitglied der UNO.',
          ],
          quiz: {
            leicht: [
              ['Welche Haltung nahm die Schweiz in den Weltkriegen ein?', 'Sie blieb neutral', ['Sie kämpfte für Deutschland', 'Sie kämpfte für die Alliierten', 'Sie wurde besetzt']],
              ['Wann erhielten Frauen auf Bundesebene das Stimmrecht?', '1971', ['1918', '1945', '1990']],
              ['Welcher Organisation trat die Schweiz 2002 bei?', 'Der UNO', ['Der EU', 'Der NATO', 'Dem Euro-Raum']],
            ],
            mittel: [
              ['Wie hieß die Festungszone in den Alpen im Zweiten Weltkrieg?', 'Réduit', ['Maginot-Linie', 'Westwall', 'Alpenfestung Tell']],
              ['Welcher General führte die Armee im Zweiten Weltkrieg?', 'Henri Guisan', ['Guillaume-Henri Dufour', 'Ulrich Wille', 'Arnold Winkelried']],
              ['Wie regelt die Schweiz ihr Verhältnis zur EU?', 'Über bilaterale Verträge', ['Als Vollmitglied', 'Über die NATO', 'Gar nicht']],
            ],
            schwer: [
              ['Welcher Kanton führte das Frauenstimmrecht als letzter ein?', 'Appenzell Innerrhoden', ['Zürich', 'Uri', 'Wallis']],
              ['In welchem Jahr musste er es einführen?', '1990', ['1971', '1959', '2002']],
              ['Wie wurde über den UNO-Beitritt entschieden?', 'Per Volksabstimmung', ['Durch den Bundesrat allein', 'Durch das Bundesgericht', 'Durch die Kantonsregierungen']],
            ],
          },
        },
      ],
    },
  ],
};
