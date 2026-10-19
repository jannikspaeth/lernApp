// Lists the quiz questions of one Musik era that have no info yet, as "chapter key | question | answer".
// Usage: npx tsx scripts/dump-musik-noinfo.ts <event-id>   (keys: l/m/s + index, for apply-musik-info.ts)
import { MUSIK } from '../lib/musik/index';

const ev = MUSIK.epochs.flatMap(e => e.events).find(e => e.id === process.argv[2]);
if (!ev) throw new Error('unknown event ' + process.argv[2]);
for (const s of ev.subtopics ?? []) {
  for (const [lv, k] of [['leicht', 'l'], ['mittel', 'm'], ['schwer', 's']] as const) {
    s.quiz[lv].forEach((c, i) => { if (!c[3]) console.log(`${s.id} ${k}${i} | ${c[0]} | ${c[1]}`); });
  }
}
