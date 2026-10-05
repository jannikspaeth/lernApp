import type { CountryHistory } from './types';

export const DE_ALT: CountryHistory = {
  code: 'DE',
  epochs: [
    {
      id: 'antike',
      name: 'Germanen und Römer',
      period: 'bis 5. Jahrhundert',
      events: [
        {
          id: 'varusschlacht',
          title: 'Die Varusschlacht',
          date: '9 n. Chr.',
          text: [
            'Im Jahr 9 n. Chr. lockte der Cheruskerfürst Arminius drei römische Legionen unter dem Statthalter Publius Quinctilius Varus in einen Hinterhalt. In unwegsamem Gelände – nach heutiger Forschung wohl bei Kalkriese im Osnabrücker Land – wurden die Soldaten in mehrtägigen Kämpfen vernichtet. Arminius hatte selbst in der römischen Armee gedient und kannte ihre Taktik genau.',
            'Rom gab danach den Plan auf, Germanien bis zur Elbe zur Provinz zu machen; Rhein und Donau blieben die Grenze des Reiches. Im 19. Jahrhundert wurde Arminius als „Hermann der Cherusker“ zum nationalen Mythos – daran erinnert das Hermannsdenkmal bei Detmold.',
          ],
          quiz: {
            leicht: [
              ['Welches Reich erlitt in der Varusschlacht eine schwere Niederlage?', 'Das Römische Reich', ['Das Frankenreich', 'Das Perserreich', 'Das Byzantinische Reich']],
              ['Wer führte die Germanen in der Varusschlacht an?', 'Arminius', ['Varus', 'Karl Martell', 'Widukind']],
              ['Wann fand die Varusschlacht statt?', '9 n. Chr.', ['44 v. Chr.', '476 n. Chr.', '800 n. Chr.']],
            ],
            mittel: [
              ['Welchem germanischen Stamm gehörte Arminius an?', 'Den Cheruskern', ['Den Sachsen', 'Den Franken', 'Den Goten']],
              ['Welcher Fluss blieb nach der Niederlage Grenze des Römischen Reiches?', 'Der Rhein', ['Die Elbe', 'Die Weser', 'Die Oder']],
              ['Wie viele römische Legionen wurden vernichtet?', 'Drei', ['Eine', 'Fünf', 'Zehn']],
            ],
            schwer: [
              ['Wo vermuten Forscher heute den Hauptkampfplatz?', 'Bei Kalkriese nahe Osnabrück', ['Bei Detmold', 'Bei Xanten', 'Bei Trier']],
              ['Unter welchem Namen wurde Arminius im 19. Jahrhundert verehrt?', 'Hermann der Cherusker', ['Hermann der Große', 'Armin der Sachse', 'Hermann von Teutoburg']],
              ['Wo steht das Hermannsdenkmal?', 'Bei Detmold', ['Bei Kalkriese', 'Bei Kassel', 'Bei Paderborn']],
            ],
          },
        },
        {
          id: 'limes',
          title: 'Römer am Rhein: Limes und erste Städte',
          date: '1.–3. Jahrhundert',
          text: [
            'Westlich des Rheins und südlich der Donau gehörten große Teile des heutigen Deutschlands über Jahrhunderte zum Römischen Reich. Aus Lagern und Siedlungen entstanden Städte wie Köln, Trier, Mainz, Augsburg und Regensburg. Trier (Augusta Treverorum) war zeitweise sogar Kaiserresidenz; die Porta Nigra steht bis heute.',
            'Zwischen Rhein und Donau sicherte der Limes das Land: eine rund 550 Kilometer lange Grenzanlage mit Wall, Graben, Palisade und Wachtürmen, seit 2005 UNESCO-Welterbe. Über die Grenze hinweg wurde rege gehandelt; die Römer brachten Steinbau, Straßen und den Weinbau. Um die Mitte des 3. Jahrhunderts gaben sie den Limes unter dem Druck der Alamannen auf.',
          ],
          quiz: {
            leicht: [
              ['Wie hieß die römische Grenzanlage in Germanien?', 'Limes', ['Hadrianswall', 'Chinesische Mauer', 'Atlantikwall']],
              ['Welche heutige deutsche Stadt war eine römische Gründung?', 'Köln', ['Berlin', 'Hamburg', 'Hannover']],
              ['Welches römische Stadttor steht in Trier?', 'Porta Nigra', ['Brandenburger Tor', 'Holstentor', 'Siegestor']],
            ],
            mittel: [
              ['Wie lang war der Limes zwischen Rhein und Donau etwa?', 'Rund 550 Kilometer', ['Rund 50 Kilometer', 'Rund 1.500 Kilometer', 'Rund 5.000 Kilometer']],
              ['Welche Stadt war zeitweise römische Kaiserresidenz?', 'Trier', ['Köln', 'Mainz', 'Regensburg']],
              ['Welcher Stamm drängte die Römer im 3. Jahrhundert vom Limes zurück?', 'Die Alamannen', ['Die Wikinger', 'Die Hunnen', 'Die Normannen']],
            ],
            schwer: [
              ['Seit wann ist der Limes UNESCO-Welterbe?', '2005', ['1978', '1990', '2015']],
              ['Wie hieß Trier auf Latein?', 'Augusta Treverorum', ['Colonia Agrippina', 'Castra Regina', 'Mogontiacum']],
              ['Zwischen welchen Flüssen verlief der Limes?', 'Rhein und Donau', ['Elbe und Oder', 'Weser und Ems', 'Main und Neckar']],
            ],
          },
        },
      ],
    },
    {
      id: 'fruehmittelalter',
      name: 'Frühmittelalter',
      period: '5.–10. Jahrhundert',
      events: [
        {
          id: 'karl-der-grosse',
          title: 'Karl der Große',
          date: '768–814',
          text: [
            'Nach dem Untergang Westroms wurden die Franken zur stärksten Macht in Westeuropa. Karl der Große, König seit 768, erweiterte das Frankenreich durch Kriege erheblich – besonders gegen die Sachsen, die er in über dreißig Jahre dauernden Feldzügen (772–804) unterwarf und gewaltsam christianisierte.',
            'Am Weihnachtstag des Jahres 800 krönte ihn Papst Leo III. in Rom zum Kaiser; damit knüpfte er an das Römische Reich an. Karl regierte ohne feste Hauptstadt, hielt sich aber oft in Aachen auf. Seine Pfalzkapelle ist heute Teil des Aachener Doms, in dem er 814 beigesetzt wurde. Er förderte Bildung und Schrift; die damals verbreitete karolingische Minuskel ist ein Vorbild unserer Kleinbuchstaben.',
          ],
          quiz: {
            leicht: [
              ['In welchem Jahr wurde Karl der Große zum Kaiser gekrönt?', '800', ['768', '843', '962']],
              ['In welcher Stadt hielt sich Karl besonders oft auf?', 'Aachen', ['Berlin', 'München', 'Wien']],
              ['Welches Volk herrschte unter Karl?', 'Die Franken', ['Die Sachsen', 'Die Goten', 'Die Römer']],
            ],
            mittel: [
              ['Wer krönte Karl zum Kaiser?', 'Papst Leo III.', ['Papst Gregor VII.', 'Papst Urban II.', 'Papst Innozenz III.']],
              ['Gegen welchen Stamm führte Karl jahrzehntelang Krieg?', 'Die Sachsen', ['Die Alamannen', 'Die Bayern', 'Die Thüringer']],
              ['Wo ist Karl der Große begraben?', 'Im Aachener Dom', ['Im Kölner Dom', 'Im Petersdom', 'In der Kathedrale von Reims']],
            ],
            schwer: [
              ['Wie lange dauerten die Sachsenkriege?', '772–804', ['768–771', '800–814', '843–870']],
              ['Welche Schrift verbreitete sich unter Karl?', 'Die karolingische Minuskel', ['Die Fraktur', 'Die Sütterlinschrift', 'Die Runenschrift']],
              ['Wie nennt man die kulturelle Blüte unter Karl?', 'Karolingische Renaissance', ['Ottonische Renaissance', 'Staufische Klassik', 'Humanismus']],
            ],
          },
        },
        {
          id: 'vertrag-von-verdun',
          title: 'Die Teilung des Frankenreichs',
          date: '843',
          text: [
            'Nach dem Tod von Karls Sohn Ludwig dem Frommen stritten dessen Söhne um das Erbe. Im Vertrag von Verdun teilten sie das Reich 843 in drei Teile: Karl der Kahle erhielt das Westfrankenreich, aus dem Frankreich hervorging, Ludwig der Deutsche das Ostfrankenreich, den Kern des späteren Deutschlands, und Lothar I. das Mittelreich mit der Kaiserwürde, das von der Nordsee bis nach Italien reichte.',
            'Schon 842 hatten Ludwig und Karl in den Straßburger Eiden ihr Bündnis beschworen – auf Altfranzösisch und Althochdeutsch, eines der frühesten Zeugnisse beider Sprachen. Das Mittelreich zerfiel bald; Lothringen blieb lange zwischen Ost und West umkämpft. 919 wurde mit dem Sachsenherzog Heinrich I. erstmals ein Nicht-Franke ostfränkischer König.',
          ],
          quiz: {
            leicht: [
              ['In wie viele Teile wurde das Frankenreich 843 geteilt?', 'Drei', ['Zwei', 'Vier', 'Fünf']],
              ['Aus welchem Teil ging später Deutschland hervor?', 'Aus dem Ostfrankenreich', ['Aus dem Westfrankenreich', 'Aus dem Mittelreich', 'Aus Burgund']],
              ['In welchem Jahr wurde der Vertrag von Verdun geschlossen?', '843', ['800', '919', '1066']],
            ],
            mittel: [
              ['Wer erhielt das Ostfrankenreich?', 'Ludwig der Deutsche', ['Karl der Kahle', 'Lothar I.', 'Ludwig der Fromme']],
              ['Welche Region war lange zwischen Ost und West umstritten?', 'Lothringen', ['Bayern', 'Sachsen', 'Friesland']],
              ['Wer wurde 919 als erster Sachse König?', 'Heinrich I.', ['Otto I.', 'Konrad I.', 'Heinrich IV.']],
            ],
            schwer: [
              ['In welchen Sprachen wurden die Straßburger Eide geschworen?', 'Altfranzösisch und Althochdeutsch', ['Latein und Griechisch', 'Latein und Altsächsisch', 'Altfranzösisch und Latein']],
              ['Wer erhielt mit dem Mittelreich auch die Kaiserwürde?', 'Lothar I.', ['Ludwig der Deutsche', 'Karl der Kahle', 'Pippin']],
              ['Wessen Söhne teilten 843 das Reich?', 'Die Söhne Ludwigs des Frommen', ['Die Söhne Karls des Großen', 'Die Söhne Pippins', 'Die Söhne Karl Martells']],
            ],
          },
        },
      ],
    },
    {
      id: 'mittelalter',
      name: 'Hoch- und Spätmittelalter',
      period: '10.–15. Jahrhundert',
      events: [
        {
          id: 'otto-der-grosse',
          title: 'Otto der Große und das Heilige Römische Reich',
          date: '962',
          text: [
            'Heinrichs Sohn Otto I. festigte die Königsmacht, gestützt auf Bischöfe und Reichsklöster. 955 besiegte er die Ungarn, die jahrzehntelang Raubzüge unternommen hatten, in der Schlacht auf dem Lechfeld bei Augsburg. 962 ließ er sich in Rom vom Papst zum Kaiser krönen.',
            'Damit begann die Verbindung von deutschem Königtum und römischer Kaiserwürde, die bis 1806 bestand: das Heilige Römische Reich, seit dem späten 15. Jahrhundert mit dem Zusatz „Deutscher Nation“. Es war kein Nationalstaat, sondern ein Verbund vieler Herrschaften, zu dem lange auch Gebiete in Italien, Burgund und Böhmen gehörten. Otto wurde im Magdeburger Dom beigesetzt.',
          ],
          quiz: {
            leicht: [
              ['In welchem Jahr wurde Otto I. zum Kaiser gekrönt?', '962', ['800', '1077', '1356']],
              ['Wie heißt das Reich, das bis 1806 bestand?', 'Heiliges Römisches Reich', ['Deutsches Kaiserreich', 'Frankenreich', 'Habsburgerreich']],
              ['Welchen Beinamen trägt Otto I.?', 'der Große', ['der Kahle', 'der Fromme', 'Barbarossa']],
            ],
            mittel: [
              ['Wen besiegte Otto 955 auf dem Lechfeld?', 'Die Ungarn', ['Die Wikinger', 'Die Sarazenen', 'Die Dänen']],
              ['Bei welcher Stadt liegt das Lechfeld?', 'Augsburg', ['Nürnberg', 'Regensburg', 'Ulm']],
              ['Bis wann bestand das Heilige Römische Reich?', '1806', ['1648', '1815', '1871']],
            ],
            schwer: [
              ['Welcher Zusatz kam im späten 15. Jahrhundert zum Reichsnamen hinzu?', 'Deutscher Nation', ['Germanischer Völker', 'des Abendlandes', 'der Franken']],
              ['Wo ist Otto der Große begraben?', 'Im Magdeburger Dom', ['Im Aachener Dom', 'Im Speyerer Dom', 'Im Bamberger Dom']],
              ['Auf wen stützte Otto seine Herrschaft besonders?', 'Auf Bischöfe und Reichsklöster', ['Auf die Hanse', 'Auf ein stehendes Heer', 'Auf ein gewähltes Parlament']],
            ],
          },
        },
        {
          id: 'canossa',
          title: 'Der Gang nach Canossa',
          date: '1077',
          text: [
            'Im Investiturstreit stritten König und Papst darüber, wer Bischöfe einsetzen durfte. Papst Gregor VII. bestand darauf, dass dies allein Sache der Kirche sei; König Heinrich IV. sah darin einen Angriff auf seine Macht, denn Bischöfe waren zugleich wichtige weltliche Herren.',
            'Als Heinrich den Papst absetzen wollte, belegte Gregor ihn 1076 mit dem Kirchenbann – viele Fürsten wandten sich daraufhin vom König ab. Im Januar 1077 zog Heinrich im Büßergewand zur Burg Canossa in Norditalien und erreichte nach drei Tagen die Lösung vom Bann. Beigelegt wurde der Streit erst 1122 im Wormser Konkordat. „Nach Canossa gehen“ steht bis heute für einen demütigenden Bittgang.',
          ],
          quiz: {
            leicht: [
              ['Wer zog 1077 nach Canossa?', 'Heinrich IV.', ['Otto I.', 'Karl der Große', 'Friedrich Barbarossa']],
              ['Mit wem stritt der König im Investiturstreit?', 'Mit dem Papst', ['Mit dem Sultan', 'Mit dem französischen König', 'Mit der Hanse']],
              ['Was bedeutet „nach Canossa gehen“ heute?', 'Einen demütigenden Bittgang machen', ['Eine Pilgerreise antreten', 'In den Krieg ziehen', 'Ein Bündnis schließen']],
            ],
            mittel: [
              ['Welcher Papst stand Heinrich IV. gegenüber?', 'Gregor VII.', ['Leo III.', 'Urban II.', 'Innozenz III.']],
              ['Worum ging es im Investiturstreit?', 'Um die Einsetzung von Bischöfen', ['Um Steuern', 'Um die Kreuzzüge', 'Um die Kaiserwahl']],
              ['In welchem heutigen Land liegt Canossa?', 'Italien', ['Frankreich', 'Österreich', 'Schweiz']],
            ],
            schwer: [
              ['Mit welchem Vertrag endete der Investiturstreit 1122?', 'Wormser Konkordat', ['Goldene Bulle', 'Augsburger Religionsfriede', 'Vertrag von Verdun']],
              ['Womit belegte der Papst Heinrich 1076?', 'Mit dem Kirchenbann', ['Mit der Reichsacht', 'Mit einer Geldbuße', 'Mit Kerkerhaft']],
              ['Wie lange musste Heinrich vor der Burg ausharren?', 'Drei Tage', ['Einen Tag', 'Eine Woche', 'Einen Monat']],
            ],
          },
        },
        {
          id: 'goldene-bulle',
          title: 'Die Goldene Bulle',
          date: '1356',
          text: [
            'Der deutsche König wurde nicht vererbt, sondern gewählt – das führte oft zu Streit und Doppelwahlen. Kaiser Karl IV. regelte das Verfahren 1356 in der Goldenen Bulle, benannt nach ihrem goldenen Siegel.',
            'Danach wählten sieben Kurfürsten den König mit Mehrheit: die Erzbischöfe von Mainz, Köln und Trier sowie der König von Böhmen, der Pfalzgraf bei Rhein, der Herzog von Sachsen und der Markgraf von Brandenburg. Gewählt werden sollte in Frankfurt am Main, gekrönt in Aachen. Die Goldene Bulle blieb bis 1806 eines der wichtigsten Grundgesetze des Reiches und stärkte die Fürsten gegenüber dem Kaiser.',
          ],
          quiz: {
            leicht: [
              ['Wie viele Kurfürsten wählten nach der Goldenen Bulle den König?', 'Sieben', ['Drei', 'Zwölf', 'Zwanzig']],
              ['Woher hat die Goldene Bulle ihren Namen?', 'Von ihrem goldenen Siegel', ['Vom Goldrand des Papiers', 'Von einem Goldschatz', 'Vom Goldenen Saal in Frankfurt']],
              ['In welchem Jahr wurde sie erlassen?', '1356', ['1077', '1517', '1648']],
            ],
            mittel: [
              ['Welcher Kaiser erließ die Goldene Bulle?', 'Karl IV.', ['Karl V.', 'Friedrich II.', 'Otto I.']],
              ['In welcher Stadt sollte der König gewählt werden?', 'Frankfurt am Main', ['Aachen', 'Nürnberg', 'Mainz']],
              ['Wer waren die drei geistlichen Kurfürsten?', 'Die Erzbischöfe von Mainz, Köln und Trier', ['Die Bischöfe von Bamberg, Würzburg und Speyer', 'Die Erzbischöfe von Salzburg, Bremen und Magdeburg', 'Die Äbte von Fulda, Lorsch und Reichenau']],
            ],
            schwer: [
              ['Welcher weltliche Kurfürst war zugleich König?', 'Der König von Böhmen', ['Der König von Ungarn', 'Der König von Polen', 'Der König von Dänemark']],
              ['Wo sollte der König gekrönt werden?', 'In Aachen', ['In Frankfurt am Main', 'In Rom', 'In Mainz']],
              ['Bis wann galt die Goldene Bulle?', 'Bis 1806', ['Bis 1648', 'Bis 1555', 'Bis 1871']],
            ],
          },
        },
        {
          id: 'buchdruck',
          title: 'Gutenberg und der Buchdruck',
          date: 'um 1450',
          text: [
            'Um 1450 entwickelte Johannes Gutenberg in Mainz den Buchdruck mit beweglichen Metalllettern. Einzelne Buchstaben wurden in einem Handgießinstrument gegossen, zu Zeilen und Seiten zusammengesetzt und mit einer Presse auf Papier gedruckt. Sein bekanntestes Werk ist die Gutenberg-Bibel, fertig um 1454; rund 49 Exemplare sind erhalten.',
            'Bücher ließen sich nun viel schneller und billiger herstellen; bis 1500 entstanden Druckereien in ganz Europa. Ohne den Buchdruck hätten sich Humanismus und Reformation kaum so schnell ausgebreitet. Gutenberg selbst verdiente wenig daran: Nach einem Rechtsstreit verlor er seine Werkstatt an seinen Geldgeber Johann Fust.',
          ],
          quiz: {
            leicht: [
              ['Wer erfand um 1450 den Buchdruck mit beweglichen Lettern?', 'Johannes Gutenberg', ['Martin Luther', 'Albrecht Dürer', 'Jakob Fugger']],
              ['In welcher Stadt arbeitete Gutenberg?', 'Mainz', ['Köln', 'Nürnberg', 'Leipzig']],
              ['Welches Buch druckte Gutenberg besonders berühmt?', 'Die Bibel', ['Den Koran', 'Ein Wörterbuch', 'Ein Kochbuch']],
            ],
            mittel: [
              ['Woraus bestanden Gutenbergs Lettern?', 'Aus Metall', ['Aus Holz', 'Aus Ton', 'Aus Stein']],
              ['Welche spätere Bewegung profitierte besonders vom Buchdruck?', 'Die Reformation', ['Die Völkerwanderung', 'Die Kreuzzüge', 'Der Investiturstreit']],
              ['Wie viele Gutenberg-Bibeln sind heute noch erhalten?', 'Rund 50', ['Rund 5', 'Rund 500', 'Rund 5.000']],
            ],
            schwer: [
              ['An wen verlor Gutenberg seine Werkstatt?', 'An Johann Fust', ['An Jakob Fugger', 'An Peter Henlein', 'An Albrecht Dürer']],
              ['Womit wurden die einzelnen Lettern gegossen?', 'Mit dem Handgießinstrument', ['Mit dem Webstuhl', 'Mit der Drehbank', 'Mit dem Astrolabium']],
              ['Wann war die Gutenberg-Bibel ungefähr fertig?', 'Um 1454', ['Um 1400', 'Um 1492', 'Um 1517']],
            ],
          },
        },
      ],
    },
    {
      id: 'fruehe-neuzeit',
      name: 'Frühe Neuzeit',
      period: '1500–1800',
      events: [
        {
          id: 'reformation',
          title: 'Die Reformation',
          date: '1517',
          text: [
            'Am 31. Oktober 1517 veröffentlichte der Theologieprofessor Martin Luther in Wittenberg 95 Thesen gegen den Ablasshandel – den Verkauf von Sündenerlassen durch die Kirche. Dank des Buchdrucks verbreiteten sie sich in wenigen Wochen im ganzen Reich.',
            'Luther weigerte sich, seine Lehren zu widerrufen, auch 1521 auf dem Reichstag zu Worms vor Kaiser Karl V. nicht. Daraufhin wurde die Reichsacht über ihn verhängt. Kurfürst Friedrich der Weise ließ ihn zum Schein entführen und auf der Wartburg verstecken, wo Luther das Neue Testament ins Deutsche übersetzte. Aus seiner Bewegung entstand die evangelische Kirche; die Glaubensspaltung prägte Deutschland für Jahrhunderte.',
          ],
          quiz: {
            leicht: [
              ['Wer veröffentlichte 1517 die 95 Thesen?', 'Martin Luther', ['Johannes Calvin', 'Thomas Müntzer', 'Philipp Melanchthon']],
              ['Wogegen richteten sich die Thesen vor allem?', 'Gegen den Ablasshandel', ['Gegen den Kaiser', 'Gegen die Bauern', 'Gegen die Osmanen']],
              ['Welche Kirche entstand aus Luthers Bewegung?', 'Die evangelische Kirche', ['Die orthodoxe Kirche', 'Die anglikanische Kirche', 'Die katholische Kirche']],
            ],
            mittel: [
              ['In welcher Stadt veröffentlichte Luther seine Thesen?', 'Wittenberg', ['Worms', 'Eisenach', 'Erfurt']],
              ['Wo übersetzte Luther das Neue Testament?', 'Auf der Wartburg', ['In Rom', 'In Worms', 'Auf der Burg Hohenzollern']],
              ['Vor welchem Kaiser verteidigte sich Luther 1521?', 'Karl V.', ['Maximilian I.', 'Friedrich III.', 'Ferdinand I.']],
            ],
            schwer: [
              ['Wer ließ Luther zu seinem Schutz zum Schein entführen?', 'Friedrich der Weise', ['Philipp von Hessen', 'Karl V.', 'Moritz von Sachsen']],
              ['Welche Strafe wurde 1521 über Luther verhängt?', 'Die Reichsacht', ['Die Todesstrafe', 'Die Verbannung nach Rom', 'Eine Geldstrafe']],
              ['An welchem Tag veröffentlichte Luther die Thesen?', '31. Oktober 1517', ['24. Dezember 1517', '1. Mai 1521', '11. November 1517']],
            ],
          },
        },
        {
          id: 'dreissigjaehriger-krieg',
          title: 'Der Dreißigjährige Krieg',
          date: '1618–1648',
          text: [
            '1618 warfen protestantische Adlige in Prag zwei kaiserliche Statthalter aus einem Fenster der Burg – der Prager Fenstersturz. Daraus entwickelte sich ein Krieg, der dreißig Jahre dauerte. Was als Konflikt zwischen katholischen und protestantischen Reichsständen begann, wurde zu einem europäischen Machtkampf, in den Dänemark, Schweden und Frankreich eingriffen. Berühmt wurden Heerführer wie Wallenstein auf kaiserlicher und König Gustav II. Adolf von Schweden auf protestantischer Seite.',
            'Plündernde Söldnerheere, Hunger und Seuchen verwüsteten das Land; in manchen Regionen starb mehr als die Hälfte der Bevölkerung. Der Westfälische Friede von 1648, ausgehandelt in Münster und Osnabrück, stärkte die Landesherren und stellte Katholiken, Lutheraner und Reformierte rechtlich gleich.',
          ],
          quiz: {
            leicht: [
              ['Wie lange dauerte der Krieg ab 1618?', '30 Jahre', ['7 Jahre', '100 Jahre', '4 Jahre']],
              ['Mit welchem Ereignis begann er?', 'Mit dem Prager Fenstersturz', ['Mit dem Sturm auf die Bastille', 'Mit Luthers Thesen', 'Mit dem Attentat von Sarajevo']],
              ['Mit welchem Frieden endete er?', 'Westfälischer Friede', ['Augsburger Religionsfriede', 'Wiener Kongress', 'Versailler Vertrag']],
            ],
            mittel: [
              ['Welcher schwedische König griff in den Krieg ein?', 'Gustav II. Adolf', ['Karl XII.', 'Christian IV.', 'Gustav Wasa']],
              ['Wer war ein berühmter kaiserlicher Feldherr?', 'Wallenstein', ['Blücher', 'Moltke', 'Prinz Eugen']],
              ['In welchen Städten wurde der Westfälische Friede ausgehandelt?', 'Münster und Osnabrück', ['Köln und Bonn', 'Paderborn und Dortmund', 'Hannover und Bremen']],
            ],
            schwer: [
              ['Welche Konfession wurde 1648 neu gleichberechtigt anerkannt?', 'Die Reformierten', ['Die Täufer', 'Die Orthodoxen', 'Die Anglikaner']],
              ['Welches katholische Land kämpfte ab 1635 offen gegen den Kaiser?', 'Frankreich', ['Spanien', 'Polen', 'Bayern']],
              ['In welcher Stadt geschah der Fenstersturz?', 'Prag', ['Wien', 'Dresden', 'Augsburg']],
            ],
          },
        },
        {
          id: 'preussen',
          title: 'Der Aufstieg Preußens',
          date: '1701–1786',
          text: [
            'Aus dem Kurfürstentum Brandenburg entwickelte sich unter den Hohenzollern ein mächtiger Staat. 1701 krönte sich Kurfürst Friedrich III. in Königsberg zum „König in Preußen“ (als Friedrich I.). Sein Sohn Friedrich Wilhelm I., der „Soldatenkönig“, baute eine große Armee und eine sparsame Verwaltung auf.',
            'Dessen Sohn Friedrich II., „der Große“ oder „Alter Fritz“ (1740–1786), eroberte Schlesien von Österreich und behauptete es im Siebenjährigen Krieg (1756–1763). Er galt als aufgeklärter Herrscher, schaffte die Folter weitgehend ab, förderte religiöse Toleranz und ließ sich Schloss Sanssouci in Potsdam bauen. Preußen und Österreich wurden zu den großen Rivalen im Reich.',
          ],
          quiz: {
            leicht: [
              ['Welcher Preußenkönig wurde „der Alte Fritz“ genannt?', 'Friedrich II.', ['Friedrich Wilhelm I.', 'Wilhelm I.', 'Friedrich I.']],
              ['Welches Schloss ließ er in Potsdam bauen?', 'Sanssouci', ['Neuschwanstein', 'Charlottenburg', 'Versailles']],
              ['Welche Familie herrschte in Preußen?', 'Die Hohenzollern', ['Die Habsburger', 'Die Wittelsbacher', 'Die Wettiner']],
            ],
            mittel: [
              ['Wie wurde Friedrich Wilhelm I. genannt?', 'Der Soldatenkönig', ['Der Sonnenkönig', 'Der Große Kurfürst', 'Der Eiserne Kanzler']],
              ['Welche Provinz eroberte Friedrich II. von Österreich?', 'Schlesien', ['Böhmen', 'Sachsen', 'Tirol']],
              ['Wann fand der Siebenjährige Krieg statt?', '1756–1763', ['1618–1648', '1740–1748', '1813–1815']],
            ],
            schwer: [
              ['Wo krönte sich Friedrich I. 1701 zum König?', 'In Königsberg', ['In Berlin', 'In Potsdam', 'In Aachen']],
              ['Welchen Titel trug er als erster preußischer König?', 'König in Preußen', ['König von Deutschland', 'Kaiser von Preußen', 'König der Deutschen']],
              ['Was schaffte Friedrich II. kurz nach seinem Regierungsantritt weitgehend ab?', 'Die Folter', ['Die Leibeigenschaft', 'Die Zensur', 'Die Armee']],
            ],
          },
        },
      ],
    },
    {
      id: 'jh19',
      name: 'Das 19. Jahrhundert',
      period: '1800–1914',
      events: [
        {
          id: 'napoleon',
          title: 'Napoleon und die Befreiungskriege',
          date: '1806–1815',
          text: [
            'Die Kriege gegen das revolutionäre Frankreich veränderten Deutschland grundlegend. Napoleon ordnete die Landkarte neu: Viele kleine Herrschaften und geistliche Fürstentümer verschwanden, und 1806 schlossen sich 16 Staaten unter französischem Schutz zum Rheinbund zusammen. Kaiser Franz II. legte daraufhin die Krone nieder – das Heilige Römische Reich endete.',
            'Preußen wurde 1806 bei Jena und Auerstedt geschlagen und reformierte sich danach grundlegend, etwa durch die Bauernbefreiung und eine Heeresreform. Nach Napoleons gescheitertem Russlandfeldzug besiegten ihn Preußen, Russland, Österreich und Schweden 1813 in der Völkerschlacht bei Leipzig. Der Wiener Kongress schuf 1815 den Deutschen Bund, einen losen Zusammenschluss der deutschen Staaten.',
          ],
          quiz: {
            leicht: [
              ['Welcher französische Herrscher ordnete Deutschland um 1806 neu?', 'Napoleon', ['Ludwig XIV.', 'Karl der Große', 'Charles de Gaulle']],
              ['In welcher Stadt fand 1813 die Völkerschlacht statt?', 'Leipzig', ['Berlin', 'Waterloo', 'Dresden']],
              ['Welches Reich endete 1806?', 'Das Heilige Römische Reich', ['Das Deutsche Kaiserreich', 'Das Weströmische Reich', 'Das Frankenreich']],
            ],
            mittel: [
              ['Wie hieß der Bund deutscher Staaten unter französischem Schutz?', 'Rheinbund', ['Deutscher Bund', 'Norddeutscher Bund', 'Hanse']],
              ['Wo wurde Preußen 1806 geschlagen?', 'Bei Jena und Auerstedt', ['Bei Leipzig', 'Bei Waterloo', 'Bei Austerlitz']],
              ['Was schuf der Wiener Kongress 1815 für Deutschland?', 'Den Deutschen Bund', ['Das Kaiserreich', 'Den Rheinbund', 'Den Zollverein']],
            ],
            schwer: [
              ['Welcher Kaiser legte 1806 die Krone des Reiches nieder?', 'Franz II.', ['Joseph II.', 'Karl VI.', 'Leopold II.']],
              ['Wie viele Staaten gründeten 1806 den Rheinbund?', '16', ['7', '39', '100']],
              ['Welche Maßnahme gehörte zu den preußischen Reformen nach 1806?', 'Die Bauernbefreiung', ['Das Frauenwahlrecht', 'Die Sozialversicherung', 'Die Abschaffung des Adels']],
            ],
          },
        },
        {
          id: 'revolution-1848',
          title: 'Die Revolution von 1848/49',
          date: '1848–1849',
          text: [
            'Im März 1848 griffen Revolutionen aus Frankreich auf die deutschen Staaten über. Bürger, Studenten und Arbeiter forderten Pressefreiheit, Verfassungen und einen deutschen Nationalstaat; in Berlin und Wien kam es zu Barrikadenkämpfen. Im Mai 1848 trat in der Frankfurter Paulskirche die erste frei gewählte gesamtdeutsche Nationalversammlung zusammen.',
            'Sie beschloss Grundrechte und 1849 eine Reichsverfassung und bot dem preußischen König Friedrich Wilhelm IV. die Kaiserkrone an. Er lehnte ab: Eine Krone von Volkes Gnaden wollte er nicht. 1849 wurde die Revolution militärisch niedergeschlagen, zuletzt in Baden; viele Demokraten wanderten nach Amerika aus. Schwarz-Rot-Gold blieb das Symbol der Bewegung.',
          ],
          quiz: {
            leicht: [
              ['Wo tagte 1848 die Nationalversammlung?', 'In der Frankfurter Paulskirche', ['Im Berliner Reichstag', 'Im Weimarer Nationaltheater', 'Auf der Wartburg']],
              ['Welche Farben wurden zum Symbol der Bewegung?', 'Schwarz-Rot-Gold', ['Schwarz-Weiß-Rot', 'Blau-Weiß', 'Rot-Weiß-Rot']],
              ['Wer sollte Kaiser werden, lehnte aber ab?', 'Friedrich Wilhelm IV. von Preußen', ['Wilhelm I.', 'Franz Joseph I.', 'Ludwig II.']],
            ],
            mittel: [
              ['In welchem Monat 1848 begann die Revolution in Deutschland?', 'März', ['Januar', 'Juli', 'November']],
              ['Was forderten die Revolutionäre unter anderem?', 'Pressefreiheit und einen Nationalstaat', ['Die Rückkehr Napoleons', 'Mehr Macht für den Adel', 'Einen neuen Kreuzzug']],
              ['Wohin wanderten viele Demokraten nach der Revolution aus?', 'Nach Amerika', ['Nach Russland', 'Nach China', 'Nach Australien']],
            ],
            schwer: [
              ['In welchem Land wurde die Revolution 1849 zuletzt niedergeschlagen?', 'In Baden', ['In Bayern', 'In Sachsen', 'In Hamburg']],
              ['Wann trat die Nationalversammlung zum ersten Mal zusammen?', 'Im Mai 1848', ['Im März 1848', 'Im Januar 1849', 'Im Oktober 1847']],
              ['Warum lehnte der preußische König die Krone ab?', 'Er wollte keine Krone vom Volk', ['Er war zu krank', 'Er wollte Präsident werden', 'Österreich verbot es ihm']],
            ],
          },
        },
        {
          id: 'reichsgruendung',
          title: 'Die Gründung des Kaiserreichs',
          date: '1871',
          text: [
            'Der preußische Ministerpräsident Otto von Bismarck wollte die deutsche Einheit „durch Eisen und Blut“ erreichen – unter preußischer Führung und ohne Österreich. Nach Kriegen gegen Dänemark (1864) und Österreich (1866) entstand 1867 der Norddeutsche Bund. Im Deutsch-Französischen Krieg 1870/71 kämpften auch die süddeutschen Staaten an der Seite Preußens.',
            'Am 18. Januar 1871 wurde König Wilhelm I. im Spiegelsaal von Versailles zum Deutschen Kaiser ausgerufen, Bismarck wurde erster Reichskanzler. Frankreich musste Elsass-Lothringen abtreten – eine schwere Belastung für das Verhältnis der Nachbarn. Das Kaiserreich war ein Bundesstaat mit einem Reichstag, den alle Männer ab 25 Jahren wählen durften.',
          ],
          quiz: {
            leicht: [
              ['In welchem Jahr wurde das Deutsche Kaiserreich gegründet?', '1871', ['1848', '1806', '1918']],
              ['Wer war der erste Reichskanzler?', 'Otto von Bismarck', ['Wilhelm II.', 'Konrad Adenauer', 'Friedrich Ebert']],
              ['Wo wurde Wilhelm I. zum Kaiser ausgerufen?', 'Im Spiegelsaal von Versailles', ['Im Berliner Schloss', 'In der Paulskirche', 'Im Aachener Dom']],
            ],
            mittel: [
              ['Welches Land gehörte nicht zum neuen Reich?', 'Österreich', ['Bayern', 'Sachsen', 'Württemberg']],
              ['Welches Gebiet musste Frankreich abtreten?', 'Elsass-Lothringen', ['Burgund', 'Savoyen', 'Flandern']],
              ['Wie wollte Bismarck die Einheit erreichen?', '„Durch Eisen und Blut“', ['„Durch Verhandlungen allein“', '„Durch eine Volksabstimmung“', '„Durch Heiratspolitik“']],
            ],
            schwer: [
              ['An welchem Tag wurde das Reich ausgerufen?', '18. Januar 1871', ['3. Oktober 1871', '9. November 1871', '1. Mai 1871']],
              ['Gegen welches Land führte Preußen 1864 Krieg?', 'Dänemark', ['Russland', 'Schweden', 'Österreich']],
              ['Welcher Bund entstand 1867?', 'Der Norddeutsche Bund', ['Der Rheinbund', 'Der Deutsche Bund', 'Der Zollverein']],
            ],
          },
        },
      ],
    },
    {
      id: 'weltkriege',
      name: 'Weltkriege und Weimarer Republik',
      period: '1914–1945',
      events: [
        {
          id: 'erster-weltkrieg',
          title: 'Erster Weltkrieg und Novemberrevolution',
          date: '1914–1918',
          text: [
            'Nach dem Attentat von Sarajevo im Juni 1914 erklärte Deutschland an der Seite Österreich-Ungarns Russland und Frankreich den Krieg. Im Westen erstarrte die Front bald in einem verlustreichen Stellungskrieg; Schlachten wie die um Verdun 1916 kosteten Hunderttausende das Leben. 1917 traten die USA in den Krieg ein.',
            'Im Herbst 1918 war das Deutsche Reich militärisch am Ende. Matrosen meuterten in Kiel, die Revolution breitete sich aus, und am 9. November 1918 rief Philipp Scheidemann in Berlin die Republik aus; Kaiser Wilhelm II. ging ins Exil. Am 11. November wurde der Waffenstillstand unterzeichnet. Rund zwei Millionen deutsche Soldaten waren gefallen.',
          ],
          quiz: {
            leicht: [
              ['In welchem Jahr begann der Erste Weltkrieg?', '1914', ['1918', '1939', '1871']],
              ['Welcher Kaiser musste 1918 abdanken?', 'Wilhelm II.', ['Wilhelm I.', 'Franz Joseph I.', 'Friedrich III.']],
              ['Was wurde am 9. November 1918 ausgerufen?', 'Die Republik', ['Das Kaiserreich', 'Der Krieg', 'Die Monarchie']],
            ],
            mittel: [
              ['Wo meuterten 1918 die Matrosen?', 'In Kiel', ['In Hamburg', 'In Bremen', 'In Rostock']],
              ['Welche Schlacht von 1916 steht für den Stellungskrieg?', 'Verdun', ['Waterloo', 'Sedan', 'Stalingrad']],
              ['Welches Land trat 1917 in den Krieg ein?', 'Die USA', ['Japan', 'Spanien', 'Schweden']],
            ],
            schwer: [
              ['Wer rief am 9. November 1918 die Republik aus?', 'Philipp Scheidemann', ['Gustav Stresemann', 'Paul von Hindenburg', 'Walther Rathenau']],
              ['Wann wurde der Waffenstillstand unterzeichnet?', '11. November 1918', ['9. November 1918', '28. Juni 1919', '1. August 1914']],
              ['An der Seite welches Landes zog Deutschland in den Krieg?', 'Österreich-Ungarn', ['Frankreich', 'Großbritannien', 'Russland']],
            ],
          },
        },
        {
          id: 'weimar',
          title: 'Die Weimarer Republik',
          date: '1919–1933',
          text: [
            '1919 gab sich Deutschland in Weimar eine demokratische Verfassung; erstmals durften auch Frauen wählen. Erster Reichspräsident wurde Friedrich Ebert. Die junge Republik trug schwere Lasten: den Versailler Vertrag mit Gebietsverlusten und Reparationen, politische Morde und Putschversuche von links und rechts. 1923 erreichte die Inflation ihren Höhepunkt – ein Brot kostete zeitweise Milliarden Mark.',
            'Nach einer Währungsreform folgten die „Goldenen Zwanziger“ mit wirtschaftlicher Erholung und kultureller Blüte – vom Bauhaus bis zum Kino. Außenminister Gustav Stresemann verbesserte die Beziehungen zu Frankreich. Die Weltwirtschaftskrise ab 1929 brachte Massenarbeitslosigkeit und stärkte radikale Parteien, vor allem die NSDAP.',
          ],
          quiz: {
            leicht: [
              ['In welcher Stadt wurde 1919 die Verfassung beschlossen?', 'Weimar', ['Berlin', 'Bonn', 'Frankfurt am Main']],
              ['Wer durfte 1919 zum ersten Mal wählen?', 'Frauen', ['Kinder', 'Ausländer', 'Beamte']],
              ['In welchem Jahr erreichte die Inflation ihren Höhepunkt?', '1923', ['1919', '1929', '1933']],
            ],
            mittel: [
              ['Wer war der erste Reichspräsident?', 'Friedrich Ebert', ['Paul von Hindenburg', 'Gustav Stresemann', 'Otto von Bismarck']],
              ['Welche Krise begann 1929?', 'Die Weltwirtschaftskrise', ['Die Ölkrise', 'Die Kubakrise', 'Die Finanzkrise']],
              ['Wie nennt man die Jahre der Erholung Mitte der 1920er?', 'Die Goldenen Zwanziger', ['Die Gründerzeit', 'Das Wirtschaftswunder', 'Die Belle Époque']],
            ],
            schwer: [
              ['Welcher Außenminister verbesserte die Beziehungen zu Frankreich?', 'Gustav Stresemann', ['Franz von Papen', 'Heinrich Brüning', 'Matthias Erzberger']],
              ['Welche Kunstschule wurde 1919 in Weimar gegründet?', 'Das Bauhaus', ['Die Brücke', 'Der Blaue Reiter', 'Der Werkbund']],
              ['Was beendete die Hyperinflation 1923?', 'Eine Währungsreform', ['Die Einführung des Euro', 'Der Marshallplan', 'Ein Krieg']],
            ],
          },
        },
        {
          id: 'ns-zeit',
          title: 'NS-Diktatur, Holocaust und Zweiter Weltkrieg',
          date: '1933–1945',
          text: [
            'Am 30. Januar 1933 wurde Adolf Hitler Reichskanzler. Innerhalb weniger Monate zerschlugen die Nationalsozialisten die Demokratie: Nach dem Reichstagsbrand wurden Grundrechte außer Kraft gesetzt, das Ermächtigungsgesetz erlaubte der Regierung, Gesetze ohne Parlament zu erlassen, Parteien und Gewerkschaften wurden verboten. Jüdinnen und Juden wurden entrechtet – etwa durch die Nürnberger Gesetze 1935 – und im November 1938 in den Novemberpogromen verfolgt.',
            'Mit dem Überfall auf Polen am 1. September 1939 begann der Zweite Weltkrieg. Im Holocaust ermordeten Deutsche und ihre Helfer rund sechs Millionen europäische Juden, dazu Hunderttausende Sinti und Roma und viele weitere Menschen, unter anderem im Vernichtungslager Auschwitz-Birkenau. Widerstand wie das Attentat vom 20. Juli 1944 scheiterte. Am 8. Mai 1945 kapitulierte die Wehrmacht bedingungslos.',
          ],
          quiz: {
            leicht: [
              ['In welchem Jahr wurde Hitler Reichskanzler?', '1933', ['1923', '1939', '1945']],
              ['Mit dem Überfall auf welches Land begann der Zweite Weltkrieg?', 'Polen', ['Frankreich', 'Sowjetunion', 'Großbritannien']],
              ['An welchem Tag endete der Krieg in Europa?', '8. Mai 1945', ['9. November 1945', '1. September 1945', '20. Juli 1944']],
            ],
            mittel: [
              ['Wie viele Juden wurden im Holocaust ermordet?', 'Rund sechs Millionen', ['Rund 600.000', 'Rund 60.000', 'Rund 20 Millionen']],
              ['Welches Gesetz erlaubte der Regierung, Gesetze ohne Parlament zu erlassen?', 'Das Ermächtigungsgesetz', ['Das Grundgesetz', 'Die Nürnberger Gesetze', 'Das Sozialistengesetz']],
              ['Was geschah am 20. Juli 1944?', 'Ein Attentat auf Hitler', ['Die Landung in der Normandie', 'Die Kapitulation', 'Der Reichstagsbrand']],
            ],
            schwer: [
              ['In welchem Jahr wurden die Nürnberger Gesetze erlassen?', '1935', ['1933', '1938', '1941']],
              ['In welchem Monat 1938 fanden die Novemberpogrome statt?', 'November', ['Januar', 'Mai', 'September']],
              ['Welches Ereignis nutzten die Nationalsozialisten 1933, um Grundrechte aufzuheben?', 'Den Reichstagsbrand', ['Das Attentat von Sarajevo', 'Den Börsencrash', 'Die Olympischen Spiele']],
            ],
          },
        },
      ],
    },
    {
      id: 'nachkriegszeit',
      name: 'Teilung und Einheit',
      period: 'seit 1945',
      events: [
        {
          id: 'zwei-staaten',
          title: 'Zwei deutsche Staaten',
          date: '1945–1961',
          text: [
            'Nach der Kapitulation teilten die Siegermächte USA, Sowjetunion, Großbritannien und Frankreich Deutschland und Berlin in vier Besatzungszonen. Millionen Deutsche aus den früheren Ostgebieten flohen oder wurden vertrieben. Als die Westmächte 1948 eine Währungsreform durchführten, sperrte die Sowjetunion die Zugänge nach West-Berlin; die USA und Großbritannien versorgten die Stadt fast ein Jahr lang über die Luftbrücke.',
            '1949 entstanden zwei Staaten: im Westen die Bundesrepublik Deutschland mit dem Grundgesetz und Bundeskanzler Konrad Adenauer, im Osten die Deutsche Demokratische Republik (DDR) unter Führung der SED. Die Bundesrepublik erlebte ein „Wirtschaftswunder“; in der DDR wurde der Volksaufstand vom 17. Juni 1953 mit sowjetischen Panzern niedergeschlagen. Am 13. August 1961 riegelte die DDR West-Berlin mit dem Bau der Mauer ab.',
          ],
          quiz: {
            leicht: [
              ['In wie viele Besatzungszonen wurde Deutschland geteilt?', 'Vier', ['Zwei', 'Drei', 'Fünf']],
              ['In welchem Jahr wurden Bundesrepublik und DDR gegründet?', '1949', ['1945', '1955', '1961']],
              ['Wer war der erste Bundeskanzler?', 'Konrad Adenauer', ['Willy Brandt', 'Ludwig Erhard', 'Helmut Kohl']],
            ],
            mittel: [
              ['Wie wurde West-Berlin 1948/49 versorgt?', 'Über die Luftbrücke', ['Über den Rhein', 'Durch Tunnel', 'Über die Ostsee']],
              ['Welche Partei führte die DDR?', 'Die SED', ['Die SPD', 'Die CDU', 'Die FDP']],
              ['Was geschah am 17. Juni 1953 in der DDR?', 'Ein Volksaufstand', ['Der Mauerbau', 'Die Staatsgründung', 'Die Währungsreform']],
            ],
            schwer: [
              ['Was war der Anlass für die Berlin-Blockade 1948?', 'Die Währungsreform im Westen', ['Der Mauerbau', 'Die Gründung der NATO', 'Die Wahl Adenauers']],
              ['An welchem Tag begann der Bau der Mauer?', '13. August 1961', ['9. November 1961', '17. Juni 1961', '3. Oktober 1961']],
              ['Wie nennt man den schnellen Aufschwung der Bundesrepublik in den 1950ern?', 'Wirtschaftswunder', ['Gründerzeit', 'Goldene Zwanziger', 'New Deal']],
            ],
          },
        },
        {
          id: 'westbindung',
          title: 'Westbindung und europäische Einigung',
          date: '1951–2002',
          text: [
            'Die Bundesrepublik band sich unter Adenauer eng an den Westen: 1951 gründete sie mit Frankreich, Italien und den Benelux-Staaten die Europäische Gemeinschaft für Kohle und Stahl (Montanunion), 1955 trat sie der NATO bei, und 1957 unterzeichnete sie die Römischen Verträge zur Europäischen Wirtschaftsgemeinschaft. Der Élysée-Vertrag von 1963 besiegelte die deutsch-französische Freundschaft.',
            'Willy Brandt suchte mit seiner Ostpolitik den Ausgleich mit Polen, der Sowjetunion und der DDR und erhielt dafür 1971 den Friedensnobelpreis. Nach der Einheit wurde Berlin Hauptstadt; Bundestag und Regierung zogen 1999 dorthin. Seit 2002 zahlt man in Deutschland mit Euro-Bargeld.',
          ],
          quiz: {
            leicht: [
              ['Mit welchem Nachbarland schloss Deutschland 1963 einen Freundschaftsvertrag?', 'Frankreich', ['Polen', 'Österreich', 'Dänemark']],
              ['Welche Stadt ist seit der Einheit Hauptstadt?', 'Berlin', ['Bonn', 'Frankfurt am Main', 'München']],
              ['Seit wann gibt es in Deutschland Euro-Bargeld?', '2002', ['1990', '1999', '2010']],
            ],
            mittel: [
              ['Welchem Bündnis trat die Bundesrepublik 1955 bei?', 'Der NATO', ['Dem Warschauer Pakt', 'Dem Rheinbund', 'Dem Comecon']],
              ['Welcher Kanzler erhielt für seine Ostpolitik den Friedensnobelpreis?', 'Willy Brandt', ['Helmut Schmidt', 'Konrad Adenauer', 'Helmut Kohl']],
              ['Wie wurde die Gemeinschaft für Kohle und Stahl auch genannt?', 'Montanunion', ['Hanse', 'Zollverein', 'Comecon']],
            ],
            schwer: [
              ['Wann zogen Bundestag und Regierung nach Berlin?', '1999', ['1990', '1994', '2005']],
              ['Wie heißt der deutsch-französische Freundschaftsvertrag?', 'Élysée-Vertrag', ['Vertrag von Locarno', 'Moskauer Vertrag', 'Vertrag von Rapallo']],
              ['In welchem Jahr erhielt Willy Brandt den Friedensnobelpreis?', '1971', ['1961', '1969', '1989']],
            ],
          },
        },
        {
          id: 'friedliche-revolution',
          title: 'Friedliche Revolution und Wiedervereinigung',
          date: '1989–1990',
          text: [
            'In den 1980er Jahren wuchs in der DDR die Unzufriedenheit über fehlende Freiheit und schlechte Versorgung. Die Reformpolitik Michail Gorbatschows in der Sowjetunion ermutigte die Opposition. Im Sommer 1989 flohen Tausende über Ungarn in den Westen oder suchten Zuflucht in westdeutschen Botschaften. In Leipzig gingen bei den Montagsdemonstrationen Zehntausende auf die Straße und riefen „Wir sind das Volk“.',
            'Am 9. November 1989 öffnete sich nach einer missverständlichen Pressekonferenz von Günter Schabowski die Mauer. Im März 1990 fanden die ersten freien Volkskammerwahlen statt, im Juli folgte die Währungsunion. Am 3. Oktober 1990 trat die DDR der Bundesrepublik bei – Deutschland war wiedervereinigt. Bundeskanzler war Helmut Kohl.',
          ],
          quiz: {
            leicht: [
              ['An welchem Tag fiel die Berliner Mauer?', '9. November 1989', ['3. Oktober 1990', '13. August 1961', '17. Juni 1953']],
              ['Seit welchem Tag ist Deutschland wiedervereinigt?', '3. Oktober 1990', ['9. November 1989', '1. Januar 1991', '8. Mai 1945']],
              ['Wer gilt als „Kanzler der Einheit“?', 'Helmut Kohl', ['Willy Brandt', 'Gerhard Schröder', 'Helmut Schmidt']],
            ],
            mittel: [
              ['In welcher Stadt fanden die großen Montagsdemonstrationen statt?', 'Leipzig', ['Rostock', 'Erfurt', 'Magdeburg']],
              ['Welcher Ruf wurde zum Motto der Demonstrierenden?', '„Wir sind das Volk“', ['„Freiheit für alle“', '„Nie wieder Krieg“', '„Alle Macht den Räten“']],
              ['Über welches Land flohen 1989 viele DDR-Bürger in den Westen?', 'Ungarn', ['Rumänien', 'Bulgarien', 'Sowjetunion']],
            ],
            schwer: [
              ['Wessen Pressekonferenz führte zur Öffnung der Mauer?', 'Günter Schabowski', ['Erich Honecker', 'Egon Krenz', 'Hans Modrow']],
              ['Wann fanden die ersten freien Volkskammerwahlen statt?', 'Im März 1990', ['Im Oktober 1989', 'Im Dezember 1990', 'Im Juni 1953']],
              ['Welche Union trat im Juli 1990 vor der Einheit in Kraft?', 'Die Währungsunion', ['Die Europäische Union', 'Die Zollunion', 'Die Verteidigungsunion']],
            ],
          },
        },
      ],
    },
  ],
};
