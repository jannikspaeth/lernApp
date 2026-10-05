import type { CountryHistory } from './types';

export const ET: CountryHistory = {
  code: 'ET',
  epochs: [
    {
      id: 'antike',
      name: 'Aksum und das christliche Hochland',
      period: 'bis 17. Jahrhundert',
      events: [
        {
          id: 'aksum',
          title: 'Lucy, Aksum und die Königin von Saba',
          date: 'bis 7. Jahrhundert',
          text: [
            'Äthiopien gilt als eine Wiege der Menschheit: 1974 fanden Forscher im Afar-Dreieck das rund 3,2 Millionen Jahre alte Skelett eines Vormenschen, „Lucy“. Im 1. Jahrhundert n. Chr. entstand das Reich von Aksum, eine Handelsmacht am Roten Meer, die eigene Münzen prägte; berühmt sind seine riesigen Stelen aus Stein. Um 330 nahm König Ezana das Christentum an – Aksum war damit eines der ersten christlichen Reiche der Welt.',
            'Eine Legende verbindet Äthiopien mit der Bibel: Die Königin von Saba soll König Salomo besucht haben, und ihr gemeinsamer Sohn Menelik I. habe die Bundeslade nach Aksum gebracht. Auf diese Abstammung berief sich die „Salomonische Dynastie“, die mit Unterbrechungen bis 1974 herrschte.',
          ],
          quiz: {
            leicht: [
              ['Wie heißt das berühmte Vormenschen-Skelett aus Äthiopien?', 'Lucy', ['Ötzi', 'Turkana-Junge', 'Toumaï']],
              ['Welche Religion nahm Aksum um 330 an?', 'Das Christentum', ['Den Islam', 'Den Buddhismus', 'Das Judentum']],
              ['Welche Königin soll König Salomo besucht haben?', 'Die Königin von Saba', ['Kleopatra', 'Nofretete', 'Hatschepsut']],
            ],
            mittel: [
              ['Wie alt ist Lucy etwa?', 'Rund 3,2 Millionen Jahre', ['Rund 32.000 Jahre', 'Rund 320.000 Jahre', 'Rund 32 Millionen Jahre']],
              ['Wofür ist Aksum berühmt?', 'Für seine riesigen Stelen', ['Für Pyramiden', 'Für Kanäle', 'Für Bronzeköpfe']],
              ['Welcher König nahm das Christentum an?', 'Ezana', ['Menelik II.', 'Haile Selassie', 'Lalibela']],
            ],
            schwer: [
              ['Wo wurde Lucy 1974 gefunden?', 'Im Afar-Dreieck', ['In der Olduvai-Schlucht', 'Am Turkanasee', 'In der Sahara']],
              ['Wer soll der Sohn von Salomo und der Königin von Saba gewesen sein?', 'Menelik I.', ['Ezana', 'Lalibela', 'Fasilides']],
              ['Bis wann herrschte die Salomonische Dynastie, mit Unterbrechungen?', 'Bis 1974', ['Bis 1896', 'Bis 1530', 'Bis 1936']],
            ],
          },
        },
        {
          id: 'lalibela',
          title: 'Lalibela und das christliche Hochland',
          date: '12.–17. Jahrhundert',
          text: [
            'Nach dem Niedergang Aksums herrschte die Zagwe-Dynastie. Ihr König Lalibela ließ um 1200 in der Stadt, die heute seinen Namen trägt, elf Kirchen vollständig aus dem gewachsenen Fels schlagen – als „neues Jerusalem“. Die Felsenkirchen, darunter die kreuzförmige Georgskirche, sind UNESCO-Welterbe und bis heute Pilgerorte.',
            '1270 übernahm wieder die Salomonische Dynastie die Macht. Im 16. Jahrhundert griff das muslimische Sultanat Adal unter Ahmad Gran das christliche Reich an; mit portugiesischer Hilfe wurde der Angriff abgewehrt. Im 17. Jahrhundert entstand in Gondar eine Hauptstadt mit burgartigen Palästen. Äthiopien hat einen eigenen Kalender, der rund sieben bis acht Jahre hinter dem gregorianischen liegt, und eine eigene Schrift.',
          ],
          quiz: {
            leicht: [
              ['Wofür ist Lalibela berühmt?', 'Für seine Felsenkirchen', ['Für Pyramiden', 'Für Moscheen', 'Für Wolkenkratzer']],
              ['Welcher Kirche gehört die Mehrheit im Hochland an?', 'Der äthiopisch-orthodoxen Kirche', ['Der katholischen Kirche', 'Der anglikanischen Kirche', 'Der lutherischen Kirche']],
              ['Wie viele Felsenkirchen ließ König Lalibela schlagen?', 'Elf', ['Drei', 'Hundert', 'Eine']],
            ],
            mittel: [
              ['Welche Form hat die berühmte Georgskirche?', 'Die eines Kreuzes', ['Die eines Sterns', 'Die eines Kreises', 'Die einer Pyramide']],
              ['Welches Land half im 16. Jahrhundert gegen das Sultanat Adal?', 'Portugal', ['Spanien', 'Das Osmanische Reich', 'England']],
              ['Welche Stadt wurde im 17. Jahrhundert Hauptstadt mit Palästen?', 'Gondar', ['Addis Abeba', 'Aksum', 'Harar']],
            ],
            schwer: [
              ['Welche Dynastie herrschte vor 1270?', 'Die Zagwe-Dynastie', ['Die Salomonische Dynastie', 'Die Fatimiden', 'Die Ptolemäer']],
              ['Wer führte das Sultanat Adal an?', 'Ahmad Gran', ['Saladin', 'Haile Selassie', 'Mansa Musa']],
              ['Um wie viele Jahre liegt der äthiopische Kalender etwa zurück?', 'Um sieben bis acht Jahre', ['Um ein Jahr', 'Um hundert Jahre', 'Er liegt voraus']],
            ],
          },
        },
      ],
    },
    {
      id: 'moderne',
      name: 'Freiheit und Umbrüche',
      period: 'seit 1896',
      events: [
        {
          id: 'adwa',
          title: 'Adwa und Haile Selassie',
          date: '1896–1974',
          text: [
            'Während der Wettlauf um Afrika fast den ganzen Kontinent unter Kolonialherrschaft brachte, behauptete sich Äthiopien. Kaiser Menelik II. besiegte am 1. März 1896 bei Adwa ein italienisches Heer – einer der größten Siege einer afrikanischen Armee über eine europäische Kolonialmacht. Äthiopien wurde nie dauerhaft kolonisiert und für viele Afrikaner zum Symbol der Freiheit.',
            '1930 wurde Haile Selassie Kaiser. 1935/36 überfiel das faschistische Italien das Land, auch mit Giftgas; Haile Selassie klagte vor dem Völkerbund vergeblich an. 1941 befreiten britische und äthiopische Truppen das Land. 1963 wurde in Addis Abeba die Organisation für Afrikanische Einheit gegründet; ihre Nachfolgerin, die Afrikanische Union, hat dort bis heute ihren Sitz. In der Rastafari-Bewegung auf Jamaika wird Haile Selassie religiös verehrt.',
          ],
          quiz: {
            leicht: [
              ['Wen besiegte Äthiopien 1896 bei Adwa?', 'Italien', ['Großbritannien', 'Frankreich', 'Ägypten']],
              ['Wurde Äthiopien je dauerhaft kolonisiert?', 'Nein', ['Ja, von Italien', 'Ja, von Großbritannien', 'Ja, von Frankreich']],
              ['Welcher Kaiser regierte ab 1930?', 'Haile Selassie', ['Menelik II.', 'Mengistu', 'Lalibela']],
            ],
            mittel: [
              ['Welche Organisation hat ihren Sitz in Addis Abeba?', 'Die Afrikanische Union', ['Die UNO', 'Die Arabische Liga', 'Die OPEC']],
              ['Wann überfiel Italien Äthiopien?', '1935/36', ['1896', '1914', '1941']],
              ['In welcher Bewegung wird Haile Selassie verehrt?', 'In der Rastafari-Bewegung', ['In der Hare-Krishna-Bewegung', 'Im Voodoo', 'Im Zen-Buddhismus']],
            ],
            schwer: [
              ['Welcher Kaiser siegte bei Adwa?', 'Menelik II.', ['Haile Selassie', 'Tewodros II.', 'Ezana']],
              ['Vor welcher Organisation klagte Haile Selassie 1936?', 'Vor dem Völkerbund', ['Vor der UNO', 'Vor der OAU', 'Vor der NATO']],
              ['Wann wurde die Organisation für Afrikanische Einheit gegründet?', '1963', ['1945', '1975', '2002']],
            ],
          },
        },
        {
          id: 'gegenwart',
          title: 'Derg, Hungersnot und Gegenwart',
          date: 'seit 1974',
          text: [
            '1974 stürzte eine Militärjunta, der „Derg“, Kaiser Haile Selassie. Unter Mengistu Haile Mariam wurde Äthiopien ein kommunistischer Staat; im „Roten Terror“ wurden Zehntausende Gegner ermordet. Eine verheerende Hungersnot 1983–1985 kostete Hunderttausende Menschen das Leben; das „Live Aid“-Konzert 1985 sammelte weltweit Spenden. 1991 stürzten Rebellen das Regime; 1993 wurde Eritrea unabhängig, und Äthiopien verlor seinen Zugang zum Meer.',
            '2018 wurde Abiy Ahmed Ministerpräsident; für den Frieden mit Eritrea erhielt er 2019 den Friedensnobelpreis. Doch von 2020 bis 2022 tobte in der Region Tigray ein brutaler Krieg mit sehr vielen Toten – Schätzungen reichen bis zu Hunderttausenden. Mit über 120 Millionen Einwohnern ist Äthiopien das zweitbevölkerungsreichste Land Afrikas; ein großer Staudamm am Blauen Nil sorgt für Streit mit Ägypten.',
          ],
          quiz: {
            leicht: [
              ['Welches Konzert sammelte 1985 Spenden gegen den Hunger?', 'Live Aid', ['Woodstock', 'Rock am Ring', 'Live 8']],
              ['Welches Land wurde 1993 von Äthiopien unabhängig?', 'Eritrea', ['Somalia', 'Sudan', 'Dschibuti']],
              ['Welcher Ministerpräsident erhielt 2019 den Friedensnobelpreis?', 'Abiy Ahmed', ['Mengistu Haile Mariam', 'Haile Selassie', 'Kofi Annan']],
            ],
            mittel: [
              ['Wie hieß die Militärjunta ab 1974?', 'Derg', ['Politbüro', 'Junta der Obristen', 'Revolutionsrat']],
              ['In welcher Region tobte 2020–2022 ein Krieg?', 'In Tigray', ['In Afar', 'In Oromia', 'In Amhara']],
              ['Was verlor Äthiopien durch Eritreas Unabhängigkeit?', 'Den Zugang zum Meer', ['Die Hauptstadt', 'Den Nil', 'Das Hochland']],
            ],
            schwer: [
              ['Wer führte das Derg-Regime?', 'Mengistu Haile Mariam', ['Haile Selassie', 'Meles Zenawi', 'Abiy Ahmed']],
              ['Wie heißt die Verfolgungswelle des Derg?', 'Roter Terror', ['Großer Terror', 'Weißer Terror', 'Schwarzer September']],
              ['Mit welchem Land streitet Äthiopien über den Nil-Staudamm?', 'Mit Ägypten', ['Mit Kenia', 'Mit Somalia', 'Mit Saudi-Arabien']],
            ],
          },
        },
      ],
    },
  ],
};
