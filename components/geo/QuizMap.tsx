'use client';

import { WorldMap, useMapShapes, type Fill, type RegionId } from '@/components/welt/WorldMap';

// The map of a country quiz: found countries turn green, missed ones red at the end, the
// country a neighbour quiz is about is marked; everything not asked is greyed out.
export default function QuizMap({
  region,
  focus,
  codes,
  found,
  done,
}: {
  region: RegionId;
  focus?: string;
  codes: Set<string>;
  found: Set<string>;
  done: boolean;
}) {
  const { shapes, error } = useMapShapes(region);
  if (error) return null;
  if (!shapes) return <div className="aspect-[8/5] rounded-2xl bg-[var(--map-water)] border border-line animate-pulse" />;
  const fillOf = (c: string | null): Fill => {
    if (!c) return 'inactive';
    if (c === focus) return 'reveal';
    if (found.has(c)) return 'found';
    if (codes.has(c)) return done ? 'missed' : 'idle';
    return 'inactive';
  };
  return (
    <div className="rounded-2xl overflow-hidden border border-line">
      <WorldMap shapes={shapes} fillOf={fillOf} />
    </div>
  );
}
