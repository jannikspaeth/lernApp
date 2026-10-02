// Fetches a short history overview for every country and continent from the
// German Wikipedia and writes lib/welt/geschichte.json.  Run: node scripts/build-history.mjs
// Article per country: Wikidata "history of topic" (P2184) of the country with
// that ISO code, else TITLE below, else the "Geschichte" section of the country
// article. Texts are CC BY-SA 4.0 — the app shows source link + licence.
import { readFileSync, writeFileSync } from 'node:fs';

const UA = 'LernApp-build-script/1.0 (private learning app)';
const MAX_CHARS = 1800;

const src = readFileSync('lib/welt/countries.ts', 'utf8');
const countries = JSON.parse(src.slice(src.indexOf('= [') + 2, src.lastIndexOf(']') + 1).replace(/,\s*\]$/, ']'));

// History articles Wikidata doesn't link (checked by hand).
const TITLE = {
  TW: 'Geschichte Taiwans',
  IL: 'Geschichte des Staates Israel',
  TR: 'Geschichte der Türkei',
};

const CONTINENTS = {
  welt: 'Menschheitsgeschichte',
  europa: 'Geschichte Europas',
  asien: 'Geschichte Asiens',
  afrika: 'Geschichte Afrikas',
  nordamerika: 'Geschichte Nordamerikas',
  suedamerika: 'Geschichte Südamerikas',
  ozeanien: 'Geschichte Ozeaniens',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

// One request at a time with a pause (Wikipedia answers 429 to bursts).
async function getJson(url, init = {}) {
  for (let attempt = 1; ; attempt++) {
    await sleep(1200);
    const res = await fetch(url, { ...init, headers: { 'User-Agent': UA, ...(init.headers ?? {}) } });
    if (res.ok) return res.json();
    if (attempt >= 6) throw new Error(`${res.status} ${url}`);
    const wait = Number(res.headers.get('retry-after')) * 1000 || 5000 * attempt;
    console.warn(`${res.status}, retrying in ${wait / 1000}s`);
    await sleep(wait);
  }
}

const titleOf = url => decodeURIComponent(url.split('/wiki/')[1]).replace(/_/g, ' ');

// Wikidata: ISO code → history article / country article on de.wikipedia.
const sparql = `SELECT ?iso ?art ?cart WHERE { ?c wdt:P297 ?iso .
  OPTIONAL { ?c wdt:P2184 ?h . ?art schema:about ?h ; schema:isPartOf <https://de.wikipedia.org/> . }
  OPTIONAL { ?cart schema:about ?c ; schema:isPartOf <https://de.wikipedia.org/> . } }`;
const wd = await getJson('https://query.wikidata.org/sparql?query=' + encodeURIComponent(sparql), {
  headers: { Accept: 'application/sparql-results+json' },
});
const histArt = {}, countryArt = {};
for (const r of wd.results.bindings) {
  const iso = r.iso.value;
  if (r.art) histArt[iso] ??= titleOf(r.art.value);
  if (r.cart) countryArt[iso] ??= titleOf(r.cart.value);
}
countryArt.XK ??= 'Kosovo';

// Intro extracts, 20 titles per request (API limit), redirects followed.
async function intros(titles) {
  const out = {};
  for (let i = 0; i < titles.length; i += 20) {
    const batch = titles.slice(i, i + 20);
    const q = new URLSearchParams({
      action: 'query', format: 'json', formatversion: '2', prop: 'extracts', exintro: '1',
      explaintext: '1', redirects: '1', titles: batch.join('|'),
    });
    const d = await getJson('https://de.wikipedia.org/w/api.php?' + q);
    const back = {};
    for (const n of d.query.normalized ?? []) back[n.to] = n.from;
    for (const r of d.query.redirects ?? []) back[r.to] = back[r.from] ?? r.from;
    for (const p of d.query.pages) {
      if (p.missing || !p.extract) continue;
      out[back[p.title] ?? p.title] = { title: p.title, text: p.extract };
    }
  }
  return out;
}

// The "Geschichte" section of a country article.
async function historySection(title) {
  const q = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', prop: 'extracts', explaintext: '1',
    exsectionformat: 'wiki', redirects: '1', titles: title,
  });
  const d = await getJson('https://de.wikipedia.org/w/api.php?' + q);
  const page = d.query.pages[0];
  const m = page?.extract?.match(/\n== Geschichte ==\n([\s\S]*?)(?=\n== [^=])/);
  if (!m) return null;
  // Keep the text, drop sub-headings.
  return { title: page.title, text: m[1].replace(/\n=+ [^\n]+ =+\n/g, '\n'), section: 'Geschichte' };
}

// Whole article as plain text, headings dropped (for intros that are too short).
async function fullText(title) {
  const q = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', prop: 'extracts', explaintext: '1',
    exsectionformat: 'wiki', redirects: '1', titles: title,
  });
  const d = await getJson('https://de.wikipedia.org/w/api.php?' + q);
  const page = d.query.pages[0];
  if (!page?.extract) return null;
  const body = page.extract.split(/\n== (?:Literatur|Weblinks|Einzelnachweise|Siehe auch|Anmerkungen) ==/)[0];
  return { title: page.title, text: body.replace(/\n=+ [^\n]+ =+\n/g, '\n') };
}

const MIN_INTRO = 900;

// Paragraphs up to MAX_CHARS (whole paragraphs; the first one always).
function paragraphs(text) {
  const ps = text.split(/\n+/).map(s => s.replace(/\s+/g, ' ').trim()).filter(s => s.length > 40);
  const out = [];
  let n = 0;
  for (const p of ps) {
    if (out.length && n + p.length > MAX_CHARS) {
      // Too long: take its first sentences if there's still real room.
      const room = MAX_CHARS - n;
      if (room > 300) {
        const cut = p.slice(0, room).replace(/[^.!?]*$/, '').trim();
        if (cut.length > 150) out.push(cut);
      }
      break;
    }
    out.push(p);
    n += p.length;
  }
  return out;
}

const wiki = (title, section) =>
  'https://de.wikipedia.org/wiki/' + encodeURIComponent(title.replace(/ /g, '_')) + (section ? '#' + section : '');

const wanted = countries.map(c => TITLE[c.code] ?? histArt[c.code]).filter(Boolean);
const got = await intros([...wanted, ...Object.values(CONTINENTS)]);

const result = { fetched: new Date().toISOString().slice(0, 10), countries: {}, continents: {} };
for (const c of countries) {
  const t = TITLE[c.code] ?? histArt[c.code];
  let e = t && got[t];
  if (e && e.text.length < MIN_INTRO) e = (await fullText(e.title)) ?? e;
  if (!e || e.text.length < 300) {
    const sec = countryArt[c.code] && (await historySection(countryArt[c.code]));
    if (sec && (!e || sec.text.length > e.text.length)) e = sec;
  }
  if (!e) {
    console.warn('no history for', c.code, c.name);
    continue;
  }
  result.countries[c.code] = { title: e.title, url: wiki(e.title, e.section), paragraphs: paragraphs(e.text) };
}
for (const [id, t] of Object.entries(CONTINENTS)) {
  let e = got[t];
  if (e && e.text.length < MIN_INTRO) e = (await fullText(e.title)) ?? e;
  if (e) result.continents[id] = { title: e.title, url: wiki(e.title), paragraphs: paragraphs(e.text) };
  else console.warn('no history for continent', id);
}

writeFileSync('lib/welt/geschichte.json', JSON.stringify(result));
console.log(`${Object.keys(result.countries).length} countries, ${Object.keys(result.continents).length} continents written.`);
