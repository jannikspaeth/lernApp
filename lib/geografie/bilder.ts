import type { Card, Topic } from '../wissen/types';
import { GROUP } from './cats';
import { S } from './helpers';
import bilderJson from './bilder.json';
import creditsJson from './credits.json';

interface Credit { author: string; licence: string; page: string }
const CREDITS = creditsJson as Record<string, Credit>;
const BILDER = bilderJson as Record<string, unknown>;

// Pictures come from Wikimedia Commons (scripts/fetch-bilder.mjs geografie): only cards whose picture
// was downloaded and credited are offered.
function pic(key: string): Pick<Card, 'img' | 'credit'> | null {
  const c = CREDITS[key];
  if (!c || !(key in BILDER)) return null;
  const who = c.author && c.author !== 'unbekannt' ? `${c.author}, ` : '';
  return { img: `/geo/${key}.jpg`, credit: c.licence.toLowerCase().startsWith('public domain') ? 'Bild: gemeinfrei · Wikimedia Commons' : `Bild: ${who}${c.licence} · Wikimedia Commons` };
}

const build = (id: string, name: [string, string], group: [string, string], q: string, rows: [key: string, answer: string, info?: string][]): Topic => ({
  id,
  name,
  icon: '',
  group,
  shuffle: true,
  cards: rows.flatMap(([key, a, info]): Card[] => {
    const p = pic(key);
    return p ? [{ id: `${S}.${id}.${key.replace(/^[a-z]+-/, '')}`, q, a, ...(info ? { info } : {}), ...p }] : [];
  }),
});

export const satellites = build('satellitenbilder', ['Satellite images', 'Satellitenbilder erkennen'], GROUP.spezial, 'Welchen Ort oder welche Landschaft zeigt dieses Satellitenbild?', [
  ['sat-aralsee', 'Aralsee', 'Der See ist seit den 1960er-Jahren durch Bewässerung fast verschwunden.'],
  ['sat-ganges-delta', 'Gangesdelta (Sundarbans)', 'Das größte Flussdelta der Erde, in Bangladesch und Indien.'],
  ['sat-great-barrier-reef', 'Great Barrier Reef', 'Das größte Korallenriff der Erde, vor Queensland in Australien.'],
  ['sat-grosser-salzsee', 'Großer Salzsee (Utah)', 'Der rote Teil ist durch Algen und Salz gefärbt.'],
  ['sat-himalaya', 'Himalaya und Tibetisches Hochland', 'Das höchste Gebirge der Erde.'],
  ['sat-island', 'Island', 'Die Insel ist zu großen Teilen von Gletschern bedeckt.'],
  ['sat-kaspisches-meer', 'Kaspisches Meer', 'Der größte See der Erde.'],
  ['sat-nildelta', 'Nildelta und Sinai', 'Das grüne Band entlang des Nils in der Wüste.'],
  ['sat-palm-jumeirah', 'Palm Jumeirah (Dubai)', 'Künstliche Inseln in Palmenform.'],
  ['sat-sahara', 'Sahara', 'Die größte Heißwüste der Erde.'],
  ['sat-venedig', 'Lagune von Venedig', 'Die Stadt liegt in einer Lagune der Adria.'],
]);

export const coatsImages = build('wappen-bilder', ['Coats of arms', 'Wappen erkennen'], GROUP.flaggen, 'Welches Land hat dieses Wappen?', [
  ['wappen-australien', 'Australien', 'Känguru und Emu als Schildhalter.'],
  ['wappen-brasilien', 'Brasilien', 'Der Stern mit dem Kreuz des Südens.'],
  ['wappen-frankreich', 'Frankreich', 'Das Rutenbündel („Faszes“) ist ein Symbol der Republik.'],
  ['wappen-irland', 'Irland', 'Die goldene Harfe auf blauem Grund.'],
  ['wappen-italien', 'Italien', 'Der weiße Stern in einem Zahnrad, umgeben von Eichen- und Olivenzweigen.'],
  ['wappen-japan', 'Japan', 'Das Chrysanthemen-Siegel (Kiku) des Kaiserhauses.'],
  ['wappen-kanada', 'Kanada', 'Mit Löwe und Einhorn als Schildhalter.'],
  ['wappen-mexiko', 'Mexiko', 'Adler auf einem Kaktus mit einer Schlange im Schnabel.'],
  ['wappen-oesterreich', 'Österreich', 'Der Adler mit gesprengten Ketten.'],
  ['wappen-polen', 'Polen', 'Ein weißer Adler mit goldener Krone.'],
  ['wappen-russland', 'Russland', 'Der goldene Doppeladler.'],
  ['wappen-spanien', 'Spanien', 'Mit den Säulen des Herkules.'],
  ['wappen-suedafrika', 'Südafrika', 'Mit dem Sekretärvogel und dem Motto in der Sprache der San.'],
  ['wappen-tschechien', 'Tschechien', 'Der böhmische Löwe, der mährische Adler und der schlesische Adler.'],
  ['wappen-ungarn', 'Ungarn', 'Die Stephanskrone über dem Doppelkreuz.'],
]);
