import type { CountryHistory } from './types';

export const HU_ALT: CountryHistory = {
  code: 'HU',
  epochs: [
    {
      id: 'koenigreich',
      name: 'Königreich Ungarn',
      period: '895–1699',
      events: [
        {
          id: 'landnahme',
          title: 'Landnahme und Stephan der Heilige',
          date: '895–1038',
          text: [
            'Ende des 9. Jahrhunderts zogen die Magyaren, ein Reitervolk aus dem Osten, unter ihrem Fürsten Árpád in das Karpatenbecken – die „Landnahme“ um 895/896. Ihre Sprache gehört nicht zu den indoeuropäischen, sondern zur uralischen Sprachfamilie und ist entfernt mit dem Finnischen verwandt. Jahrzehntelang unternahmen sie Raubzüge nach Westeuropa, bis Otto der Große sie 955 auf dem Lechfeld besiegte.',
            'Fürst Stephan aus dem Geschlecht der Árpáden ließ sich taufen und wurde um das Jahr 1000 mit einer vom Papst gesandten Krone zum ersten König Ungarns gekrönt. Er christianisierte das Land und baute einen Staat auf; er wurde heiliggesprochen, und die Stephanskrone ist bis heute Nationalsymbol. Der Stephanstag am 20. August ist Nationalfeiertag.',
          ],
          quiz: {
            leicht: [
              ['Wer war der erste König Ungarns?', 'Stephan I., der Heilige', ['Árpád', 'Matthias Corvinus', 'Franz Joseph']],
              ['Wie heißt das Volk, das um 895 ins Karpatenbecken zog?', 'Die Magyaren', ['Die Hunnen', 'Die Mongolen', 'Die Slawen']],
              ['Welche Krone ist Ungarns Nationalsymbol?', 'Die Stephanskrone', ['Die Reichskrone', 'Die Wenzelskrone', 'Die Eiserne Krone']],
            ],
            mittel: [
              ['Mit welcher Sprache ist Ungarisch entfernt verwandt?', 'Mit dem Finnischen', ['Mit dem Deutschen', 'Mit dem Türkischen', 'Mit dem Russischen']],
              ['Welcher Fürst führte die Landnahme an?', 'Árpád', ['Attila', 'Stephan', 'Béla']],
              ['Wo wurden die Magyaren 955 besiegt?', 'Auf dem Lechfeld', ['Bei Mohács', 'Am Kahlenberg', 'Bei Hastings']],
            ],
            schwer: [
              ['Wann ist der Stephanstag?', 'Am 20. August', ['Am 15. März', 'Am 23. Oktober', 'Am 1. Mai']],
              ['Zu welcher Sprachfamilie gehört das Ungarische?', 'Zur uralischen', ['Zur indoeuropäischen', 'Zu den Turksprachen', 'Zur semitischen']],
              ['Wann wurde Stephan zum König gekrönt?', 'Um das Jahr 1000', ['Um 895', 'Um 955', 'Um 1301']],
            ],
          },
        },
        {
          id: 'tuerkenzeit',
          title: 'Mohács und die Türkenzeit',
          date: '1526–1699',
          text: [
            'Unter König Matthias Corvinus (1458–1490) erlebte Ungarn eine Blüte der Renaissance. Doch 1526 vernichteten die Osmanen unter Süleyman dem Prächtigen das ungarische Heer in der Schlacht bei Mohács; König Ludwig II. kam auf der Flucht ums Leben. Das Land wurde dreigeteilt: Westen und Norden fielen an die Habsburger, die Mitte mit Buda wurde osmanisch, und Siebenbürgen wurde ein Fürstentum unter osmanischer Oberhoheit.',
            'Rund 150 Jahre dauerte die osmanische Herrschaft über Zentralungarn. 1686 eroberte ein christliches Heer Buda zurück; im Frieden von Karlowitz 1699 kam fast ganz Ungarn an die Habsburger. Aus der Türkenzeit stammen noch Bauwerke wie die türkischen Bäder in Budapest.',
          ],
          quiz: {
            leicht: [
              ['Wer besiegte Ungarn 1526 bei Mohács?', 'Die Osmanen', ['Die Habsburger', 'Die Mongolen', 'Die Russen']],
              ['Wie lange dauerte die osmanische Herrschaft über Zentralungarn etwa?', 'Rund 150 Jahre', ['15 Jahre', '500 Jahre', '50 Jahre']],
              ['Welche Bauten aus der Türkenzeit gibt es noch in Budapest?', 'Türkische Bäder', ['Pyramiden', 'Wolkenkratzer', 'Gotische Kathedralen']],
            ],
            mittel: [
              ['Welcher König förderte die Renaissance in Ungarn?', 'Matthias Corvinus', ['Stephan I.', 'Ludwig II.', 'Béla IV.']],
              ['Welcher König starb 1526 auf der Flucht?', 'Ludwig II.', ['Matthias Corvinus', 'Stephan I.', 'Béla IV.']],
              ['Wann wurde Buda zurückerobert?', '1686', ['1526', '1683', '1867']],
            ],
            schwer: [
              ['In wie viele Teile wurde Ungarn nach 1526 geteilt?', 'In drei', ['In zwei', 'In vier', 'In fünf']],
              ['Mit welchem Frieden kam Ungarn 1699 an die Habsburger?', 'Frieden von Karlowitz', ['Westfälischer Friede', 'Vertrag von Trianon', 'Frieden von Passarowitz']],
              ['Welches Fürstentum stand unter osmanischer Oberhoheit?', 'Siebenbürgen', ['Kroatien', 'Böhmen', 'Mähren']],
            ],
          },
        },
      ],
    },
    {
      id: 'habsburg',
      name: 'Unter den Habsburgern',
      period: '1848–1945',
      events: [
        {
          id: 'revolution-1848',
          title: 'Revolution 1848 und Ausgleich',
          date: '1848–1873',
          text: [
            'Am 15. März 1848 – heute Nationalfeiertag – trug der Dichter Sándor Petőfi in Pest sein „Nationallied“ vor; Studenten und Bürger forderten Pressefreiheit und Reformen. Unter Lajos Kossuth erklärte sich Ungarn 1849 vom Haus Habsburg unabhängig. Mit Hilfe russischer Truppen schlug Österreich die Revolution im Sommer 1849 nieder; Petőfi fiel, 13 ungarische Generäle wurden in Arad hingerichtet.',
            'Nach Österreichs Niederlage gegen Preußen 1866 kam es 1867 zum „Ausgleich“: Ungarn erhielt weitgehende Selbstständigkeit in der Doppelmonarchie Österreich-Ungarn, und Franz Joseph wurde zum König von Ungarn gekrönt. 1873 entstand durch den Zusammenschluss von Buda, Pest und Óbuda die Stadt Budapest, die rasch zur Metropole wuchs.',
          ],
          quiz: {
            leicht: [
              ['An welchem Tag begann 1848 die Revolution in Pest?', '15. März', ['1. Mai', '14. Juli', '3. Oktober']],
              ['Welche Doppelmonarchie entstand 1867?', 'Österreich-Ungarn', ['Ungarn-Polen', 'Österreich-Preußen', 'Ungarn-Rumänien']],
              ['Wann entstand die Stadt Budapest?', '1873', ['1526', '1848', '1920']],
            ],
            mittel: [
              ['Welcher Dichter trug 1848 das „Nationallied“ vor?', 'Sándor Petőfi', ['Lajos Kossuth', 'Franz Liszt', 'Imre Nagy']],
              ['Wer führte die ungarische Revolution politisch?', 'Lajos Kossuth', ['Matthias Corvinus', 'Miklós Horthy', 'Imre Nagy']],
              ['Wer half Österreich, die Revolution niederzuschlagen?', 'Russland', ['Preußen', 'Frankreich', 'Das Osmanische Reich']],
            ],
            schwer: [
              ['Wo wurden 1849 13 ungarische Generäle hingerichtet?', 'In Arad', ['In Wien', 'In Budapest', 'In Debrecen']],
              ['Welche drei Städte bildeten Budapest?', 'Buda, Pest und Óbuda', ['Buda, Pest und Szeged', 'Pest, Debrecen und Győr', 'Buda, Esztergom und Pest']],
              ['Wer wurde 1867 zum König von Ungarn gekrönt?', 'Franz Joseph', ['Ludwig II.', 'Karl I.', 'Leopold II.']],
            ],
          },
        },
        {
          id: 'trianon',
          title: 'Trianon, Horthy und der Holocaust',
          date: '1920–1945',
          text: [
            'Nach dem Ersten Weltkrieg verlor Ungarn im Vertrag von Trianon 1920 rund zwei Drittel seines Gebiets an Nachbarländer wie Rumänien, die Tschechoslowakei und Jugoslawien; Millionen Ungarn lebten plötzlich außerhalb der Grenzen. Das „Trianon-Trauma“ prägt die ungarische Politik bis heute. Reichsverweser Miklós Horthy regierte das Land von 1920 bis 1944 als Königreich ohne König.',
            'Um verlorene Gebiete zurückzugewinnen, verbündete sich Ungarn mit Hitler-Deutschland und kämpfte ab 1941 gegen die Sowjetunion. Als Horthy 1944 aus dem Krieg ausscheren wollte, besetzte die Wehrmacht das Land. Innerhalb weniger Wochen wurden rund 437.000 ungarische Juden nach Auschwitz deportiert, die meisten sofort ermordet. Budapest wurde im Winter 1944/45 in schweren Kämpfen weitgehend zerstört.',
          ],
          quiz: {
            leicht: [
              ['Durch welchen Vertrag verlor Ungarn 1920 große Gebiete?', 'Vertrag von Trianon', ['Versailler Vertrag', 'Vertrag von Saint-Germain', 'Münchner Abkommen']],
              ['Wie viel seines Gebiets verlor Ungarn etwa?', 'Zwei Drittel', ['Ein Zehntel', 'Die Hälfte', 'Ein Viertel']],
              ['Mit wem verbündete sich Ungarn im Zweiten Weltkrieg?', 'Mit Deutschland', ['Mit Großbritannien', 'Mit der Sowjetunion', 'Mit den USA']],
            ],
            mittel: [
              ['Welchen Titel trug Miklós Horthy?', 'Reichsverweser', ['König', 'Präsident', 'Kanzler']],
              ['Wohin wurden 1944 die ungarischen Juden deportiert?', 'Nach Auschwitz', ['Nach Theresienstadt', 'Nach Dachau', 'Nach Sibirien']],
              ['An welches Land verlor Ungarn 1920 unter anderem Gebiete?', 'An Rumänien', ['An Italien', 'An Polen', 'An Deutschland']],
            ],
            schwer: [
              ['Wie viele ungarische Juden wurden 1944 deportiert?', 'Rund 437.000', ['Rund 43.700', 'Rund 4 Millionen', 'Rund 100.000']],
              ['Wann besetzte die Wehrmacht Ungarn?', '1944', ['1939', '1941', '1945']],
              ['Welche Staatsform hatte Ungarn unter Horthy?', 'Königreich ohne König', ['Republik', 'Volksrepublik', 'Kaiserreich']],
            ],
          },
        },
      ],
    },
    {
      id: 'nachkrieg',
      name: 'Aufstand und Freiheit',
      period: 'seit 1945',
      events: [
        {
          id: 'aufstand-1956',
          title: 'Aufstand 1956 und Grenzöffnung 1989',
          date: '1956–2004',
          text: [
            'Nach dem Krieg wurde Ungarn eine kommunistische Volksrepublik. Am 23. Oktober 1956 begann in Budapest ein Volksaufstand gegen die Diktatur und die sowjetische Herrschaft; Ministerpräsident Imre Nagy kündigte den Austritt aus dem Warschauer Pakt an. Anfang November schlugen sowjetische Panzer den Aufstand nieder; rund 2.500 Ungarn starben, etwa 200.000 flohen in den Westen. Nagy wurde 1958 hingerichtet.',
            'Unter János Kádár entstand später der vergleichsweise lockere „Gulaschkommunismus“. 1989 öffnete Ungarn als erstes Ostblockland seine Grenze: Beim Paneuropäischen Picknick am 19. August flohen Hunderte DDR-Bürger nach Österreich, ab dem 11. September durften alle ausreisen – ein entscheidender Schritt zum Mauerfall. 1999 trat Ungarn der NATO, 2004 der EU bei.',
          ],
          quiz: {
            leicht: [
              ['In welchem Jahr begann der ungarische Volksaufstand?', '1956', ['1968', '1989', '1945']],
              ['Wer schlug den Aufstand nieder?', 'Sowjetische Truppen', ['Deutsche Truppen', 'Die NATO', 'Die ungarische Polizei allein']],
              ['Was öffnete Ungarn 1989 als erstes Ostblockland?', 'Seine Grenze', ['Seine Banken', 'Seine Schulen', 'Seine Kirchen']],
            ],
            mittel: [
              ['Welcher Ministerpräsident wollte 1956 aus dem Warschauer Pakt austreten?', 'Imre Nagy', ['János Kádár', 'Viktor Orbán', 'Miklós Horthy']],
              ['Wie nennt man Kádárs lockerere Form des Sozialismus?', 'Gulaschkommunismus', ['Prager Frühling', 'Tauwetter', 'Perestroika']],
              ['Wohin flohen 1989 DDR-Bürger über die ungarische Grenze?', 'Nach Österreich', ['Nach Polen', 'Nach Rumänien', 'Nach Italien']],
            ],
            schwer: [
              ['Wie hieß das Treffen an der Grenze am 19. August 1989?', 'Paneuropäisches Picknick', ['Grenzfest von Sopron', 'Freiheitsfest', 'Wiener Picknick']],
              ['Wie viele Ungarn flohen nach 1956 in den Westen?', 'Rund 200.000', ['Rund 2.000', 'Rund 20.000', 'Rund 2 Millionen']],
              ['Wann wurde Imre Nagy hingerichtet?', '1958', ['1956', '1968', '1989']],
            ],
          },
        },
      ],
    },
  ],
};
