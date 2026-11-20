// Finds "topic clustering": one name/term that appears in many questions (+answers) of the same chapter,
// i.e. the same event asked from several angles. `npx tsx scripts/check-ballung.ts [CODE] [--list]`
import { LEVELS } from '../lib/laender/types';
import { DETAILED } from '../lib/laender';
const args = process.argv.slice(2);
const only = args.find(a => !a.startsWith('--'));
const list = args.includes('--list');
const STOP = new Set('Welche Welcher Welches Welchen Welchem Wann Warum Wie Was Wer Wen Wem Wo Wohin Woher Wofür Womit Wodurch Worauf Woran Worum Wovon Aus Nach Mit Bei Von Vom Zum Zur Die Der Das Den Dem Des Ein Eine Einen Im In Am An Auf Um Für Über Unter Gegen Durch Seit Bis Und Oder Rund Etwa Fast Nur Als Jahr Jahre Jahren Jahrhundert Jahrhunderts Land Landes Stadt König Kaiser Krieg Krieges Reich Reiches Partei Volk Menschen Zeit Teil Name Namen Ende Beginn Anfang Hauptstadt Italien Italiens Deutschland Frankreich Spanien England Russland'.split(' '));
const rows: [number, string, string][] = [];
let bad = 0, total = 0;
for (const [code, h] of Object.entries(DETAILED)) {
  if (only && code !== only) continue;
  for (const ep of h.epochs) for (const e of ep.events) for (const s of e.subtopics ?? []) {
    total++;
    const cnt = new Map<string, number>();
    for (const l of LEVELS) for (const [q, a] of s.quiz[l.id]) {
      const words = new Set((`${q} ${a}`.match(/\b[A-ZÄÖÜ][a-zäöüßéèàóíúç’'-]{3,}/g) ?? []).filter(w => !STOP.has(w)).map(w => w.replace(/s$/, '')));
      for (const w of words) cnt.set(w, (cnt.get(w) ?? 0) + 1);
    }
    const top = [...cnt.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);
    const max = top[0]?.[1] ?? 0;
    if (max >= 6) bad++;
    rows.push([max, `${code} ${e.id}/${s.id}`, top.map(([w, n]) => `${w}×${n}`).join(' ')]);
  }
}
rows.sort((a, b) => b[0] - a[0]);
if (list) for (const r of rows.slice(0, 60)) console.log(String(r[0]).padStart(3), r[1], ' ', r[2]);
console.log(`${bad} von ${total} Kapiteln haben einen Begriff in 6 oder mehr Fragen`);
