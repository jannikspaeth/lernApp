// Builds the geography data that is derived from the world-atlas map:
//  - public/umriss/<code>.svg  (country outline, for "recognise the country")
//  - lib/geografie/neighbours.json  ({ code: [neighbour codes] }, land borders)
// Usage: node scripts/build-geo-data.mjs
import fs from 'node:fs';
import path from 'node:path';
import { feature, neighbors } from 'topojson-client';
import { geoAzimuthalEqualArea, geoPath, geoCentroid, geoArea } from 'd3-geo';

const root = path.resolve(import.meta.dirname, '..');
const topo = JSON.parse(fs.readFileSync(path.join(root, 'public/maps/countries-50m.json'), 'utf8'));
const src = fs.readFileSync(path.join(root, 'lib/welt/countries.ts'), 'utf8');
const countries = [...src.matchAll(/\{"code":"(\w+)","num":(?:"(\d+)"|null)/g)].map(m => ({ code: m[1], num: m[2] }));
const byNum = new Map(countries.filter(c => c.num).map(c => [c.num, c.code]));

const geoms = topo.objects.countries.geometries;
const nb = neighbors(geoms);
const out = {};
geoms.forEach((g, i) => {
  const code = byNum.get(String(g.id).padStart(3, '0'));
  if (!code) return;
  out[code] = [...new Set(nb[i].map(j => byNum.get(String(geoms[j].id).padStart(3, '0'))).filter(Boolean))].sort();
});
fs.writeFileSync(path.join(root, 'lib/geografie/neighbours.json'), JSON.stringify(out));

const fc = feature(topo, topo.objects.countries).features;
let n = 0;
for (const f of fc) {
  const code = byNum.get(String(f.id).padStart(3, '0'));
  if (!code) continue;
  // Keep the main land masses only: drop polygons smaller than 4 % of the largest (remote islands).
  let geom = f.geometry;
  if (geom.type === 'MultiPolygon') {
    const polys = geom.coordinates.map(c => ({ c, a: geoArea({ type: 'Polygon', coordinates: c }) }));
    const max = Math.max(...polys.map(p => p.a));
    const keep = polys.filter(p => p.a >= max * 0.04).map(p => p.c);
    geom = keep.length === 1 ? { type: 'Polygon', coordinates: keep[0] } : { type: 'MultiPolygon', coordinates: keep };
  }
  const ff = { type: 'Feature', geometry: geom };
  const [cx, cy] = geoCentroid(ff);
  const proj = geoAzimuthalEqualArea().rotate([-cx, -cy]).fitExtent([[8, 8], [192, 152]], ff);
  const d = geoPath(proj)(ff);
  if (!d) continue;
  fs.writeFileSync(path.join(root, 'public/umriss', `${code.toLowerCase()}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 160"><path d="${d}" fill="#64748b" stroke="#475569" stroke-width="0.6" stroke-linejoin="round"/></svg>`);
  n++;
}
console.log(`${n} outlines, ${Object.keys(out).length} neighbour lists`);
