import { Subject, topic } from './types';

const S = 'politik';

export const politik: Subject = {
  id: S,
  name: ['Politics', 'Politik'],
  icon: '⚖️',
  blurb: ['Basic Law, state, EU and the UN', 'Grundgesetz, Staat, EU und Vereinte Nationen'],
  color: { bg: 'bg-indigo-50', text: 'text-indigo-800', bar: 'bg-indigo-500', border: 'border-indigo-200' },
  topics: [
    topic(S, 'staat', ['German state', 'Staat & Grundgesetz'], '🏛️', [
      ['Wie heißt die Verfassung der Bundesrepublik Deutschland?', 'Grundgesetz', ['Reichsverfassung', 'Bundesverfassung', 'Staatsvertrag']],
      ['Wie beginnt Artikel 1 des Grundgesetzes?', '„Die Würde des Menschen ist unantastbar.“', ['„Alle Menschen sind vor dem Gesetz gleich.“', '„Jeder hat das Recht auf Leben.“', '„Alle Staatsgewalt geht vom Volke aus.“']],
      ['Wie viele Bundesländer hat Deutschland?', '16', ['14', '15', '18']],
      ['Wer wählt den Bundeskanzler oder die Bundeskanzlerin?', 'Der Bundestag', ['Das Volk direkt', 'Der Bundesrat', 'Die Bundesversammlung']],
      ['Wer wählt den Bundespräsidenten?', 'Die Bundesversammlung', ['Der Bundestag', 'Das Volk direkt', 'Der Bundesrat'], 'Sie besteht aus den Bundestagsabgeordneten und ebenso vielen Vertretern der Länder.'],
      ['Wie lange dauert eine Wahlperiode des Bundestags?', 'Vier Jahre', ['Fünf Jahre', 'Drei Jahre', 'Sechs Jahre']],
      ['Ab welchem Alter darf man bei der Bundestagswahl wählen?', '18 Jahren', ['16 Jahren', '21 Jahren', '14 Jahren'], 'Bei der Europawahl seit 2024 schon ab 16.'],
      ['In welcher Stadt sitzt das Bundesverfassungsgericht?', 'Karlsruhe', ['Berlin', 'Bonn', 'Leipzig']],
      ['Über welches Organ wirken die Bundesländer an der Gesetzgebung mit?', 'Bundesrat', ['Bundestag', 'Bundesversammlung', 'Landtag']],
      ['Wie viel Prozent der Zweitstimmen braucht eine Partei in der Regel für den Bundestag?', '5 Prozent', ['3 Prozent', '10 Prozent', '7,5 Prozent']],
      ['Wie nennt man die gesetzgebende Gewalt?', 'Legislative', ['Exekutive', 'Judikative', 'Föderative']],
      ['Wer ist das Staatsoberhaupt der Bundesrepublik?', 'Der Bundespräsident', ['Der Bundeskanzler', 'Die Bundestagspräsidentin', 'Der Bundesratspräsident']],
    ]),
    topic(S, 'welt', ['EU & United Nations', 'EU & Vereinte Nationen'], '🇪🇺', [
      ['Wie viele Mitgliedstaaten hat die EU seit 2020?', '27', ['25', '28', '30']],
      ['Welches Land trat 2020 aus der EU aus?', 'Vereinigtes Königreich', ['Griechenland', 'Dänemark', 'Ungarn']],
      ['Wo ist der offizielle Sitz des Europäischen Parlaments?', 'Straßburg', ['Brüssel', 'Luxemburg', 'Frankfurt am Main'], 'Viele Sitzungen und Ausschüsse finden in Brüssel statt.'],
      ['In welcher Stadt sitzt die Europäische Zentralbank?', 'Frankfurt am Main', ['Brüssel', 'Paris', 'Luxemburg']],
      ['Welche Verträge gründeten 1957 die Europäische Wirtschaftsgemeinschaft?', 'Römische Verträge', ['Vertrag von Maastricht', 'Vertrag von Lissabon', 'Élysée-Vertrag']],
      ['In welcher Stadt haben die Vereinten Nationen ihren Hauptsitz?', 'New York', ['Genf', 'Wien', 'Paris']],
      ['Wie viele Staaten sind Mitglied der Vereinten Nationen?', '193', ['150', '205', '180']],
      ['Welche Staaten haben im UN-Sicherheitsrat ein Vetorecht?', 'USA, Russland, China, Frankreich, Vereinigtes Königreich', ['USA, Russland, China, Deutschland, Japan', 'USA, Russland, China, Indien, Frankreich', 'USA, Vereinigtes Königreich, Frankreich, Deutschland, Italien']],
      ['In welchem Jahr wurde die NATO gegründet?', '1949', ['1945', '1955', '1961']],
      ['Wo hat die Weltgesundheitsorganisation (WHO) ihren Sitz?', 'Genf', ['New York', 'Wien', 'Rom']],
      ['In welcher Stadt sitzt der Internationale Gerichtshof?', 'Den Haag', ['Genf', 'Straßburg', 'New York']],
      ['In welcher Stadt sitzt die Europäische Kommission?', 'Brüssel', ['Straßburg', 'Luxemburg', 'Frankfurt am Main']],
    ]),
  ],
};
