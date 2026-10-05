import type { CountryHistory } from './types';

export const IL: CountryHistory = {
  code: 'IL',
  epochs: [
    {
      id: 'antike',
      name: 'Antike und Diaspora',
      period: 'ca. 1000 v. Chr. – 1896',
      events: [
        {
          id: 'antikes-israel',
          title: 'Das antike Israel',
          date: 'ca. 1000 v. Chr. – 135 n. Chr.',
          text: [
            'Nach der Bibel regierten um das 10. Jahrhundert v. Chr. die Könige David und Salomo über ein Königreich Israel mit der Hauptstadt Jerusalem; Salomo ließ den ersten Tempel bauen. Später bestanden zwei Reiche: Israel im Norden und Juda im Süden. 586 v. Chr. zerstörten die Babylonier Jerusalem und den Tempel; ein Teil der Bevölkerung wurde ins Babylonische Exil verschleppt. Nach der Rückkehr entstand der Zweite Tempel.',
            'Unter römischer Herrschaft erhoben sich die Juden 66 n. Chr.; 70 n. Chr. zerstörten die Römer Jerusalem und den Zweiten Tempel – erhalten ist die Westmauer, die „Klagemauer“. Die Bergfestung Masada fiel 73/74. Nach einem weiteren Aufstand (132–135) wurden Juden aus Jerusalem verbannt; die meisten lebten danach fast zwei Jahrtausende in der Diaspora, verstreut über viele Länder.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt war nach der Bibel Hauptstadt von David und Salomo?', 'Jerusalem', ['Tel Aviv', 'Babylon', 'Kairo']],
              ['Welcher Teil des Zweiten Tempels ist erhalten?', 'Die Westmauer', ['Das Dach', 'Der Altar', 'Das Haupttor']],
              ['Welches Reich zerstörte 70 n. Chr. den Zweiten Tempel?', 'Das Römische Reich', ['Babylon', 'Persien', 'Ägypten']],
            ],
            mittel: [
              ['Wer zerstörte 586 v. Chr. den ersten Tempel?', 'Die Babylonier', ['Die Römer', 'Die Assyrer', 'Die Perser']],
              ['Welcher König ließ nach der Bibel den ersten Tempel bauen?', 'Salomo', ['David', 'Saul', 'Herodes']],
              ['Wie nennt man das Leben verstreut außerhalb der Heimat?', 'Diaspora', ['Exodus', 'Zionismus', 'Kibbuz']],
            ],
            schwer: [
              ['Welche Festung fiel 73/74 n. Chr.?', 'Masada', ['Megiddo', 'Akko', 'Jericho']],
              ['In welche zwei Reiche war das Land später geteilt?', 'Israel und Juda', ['Kanaan und Philistäa', 'Galiläa und Edom', 'Moab und Ammon']],
              ['Wann begann der große jüdische Aufstand gegen Rom?', '66 n. Chr.', ['586 v. Chr.', '132 n. Chr.', '1 n. Chr.']],
            ],
          },
        },
        {
          id: 'zionismus',
          title: 'Zionismus und britisches Mandat',
          date: '1896–1947',
          text: [
            'Im 19. Jahrhundert litten Juden in Europa unter Antisemitismus und Pogromen. Der Wiener Journalist Theodor Herzl forderte 1896 in seinem Buch „Der Judenstaat“ einen eigenen Staat; 1897 tagte in Basel der erste Zionistenkongress. Immer mehr Juden wanderten nach Palästina ein, das damals zum Osmanischen Reich gehörte und überwiegend von Arabern bewohnt war; sie gründeten Gemeinschaftssiedlungen (Kibbuzim) und 1909 die Stadt Tel Aviv.',
            'In der Balfour-Erklärung von 1917 sagte Großbritannien eine „nationale Heimstätte für das jüdische Volk“ in Palästina zu. Ab 1920 verwaltete es das Land als Mandatsgebiet. Zwischen jüdischen Einwanderern und arabischer Bevölkerung kam es zu wachsenden Konflikten. Nach dem Holocaust beschlossen die Vereinten Nationen 1947 einen Plan zur Teilung Palästinas in einen jüdischen und einen arabischen Staat.',
          ],
          quiz: {
            leicht: [
              ['Wer schrieb 1896 „Der Judenstaat“?', 'Theodor Herzl', ['David Ben-Gurion', 'Albert Einstein', 'Golda Meir']],
              ['Welches Land verwaltete Palästina ab 1920?', 'Großbritannien', ['Frankreich', 'Ägypten', 'Die USA']],
              ['Welche Stadt wurde 1909 gegründet?', 'Tel Aviv', ['Jerusalem', 'Haifa', 'Jaffa']],
            ],
            mittel: [
              ['Wo tagte 1897 der erste Zionistenkongress?', 'In Basel', ['In Wien', 'In Berlin', 'In Jerusalem']],
              ['Welche Erklärung von 1917 sagte eine jüdische Heimstätte zu?', 'Die Balfour-Erklärung', ['Die Monroe-Doktrin', 'Die Unabhängigkeitserklärung', 'Die Erklärung von Kairo']],
              ['Wie heißen die gemeinschaftlichen Siedlungen?', 'Kibbuzim', ['Kolchosen', 'Quilombos', 'Pueblos']],
            ],
            schwer: [
              ['Zu welchem Reich gehörte Palästina vor 1917?', 'Zum Osmanischen Reich', ['Zum Britischen Empire', 'Zum Persischen Reich', 'Zu Ägypten']],
              ['Was beschlossen die Vereinten Nationen 1947?', 'Einen Teilungsplan', ['Die Gründung Jordaniens', 'Ein britisches Protektorat', 'Eine Volksabstimmung']],
              ['Wie nennt man die Bewegung für einen jüdischen Staat?', 'Zionismus', ['Panarabismus', 'Kemalismus', 'Chassidismus']],
            ],
          },
        },
      ],
    },
    {
      id: 'staat',
      name: 'Der Staat Israel',
      period: 'seit 1948',
      events: [
        {
          id: 'staatsgruendung',
          title: 'Staatsgründung und Krieg',
          date: '1948–1961',
          text: [
            'Am 14. Mai 1948 verkündete David Ben-Gurion in Tel Aviv die Gründung des Staates Israel. Am nächsten Tag griffen die Armeen mehrerer arabischer Staaten an; Israel behauptete sich und kontrollierte am Ende mehr Gebiet, als der UN-Teilungsplan vorgesehen hatte. Rund 700.000 Palästinenser flohen oder wurden vertrieben – Palästinenser nennen dies die „Nakba“ (Katastrophe). Jerusalem wurde geteilt; das Westjordanland kam unter jordanische, der Gazastreifen unter ägyptische Kontrolle.',
            'In den folgenden Jahren kamen Hunderttausende Einwanderer: Überlebende des Holocaust aus Europa und Juden, die aus arabischen Ländern flohen oder vertrieben wurden. 1952 schlossen Israel und die Bundesrepublik das Luxemburger Abkommen über Entschädigungszahlungen. 1961 wurde in Jerusalem dem NS-Verbrecher Adolf Eichmann der Prozess gemacht.',
          ],
          quiz: {
            leicht: [
              ['In welchem Jahr wurde der Staat Israel gegründet?', '1948', ['1917', '1967', '1897']],
              ['Wer verkündete die Staatsgründung?', 'David Ben-Gurion', ['Theodor Herzl', 'Golda Meir', 'Jitzchak Rabin']],
              ['Wie nennen Palästinenser Flucht und Vertreibung 1948?', 'Nakba', ['Intifada', 'Diaspora', 'Schoah']],
            ],
            mittel: [
              ['Wie viele Palästinenser flohen oder wurden vertrieben?', 'Rund 700.000', ['Rund 7.000', 'Rund 70.000', 'Rund 7 Millionen']],
              ['Welches Land kontrollierte danach das Westjordanland?', 'Jordanien', ['Ägypten', 'Syrien', 'Libanon']],
              ['Welcher NS-Verbrecher wurde 1961 in Jerusalem angeklagt?', 'Adolf Eichmann', ['Hermann Göring', 'Rudolf Heß', 'Klaus Barbie']],
            ],
            schwer: [
              ['An welchem Tag wurde Israel gegründet?', '14. Mai 1948', ['29. November 1947', '5. Juni 1967', '2. November 1917']],
              ['Wie heißt das Entschädigungsabkommen mit der Bundesrepublik von 1952?', 'Luxemburger Abkommen', ['Camp-David-Abkommen', 'Oslo-Abkommen', 'Haager Abkommen']],
              ['Wer kontrollierte nach 1948 den Gazastreifen?', 'Ägypten', ['Jordanien', 'Israel', 'Großbritannien']],
            ],
          },
        },
        {
          id: 'kriege',
          title: 'Sechstagekrieg, Jom-Kippur-Krieg und Frieden mit Ägypten',
          date: '1967–1979',
          text: [
            'Im Juni 1967 eroberte Israel im Sechstagekrieg gegen Ägypten, Jordanien und Syrien den Gazastreifen, die Sinai-Halbinsel, das Westjordanland mit Ostjerusalem und die Golanhöhen. Damit begann die Besatzung der palästinensischen Gebiete, in denen später israelische Siedlungen entstanden – nach Auffassung der meisten Staaten völkerrechtswidrig.',
            'Am jüdischen Feiertag Jom Kippur 1973 griffen Ägypten und Syrien überraschend an; Israel konnte sich nach schweren Verlusten behaupten. Danach kam es zur Annäherung: 1977 reiste der ägyptische Präsident Anwar as-Sadat nach Jerusalem, 1978 vermittelte US-Präsident Jimmy Carter in Camp David, und 1979 schlossen Israel und Ägypten Frieden. Israel gab den Sinai zurück; Sadat wurde 1981 ermordet.',
          ],
          quiz: {
            leicht: [
              ['Wie lange dauerte der Krieg im Juni 1967?', 'Sechs Tage', ['Sechs Wochen', 'Sechs Monate', 'Sechs Jahre']],
              ['Mit welchem Land schloss Israel 1979 Frieden?', 'Mit Ägypten', ['Mit Syrien', 'Mit dem Iran', 'Mit dem Libanon']],
              ['An welchem jüdischen Feiertag begann der Krieg 1973?', 'An Jom Kippur', ['An Pessach', 'An Chanukka', 'An Purim']],
            ],
            mittel: [
              ['Welche Halbinsel gab Israel an Ägypten zurück?', 'Die Sinai-Halbinsel', ['Die Krim', 'Die Arabische Halbinsel', 'Die Halbinsel Yucatán']],
              ['Welcher US-Präsident vermittelte in Camp David?', 'Jimmy Carter', ['Ronald Reagan', 'Richard Nixon', 'Bill Clinton']],
              ['Welcher ägyptische Präsident reiste 1977 nach Jerusalem?', 'Anwar as-Sadat', ['Gamal Abdel Nasser', 'Hosni Mubarak', 'Mohammed Mursi']],
            ],
            schwer: [
              ['Welches Gebiet eroberte Israel 1967 von Syrien?', 'Die Golanhöhen', ['Den Sinai', 'Den Gazastreifen', 'Das Westjordanland']],
              ['Wann wurde Sadat ermordet?', '1981', ['1973', '1979', '1995']],
              ['Wann vermittelte Carter in Camp David?', '1978', ['1967', '1973', '1993']],
            ],
          },
        },
        {
          id: 'oslo-gaza',
          title: 'Oslo, Intifada und der Gaza-Krieg',
          date: 'seit 1987',
          text: [
            '1987 begann in den besetzten Gebieten die erste Intifada, ein Aufstand der Palästinenser. 1993 unterzeichneten Israels Ministerpräsident Jitzchak Rabin und PLO-Chef Jassir Arafat in Washington das erste Oslo-Abkommen; die Palästinenser erhielten eine begrenzte Selbstverwaltung. Rabin, Arafat und Außenminister Schimon Peres erhielten den Friedensnobelpreis. 1995 wurde Rabin von einem israelischen Extremisten ermordet; der Friedensprozess geriet ins Stocken, ab 2000 folgte die blutige zweite Intifada.',
            '2005 zog Israel aus dem Gazastreifen ab, wo 2007 die islamistische Hamas die Macht übernahm. Am 7. Oktober 2023 überfielen Hamas-Kämpfer Israel, töteten rund 1.200 Menschen und verschleppten über 250 Geiseln – der Tag mit den meisten getöteten Juden seit dem Holocaust. Im folgenden Krieg im Gazastreifen wurden Zehntausende Palästinenser getötet, und das Gebiet wurde weitgehend zerstört.',
          ],
          quiz: {
            leicht: [
              ['Wie nennt man die Aufstände der Palästinenser?', 'Intifada', ['Nakba', 'Diaspora', 'Kibbuz']],
              ['Welche Organisation übernahm 2007 die Macht im Gazastreifen?', 'Die Hamas', ['Die PLO', 'Die Hisbollah', 'Die Fatah']],
              ['Welcher israelische Ministerpräsident wurde 1995 ermordet?', 'Jitzchak Rabin', ['Schimon Peres', 'Benjamin Netanjahu', 'Golda Meir']],
            ],
            mittel: [
              ['Wie heißen die Abkommen ab 1993?', 'Oslo-Abkommen', ['Camp-David-Abkommen', 'Minsker Abkommen', 'Dayton-Abkommen']],
              ['Wer unterzeichnete sie für die PLO?', 'Jassir Arafat', ['Mahmud Abbas', 'Anwar as-Sadat', 'König Hussein']],
              ['Wann zog Israel aus dem Gazastreifen ab?', '2005', ['1993', '2014', '1967']],
            ],
            schwer: [
              ['Wie viele Menschen töteten Hamas-Kämpfer am 7. Oktober 2023 etwa?', 'Rund 1.200', ['Rund 120', 'Rund 12.000', 'Rund 50']],
              ['Wer erhielt neben Rabin und Arafat den Friedensnobelpreis?', 'Schimon Peres', ['Bill Clinton', 'Ehud Barak', 'Benjamin Netanjahu']],
              ['Wann begann die zweite Intifada?', '2000', ['1987', '1995', '2008']],
            ],
          },
        },
      ],
    },
  ],
};
