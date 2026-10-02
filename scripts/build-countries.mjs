// Generates lib/welt/countries.ts (all 193 UN members + Vatican, Palestine,
// Kosovo, Taiwan) from the `world-countries` package (ODbL, mledoze/countries),
// copies their flags from `flag-icons` (MIT) to public/flags/ and the 50m world
// map from `world-atlas` (ISC) to public/maps/.  Run: node scripts/build-countries.mjs
// German names/capitals are corrected below — edit here, never the generated file.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const countries = require('world-countries');

const EXTRA = ['VA', 'PS', 'XK', 'TW'];

// German name fixes + extra accepted spellings for the typing quiz.
const NAME = {
  SZ: ['Eswatini', 'Swasiland'],
  CI: ['Elfenbeinküste', "Côte d'Ivoire"],
  CD: ['Demokratische Republik Kongo', 'Kongo (Dem. Rep.)', 'DR Kongo', 'Kongo-Kinshasa'],
  CG: ['Republik Kongo', 'Kongo', 'Kongo-Brazzaville'],
  US: ['USA', 'Vereinigte Staaten', 'Vereinigte Staaten von Amerika', 'Amerika'],
  GB: ['Vereinigtes Königreich', 'Großbritannien', 'England', 'UK'],
  MD: ['Moldau', 'Moldawien', 'Republik Moldau'],
  BY: ['Belarus', 'Weißrussland'],
  CZ: ['Tschechien', 'Tschechische Republik'],
  TL: ['Osttimor', 'Timor-Leste'],
  MM: ['Myanmar', 'Birma', 'Burma'],
  MK: ['Nordmazedonien', 'Mazedonien'],
  KR: ['Südkorea', 'Korea'],
  KP: ['Nordkorea'],
  CV: ['Kap Verde', 'Cabo Verde'],
  VA: ['Vatikanstadt', 'Vatikan'],
  AE: ['Vereinigte Arabische Emirate', 'VAE', 'Emirate'],
  CF: ['Zentralafrikanische Republik', 'ZAR'],
  NL: ['Niederlande', 'Holland'],
  BA: ['Bosnien und Herzegowina', 'Bosnien'],
  KN: ['St. Kitts und Nevis', 'Saint Kitts und Nevis'],
  LC: ['St. Lucia', 'Saint Lucia'],
  VC: ['St. Vincent und die Grenadinen', 'Saint Vincent und die Grenadinen'],
  FM: ['Mikronesien', 'Föderierte Staaten von Mikronesien'],
  ST: ['São Tomé und Príncipe'],
  PS: ['Palästina', 'Palästinensische Gebiete'],
};

// Capitals in German. A country missing here keeps the package's (English) name,
// so every entry in the data was checked; null = left out of the capital quiz.
const CAPITAL = {
  AE: 'Abu Dhabi', AM: 'Jerewan', CN: 'Peking', GE: 'Tiflis', IN: 'Neu-Delhi', IQ: 'Bagdad',
  IR: 'Teheran', JP: 'Tokio', KG: 'Bischkek', KW: 'Kuwait-Stadt', OM: 'Maskat', SA: 'Riad',
  SG: 'Singapur', SY: 'Damaskus', TJ: 'Duschanbe', TM: 'Aschgabat', TW: 'Taipeh', UZ: 'Taschkent',
  YE: 'Sanaa', MN: 'Ulaanbaatar', PS: null, BD: 'Dhaka',
  DJ: 'Dschibuti', DZ: 'Algier', EG: 'Kairo', ET: 'Addis Abeba', LY: 'Tripolis', SD: 'Khartum',
  SO: 'Mogadischu', SZ: 'Mbabane', TD: 'N’Djamena',
  AT: 'Wien', BE: 'Brüssel', CY: 'Nikosia', CZ: 'Prag', DK: 'Kopenhagen', GR: 'Athen',
  IS: 'Reykjavík', IT: 'Rom', LU: 'Luxemburg', PL: 'Warschau', PT: 'Lissabon', RO: 'Bukarest',
  RS: 'Belgrad', RU: 'Moskau', SM: 'San Marino', UA: 'Kiew', VA: 'Vatikanstadt',
  CU: 'Havanna', GT: 'Guatemala-Stadt', MX: 'Mexiko-Stadt', PA: 'Panama-Stadt',
  US: 'Washington, D.C.', AG: 'Saint John’s', GD: 'St. George’s',
  KI: 'South Tarawa', TO: 'Nukuʻalofa',
};

