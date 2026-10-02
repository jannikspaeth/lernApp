'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { geoMercator, geoNaturalEarth1, geoPath, type GeoProjection } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { Feature, Geometry } from 'geojson';
import { COUNTRIES, type Continent } from '@/lib/welt';

// Zoomable SVG world map (world-atlas 50m, loaded on demand). Countries are
// keyed by ISO alpha-2 code; tiny ones get a round tap target.

export const W = 960;
export const H = 600;

export type RegionId = 'welt' | Continent;

interface RegionDef {
  projection: () => GeoProjection;
  // lon/lat corners the view is fitted to (null = whole globe)
  box: [[number, number], [number, number]] | null;
}

const REGIONS: Record<RegionId, RegionDef> = {
  welt: { projection: () => geoNaturalEarth1(), box: null },
  europa: { projection: () => geoMercator(), box: [[-24, 34], [45, 71]] },
  asien: { projection: () => geoMercator(), box: [[26, -11], [148, 56]] },
  afrika: { projection: () => geoMercator(), box: [[-26, -36], [58, 38]] },
  nordamerika: { projection: () => geoMercator(), box: [[-135, 6], [-52, 62]] },
  suedamerika: { projection: () => geoMercator(), box: [[-92, -56], [-30, 14]] },
  ozeanien: { projection: () => geoNaturalEarth1().rotate([-165, 0]), box: [[110, -48], [200, 16]] },
};

export interface MapShape {
  code: string | null; // null = not one of our countries (Greenland, Western Sahara, …)
  d: string;
  cx: number;
  cy: number;
  small: boolean;
}

type Topo = Topology<{ countries: GeometryCollection<{ name: string }> }>;
let topoPromise: Promise<Topo> | null = null;
function loadTopo(): Promise<Topo> {
  topoPromise ??= fetch('/maps/countries-50m.json').then(r => {
    if (!r.ok) throw new Error('map');
    return r.json() as Promise<Topo>;
  });
  topoPromise.catch(() => { topoPromise = null; });
  return topoPromise;
}

const BY_NUM = new Map(COUNTRIES.filter(c => c.num).map(c => [c.num as string, c.code]));

export function useMapShapes(region: RegionId): { shapes: MapShape[] | null; error: boolean } {
  const [features, setFeatures] = useState<Feature<Geometry, { name: string }>[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    loadTopo()
      .then(topo => {
        if (!alive) return;
        const fc = feature(topo, topo.objects.countries);
        setFeatures(fc.features);
      })
      .catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);

  const shapes = useMemo(() => {
    if (!features) return null;
    const def = REGIONS[region];
    const proj = def.projection();
    const pad = 12;
    if (def.box) {
      const [[x0, y0], [x1, y1]] = def.box;
      proj.fitExtent([[pad, pad], [W - pad, H - pad]], {
        type: 'MultiPoint',
        coordinates: [[x0, y0], [x1, y0], [x0, y1], [x1, y1], [(x0 + x1) / 2, y0], [(x0 + x1) / 2, y1]],
      });
    } else {
      proj.fitExtent([[pad, pad], [W - pad, H - pad]], { type: 'Sphere' });
    }
    const path = geoPath(proj);
    const out: MapShape[] = [];
    for (const f of features) {
      const d = path(f);
      if (!d) continue;
      const code = (f.id != null && BY_NUM.get(String(f.id))) || (f.properties?.name === 'Kosovo' ? 'XK' : null);
      const [cx, cy] = path.centroid(f);
      out.push({ code, d, cx, cy, small: !!code && path.area(f) < 150 });
    }
    // Small countries last, so their tap targets lie on top.
    return out.sort((a, b) => Number(a.small) - Number(b.small));
  }, [features, region]);

  return { shapes, error };
}

export type Fill = 'idle' | 'inactive' | 'found' | 'wrong' | 'reveal' | 'missed';

const FILL: Record<Fill, string> = {
  idle: '#cbd5e1',
  inactive: '#e5e7eb',
  found: '#22c55e',
  wrong: '#f87171',
  reveal: '#f59e0b',
  missed: '#ef4444',
};

