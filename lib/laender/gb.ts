import type { CountryHistory } from './types';

export const GB: CountryHistory = {
  code: 'GB',
  epochs: [
    {
      id: 'antike',
      name: 'Frühzeit und Römer',
      period: 'bis 5. Jahrhundert',
      events: [
        {
          id: 'roemer',
          title: 'Das römische Britannien',
          date: '43–410',
          text: [
            'Um 3000 v. Chr. begann auf der Insel der Bau von Stonehenge, einem der berühmtesten Steinkreise der Welt. In der Eisenzeit lebten in Britannien keltische Stämme. Caesar landete 55 und 54 v. Chr. zweimal kurz, doch erst unter Kaiser Claudius eroberten die Römer ab 43 n. Chr. große Teile der Insel. 60/61 erhob sich Königin Boudicca mit ihrem Stamm und zerstörte unter anderem Londinium, das heutige London, wurde aber besiegt.',
            'Kaiser Hadrian ließ ab 122 im Norden einen rund 117 Kilometer langen Wall quer über die Insel bauen, der die Provinz gegen die Stämme im heutigen Schottland schützen sollte. Um 410 zogen sich die Römer zurück; danach wanderten Angeln, Sachsen und Jüten vom Kontinent ein – aus ihren Sprachen entstand das Englische.',
          ],
          quiz: {
            leicht: [
              ['Welches berühmte Steinmonument steht in England?', 'Stonehenge', ['Die Akropolis', 'Das Kolosseum', 'Die Cheops-Pyramide']],
              ['Welcher Kaiser ließ einen Wall quer über Britannien bauen?', 'Hadrian', ['Augustus', 'Nero', 'Konstantin']],
              ['Wie hieß London in römischer Zeit?', 'Londinium', ['Lutetia', 'Eboracum', 'Colonia']],
            ],
            mittel: [
              ['Ab welchem Jahr eroberten die Römer Britannien?', '43 n. Chr.', ['55 v. Chr.', '122 n. Chr.', '410 n. Chr.']],
              ['Welche Königin führte einen Aufstand gegen die Römer?', 'Boudicca', ['Kleopatra', 'Zenobia', 'Elisabeth']],
              ['Welche Völker wanderten nach dem Abzug der Römer ein?', 'Angeln, Sachsen und Jüten', ['Franken und Goten', 'Kelten und Iberer', 'Hunnen und Awaren']],
            ],
            schwer: [
              ['Wie lang war der Hadrianswall etwa?', 'Rund 117 Kilometer', ['Rund 17 Kilometer', 'Rund 550 Kilometer', 'Rund 1.000 Kilometer']],
              ['Unter welchem Kaiser begann 43 n. Chr. die Eroberung?', 'Claudius', ['Caesar', 'Trajan', 'Augustus']],
              ['Wann zogen sich die Römer etwa aus Britannien zurück?', 'Um 410', ['Um 122', 'Um 600', 'Um 1066']],
            ],
          },
        },
      ],
    },
    {
      id: 'mittelalter',
      name: 'Mittelalter',
      period: '1066–1485',
      events: [
        {
          id: 'normannen',
          title: 'Die normannische Eroberung',
          date: '1066',
          text: [
            'Im frühen Mittelalter entstanden angelsächsische Königreiche, die sich im 10. Jahrhundert zu einem Reich England vereinten; immer wieder fielen Wikinger ein. Als König Eduard der Bekenner 1066 kinderlos starb, beanspruchte Herzog Wilhelm von der Normandie den Thron. Am 14. Oktober 1066 besiegte er bei Hastings den angelsächsischen König Harold II., der in der Schlacht fiel, und wurde zu Weihnachten in Westminster gekrönt.',
            'Wilhelm der Eroberer ersetzte den angelsächsischen Adel weitgehend durch Normannen, baute Burgen wie den Tower of London und ließ 1086 im Domesday Book den gesamten Besitz im Land erfassen. Französisch wurde für Jahrhunderte die Sprache des Hofes – daher stammen viele englische Wörter aus dem Französischen. Der Teppich von Bayeux zeigt die Eroberung in Bildern.',
          ],
          quiz: {
            leicht: [
              ['Wer eroberte 1066 England?', 'Wilhelm der Eroberer', ['Richard Löwenherz', 'Alfred der Große', 'Knut der Große']],
              ['In welcher Schlacht siegte er?', 'Bei Hastings', ['Bei Waterloo', 'Bei Azincourt', 'Bei Trafalgar']],
              ['Aus welcher Region Frankreichs kam er?', 'Aus der Normandie', ['Aus der Bretagne', 'Aus der Provence', 'Aus Burgund']],
            ],
            mittel: [
              ['Welcher angelsächsische König fiel 1066?', 'Harold II.', ['Eduard der Bekenner', 'Alfred der Große', 'Æthelred']],
              ['Welche berühmte Burg ließ Wilhelm in London bauen?', 'Den Tower of London', ['Balmoral Castle', 'Caernarfon Castle', 'Stirling Castle']],
              ['Welche Sprache sprach der Hof danach jahrhundertelang?', 'Französisch', ['Deutsch', 'Dänisch', 'Gälisch']],
            ],
            schwer: [
              ['Wie heißt das Verzeichnis des Landbesitzes von 1086?', 'Domesday Book', ['Magna Carta', 'Bill of Rights', 'Book of Kells']],
              ['Welches Kunstwerk zeigt die Eroberung in Bildern?', 'Der Teppich von Bayeux', ['Das Book of Kells', 'Die Sixtinische Madonna', 'Der Isenheimer Altar']],
              ['An welchem Tag fand die Schlacht bei Hastings statt?', '14. Oktober 1066', ['25. Dezember 1066', '6. Juni 1066', '1. Januar 1067']],
            ],
          },
        },
        {
          id: 'magna-carta',
          title: 'Die Magna Carta',
          date: '1215',
          text: [
            'König Johann Ohneland verlor 1204 die Normandie an Frankreich und belastete seine Barone mit hohen Abgaben. 1215 zwangen ihn aufständische Adlige auf der Wiese von Runnymede an der Themse, die Magna Carta („Große Urkunde“) zu besiegeln. Sie schützte Rechte von Kirche und Adel und legte fest, dass niemand ohne rechtmäßiges Urteil gefangen genommen oder enteignet werden durfte.',
            'Johann ließ die Urkunde schon nach wenigen Wochen vom Papst für ungültig erklären, doch sie wurde in überarbeiteten Fassungen immer wieder bestätigt. Im 13. Jahrhundert entstand zudem das Parlament: 1265 berief Simon de Montfort erstmals auch Vertreter der Städte ein. Die Magna Carta gilt bis heute als Meilenstein auf dem Weg zum Rechtsstaat und beeinflusste etwa die Verfassung der USA.',
          ],
          quiz: {
            leicht: [
              ['Wie heißt die englische Urkunde von 1215?', 'Magna Carta', ['Bill of Rights', 'Goldene Bulle', 'Habeas Corpus']],
              ['Welcher König musste sie besiegeln?', 'Johann Ohneland', ['Richard Löwenherz', 'Heinrich VIII.', 'Wilhelm der Eroberer']],
              ['Was bedeutet „Magna Carta“?', 'Große Urkunde', ['Großer König', 'Neues Gesetz', 'Freier Bürger']],
            ],
            mittel: [
              ['Wer zwang den König zur Magna Carta?', 'Aufständische Barone', ['Der Papst', 'Der französische König', 'Die Bauern']],
              ['Wo wurde sie besiegelt?', 'In Runnymede an der Themse', ['Im Tower of London', 'In Canterbury', 'In York']],
              ['Wer erklärte sie kurz darauf für ungültig?', 'Der Papst', ['Das Parlament', 'Der Kaiser', 'Der Erzbischof von York']],
            ],
            schwer: [
              ['Wer berief 1265 erstmals Vertreter der Städte ins Parlament?', 'Simon de Montfort', ['Thomas Becket', 'Oliver Cromwell', 'Eduard I.']],
              ['Welches Gebiet hatte Johann 1204 verloren?', 'Die Normandie', ['Schottland', 'Irland', 'Wales']],
              ['Wessen Verfassung wurde später von der Magna Carta beeinflusst?', 'Die der USA', ['Die der Sowjetunion', 'Die Chinas', 'Die des Osmanischen Reiches']],
            ],
          },
        },
      ],
    },
    {
      id: 'neuzeit',
      name: 'Tudors und Stuarts',
      period: '1485–1714',
      events: [
        {
          id: 'tudors',
          title: 'Heinrich VIII. und Elisabeth I.',
          date: '1509–1603',
          text: [
            'Heinrich VIII. aus dem Haus Tudor wollte seine Ehe mit Katharina von Aragón annullieren lassen, weil sie ihm keinen Sohn geboren hatte. Als der Papst ablehnte, sagte sich Heinrich von Rom los: Mit der Suprematsakte von 1534 wurde der König Oberhaupt der Kirche von England, der anglikanischen Kirche. Er ließ die Klöster auflösen und war insgesamt sechsmal verheiratet; zwei seiner Frauen ließ er hinrichten.',
            'Seine Tochter Elisabeth I. regierte von 1558 bis 1603 und blieb unverheiratet – die „jungfräuliche Königin“. 1588 besiegte Englands Flotte, begünstigt durch Stürme, die spanische Armada. Unter Elisabeth blühten Seefahrt und Theater; William Shakespeare schrieb seine ersten Stücke. Mit ihrem Tod endete die Tudor-Dynastie; ihr folgte König Jakob VI. von Schottland als Jakob I.',
          ],
          quiz: {
            leicht: [
              ['Wie oft war Heinrich VIII. verheiratet?', 'Sechsmal', ['Zweimal', 'Viermal', 'Achtmal']],
              ['Welche Flotte besiegte England 1588?', 'Die spanische Armada', ['Die französische Flotte', 'Die Flotte der Hanse', 'Die osmanische Flotte']],
              ['Welcher berühmte Dichter wirkte unter Elisabeth I.?', 'William Shakespeare', ['Charles Dickens', 'Lord Byron', 'Jane Austen']],
            ],
            mittel: [
              ['Welche Kirche entstand durch Heinrichs Bruch mit Rom?', 'Die anglikanische Kirche', ['Die lutherische Kirche', 'Die orthodoxe Kirche', 'Die reformierte Kirche']],
              ['Welcher Herrscherfamilie gehörten Heinrich und Elisabeth an?', 'Den Tudors', ['Den Stuarts', 'Den Windsors', 'Den Plantagenets']],
              ['Wie wurde Elisabeth I. genannt?', 'Die jungfräuliche Königin', ['Die Eiserne Lady', 'Die blutige Mary', 'Die Großmutter Europas']],
            ],
            schwer: [
              ['Mit welchem Gesetz wurde der König 1534 Kirchenoberhaupt?', 'Mit der Suprematsakte', ['Mit der Bill of Rights', 'Mit dem Act of Union', 'Mit der Toleranzakte']],
              ['Von welcher Frau wollte sich Heinrich zuerst trennen?', 'Katharina von Aragón', ['Anne Boleyn', 'Jane Seymour', 'Anna von Kleve']],
              ['Wer folgte Elisabeth 1603 auf den Thron?', 'Jakob I.', ['Karl I.', 'Maria Stuart', 'Wilhelm III.']],
            ],
          },
        },
        {
          id: 'glorious-revolution',
          title: 'Bürgerkrieg und Glorreiche Revolution',
          date: '1642–1707',
          text: [
            'Die Könige aus dem Haus Stuart gerieten mit dem Parlament über Steuern, Religion und Macht in Streit. 1642 brach ein Bürgerkrieg zwischen Anhängern König Karls I. und des Parlaments aus. Die Parlamentsarmee unter Oliver Cromwell siegte; 1649 wurde Karl I. hingerichtet, und England war einige Jahre lang Republik, die Cromwell als „Lordprotektor“ regierte. 1660 kehrte die Monarchie mit Karl II. zurück.',
            'Als der katholische Jakob II. das Parlament zu übergehen versuchte, holten führende Politiker 1688 seinen protestantischen Schwiegersohn Wilhelm von Oranien aus den Niederlanden ins Land. Jakob floh ohne große Kämpfe – die „Glorreiche Revolution“. 1689 sicherte die Bill of Rights die Rechte des Parlaments; England wurde eine parlamentarische Monarchie. 1707 vereinigten sich England und Schottland zum Königreich Großbritannien.',
          ],
          quiz: {
            leicht: [
              ['Welcher englische König wurde 1649 hingerichtet?', 'Karl I.', ['Heinrich VIII.', 'Jakob II.', 'Karl II.']],
              ['Wer führte die Parlamentsarmee?', 'Oliver Cromwell', ['Wilhelm von Oranien', 'Isaac Newton', 'Thomas Morus']],
              ['Welche Länder vereinigten sich 1707 zu Großbritannien?', 'England und Schottland', ['England und Irland', 'England und Frankreich', 'Schottland und Wales']],
            ],
            mittel: [
              ['Wie nennt man den Machtwechsel von 1688?', 'Glorreiche Revolution', ['Rosenkriege', 'Restauration', 'Industrielle Revolution']],
              ['Welches Dokument sicherte 1689 die Rechte des Parlaments?', 'Die Bill of Rights', ['Die Magna Carta', 'Der Act of Union', 'Die Petition of Right']],
              ['Welchen Titel trug Cromwell?', 'Lordprotektor', ['König', 'Kaiser', 'Premierminister']],
            ],
            schwer: [
              ['Aus welchem Land kam Wilhelm von Oranien?', 'Aus den Niederlanden', ['Aus Frankreich', 'Aus Schweden', 'Aus Hannover']],
              ['Wann kehrte die Monarchie mit Karl II. zurück?', '1660', ['1649', '1688', '1707']],
              ['Welchem Herrscherhaus gehörten Karl I. und Jakob II. an?', 'Den Stuarts', ['Den Tudors', 'Den Hannoveranern', 'Den Windsors']],
            ],
          },
        },
      ],
    },
    {
      id: 'empire',
      name: 'Industrie und Empire',
      period: '1760–1914',
      events: [
        {
          id: 'industrialisierung',
          title: 'Die Industrielle Revolution',
          date: 'ca. 1760–1850',
          text: [
            'Im 18. Jahrhundert begann in Großbritannien die Industrielle Revolution. Reiche Kohle- und Eisenvorkommen, Kapital aus dem Handel und neue Erfindungen kamen zusammen: Spinnmaschinen und mechanische Webstühle veränderten die Textilherstellung, James Watt verbesserte ab 1769 die Dampfmaschine entscheidend. Fabriken entstanden, und Städte wie Manchester wuchsen rasant.',
            '1825 eröffnete zwischen Stockton und Darlington die erste öffentliche Eisenbahn mit Dampflokomotiven; George Stephensons Lokomotive „Rocket“ gewann 1829 ein berühmtes Wettrennen. Die Arbeitsbedingungen waren oft hart – lange Arbeitszeiten, Kinderarbeit, Elendsviertel. Daraus entstanden Gewerkschaften und erste Schutzgesetze wie der Factory Act von 1833.',
          ],
          quiz: {
            leicht: [
              ['In welchem Land begann die Industrielle Revolution?', 'Großbritannien', ['Deutschland', 'Frankreich', 'USA']],
              ['Welche Maschine verbesserte James Watt?', 'Die Dampfmaschine', ['Das Telefon', 'Das Auto', 'Die Glühbirne']],
              ['Welches Verkehrsmittel entstand in dieser Zeit?', 'Die Eisenbahn', ['Das Flugzeug', 'Das Auto', 'Das U-Boot']],
            ],
            mittel: [
              ['Welche Stadt wurde Zentrum der Textilindustrie?', 'Manchester', ['Oxford', 'Cambridge', 'Bath']],
              ['Wie hieß Stephensons berühmte Lokomotive?', 'Rocket', ['Adler', 'Puffing Billy', 'Flying Scotsman']],
              ['Welches soziale Problem gab es in den Fabriken?', 'Kinderarbeit', ['Zu kurze Arbeitszeiten', 'Zu hohe Löhne', 'Zu viel Urlaub']],
            ],
            schwer: [
              ['Zwischen welchen Orten fuhr 1825 die erste öffentliche Dampfeisenbahn?', 'Stockton und Darlington', ['London und Oxford', 'Liverpool und Manchester', 'Edinburgh und Glasgow']],
              ['Ab wann verbesserte Watt die Dampfmaschine entscheidend?', 'Ab 1769', ['Ab 1712', 'Ab 1825', 'Ab 1851']],
              ['Wie hieß ein frühes Arbeiterschutzgesetz von 1833?', 'Factory Act', ['Bill of Rights', 'Corn Law', 'Act of Union']],
            ],
          },
        },
        {
          id: 'victoria',
          title: 'Königin Victoria und das Empire',
          date: '1837–1901',
          text: [
            'Königin Victoria regierte von 1837 bis 1901 – 63 Jahre lang. In dieser Zeit wurde das Britische Empire zum größten Reich der Weltgeschichte; um 1920 umfasste es rund ein Viertel der Landfläche der Erde. Dazu gehörten Kanada, Australien, Indien – Victoria trug ab 1876 auch den Titel Kaiserin von Indien – und große Teile Afrikas. Man sagte, im Empire gehe die Sonne nie unter.',
            'London wurde zur größten Stadt und zum Finanzzentrum der Welt; die Weltausstellung 1851 im Kristallpalast zeigte den technischen Fortschritt. Zugleich wuchs die Kritik an der Armut, die Schriftsteller wie Charles Dickens beschrieben. Victorias Kinder und Enkel heirateten in viele Königshäuser Europas, sie wurde „Großmutter Europas“ genannt – auch Kaiser Wilhelm II. war ihr Enkel.',
          ],
          quiz: {
            leicht: [
              ['Welche Königin gab dem Zeitalter ihren Namen?', 'Victoria', ['Elisabeth I.', 'Elisabeth II.', 'Anne']],
              ['Wie viel der Landfläche der Erde umfasste das Empire um 1920 etwa?', 'Ein Viertel', ['Die Hälfte', 'Ein Zehntel', 'Drei Viertel']],
              ['Welcher Schriftsteller beschrieb die Armut in London?', 'Charles Dickens', ['William Shakespeare', 'J. K. Rowling', 'Jane Austen']],
            ],
            mittel: [
              ['Wie lange regierte Victoria?', '63 Jahre', ['23 Jahre', '45 Jahre', '70 Jahre']],
              ['Welchen Kaisertitel trug Victoria ab 1876?', 'Kaiserin von Indien', ['Kaiserin von China', 'Kaiserin von Deutschland', 'Kaiserin von Afrika']],
              ['In welchem Gebäude fand die Weltausstellung 1851 statt?', 'Im Kristallpalast', ['Im Buckingham Palace', 'Im Tower', 'In Westminster Abbey']],
            ],
            schwer: [
              ['Welcher deutsche Kaiser war Victorias Enkel?', 'Wilhelm II.', ['Wilhelm I.', 'Friedrich III.', 'Franz Joseph I.']],
              ['Welchen Beinamen bekam Victoria wegen ihrer Nachkommen?', 'Großmutter Europas', ['Mutter der Nation', 'Eiserne Lady', 'Königin der Meere']],
              ['Ab welchem Jahr trug Victoria den Titel Kaiserin von Indien?', '1876', ['1837', '1858', '1901']],
            ],
          },
        },
      ],
    },
    {
      id: 'weltkriege',
      name: 'Zwei Weltkriege',
      period: '1914–1945',
      events: [
        {
          id: 'irland',
          title: 'Erster Weltkrieg und irische Unabhängigkeit',
          date: '1914–1922',
          text: [
            'Großbritannien trat im August 1914 in den Ersten Weltkrieg ein, nachdem Deutschland das neutrale Belgien überfallen hatte. Am ersten Tag der Schlacht an der Somme, dem 1. Juli 1916, verlor die britische Armee fast 20.000 Gefallene – der verlustreichste Tag ihrer Geschichte. Insgesamt starben rund 900.000 Soldaten aus Großbritannien und dem Empire. 1918 erhielten Frauen über 30 das Wahlrecht, für das die Suffragetten jahrelang gekämpft hatten.',
            'In Irland, seit 1801 Teil des Vereinigten Königreichs, kam es Ostern 1916 zum Osteraufstand in Dublin. Nach einem Unabhängigkeitskrieg entstand 1922 der Irische Freistaat; der Norden der Insel blieb als Nordirland beim Vereinigten Königreich. Der Konflikt um Nordirland flammte in den „Troubles“ ab 1968 wieder auf und wurde erst mit dem Karfreitagsabkommen 1998 beigelegt.',
          ],
          quiz: {
            leicht: [
              ['Welche Insel wurde 1922 größtenteils unabhängig?', 'Irland', ['Island', 'Malta', 'Zypern']],
              ['Welcher Teil Irlands blieb beim Vereinigten Königreich?', 'Nordirland', ['Südirland', 'Die Region um Dublin', 'Die Region um Galway']],
              ['Wie nannte man die Frauen, die für das Wahlrecht kämpften?', 'Suffragetten', ['Hugenotten', 'Puritaner', 'Amazonen']],
            ],
            mittel: [
              ['In welcher Schlacht erlebte die britische Armee 1916 ihren verlustreichsten Tag?', 'An der Somme', ['Bei Verdun', 'Bei Waterloo', 'Bei Tannenberg']],
              ['Wie heißt der Aufstand in Dublin 1916?', 'Osteraufstand', ['Novemberrevolution', 'Pfingstaufstand', 'Märzrevolution']],
              ['Welches Abkommen beendete 1998 den Nordirlandkonflikt?', 'Karfreitagsabkommen', ['Osterabkommen', 'Dayton-Abkommen', 'Oslo-Abkommen']],
            ],
            schwer: [
              ['Ab welchem Alter durften Frauen 1918 wählen?', 'Ab 30', ['Ab 18', 'Ab 21', 'Ab 25']],
              ['Seit wann war Irland Teil des Vereinigten Königreichs?', 'Seit 1801', ['Seit 1066', 'Seit 1707', 'Seit 1603']],
              ['Wie nennt man den Nordirlandkonflikt ab 1968?', 'The Troubles', ['The Blitz', 'The Rising', 'The Clearances']],
            ],
          },
        },
        {
          id: 'churchill',
          title: 'Churchill und der Zweite Weltkrieg',
          date: '1939–1945',
          text: [
            'Nach dem deutschen Überfall auf Polen erklärte Großbritannien am 3. September 1939 Deutschland den Krieg. Im Mai 1940 wurde Winston Churchill Premierminister; er versprach dem Land nichts als „Blut, Mühsal, Tränen und Schweiß“. Bei Dünkirchen konnten im Frühsommer 1940 über 300.000 alliierte Soldaten über den Ärmelkanal gerettet werden.',
            'In der Luftschlacht um England verteidigte die Royal Air Force im Sommer und Herbst 1940 das Land erfolgreich gegen die deutsche Luftwaffe; eine Invasion fand nicht statt. Deutsche Bomben trafen dennoch viele Städte – „the Blitz“ –, etwa London und Coventry. An der Seite der USA und der Sowjetunion gehörte Großbritannien zu den Siegermächten; am 6. Juni 1944 landeten britische, amerikanische und kanadische Truppen in der Normandie.',
          ],
          quiz: {
            leicht: [
              ['Wer war britischer Premierminister in den meisten Kriegsjahren?', 'Winston Churchill', ['Margaret Thatcher', 'Tony Blair', 'David Lloyd George']],
              ['Wie heißt die Luftschlacht von 1940?', 'Luftschlacht um England', ['Schlacht bei Hastings', 'Seeschlacht von Trafalgar', 'Schlacht an der Somme']],
              ['In welchem Jahr erklärte Großbritannien Deutschland den Krieg?', '1939', ['1914', '1941', '1945']],
            ],
            mittel: [
              ['Von wo wurden 1940 über 300.000 Soldaten gerettet?', 'Aus Dünkirchen', ['Aus Calais', 'Aus Brest', 'Aus Narvik']],
              ['Was versprach Churchill dem Land?', '„Blut, Mühsal, Tränen und Schweiß“', ['„Brot und Spiele“', '„Frieden für unsere Zeit“', '„Freiheit für alle“']],
              ['Wie nennen Briten die deutschen Bombenangriffe?', 'The Blitz', ['The Troubles', 'The Rising', 'The Raid']],
            ],
            schwer: [
              ['An welchem Tag erklärte Großbritannien den Krieg?', '3. September 1939', ['1. September 1939', '10. Mai 1940', '7. Dezember 1941']],
              ['Welche Stadt wurde 1940 besonders schwer bombardiert?', 'Coventry', ['Oxford', 'Bath', 'Cambridge']],
              ['Wann wurde Churchill Premierminister?', 'Im Mai 1940', ['Im September 1939', 'Im Juni 1944', 'Im Januar 1942']],
            ],
          },
        },
      ],
    },
    {
      id: 'gegenwart',
      name: 'Nach 1945',
      period: 'seit 1945',
      events: [
        {
          id: 'nachkriegszeit',
          title: 'Ende des Empire und Wohlfahrtsstaat',
          date: '1945–1997',
          text: [
            'Nach dem Krieg baute die Labour-Regierung unter Clement Attlee den Wohlfahrtsstaat auf; 1948 entstand der National Health Service (NHS), ein staatlicher Gesundheitsdienst für alle. Zugleich zerfiel das Empire: 1947 wurden Indien und Pakistan unabhängig, in den folgenden Jahrzehnten fast alle Kolonien in Afrika, Asien und der Karibik. Viele blieben im Commonwealth verbunden. 1997 gab Großbritannien Hongkong an China zurück.',
            '1952 bestieg Elisabeth II. den Thron; sie regierte 70 Jahre bis zu ihrem Tod 2022 – länger als jeder britische Monarch vor ihr. In den 1960ern prägten britische Bands wie die Beatles die Popkultur der Welt. Margaret Thatcher, von 1979 bis 1990 erste Premierministerin des Landes, privatisierte Staatsbetriebe und schwächte die Gewerkschaften; man nannte sie „die Eiserne Lady“.',
          ],
          quiz: {
            leicht: [
              ['Welche Königin regierte 70 Jahre lang?', 'Elisabeth II.', ['Victoria', 'Elisabeth I.', 'Anne']],
              ['Wer war die erste britische Premierministerin?', 'Margaret Thatcher', ['Theresa May', 'Liz Truss', 'Elisabeth II.']],
              ['Welche britische Band prägte die 1960er?', 'Die Beatles', ['ABBA', 'Rammstein', 'Die Beach Boys']],
            ],
            mittel: [
              ['Welches große Land wurde 1947 unabhängig?', 'Indien', ['Kanada', 'Australien', 'Ägypten']],
              ['Wie heißt der staatliche Gesundheitsdienst von 1948?', 'NHS', ['BBC', 'NATO', 'UNO']],
              ['Welchen Spitznamen hatte Margaret Thatcher?', 'Die Eiserne Lady', ['Die jungfräuliche Königin', 'Die Großmutter Europas', 'Die Löwin']],
            ],
            schwer: [
              ['Welcher Premierminister baute nach 1945 den Wohlfahrtsstaat auf?', 'Clement Attlee', ['Winston Churchill', 'Harold Wilson', 'Anthony Eden']],
              ['In welchem Jahr gab Großbritannien Hongkong an China zurück?', '1997', ['1947', '1984', '2007']],
              ['In welchem Jahr starb Elisabeth II.?', '2022', ['2012', '2019', '2023']],
            ],
          },
        },
        {
          id: 'brexit',
          title: 'Europa und der Brexit',
          date: '1973–2020',
          text: [
            '1973 trat das Vereinigte Königreich der Europäischen Gemeinschaft bei, nachdem Frankreichs Präsident de Gaulle zwei frühere Beitrittsversuche blockiert hatte. Die Briten blieben aber skeptisch: Sie behielten das Pfund, statt den Euro einzuführen, und traten dem Schengen-Raum nicht bei.',
            'In einem Referendum am 23. Juni 2016 stimmten knapp 52 Prozent für den Austritt aus der EU – den „Brexit“. Nach langen Verhandlungen verließ das Land die Union am 31. Januar 2020. In Schottland und Nordirland hatte eine Mehrheit für den Verbleib gestimmt, was die Debatte über den Zusammenhalt des Landes neu entfachte.',
          ],
          quiz: {
            leicht: [
              ['Wie nennt man den EU-Austritt Großbritanniens?', 'Brexit', ['Grexit', 'Exit Europe', 'Britain First']],
              ['In welchem Jahr verließ Großbritannien die EU?', '2020', ['2016', '2008', '1973']],
              ['Welche Währung behielt Großbritannien?', 'Das Pfund', ['Den Euro', 'Den Dollar', 'Die Krone']],
            ],
            mittel: [
              ['Wann trat Großbritannien der Europäischen Gemeinschaft bei?', '1973', ['1957', '1990', '2004']],
              ['Wie viel Prozent stimmten 2016 für den Austritt?', 'Knapp 52 Prozent', ['Knapp 30 Prozent', 'Knapp 75 Prozent', 'Genau 50 Prozent']],
              ['Welcher französische Präsident blockierte frühere Beitrittsversuche?', 'Charles de Gaulle', ['François Mitterrand', 'Emmanuel Macron', 'Jacques Chirac']],
            ],
            schwer: [
              ['An welchem Tag fand das Brexit-Referendum statt?', '23. Juni 2016', ['31. Januar 2020', '1. Januar 1973', '9. November 2016']],
              ['Welche Landesteile stimmten mehrheitlich für den Verbleib?', 'Schottland und Nordirland', ['England und Wales', 'Wales und Schottland', 'England und Nordirland']],
              ['Welchem Raum ohne Grenzkontrollen trat Großbritannien nie bei?', 'Dem Schengen-Raum', ['Der NATO', 'Der UNO', 'Dem Commonwealth']],
            ],
          },
        },
      ],
    },
  ],
};
