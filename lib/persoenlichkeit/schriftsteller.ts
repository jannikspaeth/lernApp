import type { Persona } from '.';

export const SCHRIFTSTELLER: Persona = {
  id: 'schriftsteller',
  title: 'Welcher Schriftsteller bist du?',
  blurb: 'Abenteurer, Beobachterin oder Grübler? Zehn Fragen zu deinem Erzählstil.',
  results: [
    {
      id: 'goethe', name: 'Johann Wolfgang von Goethe', img: 'goethe', set: 'lit', path: 'de-klassik/goethe',
      tag: 'Das Universalgenie',
      text: 'Dich interessiert alles: Kunst, Natur, Liebe, Politik. Goethe schrieb Gedichte, Romane und den „Faust“, war Minister in Weimar, erforschte Pflanzen und Farben und reiste fast zwei Jahre durch Italien. Du bist vielseitig, weltoffen und willst das Leben in seiner ganzen Fülle erleben.',
    },
    {
      id: 'schiller', name: 'Friedrich Schiller', img: 'schiller', set: 'lit', path: 'de-klassik/schiller',
      tag: 'Der Idealist',
      text: 'Freiheit und Gerechtigkeit sind dir heilig, und du kämpfst für deine Ideale. Schiller floh als junger Mann vor seinem Landesherrn, schrieb Dramen wie „Die Räuber“ und „Wilhelm Tell“ und arbeitete trotz schwerer Krankheit unermüdlich. Du bist ein treuer Freund und begeisterst andere für das Gute.',
    },
    {
      id: 'kafka', name: 'Franz Kafka', img: 'kafka', set: 'lit', path: 'de-moderne/kafka',
      tag: 'Der stille Beobachter des Absurden',
      text: 'Du bemerkst, wie seltsam die Welt oft ist – Behörden, Regeln, Erwartungen – und kannst darüber auf eine dunkle Art lachen. Kafka arbeitete tagsüber in einer Versicherung in Prag und schrieb nachts Geschichten wie „Die Verwandlung“. Du bist zurückhaltend, selbstkritisch und viel witziger, als andere ahnen.',
    },
    {
      id: 'austen', name: 'Jane Austen', img: 'austen', set: 'lit', path: 'en-romantik/austen',
      tag: 'Die scharfsinnige Beobachterin',
      text: 'Dir entgeht nichts – kein Blick, kein falsches Lächeln. Jane Austen beschrieb in „Stolz und Vorurteil“ die englische Gesellschaft mit feiner Ironie und klugen Heldinnen. Du hast Humor, Menschenkenntnis und eine eigene Meinung, die du elegant zu verpacken weißt.',
    },
    {
      id: 'shakespeare', name: 'William Shakespeare', img: 'shakespeare', set: 'lit', path: 'en-renaissance/shakespeare',
      tag: 'Der geborene Unterhalter',
      text: 'Du liebst die große Bühne, das Drama und das Spiel mit Worten. Shakespeare schrieb Komödien und Tragödien für sein Londoner Globe Theatre und erfand dabei zahlreiche Wörter und Redewendungen. Du verstehst Menschen aller Art und kannst sie zum Lachen und zum Weinen bringen.',
    },
    {
      id: 'hemingway', name: 'Ernest Hemingway', img: 'hemingway', set: 'lit', path: 'us-20jh/hemingway-fitzgerald',
      tag: 'Der Abenteurer',
      text: 'Du redest nicht lange, du machst. Hemingway war Kriegsberichterstatter, Großwildjäger und Hochseeangler und schrieb in kurzen, klaren Sätzen – etwa „Der alte Mann und das Meer“. Du suchst das Abenteuer, sagst geradeheraus, was du denkst, und bewunderst Mut.',
    },
    {
      id: 'dostojewski', name: 'Fjodor Dostojewski', img: 'dostojewski', set: 'lit', path: 'ru-19jh/dostojewski',
      tag: 'Der Grübler der großen Fragen',
      text: 'Was ist gut, was ist böse, gibt es Schuld und Vergebung? Solche Fragen lassen dich nicht los. Dostojewski entging knapp einer Hinrichtung, lebte Jahre in sibirischer Verbannung und schrieb „Schuld und Sühne“. Du bist leidenschaftlich, tiefgründig und hast keine Angst vor den dunklen Seiten des Lebens.',
    },
    {
      id: 'lindgren', name: 'Astrid Lindgren', img: 'lindgren', set: 'lit', path: 'sk-20jh/lindgren-mankell',
      tag: 'Das freie Kind im Herzen',
      text: 'Du hast dir die Neugier und den Mut eines Kindes bewahrt. Astrid Lindgren erfand Pippi Langstrumpf, die stärkste Heldin der Welt, und setzte sich gegen Gewalt an Kindern ein. Du bist humorvoll, gerecht, liebst die Natur und lässt dir von Autoritäten nichts vormachen.',
    },
  ],
  questions: [
    {
      q: 'Wo schreibst du am liebsten?',
      options: [
        ['In einem Café in einer fremden Stadt', ['hemingway', 'goethe']],
        ['Nachts allein am Schreibtisch', ['kafka', 'dostojewski']],
        ['Im Wohnzimmer, mitten im Familienleben', ['austen', 'lindgren']],
        ['Hinter der Bühne, kurz vor der Vorstellung', ['shakespeare', 'schiller']],
      ],
    },
    {
      q: 'Wovon soll deine Geschichte handeln?',
      options: [
        ['Von Liebe und gesellschaftlichen Regeln', ['austen', 'goethe']],
        ['Vom Kampf für die Freiheit', ['schiller', 'lindgren']],
        ['Von Schuld, Glaube und Gewissen', ['dostojewski', 'shakespeare']],
        ['Von einem Menschen, der sich in einer absurden Welt verirrt', ['kafka']],
      ],
    },
    {
      q: 'Wie redest du?',
      options: [
        ['Kurz und knapp', ['hemingway', 'kafka']],
        ['Mit feiner Ironie', ['austen', 'shakespeare']],
        ['Mit Leidenschaft und großen Worten', ['schiller', 'dostojewski']],
        ['Fröhlich und direkt, wie mir der Schnabel gewachsen ist', ['lindgren', 'goethe']],
      ],
    },
    {
      q: 'Was machst du in deiner Freizeit?',
      options: [
        ['Reisen, Pflanzen bestimmen, Gedichte schreiben – alles auf einmal', ['goethe']],
        ['Angeln, Boxen oder Wandern', ['hemingway', 'lindgren']],
        ['Leute beobachten', ['austen', 'kafka']],
        ['Ins Theater gehen', ['shakespeare', 'schiller']],
      ],
    },
    {
      q: 'Welcher Held gefällt dir am besten?',
      options: [
        ['Ein Mädchen, das stärker ist als alle Erwachsenen', ['lindgren']],
        ['Ein Rebell, der sich gegen einen Tyrannen stellt', ['schiller', 'hemingway']],
        ['Ein Zerrissener, der zwischen Gut und Böse ringt', ['dostojewski', 'goethe']],
        ['Eine kluge Frau, die sich nicht verheiraten lässt', ['austen', 'shakespeare']],
      ],
    },
    {
      q: 'Wie gehst du mit Problemen um?',
      options: [
        ['Ich packe sie mutig an', ['hemingway', 'schiller']],
        ['Ich denke stundenlang darüber nach', ['dostojewski', 'kafka']],
        ['Ich nehme sie mit Humor', ['lindgren', 'shakespeare']],
        ['Ich spreche mit klugen Freunden', ['austen', 'goethe']],
      ],
    },
    {
      q: 'Was ist deine größte Schwäche?',
      options: [
        ['Ich zweifle ständig an meiner Arbeit', ['kafka']],
        ['Ich übertreibe gern ein bisschen', ['shakespeare', 'schiller']],
        ['Ich bin manchmal zu spitz', ['austen', 'hemingway']],
        ['Ich verliere mich in Grübeleien oder Leidenschaften', ['dostojewski', 'goethe']],
      ],
    },
    {
      q: 'Welches Ende soll deine Geschichte haben?',
      options: [
        ['Ein Happy End, aber hart erarbeitet', ['austen', 'lindgren']],
        ['Ein tragisches Ende mit großem Gefühl', ['shakespeare', 'schiller']],
        ['Ein offenes Ende, das verstört', ['kafka', 'hemingway']],
        ['Erlösung nach tiefem Fall', ['dostojewski', 'goethe']],
      ],
    },
    {
      q: 'Welches Tier passt zu dir?',
      options: [
        ['Ein Pferd, das wild über die Wiese galoppiert', ['lindgren', 'schiller']],
        ['Ein Käfer, der still beobachtet', ['kafka']],
        ['Ein Löwe', ['hemingway', 'shakespeare']],
        ['Eine Katze, die alles mitbekommt', ['austen', 'dostojewski']],
      ],
    },
    {
      q: 'Was willst du mit deinen Büchern erreichen?',
      options: [
        ['Dass Menschen die Welt in ihrer ganzen Fülle sehen', ['goethe', 'shakespeare']],
        ['Dass Kinder stark und frei sein dürfen', ['lindgren']],
        ['Dass Leser über ihr Gewissen nachdenken', ['dostojewski', 'schiller']],
        ['Dass man über die Gesellschaft lacht und nachdenkt', ['austen', 'kafka', 'hemingway']],
      ],
    },
  ],
};
