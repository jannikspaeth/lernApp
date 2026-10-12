// Sanity check for lib/kunst: run with `npx tsx scripts/check-kunst.ts`.
import fs from 'node:fs';
import path from 'node:path';
import { KUNST } from '../lib/kunst';
import { LEVELS, quizItems } from '../lib/laender/types';
import { hasWork } from '../lib/kunst/works';

let problems = 0;
const warn = (m: string) => { problems++; console.log('✗', m); };
const MIN = 10; // per level
let subs = 0, questions = 0, withImg = 0;
const ids = new Set<string>();
for (const ep of KUNST.epochs) for (const ev of ep.events) {
  if (ids.has(ev.id)) warn(`duplicate style id ${ev.id}`);
  ids.add(ev.id);
  const subIds = new Set<string>();
  for (const s of ev.subtopics ?? []) {
    subs++;
    if (subIds.has(s.id)) warn(`${ev.id}: duplicate chapter id ${s.id}`);
    subIds.add(s.id);
    for (const k of s.images ?? []) if (!hasWork(k)) warn(`${ev.id}/${s.id}: image "${k}" missing in works.json/credits.json`);
  }
  for (const { path: p, quiz } of quizItems(ev)) {
    for (const l of LEVELS) {
      const qs = quiz[l.id];
      if (qs.length < MIN) warn(`${p}/${l.id}: ${qs.length} questions (want ${MIN})`);
      const seen = new Set<string>();
      for (const [q, a, wrong, , work] of qs) {
        questions++;
        if (work) { withImg++; if (!hasWork(work)) warn(`${p}/${l.id}: unknown work "${work}"`); }
        if (seen.has(q + (work ?? ''))) warn(`${p}/${l.id}: duplicate question "${q}"`);
        seen.add(q + (work ?? ''));
        if (!wrong || wrong.length !== 3) warn(`${p}/${l.id}: "${q}" needs 3 wrong answers`);
        if (wrong?.includes(a)) warn(`${p}/${l.id}: "${q}" answer among wrong ones`);
        if (new Set(wrong).size !== (wrong?.length ?? 0)) warn(`${p}/${l.id}: "${q}" duplicate wrong answers`);
        // A picture question must not give the answer away in its own text.
        if (work && q.toLowerCase().includes(a.toLowerCase())) warn(`${p}/${l.id}: "${q}" contains its answer`);
      }
    }
  }
}
for (const f of fs.readdirSync(path.join(import.meta.dirname, '../public/kunst'))) {
  if (!/\.jpg$/.test(f)) warn(`unexpected file public/kunst/${f}`);
}
console.log(`${ids.size} styles, ${subs} chapters, ${questions} questions (${withImg} with picture), ${problems} problems`);
process.exit(problems ? 1 : 0);
