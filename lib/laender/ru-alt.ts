import type { CountryHistory } from './types';

export const RU_ALT: CountryHistory = {
  code: 'RU',
  epochs: [
    {
      id: 'rus',
      name: 'Rus und Moskauer Reich',
      period: '9.–17. Jahrhundert',
      events: [
        {
          id: 'kiewer-rus',
          title: 'Die Kiewer Rus und die Mongolen',
          date: '9.–15. Jahrhundert',
          text: [
            'Im 9. Jahrhundert entstand entlang der Handelswege zwischen Ostsee und Schwarzem Meer die Kiewer Rus, ein Reich ostslawischer Stämme, an dessen Spitze skandinavische Waräger standen; Zentrum war Kiew. 988 ließ sich Großfürst Wladimir I. taufen und führte das orthodoxe Christentum aus Byzanz ein. Darauf berufen sich heute Russland, die Ukraine und Belarus gleichermaßen.',
            'Ab 1237 eroberten die Mongolen die zersplitterten Fürstentümer; 1240 zerstörten sie Kiew. Für rund 240 Jahre mussten die russischen Fürsten der Goldenen Horde Tribut zahlen. In dieser Zeit stieg das kleine Moskau zum führenden Fürstentum auf; 1480 beendete Iwan III. die Abhängigkeit von den Mongolen.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt war das Zentrum der Rus?', 'Kiew', ['Moskau', 'Sankt Petersburg', 'Minsk']],
              ['Welches Volk eroberte im 13. Jahrhundert die Fürstentümer?', 'Die Mongolen', ['Die Wikinger', 'Die Osmanen', 'Die Römer']],
              ['Welche Religion führte Wladimir I. ein?', 'Das orthodoxe Christentum', ['Den Islam', 'Den Katholizismus', 'Den Buddhismus']],
            ],
            mittel: [
              ['In welchem Jahr ließ sich Wladimir taufen?', '988', ['800', '1054', '1240']],
              ['Wie hießen die skandinavischen Anführer der frühen Rus?', 'Waräger', ['Goten', 'Hunnen', 'Sachsen']],
              ['Wie hieß das mongolische Reich, dem die Fürsten Tribut zahlten?', 'Goldene Horde', ['Großmogulreich', 'Osmanisches Reich', 'Khmer-Reich']],
            ],
            schwer: [
              ['Wann zerstörten die Mongolen Kiew?', '1240', ['988', '1380', '1480']],
              ['Welcher Großfürst beendete 1480 die Abhängigkeit?', 'Iwan III.', ['Iwan IV.', 'Dmitri Donskoi', 'Alexander Newski']],
              ['Von wo übernahm die Rus das Christentum?', 'Von Byzanz', ['Von Rom', 'Von Jerusalem', 'Von Alexandria']],
            ],
          },
        },
        {
          id: 'iwan',
          title: 'Iwan der Schreckliche und die Zaren',
          date: '1547–1613',
          text: [
            '1547 ließ sich Iwan IV. als erster Moskauer Herrscher zum „Zaren“ krönen – der Titel geht auf das lateinische „Caesar“ zurück. Er eroberte die Khanate Kasan (1552) und Astrachan und öffnete den Weg nach Sibirien. Zur Erinnerung an den Sieg über Kasan ließ er in Moskau die Basilius-Kathedrale bauen.',
            'Mit der Zeit wurde Iwan immer misstrauischer und grausamer: Mit seiner Leibgarde, der Opritschnina, ließ er Tausende Menschen verfolgen und töten; im Zorn erschlug er sogar seinen eigenen Sohn. Daher sein Beiname „der Schreckliche“. Nach seinem Tod folgte die „Zeit der Wirren“, bis 1613 Michael Romanow zum Zaren gewählt wurde. Die Romanows regierten bis 1917.',
          ],
          quiz: {
            leicht: [
              ['Wie heißt der russische Herrschertitel?', 'Zar', ['Kaiser', 'Sultan', 'Doge']],
              ['Welchen Beinamen trägt Iwan IV.?', 'Der Schreckliche', ['Der Große', 'Der Heilige', 'Der Weise']],
              ['Welche Dynastie regierte von 1613 bis 1917?', 'Die Romanows', ['Die Rurikiden', 'Die Habsburger', 'Die Hohenzollern']],
            ],
            mittel: [
              ['Auf welches Wort geht „Zar“ zurück?', 'Auf „Caesar“', ['Auf „König“', 'Auf „Sultan“', 'Auf „Khan“']],
              ['Welche Kathedrale ließ Iwan in Moskau bauen?', 'Die Basilius-Kathedrale', ['Die Hagia Sophia', 'Den Petersdom', 'Die Isaakskathedrale']],
              ['Welches Khanat eroberte er 1552?', 'Kasan', ['Buchara', 'Chiwa', 'Samarkand']],
            ],
            schwer: [
              ['Wie hieß Iwans gefürchtete Leibgarde?', 'Opritschnina', ['Tscheka', 'Prätorianer', 'Janitscharen']],
              ['In welchem Jahr ließ sich Iwan zum Zaren krönen?', '1547', ['1480', '1613', '1682']],
              ['Wen erschlug Iwan im Zorn?', 'Seinen eigenen Sohn', ['Seinen Bruder', 'Den Patriarchen', 'Den Khan von Kasan']],
            ],
          },
        },
      ],
    },
    {
      id: 'zarenreich',
      name: 'Das Zarenreich',
      period: '1682–1917',
      events: [
        {
          id: 'peter',
          title: 'Peter der Große',
          date: '1682–1725',
          text: [
            'Peter I. wollte das rückständige Russland nach westeuropäischem Vorbild modernisieren. 1697/98 reiste er inkognito durch Europa und arbeitete sogar auf einer Werft in den Niederlanden. Zurück in Russland ließ er Bärte abschneiden, führte westliche Kleidung und einen neuen Kalender ein, baute eine Flotte auf und reformierte Heer und Verwaltung.',
            'Im Großen Nordischen Krieg besiegte er Schweden 1709 bei Poltawa und gewann Zugang zur Ostsee. Dort gründete er 1703 Sankt Petersburg, das ab 1712 Hauptstadt wurde – sein „Fenster nach Europa“; beim Bau starben Tausende Zwangsarbeiter. 1721 nahm Peter den Titel „Kaiser“ an, und Russland wurde zur europäischen Großmacht.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt gründete Peter der Große?', 'Sankt Petersburg', ['Moskau', 'Kiew', 'Nowgorod']],
              ['An welchem Meer liegt diese Stadt?', 'An der Ostsee', ['Am Schwarzen Meer', 'Am Mittelmeer', 'Am Kaspischen Meer']],
              ['Nach welchem Vorbild modernisierte Peter Russland?', 'Nach Westeuropa', ['Nach China', 'Nach dem Osmanischen Reich', 'Nach Persien']],
            ],
            mittel: [
              ['Was ließ Peter seinen Untertanen abschneiden?', 'Die Bärte', ['Die Haare', 'Die Ohren', 'Die Zöpfe']],
              ['Gegen welches Land siegte er 1709 bei Poltawa?', 'Schweden', ['Polen', 'Das Osmanische Reich', 'Preußen']],
              ['In welchem Jahr wurde Sankt Petersburg gegründet?', '1703', ['1547', '1812', '1917']],
            ],
            schwer: [
              ['In welchem Land arbeitete Peter auf seiner Reise auf einer Werft?', 'In den Niederlanden', ['In Frankreich', 'In Italien', 'In Spanien']],
              ['Wie nannte man St. Petersburg wegen seiner Lage?', 'Fenster nach Europa', ['Drittes Rom', 'Tor zum Orient', 'Perle des Südens']],
              ['Welchen Titel nahm Peter 1721 an?', 'Kaiser', ['Zar', 'Sultan', 'König']],
            ],
          },
        },
        {
          id: 'katharina',
          title: 'Katharina die Große',
          date: '1762–1796',
          text: [
            'Katharina II. war eine deutsche Prinzessin aus Anhalt-Zerbst. Sie heiratete den späteren Zaren Peter III. und ließ ihn 1762 durch einen Putsch stürzen; kurz darauf starb er unter ungeklärten Umständen. Als Kaiserin regierte sie 34 Jahre lang. Sie schrieb Briefe mit Philosophen der Aufklärung wie Voltaire und Diderot und legte den Grundstock für die Sammlung der Eremitage.',
            'Außenpolitisch war sie sehr erfolgreich: Russland gewann in Kriegen gegen das Osmanische Reich die Schwarzmeerküste und 1783 die Krim und war an den Teilungen Polens beteiligt. Sie holte deutsche Siedler an die Wolga. Die Lage der leibeigenen Bauern verschlechterte sich jedoch; den großen Bauernaufstand unter Jemeljan Pugatschow (1773–1775) ließ sie niederschlagen.',
          ],
          quiz: {
            leicht: [
              ['Aus welchem Land stammte Katharina die Große?', 'Aus Deutschland', ['Aus Frankreich', 'Aus England', 'Aus Schweden']],
              ['Welche Halbinsel gewann Russland 1783?', 'Die Krim', ['Kamtschatka', 'Jütland', 'Die Iberische Halbinsel']],
              ['Welches berühmte Museum geht auf ihre Sammlung zurück?', 'Die Eremitage', ['Der Louvre', 'Das British Museum', 'Der Prado']],
            ],
            mittel: [
              ['Wie kam Katharina an die Macht?', 'Durch einen Putsch gegen ihren Mann', ['Durch eine Wahl', 'Als Erbin ihres Vaters', 'Durch einen Krieg gegen Preußen']],
              ['Mit welchem Philosophen schrieb sie sich Briefe?', 'Mit Voltaire', ['Mit Kant', 'Mit Marx', 'Mit Nietzsche']],
              ['Wohin holte sie deutsche Siedler?', 'An die Wolga', ['Nach Sibirien', 'Nach Alaska', 'Nach Moskau']],
            ],
            schwer: [
              ['Wer führte den großen Bauernaufstand 1773–1775?', 'Jemeljan Pugatschow', ['Stenka Rasin', 'Lenin', 'Rasputin']],
              ['Wie lange regierte Katharina?', '34 Jahre', ['4 Jahre', '14 Jahre', '54 Jahre']],
              ['Wie hieß ihr gestürzter Ehemann?', 'Peter III.', ['Peter I.', 'Paul I.', 'Alexander I.']],
            ],
          },
        },
        {
          id: '1812',
          title: 'Napoleon 1812 und die Bauernbefreiung',
          date: '1812–1881',
          text: [
            '1812 marschierte Napoleon mit über 600.000 Soldaten in Russland ein. Die russische Armee unter Michail Kutusow wich zurück; nach der blutigen Schlacht von Borodino erreichte Napoleon im September Moskau, doch die Stadt ging in Flammen auf. Ohne Vorräte musste er im Winter abziehen; nur ein Bruchteil seiner Armee überlebte. Russland wurde zur führenden Macht Europas.',
            'Im Inneren blieb das Zarenreich autokratisch und rückständig; die meisten Bauern waren Leibeigene. Nach der Niederlage im Krimkrieg (1853–1856) hob Zar Alexander II. 1861 die Leibeigenschaft auf. Revolutionäre Gruppen forderten weitergehende Reformen; 1881 wurde Alexander II. in Sankt Petersburg durch eine Bombe getötet. In dieser Zeit entstanden die Meisterwerke von Tolstoi, Dostojewski und Tschaikowsky.',
          ],
          quiz: {
            leicht: [
              ['Wer marschierte 1812 in Russland ein?', 'Napoleon', ['Hitler', 'Dschingis Khan', 'Karl XII.']],
              ['Welche Stadt ging 1812 in Flammen auf?', 'Moskau', ['Sankt Petersburg', 'Kiew', 'Smolensk']],
              ['Was schaffte Alexander II. 1861 ab?', 'Die Leibeigenschaft', ['Die Monarchie', 'Die Kirche', 'Die Armee']],
            ],
            mittel: [
              ['Welcher General führte die russische Armee 1812?', 'Michail Kutusow', ['Georgi Schukow', 'Alexander Suworow', 'Grigori Potjomkin']],
              ['Wie heißt die blutige Schlacht vor Moskau 1812?', 'Borodino', ['Stalingrad', 'Poltawa', 'Austerlitz']],
              ['Welcher berühmte Schriftsteller lebte im 19. Jahrhundert?', 'Leo Tolstoi', ['William Shakespeare', 'Franz Kafka', 'Alexander Solschenizyn']],
            ],
            schwer: [
              ['Welchen Krieg verlor Russland 1853–1856?', 'Den Krimkrieg', ['Den Russisch-Japanischen Krieg', 'Den Großen Nordischen Krieg', 'Den Siebenjährigen Krieg']],
              ['Wie starb Alexander II. 1881?', 'Durch ein Bombenattentat', ['An einer Krankheit', 'In einer Schlacht', 'Durch Hinrichtung']],
              ['Mit wie vielen Soldaten marschierte Napoleon etwa ein?', 'Mit über 600.000', ['Mit rund 60.000', 'Mit rund 6 Millionen', 'Mit rund 200.000']],
            ],
          },
        },
      ],
    },
    {
      id: 'sowjetunion',
      name: 'Sowjetunion',
      period: '1917–1991',
      events: [
        {
          id: 'oktoberrevolution',
          title: 'Die Oktoberrevolution',
          date: '1917–1924',
          text: [
            'Der Erste Weltkrieg brachte Russland Niederlagen, Hunger und Millionen Tote. Im Februar 1917 (nach westlichem Kalender im März) dankte Zar Nikolaus II. nach Massenprotesten ab; eine provisorische Regierung übernahm. In der Oktoberrevolution ergriffen am 25. Oktober 1917 – nach heutigem Kalender am 7. November – die Bolschewiki unter Wladimir Lenin in Petrograd die Macht.',
            'Lenin schloss 1918 mit Deutschland den Frieden von Brest-Litowsk. Im folgenden Bürgerkrieg siegten die „Roten“ über die „Weißen“; die Zarenfamilie wurde 1918 in Jekaterinburg ermordet. 1922 wurde die Sowjetunion (UdSSR) gegründet. Lenin starb 1924; im Kampf um seine Nachfolge setzte sich Josef Stalin durch.',
          ],
          quiz: {
            leicht: [
              ['Wer führte die Bolschewiki an?', 'Wladimir Lenin', ['Karl Marx', 'Michail Gorbatschow', 'Nikita Chruschtschow']],
              ['Welcher Zar dankte 1917 ab?', 'Nikolaus II.', ['Alexander II.', 'Peter der Große', 'Iwan IV.']],
              ['Wann wurde die Sowjetunion gegründet?', '1922', ['1917', '1945', '1991']],
            ],
            mittel: [
              ['Wie heißt der Friedensvertrag mit Deutschland von 1918?', 'Frieden von Brest-Litowsk', ['Versailler Vertrag', 'Vertrag von Rapallo', 'Moskauer Vertrag']],
              ['Wie hießen die Gegner der Roten im Bürgerkrieg?', 'Die Weißen', ['Die Blauen', 'Die Schwarzen', 'Die Gelben']],
              ['Wer setzte sich nach Lenins Tod durch?', 'Josef Stalin', ['Leo Trotzki', 'Nikita Chruschtschow', 'Leonid Breschnew']],
            ],
            schwer: [
              ['Wo wurde die Zarenfamilie 1918 ermordet?', 'In Jekaterinburg', ['In Moskau', 'In Petrograd', 'In Kiew']],
              ['Auf welches Datum fällt die Oktoberrevolution nach heutigem Kalender?', '7. November 1917', ['25. Oktober 1917', '1. Mai 1917', '9. November 1918']],
              ['Wie hieß Sankt Petersburg im Jahr 1917?', 'Petrograd', ['Leningrad', 'Stalingrad', 'Wolgograd']],
            ],
          },
        },
        {
          id: 'stalin',
          title: 'Stalin und der Zweite Weltkrieg',
          date: '1924–1953',
          text: [
            'Josef Stalin errichtete eine brutale Diktatur. Mit Zwangskollektivierung der Landwirtschaft und Fünfjahresplänen trieb er die Industrialisierung voran; die dadurch verursachte Hungersnot 1932/33 kostete Millionen Menschen das Leben, besonders in der Ukraine (Holodomor). Im „Großen Terror“ 1936–1938 ließ er Hunderttausende erschießen, Millionen litten in den Arbeitslagern des Gulag.',
            '1939 schloss Stalin den Hitler-Stalin-Pakt, doch am 22. Juni 1941 überfiel Deutschland die Sowjetunion. Die Belagerung Leningrads dauerte fast 900 Tage. Mit dem Sieg bei Stalingrad 1942/43 kam die Wende; im Mai 1945 eroberte die Rote Armee Berlin. Rund 27 Millionen Sowjetbürger starben im Krieg. Danach dehnte Stalin den sowjetischen Machtbereich über Osteuropa aus; er starb 1953.',
          ],
          quiz: {
            leicht: [
              ['Wann überfiel Deutschland die Sowjetunion?', '22. Juni 1941', ['1. September 1939', '7. Dezember 1941', '8. Mai 1945']],
              ['In welcher Stadt kam 1942/43 die Wende des Krieges?', 'Stalingrad', ['Moskau', 'Berlin', 'Kiew']],
              ['Wie heißen die sowjetischen Arbeitslager?', 'Gulag', ['Kolchos', 'Kreml', 'Datscha']],
            ],
            mittel: [
              ['Wie lange dauerte die Belagerung Leningrads etwa?', 'Fast 900 Tage', ['90 Tage', '9 Jahre', '9 Tage']],
              ['Wie viele Sowjetbürger starben im Zweiten Weltkrieg etwa?', 'Rund 27 Millionen', ['Rund 2,7 Millionen', 'Rund 270.000', 'Rund 100 Millionen']],
              ['Wie nennt man die Hungersnot in der Ukraine 1932/33?', 'Holodomor', ['Glasnost', 'Perestroika', 'Pogrom']],
            ],
            schwer: [
              ['Wie nennt man Stalins Verfolgungswelle 1936–1938?', 'Großer Terror', ['Roter Oktober', 'Tauwetter', 'Kronstädter Aufstand']],
              ['In welchem Jahr starb Stalin?', '1953', ['1945', '1924', '1961']],
              ['Womit trieb Stalin die Industrialisierung voran?', 'Mit Fünfjahresplänen', ['Mit dem Marshallplan', 'Mit freier Marktwirtschaft', 'Mit dem New Deal']],
            ],
          },
        },
        {
          id: 'gorbatschow',
          title: 'Gorbatschow und das Ende der Sowjetunion',
          date: '1985–2000',
          text: [
            'Nach Stalins Tod lockerte Nikita Chruschtschow die Unterdrückung etwas, das „Tauwetter“; unter Leonid Breschnew erstarrte das System wieder. 1985 wurde Michail Gorbatschow Generalsekretär. Mit Glasnost (Offenheit) und Perestroika (Umbau) wollte er die Sowjetunion reformieren. Er ließ den Ostblockstaaten 1989 freie Hand und ermöglichte so den Fall der Mauer und die deutsche Einheit; 1990 erhielt er den Friedensnobelpreis.',
            'Ein Putschversuch konservativer Kommunisten im August 1991 scheiterte am Widerstand des russischen Präsidenten Boris Jelzin. Im Dezember 1991 löste sich die Sowjetunion in 15 Staaten auf; Russland wurde ihr Rechtsnachfolger. Die 1990er brachten eine schwere Wirtschaftskrise und Kriege in Tschetschenien. Ende 1999 trat Jelzin zurück; sein Nachfolger wurde Wladimir Putin.',
          ],
          quiz: {
            leicht: [
              ['Wer leitete ab 1985 Reformen in der Sowjetunion ein?', 'Michail Gorbatschow', ['Josef Stalin', 'Wladimir Putin', 'Lenin']],
              ['In welchem Jahr löste sich die Sowjetunion auf?', '1991', ['1989', '1985', '2000']],
              ['Wer folgte 1999/2000 auf Boris Jelzin?', 'Wladimir Putin', ['Michail Gorbatschow', 'Dmitri Medwedew', 'Nikita Chruschtschow']],
            ],
            mittel: [
              ['Was bedeutet „Glasnost“?', 'Offenheit', ['Umbau', 'Frieden', 'Freiheit']],
              ['In wie viele Staaten zerfiel die Sowjetunion?', 'In 15', ['In 5', 'In 50', 'In 2']],
              ['Welchen Preis erhielt Gorbatschow 1990?', 'Den Friedensnobelpreis', ['Einen Oscar', 'Den Literaturnobelpreis', 'Den Pulitzer-Preis']],
            ],
            schwer: [
              ['Wer stellte sich im August 1991 gegen die Putschisten?', 'Boris Jelzin', ['Wladimir Putin', 'Leonid Breschnew', 'Juri Andropow']],
              ['Wie nennt man Chruschtschows Lockerung nach Stalin?', 'Tauwetter', ['Glasnost', 'Perestroika', 'Frühling']],
              ['In welcher Region führte Russland in den 1990ern Krieg?', 'In Tschetschenien', ['In Sibirien', 'In Kamtschatka', 'In Karelien']],
            ],
          },
        },
      ],
    },
  ],
};
