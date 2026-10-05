import type { CountryHistory } from './types';

export const US: CountryHistory = {
  code: 'US',
  epochs: [
    {
      id: 'gruendung',
      name: 'Gründung und Expansion',
      period: '1607–1890',
      events: [
        {
          id: 'unabhaengigkeit',
          title: 'Die Unabhängigkeit',
          date: '1776–1789',
          text: [
            'Ab 1607 gründeten Engländer an der Ostküste Nordamerikas Kolonien; bis 1732 waren es dreizehn. Als Großbritannien nach dem Siebenjährigen Krieg neue Steuern erhob, protestierten die Siedler: „Keine Besteuerung ohne Vertretung!“ 1773 warfen Bürger in Boston Teeladungen ins Hafenbecken, die Boston Tea Party. 1775 begann der Unabhängigkeitskrieg.',
            'Am 4. Juli 1776 verkündeten die Kolonien die Unabhängigkeitserklärung, verfasst vor allem von Thomas Jefferson: Alle Menschen seien gleich geschaffen und hätten ein Recht auf Leben, Freiheit und das Streben nach Glück – für Sklaven und Ureinwohner galt das allerdings nicht. Mit französischer Hilfe siegten die Amerikaner unter George Washington; 1783 erkannte Großbritannien die Unabhängigkeit an. 1787 entstand die Verfassung, 1789 wurde Washington erster Präsident.',
          ],
          quiz: {
            leicht: [
              ['Wann erklärten die USA ihre Unabhängigkeit?', '4. Juli 1776', ['14. Juli 1789', '4. Juli 1789', '1. Januar 1800']],
              ['Wer war der erste Präsident der USA?', 'George Washington', ['Abraham Lincoln', 'Thomas Jefferson', 'John Adams']],
              ['Von welchem Land wurden die USA unabhängig?', 'Großbritannien', ['Frankreich', 'Spanien', 'Niederlande']],
            ],
            mittel: [
              ['Wie viele Kolonien gründeten die USA?', 'Dreizehn', ['Sieben', 'Fünfzig', 'Zwanzig']],
              ['Was warfen Bürger 1773 in Boston ins Wasser?', 'Tee', ['Kaffee', 'Gold', 'Waffen']],
              ['Wer verfasste vor allem die Unabhängigkeitserklärung?', 'Thomas Jefferson', ['George Washington', 'Abraham Lincoln', 'John Adams']],
            ],
            schwer: [
              ['Welches europäische Land half den Amerikanern militärisch?', 'Frankreich', ['Russland', 'Preußen', 'Schweden']],
              ['Wann erkannte Großbritannien die Unabhängigkeit an?', '1783', ['1776', '1789', '1812']],
              ['Wie lautete der Protestslogan der Siedler?', '„Keine Besteuerung ohne Vertretung“', ['„Freiheit, Gleichheit, Brüderlichkeit“', '„Wir sind das Volk“', '„Brot und Frieden“']],
            ],
          },
        },
        {
          id: 'westen',
          title: 'Die Expansion nach Westen',
          date: '1803–1890',
          text: [
            '1803 kauften die USA Frankreich das riesige Louisiana-Gebiet ab und verdoppelten damit ihre Fläche; Meriwether Lewis und William Clark erkundeten danach den Weg bis zum Pazifik. Nach dem Krieg gegen Mexiko (1846–1848) kamen Kalifornien und weite Teile des Südwestens hinzu. Der Goldrausch in Kalifornien ab 1848 lockte Hunderttausende nach Westen; 1869 verband die erste transkontinentale Eisenbahn Ost- und Westküste.',
            'Für die Ureinwohner bedeutete die Expansion Krieg, Vertreibung und Tod. Mit dem Indian Removal Act von 1830 wurden Völker wie die Cherokee aus dem Südosten vertrieben – Tausende starben auf dem „Pfad der Tränen“. Die Indianerkriege endeten 1890 mit dem Massaker am Wounded Knee; die Überlebenden wurden in Reservate gedrängt.',
          ],
          quiz: {
            leicht: [
              ['Was lockte ab 1848 Hunderttausende nach Kalifornien?', 'Der Goldrausch', ['Das Öl', 'Die Eisenbahn', 'Der Tourismus']],
              ['Welches Volk wurde auf dem „Pfad der Tränen“ vertrieben?', 'Die Cherokee', ['Die Azteken', 'Die Inuit', 'Die Maya']],
              ['Welches Verkehrsmittel verband ab 1869 Ost- und Westküste?', 'Die Eisenbahn', ['Das Flugzeug', 'Das Auto', 'Ein Kanal']],
            ],
            mittel: [
              ['Von welchem Land kauften die USA 1803 Louisiana?', 'Frankreich', ['Spanien', 'Großbritannien', 'Mexiko']],
              ['Welche Forscher erkundeten den Weg zum Pazifik?', 'Lewis und Clark', ['Stanley und Livingstone', 'Marco Polo und Kolumbus', 'Cook und Bligh']],
              ['Gegen welches Land führten die USA 1846–1848 Krieg?', 'Mexiko', ['Kanada', 'Spanien', 'Frankreich']],
            ],
            schwer: [
              ['Mit welchem Gesetz wurden 1830 Ureinwohner vertrieben?', 'Indian Removal Act', ['Homestead Act', 'Bill of Rights', 'Civil Rights Act']],
              ['Welches Ereignis beendete 1890 die Indianerkriege?', 'Das Massaker am Wounded Knee', ['Die Schlacht am Little Bighorn', 'Der Goldrausch', 'Der Bürgerkrieg']],
              ['Wie veränderte der Louisiana-Kauf die Fläche der USA?', 'Er verdoppelte sie', ['Um 10 Prozent', 'Um ein Viertel', 'Er verzehnfachte sie']],
            ],
          },
        },
        {
          id: 'buergerkrieg',
          title: 'Der Bürgerkrieg',
          date: '1861–1865',
          text: [
            'Im Süden der USA arbeiteten Millionen versklavte Afroamerikaner auf Baumwollplantagen; im Norden war die Sklaverei abgeschafft. Als 1860 Abraham Lincoln zum Präsidenten gewählt wurde, der die Ausbreitung der Sklaverei stoppen wollte, traten elf Südstaaten aus der Union aus und bildeten die Konföderierten Staaten von Amerika. 1861 begann der Bürgerkrieg, auch Sezessionskrieg genannt.',
            '1863 verkündete Lincoln die Emanzipationsproklamation zur Befreiung der Sklaven in den Rebellengebieten; im selben Jahr siegte die Union bei Gettysburg, wo Lincoln seine berühmte Rede hielt. Im April 1865 kapitulierte der Südstaaten-General Robert E. Lee; wenige Tage später wurde Lincoln ermordet. Mit dem 13. Zusatzartikel zur Verfassung wurde die Sklaverei 1865 abgeschafft. Rund 620.000 Soldaten waren gestorben.',
          ],
          quiz: {
            leicht: [
              ['Welcher Präsident führte die Union im Bürgerkrieg?', 'Abraham Lincoln', ['George Washington', 'Theodore Roosevelt', 'John F. Kennedy']],
              ['Worum ging es im Kern des Konflikts?', 'Um die Sklaverei', ['Um Öl', 'Um die Religion', 'Um die Unabhängigkeit von England']],
              ['Wann endete der Bürgerkrieg?', '1865', ['1776', '1914', '1861']],
            ],
            mittel: [
              ['Wie viele Südstaaten traten aus der Union aus?', 'Elf', ['Drei', 'Dreizehn', 'Zwanzig']],
              ['Wo fand 1863 eine entscheidende Schlacht statt?', 'Bei Gettysburg', ['Bei Waterloo', 'Bei Yorktown', 'In Pearl Harbor']],
              ['Welcher General der Südstaaten kapitulierte 1865?', 'Robert E. Lee', ['Ulysses S. Grant', 'George Custer', 'William Sherman']],
            ],
            schwer: [
              ['Wie heißt Lincolns Erklärung von 1863?', 'Emanzipationsproklamation', ['Unabhängigkeitserklärung', 'Monroe-Doktrin', 'Bill of Rights']],
              ['Mit welchem Verfassungszusatz wurde die Sklaverei abgeschafft?', 'Mit dem 13.', ['Mit dem 1.', 'Mit dem 19.', 'Mit dem 2.']],
              ['Wie viele Soldaten starben im Bürgerkrieg etwa?', 'Rund 620.000', ['Rund 62.000', 'Rund 6 Millionen', 'Rund 1.000']],
            ],
          },
        },
      ],
    },
    {
      id: 'weltmacht',
      name: 'Aufstieg zur Weltmacht',
      period: '1870–1945',
      events: [
        {
          id: 'einwanderung',
          title: 'Industrialisierung und Einwanderung',
          date: '1870–1920',
          text: [
            'Nach dem Bürgerkrieg wurden die USA zur größten Industriemacht der Welt. Unternehmer wie John D. Rockefeller (Öl) und Andrew Carnegie (Stahl) wurden ungeheuer reich; Thomas Edison erfand unter anderem den Phonographen und eine praxistaugliche Glühbirne, und Henry Ford brachte 1908 das Model T heraus, das er ab 1913 am Fließband produzierte.',
            'Millionen Menschen wanderten ein, vor allem aus Europa – darunter viele Deutsche, Iren, Italiener und osteuropäische Juden. Von 1892 bis 1954 wurden die meisten Neuankömmlinge in New York auf Ellis Island abgefertigt; die Freiheitsstatue, ein Geschenk Frankreichs von 1886, begrüßte sie. 1917 traten die USA in den Ersten Weltkrieg ein und stiegen zur Weltmacht auf.',
          ],
          quiz: {
            leicht: [
              ['Welches Geschenk Frankreichs steht im Hafen von New York?', 'Die Freiheitsstatue', ['Der Eiffelturm', 'Das Weiße Haus', 'Die Golden Gate Bridge']],
              ['Wer produzierte Autos am Fließband?', 'Henry Ford', ['Thomas Edison', 'Carl Benz', 'Bill Gates']],
              ['Woher kamen die meisten Einwanderer dieser Zeit?', 'Aus Europa', ['Aus Australien', 'Aus Südamerika', 'Aus der Antarktis']],
            ],
            mittel: [
              ['Auf welcher Insel wurden Einwanderer in New York abgefertigt?', 'Ellis Island', ['Long Island', 'Manhattan', 'Alcatraz']],
              ['Womit wurde John D. Rockefeller reich?', 'Mit Öl', ['Mit Stahl', 'Mit Autos', 'Mit Eisenbahnen']],
              ['Wann traten die USA in den Ersten Weltkrieg ein?', '1917', ['1914', '1941', '1918']],
            ],
            schwer: [
              ['Wie hieß Fords berühmtes Automodell von 1908?', 'Model T', ['Käfer', 'Mustang', 'Model S']],
              ['Wann wurde die Freiheitsstatue eingeweiht?', '1886', ['1776', '1903', '1920']],
              ['Womit wurde Andrew Carnegie reich?', 'Mit Stahl', ['Mit Öl', 'Mit Baumwolle', 'Mit Gold']],
            ],
          },
        },
        {
          id: 'new-deal',
          title: 'Weltwirtschaftskrise und New Deal',
          date: '1929–1939',
          text: [
            'Nach den wilden „Roaring Twenties“ brachen ab dem „Schwarzen Donnerstag“, dem 24. Oktober 1929, die Kurse an der New Yorker Börse ein. Es folgte die Große Depression: Banken gingen pleite, die Arbeitslosigkeit stieg bis 1933 auf rund 25 Prozent, und die Krise griff auf die ganze Welt über. Im Mittleren Westen verschärften Dürren und Staubstürme, die „Dust Bowl“, die Not.',
            'Präsident Franklin D. Roosevelt antwortete ab 1933 mit dem „New Deal“: staatlichen Arbeitsprogrammen, Bankenreformen, einer Sozialversicherung und Großprojekten wie Staudämmen. Roosevelt wurde als einziger Präsident viermal gewählt; danach beschränkte ein Verfassungszusatz die Amtszeit auf zwei Wahlperioden.',
          ],
          quiz: {
            leicht: [
              ['In welchem Jahr brach die Börse in New York ein?', '1929', ['1919', '1945', '2008']],
              ['Wie hieß das Reformprogramm von Präsident Roosevelt?', 'New Deal', ['Marshallplan', 'Green Deal', 'Great Society']],
              ['Wie nennt man die Wirtschaftskrise der 1930er in den USA?', 'Große Depression', ['Goldener Boom', 'Ölkrise', 'Kalter Krieg']],
            ],
            mittel: [
              ['Wie hoch stieg die Arbeitslosigkeit bis 1933 etwa?', 'Auf rund 25 Prozent', ['Auf rund 5 Prozent', 'Auf rund 50 Prozent', 'Auf rund 80 Prozent']],
              ['Wie oft wurde Roosevelt zum Präsidenten gewählt?', 'Viermal', ['Einmal', 'Zweimal', 'Dreimal']],
              ['Wie nennt man die Staubstürme im Mittleren Westen?', 'Dust Bowl', ['Tornado Alley', 'Death Valley', 'Rust Belt']],
            ],
            schwer: [
              ['An welchem Tag begann der Börsenkrach?', 'Donnerstag, 24. Oktober 1929', ['Montag, 1. Mai 1929', 'Freitag, 13. Oktober 1933', 'Dienstag, 11. September 1929']],
              ['Wie nennt man die 1920er Jahre in den USA?', 'Roaring Twenties', ['Golden Fifties', 'Swinging Sixties', 'Gilded Age']],
              ['Was beschränkte nach Roosevelt die Amtszeit der Präsidenten?', 'Ein Verfassungszusatz', ['Ein Gerichtsurteil', 'Ein Volksentscheid', 'Eine Anordnung des Senats']],
            ],
          },
        },
        {
          id: 'pearl-harbor',
          title: 'Pearl Harbor und der Zweite Weltkrieg',
          date: '1941–1945',
          text: [
            'Zunächst blieben die USA im Zweiten Weltkrieg neutral, unterstützten Großbritannien aber mit Waffen. Am 7. Dezember 1941 griff Japan überraschend den Flottenstützpunkt Pearl Harbor auf Hawaii an; über 2.400 Amerikaner starben. Die USA erklärten Japan den Krieg; wenige Tage später erklärten Deutschland und Italien den USA den Krieg.',
            'Die amerikanische Industrie produzierte gewaltige Mengen an Waffen. Am 6. Juni 1944, dem „D-Day“, landeten die Alliierten unter dem Oberbefehl von General Dwight D. Eisenhower in der Normandie. Nach Deutschlands Kapitulation warfen die USA im August 1945 Atombomben auf Hiroshima und Nagasaki; Japan kapitulierte am 2. September 1945. Die USA gingen als Supermacht aus dem Krieg hervor.',
          ],
          quiz: {
            leicht: [
              ['Welcher Stützpunkt wurde am 7. Dezember 1941 angegriffen?', 'Pearl Harbor', ['Guantánamo', 'Alcatraz', 'Fort Knox']],
              ['Welches Land griff an?', 'Japan', ['Deutschland', 'Italien', 'Sowjetunion']],
              ['Auf welche Städte warfen die USA 1945 Atombomben?', 'Hiroshima und Nagasaki', ['Tokio und Osaka', 'Berlin und Dresden', 'Kyoto und Kobe']],
            ],
            mittel: [
              ['Wer war Oberbefehlshaber der Alliierten bei der Landung 1944?', 'Dwight D. Eisenhower', ['George Patton', 'Douglas MacArthur', 'Bernard Montgomery']],
              ['Wie nennt man den Tag der Landung in der Normandie?', 'D-Day', ['V-Day', 'Pearl Day', 'Black Friday']],
              ['Wann kapitulierte Japan?', '2. September 1945', ['8. Mai 1945', '6. August 1945', '7. Dezember 1945']],
            ],
            schwer: [
              ['Wie viele Amerikaner starben in Pearl Harbor etwa?', 'Über 2.400', ['Rund 240', 'Rund 24.000', 'Rund 100']],
              ['Wer erklärte den USA nach Pearl Harbor ebenfalls den Krieg?', 'Deutschland und Italien', ['Frankreich', 'Großbritannien', 'Spanien']],
              ['Auf welcher Inselgruppe liegt Pearl Harbor?', 'Hawaii', ['Philippinen', 'Alëuten', 'Marianen']],
            ],
          },
        },
      ],
    },
    {
      id: 'supermacht',
      name: 'Supermacht',
      period: 'seit 1945',
      events: [
        {
          id: 'buergerrechte',
          title: 'Die Bürgerrechtsbewegung',
          date: '1955–1968',
          text: [
            'Auch nach dem Ende der Sklaverei wurden Afroamerikaner vor allem in den Südstaaten durch Rassentrennungsgesetze benachteiligt. 1955 weigerte sich Rosa Parks in Montgomery, Alabama, ihren Sitzplatz im Bus für einen Weißen zu räumen; der folgende Busboykott machte den Pfarrer Martin Luther King bekannt.',
            'King setzte auf gewaltlosen Protest. Beim Marsch auf Washington 1963 hielt er vor rund 250.000 Menschen seine Rede „I Have a Dream“. 1964 verbot der Civil Rights Act die Rassentrennung, 1965 sicherte der Voting Rights Act das Wahlrecht. King erhielt 1964 den Friedensnobelpreis und wurde 1968 in Memphis ermordet. Präsident John F. Kennedy war schon 1963 in Dallas erschossen worden.',
          ],
          quiz: {
            leicht: [
              ['Wer hielt die Rede „I Have a Dream“?', 'Martin Luther King', ['Malcolm X', 'Barack Obama', 'John F. Kennedy']],
              ['Wer weigerte sich 1955, ihren Platz im Bus zu räumen?', 'Rosa Parks', ['Michelle Obama', 'Harriet Tubman', 'Oprah Winfrey']],
              ['Welcher Präsident wurde 1963 in Dallas erschossen?', 'John F. Kennedy', ['Abraham Lincoln', 'Richard Nixon', 'Lyndon B. Johnson']],
            ],
            mittel: [
              ['Auf welche Art protestierte Martin Luther King?', 'Gewaltlos', ['Bewaffnet', 'Mit Sabotage', 'Gar nicht öffentlich']],
              ['Welches Gesetz verbot 1964 die Rassentrennung?', 'Civil Rights Act', ['Bill of Rights', 'New Deal', 'Patriot Act']],
              ['In welcher Stadt begann der Busboykott?', 'Montgomery', ['New York', 'Chicago', 'Los Angeles']],
            ],
            schwer: [
              ['Wie viele Menschen hörten die Rede 1963 etwa?', 'Rund 250.000', ['Rund 2.500', 'Rund 25.000', 'Rund 2,5 Millionen']],
              ['Wo wurde Martin Luther King 1968 ermordet?', 'In Memphis', ['In Dallas', 'In Atlanta', 'In Washington']],
              ['Welches Gesetz sicherte 1965 das Wahlrecht?', 'Voting Rights Act', ['Civil Rights Act', 'Homestead Act', 'Social Security Act']],
            ],
          },
        },
        {
          id: 'kalter-krieg',
          title: 'Kalter Krieg und Mondlandung',
          date: '1947–1991',
          text: [
            'Nach 1945 standen sich die USA und die Sowjetunion im Kalten Krieg gegenüber. Die USA halfen Westeuropa mit dem Marshallplan, gründeten 1949 die NATO und kämpften in Korea (1950–1953) und Vietnam gegen kommunistische Kräfte. In der Kubakrise 1962 stand die Welt am Rand eines Atomkriegs. Im Vietnamkrieg starben rund 58.000 Amerikaner; er löste große Proteste aus und endete 1975 mit dem Sieg des Nordens.',
            'Im Wettlauf ins All lag die Sowjetunion mit Sputnik (1957) und Juri Gagarin (1961) zunächst vorn. Präsident Kennedy versprach daraufhin, noch in den 1960er Jahren einen Menschen auf den Mond zu bringen. Am 20. Juli 1969 betrat Neil Armstrong mit der Mission Apollo 11 als erster Mensch den Mond. Mit dem Zerfall der Sowjetunion 1991 endete der Kalte Krieg; die USA blieben einzige Supermacht.',
          ],
          quiz: {
            leicht: [
              ['Wer betrat 1969 als erster Mensch den Mond?', 'Neil Armstrong', ['Juri Gagarin', 'Buzz Aldrin', 'John Glenn']],
              ['Wer war der Gegner der USA im Kalten Krieg?', 'Die Sowjetunion', ['Frankreich', 'Kanada', 'Großbritannien']],
              ['In welchem asiatischen Land führten die USA einen langen Krieg?', 'Vietnam', ['Japan', 'Indien', 'Thailand']],
            ],
            mittel: [
              ['Wie hieß die Mission der ersten Mondlandung?', 'Apollo 11', ['Sputnik 1', 'Gemini 4', 'Challenger']],
              ['Wie heißt das Hilfsprogramm für Westeuropa nach 1945?', 'Marshallplan', ['New Deal', 'Monroe-Doktrin', 'Truman-Plan']],
              ['Welche Krise brachte 1962 die Welt an den Rand eines Atomkriegs?', 'Die Kubakrise', ['Die Suezkrise', 'Die Ölkrise', 'Die Koreakrise']],
            ],
            schwer: [
              ['An welchem Tag landete Apollo 11 auf dem Mond?', '20. Juli 1969', ['4. Juli 1969', '12. April 1961', '11. September 1969']],
              ['Wie viele Amerikaner starben im Vietnamkrieg etwa?', 'Rund 58.000', ['Rund 5.800', 'Rund 580.000', 'Rund 5 Millionen']],
              ['Wann wurde die NATO gegründet?', '1949', ['1945', '1955', '1961']],
            ],
          },
        },
        {
          id: 'elfter-september',
          title: 'Der 11. September und die Gegenwart',
          date: '2001–2011',
          text: [
            'Am 11. September 2001 entführten Terroristen der Gruppe al-Qaida vier Passagierflugzeuge. Zwei flogen in die Türme des World Trade Centers in New York, die einstürzten, eines in das Pentagon bei Washington; das vierte stürzte in Pennsylvania ab, nachdem sich Passagiere gewehrt hatten. Fast 3.000 Menschen starben.',
            'Präsident George W. Bush rief den „Krieg gegen den Terror“ aus: 2001 griffen die USA Afghanistan an, 2003 den Irak. 2008 löste der Zusammenbruch der Bank Lehman Brothers eine weltweite Finanzkrise aus. Im selben Jahr wurde Barack Obama als erster Afroamerikaner zum Präsidenten gewählt; 2011 töteten US-Spezialkräfte den al-Qaida-Anführer Osama bin Laden in Pakistan.',
          ],
          quiz: {
            leicht: [
              ['Welche Gebäude wurden am 11. September 2001 in New York zerstört?', 'Die Türme des World Trade Centers', ['Das Empire State Building', 'Die Freiheitsstatue', 'Das Weiße Haus']],
              ['Wer wurde 2008 als erster Afroamerikaner Präsident?', 'Barack Obama', ['Martin Luther King', 'Colin Powell', 'Joe Biden']],
              ['Welche Terrorgruppe stand hinter den Anschlägen?', 'Al-Qaida', ['Die IRA', 'Die ETA', 'Die RAF']],
            ],
            mittel: [
              ['Welches Gebäude bei Washington wurde ebenfalls getroffen?', 'Das Pentagon', ['Das Weiße Haus', 'Das Kapitol', 'Das Lincoln Memorial']],
              ['Welches Land griffen die USA 2003 an?', 'Den Irak', ['Den Iran', 'Syrien', 'Saudi-Arabien']],
              ['Welche Bank löste 2008 mit ihrer Pleite eine Finanzkrise aus?', 'Lehman Brothers', ['Deutsche Bank', 'Goldman Sachs', 'Wells Fargo']],
            ],
            schwer: [
              ['Wie viele Menschen starben am 11. September etwa?', 'Fast 3.000', ['Rund 300', 'Rund 30.000', 'Rund 100']],
              ['Wo stürzte das vierte Flugzeug ab?', 'In Pennsylvania', ['In New York', 'In Texas', 'In Florida']],
              ['In welchem Land wurde Osama bin Laden 2011 getötet?', 'In Pakistan', ['In Afghanistan', 'Im Irak', 'In Saudi-Arabien']],
            ],
          },
        },
      ],
    },
  ],
};
