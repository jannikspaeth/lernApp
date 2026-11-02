// Finds questions inside one chapter that ask the same thing, across all three levels: same answer,
// or nearly the same wording. `npx tsx scripts/check-redundanz.ts [set] [--list]`
// Without --list it prints a table of chapters by number of redundant pairs.
import { LEVELS, quizItems, type CountryHistory } from '../lib/laender/types';
import { DETAILED } from '../lib/laender';
import { KUNST } from '../lib/kunst';
import { LITERATUR } from '../lib/literatur';
import { MUSIK } from '../lib/musik';
import { PHILOSOPHIE } from '../lib/philosophie';
import { WISSENSCHAFT } from '../lib/wissenschaft';
import { POLITIK } from '../lib/politik';

const STOP = new Set('der die das den dem des ein eine einen einem einer eines und oder in im an am auf aus bei mit nach von vom zu zum zur für über unter vor wie was wer wen wem wo wann warum welche welcher welches welchen welchem ist sind war waren wird wurde wurden hat hatte haben als auch nicht sich es er sie man seine seiner sein ihre ihr sehr um bis durch so da dass gilt heißt nennt oft wohl besonders genau'.split(' '));
const stem = (w: string) => w.slice(0, 6);
const words = (s: string) => new Set(s.toLowerCase().replace(/\b[vn]\. chr\./g, ' ').replace(/[^a-zäöüß0-9 ]/g, ' ').split(/\s+/).filter(w => w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w)).map(stem));
const jac = (a: Set<string>, b: Set<string>) => {
  if (!a.size || !b.size) return 0;
  let i = 0;
  for (const x of a) if (b.has(x)) i++;
  return i / (a.size + b.size - i);
};

const cover = (a: Set<string>, b: Set<string>) => {
  if (!a.size || !b.size) return 0;
  let i = 0;
  for (const x of a) if (b.has(x)) i++;
  return i / Math.min(a.size, b.size);
};

const args = process.argv.slice(2);
const list = args.includes('--list');
const only = args.find(a => !a.startsWith('--'));
const sets: [string, CountryHistory][] = [['kunst', KUNST], ['lit', LITERATUR], ['mus', MUSIK], ['phi', PHILOSOPHIE], ['wis', WISSENSCHAFT], ['pol', POLITIK], ...Object.entries(DETAILED)];

const rows: [string, number, number][] = [];
let total = 0, pairs = 0;
for (const [name, h] of sets) {
  if (only && name !== only) continue;
  for (const ep of h.epochs) for (const ev of ep.events) for (const { path, quiz } of quizItems(ev)) {
    const raw = LEVELS.flatMap(l => quiz[l.id].map(([q, a]) => ({ l: l.id, q: String(q), a: String(a), qw: words(String(q)), aw: words(String(a)) })));
    // words in a quarter of the chapter's questions name the topic, not what is asked
    const freq = new Map<string, number>();
    for (const x of raw) for (const w of x.qw) freq.set(w, (freq.get(w) ?? 0) + 1);
    const topic = (w: string) => (freq.get(w) ?? 0) >= Math.max(3, raw.length / 4);
    const qs = raw.map(x => ({ ...x, qw: new Set([...x.qw].filter(w => !topic(w))), aw: new Set([...x.aw].filter(w => !topic(w))) }));
    total += qs.length;
    let n = 0;
    for (let i = 0; i < qs.length; i++) for (let j = i + 1; j < qs.length; j++) {
      const x = qs[i], y = qs[j];
      const sameA = x.a.toLowerCase() === y.a.toLowerCase() || (cover(x.aw, y.aw) >= 0.5 && jac(x.aw, y.aw) >= 0.34);
      const sameQ = jac(x.qw, y.qw) >= 0.5;
      // the same answer to a question about the same thing, or the same question twice
      if ((sameA && jac(x.qw, y.qw) >= 0.15) || sameQ) {
        n++;
        if (list) console.log(`${name} ${path}\n   ${x.l}: ${x.q} => ${x.a}\n   ${y.l}: ${y.q} => ${y.a}`);
      }
    }
    pairs += n;
    rows.push([`${name} ${path}`, n, qs.length]);
  }
}
if (!list) {
  rows.sort((a, b) => b[1] - a[1]);
  for (const [p, n, c] of rows.slice(0, 40)) console.log(`${String(n).padStart(3)}  ${p} (${c} Fragen)`);
}
const bad = rows.filter(r => r[1] >= 3).length;
console.log(`\n${rows.length} Kapitel, ${total} Fragen, ${pairs} doppelte Paare, ${bad} Kapitel mit ≥3 Paaren`);