const CAPITAL_INFO = {
  IL: 'Von den meisten Staaten nicht als Hauptstadt anerkannt; viele Botschaften sind in Tel Aviv.',
  ZA: 'Regierungssitz; das Parlament tagt in Kapstadt, das Oberste Gericht sitzt in Bloemfontein.',
  BO: 'Verfassungsmäßige Hauptstadt; Regierungssitz ist La Paz.',
  NL: 'Regierung und Parlament sitzen in Den Haag.',
  SZ: 'Verwaltungshauptstadt; königliche und legislative Hauptstadt ist Lobamba.',
  CI: 'Wirtschaftszentrum und größte Stadt ist Abidjan.',
  NG: 'Seit 1991; vorher Lagos.',
  BR: 'Seit 1960; vorher Rio de Janeiro.',
  KZ: 'Seit 1997; vorher Almaty.',
  MM: 'Seit 2005; vorher Rangun (Yangon).',
  TZ: 'Offizielle Hauptstadt; größte Stadt ist Daressalam.',
  BJ: 'Offizielle Hauptstadt; Regierungssitz ist Cotonou.',
  BI: 'Seit 2019; vorher Bujumbura.',
  NR: 'Nauru hat offiziell keine Hauptstadt; Yaren ist der Regierungssitz.',
  CH: 'Offiziell „Bundesstadt“.',
  LK: 'Wirtschaftliche Hauptstadt; Parlamentssitz ist Sri Jayawardenepura Kotte.',
  MY: 'Regierungssitz ist Putrajaya.',
  CL: 'Das Parlament tagt in Valparaíso.',
};

const continentOf = c =>
  c.region === 'Europe' ? 'europa'
  : c.region === 'Asia' ? 'asien'
  : c.region === 'Africa' ? 'afrika'
  : c.region === 'Oceania' ? 'ozeanien'
  : c.subregion === 'South America' ? 'suedamerika'
  : 'nordamerika';

const sel = countries
  .filter(c => c.unMember || EXTRA.includes(c.cca2))
  .map(c => {
    const names = NAME[c.cca2] ?? [c.translations.deu.common];
    const capital = c.cca2 in CAPITAL ? CAPITAL[c.cca2] : c.capital[0];
    return {
      code: c.cca2,
      num: c.ccn3 || null,
      name: names[0],
      alt: names.slice(1),
      continent: continentOf(c),
      capital,
      ...(CAPITAL_INFO[c.cca2] ? { capitalInfo: CAPITAL_INFO[c.cca2] } : {}),
      area: Math.round(c.area),
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name, 'de'));

const out = `// GENERATED by scripts/build-countries.mjs — do not edit by hand.
// Source: world-countries (ODbL), German names/capitals corrected in the script.
import type { Country } from './types';

export const COUNTRIES: Country[] = ${JSON.stringify(sel, null, 0).replace(/\},\{/g, '},\n  {').replace(/^\[\{/, '[\n  {').replace(/\}\]$/, '},\n]')};
`;
mkdirSync('lib/welt', { recursive: true });
writeFileSync('lib/welt/countries.ts', out);

mkdirSync('public/flags', { recursive: true });
for (const c of sel) {
  const f = c.code.toLowerCase();
  copyFileSync(require.resolve(`flag-icons/flags/4x3/${f}.svg`), `public/flags/${f}.svg`);
}
mkdirSync('public/maps', { recursive: true });
writeFileSync('public/maps/countries-50m.json', readFileSync(require.resolve('world-atlas/countries-50m.json')));

console.log(`${sel.length} countries, flags and map written.`);
