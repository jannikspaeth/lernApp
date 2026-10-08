import type { CountryHistory } from './types';

export const PT_ALT: CountryHistory = {
  code: 'PT',
  epochs: [
    {
      id: 'mittelalter',
      name: 'Gründung und Entdeckungen',
      period: '1139–1500',
      events: [
        {
          id: 'gruendung',
          title: 'Die Gründung des Königreichs',
          date: '1139–1249',
          text: [
            'Portugal entstand aus einer Grafschaft im Nordwesten der Iberischen Halbinsel, die zum Königreich León gehörte. Graf Afonso Henriques besiegte 1139 die Mauren in der Schlacht von Ourique und nannte sich danach König; 1143 erkannte León im Vertrag von Zamora die Selbstständigkeit an. Portugal ist damit einer der ältesten Staaten Europas mit nahezu unveränderten Grenzen.',
            '1147 eroberte Afonso Henriques mit Hilfe von Kreuzfahrern auf dem Weg ins Heilige Land die Stadt Lissabon. Bis 1249 war mit der Algarve der ganze Süden erobert – über 200 Jahre früher als in Spanien endete in Portugal die Reconquista. 1386 schloss Portugal mit England den Vertrag von Windsor, das älteste noch bestehende Bündnis der Welt.',
          ],
          quiz: {
            leicht: [
              ['Wer war der erste König Portugals?', 'Afonso Henriques', ['Heinrich der Seefahrer', 'Manuel I.', 'Vasco da Gama']],
              ['Welche Stadt eroberte er 1147?', 'Lissabon', ['Porto', 'Faro', 'Coimbra']],
              ['Mit welchem Land hat Portugal das älteste bestehende Bündnis?', 'Mit England', ['Mit Spanien', 'Mit Frankreich', 'Mit Brasilien']],
            ],
            mittel: [
              ['In welchem Jahr wurde Portugals Selbstständigkeit anerkannt?', '1143', ['1492', '1640', '1910']],
              ['Welche Region im Süden war 1249 erobert?', 'Die Algarve', ['Andalusien', 'Galicien', 'Katalonien']],
              ['Wer half 1147 bei der Eroberung Lissabons?', 'Kreuzfahrer', ['Wikinger', 'Römer', 'Osmanen']],
            ],
            schwer: [
              ['Wie heißt der Bündnisvertrag mit England von 1386?', 'Vertrag von Windsor', ['Vertrag von Tordesillas', 'Vertrag von Zamora', 'Vertrag von Utrecht']],
              ['Zu welchem Königreich gehörte die Grafschaft Portugal ursprünglich?', 'Zu León', ['Zu Aragón', 'Zu Navarra', 'Zu Frankreich']],
              ['Wie heißt der Vertrag von 1143?', 'Vertrag von Zamora', ['Vertrag von Windsor', 'Vertrag von Tordesillas', 'Vertrag von Lissabon']],
            ],
          },
        },
        {
          id: 'entdeckungen',
          title: 'Das Zeitalter der Entdeckungen',
          date: '1415–1500',
          text: [
            'Im 15. Jahrhundert wurde das kleine Portugal zum Pionier der Seefahrt. Prinz Heinrich „der Seefahrer“ förderte Expeditionen entlang der afrikanischen Westküste; Seeleute entdeckten Madeira und die Azoren. 1488 umsegelte Bartolomeu Dias das Kap der Guten Hoffnung an der Südspitze Afrikas. Wendige neue Schiffe, die Karavellen, machten diese Fahrten möglich.',
            '1498 erreichte Vasco da Gama als erster Europäer auf dem Seeweg Indien; damit begann der portugiesische Gewürzhandel. 1500 landete Pedro Álvares Cabral in Brasilien. Schon 1494 hatten Portugal und Spanien im Vertrag von Tordesillas die Welt entlang einer Linie im Atlantik untereinander aufgeteilt. Portugal errichtete ein Handelsimperium von Brasilien über Afrika bis Macau – und war tief in den atlantischen Sklavenhandel verstrickt.',
          ],
          quiz: {
            leicht: [
              ['Wer erreichte 1498 als erster Europäer auf dem Seeweg Indien?', 'Vasco da Gama', ['Christoph Kolumbus', 'Ferdinand Magellan', 'James Cook']],
              ['Welches Land in Südamerika wurde portugiesisch?', 'Brasilien', ['Argentinien', 'Peru', 'Mexiko']],
              ['Welcher Prinz förderte die Seefahrt?', 'Heinrich der Seefahrer', ['Afonso Henriques', 'Manuel I.', 'Karl V.']],
            ],
            mittel: [
              ['Wer umsegelte 1488 das Kap der Guten Hoffnung?', 'Bartolomeu Dias', ['Vasco da Gama', 'Ferdinand Magellan', 'Pedro Álvares Cabral']],
              ['Wie hießen die neuen, wendigen Schiffe?', 'Karavellen', ['Galeeren', 'Koggen', 'Fregatten']],
              ['Mit welchem Land teilte Portugal 1494 die Welt auf?', 'Mit Spanien', ['Mit England', 'Mit Frankreich', 'Mit den Niederlanden']],
            ],
            schwer: [
              ['Wie heißt der Vertrag zur Aufteilung der Welt von 1494?', 'Vertrag von Tordesillas', ['Vertrag von Windsor', 'Vertrag von Zamora', 'Westfälischer Friede']],
              ['Wer landete 1500 in Brasilien?', 'Pedro Álvares Cabral', ['Vasco da Gama', 'Amerigo Vespucci', 'Bartolomeu Dias']],
              ['Welche Stadt in China war portugiesischer Stützpunkt?', 'Macau', ['Hongkong', 'Shanghai', 'Peking']],
            ],
          },
        },
      ],
    },
    {
      id: 'neuzeit',
      name: 'Erdbeben, Republik und Diktatur',
      period: '1755–1974',
      events: [
        {
          id: 'erdbeben',
          title: 'Das Erdbeben von Lissabon',
          date: '1755',
          text: [
            'Am 1. November 1755, an Allerheiligen, zerstörte ein gewaltiges Erdbeben Lissabon. Ein Tsunami und tagelange Brände vernichteten große Teile der Stadt; schätzungsweise 30.000 bis 50.000 Menschen starben allein in Lissabon. Das Unglück erschütterte ganz Europa und regte Philosophen wie Voltaire und Kant zum Nachdenken über Gott, das Böse und die Naturgesetze an.',
            'Der leitende Minister Sebastião José de Carvalho e Melo, der spätere Marquês de Pombal, organisierte den Wiederaufbau. Die Unterstadt Baixa entstand neu, mit geraden Straßen und erdbebensicheren Gebäuden – eines der ersten Beispiele moderner Stadtplanung. Pombal regierte als aufgeklärter, aber harter Reformer und vertrieb 1759 die Jesuiten aus Portugal.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt zerstörte 1755 ein Erdbeben?', 'Lissabon', ['Porto', 'Madrid', 'Rom']],
              ['An welchem Feiertag geschah das Beben?', 'An Allerheiligen', ['An Weihnachten', 'An Ostern', 'An Neujahr']],
              ['Was folgte dem Erdbeben außer Bränden?', 'Ein Tsunami', ['Ein Vulkanausbruch', 'Ein Krieg', 'Eine Eiszeit']],
            ],
            mittel: [
              ['Welcher Minister organisierte den Wiederaufbau?', 'Der Marquês de Pombal', ['Vasco da Gama', 'Salazar', 'Heinrich der Seefahrer']],
              ['Wie heißt die neu geplante Unterstadt Lissabons?', 'Baixa', ['Alfama', 'Belém', 'Sintra']],
              ['Welcher Philosoph schrieb über das Erdbeben?', 'Voltaire', ['Karl Marx', 'Nietzsche', 'Platon']],
            ],
            schwer: [
              ['Wie viele Menschen starben in Lissabon etwa?', '30.000 bis 50.000', ['Rund 500', 'Rund 5.000', 'Über 1 Million']],
              ['Welchen Orden vertrieb Pombal 1759?', 'Die Jesuiten', ['Die Templer', 'Die Franziskaner', 'Die Benediktiner']],
              ['Wofür gilt der Wiederaufbau der Baixa als frühes Beispiel?', 'Für moderne Stadtplanung', ['Für gotische Baukunst', 'Für romanische Kirchen', 'Für barocke Gartenkunst']],
            ],
          },
        },
        {
          id: 'salazar',
          title: 'Republik und Salazar-Diktatur',
          date: '1910–1974',
          text: [
            '1908 wurden König Karl I. und sein Thronfolger in Lissabon ermordet; 1910 stürzte eine Revolution die Monarchie, und Portugal wurde Republik. Die Erste Republik war instabil, mit Dutzenden Regierungen in wenigen Jahren. 1926 putschte das Militär. Der Finanzprofessor António de Oliveira Salazar wurde 1932 Ministerpräsident und errichtete den „Estado Novo“ (Neuen Staat), eine autoritäre Diktatur mit Zensur und Geheimpolizei, der PIDE.',
            'Im Zweiten Weltkrieg blieb Portugal neutral; Lissabon wurde zum Fluchthafen für viele Verfolgte. Salazar hielt an den Kolonien in Afrika fest und führte ab 1961 verlustreiche Kolonialkriege in Angola, Mosambik und Guinea-Bissau. 1968 erlitt er einen Schlaganfall; sein Nachfolger Marcelo Caetano setzte das Regime fort.',
          ],
          quiz: {
            leicht: [
              ['Wann wurde Portugal Republik?', '1910', ['1755', '1974', '1822']],
              ['Wer errichtete in Portugal eine Diktatur?', 'Salazar', ['Franco', 'Mussolini', 'Pombal']],
              ['Welche Haltung hatte Portugal im Zweiten Weltkrieg?', 'Es blieb neutral', ['Es war mit Deutschland verbündet', 'Es war mit Italien verbündet', 'Es wurde besetzt']],
            ],
            mittel: [
              ['Wie hieß Salazars Regime?', 'Estado Novo', ['Reconquista', 'Transición', 'Risorgimento']],
              ['In welchen Kolonien führte Portugal ab 1961 Krieg?', 'In Angola und Mosambik', ['In Brasilien und Uruguay', 'In Indien und China', 'Im Kongo und in Kenia']],
              ['Welche Stadt wurde im Zweiten Weltkrieg zum Fluchthafen?', 'Lissabon', ['Porto', 'Faro', 'Coimbra']],
            ],
            schwer: [
              ['Wie hieß Salazars Geheimpolizei?', 'PIDE', ['Gestapo', 'Stasi', 'KGB']],
              ['Wer folgte 1968 auf Salazar?', 'Marcelo Caetano', ['Mário Soares', 'António Spínola', 'Óscar Carmona']],
              ['Welchen Beruf hatte Salazar ursprünglich?', 'Finanzprofessor', ['General', 'Priester', 'Arzt']],
            ],
          },
        },
      ],
    },
    {
      id: 'demokratie',
      name: 'Demokratie',
      period: 'seit 1974',
      events: [
        {
          id: 'nelkenrevolution',
          title: 'Die Nelkenrevolution',
          date: '1974–1999',
          text: [
            'Am 25. April 1974 stürzten junge Offiziere der „Bewegung der Streitkräfte“ das Regime fast ohne Blutvergießen. Das Signal zum Aufstand war ein Lied im Radio: „Grândola, Vila Morena“. Die Bevölkerung jubelte den Soldaten zu und steckte rote Nelken in ihre Gewehrläufe – daher der Name Nelkenrevolution. Der 25. April ist heute als „Tag der Freiheit“ Nationalfeiertag.',
            'Portugal entließ 1974/75 seine afrikanischen Kolonien in die Unabhängigkeit, darunter Angola und Mosambik; Hunderttausende Portugiesen kehrten zurück. Nach unruhigen Übergangsjahren festigte sich die Demokratie, geprägt von Politikern wie dem Sozialisten Mário Soares. 1986 trat Portugal gemeinsam mit Spanien der Europäischen Gemeinschaft bei; 1999 gab es Macau als letzte Kolonie an China zurück.',
          ],
          quiz: {
            leicht: [
              ['Welche Blumen steckten die Menschen in die Gewehrläufe?', 'Rote Nelken', ['Rosen', 'Tulpen', 'Sonnenblumen']],
              ['An welchem Tag fand die Nelkenrevolution statt?', '25. April 1974', ['1. Mai 1974', '5. Oktober 1910', '14. Juli 1974']],
              ['Wann trat Portugal der Europäischen Gemeinschaft bei?', '1986', ['1974', '1957', '2004']],
            ],
            mittel: [
              ['Wer führte den Umsturz durch?', 'Junge Offiziere', ['Studenten', 'Gewerkschaften', 'Die Kirche']],
              ['Welche Kolonien wurden 1975 unabhängig?', 'Angola und Mosambik', ['Brasilien und Uruguay', 'Macau und Goa', 'Madeira und die Azoren']],
              ['Welche letzte Kolonie gab Portugal 1999 an China zurück?', 'Macau', ['Hongkong', 'Taiwan', 'Goa']],
            ],
            schwer: [
              ['Welches Lied war das Signal zum Aufstand?', '„Grândola, Vila Morena“', ['„A Portuguesa“', '„Bella Ciao“', '„Lisboa Antiga“']],
              ['Wie hieß die Gruppe der aufständischen Offiziere?', 'Bewegung der Streitkräfte', ['Rote Armee', 'Junta der Obristen', 'Neue Garde']],
              ['Welcher Sozialist prägte die junge Demokratie?', 'Mário Soares', ['Marcelo Caetano', 'António Salazar', 'Afonso Costa']],
            ],
          },
        },
      ],
    },
  ],
};
