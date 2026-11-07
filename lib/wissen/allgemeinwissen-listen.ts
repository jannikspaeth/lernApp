// Typed "name them all" quizzes of Allgemeinwissen (planets, wonders of the world, zodiac signs …), run by the
// geography QuizRunner like Politik's lists. Ids start with `aw-` so their bests count for Allgemeinwissen.
import type { GeoQuiz, QuizItem } from '../geografie/quizzes';

const L: GeoQuiz[] = [];

// An entry is a name or [name, further accepted spellings …].
type Entry = string | string[];
const items = (entries: Entry[]): QuizItem[] =>
  entries.map(e => (typeof e === 'string' ? { answer: e, accepts: [] } : { answer: e[0], accepts: e.slice(1) }));

// Members of a group, in any order.
const list = (id: string, section: string, title: string, blurb: string, seconds: number, entries: Entry[]) =>
  L.push({ id: `aw-${id}`, cat: 'allgemeinwissen', section, title, blurb, seconds, mode: 'list', items: items(entries) });

// Ordered items: the prompt is shown in front of each cell.
const grid = (id: string, section: string, title: string, blurb: string, seconds: number, rows: [prompt: string, ...entry: string[]][]) =>
  L.push({
    id: `aw-${id}`, cat: 'allgemeinwissen', section, title, blurb, seconds, mode: 'grid',
    items: rows.map(([prompt, answer, ...accepts]) => ({ prompt, answer, accepts })),
  });

// ── Natur & Wissenschaft ──
grid('planeten', 'Natur & Wissenschaft', 'Die Planeten', 'Alle acht Planeten unseres Sonnensystems, von der Sonne aus.', 60, [
  ['1.', 'Merkur'], ['2.', 'Venus'], ['3.', 'Erde'], ['4.', 'Mars'], ['5.', 'Jupiter'], ['6.', 'Saturn'], ['7.', 'Uranus'], ['8.', 'Neptun'],
]);
grid('elemente-20', 'Natur & Wissenschaft', 'Die ersten 20 Elemente', 'Nenne die Elemente zu den Ordnungszahlen 1 bis 20.', 240, [
  ['1 · H', 'Wasserstoff'], ['2 · He', 'Helium'], ['3 · Li', 'Lithium'], ['4 · Be', 'Beryllium'], ['5 · B', 'Bor'],
  ['6 · C', 'Kohlenstoff'], ['7 · N', 'Stickstoff'], ['8 · O', 'Sauerstoff'], ['9 · F', 'Fluor'], ['10 · Ne', 'Neon'],
  ['11 · Na', 'Natrium'], ['12 · Mg', 'Magnesium'], ['13 · Al', 'Aluminium'], ['14 · Si', 'Silicium', 'Silizium'], ['15 · P', 'Phosphor'],
  ['16 · S', 'Schwefel'], ['17 · Cl', 'Chlor'], ['18 · Ar', 'Argon'], ['19 · K', 'Kalium'], ['20 · Ca', 'Calcium', 'Kalzium'],
]);
list('edelgase', 'Natur & Wissenschaft', 'Die Edelgase', 'Die sechs natürlich vorkommenden Edelgase.', 60, ['Helium', 'Neon', 'Argon', 'Krypton', 'Xenon', 'Radon']);
list('regenbogen', 'Natur & Wissenschaft', 'Die Farben des Regenbogens', 'Die sieben Farben nach Newton.', 60, ['Rot', 'Orange', 'Gelb', 'Grün', 'Blau', 'Indigo', ['Violett', 'Lila']]);
list('sinne', 'Natur & Wissenschaft', 'Die fünf Sinne', 'Die klassischen Sinne des Menschen.', 45, ['Sehen', 'Hören', 'Riechen', 'Schmecken', ['Tasten', 'Fühlen']]);
list('geschmack', 'Natur & Wissenschaft', 'Die Geschmacksrichtungen', 'Die fünf Grundgeschmacksrichtungen der Zunge.', 45, ['Süß', 'Sauer', 'Salzig', 'Bitter', 'Umami']);
list('kontinente', 'Natur & Wissenschaft', 'Die Kontinente', 'Die sieben Kontinente nach der heute üblichen Zählung.', 60, [
  'Afrika', ['Antarktika', 'Antarktis'], 'Asien', ['Australien', 'Ozeanien'], 'Europa', 'Nordamerika', 'Südamerika',
]);
list('ozeane', 'Natur & Wissenschaft', 'Die Ozeane', 'Die fünf Ozeane der Erde.', 60, [
  ['Pazifik', 'Pazifischer Ozean', 'Stiller Ozean'], ['Atlantik', 'Atlantischer Ozean'], ['Indischer Ozean', 'Indik'],
  ['Arktischer Ozean', 'Nordpolarmeer', 'Arktik'], ['Südlicher Ozean', 'Südpolarmeer', 'Antarktischer Ozean'],
]);

