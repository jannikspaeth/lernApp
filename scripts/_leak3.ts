// Like _leak2 but without the shared-word filter (whole-token match only). `npx tsx scripts/_leak3.ts CODE`
import { DETAILED } from '../lib/laender';
import { LEVELS, quizItems } from '../lib/laender/types';
import { LITERATUR } from '../lib/literatur';
const code = process.argv[2];
let n = 0;
const H = code === 'lit' ? LITERATUR : DETAILED[code];
for (const ep of H.epochs) for (const e of ep.events) for (const s of e.subtopics ?? []) {
  const qs: [string, string, string][] = [];
  for (const l of LEVELS) s.quiz[l.id].forEach(([q, a], i) => qs.push([`${l.id[0]}${i + 1}`, q, a]));
  for (const [id, q, a] of qs) {
    const core = a.replace(/^(Am|Im|Seit|Bis|Um|Rund|Über|Etwa|In|Bei|Nach|Aus|Auf|Mit|Von|Der|Die|Das|Den|Dem) /, '').replace(/[„“()]/g, '').trim();
    if (core.length < 2 || !/\d/.test(core)) continue;
    const re = new RegExp('(^|[^\\d])' + core.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\d]|er)');
    for (const [id2, q2] of qs) if (id2 !== id && re.test(q2)) { console.log(`${s.id} | ${id2}: ${q2} || ${id}: ${q} = ${a}`); n++; }
  }
}
console.log(n, 'token leaks');
