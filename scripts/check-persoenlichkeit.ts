// Checks the "Who are you?" quizzes and the general-knowledge test. `npx tsx scripts/check-persoenlichkeit.ts`
import { PERSONAS, scoreResult } from '../lib/persoenlichkeit';
import { TEST, TEST_LEVELS, PER_LEVEL } from '../lib/wissen/allgemeinwissen-test';
import { bildView } from '../lib/bild';
import { KUNST } from '../lib/kunst';
import { LITERATUR } from '../lib/literatur';
import { MUSIK } from '../lib/musik';
import { PHILOSOPHIE } from '../lib/philosophie';
import type { CountryHistory } from '../lib/laender/types';

let problems = 0;
const out = (m: string) => { problems++; console.log('✗', m); };
const sets: Record<string, CountryHistory> = { kunst: KUNST, lit: LITERATUR, mus: MUSIK, phi: PHILOSOPHIE };
const exists = (set: string, path: string) => {
  const [ev, sub] = path.split('/');
  return sets[set].epochs.some(e => e.events.some(x => x.id === ev && x.subtopics?.some(s => s.id === sub)));
};

for (const p of PERSONAS) {
  const ids = new Set(p.results.map(r => r.id));
  for (const r of p.results) {
    if (!bildView(r.img)) out(`${p.id}/${r.id}: unknown picture ${r.img}`);
    if (!exists(r.set, r.path)) out(`${p.id}/${r.id}: no chapter ${r.set} ${r.path}`);
  }
  const slots = new Map<string, number>();
  for (const q of p.questions) {
    if (q.options.length < 2) out(`${p.id}: too few options – ${q.q}`);
    for (const [t, rs] of q.options) for (const id of rs) {
      if (!ids.has(id)) out(`${p.id}: unknown result ${id} – ${t}`);
      slots.set(id, (slots.get(id) ?? 0) + 1);
    }
  }
  // Random answers: every result must come out, none should dominate.
  const wins = new Map<string, number>();
  const N = 20000;
  for (let i = 0; i < N; i++) {
    const r = scoreResult(p, p.questions.map(q => Math.floor(Math.random() * q.options.length)));
    wins.set(r.id, (wins.get(r.id) ?? 0) + 1);
  }
  const line = p.results.map(r => `${r.id} ${slots.get(r.id) ?? 0}/${Math.round(((wins.get(r.id) ?? 0) / N) * 100)}%`).join(' · ');
  console.log(`${p.id}: ${line}`);
  for (const r of p.results) {
    const share = (wins.get(r.id) ?? 0) / N;
    if (share < 0.04 || share > 0.25) out(`${p.id}/${r.id}: comes out ${Math.round(share * 100)} % of random runs`);
  }
}

const seen = new Set<string>();
for (const l of TEST_LEVELS) {
  if (TEST[l.id].length < PER_LEVEL * 2) out(`test ${l.id}: only ${TEST[l.id].length} questions`);
  for (const [area, q, a, w] of TEST[l.id]) {
    if (seen.has(q)) out(`test: twice – ${q}`);
    seen.add(q);
    if (w.includes(a) || new Set(w).size !== 3) out(`test ${l.id}: bad options – ${q}`);
    if (!area) out(`test ${l.id}: no area – ${q}`);
  }
}
console.log(`${PERSONAS.length} personality quizzes, ${seen.size} test questions, ${problems} problems`);
process.exit(problems ? 1 : 0);
