import type { CountryHistory } from './types';

export const BR: CountryHistory = {
  code: 'BR',
  epochs: [
    {
      id: 'kolonie',
      name: 'Kolonie und Kaiserreich',
      period: '1500–1889',
      events: [
        {
          id: 'kolonie',
          title: 'Die portugiesische Kolonie',
          date: '1500–1808',
          text: [
            'Am 22. April 1500 landete der portugiesische Seefahrer Pedro Álvares Cabral an der Küste des heutigen Brasilien. Das Land erhielt seinen Namen vom Brasilholz, aus dem ein roter Farbstoff gewonnen wurde. Ab der Mitte des 16. Jahrhunderts entstanden im Nordosten große Zuckerrohrplantagen; die indigene Bevölkerung wurde versklavt oder durch Krankheiten dezimiert.',
            'Für die Plantagen verschleppten die Portugiesen Millionen Menschen aus Afrika: Brasilien nahm rund vier bis fünf Millionen versklavte Afrikaner auf – mehr als jedes andere Land der Welt. Entflohene Sklaven gründeten eigene Siedlungen, Quilombos; die größte, Palmares, bestand fast ein Jahrhundert lang. Im 18. Jahrhundert löste ein Goldrausch in Minas Gerais einen neuen Boom aus.',
          ],
          quiz: {
            leicht: [
              ['Wer landete 1500 in Brasilien?', 'Pedro Álvares Cabral', ['Christoph Kolumbus', 'Vasco da Gama', 'Hernán Cortés']],
              ['Welches Land kolonisierte Brasilien?', 'Portugal', ['Spanien', 'Frankreich', 'Die Niederlande']],
              ['Woher hat Brasilien seinen Namen?', 'Vom Brasilholz', ['Von einem König', 'Von einem Fluss', 'Von einem Vulkan']],
            ],
            mittel: [
              ['Was wurde auf den Plantagen im Nordosten zuerst vor allem angebaut?', 'Zuckerrohr', ['Tee', 'Reis', 'Weizen']],
              ['Wie hießen Siedlungen entflohener Sklaven?', 'Quilombos', ['Favelas', 'Haciendas', 'Missionen']],
              ['In welcher Region gab es im 18. Jahrhundert einen Goldrausch?', 'In Minas Gerais', ['In Amazonien', 'In Bahia', 'In Rio Grande do Sul']],
            ],
            schwer: [
              ['Wie viele versklavte Afrikaner wurden nach Brasilien verschleppt?', 'Rund vier bis fünf Millionen', ['Rund 40.000', 'Rund 400.000', 'Rund 40 Millionen']],
              ['Wie hieß die größte Siedlung entflohener Sklaven?', 'Palmares', ['Ipanema', 'Salvador', 'Olinda']],
              ['An welchem Tag landete Cabral?', '22. April 1500', ['12. Oktober 1492', '7. September 1500', '1. Januar 1500']],
            ],
          },
        },
        {
          id: 'unabhaengigkeit',
          title: 'Königshof in Rio und Unabhängigkeit',
          date: '1808–1822',
          text: [
            'Als Napoleons Truppen 1807 Portugal angriffen, floh die portugiesische Königsfamilie mit Tausenden Höflingen über den Atlantik. 1808 kam sie in Rio de Janeiro an, das damit Hauptstadt des gesamten portugiesischen Reiches wurde – der einzige Fall, in dem eine europäische Monarchie von ihrer Kolonie aus regierte. Häfen wurden geöffnet, Druckereien und Hochschulen gegründet.',
            '1821 kehrte König Johann VI. nach Lissabon zurück und ließ seinen Sohn Pedro als Regenten zurück. Als Portugal Brasilien wieder zur bloßen Kolonie machen wollte, erklärte Pedro am 7. September 1822 am Fluss Ipiranga bei São Paulo die Unabhängigkeit („Unabhängigkeit oder Tod!“). Er wurde als Pedro I. Kaiser von Brasilien; das Land blieb bis 1889 ein Kaiserreich.',
          ],
          quiz: {
            leicht: [
              ['Welche Stadt wurde 1808 Hauptstadt des portugiesischen Reiches?', 'Rio de Janeiro', ['Lissabon', 'São Paulo', 'Brasília']],
              ['In welchem Jahr wurde Brasilien unabhängig?', '1822', ['1500', '1888', '1960']],
              ['Welche Staatsform hatte Brasilien nach der Unabhängigkeit?', 'Ein Kaiserreich', ['Eine Republik', 'Eine Militärdiktatur', 'Eine Kolonie']],
            ],
            mittel: [
              ['Wer erklärte Brasiliens Unabhängigkeit?', 'Pedro I.', ['Johann VI.', 'Pedro II.', 'Getúlio Vargas']],
              ['Vor wem floh die portugiesische Königsfamilie?', 'Vor Napoleon', ['Vor den Briten', 'Vor einem Erdbeben', 'Vor den Spaniern']],
              ['An welchem Tag ist Brasiliens Unabhängigkeitstag?', '7. September', ['22. April', '15. November', '1. Mai']],
            ],
            schwer: [
              ['An welchem Fluss rief Pedro die Unabhängigkeit aus?', 'Am Ipiranga', ['Am Amazonas', 'Am Paraná', 'Am São Francisco']],
              ['Wie lautete Pedros berühmter Ausruf?', '„Unabhängigkeit oder Tod!“', ['„Ordnung und Fortschritt“', '„Freiheit für alle“', '„Gott schütze Brasilien“']],
              ['Welcher König kehrte 1821 nach Lissabon zurück?', 'Johann VI.', ['Pedro I.', 'Manuel I.', 'Karl I.']],
            ],
          },
        },
        {
          id: 'republik',
          title: 'Ende der Sklaverei und Republik',
          date: '1888–1889',
          text: [
            'Brasilien schaffte die Sklaverei als letztes Land Amerikas ab. Nach Teilschritten wie dem „Gesetz des freien Bauches“ von 1871, das Kinder von Sklavinnen für frei erklärte, unterzeichnete Prinzessin Isabel am 13. Mai 1888 die „Lei Áurea“ (Goldenes Gesetz), das alle rund 700.000 noch versklavten Menschen befreite. Entschädigung oder Land erhielten die Befreiten nicht.',
            'Viele Plantagenbesitzer wandten sich daraufhin von der Monarchie ab. Am 15. November 1889 stürzte das Militär Kaiser Pedro II. und rief die Republik aus. Die neue Flagge trägt den Wahlspruch „Ordem e Progresso“ (Ordnung und Fortschritt). In den folgenden Jahrzehnten kamen Millionen Einwanderer aus Italien, Portugal, Deutschland und Japan, viele davon für den Kaffeeanbau.',
          ],
          quiz: {
            leicht: [
              ['Wann schaffte Brasilien die Sklaverei ab?', '1888', ['1822', '1865', '1950']],
              ['Welcher Wahlspruch steht auf der brasilianischen Flagge?', '„Ordnung und Fortschritt“', ['„Freiheit oder Tod“', '„Gott mit uns“', '„Einigkeit und Recht“']],
              ['Was wurde 1889 ausgerufen?', 'Die Republik', ['Das Kaiserreich', 'Die Unabhängigkeit', 'Eine Diktatur']],
            ],
            mittel: [
              ['Wer unterzeichnete das Gesetz zur Abschaffung der Sklaverei?', 'Prinzessin Isabel', ['Pedro I.', 'Pedro II.', 'Getúlio Vargas']],
              ['Welcher Kaiser wurde 1889 gestürzt?', 'Pedro II.', ['Pedro I.', 'Johann VI.', 'Maximilian']],
              ['Für welchen Anbau kamen viele Einwanderer?', 'Für den Kaffeeanbau', ['Für den Reisanbau', 'Für den Teeanbau', 'Für den Weizenanbau']],
            ],
            schwer: [
              ['Wie heißt das Gesetz von 1888?', 'Lei Áurea', ['Ventre Livre', 'Estado Novo', 'Ordem e Progresso']],
              ['Wie viele Menschen wurden 1888 noch befreit?', 'Rund 700.000', ['Rund 7.000', 'Rund 7 Millionen', 'Rund 70.000']],
              ['Was erklärte das Gesetz von 1871?', 'Kinder von Sklavinnen für frei', ['Alle Sklaven über 60 für frei', 'Den Sklavenhandel für erlaubt', 'Die Republik']],
            ],
          },
        },
      ],
    },
    {
      id: 'republik',
      name: 'Die Republik',
      period: 'seit 1930',
      events: [
        {
          id: 'brasilia',
          title: 'Vargas und die neue Hauptstadt Brasília',
          date: '1930–1960',
          text: [
            '1930 kam Getúlio Vargas durch eine Revolution an die Macht. Ab 1937 regierte er im „Estado Novo“ als Diktator, förderte aber auch Industrie, Arbeitsrechte und einen Mindestlohn. Im Zweiten Weltkrieg kämpfte Brasilien als einziges lateinamerikanisches Land mit eigenen Bodentruppen auf Seiten der Alliierten, in Italien. Vargas regierte später erneut und nahm sich 1954 im Amt das Leben.',
            'Präsident Juscelino Kubitschek wollte das Land „fünfzig Jahre Fortschritt in fünf“ erleben lassen. In nur rund vier Jahren entstand im Landesinneren die neue Hauptstadt Brasília, geplant von Lúcio Costa, mit Bauten des Architekten Oscar Niemeyer. Sie wurde am 21. April 1960 eingeweiht und löste Rio de Janeiro als Hauptstadt ab.',
          ],
          quiz: {
            leicht: [
              ['Wie heißt Brasiliens Hauptstadt seit 1960?', 'Brasília', ['Rio de Janeiro', 'São Paulo', 'Salvador']],
              ['Welche Stadt war vorher Hauptstadt?', 'Rio de Janeiro', ['São Paulo', 'Recife', 'Belo Horizonte']],
              ['Welcher berühmte Architekt baute in Brasília?', 'Oscar Niemeyer', ['Le Corbusier', 'Frank Gehry', 'Antoni Gaudí']],
            ],
            mittel: [
              ['Wer regierte ab 1937 als Diktator im „Estado Novo“?', 'Getúlio Vargas', ['Juscelino Kubitschek', 'Lula', 'Pedro II.']],
              ['Welcher Präsident ließ Brasília bauen?', 'Juscelino Kubitschek', ['Getúlio Vargas', 'Lula', 'Jair Bolsonaro']],
              ['Wo kämpften brasilianische Truppen im Zweiten Weltkrieg?', 'In Italien', ['In Frankreich', 'Im Pazifik', 'In Russland']],
            ],
            schwer: [
              ['Wann wurde Brasília eingeweiht?', '21. April 1960', ['7. September 1950', '15. November 1960', '1. Januar 1970']],
              ['Wie lautete Kubitscheks Motto?', '„Fünfzig Jahre in fünf“', ['„Ordnung und Fortschritt“', '„Brot und Spiele“', '„Ja, wir können“']],
              ['Wer entwarf den Stadtplan Brasílias?', 'Lúcio Costa', ['Oscar Niemeyer', 'Roberto Burle Marx', 'Le Corbusier']],
            ],
          },
        },
        {
          id: 'demokratie',
          title: 'Militärdiktatur und Demokratie',
          date: 'seit 1964',
          text: [
            '1964 stürzte das Militär den linken Präsidenten João Goulart. Die Militärdiktatur dauerte 21 Jahre; Gegner wurden verfolgt, gefoltert oder getötet. Zugleich erlebte die Wirtschaft um 1970 ein „brasilianisches Wunder“ mit hohen Wachstumsraten, aber wachsender Ungleichheit und Auslandsschulden.',
            'Nach Massenprotesten für direkte Wahlen („Diretas Já“) kehrte Brasilien 1985 zur Demokratie zurück; 1988 erhielt es eine neue Verfassung. 2003 wurde der frühere Metallarbeiter und Gewerkschafter Luiz Inácio Lula da Silva Präsident; Sozialprogramme holten Millionen Menschen aus der Armut. Brasilien richtete 2014 die Fußball-WM und 2016 in Rio die Olympischen Spiele aus. Die Abholzung des Amazonas-Regenwalds bleibt ein großes Thema.',
          ],
          quiz: {
            leicht: [
              ['Wer regierte Brasilien von 1964 bis 1985?', 'Das Militär', ['Ein König', 'Die Kirche', 'Die UNO']],
              ['Welcher frühere Metallarbeiter wurde 2003 Präsident?', 'Lula', ['Jair Bolsonaro', 'Pelé', 'Getúlio Vargas']],
              ['In welcher Stadt fanden 2016 die Olympischen Spiele statt?', 'In Rio de Janeiro', ['In São Paulo', 'In Brasília', 'In Buenos Aires']],
            ],
            mittel: [
              ['Wann kehrte Brasilien zur Demokratie zurück?', '1985', ['1964', '2003', '1945']],
              ['Welchen Präsidenten stürzte das Militär 1964?', 'João Goulart', ['Getúlio Vargas', 'Juscelino Kubitschek', 'Lula']],
              ['Welcher Regenwald wird stark abgeholzt?', 'Der Amazonas-Regenwald', ['Der Kongo-Regenwald', 'Der Schwarzwald', 'Der Daintree-Regenwald']],
            ],
            schwer: [
              ['Wie hießen die Proteste für direkte Wahlen?', 'Diretas Já', ['Ordem e Progresso', 'Fora Temer', 'Grito dos Excluídos']],
              ['Wann erhielt Brasilien seine neue Verfassung?', '1988', ['1985', '1964', '2003']],
              ['Wie nannte man den Wirtschaftsboom um 1970?', 'Brasilianisches Wunder', ['Goldenes Zeitalter', 'Kaffeeboom', 'Samba-Boom']],
            ],
          },
        },
      ],
    },
  ],
};
