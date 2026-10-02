// Historic events by region: the world-history timelines (/weltgeschichte), the
// timeline game (/zeitstrahl) and the "Zeitleisten" quiz topics in Geschichte.
// Year < 0 = BC; `ca` marks approximate dates. Card ids of the quiz topics are the
// position within a region — only ever append events to a region's list.

export type TimelineRegion = 'urgeschichte' | 'europa' | 'asien' | 'afrika' | 'amerika' | 'ozeanien' | 'welt';

export interface TimelineEvent {
  y: number;
  text: string;
  ca?: boolean;
}

export const TIMELINE_REGIONS: { id: TimelineRegion; name: [string, string]; icon: string }[] = [
  { id: 'urgeschichte', name: ['Prehistory', 'Urgeschichte'], icon: '🦴' },
  { id: 'europa', name: ['Europe', 'Europa'], icon: '🏰' },
  { id: 'asien', name: ['Asia', 'Asien'], icon: '🏯' },
  { id: 'afrika', name: ['Africa', 'Afrika'], icon: '🌍' },
  { id: 'amerika', name: ['Americas', 'Amerika'], icon: '🗽' },
  { id: 'ozeanien', name: ['Oceania', 'Ozeanien'], icon: '🏝️' },
  { id: 'welt', name: ['World', 'Welt'], icon: '🌐' },
];

const e = (y: number, text: string, ca = false): TimelineEvent => (ca ? { y, text, ca } : { y, text });

