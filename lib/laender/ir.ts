import type { CountryHistory } from './types';

export const IR: CountryHistory = {
  code: 'IR',
  epochs: [
    {
      id: 'persien',
      name: 'Das alte Persien',
      period: '550 v. Chr. – 1722',
      events: [
        {
          id: 'perserreich',
          title: 'Das Perserreich',
          date: '550–330 v. Chr.',
          text: [
            'Um 550 v. Chr. gründete Kyros II., der Große, aus dem Geschlecht der Achämeniden das Perserreich, das größte Reich seiner Zeit. 539 v. Chr. eroberte er Babylon und erlaubte den dorthin verschleppten Juden die Rückkehr nach Jerusalem. Der Kyros-Zylinder, eine beschriftete Tonwalze, wird manchmal als frühe Erklärung von Rechten gedeutet.',
            'Unter Dareios I. reichte das Reich von Ägypten und Kleinasien bis an den Indus. Es war in Provinzen, die Satrapien, gegliedert und durch die „Königsstraße“ verbunden; in Persepolis entstand ein prachtvoller Palast. Nach den Niederlagen in den Perserkriegen gegen die Griechen eroberte Alexander der Große 330 v. Chr. das Reich und ließ Persepolis niederbrennen.',
          ],
          quiz: {
            leicht: [
              ['Wer gründete das Perserreich?', 'Kyros der Große', ['Dareios I.', 'Alexander der Große', 'Xerxes']],
              ['Wer eroberte das Perserreich 330 v. Chr.?', 'Alexander der Große', ['Julius Caesar', 'Hannibal', 'Dschingis Khan']],
              ['Welche Stadt war ein prachtvoller Palastsitz?', 'Persepolis', ['Babylon', 'Teheran', 'Isfahan']],
            ],
            mittel: [
              ['Welche Stadt eroberte Kyros 539 v. Chr.?', 'Babylon', ['Athen', 'Jerusalem', 'Memphis']],
              ['Wem erlaubte Kyros die Rückkehr nach Jerusalem?', 'Den Juden', ['Den Griechen', 'Den Ägyptern', 'Den Römern']],
              ['Wie hießen die Provinzen des Reiches?', 'Satrapien', ['Kantone', 'Präfekturen', 'Gaue']],
            ],
            schwer: [
              ['Aus welchem Herrschergeschlecht stammte Kyros?', 'Aus dem der Achämeniden', ['Aus dem der Sassaniden', 'Aus dem der Safawiden', 'Aus dem der Pahlavi']],
              ['Welche Fernstraße durchzog das Reich?', 'Die Königsstraße', ['Die Seidenstraße', 'Die Via Appia', 'Die Bernsteinstraße']],
              ['Wie heißt die Tonwalze mit Kyros’ Erklärung?', 'Kyros-Zylinder', ['Stein von Rosette', 'Codex Hammurabi', 'Behistun-Inschrift']],
            ],
          },
        },
        {
          id: 'safawiden',
          title: 'Sassaniden, Islam und Safawiden',
          date: '224–1722',
          text: [
            'Ab 224 n. Chr. herrschten die Sassaniden, die den Zoroastrismus förderten und jahrhundertelang mit Rom und Byzanz rangen. Im 7. Jahrhundert eroberten arabische Muslime das Reich; der Islam setzte sich durch, doch die persische Sprache und Kultur blieben erhalten. Um 1010 vollendete der Dichter Ferdowsi das „Schahname“ (Buch der Könige), ein Nationalepos mit rund 50.000 Doppelversen.',
            '1501 machten die Safawiden den schiitischen Islam zur Staatsreligion – bis heute ist Iran das Zentrum des Schiismus. Unter Schah Abbas I. (1588–1629) wurde Isfahan prachtvoll ausgebaut; man sagte, Isfahan sei „die Hälfte der Welt“. Dichter wie Rumi und Hafis prägten die persische Literatur; Goethe schrieb, inspiriert von Hafis, den „West-östlichen Divan“.',
          ],
          quiz: {
            leicht: [
              ['Welche Glaubensrichtung des Islam ist in Iran Staatsreligion?', 'Der schiitische Islam', ['Der sunnitische Islam', 'Der Sufismus', 'Der Ibadismus']],
              ['Wie heißt das persische Nationalepos?', 'Schahname', ['Koran', 'Mahabharata', 'Gilgamesch-Epos']],
              ['Welche Stadt nannte man „die Hälfte der Welt“?', 'Isfahan', ['Teheran', 'Bagdad', 'Samarkand']],
            ],
            mittel: [
              ['Welche Religion förderten die Sassaniden?', 'Den Zoroastrismus', ['Den Buddhismus', 'Das Christentum', 'Den Islam']],
              ['Wer schrieb das Schahname?', 'Ferdowsi', ['Hafis', 'Rumi', 'Omar Chayyam']],
              ['Welche Dynastie machte 1501 den Schiismus zur Staatsreligion?', 'Die Safawiden', ['Die Sassaniden', 'Die Pahlavi', 'Die Achämeniden']],
            ],
            schwer: [
              ['Welches Werk Goethes ist von Hafis inspiriert?', 'Der „West-östliche Divan“', ['„Faust“', '„Die Leiden des jungen Werthers“', '„Iphigenie auf Tauris“']],
              ['Unter welchem Schah blühte Isfahan?', 'Unter Abbas I.', ['Unter Reza Schah', 'Unter Nader Schah', 'Unter Ismail I.']],
              ['Wer eroberte im 7. Jahrhundert das Sassanidenreich?', 'Arabische Muslime', ['Die Mongolen', 'Die Türken', 'Die Byzantiner']],
            ],
          },
        },
      ],
    },
    {
      id: 'moderne',
      name: 'Schahs und Islamische Republik',
      period: 'seit 1906',
      events: [
        {
          id: 'schah',
          title: 'Schahs, Öl und der Putsch von 1953',
          date: '1906–1978',
          text: [
            'In der Konstitutionellen Revolution 1906 erhielt Persien eine Verfassung und ein Parlament. 1925 machte sich der Offizier Reza Khan als Reza Schah Pahlavi zum Herrscher und modernisierte das Land autoritär; 1935 bat er das Ausland, das Land nicht mehr Persien, sondern Iran zu nennen. Die Ölindustrie kontrollierte jedoch eine britische Gesellschaft.',
            '1951 verstaatlichte der gewählte Premierminister Mohammad Mossadegh die Ölindustrie. 1953 stürzte ihn ein von der CIA und dem britischen Geheimdienst unterstützter Putsch. Schah Mohammad Reza Pahlavi regierte danach mit amerikanischer Unterstützung; er trieb die Modernisierung voran („Weiße Revolution“), ließ Gegner aber von der Geheimpolizei SAVAK verfolgen.',
          ],
          quiz: {
            leicht: [
              ['Welcher Rohstoff spielte in Iran eine zentrale Rolle?', 'Öl', ['Gold', 'Kupfer', 'Kaffee']],
              ['Wie hieß Iran im Ausland bis 1935 meist?', 'Persien', ['Mesopotamien', 'Arabien', 'Anatolien']],
              ['Wer regierte Iran bis 1979?', 'Der Schah', ['Ein gewählter Präsident', 'Ein Ayatollah', 'Ein britischer Gouverneur']],
            ],
            mittel: [
              ['Welcher Premierminister verstaatlichte 1951 die Ölindustrie?', 'Mohammad Mossadegh', ['Ruhollah Khomeini', 'Reza Schah', 'Hassan Rohani']],
              ['Wer unterstützte den Putsch von 1953?', 'Die CIA und der britische Geheimdienst', ['Der KGB', 'Der Mossad', 'Die UNO']],
              ['Wie hieß die Geheimpolizei des Schahs?', 'SAVAK', ['Stasi', 'KGB', 'PIDE']],
            ],
            schwer: [
              ['Wann erhielt Persien eine Verfassung?', '1906', ['1925', '1953', '1979']],
              ['Wie hieß die Dynastie der letzten Schahs?', 'Pahlavi', ['Safawiden', 'Kadscharen', 'Sassaniden']],
              ['Wie hieß das Modernisierungsprogramm des Schahs?', 'Weiße Revolution', ['Grüne Revolution', 'Kulturrevolution', 'Rote Revolution']],
            ],
          },
        },
        {
          id: 'revolution',
          title: 'Die Islamische Revolution',
          date: '1978–1988',
          text: [
            '1978 wuchsen die Proteste gegen den Schah zu einer Massenbewegung. Im Januar 1979 verließ der Schah das Land; am 1. Februar kehrte der schiitische Geistliche Ayatollah Ruhollah Khomeini aus dem Exil in Frankreich zurück. Nach einer Volksabstimmung wurde die Islamische Republik ausgerufen, in der ein oberster Rechtsgelehrter die höchste Macht hat. Frauen mussten ein Kopftuch tragen, Oppositionelle wurden verfolgt.',
            'Im November 1979 besetzten Studenten die US-Botschaft in Teheran und hielten 52 Amerikaner 444 Tage lang als Geiseln. 1980 griff der Irak unter Saddam Hussein Iran an; der Iran-Irak-Krieg dauerte bis 1988 und forderte Hunderttausende Tote, auch durch irakische Giftgasangriffe.',
          ],
          quiz: {
            leicht: [
              ['Welcher Geistliche führte die Revolution von 1979 an?', 'Ayatollah Khomeini', ['Ali Chamenei', 'Mohammad Mossadegh', 'Reza Schah']],
              ['Welche Staatsform entstand 1979?', 'Eine Islamische Republik', ['Eine Monarchie', 'Eine Volksrepublik', 'Eine Militärjunta']],
              ['Welches Land griff Iran 1980 an?', 'Der Irak', ['Afghanistan', 'Saudi-Arabien', 'Israel']],
            ],
            mittel: [
              ['Aus welchem Land kehrte Khomeini 1979 zurück?', 'Aus Frankreich', ['Aus Deutschland', 'Aus Ägypten', 'Aus England']],
              ['Was besetzten Studenten im November 1979?', 'Die US-Botschaft', ['Das Parlament', 'Den Flughafen', 'Einen Ölhafen']],
              ['Bis wann dauerte der Iran-Irak-Krieg?', 'Bis 1988', ['Bis 1980', 'Bis 1991', 'Bis 2003']],
            ],
            schwer: [
              ['Wie lange wurden die amerikanischen Geiseln festgehalten?', '444 Tage', ['44 Tage', '4 Jahre', '100 Tage']],
              ['Wer führte den Irak in diesem Krieg?', 'Saddam Hussein', ['Hafiz al-Assad', 'Muammar al-Gaddafi', 'Gamal Abdel Nasser']],
              ['Wann verließ der Schah das Land?', 'Im Januar 1979', ['Im November 1978', 'Im Februar 1980', 'Im Juni 1953']],
            ],
          },
        },
        {
          id: 'gegenwart',
          title: 'Atomstreit und Protestbewegungen',
          date: 'seit 1989',
          text: [
            'Nach Khomeinis Tod 1989 wurde Ali Chamenei Oberster Führer. Das iranische Atomprogramm führte zu jahrelangem Streit mit dem Westen und harten Sanktionen. 2015 schloss Iran mit den fünf UN-Vetomächten und Deutschland ein Atomabkommen; 2018 kündigten die USA es einseitig auf.',
            'Immer wieder kam es zu Massenprotesten, etwa 2009 gegen eine mutmaßlich gefälschte Präsidentenwahl, die „Grüne Bewegung“. Im September 2022 starb die 22-jährige Jina Mahsa Amini im Gewahrsam der Sittenpolizei, die sie wegen eines angeblich falsch getragenen Kopftuchs festgenommen hatte. Unter dem Ruf „Frau, Leben, Freiheit“ protestierten landesweit vor allem junge Frauen; der Staat ging mit großer Härte dagegen vor.',
          ],
          quiz: {
            leicht: [
              ['Unter welchem Ruf protestierten 2022 viele Frauen?', '„Frau, Leben, Freiheit“', ['„Wir sind das Volk“', '„Brot und Rosen“', '„Ich habe einen Traum“']],
              ['Worüber stritt Iran jahrelang mit dem Westen?', 'Über sein Atomprogramm', ['Über Fußball', 'Über den Euro', 'Über eine Insel im Atlantik']],
              ['Wer ist seit 1989 Oberster Führer Irans?', 'Ali Chamenei', ['Ruhollah Khomeini', 'Hassan Rohani', 'Mahmud Ahmadinedschad']],
            ],
            mittel: [
              ['Wer starb 2022 im Gewahrsam der Sittenpolizei?', 'Jina Mahsa Amini', ['Malala Yousafzai', 'Narges Mohammadi', 'Shirin Ebadi']],
              ['Wie hieß die Protestbewegung von 2009?', 'Grüne Bewegung', ['Orange Revolution', 'Samtene Revolution', 'Zedernrevolution']],
              ['Welches Land kündigte 2018 das Atomabkommen auf?', 'Die USA', ['Deutschland', 'Frankreich', 'China']],
            ],
            schwer: [
              ['Wann wurde das Atomabkommen geschlossen?', '2015', ['2009', '2018', '2022']],
              ['Mit wem schloss Iran das Abkommen?', 'Mit den fünf UN-Vetomächten und Deutschland', ['Nur mit den USA', 'Mit der Arabischen Liga', 'Mit Israel']],
              ['Wie alt war Jina Mahsa Amini?', '22 Jahre', ['16 Jahre', '30 Jahre', '45 Jahre']],
            ],
          },
        },
      ],
    },
  ],
};
