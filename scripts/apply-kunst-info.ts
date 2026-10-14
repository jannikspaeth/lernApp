// Usage: npx tsx scripts/apply-kunst-info.ts <event-id> <info.json>
// info.json: { "<chapter-id>": { "l0": "info", "m3": "info", … } } (level letter + index). Rewrites the
// matching quiz lines in lib/kunst/<event-id>/ so the 4th tuple entry (info) is set.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { KUNST } from '../lib/kunst/index';

const [evId, infoPath] = process.argv.slice(2);
const infos: Record<string, Record<string, string>> = JSON.parse(readFileSync(infoPath, 'utf8'));
const q = (s: string) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const dir = join(__dirname, '..', 'lib', 'kunst', evId);
const ev = KUNST.epochs.flatMap(e => e.events).find(e => e.id === evId);
if (!ev) throw new Error('unknown event ' + evId);
const LEVELS = { l: 'leicht', m: 'mittel', s: 'schwer' } as const;
let total = 0;
for (const [chId, map] of Object.entries(infos)) {
  const sub = ev.subtopics!.find(s => s.id === chId);
  if (!sub) throw new Error('unknown chapter ' + chId);
  const file = readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .find(f => readFileSync(join(dir, f), 'utf8').includes(`id: '${chId}'`));
  if (!file) throw new Error('no file for ' + chId);
  const path = join(dir, file);
  const lines = readFileSync(path, 'utf8').split('\n');
  for (const [k, info] of Object.entries(map)) {
    const level = LEVELS[k[0] as 'l'], idx = Number(k.slice(1));
    const card = sub.quiz![level][idx];
    if (!card) throw new Error(`${chId} ${k} missing`);
    // locate the level block, then the idx-th entry line
    const start = lines.findIndex(l => l.trim() === `${level}: [`);
    let seen = -1, at = -1;
    for (let i = start + 1; i < lines.length; i++) {
      if (/^\s*\['/.test(lines[i])) { seen++; if (seen === idx) { at = i; break; } }
      if (/^\s*\],?$/.test(lines[i])) break;
    }
    if (at < 0 || !lines[at].includes(q(card[0]))) throw new Error(`${chId} ${k}: line mismatch (${card[0]})`);
    const parts = [q(card[0]), q(card[1]), `[${(card[2] ?? []).map(q).join(', ')}]`, q(info)];
    if (card[4]) parts.push(q(card[4]));
    lines[at] = lines[at].match(/^\s*/)![0] + `[${parts.join(', ')}],`;
    total++;
  }
  writeFileSync(path, lines.join('\n'));
}
console.log('applied', total);
