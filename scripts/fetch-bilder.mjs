// Downloads the pictures of a set from Wikipedia/Wikimedia Commons into public/<set>/<key>.jpg
// and writes the credits (author, licence, source) next to the registry.
// Usage: node scripts/fetch-bilder.mjs <kunst|literatur> [key ...]   (no keys = everything missing)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const SETS = {
  kunst: { registry: 'lib/kunst/works.json', credits: 'lib/kunst/credits.json', out: 'public/kunst' },
  literatur: { registry: 'lib/literatur/portraits.json', credits: 'lib/literatur/credits.json', out: 'public/literatur' },
  geschichte: { registry: 'lib/geschichte/portraits.json', credits: 'lib/geschichte/credits.json', out: 'public/geschichte' },
  musik: { registry: 'lib/musik/portraits.json', credits: 'lib/musik/credits.json', out: 'public/musik' },
  philosophie: { registry: 'lib/philosophie/portraits.json', credits: 'lib/philosophie/credits.json', out: 'public/philosophie' },
  wissenschaft: { registry: 'lib/wissenschaft/bilder.json', credits: 'lib/wissenschaft/credits.json', out: 'public/wissenschaft' },
  politik: { registry: 'lib/politik/bilder.json', credits: 'lib/politik/credits.json', out: 'public/politik' },
  geografie: { registry: 'lib/geografie/bilder.json', credits: 'lib/geografie/credits.json', out: 'public/geo' },
};

const root = path.resolve(import.meta.dirname, '..');
const [set, ...only] = process.argv.slice(2);
const cfg = SETS[set];
if (!cfg) { console.error(`usage: node scripts/fetch-bilder.mjs <${Object.keys(SETS).join('|')}> [key ...]`); process.exit(1); }

const items = JSON.parse(fs.readFileSync(path.join(root, cfg.registry), 'utf8'));
const creditsFile = path.join(root, cfg.credits);
const credits = fs.existsSync(creditsFile) ? JSON.parse(fs.readFileSync(creditsFile, 'utf8')) : {};
const UA = 'LernApp/1.0 (personal learning app)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SLEEP = Number(process.env.FETCH_SLEEP ?? 1200); // Wikipedia rate-limits bursts; raise it after a 429
const ALLOWED = /^(public domain|pd|cc0|cc[ -]by(?!-nc|-nd)|cc-by-sa|cc by-sa|copyrighted free use|attribution)/i;

async function api(host, params, tries = 5) {
  const url = `https://${host}/w/api.php?format=json&origin=*&${new URLSearchParams(params)}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (res.status === 429 && tries > 1) { // throttled: back off and try again instead of giving up
    await sleep(15000 * (6 - tries));
    return api(host, params, tries - 1);
  }
  if (!res.ok) throw new Error(`${host} ${res.status}`);
  return res.json();
}

const keys = only.length ? only : Object.keys(items).filter(k => !fs.existsSync(path.join(root, cfg.out, `${k}.jpg`)));
const problems = [];
for (const key of keys) {
  const w = items[key];
  if (!w) { problems.push(`${key}: not in ${cfg.registry}`); continue; }
  try {
    let file = w.file; // explicit Commons file name wins over the article's lead image
    if (!file) {
      const p = await api(w.en ? 'en.wikipedia.org' : 'de.wikipedia.org', { action: 'query', redirects: 1, titles: w.en ?? w.wiki, prop: 'pageimages', piprop: 'name' });
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
    const out = path.join(root, cfg.out, `${key}.jpg`);
    fs.writeFileSync(out, Buffer.from(await bin.arrayBuffer()));
    try { execFileSync('sips', ['-Z', '800', '-s', 'format', 'jpeg', '-s', 'formatOptions', '72', out], { stdio: 'ignore' }); } catch { /* no sips: keep the 1000 px original */ }
    credits[key] = {
      file,
      author: strip(md.Artist?.value) || 'unbekannt',
      licence,
      licenceUrl: strip(md.LicenseUrl?.value) || undefined,
      page: info.descriptionurl,
    };
    fs.writeFileSync(creditsFile, JSON.stringify(credits, null, 2) + '\n'); // saved per picture, so an aborted run keeps them
    console.log(`ok   ${key} ← ${file} [${licence}]`);
  } catch (e) {
    problems.push(`${key}: ${e.message}`);
  }
  await sleep(SLEEP);
}
fs.writeFileSync(creditsFile, JSON.stringify(credits, null, 2) + '\n');
if (problems.length) console.log('\nPROBLEMS:\n' + problems.join('\n'));
