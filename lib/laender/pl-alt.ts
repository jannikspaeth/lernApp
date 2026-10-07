import type { CountryHistory } from './types';

export const PL_ALT: CountryHistory = {
  code: 'PL',
  epochs: [
    {
      id: 'mittelalter',
      name: 'Piasten und Jagiellonen',
      period: '966–1569',
      events: [
        {
          id: 'mieszko',
          title: 'Die Taufe Mieszkos und die Piasten',
          date: '966–1370',
          text: [
            'Als Geburtsjahr Polens gilt 966: In diesem Jahr ließ sich Fürst Mieszko I. aus dem Geschlecht der Piasten taufen und führte sein Land damit in die Welt des lateinischen Christentums. Im Jahr 1000 wurde in Gnesen (Gniezno) ein eigenes Erzbistum gegründet; 1025 ließ sich Mieszkos Sohn Bolesław der Tapfere zum König krönen.',
            'Später zerfiel das Reich in Teilfürstentümer; im 13. Jahrhundert verwüsteten Mongolen Teile des Landes, und deutsche Siedler wurden ins Land geholt. Unter Kasimir dem Großen (1333–1370), dem letzten Piastenkönig, erlebte Polen eine Blüte; 1364 gründete er in Krakau eine der ältesten Universitäten Mitteleuropas. Über ihn heißt es, er habe ein hölzernes Polen vorgefunden und ein steinernes hinterlassen.',
          ],
          quiz: {
            leicht: [
              ['Welches Jahr gilt als Geburtsjahr Polens?', '966', ['1000', '1410', '1918']],
              ['Welcher Fürst ließ sich 966 taufen?', 'Mieszko I.', ['Bolesław I.', 'Kasimir der Große', 'Jan Sobieski']],
              ['In welcher Stadt gründete Kasimir der Große eine Universität?', 'Krakau', ['Warschau', 'Danzig', 'Breslau']],
            ],
            mittel: [
              ['Wie heißt das erste polnische Herrschergeschlecht?', 'Die Piasten', ['Die Jagiellonen', 'Die Habsburger', 'Die Romanows']],
              ['Wer wurde 1025 erster König Polens?', 'Bolesław der Tapfere', ['Mieszko I.', 'Kasimir der Große', 'Władysław Jagiełło']],
              ['Was sagt man über Kasimir den Großen?', 'Er fand ein hölzernes Polen vor und hinterließ ein steinernes', ['Er war der erste Kaiser Polens', 'Er besiegte die Osmanen vor Wien', 'Er gründete Warschau']],
            ],
            schwer: [
              ['Wo wurde im Jahr 1000 ein Erzbistum gegründet?', 'In Gnesen', ['In Krakau', 'In Posen', 'In Breslau']],
              ['Wann wurde die Krakauer Universität gegründet?', '1364', ['966', '1410', '1569']],
              ['Wer verwüstete im 13. Jahrhundert Teile Polens?', 'Die Mongolen', ['Die Wikinger', 'Die Osmanen', 'Die Hunnen']],
            ],
          },
        },
        {
          id: 'grunwald',
          title: 'Union mit Litauen und Schlacht bei Tannenberg',
          date: '1385–1569',
          text: [
            '1385 schlossen Polen und das Großfürstentum Litauen die Union von Krewo: Der litauische Großfürst Jogaila ließ sich taufen, heiratete die junge polnische Königin Jadwiga und wurde als Władysław II. Jagiełło König von Polen. Seine Familie, die Jagiellonen, regierte bald eines der größten Reiche Europas.',
            '1410 besiegten Polen und Litauer den Deutschen Orden in der Schlacht bei Tannenberg – polnisch Grunwald –, einer der größten Schlachten des Mittelalters. 1569 wurden Polen und Litauen in der Union von Lublin zu einer gemeinsamen Adelsrepublik vereinigt, der Rzeczpospolita. In dieser Zeit lebte auch der Astronom Nikolaus Kopernikus, der lehrte, dass sich die Erde um die Sonne dreht.',
          ],
          quiz: {
            leicht: [
              ['Mit welchem Land schloss Polen 1385 eine Union?', 'Litauen', ['Russland', 'Ungarn', 'Schweden']],
              ['Gegen wen kämpften Polen und Litauer 1410?', 'Gegen den Deutschen Orden', ['Gegen die Osmanen', 'Gegen die Mongolen', 'Gegen Schweden']],
              ['Welcher berühmte Astronom lebte in Polen?', 'Nikolaus Kopernikus', ['Galileo Galilei', 'Johannes Kepler', 'Isaac Newton']],
            ],
            mittel: [
              ['Wie heißt die Schlacht von 1410 auf Polnisch?', 'Grunwald', ['Westerplatte', 'Wawel', 'Kraków']],
              ['Welche Königin heiratete Jogaila?', 'Jadwiga', ['Maria Theresia', 'Katharina', 'Bona Sforza']],
              ['Wie heißt das Herrschergeschlecht Jogailas?', 'Die Jagiellonen', ['Die Piasten', 'Die Wasa', 'Die Romanows']],
            ],
            schwer: [
              ['Wie heißt der Vereinigungsvertrag von 1569?', 'Union von Lublin', ['Union von Krewo', 'Thorner Frieden', 'Kalmarer Union']],
              ['Wie nennt man die polnisch-litauische Adelsrepublik?', 'Rzeczpospolita', ['Sejm', 'Szlachta', 'Kresy']],
              ['Wie hieß der Unionsvertrag von 1385?', 'Union von Krewo', ['Union von Lublin', 'Union von Brest', 'Union von Horodło']],
            ],
          },
        },
      ],
    },
    {
      id: 'teilungen',
      name: 'Teilungen und Fremdherrschaft',
      period: '1772–1918',
      events: [
        {
          id: 'teilungen',
          title: 'Die Verfassung vom 3. Mai und die Teilungen',
          date: '1772–1795',
          text: [
            'Im 17. und 18. Jahrhundert schwächten Kriege und die Macht des Adels den Staat; im Parlament, dem Sejm, konnte jeder einzelne Abgeordnete mit seinem Veto Beschlüsse blockieren – das „Liberum Veto“. Russland, Preußen und Österreich nutzten das aus und rissen 1772 in der Ersten Teilung große Gebiete an sich.',
            'Als Antwort beschloss Polen am 3. Mai 1791 eine moderne Verfassung – die erste geschriebene Verfassung Europas, nur wenige Jahre nach der amerikanischen. Doch die Nachbarn griffen ein: Nach der Zweiten Teilung 1793 und dem gescheiterten Aufstand unter Tadeusz Kościuszko teilten sie 1795 den Rest des Landes unter sich auf. Für 123 Jahre verschwand Polen von der Landkarte.',
          ],
          quiz: {
            leicht: [
              ['Wie oft wurde Polen im 18. Jahrhundert geteilt?', 'Dreimal', ['Einmal', 'Zweimal', 'Fünfmal']],
              ['Welche Länder teilten Polen unter sich auf?', 'Russland, Preußen und Österreich', ['Frankreich, Spanien und England', 'Schweden, Dänemark und Norwegen', 'Ungarn, Böhmen und Bayern']],
              ['Wie lange verschwand Polen von der Landkarte?', '123 Jahre', ['23 Jahre', '50 Jahre', '300 Jahre']],
            ],
            mittel: [
              ['Wann beschloss Polen seine moderne Verfassung?', '3. Mai 1791', ['11. November 1918', '1. September 1939', '4. Juli 1776']],
              ['Wer führte 1794 einen Aufstand gegen die Teilungsmächte?', 'Tadeusz Kościuszko', ['Józef Piłsudski', 'Lech Wałęsa', 'Jan Sobieski']],
              ['Wann fand die Erste Teilung statt?', '1772', ['1795', '1791', '1815']],
            ],
            schwer: [
              ['Wie hieß das Recht eines einzelnen Abgeordneten, Beschlüsse zu blockieren?', 'Liberum Veto', ['Habeas Corpus', 'Pacta conventa', 'Ius gladii']],
              ['Was war das Besondere an der Verfassung von 1791 in Europa?', 'Sie war die erste geschriebene Verfassung Europas', ['Sie war die älteste der Welt', 'Sie schaffte den Adel ab', 'Sie führte das Frauenwahlrecht ein']],
              ['In welchem Jahr fand die dritte Teilung statt?', '1795', ['1772', '1793', '1815']],
            ],
          },
        },
        {
          id: 'unabhaengigkeit',
          title: 'Die Wiedergeburt Polens',
          date: '1918–1921',
          text: [
            'Im 19. Jahrhundert erhoben sich die Polen mehrfach gegen die Teilungsmächte, vor allem 1830/31 und 1863/64 gegen Russland – vergeblich. Die polnische Kultur lebte dennoch weiter, etwa in der Musik Frédéric Chopins; die Physikerin Marie Curie, geboren als Maria Skłodowska in Warschau, wurde in Paris weltberühmt.',
            'Nach dem Zusammenbruch der Teilungsmächte im Ersten Weltkrieg erklärte Polen am 11. November 1918 seine Unabhängigkeit; Józef Piłsudski übernahm die Führung. Im Polnisch-Sowjetischen Krieg schlug die polnische Armee die Rote Armee im August 1920 vor Warschau zurück – das „Wunder an der Weichsel“. Der Versailler Vertrag gab Polen einen Zugang zur Ostsee; Danzig wurde Freie Stadt.',
          ],
          quiz: {
            leicht: [
              ['An welchem Tag wurde Polen 1918 unabhängig?', '11. November 1918', ['3. Mai 1918', '1. September 1918', '9. November 1918']],
              ['Welcher Komponist ist ein Symbol polnischer Kultur?', 'Frédéric Chopin', ['Mozart', 'Bach', 'Tschaikowsky']],
              ['Welche berühmte Forscherin stammte aus Warschau?', 'Marie Curie', ['Lise Meitner', 'Rosalind Franklin', 'Ada Lovelace']],
            ],
            mittel: [
              ['Wer führte den neuen polnischen Staat?', 'Józef Piłsudski', ['Lech Wałęsa', 'Tadeusz Kościuszko', 'Wojciech Jaruzelski']],
              ['Wie nennt man den Sieg über die Rote Armee 1920?', 'Wunder an der Weichsel', ['Wunder von Bern', 'Wunder von Danzig', 'Schlacht bei Tannenberg']],
              ['Welche Stadt wurde 1920 Freie Stadt?', 'Danzig', ['Posen', 'Breslau', 'Lodz']],
            ],
            schwer: [
              ['Gegen welches Land richteten sich die Aufstände von 1830 und 1863?', 'Russland', ['Preußen', 'Österreich', 'Frankreich']],
              ['Wie lautete Marie Curies Geburtsname?', 'Maria Skłodowska', ['Maria Kowalska', 'Maria Chopin', 'Maria Wałęsa']],
              ['Wann fand das „Wunder an der Weichsel“ statt?', 'Im August 1920', ['Im November 1918', 'Im Mai 1926', 'Im September 1939']],
            ],
          },
        },
      ],
    },
    {
      id: 'jh20',
      name: 'Krieg, Diktatur und Freiheit',
      period: 'seit 1939',
      events: [
        {
          id: 'zweiter-weltkrieg',
          title: 'Polen im Zweiten Weltkrieg',
          date: '1939–1945',
          text: [
            'Am 1. September 1939 überfiel Deutschland Polen; der Krieg begann mit Schüssen auf die Westerplatte bei Danzig. Am 17. September marschierte nach dem Hitler-Stalin-Pakt auch die Sowjetunion ein. Beide Besatzer gingen mit äußerster Brutalität vor: Die Deutschen ermordeten Hunderttausende Angehörige der polnischen Elite, der sowjetische Geheimdienst erschoss 1940 bei Katyn und an anderen Orten rund 22.000 polnische Offiziere und Beamte.',
            'Im besetzten Polen errichtete Deutschland Vernichtungslager wie Auschwitz-Birkenau, Treblinka und Sobibór; rund drei Millionen polnische Juden wurden ermordet. 1943 erhoben sich die Juden im Warschauer Ghetto, 1944 kämpfte die polnische Heimatarmee im Warschauer Aufstand zwei Monate lang – danach wurde die Stadt fast vollständig zerstört. Insgesamt kamen etwa sechs Millionen polnische Staatsbürger ums Leben.',
          ],
          quiz: {
            leicht: [
              ['Wann überfiel Deutschland Polen?', '1. September 1939', ['1. September 1914', '22. Juni 1941', '8. Mai 1945']],
              ['Welches Vernichtungslager lag im besetzten Polen?', 'Auschwitz-Birkenau', ['Dachau', 'Buchenwald', 'Bergen-Belsen']],
              ['Welches Land marschierte am 17. September 1939 ebenfalls ein?', 'Die Sowjetunion', ['Frankreich', 'Ungarn', 'Italien']],
            ],
            mittel: [
              ['Wo fielen die ersten Schüsse des Krieges?', 'Auf der Westerplatte', ['In Warschau', 'In Krakau', 'In Posen']],
              ['Was geschah 1943 im Warschauer Ghetto?', 'Ein jüdischer Aufstand', ['Die Befreiung durch die Alliierten', 'Ein Friedensschluss', 'Eine Volksabstimmung']],
              ['Wie viele polnische Juden wurden ermordet?', 'Rund drei Millionen', ['Rund 30.000', 'Rund 300.000', 'Rund 10 Millionen']],
            ],
            schwer: [
              ['Wo erschoss der sowjetische Geheimdienst 1940 polnische Offiziere?', 'Bei Katyn', ['Bei Treblinka', 'Bei Danzig', 'Bei Lublin']],
              ['Wie lange dauerte der Warschauer Aufstand 1944?', 'Rund zwei Monate', ['Zwei Tage', 'Zwei Wochen', 'Ein Jahr']],
              ['Welcher Pakt bereitete die Teilung Polens 1939 vor?', 'Der Hitler-Stalin-Pakt', ['Der Antikominternpakt', 'Das Münchner Abkommen', 'Der Warschauer Pakt']],
            ],
          },
        },
        {
          id: 'solidarnosc',
          title: 'Solidarność und die Wende',
          date: '1978–2004',
          text: [
            'Nach 1945 wurde Polen nach Westen verschoben und eine kommunistische Volksrepublik unter sowjetischem Einfluss. 1978 wurde der Krakauer Erzbischof Karol Wojtyła als Johannes Paul II. Papst; seine Besuche in der Heimat stärkten den Widerstand. 1980 streikten die Arbeiter der Danziger Werft und erzwangen die Gründung der freien Gewerkschaft Solidarność unter Lech Wałęsa – sie hatte bald rund zehn Millionen Mitglieder.',
            'General Wojciech Jaruzelski verhängte im Dezember 1981 das Kriegsrecht und verbot die Gewerkschaft. Doch 1989 verhandelte die Regierung mit der Opposition am Runden Tisch; bei teilweise freien Wahlen im Juni siegte Solidarność überwältigend, und Polen wurde zum Vorreiter der Wende im Ostblock. Wałęsa wurde 1990 Präsident; 1999 trat Polen der NATO und 2004 der EU bei.',
          ],
          quiz: {
            leicht: [
              ['Wie hieß die freie Gewerkschaft in Polen?', 'Solidarność', ['Sejm', 'Glasnost', 'Perestroika']],
              ['Wer führte die Gewerkschaft an?', 'Lech Wałęsa', ['Józef Piłsudski', 'Wojciech Jaruzelski', 'Donald Tusk']],
              ['Welcher Pole wurde 1978 Papst?', 'Johannes Paul II.', ['Benedikt XVI.', 'Franziskus', 'Pius XII.']],
            ],
            mittel: [
              ['In welcher Stadt begannen 1980 die großen Streiks?', 'Danzig', ['Warschau', 'Krakau', 'Posen']],
              ['Wo verhandelten Regierung und Opposition 1989?', 'Am Runden Tisch', ['In der Paulskirche', 'Im Kreml', 'In Genf']],
              ['Wann trat Polen der EU bei?', '2004', ['1989', '1999', '2010']],
            ],
            schwer: [
              ['Wer verhängte 1981 das Kriegsrecht?', 'Wojciech Jaruzelski', ['Lech Wałęsa', 'Leonid Breschnew', 'Edward Gierek']],
              ['Wie viele Mitglieder hatte Solidarność bald?', 'Rund zehn Millionen', ['Rund 10.000', 'Rund 100.000', 'Rund 50 Millionen']],
              ['Wie hieß Papst Johannes Paul II. mit bürgerlichem Namen?', 'Karol Wojtyła', ['Joseph Ratzinger', 'Jorge Bergoglio', 'Stefan Wyszyński']],
            ],
          },
        },
      ],
    },
  ],
};
