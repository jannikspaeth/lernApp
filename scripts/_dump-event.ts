// Questions of every chapter of one event: `npx tsx scripts/_dump-event.ts <set> <event> [--text]`
import { LEVELS, type CountryHistory } from '../lib/laender/types';
import { LITERATUR } from '../lib/literatur';
import { MUSIK } from '../lib/musik';
import { PHILOSOPHIE } from '../lib/philosophie';
import { WISSENSCHAFT } from '../lib/wissenschaft';
import { POLITIK } from '../lib/politik';
const sets: Record<string, CountryHistory> = { lit: LITERATUR, mus: MUSIK, phi: PHILOSOPHIE, wis: WISSENSCHAFT, pol: POLITIK };
const [set, ev, flag] = process.argv.slice(2);
for (const ep of sets[set].epochs) for (const e of ep.events) if (e.id === ev) for (const s of e.subtopics ?? []) {
  console.log(`== ${s.id}`);
  if (flag === '--text') console.log(s.text.map((t, i) => `T${i + 1}: ${t}`).join('\n'));
  for (const l of LEVELS) s.quiz[l.id].forEach(([q, a, w, , k], i) => console.log(`${l.id[0]}${i + 1}: ${q} => ${a} | ${(w ?? []).join(' / ')}${k ? ' [' + k + ']' : ''}`.slice(0, 150)));
}
