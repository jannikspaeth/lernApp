// Sanity check for lib/literatur: run with `npx tsx scripts/check-literatur.ts`.
import fs from 'node:fs';
import path from 'node:path';
import { LITERATUR } from '../lib/literatur';
import { LEVELS, quizItems } from '../lib/laender/types';
import { hasPortrait, portraitKeys } from '../lib/literatur/portraits';
import { hasWork } from '../lib/kunst/works';
import worksJson from '../lib/kunst/works.json';

let problems = 0;
const warn = (m: string) => { problems++; console.log('✗', m); };
const MIN = 10; // per level
const hasBild = (k: string) => hasPortrait(k) || hasWork(k);

for (const k of portraitKeys()) if (k in worksJson) warn(`picture key "${k}" exists in both works.json and portraits.json`);

let subs = 0, questions = 0, withImg = 0, withInfo = 0;
const ids = new Set<string>();
for (const land of LITERATUR.epochs) for (const ev of land.events) {
  if (ids.has(ev.id)) warn(`duplicate epoch id ${ev.id}`);
  ids.add(ev.id);
  const subIds = new Set<string>();
  for (const s of ev.subtopics ?? []) {
    subs++;
    if (subIds.has(s.id)) warn(`${ev.id}: duplicate chapter id ${s.id}`);
    subIds.add(s.id);
    for (const k of s.images ?? []) if (!hasBild(k)) warn(`${ev.id}/${s.id}: picture "${k}" missing in portraits.json/credits.json`);
  }
  for (const { path: p, quiz } of quizItems(ev)) {
    for (const l of LEVELS) {
      const qs = quiz[l.id];
      if (qs.length < MIN) warn(`${p}/${l.id}: ${qs.length} questions (want ${MIN})`);
      const seen = new Set<string>();
      for (const [q, a, wrong, info, pic] of qs) {
        questions++;
        if (info) withInfo++;
        if (pic) { withImg++; if (!hasBild(pic)) warn(`${p}/${l.id}: unknown picture "${pic}"`); }
        if (seen.has(q + (pic ?? ''))) warn(`${p}/${l.id}: duplicate question "${q}"`);
        seen.add(q + (pic ?? ''));
        if (!wrong || wrong.length !== 3) warn(`${p}/${l.id}: "${q}" needs 3 wrong answers`);
        if (wrong?.includes(a)) warn(`${p}/${l.id}: "${q}" answer among wrong ones`);
        if (new Set(wrong).size !== (wrong?.length ?? 0)) warn(`${p}/${l.id}: "${q}" duplicate wrong answers`);
        // A picture question must not give the answer away in its own text.
        if (pic && q.toLowerCase().includes(a.toLowerCase())) warn(`${p}/${l.id}: "${q}" contains its answer`);
      }
    }
  }
}
for (const f of fs.readdirSync(path.join(import.meta.dirname, '../public/literatur'))) {
  if (!/\.jpg$/.test(f)) warn(`unexpected file public/literatur/${f}`);
}
console.log(`${ids.size} epochs, ${subs} chapters, ${questions} questions (${withImg} with picture, ${withInfo} with info), ${problems} problems`);
process.exit(problems ? 1 : 0);
