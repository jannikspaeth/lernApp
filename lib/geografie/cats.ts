// The nine categories of Geografie: each is a group of topics and a tile on the subject page.
export interface GeoCat {
  id: string;
  group: [string, string]; // [en, de]; the German name is the key topics are filtered by
  blurb: [string, string];
  tint: string; // tile background
}

export const CATS: GeoCat[] = [
  { id: 'laender', group: ['Countries & capitals', 'Länder & Hauptstädte'], blurb: ['Capitals, outlines, neighbours, landlocked states', 'Hauptstädte, Umrisse, Nachbarn, Binnenstaaten'], tint: 'from-emerald-600 to-teal-800' },
  { id: 'flaggen', group: ['Flags & symbols', 'Flaggen & Symbole'], blurb: ['Flags, look-alikes, coats of arms, national animals', 'Flaggen, Verwechslungen, Wappen, Nationaltiere'], tint: 'from-rose-600 to-red-800' },
  { id: 'physisch', group: ['Physical geography', 'Physische Geografie'], blurb: ['Mountains, rivers, lakes, deserts, volcanoes, seas', 'Berge, Flüsse, Seen, Wüsten, Vulkane, Meere'], tint: 'from-amber-600 to-orange-800' },
  { id: 'staedte', group: ['Cities', 'Städte'], blurb: ['Biggest cities, rivers, landmarks, nicknames', 'Größte Städte, Flüsse, Wahrzeichen, Spitznamen'], tint: 'from-slate-600 to-slate-800' },
  { id: 'dach', group: ['Germany, Austria, Switzerland & Italy', 'Deutschland, Österreich, Schweiz & Italien'], blurb: ['States, cantons, regions, number plates', 'Bundesländer, Kantone, Regionen, Kennzeichen'], tint: 'from-sky-600 to-blue-800' },
  { id: 'regionen', group: ['More regions', 'Weitere Regionen'], blurb: ['US states, provinces, regions of France, Spain, Brazil', 'US-Staaten, Provinzen, Regionen in Frankreich, Spanien, Brasilien'], tint: 'from-violet-600 to-purple-800' },
  { id: 'kultur', group: ['Population & culture', 'Bevölkerung & Kultur'], blurb: ['Languages, currencies, religions, dishes, time zones', 'Sprachen, Währungen, Religionen, Gerichte, Zeitzonen'], tint: 'from-fuchsia-600 to-pink-800' },
  { id: 'rekorde', group: ['Numbers & records', 'Zahlen & Rekorde'], blurb: ['Biggest and smallest, extremes, EU, NATO, G7', 'Größte und kleinste, Extremwerte, EU, NATO, G7'], tint: 'from-lime-600 to-green-800' },
  { id: 'spezial', group: ['Special quizzes', 'Spezielle Quiz-Formen'], blurb: ['Map quiz, true or false, World Heritage, “Where am I?”', 'Kartenquiz, Wahr oder falsch, Weltkulturerbe, „Wo bin ich?“'], tint: 'from-cyan-600 to-indigo-800' },
];

export const GROUP = Object.fromEntries(CATS.map(c => [c.id, c.group])) as Record<string, [string, string]>;
