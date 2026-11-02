import type { Persona } from '.';

export const KUENSTLER: Persona = {
  id: 'kuenstler',
  title: 'Welcher Künstler bist du?',
  blurb: 'Forscher, Träumer oder Farbrausch? Zehn Fragen zu deiner kreativen Seite.',
  results: [
    {
      id: 'leonardo', name: 'Leonardo da Vinci', img: 'mona-lisa', set: 'kunst', path: 'renaissance/leonardo',
      tag: 'Der neugierige Tüftler',
      text: 'Dich interessiert einfach alles – wie Vögel fliegen, wie das Herz schlägt, wie man eine Brücke baut. Leonardo füllte Tausende Notizbuchseiten mit Erfindungen und Studien und malte nebenbei die Mona Lisa. Wie er beginnst du lieber zehn Projekte, als eines langweilig zu Ende zu bringen.',
    },
    {
      id: 'michelangelo', name: 'Michelangelo', img: 'david', set: 'kunst', path: 'renaissance/michelangelo',
      tag: 'Der leidenschaftliche Perfektionist',
      text: 'Wenn du etwas anpackst, dann mit ganzer Kraft und höchstem Anspruch. Michelangelo malte die Decke der Sixtinischen Kapelle über vier Jahre fast allein und sah im Marmorblock schon die Figur, die er nur noch befreien musste. Du arbeitest hart, bist stolz auf dein Werk und gehst keine faulen Kompromisse ein.',
    },
    {
      id: 'rembrandt', name: 'Rembrandt', img: 'nachtwache', set: 'kunst', path: 'barock/rembrandt',
      tag: 'Der ehrliche Menschenkenner',
      text: 'Du schaust Menschen tief in die Seele und zeigst dich selbst ohne Maske. Rembrandt malte sich in rund achtzig Selbstbildnissen, vom jungen Erfolgsmaler bis zum verschuldeten alten Mann, und setzte Licht und Schatten wie kein Zweiter. Du kennst Höhen und Tiefen – und bleibst dabei echt.',
    },
    {
      id: 'friedrich', name: 'Caspar David Friedrich', img: 'nebelmeer', set: 'kunst', path: 'romantik/friedrich',
      tag: 'Der stille Romantiker',
      text: 'Ein Sonnenaufgang über den Bergen kann dich mehr berühren als jede Party. Caspar David Friedrich wanderte durch Harz und Riesengebirge und malte einsame Gestalten, die in die Weite blicken. Du bist nachdenklich, naturverbunden und spürst eine Sehnsucht nach etwas Größerem.',
    },
    {
      id: 'monet', name: 'Claude Monet', img: 'impression-sonnenaufgang', set: 'kunst', path: 'impressionismus/monet',
      tag: 'Der Genießer des Augenblicks',
      text: 'Du willst raus, ins Licht, und den Moment einfangen, bevor er vergeht. Monet malte im Freien, dieselbe Kathedrale und dieselben Heuhaufen zu jeder Tageszeit neu, und legte in Giverny seinen berühmten Garten mit den Seerosen an. Du bist geduldig, aufmerksam und siehst Schönheit im Alltäglichen.',
    },
    {
      id: 'vangogh', name: 'Vincent van Gogh', img: 'sternennacht', set: 'kunst', path: 'postimpressionismus/vangogh',
      tag: 'Das Herz voller Farbe',
      text: 'Du fühlst alles intensiv – Freude wie Schmerz – und steckst es in das, was du tust. Van Gogh malte in nur rund zehn Jahren über 800 Gemälde in leuchtenden Farben und schrieb seinem Bruder Theo hunderte Briefe. Du bist leidenschaftlich, treu und gibst nicht auf, auch wenn dich keiner versteht.',
    },
    {
      id: 'kandinsky', name: 'Wassily Kandinsky', img: 'schwarzer-bogen', set: 'kunst', path: 'expressionismus/kandinsky',
      tag: 'Der Theoretiker mit Fantasie',
      text: 'Für dich klingen Farben und haben Töne Formen. Kandinsky gehört zu den Pionieren der abstrakten Malerei, schrieb Bücher über die Wirkung von Farben und lehrte am Bauhaus. Du denkst gern in Systemen, gehst neue Wege und erklärst anderen, wie du die Welt siehst.',
    },
    {
      id: 'munch', name: 'Edvard Munch', img: 'schrei', set: 'kunst', path: 'jugendstil/munch',
      tag: 'Der Mutige, der Gefühle zeigt',
      text: 'Du sprichst aus, was andere lieber verschweigen – auch Angst, Eifersucht und Einsamkeit. Munch machte mit dem „Schrei“ ein inneres Gefühl sichtbar und malte seine Themen immer wieder neu. Du bist tiefgründig, ehrlich zu dir selbst und hilfst anderen, sich verstanden zu fühlen.',
    },
  ],
  questions: [
    {
      q: 'Du hast ein freies Wochenende. Was machst du?',
      options: [
        ['Etwas Neues ausprobieren oder auseinanderbauen', ['leonardo', 'kandinsky']],
        ['An einem großen Projekt durcharbeiten', ['michelangelo', 'vangogh']],
        ['Wandern, am liebsten früh am Morgen', ['friedrich', 'monet']],
        ['Lange Gespräche mit Freunden über das Leben', ['rembrandt', 'munch']],
      ],
    },
    {
      q: 'Welche Farbe spricht dich am meisten an?',
      options: [
        ['Leuchtendes Gelb wie ein Sonnenblumenfeld', ['vangogh', 'monet']],
        ['Warmes Gold und tiefes Braun', ['rembrandt', 'leonardo']],
        ['Nebliges Blaugrau', ['friedrich', 'munch']],
        ['Kräftige Grundfarben: Rot, Blau, Gelb', ['kandinsky', 'michelangelo']],
      ],
    },
    {
      q: 'Wie arbeitest du am liebsten?',
      options: [
        ['Draußen, spontan, solange das Licht stimmt', ['monet', 'vangogh']],
        ['Allein und bis alles perfekt ist', ['michelangelo', 'friedrich']],
        ['An mehreren Dingen gleichzeitig', ['leonardo', 'kandinsky']],
        ['Mit viel Gefühl, wie es gerade aus mir herauskommt', ['munch', 'rembrandt']],
      ],
    },
    {
      q: 'Was würden Freunde über dich sagen?',
      options: [
        ['„Du willst immer wissen, wie etwas funktioniert.“', ['leonardo']],
        ['„Du bist ein Dickkopf, aber du lieferst.“', ['michelangelo', 'rembrandt']],
        ['„Du fühlst mehr als andere.“', ['vangogh', 'munch']],
        ['„Du bist so ruhig und tiefgründig.“', ['friedrich', 'monet']],
      ],
    },
    {
      q: 'Welcher Ort inspiriert dich?',
      options: [
        ['Ein blühender Garten mit Teich', ['monet']],
        ['Eine Werkstatt voller Werkzeuge und Skizzen', ['leonardo', 'michelangelo']],
        ['Eine Klippe am Meer bei Sonnenuntergang', ['friedrich', 'munch']],
        ['Ein Konzertsaal', ['kandinsky']],
      ],
    },
    {
      q: 'Wie gehst du mit Kritik um?',
      options: [
        ['Ich verteidige meine Sicht mit Theorie und Argumenten', ['kandinsky', 'leonardo']],
        ['Ich ärgere mich, mache dann aber noch Besseres', ['michelangelo']],
        ['Sie trifft mich tief, aber ich mache weiter', ['vangogh', 'munch']],
        ['Ich höre zu – vielleicht ist ja etwas dran', ['rembrandt', 'monet']],
      ],
    },
    {
      q: 'Was ist für dich das Wichtigste an einem Bild?',
      options: [
        ['Dass es ein Gefühl auslöst', ['munch', 'vangogh']],
        ['Dass es einen Moment festhält', ['monet', 'rembrandt']],
        ['Dass es perfekt gebaut und durchdacht ist', ['leonardo', 'michelangelo']],
        ['Dass es über die sichtbare Welt hinausweist', ['friedrich', 'kandinsky']],
      ],
    },
    {
      q: 'Welche Musik hörst du beim Arbeiten?',
      options: [
        ['Klassik, möglichst modern und ungewöhnlich', ['kandinsky']],
        ['Gar keine – ich brauche Stille', ['friedrich', 'michelangelo']],
        ['Etwas Melancholisches', ['munch', 'rembrandt']],
        ['Vogelgezwitscher bei offenem Fenster', ['monet', 'vangogh']],
      ],
    },
    {
      q: 'Was fürchtest du am meisten?',
      options: [
        ['Mich zu langweilen', ['leonardo', 'monet']],
        ['Mittelmäßigkeit', ['michelangelo', 'kandinsky']],
        ['Allein zu sein', ['vangogh', 'munch']],
        ['Mich selbst zu verlieren', ['rembrandt', 'friedrich']],
      ],
    },
    {
      q: 'Welches Motiv würdest du malen?',
      options: [
        ['Einen Menschen, mit all seinen Falten und Geschichten', ['rembrandt', 'leonardo']],
        ['Einen Sternenhimmel über einem Dorf', ['vangogh', 'friedrich']],
        ['Seerosen im wechselnden Licht', ['monet']],
        ['Formen und Linien, die wie Musik klingen', ['kandinsky']],
      ],
    },
  ],
};
