'use client';

import type { Continent } from '@/lib/welt';
import { WorldMap, useMapShapes } from './WorldMap';

// The continent with one country (or none) highlighted.
export default function CountryMap({ continent, code }: { continent: Continent; code?: string }) {
  const { shapes } = useMapShapes(continent);
  if (!shapes) return <div className="aspect-[8/5] rounded-2xl bg-sky-50 border border-gray-200 animate-pulse" />;
  return <WorldMap shapes={shapes} fillOf={c => (c && c === code ? 'found' : c ? 'idle' : 'inactive')} />;
}
