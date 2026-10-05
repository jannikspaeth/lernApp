// Sanity check for lib/laender: run with `npx tsx scripts/check-laender.ts`.
import { DETAILED } from '../lib/laender';
import { LEVELS } from '../lib/laender/types';
import { COUNTRIES } from '../lib/welt';

let problems = 0;
const warn = (msg: string) => { problems++; console.log('✗', msg); };
let events = 0, questions = 0;
for (const [code, h] of Object.entries(DETAILED)) {
  if (h.code !== code) warn(`${code}: code mismatch ${h.code}`);
  if (!COUNTRIES.some(c => c.code === code)) warn(`${code}: unknown country`);
  const ids = new Set<string>();
  for (const ep of h.epochs) for (const ev of ep.events) {
    events++;
    if (ids.has(ev.id)) warn(`${code}: duplicate event id ${ev.id}`);
    ids.add(ev.id);
    if (!/^[a-z0-9-]+$/.test(ev.id)) warn(`${code}/${ev.id}: bad id`);
    if (ev.text.length < 1) warn(`${code}/${ev.id}: no text`);
    for (const l of LEVELS) {
      const qs = ev.quiz[l.id];
      if (!qs || qs.length < 3) warn(`${code}/${ev.id}/${l.id}: fewer than 3 questions`);
      for (const [q, a, wrong] of qs ?? []) {
        questions++;
        if (!wrong || wrong.length !== 3) warn(`${code}/${ev.id}/${l.id}: "${q}" needs 3 wrong answers`);
        if (wrong?.includes(a)) warn(`${code}/${ev.id}/${l.id}: "${q}" answer among wrong ones`);
        if (new Set(wrong).size !== (wrong?.length ?? 0)) warn(`${code}/${ev.id}/${l.id}: "${q}" duplicate wrong answers`);
      }
    }
  }
}
console.log(`${Object.keys(DETAILED).length} countries, ${events} events, ${questions} questions, ${problems} problems`);
process.exit(problems ? 1 : 0);
