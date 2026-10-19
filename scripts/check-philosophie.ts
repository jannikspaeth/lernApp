// Sanity check for lib/philosophie: run with `npx tsx scripts/check-philosophie.ts`.
import fs from 'node:fs';
import path from 'node:path';
import { PHILOSOPHIE } from '../lib/philosophie';
import { LEVELS, quizItems } from '../lib/laender/types';
import { hasPhiloPortrait, philoPortraitKeys } from '../lib/philosophie/portraits';
import { bildView } from '../lib/bild';
import worksJson from '../lib/kunst/works.json';
import litJson from '../lib/literatur/portraits.json';
import geschJson from '../lib/geschichte/portraits.json';
import musJson from '../lib/musik/portraits.json';

let problems = 0;
const warn = (m: string) => { problems++; console.log('✗', m); };
const MIN = 10; // per level
const hasBild = (k: string) => !!bildView(k);

for (const k of philoPortraitKeys()) {
  if (k in worksJson || k in litJson || k in geschJson || k in musJson) warn(`picture key "${k}" also exists in Kunst/Literatur/Geschichte/Musik`);
  if (!hasPhiloPortrait(k)) warn(`portrait "${k}" has no credits (fetch it or remove it)`);
}

let subs = 0, questions = 0, withImg = 0, withInfo = 0;
const ids = new Set<string>();
const used = new Set<string>();
for (const g of PHILOSOPHIE.epochs) for (const ev of g.events) {
  if (ids.has(ev.id) || ev.id === 'bereiche') warn(`duplicate or reserved epoch id ${ev.id}`);
  ids.add(ev.id);
  if (ev.cover && !hasBild(ev.cover)) warn(`${ev.id}: cover "${ev.cover}" missing`);
  const subIds = new Set<string>();
  for (const s of ev.subtopics ?? []) {
    subs++;
    if (subIds.has(s.id)) warn(`${ev.id}: duplicate chapter id ${s.id}`);
    subIds.add(s.id);
    for (const k of s.images ?? []) { used.add(k); if (!hasBild(k)) warn(`${ev.id}/${s.id}: picture "${k}" missing`); }
  }
  for (const { path: p, quiz } of quizItems(ev)) {
    for (const l of LEVELS) {
      const qs = quiz[l.id];
      if (qs.length < MIN) warn(`${p}/${l.id}: ${qs.length} questions (want ${MIN})`);
      const seen = new Set<string>();
      for (const [q, a, wrong, info, key] of qs) {
        questions++;
        if (info) withInfo++;
        if (key) {
          used.add(key);
          if (hasBild(key)) withImg++;
          else warn(`${p}/${l.id}: unknown picture "${key}"`);
        }
        if (seen.has(q + (key ?? ''))) warn(`${p}/${l.id}: duplicate question "${q}"`);
        seen.add(q + (key ?? ''));
        if (!wrong || wrong.length !== 3) warn(`${p}/${l.id}: "${q}" needs 3 wrong answers`);
        if (wrong?.includes(a)) warn(`${p}/${l.id}: "${q}" answer among wrong ones`);
        if (new Set(wrong).size !== (wrong?.length ?? 0)) warn(`${p}/${l.id}: "${q}" duplicate wrong answers`);
        if (key && q.toLowerCase().includes(a.toLowerCase())) warn(`${p}/${l.id}: "${q}" contains its answer`);
      }
    }
  }
}
for (const g of PHILOSOPHIE.epochs) if (g.cover) used.add(g.cover);
for (const g of PHILOSOPHIE.epochs) for (const ev of g.events) if (ev.cover) used.add(ev.cover);
for (const k of [...philoPortraitKeys()]) if (!used.has(k)) console.log(`· unused: ${k}`);
for (const f of fs.readdirSync(path.join(import.meta.dirname, '../public/philosophie'))) {
  if (!/\.jpg$/.test(f)) warn(`unexpected file public/philosophie/${f}`);
}
console.log(`${PHILOSOPHIE.epochs.length} areas, ${ids.size} epochs, ${subs} chapters, ${questions} questions (${withImg} with picture, ${withInfo} with info), ${problems} problems`);
process.exit(problems ? 1 : 0);
