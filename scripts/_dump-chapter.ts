// Compact dump of one chapter for review: `npx tsx scripts/_dump-chapter.ts <set> <event>/<sub>`
import { LEVELS, type CountryHistory } from '../lib/laender/types';
import { LITERATUR } from '../lib/literatur';
import { MUSIK } from '../lib/musik';
import { PHILOSOPHIE } from '../lib/philosophie';
import { WISSENSCHAFT } from '../lib/wissenschaft';
import { POLITIK } from '../lib/politik';
import { DETAILED } from '../lib/laender';
const sets: Record<string, CountryHistory> = { lit: LITERATUR, mus: MUSIK, phi: PHILOSOPHIE, wis: WISSENSCHAFT, pol: POLITIK, ...DETAILED };
const [set, path] = process.argv.slice(2);
const [ev, sub] = path.split('/');
for (const ep of sets[set].epochs) for (const e of ep.events) if (e.id === ev) for (const s of e.subtopics ?? []) if (s.id === sub) {
  console.log(s.text.map((t, i) => `T${i + 1}: ${t}`).join('\n'));
  for (const l of LEVELS) s.quiz[l.id].forEach(([q, a, w, info, k], i) => console.log(`${l.id[0]}${i + 1}: ${q} => ${a} | ${(w ?? []).join(' / ')}${k ? ' [' + k + ']' : ''}`));
}
