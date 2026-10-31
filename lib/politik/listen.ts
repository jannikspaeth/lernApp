// Typed "name them all" quizzes of Politik (chancellors, presidents, popes …), run by the geography
// QuizRunner. Grid quizzes show number and term of office; a name held twice (Trump, Churchill, Putin)
// fills every cell at once. Ids start with `pol-` so their bests don't count for Geografie.
// Current office holders are "seit …" — re-check them when touching this file (as of Oct 2026).
import type { GeoQuiz, QuizItem } from '../geografie/quizzes';

export interface PolListe extends GeoQuiz {
  people: boolean; // office holders (grid) vs. members of a group (list)
}

// [Amtszeit, Name, weitere akzeptierte Schreibweisen …]; the surname (last word) is always accepted.
type Row = [term: string, name: string, ...alt: string[]];

function surname(name: string): string[] {
  const parts = name.split(' ');
  const last = parts[parts.length - 1];
  if (/^[IVX]+$/.test(last) || parts.length < 2) return [];
  return [last];
}

const people = (rows: Row[], numbered = true, autoSurname = true): QuizItem[] =>
  rows.map(([term, name, ...alt], i) => ({
    prompt: numbered ? `${i + 1}. · ${term}` : term,
    answer: name,
    accepts: [...new Set([...(autoSurname ? surname(name) : []), ...alt])].filter(a => a !== name),
  }));

const L: PolListe[] = [];
const grid = (id: string, section: string, title: string, blurb: string, seconds: number, items: QuizItem[]) =>
  L.push({ id: `pol-${id}`, cat: 'politik', section, title, blurb, seconds, mode: 'grid', items, people: true });