export const TIMELINES: Record<TimelineRegion, TimelineEvent[]> = {
  // After Wikipedia "Zeittafel der Menschheitsgeschichte" (Ausbreitung des Menschen).
  urgeschichte: [
    e(-2600000, 'Beginn der Altsteinzeit: erste Vertreter der Gattung Homo', true),
    e(-1000000, 'Älteste sicher von Menschen angelegte Feuerstellen (Homo erectus)', true),
    e(-300000, 'Der anatomisch moderne Mensch (Homo sapiens) entsteht in Afrika', true),
    e(-110000, 'Menschen erreichen den Nahen Osten', true),
    e(-60000, 'Menschen erreichen Australien', true),
    e(-45000, 'Beginn der Besiedlung Europas durch den Homo sapiens', true),
    e(-17000, 'Älteste Töpferwaren der Welt (Höhlen von Xianrendong, China)', true),
    e(-15000, 'Beginn der Besiedlung Amerikas', true),
    e(-14000, 'Ältester sicherer Nachweis eines Haushunds (Doppelgrab von Oberkassel)', true),
    e(-11000, 'Beginn des Ackerbaus im Fruchtbaren Halbmond', true),
    e(-7400, 'Gründung von Çatalhöyük in Anatolien, einer der ältesten Städte', true),
    e(-7000, 'Reis wird in China angebaut', true),
    e(-4000, 'Erste Hochkulturen entstehen – Beginn des Altertums', true),
    e(-1500, 'Zweite Besiedlungswelle Ozeaniens', true),
  ],
  europa: [
    e(-776, 'Erste überlieferte Olympische Spiele'),
    e(-753, 'Gründung Roms (der Sage nach)'),
    e(-490, 'Schlacht bei Marathon'),
    e(-336, 'Alexander der Große wird König von Makedonien'),
    e(-44, 'Ermordung Julius Caesars'),
    e(79, 'Der Vesuv begräbt Pompeji'),
    e(476, 'Ende des Weströmischen Reichs'),
    e(800, 'Kaiserkrönung Karls des Großen'),
    e(1066, 'Schlacht bei Hastings'),
    e(1096, 'Beginn des Ersten Kreuzzugs'),
    e(1215, 'Magna Carta'),
    e(1347, 'Die Pest erreicht Europa'),
    e(1453, 'Die Osmanen erobern Konstantinopel'),
    e(1517, 'Luthers 95 Thesen'),
    e(1618, 'Beginn des Dreißigjährigen Kriegs'),
    e(1648, 'Westfälischer Friede'),
    e(1687, 'Newtons „Principia“ erscheint'),
    e(1789, 'Sturm auf die Bastille'),
    e(1804, 'Napoleon krönt sich zum Kaiser'),
    e(1815, 'Schlacht bei Waterloo'),
    e(1848, 'Märzrevolution in Deutschland'),
    e(1871, 'Gründung des Deutschen Kaiserreichs'),
    e(1886, 'Carl Benz meldet das Automobil zum Patent an'),
    e(1914, 'Beginn des Ersten Weltkriegs'),
    e(1917, 'Oktoberrevolution in Russland'),
    e(1933, 'Hitler wird Reichskanzler'),
    e(1949, 'Gründung der Bundesrepublik und der DDR'),
    e(1961, 'Bau der Berliner Mauer'),
    e(1989, 'Fall der Berliner Mauer'),
    e(1990, 'Deutsche Wiedervereinigung'),
    e(1991, 'Auflösung der Sowjetunion'),
    e(1993, 'Der Vertrag von Maastricht tritt in Kraft'),
    e(2002, 'Einführung des Euro-Bargelds'),
  ],
  asien: [
    e(-221, 'Qin Shihuangdi eint China und wird erster Kaiser'),
    e(622, 'Mohammeds Auswanderung nach Medina (Hidschra)'),
    e(1206, 'Dschingis Khan wird Großkhan der Mongolen'),
    e(1271, 'Marco Polo bricht nach China auf'),
    e(1526, 'Gründung des Mogulreichs in Indien'),
    e(1603, 'Beginn der Edo-Zeit in Japan'),
    e(1632, 'Baubeginn des Taj Mahal'),
    e(1839, 'Beginn des Ersten Opiumkriegs'),
    e(1868, 'Meiji-Restauration in Japan'),
    e(1912, 'Ende des Kaiserreichs in China, Gründung der Republik China'),
    e(1947, 'Unabhängigkeit Indiens und Pakistans'),
    e(1948, 'Gründung des Staates Israel'),
    e(1949, 'Gründung der Volksrepublik China'),
    e(1950, 'Beginn des Koreakriegs'),
    e(1975, 'Ende des Vietnamkriegs'),
    e(1979, 'Islamische Revolution im Iran'),
    e(1997, 'Rückgabe Hongkongs an China'),
  ],
  afrika: [
    e(-2560, 'Fertigstellung der Cheops-Pyramide', true),
    e(-331, 'Alexander der Große gründet Alexandria'),
    e(-146, 'Rom zerstört Karthago'),
    e(-30, 'Tod Kleopatras – Ägypten wird römische Provinz'),
    e(1324, 'Mansa Musa, König von Mali, pilgert nach Mekka'),
    e(1488, 'Bartolomeu Dias umsegelt das Kap der Guten Hoffnung'),
    e(1652, 'Die Niederländer gründen Kapstadt'),
    e(1869, 'Eröffnung des Suezkanals'),
    e(1884, 'Beginn der Berliner Kongokonferenz'),
    e(1896, 'Schlacht von Adwa: Äthiopien besiegt Italien'),
    e(1957, 'Ghana wird als erste Kolonie südlich der Sahara unabhängig'),
    e(1960, '„Afrikanisches Jahr“: 17 Staaten werden unabhängig'),
    e(1963, 'Gründung der Organisation für Afrikanische Einheit'),
    e(1990, 'Nelson Mandela wird aus der Haft entlassen'),
    e(1994, 'Nelson Mandela wird erster schwarzer Präsident Südafrikas'),
  ],
  amerika: [
    e(250, 'Beginn der klassischen Maya-Zeit', true),
    e(1325, 'Die Azteken gründen Tenochtitlan', true),
    e(1492, 'Kolumbus erreicht Amerika'),
    e(1500, 'Pedro Álvares Cabral erreicht Brasilien'),
    e(1521, 'Hernán Cortés erobert Tenochtitlan'),
    e(1533, 'Pizarro lässt den Inka-Herrscher Atahualpa hinrichten'),
    e(1607, 'Gründung von Jamestown, der ersten dauerhaften englischen Siedlung'),
    e(1620, 'Die Mayflower landet in Neuengland'),
    e(1776, 'Unabhängigkeitserklärung der USA'),
    e(1804, 'Haiti wird unabhängig'),
    e(1822, 'Brasilien wird unabhängig'),
    e(1861, 'Beginn des Amerikanischen Bürgerkriegs'),
    e(1867, 'Die USA kaufen Alaska von Russland'),
    e(1914, 'Eröffnung des Panamakanals'),
    e(1929, 'Börsencrash in New York'),
    e(1959, 'Revolution in Kuba'),
    e(1962, 'Kubakrise'),
    e(1963, 'Ermordung John F. Kennedys'),
    e(1973, 'Militärputsch in Chile'),
    e(2001, 'Anschläge vom 11. September'),
    e(2008, 'Barack Obama wird zum Präsidenten der USA gewählt'),
  ],
  ozeanien: [
    e(1280, 'Polynesier besiedeln Neuseeland', true),
    e(1606, 'Willem Janszoon landet als erster Europäer in Australien'),
    e(1642, 'Abel Tasman erreicht Tasmanien und Neuseeland'),
    e(1770, 'James Cook erkundet die Ostküste Australiens'),
    e(1788, 'Die „First Fleet“ gründet die Sträflingskolonie Sydney'),
    e(1840, 'Vertrag von Waitangi in Neuseeland'),
    e(1893, 'Neuseeland führt als erstes Land das Frauenwahlrecht ein'),
    e(1901, 'Gründung des Australischen Bundes'),
    e(1941, 'Japan greift Pearl Harbor auf Hawaii an'),
    e(1962, 'Samoa wird als erster Pazifikstaat unabhängig'),
    e(1975, 'Papua-Neuguinea wird unabhängig'),
  ],
  welt: [
    e(1519, 'Magellan bricht zur ersten Weltumsegelung auf'),
    e(1859, 'Darwins „Über die Entstehung der Arten“'),
    e(1903, 'Erster Motorflug der Brüder Wright'),
    e(1912, 'Untergang der Titanic'),
    e(1939, 'Beginn des Zweiten Weltkriegs'),
    e(1945, 'Ende des Zweiten Weltkriegs'),
    e(1945, 'Gründung der Vereinten Nationen'),
    e(1957, 'Start des Satelliten Sputnik 1'),
    e(1969, 'Erste Mondlandung'),
    e(2007, 'Vorstellung des ersten iPhones'),
    e(2020, 'Die WHO erklärt Corona zur Pandemie'),
  ],
};

export function eventsOf(region: TimelineRegion | 'alle'): (TimelineEvent & { region: TimelineRegion })[] {
  const regions = region === 'alle' ? TIMELINE_REGIONS.map(r => r.id) : [region];
  return regions.flatMap(r => TIMELINES[r].map(ev => ({ ...ev, region: r })));
}

export function formatYear(y: number, ca = false): string {
  const c = ca ? 'ca. ' : '';
  if (y <= -1000000) return `vor ${c}${(-y / 1000000).toLocaleString('de-DE')} Mio. Jahren`;
  if (y < 0) return `${c}${(-y).toLocaleString('de-DE')} v. Chr.`;
  return `${c}${y}`;
}
