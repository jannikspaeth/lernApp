// Sanity check for lib/laender: run with `npx tsx scripts/check-laender.ts`.
import { DETAILED } from '../lib/laender';
import { LEVELS, quizItems } from '../lib/laender/types';
import { COUNTRIES } from '../lib/welt';

let problems = 0;
const warn = (msg: string) => { problems++; console.log('✗', msg); };
let events = 0, subtopics = 0, questions = 0;
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
    if (!ev.quiz && !ev.subtopics?.length) warn(`${code}/${ev.id}: neither quiz nor subtopics`);
    const subIds = new Set<string>();
    for (const s of ev.subtopics ?? []) {
      subtopics++;
      if (subIds.has(s.id)) warn(`${code}/${ev.id}: duplicate subtopic id ${s.id}`);
      subIds.add(s.id);
      if (!/^[a-z0-9-]+$/.test(s.id)) warn(`${code}/${ev.id}/${s.id}: bad id`);
      if (s.text.length < 1) warn(`${code}/${ev.id}/${s.id}: no text`);
    }
    // Subtopics are meant to be thorough: at least 20 questions per level.
    const min = ev.subtopics?.length ? 20 : 3;
    for (const { path, quiz } of quizItems(ev)) {
      for (const l of LEVELS) {
        const qs = quiz[l.id];
        if (!qs || qs.length < min) warn(`${code}/${path}/${l.id}: ${qs?.length ?? 0} questions (want ${min})`);
        const seen = new Set<string>();
        for (const [q, a, wrong] of qs ?? []) {
          questions++;
          if (seen.has(q)) warn(`${code}/${path}/${l.id}: duplicate question "${q}"`);
          seen.add(q);
          if (!wrong || wrong.length !== 3) warn(`${code}/${path}/${l.id}: "${q}" needs 3 wrong answers`);
          if (wrong?.includes(a)) warn(`${code}/${path}/${l.id}: "${q}" answer among wrong ones`);
          if (new Set(wrong).size !== (wrong?.length ?? 0)) warn(`${code}/${path}/${l.id}: "${q}" duplicate wrong answers`);
        }
      }
    }
  }
}
console.log(`${Object.keys(DETAILED).length} countries, ${events} topics, ${subtopics} subtopics, ${questions} questions, ${problems} problems`);
process.exit(problems ? 1 : 0);
