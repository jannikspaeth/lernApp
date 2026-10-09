import type { CountryHistory } from './types';

export const MX_ALT: CountryHistory = {
  code: 'MX',
  epochs: [
    {
      id: 'hochkulturen',
      name: 'Hochkulturen und Eroberung',
      period: 'bis 1810',
      events: [
        {
          id: 'azteken',
          title: 'Maya, Teotihuacán und die Azteken',
          date: 'bis 1519',
          text: [
            'In Mexiko entstanden schon früh Hochkulturen. Die Olmeken gelten als „Mutterkultur“ Mesoamerikas. Die Maya im Süden und auf der Halbinsel Yucatán entwickelten eine Schrift, einen genauen Kalender und Städte mit Stufenpyramiden wie Palenque und später Chichén Itzá. Bei Mexiko-Stadt lag Teotihuacán mit der Sonnenpyramide, um 500 n. Chr. eine der größten Städte der Welt.',
            'Die Azteken, die sich selbst Mexica nannten, gründeten der Überlieferung nach 1325 auf einer Insel im Texcoco-See ihre Hauptstadt Tenochtitlan – laut Legende dort, wo ein Adler auf einem Kaktus eine Schlange fraß; dieses Bild ziert heute die mexikanische Flagge. Ihr Reich beherrschte im 15. Jahrhundert große Teile Zentralmexikos.',
          ],
          quiz: {
            leicht: [
              ['Welches Bild zeigt die mexikanische Flagge?', 'Einen Adler auf einem Kaktus', ['Einen Jaguar', 'Eine Sonne', 'Ein Ahornblatt']],
              ['Wie hieß die Hauptstadt der Azteken?', 'Tenochtitlan', ['Cusco', 'Machu Picchu', 'Tikal']],
              ['Welche Kultur entwickelte einen berühmten Kalender und eine Schrift?', 'Die Maya', ['Die Wikinger', 'Die Kelten', 'Die Hunnen']],
            ],
            mittel: [
              ['Welche große Stadt mit Sonnenpyramide lag bei Mexiko-Stadt?', 'Teotihuacán', ['Palenque', 'Chichén Itzá', 'Tikal']],
              ['Welche Kultur gilt als „Mutterkultur“ Mesoamerikas?', 'Die Olmeken', ['Die Azteken', 'Die Tolteken', 'Die Inka']],
              ['Auf welcher Halbinsel lebten viele Maya?', 'Auf Yucatán', ['Auf Baja California', 'Auf Florida', 'Auf der Iberischen Halbinsel']],
            ],
            schwer: [
              ['Wann wurde Tenochtitlan der Überlieferung nach gegründet?', '1325', ['1521', '500', '1100']],
              ['In welchem See lag Tenochtitlan?', 'Im Texcoco-See', ['Im Titicacasee', 'Im Nicaraguasee', 'Im Chapala-See']],
              ['Wie nannten sich die Azteken selbst?', 'Mexica', ['Maya', 'Tolteken', 'Olmeken']],
            ],
          },
        },
        {
          id: 'eroberung',
          title: 'Die spanische Eroberung',
          date: '1519–1810',
          text: [
            '1519 landete Hernán Cortés mit rund 500 Männern an der Küste. Mit Hilfe einheimischer Verbündeter wie der Tlaxcalteken, die die Azteken als Unterdrücker sahen, und seiner Übersetzerin Malinche zog er nach Tenochtitlan, wo ihn Herrscher Moctezuma II. empfing. Nach Moctezumas Tod und schweren Kämpfen eroberten die Spanier 1521 die Stadt. Eingeschleppte Krankheiten wie die Pocken töteten Millionen Menschen.',
            'Auf den Ruinen Tenochtitlans entstand Mexiko-Stadt, Hauptstadt des Vizekönigreichs Neuspanien. Die Spanier verbreiteten den katholischen Glauben; 1531 soll einem Indigenen die Jungfrau von Guadalupe erschienen sein, bis heute Nationalheilige. Silber aus Minen wie Zacatecas machte die Kolonie reich, während Einheimische zur Arbeit gezwungen wurden.',
          ],
          quiz: {
            leicht: [
              ['Wer eroberte das Aztekenreich?', 'Hernán Cortés', ['Francisco Pizarro', 'Christoph Kolumbus', 'Vasco da Gama']],
              ['Welche Stadt entstand auf den Ruinen Tenochtitlans?', 'Mexiko-Stadt', ['Cancún', 'Acapulco', 'Guadalajara']],
              ['Was tötete Millionen Einheimische?', 'Eingeschleppte Krankheiten', ['Erdbeben', 'Vulkane', 'Hurrikane']],
            ],
            mittel: [
              ['Welcher Aztekenherrscher empfing Cortés?', 'Moctezuma II.', ['Atahualpa', 'Pachacútec', 'Huáscar']],
              ['Wie hieß Cortés’ Übersetzerin?', 'Malinche', ['Pocahontas', 'Frida', 'Guadalupe']],
              ['In welchem Jahr fiel Tenochtitlan?', '1521', ['1492', '1519', '1600']],
            ],
            schwer: [
              ['Wie hieß das spanische Vizekönigreich in Mexiko?', 'Neuspanien', ['Neugranada', 'Neukastilien', 'Neuandalusien']],
              ['Welches Volk verbündete sich mit Cortés?', 'Die Tlaxcalteken', ['Die Inka', 'Die Maya', 'Die Apachen']],
              ['Wer ist Mexikos Nationalheilige?', 'Die Jungfrau von Guadalupe', ['Die heilige Theresa', 'Maria Magdalena', 'Die Jungfrau von Fátima']],
            ],
          },
        },
      ],
    },
    {
      id: 'unabhaengigkeit',
      name: 'Unabhängigkeit und Revolution',
      period: '1810–2000',
      events: [
        {
          id: 'grito',
          title: 'Die Unabhängigkeit',
          date: '1810–1824',
          text: [
            'In der Nacht zum 16. September 1810 rief der Priester Miguel Hidalgo in der Stadt Dolores mit dem „Grito de Dolores“ (Schrei von Dolores) zum Aufstand gegen die spanische Herrschaft auf. Tausende Bauern und Indigene schlossen sich an. Hidalgo wurde 1811 gefangen und hingerichtet; der Priester José María Morelos führte den Kampf weiter und forderte die Abschaffung der Sklaverei, bis auch er 1815 hingerichtet wurde.',
            'Erst 1821 wurde Mexiko unabhängig, als der konservative Offizier Agustín de Iturbide die Seiten wechselte und mit den Aufständischen einen Kompromiss schloss. Er ließ sich 1822 zum Kaiser krönen, wurde aber schon 1823 gestürzt; 1824 wurde Mexiko Republik. Der 16. September ist heute Nationalfeiertag.',
          ],
          quiz: {
            leicht: [
              ['Wer rief 1810 zum Aufstand auf?', 'Miguel Hidalgo', ['Hernán Cortés', 'Pancho Villa', 'Benito Juárez']],
              ['Von welchem Land wurde Mexiko unabhängig?', 'Von Spanien', ['Von Frankreich', 'Von den USA', 'Von Portugal']],
              ['In welchem Jahr wurde Mexiko unabhängig?', '1821', ['1810', '1776', '1910']],
            ],
            mittel: [
              ['Wie heißt Hidalgos berühmter Aufruf?', 'Grito de Dolores', ['Viva Zapata', 'Cinco de Mayo', 'Tierra y Libertad']],
              ['An welchem Tag ist der mexikanische Nationalfeiertag?', '16. September', ['5. Mai', '4. Juli', '12. Oktober']],
              ['Welchen Beruf hatte Miguel Hidalgo?', 'Priester', ['General', 'Bauer', 'Kaufmann']],
            ],
            schwer: [
              ['Wer ließ sich 1822 zum Kaiser krönen?', 'Agustín de Iturbide', ['Maximilian', 'Antonio López de Santa Anna', 'Porfirio Díaz']],
              ['Welcher Priester führte den Kampf nach Hidalgo weiter?', 'José María Morelos', ['Emiliano Zapata', 'Benito Juárez', 'Francisco Madero']],
              ['Wann wurde Mexiko Republik?', '1824', ['1810', '1821', '1867']],
            ],
          },
        },
        {
          id: 'juarez',
          title: 'Krieg mit den USA, Juárez und Maximilian',
          date: '1836–1911',
          text: [
            '1836 spaltete sich Texas von Mexiko ab. Im Krieg mit den USA (1846–1848) verlor Mexiko rund die Hälfte seines Gebiets, darunter Kalifornien, Nevada, Utah und Teile von Arizona und New Mexico. Der liberale Präsident Benito Juárez, ein Zapoteke und erster indigener Präsident des Landes, trennte Kirche und Staat.',
            'Als Mexiko seine Schulden nicht zahlen konnte, griff Frankreich unter Napoleon III. ein. Ein Sieg der Mexikaner bei Puebla am 5. Mai 1862 wird als „Cinco de Mayo“ gefeiert. Dennoch setzte Frankreich 1864 den österreichischen Erzherzog Maximilian als Kaiser ein; nach dem Abzug der Franzosen wurde er 1867 erschossen. Danach regierte Porfirio Díaz das Land von 1876 bis 1911 fast ununterbrochen als Diktator.',
          ],
          quiz: {
            leicht: [
              ['Gegen welches Land verlor Mexiko 1846–1848 einen Krieg?', 'Gegen die USA', ['Gegen Spanien', 'Gegen Frankreich', 'Gegen Guatemala']],
              ['Was feiert man am „Cinco de Mayo“?', 'Einen Sieg über Frankreich', ['Die Unabhängigkeit', 'Die Revolution', 'Die Gründung Tenochtitlans']],
              ['Welcher Österreicher wurde Kaiser von Mexiko?', 'Maximilian', ['Franz Joseph', 'Rudolf', 'Karl']],
            ],
            mittel: [
              ['Wie viel seines Gebiets verlor Mexiko an die USA?', 'Rund die Hälfte', ['Ein Zehntel', 'Drei Viertel', 'Ein Prozent']],
              ['Wer war der erste indigene Präsident Mexikos?', 'Benito Juárez', ['Porfirio Díaz', 'Miguel Hidalgo', 'Emiliano Zapata']],
              ['Welcher Diktator regierte von 1876 bis 1911?', 'Porfirio Díaz', ['Antonio López de Santa Anna', 'Benito Juárez', 'Victoriano Huerta']],
            ],
            schwer: [
              ['Wann spaltete sich Texas ab?', '1836', ['1848', '1810', '1867']],
              ['Wann wurde Maximilian erschossen?', '1867', ['1864', '1848', '1876']],
              ['Welchem Volk gehörte Benito Juárez an?', 'Den Zapoteken', ['Den Azteken', 'Den Maya', 'Den Apachen']],
            ],
          },
        },
        {
          id: 'revolution',
          title: 'Die Mexikanische Revolution',
          date: '1910–2000',
          text: [
            '1910 begann gegen den Diktator Díaz die Mexikanische Revolution. Sie wurde zu einem jahrelangen, blutigen Bürgerkrieg, in dem rund eine Million Menschen starben. Berühmte Anführer waren Emiliano Zapata im Süden, der Land für die Bauern forderte („Tierra y Libertad“), und Pancho Villa im Norden. 1917 erhielt Mexiko eine fortschrittliche Verfassung mit Landreform und Arbeiterrechten.',
            'Ab 1929 regierte die Partei, die später PRI hieß, über 70 Jahre ununterbrochen. Präsident Lázaro Cárdenas verstaatlichte 1938 die Ölindustrie. In dieser Zeit wurden Künstler wie Diego Rivera mit großen Wandgemälden und Frida Kahlo weltberühmt. 1994 trat das Freihandelsabkommen NAFTA mit den USA und Kanada in Kraft; im Jahr 2000 verlor die PRI erstmals die Präsidentschaftswahl.',
          ],
          quiz: {
            leicht: [
              ['Welcher Revolutionär forderte Land für die Bauern?', 'Emiliano Zapata', ['Pancho Villa', 'Benito Juárez', 'Hernán Cortés']],
              ['Welche berühmte Malerin stammte aus Mexiko?', 'Frida Kahlo', ['Georgia O’Keeffe', 'Paula Modersohn-Becker', 'Tamara de Lempicka']],
              ['Wann begann die Mexikanische Revolution?', '1910', ['1810', '1846', '1968']],
            ],
            mittel: [
              ['Welcher Revolutionär kämpfte im Norden?', 'Pancho Villa', ['Emiliano Zapata', 'Miguel Hidalgo', 'Fidel Castro']],
              ['Was verstaatlichte Präsident Cárdenas 1938?', 'Die Ölindustrie', ['Die Banken', 'Die Eisenbahn', 'Die Kirche']],
              ['Welche Partei regierte über 70 Jahre?', 'Die PRI', ['Die PAN', 'Die Kongresspartei', 'Die Peronisten']],
            ],
            schwer: [
              ['Wie lautete Zapatas Losung?', '„Tierra y Libertad“', ['„Viva la Revolución“', '„Patria o Muerte“', '„Grito de Dolores“']],
              ['Welcher Maler schuf große Wandgemälde?', 'Diego Rivera', ['Pablo Picasso', 'Salvador Dalí', 'Fernando Botero']],
              ['Welches Freihandelsabkommen trat 1994 in Kraft?', 'NAFTA', ['Mercosur', 'EFTA', 'ASEAN']],
            ],
          },
        },
      ],
    },
  ],
};
