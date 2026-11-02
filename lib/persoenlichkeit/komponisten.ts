import type { Persona } from '.';

export const KOMPONISTEN: Persona = {
  id: 'komponist',
  title: 'Welcher Komponist bist du?',
  blurb: 'Ordnung wie Bach oder Sturm wie Beethoven? Zehn Fragen zu deinem Rhythmus.',
  results: [
    {
      id: 'bach', name: 'Johann Sebastian Bach', img: 'bach', set: 'mus', path: 'kl-barock/bach',
      tag: 'Der fleißige Baumeister',
      text: 'Du liebst Ordnung, Struktur und gutes Handwerk. Bach schrieb als Thomaskantor in Leipzig Woche für Woche neue Kantaten, hatte zwanzig Kinder und baute Musik so kunstvoll wie eine Kathedrale. Du bist verlässlich, gründlich, und in deinen Plänen steckt mehr Fantasie, als man denkt.',
    },
    {
      id: 'mozart', name: 'Wolfgang Amadeus Mozart', img: 'mozart', set: 'mus', path: 'kl-wiener-klassik/mozart',
      tag: 'Das verspielte Genie',
      text: 'Dir fällt vieles leicht, und du hast Humor bis zur Albernheit. Mozart trat schon als Kind vor Königen auf, liebte Feste, Wortspiele und Billard und schrieb Musik, die mühelos klingt. Du bist gesellig, spontan und bringst Leichtigkeit in jede Runde.',
    },
    {
      id: 'beethoven', name: 'Ludwig van Beethoven', img: 'beethoven', set: 'mus', path: 'kl-wiener-klassik/beethoven',
      tag: 'Der unbeugsame Kämpfer',
      text: 'Du gibst nicht auf, auch wenn das Schicksal zuschlägt. Beethoven komponierte weiter, als er taub wurde, und schuf mit der Neunten eine Hymne auf Freiheit und Brüderlichkeit. Du bist leidenschaftlich, manchmal stur – und lässt dir von niemandem sagen, wer du bist.',
    },
    {
      id: 'chopin', name: 'Frédéric Chopin', img: 'chopin', set: 'mus', path: 'kl-romantik/chopin',
      tag: 'Die feinfühlige Seele',
      text: 'Du bist sensibel, elegant und fühlst dich im kleinen Kreis am wohlsten. Chopin spielte lieber in Salons als in großen Konzertsälen und schrieb fast nur für sein Instrument, das Klavier. In Paris vermisste er seine Heimat Polen. Du zeigst deine Gefühle nicht jedem, aber wer dich kennt, weiß, wie tief sie gehen.',
    },
    {
      id: 'wagner', name: 'Richard Wagner', img: 'wagner', set: 'mus', path: 'kl-oper/wagner',
      tag: 'Der Visionär mit großen Plänen',
      text: 'Kleine Ziele sind nichts für dich. Wagner wollte im „Gesamtkunstwerk“ Musik, Dichtung und Bühne vereinen, schrieb seine Texte selbst und ließ sich in Bayreuth ein eigenes Festspielhaus bauen. Du denkst groß, bist selbstbewusst und kannst Menschen für deine Ideen begeistern.',
    },
    {
      id: 'vivaldi', name: 'Antonio Vivaldi', img: 'vivaldi', set: 'mus', path: 'kl-barock/vivaldi',
      tag: 'Das Energiebündel',
      text: 'Du sprühst vor Energie und hast immer etwas zu tun. Vivaldi schrieb Hunderte Konzerte, unterrichtete die Musikerinnen eines Waisenhauses in Venedig und machte in den „Vier Jahreszeiten“ Vogelrufe und Gewitter hörbar. Du bist schnell, produktiv und naturverbunden.',
    },
    {
      id: 'tschaikowsky', name: 'Peter Tschaikowsky', img: 'tschaikowsky', set: 'mus', path: 'kl-spaetromantik/tschaikowsky',
      tag: 'Der Romantiker mit Märchensinn',
      text: 'Du hast große Gefühle, eine Schwäche für Märchen und manchmal einen Hang zur Melancholie. Tschaikowsky schrieb „Schwanensee“ und den „Nussknacker“, zweifelte oft an sich und war doch einer der beliebtesten Komponisten seiner Zeit. Du berührst andere, weil du so ehrlich fühlst.',
    },
    {
      id: 'debussy', name: 'Claude Debussy', img: 'debussy', set: 'mus', path: 'kl-moderne/debussy',
      tag: 'Der Regelbrecher mit Stimmung',
      text: 'Du denkst in Farben und Stimmungen, und Regeln sind für dich eher Vorschläge. Debussy brach mit den Gesetzen der Harmonielehre, ließ sich vom Meer und von der Malerei inspirieren und schrieb „Clair de lune“. Du bist kreativ, eigenwillig und siehst die Welt ein wenig anders.',
    },
  ],
  questions: [
    {
      q: 'Wie sieht dein idealer Sonntagmorgen aus?',
      options: [
        ['Alles geordnet: Frühstück, Plan für den Tag', ['bach']],
        ['Ausschlafen und spontan schauen, was passiert', ['mozart', 'debussy']],
        ['Ein langer Spaziergang, egal bei welchem Wetter', ['beethoven', 'vivaldi']],
        ['Ruhig, mit Tee und einem guten Buch', ['chopin', 'tschaikowsky']],
      ],
    },
    {
      q: 'Wie reagierst du, wenn etwas schiefgeht?',
      options: [
        ['Ich kämpfe, jetzt erst recht', ['beethoven', 'wagner']],
        ['Ich mache einen Witz und versuche es nochmal', ['mozart', 'vivaldi']],
        ['Ich ziehe mich zurück und bin eine Weile traurig', ['chopin', 'tschaikowsky']],
        ['Ich analysiere, wo der Fehler liegt', ['bach', 'debussy']],
      ],
    },
    {
      q: 'Welche Rolle übernimmst du bei einem Projekt?',
      options: [
        ['Ich habe die große Vision und überzeuge die anderen', ['wagner', 'beethoven']],
        ['Ich sorge dafür, dass alles sauber aufgebaut ist', ['bach']],
        ['Ich treibe das Tempo an', ['vivaldi', 'mozart']],
        ['Ich bringe die besonderen, ungewöhnlichen Ideen ein', ['debussy', 'chopin']],
      ],
    },
    {
      q: 'Welche Landschaft passt zu dir?',
      options: [
        ['Das Meer mit seinem wechselnden Licht', ['debussy']],
        ['Ein Gewitter über weiten Feldern', ['beethoven', 'vivaldi']],
        ['Ein verschneiter Märchenwald', ['tschaikowsky', 'wagner']],
        ['Ein stiller Park mit gepflegten Wegen', ['chopin', 'bach']],
      ],
    },
    {
      q: 'Wie viele Menschen brauchst du um dich?',
      options: [
        ['Je mehr, desto besser – ich liebe Feste', ['mozart', 'vivaldi']],
        ['Ein paar enge Freunde reichen mir', ['chopin', 'debussy']],
        ['Meine Familie ist mir das Wichtigste', ['bach', 'tschaikowsky']],
        ['Am liebsten ein Publikum, das mir zuhört', ['wagner', 'beethoven']],
      ],
    },
    {
      q: 'Was ist dein größter Fehler?',
      options: [
        ['Ich bin manchmal zu stur', ['beethoven', 'bach']],
        ['Ich nehme das Leben zu leicht', ['mozart']],
        ['Ich zweifle zu viel an mir', ['tschaikowsky', 'chopin']],
        ['Ich halte mich für etwas Besonderes', ['wagner', 'debussy']],
      ],
    },
    {
      q: 'Welches Buch würdest du am ehesten lesen?',
      options: [
        ['Eine alte Heldensage', ['wagner']],
        ['Ein Märchenbuch mit schönen Bildern', ['tschaikowsky', 'mozart']],
        ['Ein Naturführer über Vögel und Wetter', ['vivaldi', 'beethoven']],
        ['Gedichte voller Stimmung', ['debussy', 'chopin']],
      ],
    },
    {
      q: 'Wie arbeitest du?',
      options: [
        ['Schnell und viel, eins nach dem anderen', ['vivaldi', 'bach']],
        ['In Schüben, dann aber mit voller Wucht', ['beethoven', 'tschaikowsky']],
        ['Es fliegt mir zu, ich muss es nur aufschreiben', ['mozart']],
        ['Lange tüfteln, bis jede Nuance stimmt', ['chopin', 'debussy']],
      ],
    },
    {
      q: 'Was soll man später über dich sagen?',
      options: [
        ['„Hat Großes geschaffen, das bleibt.“', ['wagner', 'bach']],
        ['„Hat nie aufgegeben.“', ['beethoven']],
        ['„Hat das Leben leichter gemacht.“', ['mozart', 'vivaldi']],
        ['„Hat uns tief berührt.“', ['tschaikowsky', 'chopin', 'debussy']],
      ],
    },
    {
      q: 'Welches Instrument würdest du spielen?',
      options: [
        ['Orgel', ['bach']],
        ['Geige', ['vivaldi', 'tschaikowsky']],
        ['Klavier', ['chopin', 'beethoven', 'mozart']],
        ['Ein ganzes Orchester als Dirigent', ['wagner', 'debussy']],
      ],
    },
  ],
};
