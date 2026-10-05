import type { CountryHistory } from './types';

export const GR: CountryHistory = {
  code: 'GR',
  epochs: [
    {
      id: 'antike',
      name: 'Das antike Griechenland',
      period: '8.–1. Jahrhundert v. Chr.',
      events: [
        {
          id: 'athen',
          title: 'Demokratie im klassischen Athen',
          date: '508–404 v. Chr.',
          text: [
            'Im antiken Griechenland gab es keinen einheitlichen Staat, sondern Hunderte Stadtstaaten (Poleis) wie Athen, Sparta, Korinth und Theben. In Athen führte Kleisthenes um 508/507 v. Chr. Reformen ein, die als Beginn der Demokratie gelten: Die männlichen Bürger entschieden in der Volksversammlung selbst über die Politik – Frauen, Fremde und Sklaven waren jedoch ausgeschlossen.',
            'In den Perserkriegen wehrten die Griechen die Großmacht Persien ab: 490 v. Chr. siegten die Athener bei Marathon, 480 v. Chr. die griechische Flotte bei Salamis. Unter Perikles erlebte Athen danach seine Blüte; auf der Akropolis entstand der Parthenon, und Philosophen wie Sokrates wirkten in der Stadt. Im Peloponnesischen Krieg (431–404 v. Chr.) unterlag Athen schließlich Sparta.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt gilt als Wiege der Demokratie?', 'Athen', ['Sparta', 'Rom', 'Korinth']],
              ['Welcher Tempel steht auf der Akropolis?', 'Der Parthenon', ['Das Pantheon', 'Das Kolosseum', 'Der Tempel von Karnak']],
              ['Gegen welches Großreich kämpften die Griechen in den Perserkriegen?', 'Persien', ['Ägypten', 'Rom', 'China']],
            ],
            mittel: [
              ['Wo siegten die Athener 490 v. Chr.?', 'Bei Marathon', ['Bei Salamis', 'Bei den Thermopylen', 'Bei Issos']],
              ['Welcher Politiker prägte Athens Blütezeit?', 'Perikles', ['Leonidas', 'Alexander', 'Lykurg']],
              ['Wer war von der Volksversammlung ausgeschlossen?', 'Frauen, Fremde und Sklaven', ['Nur die Bauern', 'Alle unter 50 Jahren', 'Nur die Händler']],
            ],
            schwer: [
              ['Wer führte um 508/507 v. Chr. die demokratischen Reformen ein?', 'Kleisthenes', ['Perikles', 'Solon', 'Drakon']],
              ['Wie heißt ein griechischer Stadtstaat?', 'Polis', ['Agora', 'Akropolis', 'Demos']],
              ['Gegen wen verlor Athen den Peloponnesischen Krieg?', 'Gegen Sparta', ['Gegen Persien', 'Gegen Theben', 'Gegen Makedonien']],
            ],
          },
        },
        {
          id: 'alexander',
          title: 'Alexander der Große und der Hellenismus',
          date: '336–30 v. Chr.',
          text: [
            'Im 4. Jahrhundert v. Chr. unterwarf König Philipp II. von Makedonien die griechischen Stadtstaaten. Sein Sohn Alexander, den der Philosoph Aristoteles unterrichtet hatte, wurde 336 v. Chr. König. In nur rund elf Jahren eroberte er das Perserreich, Ägypten – wo er Alexandria gründete – und Gebiete bis nach Indien. 323 v. Chr. starb er mit 32 Jahren in Babylon.',
            'Sein Reich zerfiel unter seinen Generälen in mehrere Königreiche, doch griechische Sprache und Kultur verbreiteten sich im ganzen östlichen Mittelmeerraum und im Orient – die Epoche des Hellenismus. Alexandria mit seiner berühmten Bibliothek wurde zum Zentrum der Wissenschaft. Ab 146 v. Chr. kam Griechenland unter römische Herrschaft; mit dem Tod Kleopatras 30 v. Chr. endete das letzte hellenistische Königreich.',
          ],
          quiz: {
            leicht: [
              ['Welcher König eroberte ein Reich bis nach Indien?', 'Alexander der Große', ['Leonidas', 'Perikles', 'Xerxes']],
              ['Wer war Alexanders Lehrer?', 'Aristoteles', ['Sokrates', 'Platon', 'Homer']],
              ['Welche Stadt in Ägypten gründete Alexander?', 'Alexandria', ['Kairo', 'Luxor', 'Memphis']],
            ],
            mittel: [
              ['Aus welchem Königreich stammte Alexander?', 'Aus Makedonien', ['Aus Sparta', 'Aus Athen', 'Aus Persien']],
              ['Wie nennt man die Epoche nach Alexander?', 'Hellenismus', ['Klassik', 'Archaik', 'Byzanz']],
              ['Wo starb Alexander 323 v. Chr.?', 'In Babylon', ['In Athen', 'In Alexandria', 'In Pella']],
            ],
            schwer: [
              ['Wie alt wurde Alexander?', '32 Jahre', ['22 Jahre', '50 Jahre', '64 Jahre']],
              ['Wer war Alexanders Vater?', 'Philipp II.', ['Dareios III.', 'Leonidas', 'Perikles']],
              ['Ab wann kam Griechenland unter römische Herrschaft?', 'Ab 146 v. Chr.', ['Ab 323 v. Chr.', 'Ab 30 v. Chr.', 'Ab 476 n. Chr.']],
            ],
          },
        },
      ],
    },
    {
      id: 'byzanz',
      name: 'Byzanz und Osmanen',
      period: '330–1821',
      events: [
        {
          id: 'byzanz',
          title: 'Byzanz und die osmanische Herrschaft',
          date: '330–1821',
          text: [
            'Im Oströmischen Reich, nach seiner Hauptstadt auch Byzantinisches Reich genannt, wurde Griechisch zur Sprache von Staat und Kirche. 330 weihte Kaiser Konstantin die Stadt Byzanz als neue Hauptstadt Konstantinopel ein. Unter Justinian entstand im 6. Jahrhundert die Hagia Sophia. 1054 trennten sich orthodoxe und katholische Kirche im Morgenländischen Schisma.',
            '1204 eroberten und plünderten Kreuzfahrer Konstantinopel; 1453 fiel die geschwächte Stadt an die Osmanen unter Sultan Mehmed II. Fast 400 Jahre lang gehörte Griechenland zum Osmanischen Reich. Die orthodoxe Kirche bewahrte in dieser Zeit die griechische Sprache und Identität.',
          ],
          quiz: {
            leicht: [
              ['Wie hieß die Hauptstadt des Oströmischen Reiches?', 'Konstantinopel', ['Athen', 'Rom', 'Alexandria']],
              ['Welches Reich eroberte 1453 Konstantinopel?', 'Das Osmanische Reich', ['Das Römische Reich', 'Das Perserreich', 'Venedig']],
              ['Welche Sprache prägte das Byzantinische Reich?', 'Griechisch', ['Arabisch', 'Türkisch', 'Slawisch']],
            ],
            mittel: [
              ['Welche berühmte Kirche entstand unter Justinian?', 'Die Hagia Sophia', ['Der Petersdom', 'Notre-Dame', 'Der Kölner Dom']],
              ['Wann trennten sich orthodoxe und katholische Kirche?', '1054', ['330', '1453', '1517']],
              ['Wie lange gehörte Griechenland etwa zum Osmanischen Reich?', 'Fast 400 Jahre', ['40 Jahre', '100 Jahre', '1.000 Jahre']],
            ],
            schwer: [
              ['Wer eroberte Konstantinopel im Jahr 1204?', 'Kreuzfahrer', ['Die Osmanen', 'Die Mongolen', 'Die Araber']],
              ['Welcher Sultan eroberte Konstantinopel 1453?', 'Mehmed II.', ['Süleyman der Prächtige', 'Osman I.', 'Selim I.']],
              ['Wann weihte Konstantin die neue Hauptstadt ein?', '330', ['476', '395', '1054']],
            ],
          },
        },
      ],
    },
    {
      id: 'neuzeit',
      name: 'Das moderne Griechenland',
      period: 'seit 1821',
      events: [
        {
          id: 'unabhaengigkeit',
          title: 'Unabhängigkeit und Königreich',
          date: '1821–1913',
          text: [
            'Am 25. März 1821 – heute Nationalfeiertag – begann der griechische Unabhängigkeitskrieg gegen die Osmanen. In ganz Europa fand er Unterstützung; der englische Dichter Lord Byron starb 1824 in Missolonghi als freiwilliger Kämpfer. 1827 vernichtete eine britisch-französisch-russische Flotte die osmanisch-ägyptische Flotte in der Seeschlacht von Navarino.',
            '1830 wurde Griechenland unabhängig. Die Großmächte setzten 1832 den bayerischen Prinzen Otto als ersten König ein; Athen wurde 1834 Hauptstadt. 1896 fanden in Athen die ersten Olympischen Spiele der Neuzeit statt. In den Balkankriegen 1912/13 gewann Griechenland große Gebiete hinzu, darunter Thessaloniki und Kreta.',
          ],
          quiz: {
            leicht: [
              ['Gegen wen kämpften die Griechen ab 1821?', 'Gegen die Osmanen', ['Gegen die Römer', 'Gegen Napoleon', 'Gegen die Perser']],
              ['Wo fanden 1896 die ersten Olympischen Spiele der Neuzeit statt?', 'In Athen', ['In Paris', 'In London', 'In Olympia']],
              ['An welchem Tag begann der Unabhängigkeitskrieg?', '25. März 1821', ['14. Juli 1821', '1. Mai 1821', '3. Oktober 1821']],
            ],
            mittel: [
              ['Aus welchem Land kam Griechenlands erster König Otto?', 'Aus Bayern', ['Aus England', 'Aus Russland', 'Aus Spanien']],
              ['Welcher englische Dichter starb als Kämpfer für Griechenland?', 'Lord Byron', ['William Shakespeare', 'Charles Dickens', 'Oscar Wilde']],
              ['Welche Stadt wurde 1834 Hauptstadt?', 'Athen', ['Thessaloniki', 'Sparta', 'Korinth']],
            ],
            schwer: [
              ['Wie heißt die Seeschlacht von 1827?', 'Navarino', ['Salamis', 'Lepanto', 'Trafalgar']],
              ['Welche Gebiete gewann Griechenland in den Balkankriegen?', 'Thessaloniki und Kreta', ['Istanbul und Izmir', 'Zypern und Malta', 'Albanien und Bulgarien']],
              ['In welchem Jahr wurde Griechenland unabhängig?', '1830', ['1821', '1832', '1912']],
            ],
          },
        },
        {
          id: 'jh20',
          title: 'Besatzung, Bürgerkrieg und Militärjunta',
          date: '1940–1981',
          text: [
            '1940 wehrte Griechenland einen italienischen Angriff ab; der 28. Oktober, an dem Ministerpräsident Metaxas Mussolinis Ultimatum mit „Ochi“ („Nein“) beantwortet haben soll, ist Nationalfeiertag. 1941 besetzte jedoch die Wehrmacht das Land. Die Besatzung brachte eine schwere Hungersnot, Massaker an der Zivilbevölkerung und die Deportation und Ermordung der allermeisten griechischen Juden, etwa aus Thessaloniki.',
            'Nach dem Krieg kämpften Kommunisten und Regierungstruppen bis 1949 im Bürgerkrieg gegeneinander. 1967 putschte eine Gruppe von Offizieren; die Militärjunta, die „Obristen“, regierte bis 1974 diktatorisch. Nach ihrem Sturz entschieden sich die Griechen per Volksabstimmung gegen die Monarchie. 1981 trat Griechenland der Europäischen Gemeinschaft bei.',
          ],
          quiz: {
            leicht: [
              ['Welches Land besetzte Griechenland 1941?', 'Deutschland', ['Frankreich', 'Großbritannien', 'Türkei']],
              ['Wann trat Griechenland der Europäischen Gemeinschaft bei?', '1981', ['1957', '1995', '2004']],
              ['Wie nennt man die Offiziersdiktatur 1967–1974?', 'Militärjunta', ['Monarchie', 'Kommune', 'Volksfront']],
            ],
            mittel: [
              ['Was bedeutet das berühmte „Ochi“ von 1940?', 'Nein', ['Ja', 'Freiheit', 'Krieg']],
              ['Bis wann dauerte der griechische Bürgerkrieg?', 'Bis 1949', ['Bis 1945', 'Bis 1967', 'Bis 1974']],
              ['Wogegen entschieden sich die Griechen 1974 per Volksabstimmung?', 'Gegen die Monarchie', ['Gegen die EU', 'Gegen die NATO', 'Gegen den Euro']],
            ],
            schwer: [
              ['An welchem Tag wird an das „Ochi“ erinnert?', '28. Oktober', ['25. März', '17. November', '1. Mai']],
              ['In welchem Jahr putschten die Obristen?', '1967', ['1949', '1974', '1981']],
              ['Aus welcher Stadt wurde ein Großteil der griechischen Juden deportiert?', 'Thessaloniki', ['Athen', 'Patras', 'Heraklion']],
            ],
          },
        },
        {
          id: 'schuldenkrise',
          title: 'Euro und Schuldenkrise',
          date: '2001–2018',
          text: [
            '2001 trat Griechenland der Eurozone bei, 2004 richtete Athen erneut Olympische Spiele aus. Ende 2009 wurde bekannt, dass Staatsverschuldung und Haushaltsdefizit viel höher waren als gemeldet. Dem Land drohte die Zahlungsunfähigkeit; 2010 erhielt es als erstes Euroland ein Hilfspaket von EU und Internationalem Währungsfonds, zwei weitere folgten.',
            'Im Gegenzug musste Griechenland harte Sparprogramme umsetzen: Löhne und Renten wurden gekürzt, die Arbeitslosigkeit stieg zeitweise auf über 27 Prozent. 2015 stimmten die Griechen in einem Referendum gegen die Sparauflagen, doch die Regierung unter Alexis Tsipras akzeptierte kurz darauf ein drittes Programm. 2018 endete das letzte Hilfsprogramm.',
          ],
          quiz: {
            leicht: [
              ['Welche Währung führte Griechenland 2001/2002 ein?', 'Den Euro', ['Den Dollar', 'Die Lira', 'Den Franken']],
              ['In welcher Stadt fanden 2004 die Olympischen Spiele statt?', 'In Athen', ['In Rom', 'In Peking', 'In Sydney']],
              ['Was drohte Griechenland ab 2010?', 'Die Zahlungsunfähigkeit', ['Ein Krieg', 'Eine Diktatur', 'Ein Erdbeben']],
            ],
            mittel: [
              ['Wer half Griechenland mit Hilfspaketen?', 'EU und Internationaler Währungsfonds', ['Die USA allein', 'China', 'Russland']],
              ['Wie hoch stieg die Arbeitslosigkeit zeitweise?', 'Auf über 27 Prozent', ['Auf über 7 Prozent', 'Auf über 50 Prozent', 'Auf über 2 Prozent']],
              ['Welcher Ministerpräsident regierte 2015?', 'Alexis Tsipras', ['Andreas Papandreou', 'Kyriakos Mitsotakis', 'Konstantinos Karamanlis']],
            ],
            schwer: [
              ['Wie viele Hilfsprogramme erhielt Griechenland insgesamt?', 'Drei', ['Eins', 'Fünf', 'Zehn']],
              ['Wann endete das letzte Hilfsprogramm?', '2018', ['2012', '2015', '2022']],
              ['Wie hieß Griechenlands frühere Währung?', 'Drachme', ['Lira', 'Peseta', 'Escudo']],
            ],
          },
        },
      ],
    },
  ],
};
