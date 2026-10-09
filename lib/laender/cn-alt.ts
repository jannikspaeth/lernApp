import type { CountryHistory } from './types';

export const CN_ALT: CountryHistory = {
  code: 'CN',
  epochs: [
    {
      id: 'kaiserreich',
      name: 'Das Kaiserreich',
      period: 'ca. 1600 v. Chr. – 1644',
      events: [
        {
          id: 'fruehe-dynastien',
          title: 'Frühe Dynastien und Konfuzius',
          date: 'ca. 1600–221 v. Chr.',
          text: [
            'Die chinesische Zivilisation entstand am Gelben Fluss (Huang He). Unter der Shang-Dynastie (etwa 1600–1046 v. Chr.) entwickelte sich die chinesische Schrift; erhalten ist sie auf Orakelknochen, mit denen Priester die Zukunft befragten. Es folgte die lange Zhou-Dynastie, unter der sich die Vorstellung vom „Mandat des Himmels“ verbreitete: Ein Herrscher regiert, solange er gerecht ist – sonst darf er gestürzt werden.',
            'In der unruhigen späten Zhou-Zeit lebten große Denker. Konfuzius (551–479 v. Chr.) lehrte Respekt vor Eltern und Älteren, Bildung, Pflichtbewusstsein und gerechtes Regieren; seine Lehre prägte China über zwei Jahrtausende. Dem Laozi wird das „Daodejing“ zugeschrieben, der Grundtext des Daoismus.',
          ],
          quiz: {
            leicht: [
              ['An welchem Fluss entstand die chinesische Zivilisation?', 'Am Gelben Fluss', ['Am Nil', 'Am Ganges', 'Am Mekong']],
              ['Welcher Denker prägte China über zwei Jahrtausende?', 'Konfuzius', ['Buddha', 'Sokrates', 'Mao Zedong']],
              ['Worauf ist die frühe chinesische Schrift erhalten?', 'Auf Orakelknochen', ['Auf Papyrus', 'Auf Tontafeln', 'Auf Pergament']],
            ],
            mittel: [
              ['Unter welcher Dynastie entwickelte sich die chinesische Schrift?', 'Unter der Shang-Dynastie', ['Unter der Ming-Dynastie', 'Unter der Qing-Dynastie', 'Unter der Han-Dynastie']],
              ['Was besagt das „Mandat des Himmels“?', 'Ein Herrscher regiert, solange er gerecht ist', ['Der Kaiser ist ein Gott', 'Das Volk wählt den Kaiser', 'Nur Mönche dürfen herrschen']],
              ['Wem wird das „Daodejing“ zugeschrieben?', 'Laozi', ['Konfuzius', 'Mengzi', 'Sunzi']],
            ],
            schwer: [
              ['Wann lebte Konfuzius?', '551–479 v. Chr.', ['221–206 v. Chr.', '1600–1500 v. Chr.', '100–50 v. Chr.']],
              ['Wann endete die Shang-Dynastie?', '1046 v. Chr.', ['221 v. Chr.', '1600 v. Chr.', '618 n. Chr.']],
              ['Wie heißt der Gelbe Fluss auf Chinesisch?', 'Huang He', ['Jangtsekiang', 'Mekong', 'Amur']],
            ],
          },
        },
        {
          id: 'erster-kaiser',
          title: 'Der erste Kaiser und die Han',
          date: '221 v. Chr. – 220 n. Chr.',
          text: [
            '221 v. Chr. besiegte König Zheng von Qin alle rivalisierenden Reiche und nannte sich Qin Shihuangdi – „Erster Erhabener Kaiser“. Er vereinheitlichte Schrift, Maße, Gewichte und Münzen, ließ ältere Grenzwälle zu einer frühen Großen Mauer verbinden und verfolgte Kritiker brutal. Für sein Grab wurde die Terrakotta-Armee geschaffen: über 7.000 lebensgroße Tonkrieger, 1974 von Bauern bei Xi’an entdeckt. Vom Namen Qin leitet sich vermutlich das Wort „China“ ab.',
            'Die folgende Han-Dynastie (206 v. Chr. – 220 n. Chr.) gilt als klassische Epoche; bis heute nennen sich die meisten Chinesen „Han“. Über die Seidenstraße gelangte chinesische Seide bis nach Rom. Um 105 n. Chr. verbesserte der Beamte Cai Lun die Herstellung von Papier.',
          ],
          quiz: {
            leicht: [
              ['Wer war der erste Kaiser Chinas?', 'Qin Shihuangdi', ['Kublai Khan', 'Puyi', 'Mao Zedong']],
              ['Welche Tonfiguren bewachen sein Grab?', 'Die Terrakotta-Armee', ['Die Rote Armee', 'Die Steinerne Garde', 'Die Jade-Armee']],
              ['Welche Ware gab der Seidenstraße ihren Namen?', 'Seide', ['Kaffee', 'Öl', 'Kartoffeln']],
            ],
            mittel: [
              ['Wann einte Qin Shihuangdi China?', '221 v. Chr.', ['1600 v. Chr.', '1368', '1912']],
              ['Wie nennen sich die meisten Chinesen nach einer Dynastie?', 'Han', ['Qin', 'Ming', 'Tang']],
              ['Wer verbesserte um 105 n. Chr. die Papierherstellung?', 'Cai Lun', ['Konfuzius', 'Marco Polo', 'Zheng He']],
            ],
            schwer: [
              ['Wann wurde die Terrakotta-Armee entdeckt?', '1974', ['1900', '1949', '2001']],
              ['Bei welcher Stadt liegt sie?', 'Bei Xi’an', ['Bei Peking', 'Bei Shanghai', 'Bei Nanjing']],
              ['Wie viele Tonkrieger umfasst sie etwa?', 'Über 7.000', ['Rund 70', 'Rund 700', 'Über 70.000']],
            ],
          },
        },
        {
          id: 'ming',
          title: 'Tang, Song, Mongolen und Ming',
          date: '618–1644',
          text: [
            'Unter der Tang-Dynastie (618–907) war China eines der reichsten Reiche der Welt; die Hauptstadt Chang’an, das heutige Xi’an, zählte rund eine Million Einwohner. In der Tang- und Song-Zeit entstanden oder verbreiteten sich wichtige Erfindungen: der Holzblockdruck, das Schießpulver, der Kompass in der Seefahrt und das Papiergeld.',
            '1279 eroberten die Mongolen unter Kublai Khan ganz China und gründeten die Yuan-Dynastie; an Kublais Hof soll auch Marco Polo gewesen sein. 1368 vertrieb die Ming-Dynastie die Mongolen. Sie baute die Große Mauer in ihrer heutigen Form aus Stein und Ziegeln aus und vollendete 1420 in Peking die Verbotene Stadt, den Kaiserpalast. Admiral Zheng He führte zwischen 1405 und 1433 riesige Flotten bis nach Ostafrika.',
          ],
          quiz: {
            leicht: [
              ['Wie heißt der Kaiserpalast in Peking?', 'Die Verbotene Stadt', ['Der Himmelspalast', 'Die Goldene Stadt', 'Der Rote Palast']],
              ['Welches Volk eroberte 1279 China?', 'Die Mongolen', ['Die Japaner', 'Die Briten', 'Die Türken']],
              ['Welche Erfindung stammt aus China?', 'Das Schießpulver', ['Die Dampfmaschine', 'Das Telefon', 'Die Glühbirne']],
            ],
            mittel: [
              ['Wer gründete die Yuan-Dynastie?', 'Kublai Khan', ['Dschingis Khan', 'Qin Shihuangdi', 'Zheng He']],
              ['Welche Dynastie baute die Große Mauer in ihrer heutigen Form aus?', 'Die Ming', ['Die Qin', 'Die Han', 'Die Tang']],
              ['Welcher Admiral segelte bis nach Ostafrika?', 'Zheng He', ['Marco Polo', 'Kublai Khan', 'Vasco da Gama']],
            ],
            schwer: [
              ['Wann wurde die Verbotene Stadt vollendet?', '1420', ['1279', '1644', '1912']],
              ['Wie hieß die Hauptstadt der Tang?', 'Chang’an', ['Peking', 'Nanjing', 'Kanton']],
              ['Wann vertrieb die Ming-Dynastie die Mongolen?', '1368', ['1279', '1420', '1644']],
            ],
          },
        },
      ],
    },
    {
      id: 'moderne',
      name: 'Demütigung, Revolution und Aufstieg',
      period: 'seit 1839',
      events: [
        {
          id: 'opiumkriege',
          title: 'Opiumkriege und Ende des Kaiserreichs',
          date: '1839–1912',
          text: [
            'Ab 1644 herrschte die mandschurische Qing-Dynastie. Im 19. Jahrhundert schmuggelten britische Händler große Mengen Opium aus Indien nach China. Als der Kaiser den Handel unterbinden ließ, begann Großbritannien 1839 den Ersten Opiumkrieg. China verlor und musste im Vertrag von Nanking 1842 Häfen öffnen und Hongkong abtreten – der Beginn des „Jahrhunderts der Demütigung“ durch ungleiche Verträge.',
            'Der Taiping-Aufstand (1850–1864) kostete zig Millionen Menschen das Leben; der fremdenfeindliche Boxeraufstand 1900 wurde von einer internationalen Truppe, auch mit deutschen Soldaten, niedergeschlagen. 1911 brach eine Revolution aus; 1912 dankte der letzte Kaiser, der sechsjährige Puyi, ab, und Sun Yat-sen rief die Republik China aus.',
          ],
          quiz: {
            leicht: [
              ['Mit welcher Droge handelten britische Händler in China?', 'Mit Opium', ['Mit Kokain', 'Mit Tabak', 'Mit Kaffee']],
              ['Welche Stadt musste China 1842 an Großbritannien abtreten?', 'Hongkong', ['Macau', 'Shanghai', 'Taipeh']],
              ['Wer war der letzte Kaiser Chinas?', 'Puyi', ['Qin Shihuangdi', 'Kublai Khan', 'Mao Zedong']],
            ],
            mittel: [
              ['Wann begann der Erste Opiumkrieg?', '1839', ['1644', '1900', '1912']],
              ['Wer rief 1912 die Republik China aus?', 'Sun Yat-sen', ['Mao Zedong', 'Chiang Kai-shek', 'Deng Xiaoping']],
              ['Welcher Aufstand richtete sich 1900 gegen Ausländer?', 'Der Boxeraufstand', ['Der Taiping-Aufstand', 'Der Ming-Aufstand', 'Der Seidenaufstand']],
            ],
            schwer: [
              ['Wie heißt der Vertrag von 1842?', 'Vertrag von Nanking', ['Vertrag von Tianjin', 'Vertrag von Shimonoseki', 'Vertrag von Peking']],
              ['Welche Dynastie herrschte ab 1644?', 'Die Qing', ['Die Ming', 'Die Yuan', 'Die Song']],
              ['Wie alt war Puyi bei seiner Abdankung?', 'Sechs Jahre', ['Sechzehn Jahre', 'Sechzig Jahre', 'Drei Monate']],
            ],
          },
        },
        {
          id: 'mao',
          title: 'Bürgerkrieg und Mao Zedong',
          date: '1927–1976',
          text: [
            'Ab 1927 kämpften die Nationalisten (Kuomintang) unter Chiang Kai-shek und die Kommunisten unter Mao Zedong um die Macht. Auf dem „Langen Marsch“ 1934/35 entkamen die Kommunisten der Vernichtung. Ab 1937 führte Japan einen brutalen Krieg gegen China; beim Massaker von Nanking 1937/38 wurden Zehntausende bis Hunderttausende Menschen ermordet. Nach Japans Niederlage siegten die Kommunisten im Bürgerkrieg: Am 1. Oktober 1949 rief Mao in Peking die Volksrepublik China aus; die Kuomintang zog sich nach Taiwan zurück.',
            'Maos „Großer Sprung nach vorn“ (1958–1962) sollte China in kurzer Zeit industrialisieren, führte aber zu einer Hungersnot mit zig Millionen Toten. In der „Kulturrevolution“ ab 1966 verfolgten fanatisierte Rote Garden Lehrer, Intellektuelle und angebliche Gegner; Tempel und Kulturgüter wurden zerstört. Sie endete erst mit Maos Tod 1976.',
          ],
          quiz: {
            leicht: [
              ['Wer rief 1949 die Volksrepublik China aus?', 'Mao Zedong', ['Sun Yat-sen', 'Chiang Kai-shek', 'Deng Xiaoping']],
              ['Wohin zogen sich die Nationalisten 1949 zurück?', 'Nach Taiwan', ['Nach Hongkong', 'Nach Japan', 'Nach Korea']],
              ['Wie heißt die Kampagne ab 1966, in der Rote Garden Menschen verfolgten?', 'Kulturrevolution', ['Großer Sprung nach vorn', 'Langer Marsch', 'Opiumkrieg']],
            ],
            mittel: [
              ['An welchem Tag wurde die Volksrepublik gegründet?', '1. Oktober 1949', ['4. Juni 1949', '1. Januar 1912', '1. Mai 1949']],
              ['Wie hieß der Rückzug der Kommunisten 1934/35?', 'Langer Marsch', ['Großer Sprung', 'Roter Marsch', 'Seidenmarsch']],
              ['Was löste der „Große Sprung nach vorn“ aus?', 'Eine Hungersnot', ['Einen Wirtschaftsboom', 'Einen Krieg mit Japan', 'Eine Mondmission']],
            ],
            schwer: [
              ['Wie hieß der Anführer der Nationalisten?', 'Chiang Kai-shek', ['Sun Yat-sen', 'Zhou Enlai', 'Lin Biao']],
              ['Wann endete die Kulturrevolution?', 'Mit Maos Tod 1976', ['1966', '1989', '1958']],
              ['Welches Massaker verübten japanische Truppen 1937/38?', 'Das Massaker von Nanking', ['Das Massaker auf dem Tiananmen-Platz', 'Das Massaker von Babyn Jar', 'Das Massaker von My Lai']],
            ],
          },
        },
        {
          id: 'reformen',
          title: 'Reform, Tiananmen und Aufstieg',
          date: 'seit 1978',
          text: [
            'Ab 1978 leitete Deng Xiaoping Wirtschaftsreformen ein: Bauern durften Überschüsse verkaufen, Sonderwirtschaftszonen wie Shenzhen öffneten sich für ausländische Firmen. China wurde zur „Werkbank der Welt“; Hunderte Millionen Menschen entkamen der Armut. Politische Freiheit gab es jedoch nicht: Am 4. Juni 1989 ließ die Führung die Demokratiebewegung auf dem Platz des Himmlischen Friedens (Tiananmen) in Peking blutig niederschlagen.',
            '1997 erhielt China Hongkong von Großbritannien zurück („ein Land, zwei Systeme“), 2001 trat es der Welthandelsorganisation bei, und 2008 richtete Peking die Olympischen Spiele aus. Seit 2012 führt Xi Jinping Partei und Staat und hat seine Macht stark ausgebaut. China ist heute die zweitgrößte Volkswirtschaft der Welt.',
          ],
          quiz: {
            leicht: [
              ['Wo wurde 1989 die Demokratiebewegung niedergeschlagen?', 'Auf dem Tiananmen-Platz', ['Auf dem Roten Platz', 'In Hongkong', 'In Shanghai']],
              ['Welche Stadt erhielt China 1997 von Großbritannien zurück?', 'Hongkong', ['Taipeh', 'Singapur', 'Seoul']],
              ['Wer führt China seit 2012?', 'Xi Jinping', ['Deng Xiaoping', 'Mao Zedong', 'Hu Jintao']],
            ],
            mittel: [
              ['Wer leitete ab 1978 die Wirtschaftsreformen ein?', 'Deng Xiaoping', ['Mao Zedong', 'Xi Jinping', 'Zhou Enlai']],
              ['Wie lautet das Prinzip für Hongkong?', '„Ein Land, zwei Systeme“', ['„Zwei Länder, ein System“', '„Ein Land, eine Partei“', '„Freiheit für alle“']],
              ['Wann richtete Peking die Olympischen Sommerspiele aus?', '2008', ['2000', '1989', '2016']],
            ],
            schwer: [
              ['Wann trat China der Welthandelsorganisation bei?', '2001', ['1978', '1997', '2010']],
              ['Welche Stadt war eine der ersten Sonderwirtschaftszonen?', 'Shenzhen', ['Peking', 'Xi’an', 'Lhasa']],
              ['An welchem Tag wurde die Bewegung auf dem Tiananmen-Platz niedergeschlagen?', '4. Juni 1989', ['1. Oktober 1989', '9. November 1989', '4. Mai 1919']],
            ],
          },
        },
      ],
    },
  ],
};
