// Strict leak finder: number answer appears as whole token in another question that shares a content word with the revealed Q/A.
// `npx tsx scripts/_leak2.ts CODE`
import { DETAILED } from '../lib/laender';
import { LEVELS } from '../lib/laender/types';
const code = process.argv[2];
const STOP = new Set('welche welcher welches wann warum wurde wurden waren wieviel viele dieser diese dieses gegen unter seine seiner ihrer ihren einer einen eines jahre jahren jahr zwischen durch nach heute damals erste ersten zweite andere anderen etwa rund'.split(' '));
const words = (s: string) => new Set((s.toLowerCase().match(/[a-zäöüß]{5,}/g) ?? []).filter(w => !STOP.has(w)).map(w => w.slice(0, 6)));
let n = 0;
for (const ep of DETAILED[code].epochs) for (const e of ep.events) for (const s of e.subtopics ?? []) {
  const qs: [string, string, string][] = [];
  for (const l of LEVELS) s.quiz[l.id].forEach(([q, a], i) => qs.push([`${l.id[0]}${i + 1}`, q, a]));
  for (const [id, q, a] of qs) {
    const core = a.replace(/^(Am|Im|Seit|Bis|Um|Rund|Über|Etwa|In|Bei|Nach|Aus|Auf|Mit|Von|Der|Die|Das|Den|Dem) /, '').replace(/[„“()]/g, '').trim();
    if (core.length < 2 || !/\d/.test(core)) continue;
    const re = new RegExp('(^|[^\\d])' + core.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\d]|er)');
    const w = words(q + ' ' + a);
    for (const [id2, q2] of qs) {
      if (id2 === id || !re.test(q2)) continue;
      const shared = [...words(q2)].filter(x => w.has(x));
      if (!shared.length) continue;
      console.log(`${e.id}/${s.id} | ${id2}: ${q2} || ${id}: ${q} = ${a}`); n++;
    }
  }
}
console.log(n, 'strict leaks');
