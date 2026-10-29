// Finds questions that refer to a picture but show none (or a picture key that resolves to nothing),
// across every in-depth set and every flat subject topic. Run with `npx tsx scripts/check-bildfragen.ts`.
import { LEVELS, quizItems, type CountryHistory } from '../lib/laender/types';
import { DETAILED } from '../lib/laender';
import { KUNST } from '../lib/kunst';
import { LITERATUR } from '../lib/literatur';
import { MUSIK } from '../lib/musik';
import { PHILOSOPHIE } from '../lib/philosophie';
import { WISSENSCHAFT } from '../lib/wissenschaft';
import { POLITIK } from '../lib/politik';
import { SUBJECTS } from '../lib/wissen';
import { bildView } from '../lib/bild';

// Wording that only makes sense with a picture next to the question.
const PIC = /\b(dies(e|er|es|en)|abgebildete[nrs]?|gezeigte[nrs]?) (Bild|Gemälde|Foto|Werk|Skulptur|Statue|Gebäude|Bauwerk|Kirche|Person|Porträt|Mann|Frau|Fresko|Plakat|Karte|Flagge|Wappen|Szene|Instrument|Tier|Pflanze|Planet|Gerät|Maschine|Denkmal|Kunstwerk|Tempel|Dom|Schloss|Brücke|Turm|Platz|Landschaft|Logo|Symbol|Zeichnung|Holzschnitt|Stich|Relief|Mosaik|Vase|Maske|Fahne|Ereignis|Gestein|Mineral|Organ|Zelle|Lok|Lokomotive|Fahrzeug|Flugzeug|Schiff|Gebirge|Vulkan|Insel|See|Fluss|Wolke|Galaxie|Stern|Nebel|Komponist|Dichter|Denker|Politiker|Herrscher|König|Kaiser)\b|\b(abgebildet|hier zu sehen|zu sehen ist|im Bild|auf dem Bild|auf dem Foto|auf diesem Bild)\b|^(Wer|Was) ist (das|hier)\?|^Wer ist dies/i;

// "Auf welchem Geldschein ist X abgebildet?" asks a fact, not about a picture.
const NOT_PIC = /Geldschein|Banknote|Münze|Briefmarke|^Wo (ist|war|wurde)/i;

// "dieser Vertrag", "diese Zeit" … only make sense with a picture or the previous question.
// "Welches dieser Länder" refers to the options and is fine; quoted text is ignored.
const DEMO = /\bdies(e|er|es|en|em)\s+[A-ZÄÖÜ]/;
const demo = (q: string) => DEMO.test(q.replace(/„[^“]*“/g, '').replace(/\b(welche[rsmn]?|einige[rsmn]?|keine[rsmn]?|eine[rsmn]?|viele[rsmn]?) (der |)dies/gi, ''));

let problems = 0;
const out = (m: string) => { problems++; console.log('✗', m); };

const sets: [string, CountryHistory][] = [['KUNST', KUNST], ['LIT', LITERATUR], ['MUS', MUSIK], ['PHI', PHILOSOPHIE], ['WIS', WISSENSCHAFT], ['POL', POLITIK], ...Object.entries(DETAILED)];
for (const [name, h] of sets) {
  for (const ep of h.epochs) for (const ev of ep.events) for (const { path, quiz } of quizItems(ev)) for (const l of LEVELS) {
    for (const [q, , , , key] of quiz[l.id]) {
      if (key && !bildView(key as string) && !/^[a-z0-9-]+\.(mp3|ogg)$/.test(key as string)) {
        // audio keys are allowed in Musik; anything else must be a picture
        if (name !== 'MUS') out(`${name} ${path}/${l.id}: unknown picture "${key}" – ${q}`);
      }
      if (!key && PIC.test(q) && !NOT_PIC.test(q)) out(`${name} ${path}/${l.id}: refers to a picture but has none – ${q}`);
      else if (!key && demo(q as string)) out(`${name} ${path}/${l.id}: needs the previous question or a picture – ${q}`);
    }
  }
}
for (const s of SUBJECTS) for (const t of s.topics) for (const c of t.cards) {
  if (!c.img && PIC.test(c.q) && !NOT_PIC.test(c.q)) out(`${s.id}/${t.id}: refers to a picture but has none – ${c.q}`);
  else if (!c.img && demo(c.q)) out(`${s.id}/${t.id}: needs the previous question or a picture – ${c.q}`);
}
console.log(`${problems} problems`);
process.exit(problems ? 1 : 0);
