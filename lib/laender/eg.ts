import type { CountryHistory } from './types';

export const EG: CountryHistory = {
  code: 'EG',
  epochs: [
    {
      id: 'antike',
      name: 'Pharaonen und Fremdherrscher',
      period: 'ca. 3100 v. Chr. – 1798',
      events: [
        {
          id: 'pharaonen',
          title: 'Das Reich der Pharaonen',
          date: 'ca. 3100–1070 v. Chr.',
          text: [
            'Um 3100 v. Chr. wurden Ober- und Unterägypten am Nil zu einem Reich vereint; seine Könige hießen Pharaonen. Der Nil mit seinen jährlichen Überschwemmungen machte das Land inmitten der Wüste fruchtbar. Die Ägypter entwickelten die Hieroglyphenschrift, einen Kalender mit 365 Tagen und erstaunliche Bauwerke: Um 2560 v. Chr. wurde die Cheops-Pyramide in Gizeh fertig, über 3.800 Jahre lang das höchste Bauwerk der Welt.',
            'Im Neuen Reich (etwa 1550–1070 v. Chr.) war Ägypten eine Großmacht. Hatschepsut regierte als eine der wenigen Frauen auf dem Pharaonenthron, Echnaton versuchte, die Verehrung eines einzigen Sonnengottes, Aton, durchzusetzen, und Ramses II. ließ gewaltige Tempel wie Abu Simbel errichten. Die Pharaonen dieser Zeit wurden im Tal der Könige bei Theben, dem heutigen Luxor, begraben.',
          ],
          quiz: {
            leicht: [
              ['Wie nannte man die Könige des alten Ägypten?', 'Pharaonen', ['Sultane', 'Zaren', 'Kaiser']],
              ['An welchem Fluss liegt Ägypten?', 'Am Nil', ['Am Euphrat', 'Am Niger', 'Am Kongo']],
              ['Wie heißt die altägyptische Bilderschrift?', 'Hieroglyphen', ['Keilschrift', 'Runen', 'Kyrillisch']],
            ],
            mittel: [
              ['Welche Pyramide war jahrtausendelang das höchste Bauwerk der Welt?', 'Die Cheops-Pyramide', ['Die Stufenpyramide des Djoser', 'Die Rote Pyramide', 'Die Knickpyramide']],
              ['Welcher Pharao ließ Abu Simbel errichten?', 'Ramses II.', ['Tutanchamun', 'Cheops', 'Echnaton']],
              ['Wo wurden die Pharaonen des Neuen Reiches begraben?', 'Im Tal der Könige', ['In den Pyramiden von Gizeh', 'In Alexandria', 'In Kairo']],
            ],
            schwer: [
              ['Welchen Gott wollte Echnaton allein verehren lassen?', 'Aton', ['Amun', 'Osiris', 'Horus']],
              ['Welche Frau regierte im Neuen Reich als Pharaonin?', 'Hatschepsut', ['Kleopatra', 'Nofretete', 'Isis']],
              ['Wann wurden Ober- und Unterägypten vereint?', 'Um 3100 v. Chr.', ['Um 2560 v. Chr.', 'Um 1550 v. Chr.', 'Um 332 v. Chr.']],
            ],
          },
        },
        {
          id: 'kairo',
          title: 'Alexandria, Rom und das islamische Kairo',
          date: '332 v. Chr. – 1798',
          text: [
            '332 v. Chr. eroberte Alexander der Große Ägypten und gründete Alexandria. Nach seinem Tod herrschten die griechischen Ptolemäer; Alexandria mit Leuchtturm und Bibliothek wurde zu einem Zentrum der Welt. Die letzte Herrscherin, Kleopatra VII., verbündete sich mit Caesar und Marcus Antonius; nach ihrem Tod 30 v. Chr. wurde Ägypten römische Provinz und Kornkammer Roms. Später verbreitete sich das Christentum; die Kopten sind bis heute eine große christliche Minderheit.',
            '641 eroberten arabische Muslime Ägypten; Arabisch und Islam setzten sich durch. 969 gründeten die Fatimiden Kairo. Sultan Saladin kämpfte von hier aus gegen die Kreuzfahrer; später herrschten die Mamluken, eine Kriegerkaste aus ehemaligen Militärsklaven. 1517 kam Ägypten zum Osmanischen Reich.',
          ],
          quiz: {
            leicht: [
              ['Wer gründete Alexandria?', 'Alexander der Große', ['Julius Caesar', 'Ramses II.', 'Napoleon']],
              ['Wer war die letzte Herrscherin der Ptolemäer?', 'Kleopatra', ['Nofretete', 'Hatschepsut', 'Zenobia']],
              ['Welche Sprache setzte sich nach 641 durch?', 'Arabisch', ['Griechisch', 'Latein', 'Türkisch']],
            ],
            mittel: [
              ['Wie heißen die ägyptischen Christen?', 'Kopten', ['Maroniten', 'Nestorianer', 'Katharer']],
              ['Welche Dynastie gründete 969 Kairo?', 'Die Fatimiden', ['Die Mamluken', 'Die Osmanen', 'Die Ptolemäer']],
              ['Welcher Sultan kämpfte von Ägypten aus gegen die Kreuzfahrer?', 'Saladin', ['Süleyman', 'Harun ar-Raschid', 'Mehmed II.']],
            ],
            schwer: [
              ['Wer waren die Mamluken?', 'Eine Kriegerkaste aus ehemaligen Militärsklaven', ['Griechische Könige', 'Römische Statthalter', 'Christliche Mönche']],
              ['Wann kam Ägypten zum Osmanischen Reich?', '1517', ['641', '969', '1798']],
              ['Welche Rolle hatte Ägypten für Rom?', 'Es war die Kornkammer Roms', ['Es war eine Silbermine', 'Es war die Flottenbasis gegen Britannien', 'Es war Sitz des Kaisers']],
            ],
          },
        },
      ],
    },
    {
      id: 'moderne',
      name: 'Das moderne Ägypten',
      period: 'seit 1798',
      events: [
        {
          id: 'suezkanal',
          title: 'Napoleon, Suezkanal und britische Herrschaft',
          date: '1798–1922',
          text: [
            '1798 landete Napoleon in Ägypten. Mit ihm kamen Wissenschaftler, die das Land erforschten; 1799 fanden französische Soldaten den Stein von Rosette mit demselben Text in drei Schriften. Mit seiner Hilfe entzifferte Jean-François Champollion 1822 die Hieroglyphen. Danach modernisierte der Statthalter Muhammad Ali das Land weitgehend unabhängig von den Osmanen.',
            '1869 wurde der Suezkanal eröffnet, der Mittelmeer und Rotes Meer verbindet und den Seeweg nach Asien drastisch verkürzt. Wegen hoher Schulden geriet Ägypten unter europäischen Einfluss; 1882 besetzte Großbritannien das Land. 1922 wurde Ägypten formell unabhängig, britische Truppen blieben aber. Im selben Jahr entdeckte Howard Carter das fast unversehrte Grab des Tutanchamun im Tal der Könige.',
          ],
          quiz: {
            leicht: [
              ['Welcher Kanal wurde 1869 eröffnet?', 'Der Suezkanal', ['Der Panamakanal', 'Der Nord-Ostsee-Kanal', 'Der Kanal von Korinth']],
              ['Wessen Grab entdeckte Howard Carter 1922?', 'Das von Tutanchamun', ['Das von Cheops', 'Das von Kleopatra', 'Das von Ramses II.']],
              ['Welches Land besetzte Ägypten 1882?', 'Großbritannien', ['Frankreich', 'Italien', 'Das Osmanische Reich']],
            ],
            mittel: [
              ['Welcher Fund half, die Hieroglyphen zu entziffern?', 'Der Stein von Rosette', ['Der Kyros-Zylinder', 'Die Himmelsscheibe von Nebra', 'Der Codex Hammurabi']],
              ['Wer entzifferte 1822 die Hieroglyphen?', 'Jean-François Champollion', ['Howard Carter', 'Napoleon', 'Heinrich Schliemann']],
              ['Welche Meere verbindet der Suezkanal?', 'Mittelmeer und Rotes Meer', ['Atlantik und Pazifik', 'Nordsee und Ostsee', 'Schwarzes Meer und Mittelmeer']],
            ],
            schwer: [
              ['Wann landete Napoleon in Ägypten?', '1798', ['1869', '1882', '1815']],
              ['Welcher Statthalter modernisierte Ägypten im 19. Jahrhundert?', 'Muhammad Ali', ['Saladin', 'Gamal Abdel Nasser', 'Hosni Mubarak']],
              ['Wann wurde Ägypten formell unabhängig?', '1922', ['1882', '1952', '1869']],
            ],
          },
        },
        {
          id: 'nasser',
          title: 'Nasser, Suezkrise und Frieden mit Israel',
          date: '1952–1981',
          text: [
            '1952 stürzten die „Freien Offiziere“ König Faruk; 1953 wurde Ägypten Republik. Gamal Abdel Nasser wurde Präsident und zur Symbolfigur des arabischen Nationalismus. 1956 verstaatlichte er den Suezkanal; Großbritannien, Frankreich und Israel griffen an, mussten sich aber auf Druck der USA und der Sowjetunion zurückziehen – die Suezkrise. Mit sowjetischer Hilfe entstand der Assuan-Hochdamm, 1970 fertig; dafür wurden Tempel wie Abu Simbel versetzt.',
            'Im Sechstagekrieg 1967 verlor Ägypten die Sinai-Halbinsel an Israel. Nassers Nachfolger Anwar as-Sadat griff 1973 Israel an und suchte danach den Frieden: 1979 schlossen beide Länder einen Friedensvertrag, und Ägypten erhielt den Sinai zurück. 1981 wurde Sadat von Islamisten ermordet.',
          ],
          quiz: {
            leicht: [
              ['Wer wurde zur Symbolfigur des arabischen Nationalismus?', 'Gamal Abdel Nasser', ['Anwar as-Sadat', 'Hosni Mubarak', 'Saladin']],
              ['Was verstaatlichte Nasser 1956?', 'Den Suezkanal', ['Die Pyramiden', 'Den Nil', 'Die Banken']],
              ['Welcher große Staudamm entstand am Nil?', 'Der Assuan-Hochdamm', ['Der Hoover-Damm', 'Der Drei-Schluchten-Damm', 'Der Itaipú-Damm']],
            ],
            mittel: [
              ['Wann wurde Ägypten Republik?', '1953', ['1922', '1882', '1979']],
              ['Welche Halbinsel verlor Ägypten 1967?', 'Die Sinai-Halbinsel', ['Die Krim', 'Die Arabische Halbinsel', 'Die Halbinsel Yucatán']],
              ['Mit welchem Land schloss Sadat 1979 Frieden?', 'Mit Israel', ['Mit Libyen', 'Mit dem Sudan', 'Mit Syrien']],
            ],
            schwer: [
              ['Welcher König wurde 1952 gestürzt?', 'Faruk', ['Fuad', 'Hussein', 'Idris']],
              ['Welcher Tempel wurde für den Staudamm versetzt?', 'Abu Simbel', ['Karnak', 'Luxor', 'Edfu']],
              ['Wer griff 1956 in der Suezkrise an?', 'Großbritannien, Frankreich und Israel', ['Die USA und die Sowjetunion', 'Syrien und Jordanien', 'Italien und Griechenland']],
            ],
          },
        },
        {
          id: 'tahrir',
          title: 'Mubarak, Tahrir-Platz und Militärherrschaft',
          date: 'seit 1981',
          text: [
            'Nach Sadats Ermordung regierte Hosni Mubarak fast 30 Jahre lang mit Notstandsgesetzen. Im Januar 2011 erfasste der „Arabische Frühling“ auch Ägypten: Hunderttausende demonstrierten auf dem Tahrir-Platz in Kairo für Freiheit und Würde und gegen Korruption; nach 18 Tagen trat Mubarak am 11. Februar 2011 zurück.',
            '2012 wurde Mohammed Mursi von der Muslimbruderschaft in der ersten freien Präsidentenwahl gewählt. Nach Massenprotesten gegen ihn setzte ihn das Militär 2013 ab; Proteste seiner Anhänger wurden blutig niedergeschlagen. Seit 2014 ist der frühere Armeechef Abd al-Fattah as-Sisi Präsident und regiert autoritär. Mit über 100 Millionen Einwohnern ist Ägypten das bevölkerungsreichste arabische Land.',
          ],
          quiz: {
            leicht: [
              ['Auf welchem Platz in Kairo wurde 2011 demonstriert?', 'Auf dem Tahrir-Platz', ['Auf dem Roten Platz', 'Auf dem Tiananmen-Platz', 'Auf dem Maidan']],
              ['Welcher Präsident trat 2011 zurück?', 'Hosni Mubarak', ['Gamal Abdel Nasser', 'Anwar as-Sadat', 'Mohammed Mursi']],
              ['Wie nennt man die Protestwelle von 2011 in arabischen Ländern?', 'Arabischer Frühling', ['Arabischer Winter', 'Prager Frühling', 'Orange Revolution']],
            ],
            mittel: [
              ['Wer wurde 2012 in der ersten freien Präsidentenwahl gewählt?', 'Mohammed Mursi', ['Abd al-Fattah as-Sisi', 'Hosni Mubarak', 'Mohammed ElBaradei']],
              ['Wer ist seit 2014 Präsident?', 'Abd al-Fattah as-Sisi', ['Mohammed Mursi', 'Hosni Mubarak', 'Anwar as-Sadat']],
              ['Wie lange regierte Mubarak etwa?', 'Fast 30 Jahre', ['3 Jahre', '10 Jahre', '50 Jahre']],
            ],
            schwer: [
              ['Nach wie vielen Tagen Protest trat Mubarak zurück?', 'Nach 18 Tagen', ['Nach 3 Tagen', 'Nach 100 Tagen', 'Nach einem Jahr']],
              ['Welcher Bewegung gehörte Mursi an?', 'Der Muslimbruderschaft', ['Der Hamas', 'Der Fatah', 'Der Baath-Partei']],
              ['Wie viele Einwohner hat Ägypten etwa?', 'Über 100 Millionen', ['Rund 10 Millionen', 'Rund 50 Millionen', 'Über 300 Millionen']],
            ],
          },
        },
      ],
    },
  ],
};
