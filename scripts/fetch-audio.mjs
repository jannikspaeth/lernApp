// Looks up the listening examples of lib/musik/audio.json on Wikimedia Commons and writes their stream
// URLs (mp3 + ogg transcodes), length, author and licence to lib/musik/audio-credits.json.
// Nothing is downloaded: the app streams the files from upload.wikimedia.org.
// Usage: node scripts/fetch-audio.mjs [key ...]   (no keys = everything without credits)
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const registry = path.join(root, 'lib/musik/audio.json');
const creditsFile = path.join(root, 'lib/musik/audio-credits.json');
const clips = JSON.parse(fs.readFileSync(registry, 'utf8'));
const credits = JSON.parse(fs.readFileSync(creditsFile, 'utf8'));
const UA = 'LernApp/1.0 (personal learning app)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SLEEP = Number(process.env.FETCH_SLEEP ?? 1200);
const ALLOWED = /^(public domain|pd|cc0|cc[ -]by(?!-nc|-nd)|cc-by-sa|cc by-sa|copyrighted free use|attribution)/i;
const strip = s => (s ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const clean = u => u.replace(/\?utm_.*$/, '');

async function api(params, tries = 5) {
  const url = `https://commons.wikimedia.org/w/api.php?format=json&origin=*&${new URLSearchParams(params)}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (res.status === 429 && tries > 1) {
    await sleep(15000 * (6 - tries));
    return api(params, tries - 1);
  }
  if (!res.ok) throw new Error(`commons ${res.status}`);
  return res.json();
}

const only = process.argv.slice(2);
const keys = only.length ? only : Object.keys(clips).filter(k => !credits[k]);
const problems = [];
for (const key of keys) {
  const a = clips[key];
  if (!a) { problems.push(`${key}: not in audio.json`); continue; }
  try {
    const d = await api({ action: 'query', titles: `File:${a.file}`, prop: 'videoinfo', viprop: 'url|extmetadata|derivatives|mediatype|size' });
    const info = Object.values(d.query.pages)[0].videoinfo?.[0];
    if (!info) { problems.push(`${key}: no file "${a.file}"`); continue; }
    const md = info.extmetadata ?? {};
    const licence = strip(md.LicenseShortName?.value);
    if (!ALLOWED.test(licence)) { problems.push(`${key}: licence "${licence}" not allowed (${a.file})`); continue; }
    const derivs = info.derivatives ?? [];
    const mp3 = derivs.find(x => x.type.startsWith('audio/mpeg'))?.src;
    const ogg = derivs.find(x => x.type.startsWith('audio/ogg') && /vorbis/.test(x.type))?.src ?? derivs.find(x => x.type.startsWith('audio/ogg'))?.src;
    if (!mp3 && !ogg) { problems.push(`${key}: no mp3/ogg stream (${a.file})`); continue; }
    credits[key] = {
      ...(mp3 ? { mp3: clean(mp3) } : {}),
      ...(ogg ? { ogg: clean(ogg) } : {}),
      seconds: Math.round(info.duration ?? 0),
      author: strip(md.Artist?.value) || 'unbekannt',
      licence,
      page: clean(info.descriptionurl),
    };
    console.log(`ok   ${key} ← ${a.file} [${licence}, ${Math.round(info.duration ?? 0)} s${mp3 ? '' : ', no mp3'}]`);
    // Who plays it is often only in the description: shown so the performer can be added to audio.json.
    if (!a.performer) console.log(`     author: ${credits[key].author.slice(0, 80)} · ${strip(md.ImageDescription?.value).slice(0, 160)} · ${strip(md.Credit?.value).slice(0, 80)}`);
  } catch (e) {
    problems.push(`${key}: ${e.message}`);
  }
  await sleep(SLEEP);
}
fs.writeFileSync(creditsFile, JSON.stringify(credits, null, 2) + '\n');
if (problems.length) console.log('\nPROBLEMS:\n' + problems.join('\n'));
