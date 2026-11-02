import type { Persona } from '.';

export const PHILOSOPHEN: Persona = {
  id: 'philosoph',
  title: 'Welcher Philosoph bist du?',
  blurb: 'Fragensteller, Genießer oder Rebell? Zehn Fragen zu deiner Lebenshaltung.',
  results: [
    {
      id: 'sokrates', name: 'Sokrates', img: 'sokrates', set: 'phi', path: 'an-klassik/sokrates',
      tag: 'Der ewige Fragensteller',
      text: 'Du gibst dich nicht mit schnellen Antworten zufrieden. Wie Sokrates, der auf dem Marktplatz von Athen jeden in ein Gespräch verwickelte, willst du verstehen, was hinter den Dingen steckt – und gibst offen zu, wenn du etwas nicht weißt. Das macht dich zu einem guten Gesprächspartner, manchmal aber auch zu einem unbequemen.',
    },
    {
      id: 'diogenes', name: 'Diogenes', img: 'diogenes', set: 'phi', path: 'an-hellenismus/diogenes',
      tag: 'Der freche Freigeist',
      text: 'Konventionen sind dir egal, Besitz bedeutet dir wenig, und mit einem frechen Spruch sagst du, was andere nur denken. Diogenes lebte der Legende nach in einer Tonne und bat Alexander den Großen nur, ihm aus der Sonne zu gehen. Deine Freiheit ist dir wichtiger als die Meinung anderer.',
    },
    {
      id: 'epikur', name: 'Epikur', img: 'epikur', set: 'phi', path: 'an-hellenismus/epikur',
      tag: 'Der kluge Genießer',
      text: 'Für dich ist ein gutes Leben eines mit Freunden, schönen Momenten und ohne unnötige Angst. Epikur lehrte in seinem Garten in Athen, dass Glück in maßvoller Freude liegt – nicht im Luxus, sondern in einem einfachen Mahl unter Freunden. Du weißt, was dir guttut, und teilst es gern.',
    },
    {
      id: 'stoiker', name: 'Mark Aurel', img: 'mark-aurel', set: 'phi', path: 'an-hellenismus/mark-aurel',
      tag: 'Der gelassene Stoiker',
      text: 'Was du nicht ändern kannst, nimmst du gelassen hin – und auf das, was in deiner Hand liegt, konzentrierst du dich ganz. Der römische Kaiser Mark Aurel schrieb seine „Selbstbetrachtungen“ mitten in Kriegen und Seuchen, um Ruhe und Pflichtgefühl zu bewahren. Du bist der Fels in der Brandung.',
    },
    {
      id: 'kant', name: 'Immanuel Kant', img: 'kant', set: 'phi', path: 'nz-kant/leben',
      tag: 'Der Mensch mit Prinzipien',
      text: 'Du denkst gründlich nach, bevor du handelst, und fragst dich, ob deine Regel für alle gelten könnte. Kant verließ seine Heimatstadt Königsberg kaum und soll so pünktlich spazieren gegangen sein, dass man die Uhr nach ihm stellte. Auf dich ist Verlass, und Fairness ist dir heilig.',
    },
    {
      id: 'nietzsche', name: 'Friedrich Nietzsche', img: 'nietzsche', set: 'phi', path: 'jh-19/nietzsche',
      tag: 'Der leidenschaftliche Querdenker',
      text: 'Du stellst Gewohntes infrage und willst deinen eigenen Weg gehen, auch gegen den Strom. Nietzsche forderte, eigene Werte zu schaffen und über sich hinauszuwachsen; er liebte die Musik und die Berge um Sils Maria. In dir steckt viel Energie – und der Mut, anders zu sein.',
    },
    {
      id: 'camus', name: 'Albert Camus', img: 'camus', set: 'phi', path: 'zj-existenz/camus',
      tag: 'Der lebensfrohe Rebell',
      text: 'Die Welt muss keinen fertigen Sinn haben, damit du sie liebst. Camus, der im sonnigen Algier aufwuchs und gern Fußball spielte, schrieb, man müsse sich Sisyphos als glücklichen Menschen vorstellen. Du lehnst dich gegen Ungerechtigkeit auf und genießt trotzdem jeden Sonnentag.',
    },
    {
      id: 'laozi', name: 'Laozi', img: 'laozi', set: 'phi', path: 'os-china/laozi',
      tag: 'Der stille Weise',
      text: 'Du lässt die Dinge fließen, statt sie zu erzwingen, und findest Ruhe in der Natur. Laozi, dem das „Daodejing“ zugeschrieben wird, lehrte, dass das Weiche das Harte besiegt wie Wasser den Stein. Du brauchst wenig, hörst gut zu und bringst Gelassenheit in jede Runde.',
    },
  ],
  questions: [
    {
      q: 'Wie verbringst du einen freien Nachmittag am liebsten?',
      options: [
        ['In einer langen Diskussion mit Freunden', ['sokrates', 'epikur']],
        ['Mit einem festen Plan, den ich Punkt für Punkt abarbeite', ['kant', 'stoiker']],
        ['Draußen in der Natur, ganz ohne Ziel', ['laozi', 'camus']],
        ['Mit etwas, das andere ziemlich verrückt finden', ['diogenes', 'nietzsche']],
      ],
    },
    {
      q: 'Was ist dir im Leben am wichtigsten?',
      options: [
        ['Die Wahrheit, auch wenn sie unbequem ist', ['sokrates', 'diogenes']],
        ['Innere Ruhe', ['stoiker', 'laozi']],
        ['Gute Freunde und schöne Momente', ['epikur', 'camus']],
        ['Eigene Grundsätze – und dass ich sie einhalte', ['kant', 'nietzsche']],
      ],
    },
    {
      q: 'Jemand beleidigt dich vor anderen. Was tust du?',
      options: [
        ['Ich frage ruhig nach, was er genau damit meint', ['sokrates', 'kant']],
        ['Ich kontere mit einem Spruch, über den alle lachen', ['diogenes', 'nietzsche']],
        ['Nichts – seine Meinung liegt nicht in meiner Hand', ['stoiker', 'laozi']],
        ['Ich zucke mit den Schultern und gehe mit Freunden essen', ['epikur', 'camus']],
      ],
    },
    {
      q: 'Wie sieht dein Zimmer aus?',
      options: [
        ['Fast leer – ich brauche kaum Dinge', ['diogenes', 'laozi']],
        ['Gemütlich, mit Platz für Gäste', ['epikur', 'sokrates']],
        ['Aufgeräumt, jedes Ding an seinem Platz', ['kant', 'stoiker']],
        ['Voller Bücher, Notizen und kreativem Chaos', ['nietzsche', 'camus']],
      ],
    },
    {
      q: 'Welcher Satz könnte von dir sein?',
      options: [
        ['„Gute Fragen sind wichtiger als schnelle Antworten.“', ['sokrates', 'kant']],
        ['„Nur wer seinen eigenen Weg geht, lebt wirklich.“', ['nietzsche', 'diogenes']],
        ['„Das Leben hat keinen fertigen Sinn – also gebe ich ihm einen.“', ['camus']],
        ['„Was ich nicht ändern kann, nehme ich hin.“', ['stoiker', 'laozi']],
      ],
    },
    {
      q: 'Wie triffst du wichtige Entscheidungen?',
      options: [
        ['Ich prüfe, ob meine Regel für alle gelten könnte', ['kant', 'stoiker']],
        ['Ich lasse es geschehen und höre auf mein Gefühl', ['laozi', 'epikur']],
        ['Ich rede mit anderen und stelle viele Fragen', ['sokrates', 'epikur']],
        ['Mutig, auch gegen die Meinung aller', ['nietzsche', 'diogenes']],
      ],
    },
    {
      q: 'Was macht dich so richtig glücklich?',
      options: [
        ['Ein gutes Essen mit Freunden – nicht zu viel, nicht zu wenig', ['epikur', 'sokrates']],
        ['Ein Sonnentag am Meer, ganz im Moment', ['camus']],
        ['Wenn ich meine Pflicht erfüllt habe', ['kant', 'stoiker']],
        ['Frei zu sein von allem Überflüssigen', ['diogenes', 'laozi']],
      ],
    },
    {
      q: 'Welche Rolle hast du in einer Gruppe?',
      options: [
        ['Ich stelle die unbequemen Fragen', ['sokrates', 'diogenes']],
        ['Ich bin der Ruhepol, den nichts aus der Fassung bringt', ['stoiker', 'laozi']],
        ['Ich achte auf Regeln und Fairness', ['kant']],
        ['Ich sorge dafür, dass sich alle wohlfühlen', ['epikur', 'camus']],
      ],
    },
    {
      q: 'Wie gehst du mit einem schweren Rückschlag um?',
      options: [
        ['Ich nehme ihn an – so ist die Welt', ['stoiker', 'laozi']],
        ['Ich wachse daran und werde stärker', ['nietzsche', 'kant']],
        ['Ich lehne mich auf und mache trotzdem weiter', ['camus', 'nietzsche']],
        ['Ich suche Trost bei Freunden und in kleinen Freuden', ['epikur', 'sokrates']],
      ],
    },
    {
      q: 'Welcher Ort passt am besten zu dir?',
      options: [
        ['Ein Marktplatz voller Menschen', ['sokrates', 'diogenes']],
        ['Ein Garten, in dem Freunde zusammensitzen', ['epikur', 'camus']],
        ['Eine stille Bibliothek', ['kant', 'stoiker']],
        ['Ein Bergpfad im Nebel', ['laozi', 'nietzsche']],
      ],
    },
  ],
};