// ── Deutschland ──
grid('bundeskanzler', 'Deutschland', 'Die Bundeskanzler', 'Nenne alle Kanzler der Bundesrepublik seit 1949.', 180, people([
  ['1949–1963', 'Konrad Adenauer'],
  ['1963–1966', 'Ludwig Erhard'],
  ['1966–1969', 'Kurt Georg Kiesinger'],
  ['1969–1974', 'Willy Brandt'],
  ['1974–1982', 'Helmut Schmidt'],
  ['1982–1998', 'Helmut Kohl'],
  ['1998–2005', 'Gerhard Schröder', 'Schroeder'],
  ['2005–2021', 'Angela Merkel'],
  ['2021–2025', 'Olaf Scholz'],
  ['seit 2025', 'Friedrich Merz'],
]));
grid('bundespraesidenten', 'Deutschland', 'Die Bundespräsidenten', 'Nenne alle Staatsoberhäupter der Bundesrepublik seit 1949.', 240, people([
  ['1949–1959', 'Theodor Heuss'],
  ['1959–1969', 'Heinrich Lübke', 'Luebke'],
  ['1969–1974', 'Gustav Heinemann'],
  ['1974–1979', 'Walter Scheel'],
  ['1979–1984', 'Karl Carstens'],
  ['1984–1994', 'Richard von Weizsäcker', 'Weizsäcker', 'Weizsaecker'],
  ['1994–1999', 'Roman Herzog'],
  ['1999–2004', 'Johannes Rau'],
  ['2004–2010', 'Horst Köhler', 'Koehler'],
  ['2010–2012', 'Christian Wulff'],
  ['2012–2017', 'Joachim Gauck'],
  ['seit 2017', 'Frank-Walter Steinmeier'],
]));
grid('bundestagspraesidenten', 'Deutschland', 'Die Bundestagspräsidenten', 'Wer leitete den Bundestag? Alle Präsidentinnen und Präsidenten seit 1949.', 300, people([
  ['1949–1950', 'Erich Köhler'],
  ['1950–1954', 'Hermann Ehlers'],
  ['1954–1969', 'Eugen Gerstenmaier'],
  ['1969–1972', 'Kai-Uwe von Hassel', 'von Hassel'],
  ['1972–1976', 'Annemarie Renger'],
  ['1976–1979', 'Karl Carstens'],
  ['1979–1983', 'Richard Stücklen', 'Stuecklen'],
  ['1983–1984', 'Rainer Barzel'],
  ['1984–1988', 'Philipp Jenninger'],
  ['1988–1998', 'Rita Süssmuth', 'Süßmuth', 'Suessmuth'],
  ['1998–2005', 'Wolfgang Thierse'],
  ['2005–2017', 'Norbert Lammert'],
  ['2017–2021', 'Wolfgang Schäuble', 'Schaeuble'],
  ['2021–2025', 'Bärbel Bas', 'Baerbel Bas'],
  ['seit 2025', 'Julia Klöckner', 'Kloeckner'],
]));
grid('ddr-staatsoberhaeupter', 'Deutschland', 'Staatsoberhäupter der DDR', 'Präsident, dann Vorsitzende des Staatsrats und zuletzt der Volkskammer – 1949 bis 1990.', 180, people([
  ['Präsident 1949–1960', 'Wilhelm Pieck'],
  ['Staatsrat 1960–1973', 'Walter Ulbricht'],
  ['Staatsrat 1973–1976', 'Willi Stoph'],
  ['Staatsrat 1976–1989', 'Erich Honecker'],
  ['Staatsrat Okt.–Dez. 1989', 'Egon Krenz'],
  ['Staatsrat Dez. 1989–Apr. 1990', 'Manfred Gerlach'],
  ['Volkskammer Apr.–Okt. 1990', 'Sabine Bergmann-Pohl', 'Bergmann Pohl'],
]));
grid('reichskanzler-kaiserreich', 'Deutschland', 'Reichskanzler des Kaiserreichs', 'Alle Kanzler von Bismarck bis zur Revolution 1918.', 180, people([
  ['1871–1890', 'Otto von Bismarck'],
  ['1890–1894', 'Leo von Caprivi'],
  ['1894–1900', 'Chlodwig zu Hohenlohe-Schillingsfürst', 'Hohenlohe', 'Hohenlohe-Schillingsfürst', 'Chlodwig Hohenlohe'],
  ['1900–1909', 'Bernhard von Bülow', 'Bülow', 'Buelow'],
  ['1909–1917', 'Theobald von Bethmann Hollweg', 'Bethmann Hollweg', 'Bethmann-Hollweg'],
  ['1917', 'Georg Michaelis'],
  ['1917–1918', 'Georg von Hertling'],
  ['1918', 'Max von Baden', 'Prinz Max von Baden'],
]));
grid('reichskanzler-weimar', 'Deutschland', 'Reichskanzler der Weimarer Republik', 'Von Scheidemann bis Hitler – wer regierte 1919 bis 1933?', 360, people([
  ['1919', 'Philipp Scheidemann'],
  ['1919–1920', 'Gustav Bauer'],
  ['1920', 'Hermann Müller', 'Mueller'],
  ['1920–1921', 'Constantin Fehrenbach', 'Konstantin Fehrenbach'],
  ['1921–1922', 'Joseph Wirth', 'Josef Wirth'],
  ['1922–1923', 'Wilhelm Cuno'],
  ['1923', 'Gustav Stresemann'],
  ['1923–1925', 'Wilhelm Marx'],
  ['1925–1926', 'Hans Luther'],
  ['1926–1928', 'Wilhelm Marx'],
  ['1928–1930', 'Hermann Müller', 'Mueller'],
  ['1930–1932', 'Heinrich Brüning', 'Bruening'],
  ['1932', 'Franz von Papen', 'Papen'],
  ['1932–1933', 'Kurt von Schleicher', 'Schleicher'],
  ['1933–1945', 'Adolf Hitler'],
]));
grid('staatsoberhaeupter-reich', 'Deutschland', 'Kaiser und Reichspräsidenten', 'Die Staatsoberhäupter des Deutschen Reichs von 1871 bis 1934.', 120, people([
  ['Kaiser 1871–1888', 'Wilhelm I.', 'Wilhelm I', 'Wilhelm der Erste', 'Wilhelm 1'],
  ['Kaiser 1888', 'Friedrich III.', 'Friedrich III', 'Friedrich 3'],
  ['Kaiser 1888–1918', 'Wilhelm II.', 'Wilhelm II', 'Wilhelm der Zweite', 'Wilhelm 2'],
  ['Reichspräsident 1919–1925', 'Friedrich Ebert'],
  ['Reichspräsident 1925–1934', 'Paul von Hindenburg', 'Hindenburg'],
], false, false));

