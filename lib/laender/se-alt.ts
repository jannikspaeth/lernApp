import type { CountryHistory } from './types';

export const SE_ALT: CountryHistory = {
  code: 'SE',
  epochs: [
    {
      id: 'mittelalter',
      name: 'Wikinger und Wasa',
      period: '800–1560',
      events: [
        {
          id: 'wikinger',
          title: 'Wikinger und Kalmarer Union',
          date: '800–1520',
          text: [
            'In der Wikingerzeit (etwa 800–1050) fuhren Händler und Krieger aus dem heutigen Schweden vor allem nach Osten: Über Flüsse gelangten sie bis Kiew und Konstantinopel; in Osteuropa nannte man sie Waräger. Birka auf einer Insel im Mälarsee war ein wichtiger Handelsort. Um 1008 ließ sich mit Olof Skötkonung der erste schwedische König taufen; die Christianisierung zog sich aber noch lange hin.',
            '1397 vereinigten sich Dänemark, Norwegen und Schweden unter Königin Margarethe I. in der Kalmarer Union. Die Schweden fühlten sich jedoch von den dänischen Königen beherrscht. 1520 ließ der Dänenkönig Christian II. in Stockholm Dutzende schwedische Adlige und Geistliche hinrichten – das „Stockholmer Blutbad“. Es führte zum Aufstand und für Schweden zum Ende der Union.',
          ],
          quiz: {
            leicht: [
              ['Wie nannte man die schwedischen Wikinger in Osteuropa?', 'Waräger', ['Normannen', 'Goten', 'Kelten']],
              ['Mit welchen Ländern bildete Schweden die Kalmarer Union?', 'Mit Dänemark und Norwegen', ['Mit Finnland und Russland', 'Mit Deutschland und Polen', 'Mit Island und England']],
              ['In welcher Stadt geschah das „Blutbad“ von 1520?', 'In Stockholm', ['In Kopenhagen', 'In Oslo', 'In Uppsala']],
            ],
            mittel: [
              ['Welche Königin begründete 1397 die Union?', 'Margarethe I.', ['Christina', 'Victoria', 'Elisabeth']],
              ['Wie hieß ein wichtiger Handelsort der Wikinger im Mälarsee?', 'Birka', ['Haithabu', 'Kaupang', 'Visby']],
              ['Welcher dänische König ließ 1520 schwedische Adlige hinrichten?', 'Christian II.', ['Knut der Große', 'Christian IV.', 'Harald Blauzahn']],
            ],
            schwer: [
              ['Wer war der erste getaufte schwedische König?', 'Olof Skötkonung', ['Gustav Wasa', 'Erik der Heilige', 'Magnus Ladulås']],
              ['Welchen Zeitraum umfasst die Wikingerzeit etwa?', '800–1050', ['500–700', '1100–1300', '1400–1600']],
              ['Bis in welche Stadt reisten schwedische Wikinger?', 'Bis Konstantinopel', ['Bis Delhi', 'Bis Peking', 'Bis Kapstadt']],
            ],
          },
        },
        {
          id: 'wasa',
          title: 'Gustav Wasa und die Reformation',
          date: '1523–1560',
          text: [
            'Nach dem Stockholmer Blutbad führte der Adlige Gustav Eriksson Wasa einen Aufstand gegen die Dänen an. Am 6. Juni 1523 wurde er zum König gewählt – der Tag ist heute schwedischer Nationalfeiertag. Damit war Schweden ein unabhängiges Königreich.',
            'Gustav Wasa machte das Königtum erblich und stärkte den Staat. Er führte die lutherische Reformation ein, zog Kirchengüter ein und füllte damit die Staatskasse; 1541 erschien die Bibel auf Schwedisch. Nach ihm ist der berühmte Skilanglauf Vasaloppet benannt: Er erinnert an Gustavs Flucht auf Skiern vor den Dänen.',
          ],
          quiz: {
            leicht: [
              ['Wer wurde 1523 König des unabhängigen Schweden?', 'Gustav Wasa', ['Gustav II. Adolf', 'Karl XII.', 'Olof Palme']],
              ['Welche Konfession führte er ein?', 'Die lutherische', ['Die katholische', 'Die orthodoxe', 'Die calvinistische']],
              ['Welcher berühmte Skilanglauf ist nach ihm benannt?', 'Vasaloppet', ['Birkebeinerrennet', 'Engadin Skimarathon', 'Tour de Ski']],
            ],
            mittel: [
              ['Welcher Tag ist schwedischer Nationalfeiertag?', '6. Juni', ['17. Mai', '1. August', '24. Juni']],
              ['Gegen welches Land führte Gustav Wasa seinen Aufstand?', 'Gegen Dänemark', ['Gegen Russland', 'Gegen Norwegen', 'Gegen Polen']],
              ['Womit füllte Gustav die Staatskasse?', 'Mit eingezogenen Kirchengütern', ['Mit Gold aus Amerika', 'Mit Zöllen auf Tee', 'Mit Beute aus Russland']],
            ],
            schwer: [
              ['Wann erschien die Bibel auf Schwedisch?', '1541', ['1523', '1611', '1700']],
              ['Was änderte Gustav am Königtum?', 'Er machte es erblich', ['Er schaffte es ab', 'Er teilte es mit Dänemark', 'Er ließ alle vier Jahre wählen']],
              ['Woran erinnert der Vasaloppet?', 'An Gustavs Flucht auf Skiern', ['An eine Winterschlacht', 'An eine Königskrönung', 'An eine Pilgerreise']],
            ],
          },
        },
      ],
    },
    {
      id: 'grossmacht',
      name: 'Großmacht und Neutralität',
      period: '1611–1905',
      events: [
        {
          id: 'grossmacht',
          title: 'Schweden als Großmacht',
          date: '1611–1721',
          text: [
            'Im 17. Jahrhundert stieg Schweden zur Großmacht im Ostseeraum auf. König Gustav II. Adolf griff 1630 auf protestantischer Seite in den Dreißigjährigen Krieg ein und errang große Siege, fiel aber 1632 in der Schlacht bei Lützen. Im Westfälischen Frieden 1648 erhielt Schweden unter anderem Vorpommern und Bremen-Verden. Seine Tochter Christina dankte 1654 ab, trat zum Katholizismus über und zog nach Rom.',
            'Das Ende der Großmachtzeit kam mit dem Großen Nordischen Krieg: König Karl XII. wurde 1709 bei Poltawa von Peter dem Großen vernichtend geschlagen und fiel 1718 in Norwegen. Im Frieden von Nystad 1721 musste Schweden seine Gebiete im Baltikum an Russland abtreten.',
          ],
          quiz: {
            leicht: [
              ['Welcher König griff in den Dreißigjährigen Krieg ein?', 'Gustav II. Adolf', ['Gustav Wasa', 'Karl XII.', 'Christian IV.']],
              ['Wo fiel er 1632?', 'Bei Lützen', ['Bei Poltawa', 'Bei Leipzig', 'Bei Prag']],
              ['Gegen wen verlor Karl XII. 1709 bei Poltawa?', 'Gegen Russland', ['Gegen Dänemark', 'Gegen Polen', 'Gegen Preußen']],
            ],
            mittel: [
              ['Welche Königin dankte 1654 ab und zog nach Rom?', 'Christina', ['Margarethe', 'Victoria', 'Ulrika Eleonora']],
              ['Welcher Krieg beendete Schwedens Großmachtzeit?', 'Der Große Nordische Krieg', ['Der Dreißigjährige Krieg', 'Der Siebenjährige Krieg', 'Der Krimkrieg']],
              ['Welches deutsche Gebiet erhielt Schweden 1648?', 'Vorpommern', ['Bayern', 'Sachsen', 'Schlesien']],
            ],
            schwer: [
              ['Mit welchem Frieden musste Schweden 1721 Gebiete abtreten?', 'Frieden von Nystad', ['Westfälischer Friede', 'Frieden von Kiel', 'Frieden von Stolbowo']],
              ['Wo fiel Karl XII. 1718?', 'In Norwegen', ['In Russland', 'In der Ukraine', 'In Polen']],
              ['Wann griff Gustav II. Adolf in den Krieg ein?', '1630', ['1618', '1648', '1611']],
            ],
          },
        },
        {
          id: 'nobel',
          title: 'Bernadotte, Nobel und Auswanderung',
          date: '1809–1905',
          text: [
            '1809 musste Schweden Finnland an Russland abtreten. Im Jahr darauf wählten die Stände den französischen Marschall Jean-Baptiste Bernadotte zum Thronfolger; als Karl XIV. Johann begründete er 1818 das bis heute regierende Königshaus Bernadotte. 1814 zwang Schweden Norwegen in eine Union, die 1905 friedlich aufgelöst wurde. Seit 1814 hat Schweden keinen Krieg mehr geführt.',
            'Im 19. Jahrhundert war Schweden arm; rund 1,3 Millionen Menschen wanderten zwischen 1850 und 1930 nach Amerika aus. Zugleich begann die Industrialisierung. Der Chemiker Alfred Nobel erfand 1867 das Dynamit; mit seinem Vermögen stiftete er die Nobelpreise, die seit 1901 verliehen werden.',
          ],
          quiz: {
            leicht: [
              ['Wer erfand das Dynamit?', 'Alfred Nobel', ['Anders Celsius', 'Carl von Linné', 'Ingvar Kamprad']],
              ['Welche Preise stiftete er?', 'Die Nobelpreise', ['Die Oscars', 'Den Karlspreis', 'Die Olympischen Medaillen']],
              ['Wohin wanderten viele Schweden im 19. Jahrhundert aus?', 'Nach Amerika', ['Nach Afrika', 'Nach Russland', 'Nach Australien']],
            ],
            mittel: [
              ['Welches Land verlor Schweden 1809 an Russland?', 'Finnland', ['Norwegen', 'Estland', 'Dänemark']],
              ['Mit welchem Land war Schweden 1814–1905 in einer Union verbunden?', 'Mit Norwegen', ['Mit Dänemark', 'Mit Finnland', 'Mit Island']],
              ['Seit wann führt Schweden keinen Krieg mehr?', 'Seit 1814', ['Seit 1945', 'Seit 1721', 'Seit 1905']],
            ],
            schwer: [
              ['Welcher französische Marschall wurde schwedischer König?', 'Jean-Baptiste Bernadotte', ['Michel Ney', 'Joachim Murat', 'Louis-Nicolas Davout']],
              ['Wann erfand Nobel das Dynamit?', '1867', ['1901', '1809', '1888']],
              ['Wie viele Schweden wanderten 1850–1930 etwa aus?', 'Rund 1,3 Millionen', ['Rund 13.000', 'Rund 130.000', 'Rund 13 Millionen']],
            ],
          },
        },
      ],
    },
    {
      id: 'jh20',
      name: 'Das Volksheim',
      period: 'seit 1932',
      events: [
        {
          id: 'folkhemmet',
          title: 'Wohlfahrtsstaat und Gegenwart',
          date: '1932–2024',
          text: [
            'Ab 1932 regierten die Sozialdemokraten über Jahrzehnte und bauten den Wohlfahrtsstaat auf, das „Volksheim“ (folkhemmet): Sozialversicherung, kostenlose Bildung und Gesundheitsversorgung, finanziert durch hohe Steuern. Im Zweiten Weltkrieg blieb Schweden neutral, ließ aber deutsche Truppentransporte durch das Land; zugleich rettete der Diplomat Raoul Wallenberg in Budapest Tausende ungarische Juden.',
            'Ministerpräsident Olof Palme wurde 1986 auf offener Straße in Stockholm erschossen; der Mord wurde nie vollständig aufgeklärt. 1995 trat Schweden der EU bei, behielt aber die Krone als Währung. Nach dem russischen Angriff auf die Ukraine gab Schweden seine lange Bündnisfreiheit auf und wurde im März 2024 Mitglied der NATO.',
          ],
          quiz: {
            leicht: [
              ['Wie nennt man den schwedischen Wohlfahrtsstaat?', 'Volksheim', ['Wirtschaftswunder', 'New Deal', 'Commonwealth']],
              ['Welche Haltung hatte Schweden im Zweiten Weltkrieg?', 'Es blieb neutral', ['Es war mit Deutschland verbündet', 'Es wurde besetzt', 'Es kämpfte für die Alliierten']],
              ['Welchem Militärbündnis trat Schweden 2024 bei?', 'Der NATO', ['Dem Warschauer Pakt', 'Der UNO', 'Der Arabischen Liga']],
            ],
            mittel: [
              ['Welcher Ministerpräsident wurde 1986 erschossen?', 'Olof Palme', ['Ingvar Carlsson', 'Göran Persson', 'Carl Bildt']],
              ['Welcher Diplomat rettete in Budapest Juden?', 'Raoul Wallenberg', ['Dag Hammarskjöld', 'Oskar Schindler', 'Alfred Nobel']],
              ['Welche Währung behielt Schweden in der EU?', 'Die Krone', ['Den Euro', 'Den Taler', 'Den Franken']],
            ],
            schwer: [
              ['Seit wann regierten die Sozialdemokraten über Jahrzehnte?', 'Seit 1932', ['Seit 1814', 'Seit 1945', 'Seit 1995']],
              ['Wann trat Schweden der EU bei?', '1995', ['1973', '1986', '2004']],
              ['Was erlaubte Schweden im Krieg trotz Neutralität?', 'Deutsche Truppentransporte durch das Land', ['Britische Luftwaffenbasen', 'Eine sowjetische Besatzung', 'Einen Angriff auf Norwegen']],
            ],
          },
        },
      ],
    },
  ],
};