// ── Mythologie & Religion ──
list('weltwunder', 'Mythologie & Religion', 'Die sieben Weltwunder der Antike', 'Stichworte genügen, etwa „Koloss“ oder „Leuchtturm“.', 120, [
  ['Pyramiden von Gizeh', 'Pyramiden', 'Cheopspyramide'],
  ['Hängende Gärten der Semiramis', 'Hängende Gärten', 'Gärten von Babylon'],
  ['Zeusstatue des Phidias', 'Zeusstatue', 'Zeus-Statue', 'Statue des Zeus'],
  ['Tempel der Artemis in Ephesos', 'Artemistempel', 'Tempel der Artemis', 'Artemis-Tempel'],
  ['Mausoleum von Halikarnassos', 'Mausoleum'],
  ['Koloss von Rhodos', 'Koloss'],
  ['Leuchtturm von Pharos', 'Leuchtturm', 'Pharos', 'Leuchtturm von Alexandria'],
]);
list('olympier', 'Mythologie & Religion', 'Die olympischen Götter', 'Die Götter auf dem Olymp – mit Hestia und Dionysos sind es 13 Namen.', 150, [
  'Zeus', 'Hera', 'Poseidon', 'Demeter', ['Athene', 'Athena'], ['Apollon', 'Apollo'], 'Artemis', 'Ares', 'Aphrodite',
  ['Hephaistos', 'Hephaestus'], 'Hermes', 'Hestia', 'Dionysos',
]);
list('musen', 'Mythologie & Religion', 'Die neun Musen', 'Die Töchter des Zeus und der Mnemosyne.', 150, [
  'Kalliope', 'Klio', 'Erato', 'Euterpe', 'Melpomene', ['Polyhymnia', 'Polymnia'], 'Terpsichore', ['Thalia', 'Thaleia'], 'Urania',
]);
list('todsuenden', 'Mythologie & Religion', 'Die sieben Todsünden', 'Die Hauptlaster der christlichen Tradition.', 90, [
  ['Hochmut', 'Stolz', 'Übermut'], ['Geiz', 'Habgier', 'Gier'], ['Wollust', 'Lust'], ['Zorn', 'Wut'], ['Völlerei', 'Maßlosigkeit', 'Gefräßigkeit'], 'Neid', ['Trägheit', 'Faulheit'],
]);
list('apostel', 'Mythologie & Religion', 'Die zwölf Apostel', 'Die Jünger Jesu – „Jakobus“ und „Judas“ zählen doppelt.', 180, [
  ['Petrus', 'Simon Petrus'], 'Andreas', ['Jakobus der Ältere', 'Jakobus'], 'Johannes', 'Philippus', 'Bartholomäus', 'Thomas', 'Matthäus',
  ['Jakobus der Jüngere', 'Jakobus'], ['Judas Thaddäus', 'Thaddäus', 'Judas'], ['Simon Zelotes', 'Simon', 'Simon der Zelot'], ['Judas Iskariot', 'Judas'],
]);
list('evangelisten', 'Mythologie & Religion', 'Die vier Evangelisten', 'Die Verfasser der Evangelien.', 45, ['Matthäus', 'Markus', 'Lukas', 'Johannes']);
list('sternzeichen', 'Mythologie & Religion', 'Die Sternzeichen', 'Alle zwölf Zeichen des westlichen Tierkreises.', 120, [
  'Widder', 'Stier', 'Zwillinge', 'Krebs', 'Löwe', 'Jungfrau', 'Waage', 'Skorpion', 'Schütze', 'Steinbock', 'Wassermann', 'Fische',
]);
list('chinesische-tierzeichen', 'Mythologie & Religion', 'Die chinesischen Tierzeichen', 'Die zwölf Tiere des chinesischen Kalenders.', 120, [
  'Ratte', ['Büffel', 'Ochse', 'Rind'], 'Tiger', ['Hase', 'Kaninchen'], 'Drache', 'Schlange', 'Pferd', ['Ziege', 'Schaf'], 'Affe', 'Hahn', 'Hund', 'Schwein',
]);

