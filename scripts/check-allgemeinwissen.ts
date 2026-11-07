// Checks the games of Allgemeinwissen: test pool, "Wer bin ich?", celebrity photos and the typed lists.
// `npx tsx scripts/check-allgemeinwissen.ts`
import { TEST, TEST_LEVELS, PER_LEVEL } from '../lib/wissen/allgemeinwissen-test';
import { PERSONS, PER_GAME } from '../lib/wer-bin-ich';
import { PROMIS } from '../lib/promis';
import { AW_LISTEN, AW_LISTEN_COVERS } from '../lib/wissen/allgemeinwissen-listen';
import { bildView } from '../lib/bild';

let problems = 0;
const out = (m: string) => { problems++; console.log('✗', m); };

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

if (PERSONS.length < PER_GAME) out('wer bin ich: fewer people than one game needs');
const ids = new Set<string>();
for (const p of PERSONS) {
  if (ids.has(p.id)) out(`wer bin ich: id twice – ${p.id}`);
  ids.add(p.id);
  if (!bildView(p.img)) out(`wer bin ich ${p.id}: no picture "${p.img}"`);
  if (new Set(p.hints).size !== 5) out(`wer bin ich ${p.id}: needs five different hints`);
  const word = (n: string) => new RegExp(`(^|[^\\p{L}])${n.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^\\p{L}])`, 'u');
  const names = [p.name, ...p.accepts].filter(n => n.length > 3).map(word);
  for (const h of p.hints) if (names.some(r => r.test(h.toLowerCase()))) out(`wer bin ich ${p.id}: a hint names the person – ${h}`);
}

const keys = new Set<string>();
for (const p of PROMIS) {
  if (keys.has(p.key)) out(`promis: twice – ${p.key}`);
  keys.add(p.key);
  if (!bildView(p.key)) out(`promis ${p.key}: no photo`);
}

const listIds = new Set<string>();
for (const q of AW_LISTEN) {
  if (listIds.has(q.id)) out(`listen: id twice – ${q.id}`);
  listIds.add(q.id);
  if (!q.id.startsWith('aw-')) out(`listen ${q.id}: id must start with aw-`);
  if (q.items.length < 3) out(`listen ${q.id}: too few items`);
}
for (const [id, key] of Object.entries(AW_LISTEN_COVERS)) {
  if (!listIds.has(id)) out(`listen cover for unknown quiz ${id}`);
  if (!bildView(key)) out(`listen cover ${id}: no picture "${key}"`);
}

console.log(`${seen.size} test questions, ${PERSONS.length} people, ${PROMIS.length} celebrities, ${AW_LISTEN.length} lists, ${problems} problems`);
process.exit(problems ? 1 : 0);
