import type { CountryHistory } from './types';

export const CA_ALT: CountryHistory = {
  code: 'CA',
  epochs: [
    {
      id: 'kolonie',
      name: 'Indigene Völker und Kolonien',
      period: 'bis 1867',
      events: [
        {
          id: 'neufrankreich',
          title: 'First Nations, Wikinger und Neufrankreich',
          date: 'bis 1763',
          text: [
            'Lange vor den Europäern lebten im heutigen Kanada zahlreiche indigene Völker, die First Nations, die Inuit und später die Métis. Um das Jahr 1000 gründeten Wikinger in L’Anse aux Meadows auf Neufundland eine kurzlebige Siedlung – der älteste nachgewiesene europäische Ort in Amerika. 1534 nahm der Franzose Jacques Cartier das Land am Sankt-Lorenz-Strom für Frankreich in Besitz; der Name „Kanada“ geht auf ein irokesisches Wort für „Dorf“ zurück.',
            '1608 gründete Samuel de Champlain die Stadt Québec, Zentrum der Kolonie Neufrankreich. Der Pelzhandel, vor allem mit Biberfellen, bestimmte die Wirtschaft. Im Siebenjährigen Krieg siegten die Briten 1759 in der Schlacht auf der Abraham-Ebene vor Québec; 1763 trat Frankreich Kanada an Großbritannien ab.',
          ],
          quiz: {
            leicht: [
              ['Wie nennt man die indigenen Völker Kanadas?', 'First Nations', ['Aborigines', 'Maori', 'Azteken']],
              ['Welche europäische Macht gründete Québec?', 'Frankreich', ['England', 'Spanien', 'Die Niederlande']],
              ['An wen trat Frankreich Kanada 1763 ab?', 'An Großbritannien', ['An Spanien', 'An die USA', 'An Russland']],
            ],
            mittel: [
              ['Wer gründete 1608 Québec?', 'Samuel de Champlain', ['Jacques Cartier', 'James Cook', 'Henry Hudson']],
              ['Welches Fell war im Pelzhandel besonders begehrt?', 'Biberfell', ['Löwenfell', 'Tigerfell', 'Zebrafell']],
              ['Wo lag die Wikingersiedlung in Kanada?', 'In L’Anse aux Meadows', ['In Québec', 'In Halifax', 'In Toronto']],
            ],
            schwer: [
              ['Woher stammt der Name „Kanada“?', 'Von einem irokesischen Wort für „Dorf“', ['Von einem französischen Wort für „Schnee“', 'Von einem spanischen Wort für „Nichts“', 'Vom Namen eines Königs']],
              ['Wo siegten die Briten 1759 vor Québec?', 'Auf der Abraham-Ebene', ['Bei Yorktown', 'Bei Waterloo', 'Bei Saratoga']],
              ['Wann nahm Jacques Cartier das Land für Frankreich in Besitz?', '1534', ['1492', '1608', '1763']],
            ],
          },
        },
        {
          id: 'konfoederation',
          title: 'Die Kanadische Konföderation',
          date: '1867–1896',
          text: [
            'Nach der amerikanischen Unabhängigkeit flohen Zehntausende königstreue „Loyalisten“ nach Kanada. Im Krieg von 1812 wehrten britische und kanadische Truppen gemeinsam mit indigenen Verbündeten Angriffe der USA ab. Am 1. Juli 1867 schlossen sich Ontario, Québec, Nova Scotia und New Brunswick zum Dominion Kanada zusammen – der 1. Juli ist heute „Canada Day“. Erster Premierminister wurde John A. Macdonald.',
            'Um das riesige Land zu verbinden, entstand die Canadian Pacific Railway, die 1885 fertig wurde und vom Atlantik bis zum Pazifik reichte. Der Goldrausch am Klondike im Yukon ab 1896 lockte Zehntausende in den Norden. Die Ausdehnung nach Westen ging auf Kosten der indigenen Völker; ein Aufstand der Métis unter Louis Riel wurde 1885 niedergeschlagen.',
          ],
          quiz: {
            leicht: [
              ['Wann entstand das Dominion Kanada?', '1867', ['1776', '1763', '1931']],
              ['Wie heißt der kanadische Nationalfeiertag?', 'Canada Day', ['Independence Day', 'Thanksgiving', 'Victoria Day']],
              ['Wo begann 1896 ein berühmter Goldrausch?', 'Am Klondike', ['In Kalifornien', 'In Australien', 'In Südafrika']],
            ],
            mittel: [
              ['Wer war der erste Premierminister Kanadas?', 'John A. Macdonald', ['Pierre Trudeau', 'Justin Trudeau', 'Wilfrid Laurier']],
              ['Wie hieß die Eisenbahn quer durch Kanada?', 'Canadian Pacific Railway', ['Transsibirische Eisenbahn', 'Orient-Express', 'Union Pacific']],
              ['Wer floh nach der US-Unabhängigkeit nach Kanada?', 'Königstreue Loyalisten', ['Französische Revolutionäre', 'Spanische Siedler', 'Russische Pelzhändler']],
            ],
            schwer: [
              ['Welche vier Provinzen gründeten 1867 Kanada?', 'Ontario, Québec, Nova Scotia und New Brunswick', ['British Columbia, Alberta, Manitoba und Yukon', 'Neufundland, Ontario, Québec und Nunavut', 'Saskatchewan, Ontario, Manitoba und Nova Scotia']],
              ['Wer führte den Aufstand der Métis an?', 'Louis Riel', ['Sitting Bull', 'Tecumseh', 'Geronimo']],
              ['Wann wurde die transkontinentale Bahn fertig?', '1885', ['1867', '1869', '1914']],
            ],
          },
        },
      ],
    },
    {
      id: 'jh20',
      name: 'Eigenständige Nation',
      period: 'seit 1914',
      events: [
        {
          id: 'weltkriege',
          title: 'Kanada in den Weltkriegen',
          date: '1914–1945',
          text: [
            'Als Teil des Britischen Empire war Kanada 1914 automatisch im Ersten Weltkrieg. Bei Vimy in Nordfrankreich eroberten kanadische Truppen im April 1917 einen strategisch wichtigen Höhenzug – ein Sieg, der als Geburtsstunde eines eigenen kanadischen Nationalgefühls gilt. Rund 60.000 Kanadier fielen.',
            'Mit dem Statut von Westminster 1931 erhielt Kanada die volle gesetzgeberische Unabhängigkeit von Großbritannien. 1939 erklärte es Deutschland eigenständig den Krieg – eine Woche nach Großbritannien. Kanadische Soldaten kämpften unter anderem in Italien, landeten am 6. Juni 1944 am Strandabschnitt „Juno Beach“ in der Normandie und befreiten 1944/45 große Teile der Niederlande.',
          ],
          quiz: {
            leicht: [
              ['An welchem Strandabschnitt landeten Kanadier am 6. Juni 1944?', 'Juno Beach', ['Omaha Beach', 'Gold Beach', 'Copacabana']],
              ['Welches Land befreiten kanadische Truppen 1944/45 großenteils?', 'Die Niederlande', ['Spanien', 'Schweden', 'Griechenland']],
              ['In welchem Jahr kam Kanada in den Ersten Weltkrieg?', '1914', ['1917', '1939', '1867']],
            ],
            mittel: [
              ['Welche Schlacht gilt als Geburtsstunde des kanadischen Nationalgefühls?', 'Vimy', ['Verdun', 'Somme', 'Marne']],
              ['Durch welches Gesetz erhielt Kanada 1931 die volle Unabhängigkeit in der Gesetzgebung?', 'Statut von Westminster', ['Act of Union', 'British North America Act', 'Constitution Act']],
              ['Wie viele Kanadier fielen im Ersten Weltkrieg etwa?', 'Rund 60.000', ['Rund 6.000', 'Rund 600.000', 'Rund 6 Millionen']],
            ],
            schwer: [
              ['Wie lange nach Großbritannien erklärte Kanada 1939 den Krieg?', 'Eine Woche später', ['Am selben Tag', 'Ein Jahr später', 'Gar nicht']],
              ['In welchem Land liegt Vimy?', 'In Frankreich', ['In Belgien', 'In Italien', 'In Deutschland']],
              ['In welchem Monat 1917 fand die Schlacht bei Vimy statt?', 'Im April', ['Im Juli', 'Im November', 'Im Januar']],
            ],
          },
        },
        {
          id: 'gegenwart',
          title: 'Ahornblatt, Québec und Versöhnung',
          date: 'seit 1965',
          text: [
            '1965 erhielt Kanada seine heutige Flagge mit dem roten Ahornblatt. Premierminister Pierre Trudeau machte 1969 Englisch und Französisch zu gleichberechtigten Amtssprachen und holte 1982 die Verfassung mit einer Grundrechtecharta endgültig nach Kanada. In der überwiegend französischsprachigen Provinz Québec wuchs eine Unabhängigkeitsbewegung; bei Referenden 1980 und 1995 stimmte jeweils eine Mehrheit – 1995 nur ganz knapp – für den Verbleib.',
            '1999 entstand im Norden das Territorium Nunavut mit einer Inuit-Mehrheit. Lange verschwiegenes Unrecht wurde aufgearbeitet: Über 150.000 indigene Kinder waren über ein Jahrhundert lang in staatlich finanzierte, meist kirchlich geführte Internate („Residential Schools“) gezwungen worden, wo sie ihre Sprache nicht sprechen durften und viele misshandelt wurden. 2015 legte eine Wahrheits- und Versöhnungskommission ihren Bericht vor.',
          ],
          quiz: {
            leicht: [
              ['Welches Symbol zeigt die kanadische Flagge?', 'Ein Ahornblatt', ['Einen Biber', 'Einen Elch', 'Einen Stern']],
              ['Welche zwei Amtssprachen hat Kanada?', 'Englisch und Französisch', ['Englisch und Spanisch', 'Französisch und Inuktitut', 'Englisch und Deutsch']],
              ['Welche Provinz stimmte über ihre Unabhängigkeit ab?', 'Québec', ['Ontario', 'Alberta', 'British Columbia']],
            ],
            mittel: [
              ['Seit wann hat Kanada die Ahornblatt-Flagge?', 'Seit 1965', ['Seit 1867', 'Seit 1931', 'Seit 1999']],
              ['Welches Territorium mit Inuit-Mehrheit entstand 1999?', 'Nunavut', ['Yukon', 'Labrador', 'Nordwest-Territorien']],
              ['Welcher Premierminister holte 1982 die Verfassung nach Kanada?', 'Pierre Trudeau', ['Justin Trudeau', 'John A. Macdonald', 'Brian Mulroney']],
            ],
            schwer: [
              ['Wie ging das Québec-Referendum von 1995 aus?', 'Ganz knapp für den Verbleib', ['Klar für die Unabhängigkeit', 'Deutlich für den Verbleib', 'Unentschieden']],
              ['Wie hießen die Internate für indigene Kinder?', 'Residential Schools', ['Grammar Schools', 'Mission Camps', 'Boarding Colleges']],
              ['Wann legte die Wahrheits- und Versöhnungskommission ihren Bericht vor?', '2015', ['1982', '1999', '2021']],
            ],
          },
        },
      ],
    },
  ],
};
