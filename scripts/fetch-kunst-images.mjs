// Downloads the artwork pictures listed in lib/kunst/works.json from Wikipedia/Wikimedia Commons
// into public/kunst/<key>.jpg and writes lib/kunst/credits.json (author, licence, source).
// Usage: node scripts/fetch-kunst-images.mjs [key ...]   (no keys = everything missing)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const works = JSON.parse(fs.readFileSync(path.join(root, 'lib/kunst/works.json'), 'utf8'));
const creditsFile = path.join(root, 'lib/kunst/credits.json');
const credits = fs.existsSync(creditsFile) ? JSON.parse(fs.readFileSync(creditsFile, 'utf8')) : {};
const UA = 'LernApp/1.0 (personal learning app; jannik.spaeth@gmx.de)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const ALLOWED = /^(public domain|pd|cc0|cc[ -]by(?!-nc|-nd)|cc-by-sa|cc by-sa|copyrighted free use|attribution)/i;

async function api(host, params) {
  const url = `https://${host}/w/api.php?format=json&origin=*&${new URLSearchParams(params)}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${host} ${res.status}`);
  return res.json();
}

const only = process.argv.slice(2);
const keys = only.length ? only : Object.keys(works).filter(k => !fs.existsSync(path.join(root, `public/kunst/${k}.jpg`)));
const problems = [];
for (const key of keys) {
  const w = works[key];
  if (!w) { problems.push(`${key}: not in works.json`); continue; }
  try {
    let file = w.file; // explicit Commons file name wins over the article's lead image
    if (!file) {
      const p = await api('de.wikipedia.org', { action: 'query', redirects: 1, titles: w.wiki, prop: 'pageimages', piprop: 'name' });
      file = Object.values(p.query.pages)[0].pageimage;
    }
    if (!file) { problems.push(`${key}: no lead image for "${w.wiki}"`); continue; }
    const c = await api('commons.wikimedia.org', {
      action: 'query', titles: `File:${file}`, prop: 'imageinfo', iiprop: 'url|extmetadata|size|mime', iiurlwidth: 1000,
    });
    const info = Object.values(c.query.pages)[0].imageinfo?.[0];
    if (!info) { problems.push(`${key}: no imageinfo for ${file}`); continue; }
    const md = info.extmetadata ?? {};
    const strip = s => (s ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const licence = strip(md.LicenseShortName?.value);
    if (!ALLOWED.test(licence)) { problems.push(`${key}: licence "${licence}" not allowed (${file})`); continue; }
    const imgUrl = info.thumburl || info.url;
    const bin = await fetch(imgUrl, { headers: { 'User-Agent': UA } });
    if (!bin.ok) { problems.push(`${key}: download ${bin.status}`); continue; }
    const out = path.join(root, `public/kunst/${key}.jpg`);
    fs.writeFileSync(out, Buffer.from(await bin.arrayBuffer()));
    try { execFileSync('sips', ['-Z', '800', '-s', 'format', 'jpeg', '-s', 'formatOptions', '72', out], { stdio: 'ignore' }); } catch { /* no sips: keep the 1000 px original */ }
    credits[key] = {
      file,
      author: strip(md.Artist?.value) || 'unbekannt',
      licence,
      licenceUrl: strip(md.LicenseUrl?.value) || undefined,
      page: info.descriptionurl,
    };
    console.log(`ok   ${key} ← ${file} [${licence}]`);
  } catch (e) {
    problems.push(`${key}: ${e.message}`);
  }
  await sleep(1200);
}
fs.writeFileSync(creditsFile, JSON.stringify(credits, null, 2) + '\n');
if (problems.length) console.log('\nPROBLEMS:\n' + problems.join('\n'));
