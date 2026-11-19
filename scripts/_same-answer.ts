// Pairs of questions in one chapter with the same answer (normalized): `npx tsx scripts/_same-answer.ts [CODE]`
import { LEVELS, quizItems } from '../lib/laender/types';
import { DETAILED } from '../lib/laender';
import { LITERATUR } from '../lib/literatur';
const only = process.argv[2];
const norm = (s: string) => s.toLowerCase().replace(/^(in|im|auf|aus|nach|von|vom|zu|zum|der|die|das|den|dem|ein|eine|einen|am|an|um|rund|etwa|über|seit|bis)\s+/g, '').replace(/[„“"'’.!?]/g, '').trim();
let n = 0, ch = 0;
for (const [code, h] of Object.entries({ ...DETAILED, lit: LITERATUR })) {
  if (only && code !== only) continue;
  for (const ep of h.epochs) for (const ev of ep.events) for (const { path, quiz } of quizItems(ev)) {
    const items = LEVELS.flatMap(l => quiz[l.id].map(([q, a, , , k], i) => ({ id: `${l.id[0]}${i + 1}`, q: String(q), a: String(a), k })));
    const seen = new Map<string, typeof items>();
    for (const it of items) { const key = norm(it.a); if (key.length < 3 || /^\d/.test(key)) continue; seen.set(key, [...(seen.get(key) ?? []), it]); }
    const dups = [...seen.values()].filter(v => v.length > 1);
    if (!dups.length) continue;
    ch++;
    for (const d of dups) { n++; console.log(`${code} ${path}  ${d.map(x => `${x.id}${x.k ? '[img]' : ''}: ${x.q.slice(0, 70)}`).join('  ||  ')}  => ${d[0].a.slice(0, 40)}`); }
  }
}
console.error(`${n} gleiche Antworten in ${ch} Kapiteln`);
