import type { CountryHistory } from './types';

export const IT: CountryHistory = {
  code: 'IT',
  epochs: [
    {
      id: 'antike',
      name: 'Das antike Rom',
      period: '753 v. Chr. – 476 n. Chr.',
      events: [
        {
          id: 'republik',
          title: 'Von der Gründung Roms zur Republik',
          date: '753–44 v. Chr.',
          text: [
            'Der Sage nach gründeten die Zwillinge Romulus und Remus, die von einer Wölfin gesäugt worden waren, im Jahr 753 v. Chr. die Stadt Rom am Tiber. Anfangs herrschten Könige, darunter auch etruskische. 509 v. Chr. vertrieben die Römer der Überlieferung nach ihren letzten König Tarquinius Superbus und gründeten die Republik: Zwei jährlich gewählte Konsuln und der Senat führten den Staat.',
            'Rom unterwarf nach und nach ganz Italien und besiegte in den Punischen Kriegen seine Rivalin Karthago – trotz Hannibals berühmtem Zug über die Alpen 218 v. Chr. Im 1. Jahrhundert v. Chr. erschütterten Bürgerkriege die Republik; Julius Caesar machte sich zum Diktator auf Lebenszeit und wurde 44 v. Chr. ermordet.',
          ],
          quiz: {
            leicht: [
              ['Wer gründete der Sage nach Rom?', 'Romulus und Remus', ['Caesar und Augustus', 'Kastor und Pollux', 'Äneas und Dido']],
              ['An welchem Fluss liegt Rom?', 'Am Tiber', ['Am Po', 'Am Arno', 'An der Donau']],
              ['Welches Tier säugte der Sage nach die Zwillinge?', 'Eine Wölfin', ['Eine Bärin', 'Eine Ziege', 'Eine Löwin']],
            ],
            mittel: [
              ['Wann wurde die Römische Republik gegründet?', '509 v. Chr.', ['753 v. Chr.', '44 v. Chr.', '27 v. Chr.']],
              ['Wer führte die Republik, jährlich gewählt, an?', 'Zwei Konsuln', ['Ein König', 'Ein Kaiser', 'Drei Diktatoren']],
              ['Gegen welche Stadt führte Rom die Punischen Kriege?', 'Karthago', ['Athen', 'Sparta', 'Troja']],
            ],
            schwer: [
              ['Wie hieß der letzte König Roms?', 'Tarquinius Superbus', ['Numa Pompilius', 'Romulus Augustulus', 'Servius Tullius']],
              ['Welches Volk stellte einige der frühen Könige Roms?', 'Die Etrusker', ['Die Griechen', 'Die Kelten', 'Die Phönizier']],
              ['Wann überquerte Hannibal die Alpen?', '218 v. Chr.', ['509 v. Chr.', '146 v. Chr.', '44 v. Chr.']],
            ],
          },
        },
        {
          id: 'kaiserzeit',
          title: 'Das Römische Kaiserreich',
          date: '27 v. Chr. – 476 n. Chr.',
          text: [
            '27 v. Chr. erhielt Caesars Großneffe Octavian den Ehrennamen Augustus und wurde erster Kaiser. Es folgten rund zwei Jahrhunderte relativen Friedens, die Pax Romana. Unter Kaiser Trajan erreichte das Reich um 117 n. Chr. seine größte Ausdehnung von Britannien bis Mesopotamien. Bauten wie das Kolosseum, eröffnet 80 n. Chr., oder das Pantheon zeugen bis heute von dieser Zeit.',
            'Im 4. Jahrhundert wurde das Christentum erlaubt und schließlich Staatsreligion; Kaiser Konstantin gründete Konstantinopel als neue Hauptstadt. 395 wurde das Reich endgültig in West und Ost geteilt. 410 plünderten die Westgoten Rom, 476 setzte der germanische Heerführer Odoaker den letzten weströmischen Kaiser Romulus Augustulus ab. Das Oströmische Reich bestand bis 1453.',
          ],
          quiz: {
            leicht: [
              ['Wer war der erste römische Kaiser?', 'Augustus', ['Julius Caesar', 'Nero', 'Konstantin']],
              ['Welches berühmte Bauwerk wurde 80 n. Chr. eröffnet?', 'Das Kolosseum', ['Der Petersdom', 'Der Schiefe Turm von Pisa', 'Der Dogenpalast']],
              ['Wann endete das Weströmische Reich?', '476', ['27 v. Chr.', '1453', '800']],
            ],
            mittel: [
              ['Wie nennt man die lange Friedenszeit im Reich?', 'Pax Romana', ['Pax Americana', 'Dolce Vita', 'Renaissance']],
              ['Welcher Kaiser gründete Konstantinopel?', 'Konstantin', ['Augustus', 'Trajan', 'Hadrian']],
              ['Wer setzte 476 den letzten weströmischen Kaiser ab?', 'Odoaker', ['Attila', 'Alarich', 'Theoderich']],
            ],
            schwer: [
              ['Unter welchem Kaiser hatte das Reich seine größte Ausdehnung?', 'Trajan', ['Augustus', 'Nero', 'Diokletian']],
              ['In welchem Jahr wurde das Reich endgültig geteilt?', '395', ['117', '313', '476']],
              ['Wer plünderte Rom im Jahr 410?', 'Die Westgoten', ['Die Hunnen', 'Die Franken', 'Die Wikinger']],
            ],
          },
        },
      ],
    },
    {
      id: 'mittelalter',
      name: 'Stadtstaaten und Renaissance',
      period: '11.–16. Jahrhundert',
      events: [
        {
          id: 'stadtstaaten',
          title: 'Stadtstaaten, Seerepubliken und Papsttum',
          date: '11.–15. Jahrhundert',
          text: [
            'Nach dem Ende Westroms war Italien über 1.300 Jahre lang politisch zersplittert. Der Norden gehörte lange zum Heiligen Römischen Reich, im Süden herrschten nacheinander Byzantiner, Araber, Normannen und später Franzosen und Spanier. In Mittelitalien regierte der Papst den Kirchenstaat mit Rom.',
            'Ab dem 11. Jahrhundert wurden Städte wie Mailand und Florenz sowie die Seerepubliken Venedig, Genua, Pisa und Amalfi reich und mächtig. Venedig, regiert von einem gewählten Dogen, beherrschte mit seiner Flotte den Handel mit dem Orient; der Venezianer Marco Polo reiste im 13. Jahrhundert bis nach China. Die Städte erkämpften sich weitgehende Selbstständigkeit von den Kaisern.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt beherrschte mit ihrer Flotte den Orienthandel?', 'Venedig', ['Rom', 'Mailand', 'Turin']],
              ['Wer regierte den Kirchenstaat?', 'Der Papst', ['Der Kaiser', 'Der Doge', 'Der König von Spanien']],
              ['Welcher Venezianer reiste bis nach China?', 'Marco Polo', ['Christoph Kolumbus', 'Amerigo Vespucci', 'Galileo Galilei']],
            ],
            mittel: [
              ['Wie hieß das gewählte Oberhaupt Venedigs?', 'Doge', ['König', 'Kaiser', 'Konsul']],
              ['Welche dieser Städte war eine Seerepublik?', 'Genua', ['Florenz', 'Mailand', 'Bologna']],
              ['Welches Volk eroberte im 11. Jahrhundert Süditalien?', 'Die Normannen', ['Die Franken', 'Die Ungarn', 'Die Hunnen']],
            ],
            schwer: [
              ['Welche vier Städte zählt man zu den großen Seerepubliken?', 'Venedig, Genua, Pisa und Amalfi', ['Venedig, Neapel, Rom und Palermo', 'Genua, Mailand, Turin und Florenz', 'Pisa, Siena, Ancona und Bari']],
              ['Wie lange war Italien nach dem Ende Westroms politisch zersplittert?', 'Über 1.300 Jahre', ['Rund 300 Jahre', 'Rund 500 Jahre', 'Rund 100 Jahre']],
              ['In welchem Jahrhundert reiste Marco Polo nach China?', 'Im 13. Jahrhundert', ['Im 10. Jahrhundert', 'Im 15. Jahrhundert', 'Im 17. Jahrhundert']],
            ],
          },
        },
        {
          id: 'renaissance',
          title: 'Die Renaissance in Florenz',
          date: '15.–16. Jahrhundert',
          text: [
            'Im 15. Jahrhundert wurde Florenz zur Wiege der Renaissance, der „Wiedergeburt“ der Antike in Kunst und Wissenschaft. Die Bankiersfamilie Medici beherrschte die Stadt und förderte Künstler; besonders Lorenzo de’ Medici, „il Magnifico“, wurde zum großen Mäzen. Filippo Brunelleschi vollendete 1436 die gewaltige Kuppel des Doms.',
            'Künstler wie Leonardo da Vinci, Michelangelo und Raffael schufen Meisterwerke, die bis heute Millionen Besucher anziehen. Der Diplomat Niccolò Machiavelli schrieb mit „Der Fürst“ ein berühmtes Buch über die Macht. Von Italien aus verbreitete sich die Renaissance über ganz Europa. Ab 1494 wurde das zersplitterte Land aber zum Schauplatz der Kriege zwischen Frankreich und Spanien.',
          ],
          quiz: {
            leicht: [
              ['In welcher Stadt begann die Renaissance?', 'Florenz', ['Rom', 'Venedig', 'Paris']],
              ['Welche Familie förderte dort die Künstler?', 'Die Medici', ['Die Borgia', 'Die Habsburger', 'Die Fugger']],
              ['Was bedeutet „Renaissance“?', 'Wiedergeburt', ['Neuzeit', 'Aufklärung', 'Fortschritt']],
            ],
            mittel: [
              ['Welcher Medici wurde „il Magnifico“ genannt?', 'Lorenzo', ['Cosimo', 'Giovanni', 'Piero']],
              ['Wer baute die Kuppel des Florentiner Doms?', 'Filippo Brunelleschi', ['Michelangelo', 'Leonardo da Vinci', 'Donatello']],
              ['Wer schrieb „Der Fürst“?', 'Niccolò Machiavelli', ['Dante Alighieri', 'Francesco Petrarca', 'Galileo Galilei']],
            ],
            schwer: [
              ['Wann wurde die Domkuppel vollendet?', '1436', ['1296', '1504', '1600']],
              ['Ab wann war Italien Schauplatz der Kriege zwischen Frankreich und Spanien?', 'Ab 1494', ['Ab 1348', 'Ab 1600', 'Ab 1796']],
              ['Welcher dieser Renaissance-Künstler stammte nicht aus Italien?', 'Albrecht Dürer', ['Raffael', 'Michelangelo', 'Leonardo da Vinci']],
            ],
          },
        },
      ],
    },
    {
      id: 'einigung',
      name: 'Einigung und Faschismus',
      period: '1848–1945',
      events: [
        {
          id: 'risorgimento',
          title: 'Risorgimento: Die Einigung Italiens',
          date: '1848–1871',
          text: [
            'Nach Napoleon war Italien wieder in viele Staaten geteilt; Österreich beherrschte die Lombardei und Venetien. Die Bewegung des Risorgimento („Wiedererstehung“) kämpfte für einen gemeinsamen Nationalstaat. Treibende Kräfte waren der Revolutionär Giuseppe Mazzini, Graf Camillo Cavour, der geschickte Ministerpräsident des Königreichs Sardinien-Piemont, und der Freischärler Giuseppe Garibaldi.',
            '1860 eroberte Garibaldi mit seinem „Zug der Tausend“ Sizilien und Neapel. 1861 wurde Viktor Emanuel II. von Sardinien-Piemont zum König von Italien ausgerufen. 1866 kam Venetien hinzu, und 1870 nahmen italienische Truppen Rom ein, das 1871 Hauptstadt wurde. Der Papst zog sich in den Vatikan zurück; erst 1929 einigten sich Staat und Kirche in den Lateranverträgen.',
          ],
          quiz: {
            leicht: [
              ['Welcher Freiheitskämpfer eroberte 1860 Sizilien?', 'Giuseppe Garibaldi', ['Benito Mussolini', 'Napoleon', 'Marco Polo']],
              ['In welchem Jahr wurde das Königreich Italien ausgerufen?', '1861', ['1815', '1922', '1946']],
              ['Welche Stadt wurde 1871 Hauptstadt Italiens?', 'Rom', ['Neapel', 'Venedig', 'Mailand']],
            ],
            mittel: [
              ['Wie heißt die italienische Einigungsbewegung?', 'Risorgimento', ['Rinascimento', 'Resistenza', 'Riforma']],
              ['Wer wurde erster König von Italien?', 'Viktor Emanuel II.', ['Umberto I.', 'Karl Albert', 'Ferdinand II.']],
              ['Welches Land beherrschte vorher die Lombardei und Venetien?', 'Österreich', ['Frankreich', 'Spanien', 'Preußen']],
            ],
            schwer: [
              ['Wie hieß Garibaldis Feldzug von 1860?', 'Zug der Tausend', ['Marsch auf Rom', 'Hundert Tage', 'Langer Marsch']],
              ['Welcher Ministerpräsident trieb die Einigung diplomatisch voran?', 'Camillo Cavour', ['Giuseppe Mazzini', 'Francesco Crispi', 'Giovanni Giolitti']],
              ['Mit welchen Verträgen einigten sich Staat und Kirche 1929?', 'Lateranverträge', ['Römische Verträge', 'Wormser Konkordat', 'Verträge von Locarno']],
            ],
          },
        },
        {
          id: 'faschismus',
          title: 'Mussolini und der Faschismus',
          date: '1922–1945',
          text: [
            'Nach dem Ersten Weltkrieg herrschten Unzufriedenheit und Unruhen. Benito Mussolini gründete die faschistische Bewegung; nach dem „Marsch auf Rom“ im Oktober 1922 ernannte ihn König Viktor Emanuel III. zum Ministerpräsidenten. Mussolini, „Duce“ (Führer) genannt, errichtete bis 1926 eine Diktatur, verbot andere Parteien und ließ Gegner verfolgen. 1935/36 eroberte Italien in einem brutalen Kolonialkrieg Äthiopien.',
            '1936 verbündete sich Mussolini mit Hitler („Achse Berlin–Rom“), 1940 trat Italien in den Zweiten Weltkrieg ein. Nach der Landung der Alliierten auf Sizilien wurde Mussolini im Juli 1943 gestürzt. Deutsche Truppen besetzten daraufhin Nord- und Mittelitalien, wo die Widerstandsbewegung, die Resistenza, kämpfte. Im April 1945 wurde Mussolini von Partisanen erschossen.',
          ],
          quiz: {
            leicht: [
              ['Wer errichtete in Italien eine faschistische Diktatur?', 'Benito Mussolini', ['Giuseppe Garibaldi', 'Silvio Berlusconi', 'Viktor Emanuel II.']],
              ['Welchen Titel trug Mussolini?', 'Duce', ['Kaiser', 'Doge', 'Kanzler']],
              ['Mit welchem Diktator verbündete er sich?', 'Adolf Hitler', ['Winston Churchill', 'Napoleon', 'Charles de Gaulle']],
            ],
            mittel: [
              ['Wie heißt Mussolinis Machtübernahme 1922?', 'Marsch auf Rom', ['Zug der Tausend', 'Gang nach Canossa', 'Sturm auf die Bastille']],
              ['Welches afrikanische Land eroberte Italien 1935/36?', 'Äthiopien', ['Ägypten', 'Marokko', 'Kenia']],
              ['In welchem Jahr wurde Mussolini gestürzt?', '1943', ['1940', '1945', '1936']],
            ],
            schwer: [
              ['Wie hieß das Bündnis Italiens mit Deutschland ab 1936?', 'Achse Berlin–Rom', ['Dreibund', 'Entente', 'Warschauer Pakt']],
              ['Wie nennt man den italienischen Widerstand?', 'Resistenza', ['Risorgimento', 'Rinascimento', 'Fronde']],
              ['Welcher König ernannte Mussolini 1922?', 'Viktor Emanuel III.', ['Viktor Emanuel II.', 'Umberto I.', 'Umberto II.']],
            ],
          },
        },
      ],
    },
    {
      id: 'republik',
      name: 'Die Republik',
      period: 'seit 1946',
      events: [
        {
          id: 'republik-1946',
          title: 'Die Italienische Republik',
          date: 'seit 1946',
          text: [
            'In einer Volksabstimmung am 2. Juni 1946 entschieden sich die Italiener mit rund 54 Prozent für die Republik und gegen die Monarchie; der Tag ist heute Nationalfeiertag. 1948 trat die neue Verfassung in Kraft. 1957 war Italien Gründungsmitglied der Europäischen Wirtschaftsgemeinschaft – die Römischen Verträge wurden in seiner Hauptstadt unterzeichnet – und erlebte in den 1950er und 1960er Jahren ein „Wirtschaftswunder“.',
            'Die Republik hatte jedoch mit häufig wechselnden Regierungen, Terror in den „bleiernen Jahren“ der 1970er und mit der organisierten Kriminalität zu kämpfen. 1992 ermordete die Mafia die Richter Giovanni Falcone und Paolo Borsellino, was eine breite Bewegung gegen die Mafia auslöste. 2002 führte Italien das Euro-Bargeld ein.',
          ],
          quiz: {
            leicht: [
              ['Wofür stimmten die Italiener 1946?', 'Für die Republik', ['Für die Monarchie', 'Für den Faschismus', 'Für die Teilung des Landes']],
              ['In welcher Stadt wurden 1957 die Verträge zur EWG unterzeichnet?', 'In Rom', ['In Paris', 'In Brüssel', 'In Maastricht']],
              ['Gegen welche kriminelle Organisation kämpften Falcone und Borsellino?', 'Die Mafia', ['Die Yakuza', 'Die Hells Angels', 'Die Triaden']],
            ],
            mittel: [
              ['An welchem Tag ist der italienische Nationalfeiertag?', '2. Juni', ['14. Juli', '3. Oktober', '4. Juli']],
              ['Wann trat die neue Verfassung in Kraft?', '1948', ['1946', '1957', '1961']],
              ['Wie nennt man die von Terror geprägten 1970er in Italien?', 'Die bleiernen Jahre', ['Die goldenen Jahre', 'Die wilden Jahre', 'Die stillen Jahre']],
            ],
            schwer: [
              ['In welchem Jahr wurden Falcone und Borsellino ermordet?', '1992', ['1978', '1985', '2001']],
              ['Seit wann zahlt man in Italien mit Euro-Bargeld?', '2002', ['1999', '1992', '2008']],
              ['Wie knapp fiel das Referendum von 1946 aus?', 'Rund 54 zu 46 Prozent', ['Rund 90 zu 10 Prozent', 'Rund 70 zu 30 Prozent', 'Genau 50 zu 50 Prozent']],
            ],
          },
        },
      ],
    },
  ],
};