// ── Welt ──
grid('us-praesidenten', 'Welt', 'Die US-Präsidenten', 'Alle 47 Präsidentschaften von Washington bis heute – Nachnamen reichen.', 900, people([
  ['1789–1797', 'George Washington'],
  ['1797–1801', 'John Adams'],
  ['1801–1809', 'Thomas Jefferson'],
  ['1809–1817', 'James Madison'],
  ['1817–1825', 'James Monroe'],
  ['1825–1829', 'John Quincy Adams'],
  ['1829–1837', 'Andrew Jackson'],
  ['1837–1841', 'Martin Van Buren', 'Van Buren'],
  ['1841', 'William Henry Harrison'],
  ['1841–1845', 'John Tyler'],
  ['1845–1849', 'James K. Polk'],
  ['1849–1850', 'Zachary Taylor'],
  ['1850–1853', 'Millard Fillmore'],
  ['1853–1857', 'Franklin Pierce'],
  ['1857–1861', 'James Buchanan'],
  ['1861–1865', 'Abraham Lincoln'],
  ['1865–1869', 'Andrew Johnson'],
  ['1869–1877', 'Ulysses S. Grant'],
  ['1877–1881', 'Rutherford B. Hayes'],
  ['1881', 'James A. Garfield'],
  ['1881–1885', 'Chester A. Arthur'],
  ['1885–1889', 'Grover Cleveland'],
  ['1889–1893', 'Benjamin Harrison'],
  ['1893–1897', 'Grover Cleveland'],
  ['1897–1901', 'William McKinley'],
  ['1901–1909', 'Theodore Roosevelt'],
  ['1909–1913', 'William Howard Taft'],
  ['1913–1921', 'Woodrow Wilson'],
  ['1921–1923', 'Warren G. Harding'],
  ['1923–1929', 'Calvin Coolidge'],
  ['1929–1933', 'Herbert Hoover'],
  ['1933–1945', 'Franklin D. Roosevelt', 'FDR'],
  ['1945–1953', 'Harry S. Truman'],
  ['1953–1961', 'Dwight D. Eisenhower'],
  ['1961–1963', 'John F. Kennedy', 'JFK'],
  ['1963–1969', 'Lyndon B. Johnson', 'LBJ'],
  ['1969–1974', 'Richard Nixon'],
  ['1974–1977', 'Gerald Ford'],
  ['1977–1981', 'Jimmy Carter'],
  ['1981–1989', 'Ronald Reagan'],
  ['1989–1993', 'George H. W. Bush'],
  ['1993–2001', 'Bill Clinton'],
  ['2001–2009', 'George W. Bush'],
  ['2009–2017', 'Barack Obama'],
  ['2017–2021', 'Donald Trump'],
  ['2021–2025', 'Joe Biden'],
  ['seit 2025', 'Donald Trump'],
]));
grid('britische-premiers', 'Welt', 'Britische Premierminister seit 1940', 'Von Churchill bis heute – wer regierte in der Downing Street?', 420, people([
  ['1940–1945', 'Winston Churchill'],
  ['1945–1951', 'Clement Attlee'],
  ['1951–1955', 'Winston Churchill'],
  ['1955–1957', 'Anthony Eden'],
  ['1957–1963', 'Harold Macmillan'],
  ['1963–1964', 'Alec Douglas-Home', 'Douglas Home'],
  ['1964–1970', 'Harold Wilson'],
  ['1970–1974', 'Edward Heath'],
  ['1974–1976', 'Harold Wilson'],
  ['1976–1979', 'James Callaghan'],
  ['1979–1990', 'Margaret Thatcher'],
  ['1990–1997', 'John Major'],
  ['1997–2007', 'Tony Blair'],
  ['2007–2010', 'Gordon Brown'],
  ['2010–2016', 'David Cameron'],
  ['2016–2019', 'Theresa May'],
  ['2019–2022', 'Boris Johnson'],
  ['2022', 'Liz Truss'],
  ['2022–2024', 'Rishi Sunak'],
  ['2024–2026', 'Keir Starmer'],
  ['seit 2026', 'Andy Burnham'],
]));
grid('franzoesische-praesidenten', 'Welt', 'Präsidenten Frankreichs', 'Alle Präsidenten der Fünften Republik seit 1959.', 150, people([
  ['1959–1969', 'Charles de Gaulle', 'de Gaulle', 'Gaulle'],
  ['1969–1974', 'Georges Pompidou'],
  ['1974–1981', 'Valéry Giscard d’Estaing', 'Giscard', 'Giscard d’Estaing', 'Giscard dEstaing', 'Giscard d Estaing'],
  ['1981–1995', 'François Mitterrand', 'Francois Mitterrand'],
  ['1995–2007', 'Jacques Chirac'],
  ['2007–2012', 'Nicolas Sarkozy'],
  ['2012–2017', 'François Hollande', 'Francois Hollande'],
  ['seit 2017', 'Emmanuel Macron'],
], true, true));
grid('kremlchefs', 'Welt', 'Machthaber im Kreml', 'Die Führer der Sowjetunion und die Präsidenten Russlands seit 1917.', 300, people([
  ['1917–1924', 'Lenin', 'Wladimir Lenin', 'Vladimir Lenin', 'Uljanow'],
  ['1924–1953', 'Stalin', 'Josef Stalin', 'Joseph Stalin'],
  ['1953–1964', 'Nikita Chruschtschow', 'Chruschtschow', 'Khrushchev', 'Chrustschow'],
  ['1964–1982', 'Leonid Breschnew', 'Breschnew', 'Brezhnev', 'Breznev'],
  ['1982–1984', 'Juri Andropow', 'Andropow', 'Andropov'],
  ['1984–1985', 'Konstantin Tschernenko', 'Tschernenko', 'Chernenko'],
  ['1985–1991', 'Michail Gorbatschow', 'Gorbatschow', 'Gorbachev', 'Gorbi'],
  ['1991–1999', 'Boris Jelzin', 'Jelzin', 'Yeltsin', 'Eltsin'],
  ['2000–2008', 'Wladimir Putin', 'Putin'],
  ['2008–2012', 'Dmitri Medwedew', 'Medwedew', 'Medvedev'],
  ['seit 2012', 'Wladimir Putin', 'Putin'],
], true, false));
grid('china-fuehrer', 'Welt', 'Führer der Volksrepublik China', 'Wer stand seit 1949 an der Spitze Chinas?', 150, people([
  ['1949–1976', 'Mao Zedong', 'Mao', 'Mao Tse-tung', 'Mao Tsetung'],
  ['1976–1978', 'Hua Guofeng', 'Hua'],
  ['1978–1989', 'Deng Xiaoping', 'Deng'],
  ['1989–2002', 'Jiang Zemin', 'Jiang'],
  ['2002–2012', 'Hu Jintao', 'Hu'],
  ['seit 2012', 'Xi Jinping', 'Xi'],
], true, false));

