'use client';

import { useEffect, useState } from 'react';
import { getWissen } from '@/lib/storage';
import { LEVELS, questionId, type Level } from '@/lib/laender/types';
import type { WissenProgress } from '@/lib/wissen/progress';

// A level counts as done once every question of it was answered correctly once.
export function levelDone(prog: WissenProgress | null, code: string, eventId: string, level: Level, count: number): boolean {
  if (!prog || count === 0) return false;
  for (let n = 0; n < count; n++) if (!((prog.cards[questionId(code, eventId, level, n)]?.r ?? 0) > 0)) return false;
  return true;
}

// One progress read shared by all stars on a page (reused for a few seconds).
let shared: { at: number; p: Promise<WissenProgress> } | null = null;
export function useWissenProgress(): WissenProgress | null {
  const [prog, setProg] = useState<WissenProgress | null>(null);
  useEffect(() => {
    let alive = true;
    if (!shared || Date.now() - shared.at > 5000) shared = { at: Date.now(), p: getWissen() };
    shared.p.then(p => alive && setProg(p));
    return () => {
      alive = false;
    };
  }, []);
  return prog;
}

// Three stars (easy / medium / hard) for one event.
export default function EventStars({ code, eventId, counts }: { code: string; eventId: string; counts: Record<Level, number> }) {
  const prog = useWissenProgress();
  return (
    <span className="flex gap-0.5 text-sm shrink-0" aria-hidden>
      {LEVELS.map(l => (
        <span key={l.id} className={levelDone(prog, code, eventId, l.id, counts[l.id]) ? 'text-amber-500' : 'text-gray-200'}>★</span>
      ))}
    </span>
  );
}
