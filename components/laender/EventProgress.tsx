'use client';

import { useEffect, useState } from 'react';
import { getWissen } from '@/lib/storage';
import { LEVELS, questionId, type Level } from '@/lib/laender/types';
import type { WissenProgress } from '@/lib/wissen/progress';

export interface StarItem {
  path: string;
  counts: Record<Level, number>;
}

// A level counts as done once every question of it was answered correctly once.
export function levelDone(prog: WissenProgress | null, code: string, path: string, level: Level, count: number): boolean {
  if (!prog || count === 0) return false;
  for (let n = 0; n < count; n++) if (!((prog.cards[questionId(code, path, level, n)]?.r ?? 0) > 0)) return false;
  return true;
}

// A topic's level is done when it is done in every subtopic.
const allDone = (prog: WissenProgress | null, code: string, items: StarItem[], level: Level) =>
  items.length > 0 && items.every(i => levelDone(prog, code, i.path, level, i.counts[level]));

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

// Three stars (easy / medium / hard) for a topic or subtopic.
export default function EventStars({ code, items }: { code: string; items: StarItem[] }) {
  const prog = useWissenProgress();
  return (
    <span className="flex gap-0.5 text-sm shrink-0" aria-hidden>
      {LEVELS.map(l => (
        <span key={l.id} className={allDone(prog, code, items, l.id) ? 'text-amber-500' : 'text-gray-200'}>★</span>
      ))}
    </span>
  );
}
