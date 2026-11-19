// Finds questions whose number/date answer appears literally in another question of the same chapter: `npx tsx scripts/_leak.ts CODE`
import { DETAILED } from '../lib/laender';
import { LEVELS } from '../lib/laender/types';
const code = process.argv[2];
let n = 0;
for (const ep of DETAILED[code].epochs) for (const e of ep.events) for (const s of e.subtopics ?? []) {
  const qs: [string, string, string][] = [];
  for (const l of LEVELS) s.quiz[l.id].forEach(([q, a], i) => qs.push([`${l.id[0]}${i + 1}`, q, a]));
  for (const [id, q, a] of qs) {
    const core = a.replace(/^(Am|Im|Seit|Bis|Um|Rund|Über|Etwa|In|Bei|Nach|Aus|Auf|Mit|Von|Der|Die|Das|Den|Dem) /, '').replace(/[„“()]/g, '').trim();
    if (core.length < 2 || !/\d/.test(core)) continue;
    for (const [id2, q2] of qs) if (id2 !== id && q2.includes(core)) { console.log(`${e.id}/${s.id}  ${id2}: ${q2}  →reveals ${id}: ${q} = ${a}`); n++; }
  }
}
console.log(n, 'leaks');