// ── Organisationen ──
grid('un-generalsekretaere', 'Organisationen', 'UN-Generalsekretäre', 'Alle Generalsekretäre der Vereinten Nationen seit 1946.', 180, people([
  ['1946–1952', 'Trygve Lie'],
  ['1953–1961', 'Dag Hammarskjöld', 'Hammarskjoeld', 'Hammarskjold'],
  ['1961–1971', 'U Thant', 'Thant'],
  ['1972–1981', 'Kurt Waldheim'],
  ['1982–1991', 'Javier Pérez de Cuéllar', 'Perez de Cuellar', 'Pérez de Cuéllar'],
  ['1992–1996', 'Boutros Boutros-Ghali', 'Boutros-Ghali', 'Boutros Ghali'],
  ['1997–2006', 'Kofi Annan'],
  ['2007–2016', 'Ban Ki-moon', 'Ban', 'Ban Ki moon'],
  ['2017–2026', 'António Guterres', 'Antonio Guterres'],
], true, true));
grid('eu-kommissionspraesidenten', 'Organisationen', 'Präsidenten der EU-Kommission', 'Alle Kommissionspräsidenten seit 1958 (ohne Übergangszeiten).', 300, people([
  ['1958–1967', 'Walter Hallstein'],
  ['1967–1970', 'Jean Rey'],
  ['1970–1972', 'Franco Maria Malfatti'],
  ['1972–1973', 'Sicco Mansholt'],
  ['1973–1977', 'François-Xavier Ortoli', 'Ortoli'],
  ['1977–1981', 'Roy Jenkins'],
  ['1981–1985', 'Gaston Thorn'],
  ['1985–1995', 'Jacques Delors'],
  ['1995–1999', 'Jacques Santer'],
  ['1999–2004', 'Romano Prodi'],
  ['2004–2014', 'José Manuel Barroso', 'Jose Manuel Barroso'],
  ['2014–2019', 'Jean-Claude Juncker'],
  ['seit 2019', 'Ursula von der Leyen', 'von der Leyen', 'Leyen'],
]));
grid('paepste', 'Organisationen', 'Die Päpste seit 1900', 'Name und Ordnungszahl – z. B. „Pius XII“ oder „Pius 12“.', 300, people([
  ['1878–1903', 'Leo XIII.', 'Leo XIII', 'Leo 13'],
  ['1903–1914', 'Pius X.', 'Pius X', 'Pius 10'],
  ['1914–1922', 'Benedikt XV.', 'Benedikt XV', 'Benedikt 15'],
  ['1922–1939', 'Pius XI.', 'Pius XI', 'Pius 11'],
  ['1939–1958', 'Pius XII.', 'Pius XII', 'Pius 12'],
  ['1958–1963', 'Johannes XXIII.', 'Johannes XXIII', 'Johannes 23'],
  ['1963–1978', 'Paul VI.', 'Paul VI', 'Paul 6'],
  ['1978', 'Johannes Paul I.', 'Johannes Paul I', 'Johannes Paul 1'],
  ['1978–2005', 'Johannes Paul II.', 'Johannes Paul II', 'Johannes Paul 2'],
  ['2005–2013', 'Benedikt XVI.', 'Benedikt XVI', 'Benedikt 16'],
  ['2013–2025', 'Franziskus', 'Franz', 'Papst Franziskus'],
  ['seit 2025', 'Leo XIV.', 'Leo XIV', 'Leo 14'],
], false, false));

