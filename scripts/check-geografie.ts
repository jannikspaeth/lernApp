// Sanity check for Geografie: run with `npx tsx scripts/check-geografie.ts`.
import { geografie } from '../lib/wissen/geografie';
import { CATS } from '../lib/geografie/cats';

let problems = 0;
const warn = (m: string) => { problems++; console.log('✗', m); };
const ids = new Set<string>();
let total = 0;
const known = new Set(CATS.map(c => c.group[1]));
for (const t of geografie.topics) {
  if (!t.group || !known.has(t.group[1])) warn(`topic ${t.id}: unknown group`);
  const answers = new Set(t.cards.map(c => c.a));
  const qs = new Set<string>();
  if (t.cards.length < 5) warn(`topic ${t.id}: only ${t.cards.length} cards`);
  for (const c of t.cards) {
    total++;
    if (ids.has(c.id)) warn(`duplicate card id ${c.id}`);
    ids.add(c.id);
    const key = c.q + '|' + (c.img ?? '');
    if (qs.has(key)) warn(`${t.id}: duplicate question "${c.q}"`);
    qs.add(key);
    if (c.wrong) {
      if (c.wrong.includes(c.a)) warn(`${c.id}: answer among wrong options`);
      if (new Set(c.wrong).size !== c.wrong.length) warn(`${c.id}: repeated wrong options`);
      if (c.wrong.length < 1) warn(`${c.id}: no wrong options`);
    } else if (answers.size < 4) warn(`${t.id}: only ${answers.size} distinct answers for generated options`);
  }
}
console.log(`${CATS.length} categories, ${geografie.topics.length} topics, ${total} cards, ${problems} problems`);