// ── Kultur & Unterhaltung ──
list('beatles', 'Kultur & Unterhaltung', 'Die Beatles', 'Die vier Mitglieder der Band aus Liverpool.', 60, [
  ['John Lennon', 'Lennon'], ['Paul McCartney', 'McCartney'], ['George Harrison', 'Harrison'], ['Ringo Starr', 'Starr', 'Ringo'],
]);
grid('harry-potter', 'Kultur & Unterhaltung', 'Die Harry-Potter-Bände', 'Die sieben Bände – ohne „Harry Potter und“.', 150, [
  ['1997', 'der Stein der Weisen', 'Stein der Weisen'], ['1998', 'die Kammer des Schreckens', 'Kammer des Schreckens'],
  ['1999', 'der Gefangene von Askaban', 'Gefangene von Askaban', 'Gefangener von Askaban'], ['2000', 'der Feuerkelch', 'Feuerkelch'],
  ['2003', 'der Orden des Phönix', 'Orden des Phönix', 'Orden des Phoenix'], ['2005', 'der Halbblutprinz', 'Halbblutprinz'],
  ['2007', 'die Heiligtümer des Todes', 'Heiligtümer des Todes'],
]);
list('musketiere', 'Kultur & Unterhaltung', 'Die drei Musketiere', 'Die drei Freunde aus dem Roman von Alexandre Dumas – und ihr junger Gefährte.', 60, [
  'Athos', 'Porthos', 'Aramis', ['d’Artagnan', "d'Artagnan", 'dArtagnan', 'Artagnan'],
]);
list('schach', 'Kultur & Unterhaltung', 'Die Schachfiguren', 'Alle sechs Arten von Figuren.', 45, ['König', ['Dame', 'Königin'], 'Turm', 'Läufer', ['Springer', 'Pferd'], 'Bauer']);
list('kartenfarben', 'Kultur & Unterhaltung', 'Die französischen Kartenfarben', 'Die vier Farben eines Skat- oder Rommé-Blatts.', 45, ['Kreuz', 'Pik', 'Herz', 'Karo']);
list('nobelpreise', 'Kultur & Unterhaltung', 'Die Nobelpreis-Kategorien', 'Alle sechs Bereiche, in denen ein Nobelpreis vergeben wird.', 60, [
  'Physik', 'Chemie', ['Medizin', 'Physiologie oder Medizin', 'Physiologie'], 'Literatur', ['Frieden', 'Friedensnobelpreis'], ['Wirtschaftswissenschaften', 'Wirtschaft', 'Ökonomie'],
]);

// ── Sport ──
list('fussball-weltmeister', 'Sport', 'Fußball-Weltmeister', 'Alle Länder, die die Männer-WM gewonnen haben (Stand 2026).', 90, [
  'Brasilien', 'Deutschland', 'Italien', 'Argentinien', 'Frankreich', 'Uruguay', 'England', 'Spanien',
]);
list('olympische-ringe', 'Sport', 'Die Farben der olympischen Ringe', 'Die fünf Ringfarben der olympischen Flagge.', 45, ['Blau', 'Gelb', 'Schwarz', 'Grün', 'Rot']);
list('grand-slams', 'Sport', 'Die Grand-Slam-Turniere', 'Die vier größten Tennisturniere.', 60, [
  ['Australian Open', 'Melbourne'], ['French Open', 'Roland Garros', 'Roland-Garros'], 'Wimbledon', ['US Open', 'U.S. Open'],
]);
list('f1-deutsche', 'Sport', 'Deutsche Formel-1-Weltmeister', 'Alle deutschen Fahrerweltmeister.', 45, [
  ['Michael Schumacher', 'Schumacher'], ['Sebastian Vettel', 'Vettel'], ['Nico Rosberg', 'Rosberg'],
]);
grid('olympia-orte', 'Sport', 'Olympische Sommerspiele seit 2000', 'Die Gastgeberstädte.', 90, [
  ['2000', 'Sydney'], ['2004', 'Athen'], ['2008', 'Peking', 'Beijing'], ['2012', 'London'], ['2016', 'Rio de Janeiro', 'Rio'], ['2020', 'Tokio', 'Tokyo'], ['2024', 'Paris'],
]);

// Tile picture per quiz (a key of lib/bild.ts), shown in the list.
export const AW_LISTEN_COVERS: Record<string, string> = {
  'aw-planeten': 'galilei', 'aw-elemente-20': 'marie-curie', 'aw-beatles': 'paul-mccartney', 'aw-fussball-weltmeister': 'beckenbauer',
  'aw-f1-deutsche': 'schumacher', 'aw-grand-slams': 'federer',
};

export const AW_LISTEN = L;
export const awListeById = (id: string) => L.find(q => q.id === id);
