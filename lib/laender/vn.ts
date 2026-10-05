import type { CountryHistory } from './types';

export const VN: CountryHistory = {
  code: 'VN',
  epochs: [
    {
      id: 'fruehzeit',
      name: 'Unabhängigkeit und Dynastien',
      period: '111 v. Chr. – 1883',
      events: [
        {
          id: 'china',
          title: 'Tausend Jahre chinesische Herrschaft',
          date: '111 v. Chr. – 938',
          text: [
            'Das Gebiet am Roten Fluss im heutigen Nordvietnam kam 111 v. Chr. unter die Herrschaft der chinesischen Han-Dynastie und blieb rund tausend Jahre lang chinesisch beherrscht. Chinesische Schrift, Konfuzianismus und Buddhismus prägten die Kultur nachhaltig. Immer wieder gab es Aufstände: Berühmt sind die Schwestern Trưng, die um 40 n. Chr. einen Aufstand anführten und bis heute als Nationalheldinnen verehrt werden.',
            '938 besiegte Ngô Quyền die chinesische Flotte in der Schlacht am Bạch-Đằng-Fluss: Er ließ eisenbeschlagene Pfähle in das Flussbett rammen, auf die die feindlichen Schiffe bei Ebbe aufliefen. Damit wurde Vietnam unabhängig.',
          ],
          quiz: {
            leicht: [
              ['Welches Land beherrschte Vietnam rund tausend Jahre lang?', 'China', ['Frankreich', 'Japan', 'Indien']],
              ['Wann wurde Vietnam von China unabhängig?', '938', ['111 v. Chr.', '1945', '1975']],
              ['Welche Schwestern führten um 40 n. Chr. einen Aufstand an?', 'Die Trưng-Schwestern', ['Die Song-Schwestern', 'Die Nguyễn-Schwestern', 'Die Lý-Schwestern']],
            ],
            mittel: [
              ['Wer siegte 938 am Bạch-Đằng-Fluss?', 'Ngô Quyền', ['Hồ Chí Minh', 'Lê Lợi', 'Gia Long']],
              ['Welche Dynastie eroberte das Gebiet 111 v. Chr.?', 'Die Han-Dynastie', ['Die Ming-Dynastie', 'Die Tang-Dynastie', 'Die Qing-Dynastie']],
              ['Mit welcher List wurde die Flotte besiegt?', 'Mit Pfählen im Flussbett', ['Mit Feuerschiffen', 'Mit Kanonen', 'Mit einem Staudamm']],
            ],
            schwer: [
              ['An welchem Fluss liegt das frühe Kerngebiet Nordvietnams?', 'Am Roten Fluss', ['Am Mekong', 'Am Jangtse', 'Am Gelben Fluss']],
              ['Wann führten die Trưng-Schwestern ihren Aufstand an?', 'Um 40 n. Chr.', ['Um 938', 'Um 111 v. Chr.', 'Um 1288']],
              ['Welche Lehren prägten die Kultur in dieser Zeit?', 'Konfuzianismus und Buddhismus', ['Islam und Hinduismus', 'Christentum und Shinto', 'Zoroastrismus und Judentum']],
            ],
          },
        },
        {
          id: 'dynastien',
          title: 'Dynastien, Mongolenabwehr und die Nguyễn',
          date: '1009–1883',
          text: [
            'Nach der Unabhängigkeit regierten vietnamesische Dynastien. Unter den Lý (ab 1009) wurde Thăng Long, das heutige Hanoi, Hauptstadt. Im 13. Jahrhundert wehrte General Trần Hưng Đạo drei Angriffe der Mongolen ab, 1288 wieder am Bạch-Đằng-Fluss mit Pfählen im Wasser. 1428 vertrieb Lê Lợi nach zehnjährigem Krieg die chinesischen Ming-Truppen.',
            'Über Jahrhunderte dehnte sich Vietnam nach Süden aus, auf Kosten des Reiches Champa und der Khmer, bis ins Mekongdelta. 1802 einte Gia Long das ganze Land unter der Nguyễn-Dynastie mit der Hauptstadt Huế. Die Nguyễn waren die letzte Kaiserdynastie; ab 1858 eroberte Frankreich das Land Schritt für Schritt.',
          ],
          quiz: {
            leicht: [
              ['Welche heutige Hauptstadt hieß früher Thăng Long?', 'Hanoi', ['Saigon', 'Huế', 'Đà Nẵng']],
              ['Wessen Angriffe wehrte Vietnam im 13. Jahrhundert ab?', 'Die der Mongolen', ['Die der Franzosen', 'Die der Amerikaner', 'Die der Japaner']],
              ['Welche Stadt war Hauptstadt der Nguyễn-Dynastie?', 'Huế', ['Hanoi', 'Saigon', 'Hải Phòng']],
            ],
            mittel: [
              ['Welcher General besiegte die Mongolen 1288?', 'Trần Hưng Đạo', ['Lê Lợi', 'Ngô Quyền', 'Gia Long']],
              ['Wer vertrieb 1428 die Ming?', 'Lê Lợi', ['Hồ Chí Minh', 'Trần Hưng Đạo', 'Bảo Đại']],
              ['Bis in welche Region dehnte sich Vietnam nach Süden aus?', 'Bis ins Mekongdelta', ['Bis nach Yunnan', 'Bis nach Laos', 'Bis nach Thailand']],
            ],
            schwer: [
              ['Wer einte 1802 das Land?', 'Gia Long', ['Lê Lợi', 'Bảo Đại', 'Ngô Quyền']],
              ['Welches Reich im Süden wurde verdrängt?', 'Champa', ['Siam', 'Srivijaya', 'Majapahit']],
              ['Ab wann eroberte Frankreich Vietnam Schritt für Schritt?', 'Ab 1858', ['Ab 1802', 'Ab 1945', 'Ab 1700']],
            ],
          },
        },
      ],
    },
    {
      id: 'kriege',
      name: 'Kolonie und Kriege',
      period: '1858–1976',
      events: [
        {
          id: 'indochina',
          title: 'Französische Kolonie und Unabhängigkeitskampf',
          date: '1858–1954',
          text: [
            'Ab 1858 eroberte Frankreich Vietnam und machte es 1887 zum Teil von Französisch-Indochina, zusammen mit später Laos und Kambodscha. Plantagen für Kautschuk und Reis bereicherten die Kolonialherren, die Bevölkerung litt unter Zwangsarbeit und hohen Steuern. Der Revolutionär Hồ Chí Minh gründete 1941 die Unabhängigkeitsbewegung Việt Minh; im Zweiten Weltkrieg besetzte Japan das Land.',
            'Am 2. September 1945 rief Hồ Chí Minh in Hanoi die Unabhängigkeit der Demokratischen Republik Vietnam aus. Frankreich wollte seine Kolonie zurück; es folgte der Indochinakrieg. 1954 erlitten die Franzosen bei Điện Biên Phủ eine entscheidende Niederlage. Auf der Genfer Konferenz wurde Vietnam vorläufig am 17. Breitengrad geteilt – in den kommunistischen Norden und den vom Westen unterstützten Süden.',
          ],
          quiz: {
            leicht: [
              ['Welches Land kolonisierte Vietnam?', 'Frankreich', ['Großbritannien', 'Spanien', 'Die Niederlande']],
              ['Wer rief 1945 die Unabhängigkeit aus?', 'Hồ Chí Minh', ['Mao Zedong', 'Gia Long', 'Pol Pot']],
              ['Wo erlitten die Franzosen 1954 eine entscheidende Niederlage?', 'Bei Điện Biên Phủ', ['Bei Saigon', 'Bei Huế', 'Bei Hanoi']],
            ],
            mittel: [
              ['Zu welcher Kolonie gehörte Vietnam ab 1887?', 'Zu Französisch-Indochina', ['Zu Niederländisch-Indien', 'Zu Britisch-Indien', 'Zu Französisch-Westafrika']],
              ['Entlang welches Breitengrads wurde Vietnam 1954 geteilt?', 'Des 17.', ['Des 38.', 'Des 49.', 'Des 10.']],
              ['Wie hieß Hồ Chí Minhs Unabhängigkeitsbewegung?', 'Việt Minh', ['Rote Khmer', 'Kuomintang', 'Pathet Lao']],
            ],
            schwer: [
              ['An welchem Tag rief Hồ Chí Minh die Unabhängigkeit aus?', '2. September 1945', ['30. April 1975', '7. Mai 1954', '15. August 1945']],
              ['Wo fand die Konferenz zur Teilung statt?', 'In Genf', ['In Paris', 'In Wien', 'In Potsdam']],
              ['Welches Land besetzte Vietnam im Zweiten Weltkrieg?', 'Japan', ['Deutschland', 'China', 'Thailand']],
            ],
          },
        },
        {
          id: 'vietnamkrieg',
          title: 'Der Vietnamkrieg',
          date: '1955–1976',
          text: [
            'Im Süden regierte ein antikommunistisches Regime, gegen das die vom Norden unterstützten Guerillakämpfer des Vietcong kämpften. Die USA schickten ab 1965 Kampftruppen, zeitweise über 500.000 Soldaten, und bombardierten den Norden massiv; der Nachschub des Nordens lief über den Ho-Chi-Minh-Pfad. Das Entlaubungsmittel Agent Orange vergiftete Landschaften und Menschen bis heute.',
            'Die Tet-Offensive 1968 zeigte, dass der Krieg für die USA kaum zu gewinnen war; weltweit wuchsen die Proteste. 1973 zogen die USA ihre Truppen ab. Am 30. April 1975 eroberten nordvietnamesische Truppen Saigon, das in Ho-Chi-Minh-Stadt umbenannt wurde; 1976 wurde das Land als Sozialistische Republik Vietnam wiedervereinigt. Bis zu drei Millionen Vietnamesen waren gestorben; Hunderttausende flohen später als „Boatpeople“ übers Meer.',
          ],
          quiz: {
            leicht: [
              ['Welches Land kämpfte mit eigenen Truppen gegen Nordvietnam?', 'Die USA', ['Frankreich', 'China', 'Die Sowjetunion']],
              ['Wie heißt Saigon heute?', 'Ho-Chi-Minh-Stadt', ['Hanoi', 'Đà Nẵng', 'Huế']],
              ['Wann eroberten nordvietnamesische Truppen Saigon?', '1975', ['1968', '1954', '1989']],
            ],
            mittel: [
              ['Wie hießen die Guerillakämpfer im Süden?', 'Vietcong', ['Việt Minh', 'Rote Khmer', 'Taliban']],
              ['Wie hieß der Nachschubweg durch den Dschungel?', 'Ho-Chi-Minh-Pfad', ['Burma-Straße', 'Seidenstraße', 'Kokoda-Pfad']],
              ['Welche Offensive 1968 war ein Wendepunkt?', 'Die Tet-Offensive', ['Der D-Day', 'Das Unternehmen Barbarossa', 'Die Ardennenoffensive']],
            ],
            schwer: [
              ['Wie hieß das giftige Entlaubungsmittel?', 'Agent Orange', ['Napalm', 'Zyklon B', 'Sarin']],
              ['Wie viele US-Soldaten waren zeitweise in Vietnam?', 'Über 500.000', ['Rund 5.000', 'Rund 50.000', 'Über 5 Millionen']],
              ['Wie nannte man die Flüchtlinge, die übers Meer flohen?', 'Boatpeople', ['Seenomaden', 'Sea Shepherds', 'Flüchtlingsflotte']],
            ],
          },
        },
      ],
    },
    {
      id: 'gegenwart',
      name: 'Erneuerung',
      period: 'seit 1986',
      events: [
        {
          id: 'doi-moi',
          title: 'Đổi Mới und wirtschaftlicher Aufstieg',
          date: 'seit 1986',
          text: [
            'Nach dem Krieg blieb Vietnam arm; Planwirtschaft, ein Krieg mit Kambodscha ab 1978 und ein kurzer Grenzkrieg mit China 1979 belasteten das Land. 1986 beschloss die Kommunistische Partei die Reformpolitik „Đổi Mới“ (Erneuerung): Privatbetriebe und ausländische Investitionen wurden erlaubt, die Partei behielt aber ihr Machtmonopol.',
            'Vietnam wurde zu einer der am schnellsten wachsenden Volkswirtschaften Asiens und zu einem großen Exporteur von Kaffee, Reis, Kleidung und Elektronik. 1995 nahmen die USA und Vietnam wieder diplomatische Beziehungen auf. Heute ist Vietnam der zweitgrößte Kaffeeproduzent der Welt.',
          ],
          quiz: {
            leicht: [
              ['Wie heißt die Reformpolitik von 1986?', 'Đổi Mới', ['Perestroika', 'Glasnost', 'Großer Sprung']],
              ['Bei welchem Produkt ist Vietnam zweitgrößter Produzent der Welt?', 'Bei Kaffee', ['Bei Tee', 'Bei Kakao', 'Bei Wein']],
              ['Welche Partei regiert Vietnam?', 'Die Kommunistische Partei', ['Eine liberale Partei', 'Eine Königspartei', 'Eine Militärjunta']],
            ],
            mittel: [
              ['Was bedeutet „Đổi Mới“?', 'Erneuerung', ['Revolution', 'Freiheit', 'Einheit']],
              ['Wann nahmen die USA und Vietnam wieder Beziehungen auf?', '1995', ['1975', '1986', '2010']],
              ['Mit welchem Nachbarland führte Vietnam 1979 einen Grenzkrieg?', 'Mit China', ['Mit Laos', 'Mit Thailand', 'Mit Japan']],
            ],
            schwer: [
              ['Gegen welches Land führte Vietnam ab 1978 Krieg?', 'Gegen Kambodscha', ['Gegen Laos', 'Gegen Thailand', 'Gegen Myanmar']],
              ['Was erlaubte Đổi Mới?', 'Privatbetriebe und ausländische Investitionen', ['Freie Wahlen', 'Ein Mehrparteiensystem', 'Die Rückkehr der Franzosen']],
              ['Was behielt die Partei trotz der Reformen?', 'Ihr Machtmonopol', ['Die Kolonien', 'Die vollständige Planwirtschaft', 'Den Kriegszustand']],
            ],
          },
        },
      ],
    },
  ],
};