// Pan (drag), zoom (wheel, pinch, buttons) around a pointer position.
export function WorldMap({
  shapes,
  fillOf,
  titleOf,
  onPick,
}: {
  shapes: MapShape[];
  fillOf: (code: string | null) => Fill;
  titleOf?: (code: string) => string | null;
  onPick?: (code: string) => void;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [view, setView] = useState({ k: 1, x: 0, y: 0 });
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const dragged = useRef(false);
  const pinch = useRef<{ dist: number } | null>(null);

  // Screen point → viewBox coordinates.
  function toBox(clientX: number, clientY: number) {
    const r = svgRef.current!.getBoundingClientRect();
    const s = Math.max(W / r.width, H / r.height);
    // preserveAspectRatio="xMidYMid meet": the box is centred in the element.
    const ox = (r.width * s - W) / 2;
    const oy = (r.height * s - H) / 2;
    return { x: (clientX - r.left) * s - ox, y: (clientY - r.top) * s - oy, s };
  }

  function zoomAt(px: number, py: number, factor: number) {
    setView(v => {
      const k = Math.min(30, Math.max(1, v.k * factor));
      const f = k / v.k;
      return clamp({ k, x: px - (px - v.x) * f, y: py - (py - v.y) * f });
    });
  }

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const p = toBox(e.clientX, e.clientY);
      zoomAt(p.x, p.y, Math.exp(-e.deltaY * 0.0015));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  function onPointerDown(e: React.PointerEvent) {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 1) dragged.current = false;
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { dist: Math.hypot(a.x - b.x, a.y - b.y) };
    }
  }

  function onPointerMove(e: React.PointerEvent) {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    const cur = { x: e.clientX, y: e.clientY };
    pointers.current.set(e.pointerId, cur);
    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const mid = toBox((a.x + b.x) / 2, (a.y + b.y) / 2);
      zoomAt(mid.x, mid.y, dist / pinch.current.dist);
      pinch.current.dist = dist;
      dragged.current = true;
      return;
    }
    const dx = cur.x - prev.x;
    const dy = cur.y - prev.y;
    if (!dragged.current && Math.hypot(dx, dy) < 3) return;
    dragged.current = true;
    const { s } = toBox(cur.x, cur.y);
    setView(v => clamp({ ...v, x: v.x + dx * s, y: v.y + dy * s }));
  }

  function onPointerUp(e: React.PointerEvent) {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
  }

  function pick(code: string | null) {
    if (!code || dragged.current || !onPick) return;
    onPick(code);
  }

  const btn = 'w-9 h-9 rounded-lg bg-white/90 border border-gray-200 shadow-sm text-lg font-semibold text-gray-700 hover:bg-white';

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-sky-50">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto block touch-none select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <g transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
          {shapes.map((s, i) => {
            const fill = FILL[fillOf(s.code)];
            const title = s.code && titleOf ? titleOf(s.code) : null;
            const clickable = !!s.code && fillOf(s.code) !== 'inactive' && !!onPick;
            const common = {
              fill,
              stroke: '#ffffff',
              strokeWidth: 0.6,
              vectorEffect: 'non-scaling-stroke' as const,
              onClick: () => pick(s.code),
              className: clickable ? 'cursor-pointer hover:brightness-90' : undefined,
            };
            return (
              <g key={i}>
                <path d={s.d} {...common}>{title && <title>{title}</title>}</path>
                {s.small && fillOf(s.code) !== 'inactive' && (
                  <circle cx={s.cx} cy={s.cy} r={5 / Math.sqrt(view.k)} {...common} stroke="#64748b">
                    {title && <title>{title}</title>}
                  </circle>
                )}
              </g>
            );
          })}
        </g>
      </svg>
      <div className="absolute right-2 bottom-2 flex flex-col gap-1">
        <button type="button" className={btn} onClick={() => zoomAt(W / 2, H / 2, 1.6)} aria-label="Zoom in">+</button>
        <button type="button" className={btn} onClick={() => zoomAt(W / 2, H / 2, 1 / 1.6)} aria-label="Zoom out">−</button>
        <button type="button" className={`${btn} text-sm`} onClick={() => setView({ k: 1, x: 0, y: 0 })} aria-label="Reset">⟲</button>
      </div>
    </div>
  );
}

// Keep at least part of the map in view.
function clamp(v: { k: number; x: number; y: number }) {
  const minX = W - W * v.k - W * 0.25;
  const minY = H - H * v.k - H * 0.25;
  return { k: v.k, x: Math.min(W * 0.25, Math.max(minX, v.x)), y: Math.min(H * 0.25, Math.max(minY, v.y)) };
}
