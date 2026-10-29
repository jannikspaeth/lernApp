// Dumps every quiz question with heuristic flags for review. `npx tsx scripts/audit-fragen.ts <outdir>`
import { writeFileSync } from 'fs';
import { LEVELS, quizItems, type CountryHistory } from '../lib/laender/types';
import { DETAILED } from '../lib/laender';
import { KUNST } from '../lib/kunst';
import { LITERATUR } from '../lib/literatur';
import { MUSIK } from '../lib/musik';
import { PHILOSOPHIE } from '../lib/philosophie';
import { WISSENSCHAFT } from '../lib/wissenschaft';
import { POLITIK } from '../lib/politik';
import { SUBJECTS } from '../lib/wissen';

const DEP = /(^|[\s(„])(er|ihn|ihm|ihr|ihre[mnrs]?|sein|seine[mnrs]?|dort|damals|dabei|danach|daraufhin|dafür|damit|davon|dagegen|deshalb|dies|diese[mnrs]?|dieser|jener|derselbe|ebenfalls|auch|zuvor|vorher|anschließend|später|erneut|wieder|weitere[mnrs]?|andere[mnrs]?|zweite[mnrs]?|nächste[mnrs]?|letzte[mnrs]?)([\s?,.“)]|$)/i;
const SIE = /(^|\s)sie(\s|\?)/;
const out = process.argv[2];
const all: string[] = [];
let n = 0, f = 0;
const sets: [string, CountryHistory][] = [['kunst', KUNST], ['lit', LITERATUR], ['mus', MUSIK], ['phi', PHILOSOPHIE], ['wis', WISSENSCHAFT], ['pol', POLITIK], ...Object.entries(DETAILED)];
const counts: Record<string, [number, number]> = {};
for (const [name, h] of sets) {
  const lines: string[] = [];
  for (const ep of h.epochs) for (const ev of ep.events) for (const { path, quiz } of quizItems(ev)) {
    for (const l of LEVELS) for (const [q, a, w] of quiz[l.id]) {
      n++;
      const words = q.split(/\s+/).length;
      const flags = [DEP.test(q) || SIE.test(q) ? 'P' : '', words <= 5 ? 'S' : '', (w ?? []).includes(a) ? 'D' : '', q.toLowerCase().includes(String(a).toLowerCase()) && String(a).length > 3 ? 'A' : ''].join('');
      if (flags) f++;
      lines.push(`${flags || '-'}\t${path}/${l.id}\t${q}\t=> ${a}\t| ${(w ?? []).join(' | ')}`);
    }
  }
  counts[name] = [lines.length, lines.filter(l => !l.startsWith('-')).length];
  writeFileSync(`${out}/${name}.tsv`, lines.join('\n') + '\n');
}
const flat: string[] = [];
for (const s of SUBJECTS) for (const t of s.topics) for (const c of t.cards) {
  n++; const fl = (DEP.test(c.q) || SIE.test(c.q) ? 'P' : '') + (c.q.split(/\s+/).length <= 4 ? 'S' : ''); if (fl) f++;
  flat.push(`${fl || '-'}\t${s.id}/${t.id}\t${c.q}\t=> ${c.a}\t| ${(c.wrong ?? []).join(' | ')}`);
}
writeFileSync(`${out}/flat.tsv`, flat.join('\n') + '\n');
counts.flat = [flat.length, flat.filter(l => !l.startsWith('-')).length];
console.log(JSON.stringify(counts));
console.log(n, 'questions,', f, 'flagged');
