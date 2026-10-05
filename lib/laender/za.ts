import type { CountryHistory } from './types';

export const ZA: CountryHistory = {
  code: 'ZA',
  epochs: [
    {
      id: 'kolonie',
      name: 'Ureinwohner, Buren und Briten',
      period: 'bis 1910',
      events: [
        {
          id: 'kap',
          title: 'Ureinwohner und die Kapkolonie',
          date: 'bis 1806',
          text: [
            'Im südlichen Afrika leben die Vorfahren der San, Jäger und Sammler, seit Zehntausenden Jahren; ihre Felsmalereien sind teils Tausende Jahre alt. Später kamen Viehzüchter, die Khoikhoi, und Bantu sprechende Bauernvölker wie die Xhosa und Zulu. Um 1075–1220 blühte im Norden das Königreich Mapungubwe, das mit Gold handelte.',
            '1652 gründete Jan van Riebeeck im Auftrag der niederländischen Ostindien-Kompanie am Kap der Guten Hoffnung eine Versorgungsstation für Schiffe – den Ursprung von Kapstadt. Die Siedler, später „Buren“ (Bauern) genannt, nahmen den Khoikhoi Land und Vieh; für die Arbeit wurden Sklaven aus Asien und Afrika ins Land gebracht. Aus dem Niederländischen entwickelte sich die Sprache Afrikaans.',
          ],
          quiz: {
            leicht: [
              ['Wer gründete 1652 eine Station am Kap?', 'Jan van Riebeeck', ['Vasco da Gama', 'Cecil Rhodes', 'Bartolomeu Dias']],
              ['Welche Stadt entstand daraus?', 'Kapstadt', ['Johannesburg', 'Durban', 'Pretoria']],
              ['Welche Sprache entwickelte sich aus dem Niederländischen?', 'Afrikaans', ['Zulu', 'Englisch', 'Xhosa']],
            ],
            mittel: [
              ['Wie nannte man die Siedler niederländischer Herkunft?', 'Buren', ['Kreolen', 'Loyalisten', 'Kosaken']],
              ['Welche Jäger und Sammler leben seit Zehntausenden Jahren im südlichen Afrika?', 'Die San', ['Die Massai', 'Die Tuareg', 'Die Aborigines']],
              ['Für welche Gesellschaft arbeitete van Riebeeck?', 'Für die niederländische Ostindien-Kompanie', ['Für die britische Ostindien-Kompanie', 'Für die Hanse', 'Für die Hudson’s Bay Company']],
            ],
            schwer: [
              ['Welches Königreich blühte um 1075–1220 im Norden?', 'Mapungubwe', ['Aksum', 'Mali', 'Kongo']],
              ['Was bedeutet „Buren“?', 'Bauern', ['Krieger', 'Händler', 'Seefahrer']],
              ['Welche Viehzüchter verloren Land an die Siedler?', 'Die Khoikhoi', ['Die Zulu', 'Die Massai', 'Die Tswana']],
            ],
          },
        },
        {
          id: 'burenkriege',
          title: 'Großer Treck, Gold und Burenkriege',
          date: '1806–1910',
          text: [
            '1806 übernahm Großbritannien die Kapkolonie und schaffte 1834 die Sklaverei ab. Viele Buren wollten sich der britischen Herrschaft entziehen: Im „Großen Treck“ ab 1835 zogen Tausende mit Ochsenwagen ins Landesinnere und gründeten eigene Republiken, Transvaal und den Oranje-Freistaat. Dabei kam es zu Kämpfen mit afrikanischen Königreichen. Das Zulu-Reich, unter König Shaka zur Militärmacht geworden, besiegte die Briten 1879 bei Isandlwana, wurde aber noch im selben Jahr unterworfen.',
            '1867 wurden bei Kimberley Diamanten, 1886 am Witwatersrand riesige Goldvorkommen entdeckt; Johannesburg entstand. Großbritannien wollte die Burenrepubliken beherrschen und siegte im Zweiten Burenkrieg (1899–1902) – auch durch Lager, in denen Zehntausende burische und afrikanische Zivilisten starben. 1910 entstand die Südafrikanische Union, in der Schwarze vom Wahlrecht weitgehend ausgeschlossen waren.',
          ],
          quiz: {
            leicht: [
              ['Was wurde 1886 am Witwatersrand entdeckt?', 'Gold', ['Öl', 'Kohle', 'Uran']],
              ['Welche Stadt entstand durch den Goldrausch?', 'Johannesburg', ['Kapstadt', 'Durban', 'Port Elizabeth']],
              ['Gegen wen kämpften die Buren in den Burenkriegen?', 'Gegen Großbritannien', ['Gegen die Niederlande', 'Gegen Portugal', 'Gegen Deutschland']],
            ],
            mittel: [
              ['Wie heißt der Zug der Buren ins Landesinnere ab 1835?', 'Großer Treck', ['Langer Marsch', 'Pfad der Tränen', 'Wüstenfeldzug']],
              ['Welcher Zulukönig machte sein Reich zur Militärmacht?', 'Shaka', ['Moshoeshoe', 'Nelson Mandela', 'Mzilikazi']],
              ['Wo wurden 1867 Diamanten entdeckt?', 'Bei Kimberley', ['Bei Kapstadt', 'Bei Durban', 'Bei Pretoria']],
            ],
            schwer: [
              ['Wo besiegten die Zulu 1879 die Briten?', 'Bei Isandlwana', ['Am Blood River', 'Bei Majuba', 'Bei Ulundi']],
              ['Wann endete der Zweite Burenkrieg?', '1902', ['1881', '1910', '1899']],
              ['Wie hießen die beiden Burenrepubliken?', 'Transvaal und Oranje-Freistaat', ['Natal und Kapland', 'Rhodesien und Betschuanaland', 'Zululand und Swasiland']],
            ],
          },
        },
      ],
    },
    {
      id: 'apartheid',
      name: 'Apartheid und Befreiung',
      period: 'seit 1948',
      events: [
        {
          id: 'apartheid',
          title: 'Die Apartheid',
          date: '1948–1989',
          text: [
            '1948 gewann die Nationale Partei die Wahl und führte die Apartheid ein – die strenge „Getrenntheit“ der Bevölkerungsgruppen. Jeder Mensch wurde nach „Rasse“ eingestuft; Schwarze, „Farbige“ und Inder durften nicht wählen, mussten in getrennten Wohngebieten leben und Passbücher bei sich tragen und wurden zu Millionen zwangsumgesiedelt, auch in sogenannte Homelands. Ehen zwischen den Gruppen waren verboten.',
            '1960 erschoss die Polizei in Sharpeville 69 Demonstrierende; danach wurde der Afrikanische Nationalkongress (ANC) verboten. Nelson Mandela ging in den bewaffneten Widerstand und wurde 1964 zu lebenslanger Haft verurteilt; 18 Jahre davon verbrachte er auf der Gefängnisinsel Robben Island. 1976 protestierten in Soweto Schülerinnen und Schüler gegen Afrikaans als Unterrichtssprache; Hunderte wurden getötet. Wachsende internationale Sanktionen isolierten das Land.',
          ],
          quiz: {
            leicht: [
              ['Wie heißt das System der Rassentrennung in Südafrika?', 'Apartheid', ['Kolonialismus', 'Kastenwesen', 'Feudalismus']],
              ['Welcher Widerstandskämpfer saß 27 Jahre in Haft?', 'Nelson Mandela', ['Desmond Tutu', 'Steve Biko', 'Frederik Willem de Klerk']],
              ['Auf welcher Insel war Mandela lange inhaftiert?', 'Auf Robben Island', ['Auf Alcatraz', 'Auf Elba', 'Auf St. Helena']],
            ],
            mittel: [
              ['Wann wurde die Apartheid eingeführt?', '1948', ['1910', '1960', '1994']],
              ['Welche Organisation wurde 1960 verboten?', 'Der ANC', ['Die Nationale Partei', 'Die Gewerkschaft der Bergleute', 'Die Kirche']],
              ['Wogegen protestierten 1976 Schüler in Soweto?', 'Gegen Afrikaans als Unterrichtssprache', ['Gegen Schulgeld', 'Gegen Fußballverbote', 'Gegen britische Lehrer']],
            ],
            schwer: [
              ['Wie viele Menschen erschoss die Polizei 1960 in Sharpeville?', '69', ['7', '690', '6.900']],
              ['Wann wurde Mandela zu lebenslanger Haft verurteilt?', '1964', ['1948', '1976', '1990']],
              ['Wie nannte man die Gebiete, in die Schwarze umgesiedelt wurden?', 'Homelands', ['Reservate', 'Kolchosen', 'Kantone']],
            ],
          },
        },
        {
          id: 'mandela',
          title: 'Mandela und die Regenbogennation',
          date: '1990–2010',
          text: [
            'Präsident Frederik Willem de Klerk hob 1990 das Verbot des ANC auf; am 11. Februar 1990 kam Nelson Mandela nach 27 Jahren Haft frei. Beide verhandelten das Ende der Apartheid und erhielten 1993 gemeinsam den Friedensnobelpreis. Bei den ersten freien Wahlen am 27. April 1994 – heute „Freedom Day“ – standen Millionen stundenlang an; Mandela wurde erster schwarzer Präsident.',
            'Er setzte auf Versöhnung statt Rache: Eine Wahrheits- und Versöhnungskommission unter Erzbischof Desmond Tutu arbeitete die Verbrechen der Apartheid auf. Berühmt wurde, wie Mandela 1995 im Trikot der lange „weißen“ Rugby-Nationalmannschaft den WM-Sieg feierte. Tutu prägte den Begriff „Regenbogennation“. 2010 richtete Südafrika als erstes afrikanisches Land die Fußball-WM aus. Armut, Ungleichheit und eine schwere HIV-Epidemie bleiben große Herausforderungen.',
          ],
          quiz: {
            leicht: [
              ['Wer wurde 1994 erster schwarzer Präsident Südafrikas?', 'Nelson Mandela', ['Desmond Tutu', 'Jacob Zuma', 'Thabo Mbeki']],
              ['Wie nannte Tutu das neue Südafrika?', 'Regenbogennation', ['Goldene Nation', 'Freie Nation', 'Afrikanische Union']],
              ['Welches Großereignis fand 2010 in Südafrika statt?', 'Die Fußball-WM', ['Die Olympischen Spiele', 'Die Weltausstellung', 'Ein G20-Gipfel']],
            ],
            mittel: [
              ['Wann kam Mandela frei?', '1990', ['1964', '1994', '1976']],
              ['Mit wem erhielt Mandela 1993 den Friedensnobelpreis?', 'Mit Frederik Willem de Klerk', ['Mit Desmond Tutu', 'Mit Kofi Annan', 'Mit Barack Obama']],
              ['Wer leitete die Wahrheits- und Versöhnungskommission?', 'Desmond Tutu', ['Nelson Mandela', 'Steve Biko', 'Thabo Mbeki']],
            ],
            schwer: [
              ['An welchem Tag fanden die ersten freien Wahlen statt?', '27. April 1994', ['11. Februar 1990', '16. Juni 1976', '10. Mai 1994']],
              ['Wie lange saß Mandela insgesamt in Haft?', '27 Jahre', ['7 Jahre', '18 Jahre', '37 Jahre']],
              ['Bei welcher WM feierte Mandela 1995 im Trikot der Nationalmannschaft?', 'Bei der Rugby-WM', ['Bei der Fußball-WM', 'Bei der Cricket-WM', 'Bei der Leichtathletik-WM']],
            ],
          },
        },
      ],
    },
  ],
};