// Members of a group, in any order.
const list = (id: string, section: string, title: string, blurb: string, seconds: number, names: (string | string[])[]) =>
  L.push({
    id: `pol-${id}`, cat: 'politik', section, title, blurb, seconds, mode: 'list', people: false,
    items: names.map(n => (typeof n === 'string' ? { answer: n, accepts: [] } : { answer: n[0], accepts: n.slice(1) })),
  });

list('g7', 'Organisationen', 'Die G7-Staaten', 'Die sieben großen Industrienationen.', 90, ['Deutschland', ['Frankreich'], ['Italien'], 'Japan', 'Kanada', ['USA', 'Vereinigte Staaten', 'Amerika'], ['Vereinigtes Königreich', 'Großbritannien', 'UK', 'England']]);
list('sicherheitsrat', 'Organisationen', 'Ständige Mitglieder im UN-Sicherheitsrat', 'Die fünf Vetomächte.', 60, ['China', 'Frankreich', 'Russland', ['USA', 'Vereinigte Staaten', 'Amerika'], ['Vereinigtes Königreich', 'Großbritannien', 'UK', 'England']]);
list('bundestag-parteien', 'Deutschland', 'Parteien im Bundestag', 'Alle Parteien mit Sitzen im 21. Bundestag (seit 2025) – CDU und CSU einzeln.', 90, [
  ['CDU', 'Christlich Demokratische Union'], ['CSU', 'Christlich-Soziale Union'], ['AfD', 'Alternative für Deutschland'],
  ['SPD', 'Sozialdemokratische Partei'], ['Grüne', 'Die Grünen', 'Bündnis 90/Die Grünen', 'Gruene', 'Bündnis 90'], ['Die Linke', 'Linke', 'Linkspartei'],
  ['SSW', 'Südschleswigscher Wählerverband'],
]);

export const POL_LISTEN = L;
export const polListeById = (id: string) => L.find(q => q.id === id);
