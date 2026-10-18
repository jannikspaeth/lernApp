'use client';

import { useEffect, useMemo, useState } from 'react';
import { geoAlbersUsa, geoMercator, geoNaturalEarth1, geoPath, type GeoProjection } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology } from 'topojson-specification';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import type { QuizItem, ThemeMap } from '@/lib/geografie/quizzes';

const W = 960;
const H = 620;
type F = Feature<Geometry, { n?: string }>;

const cache = new Map<string, Promise<F[]>>();
function load(file: string): Promise<F[]> {
  if (!cache.has(file)) {
    cache.set(file, fetch(`/maps/${file}.json`).then(r => r.json()).then((t: Topology) => {
      const obj = Object.values(t.objects)[0];
      return (feature(t, obj) as unknown as FeatureCollection<Geometry, { n?: string }>).features;
    }));
  }
  return cache.get(file)!;
}

type State = 'idle' | 'found' | 'missed';
const COLOR: Record<State, string> = { idle: 'var(--map-land)', found: 'var(--color-good)', missed: 'var(--color-bad)' };
const LINE: Record<State, string> = { idle: '#3b82f6', found: 'var(--color-good)', missed: 'var(--color-bad)' };

// A Jetpunk-style map for a typed quiz: regions, rivers, lakes or points turn green as they are found,
// red when the quiz ends without them.
export default function ThemeMapView({ theme, items, solved, done }: { theme: ThemeMap; items: QuizItem[]; solved: Set<number>; done: boolean }) {
  const [world, setWorld] = useState<F[] | null>(null);
  const [layer, setLayer] = useState<F[] | null>(null);
  const [rivers, setRivers] = useState<F[] | null>(null);
  const [lakes, setLakes] = useState<F[] | null>(null);
  const needRivers = items.some(i => i.river);
  const needLakes = items.some(i => i.lake);

  useEffect(() => {
    let alive = true;
    fetch('/maps/countries-50m.json').then(r => r.json()).then((t: Topology) => {
      if (alive) setWorld((feature(t, Object.values(t.objects)[0]) as unknown as FeatureCollection<Geometry, { n?: string }>).features);
    });
    if (theme.layer) load(theme.layer).then(f => alive && setLayer(f));
    if (needRivers) load('rivers').then(f => alive && setRivers(f));
    if (needLakes) load('lakes').then(f => alive && setLakes(f));
    return () => { alive = false; };
  }, [theme.layer, needRivers, needLakes]);

  const state = (idx: number[]): State => (idx.some(i => solved.has(i)) ? 'found' : done ? 'missed' : 'idle');

  // Item indices per region / river / lake name.
  const byShape = useMemo(() => groupBy(items, i => (i.shape ? [i.shape] : [])), [items]);
  const byRiver = useMemo(() => groupBy(items, i => i.river ?? []), [items]);
  const byLake = useMemo(() => groupBy(items, i => (i.lake ? [i.lake] : [])), [items]);

  const view = useMemo(() => {
    if (!world) return null;
    const focus: F[] = [];
    if (layer) focus.push(...layer);
    if (rivers) focus.push(...rivers.filter(f => byRiver.has(f.properties.n ?? '')));
    if (lakes) focus.push(...lakes.filter(f => byLake.has(f.properties.n ?? '')));
    for (const it of items) if (it.pt) focus.push({ type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: it.pt } });
    if (focus.length === 0) return null;
    const fc: FeatureCollection = { type: 'FeatureCollection', features: focus };
    const lons = items.filter(i => i.pt).map(i => i.pt![0]);
    const wide = lons.length > 1 && Math.max(...lons) - Math.min(...lons) > 150;
    const proj: GeoProjection = theme.projection === 'albersUsa' ? geoAlbersUsa() : wide ? geoNaturalEarth1() : geoMercator();
    const pad = layer ? 24 : 90; // points and lines get room for their labels
    proj.fitExtent([[pad, pad], [W - pad, H - pad]], fc);
    if (lons.length === 1 || (!layer && focus.every(f => f.geometry.type === 'Point') && focus.length < 3)) proj.scale(proj.scale() * 0.5);
    return { path: geoPath(proj), proj };
  }, [world, layer, rivers, lakes, items, theme.projection, byRiver, byLake]);

  if (!view) return <div className="aspect-[48/31] rounded-2xl bg-[var(--map-water)] border border-line animate-pulse" />;
  const { path, proj } = view;

  return (
    <div className="rounded-2xl overflow-hidden border border-line bg-[var(--map-water)]">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label="Karte">
        {theme.projection !== 'albersUsa' && world!.map((f, i) => (
          <path key={`w${i}`} d={path(f) ?? ''} fill="var(--map-inactive)" stroke="var(--map-border, #fff)" strokeWidth={0.6} />
        ))}
        {layer?.map((f, i) => {
          const idx = byShape.get(f.properties.n ?? '') ?? [];
          return <path key={`l${i}`} d={path(f) ?? ''} fill={idx.length ? COLOR[state(idx)] : 'var(--map-inactive)'} stroke="#fff" strokeWidth={1} />;
        })}
        {lakes?.filter(f => byLake.has(f.properties.n ?? '')).map((f, i) => (
          <path key={`k${i}`} d={path(f) ?? ''} fill={state(byLake.get(f.properties.n ?? '')!) === 'idle' ? '#93c5fd' : COLOR[state(byLake.get(f.properties.n ?? '')!)]} stroke="#fff" strokeWidth={0.8} />
        ))}
        {rivers?.filter(f => byRiver.has(f.properties.n ?? '')).map((f, i) => {
          const s = state(byRiver.get(f.properties.n ?? '')!);
          return <path key={`r${i}`} d={path(f) ?? ''} fill="none" stroke={LINE[s]} strokeWidth={s === 'idle' ? 2 : 3} strokeLinecap="round" strokeLinejoin="round" />;
        })}
        {items.map((it, i) => {
          if (!it.pt) return null;
          const p = proj(it.pt);
          if (!p) return null;
          const s = state([i]);
          return (
            <g key={`p${i}`}>
              <circle cx={p[0]} cy={p[1]} r={s === 'idle' ? 5 : 6.5} fill={s === 'idle' ? '#1e293b' : COLOR[s]} stroke="#fff" strokeWidth={1.5} />
              {s !== 'idle' && (
                <text x={p[0] + 9} y={p[1] + 4} fontSize={15} fontWeight={600} fill="#0f172a" stroke="#fff" strokeWidth={3} paintOrder="stroke">{it.answer}</text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function groupBy(items: QuizItem[], keys: (i: QuizItem) => string[]): Map<string, number[]> {
  const m = new Map<string, number[]>();
  items.forEach((it, i) => { for (const k of keys(it)) m.set(k, [...(m.get(k) ?? []), i]); });
  return m;
}
