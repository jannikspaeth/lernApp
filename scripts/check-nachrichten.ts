// Checks lib/nachrichten/fragen.json: every field present, unique ids, plausible dates, three distinct
// wrong answers, questions that stand alone (no "gestern", "diese Woche" …). Run: npx tsx scripts/check-nachrichten.ts
import { NEWS } from '../lib/nachrichten';

const CATS = new Set(['Politik', 'Wirtschaft', 'Gesellschaft', 'Wissenschaft', 'Sport', 'Kultur', 'Katastrophen', 'Konflikte', 'Recht', 'Umwelt']);
const RELATIVE = /\b(gestern|vorgestern|heute|morgen|diese[rn]? Woche|letzte[rn]? Woche|kürzlich|neulich|jüngst)\b/i;
const errors: string[] = [];
const ids = new Set<string>();
const today = new Date().toISOString().slice(0, 10);

NEWS.forEach((x, n) => {
  const at = `#${n} ${x.id ?? '?'}`;
  const err = (m: string) => errors.push(`${at}: ${m}`);
  if (!x.id || ids.has(x.id)) err('missing or duplicate id');
  ids.add(x.id);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(x.d) || isNaN(Date.parse(x.d))) err(`bad date ${x.d}`);
  else if (x.d > today) err(`date in the future ${x.d}`);
  if (!x.id.startsWith(`${x.d}.${x.r}.`)) err('id must be <date>.<region>.<n>');
  if (x.r !== 'de' && x.r !== 'welt') err(`bad region ${x.r}`);
  if (!CATS.has(x.k)) err(`unknown category ${x.k}`);
  if (![1, 2, 3].includes(x.p)) err(`bad importance ${x.p}`);
  if (!x.q?.trim().endsWith('?')) err('question must end with "?"');
  if (RELATIVE.test(x.q)) err(`relative time in question: ${x.q}`);
  if (!x.a?.trim()) err('empty answer');
  if (!Array.isArray(x.w) || x.w.length !== 3) err('needs exactly three wrong answers');
  else {
    const all = [x.a, ...x.w].map(s => s.trim().toLowerCase());
    if (new Set(all).size !== 4) err('answers not distinct');
    if (x.w.some(w => !w.trim())) err('empty wrong answer');
  }
  if (!x.i?.trim()) err('missing info');
  if (!/^https:\/\//.test(x.src ?? '')) err('source must be an https URL');
});

const by = (r: string) => NEWS.filter(x => x.r === r).length;
console.log(`${NEWS.length} questions (de ${by('de')}, welt ${by('welt')}), latest ${NEWS.reduce((m, x) => (x.d > m ? x.d : m), '')}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('OK');
