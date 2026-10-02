import type { Card } from './types';

// Spaced repetition for knowledge cards: level 0 = new, each correct answer moves
// one level up (next review after INTERVALS[level] days), a wrong answer goes back
// to level 1 and is due again right away. From MASTERED_LEVEL on a card counts
// as learned.

export interface CardProgress {
  l: number; // level
  n?: string; // next review (ISO)
  r: number; // correct answers
  w: number; // wrong answers
}

export interface WissenProgress {
  cards: Record<string, CardProgress>;
}

export const INTERVALS = [0, 1, 3, 7, 14, 30, 60];
export const MAX_LEVEL = INTERVALS.length - 1;
export const MASTERED_LEVEL = 4;
export const ROUND_SIZE = 10;

export function emptyProgress(): WissenProgress {
  return { cards: {} };
}

export function normalizeProgress(d: Partial<WissenProgress> | null | undefined): WissenProgress {
  return { cards: d?.cards ?? {} };
}

export function applyAnswer(p: CardProgress | undefined, correct: boolean, now = new Date()): CardProgress {
  const prev = p ?? { l: 0, r: 0, w: 0 };
  const l = correct ? Math.min(prev.l + 1, MAX_LEVEL) : 1;
  const next = new Date(now.getTime() + INTERVALS[correct ? l : 0] * 86_400_000);
  return { l, n: next.toISOString(), r: prev.r + (correct ? 1 : 0), w: prev.w + (correct ? 0 : 1) };
}

export function isMastered(p: CardProgress | undefined): boolean {
  return !!p && p.l >= MASTERED_LEVEL;
}

export function isDue(p: CardProgress | undefined, now = new Date()): boolean {
  return !!p && (!p.n || new Date(p.n) <= now);
}

export interface Summary {
  total: number;
  seen: number;
  mastered: number;
  due: number;
}

export function summarize(cards: Card[], prog: WissenProgress): Summary {
  const now = new Date();
  let seen = 0, mastered = 0, due = 0;
  for (const c of cards) {
    const p = prog.cards[c.id];
    if (!p) continue;
    seen++;
    if (isMastered(p)) mastered++;
    if (isDue(p, now)) due++;
  }
  return { total: cards.length, seen, mastered, due };
}

// A round: due cards first (most overdue first), then new ones in content order,
// topped up with the cards coming up next when everything is learned.
export function pickRound(cards: Card[], prog: WissenProgress, size = ROUND_SIZE): Card[] {
  const now = new Date();
  const time = (c: Card) => new Date(prog.cards[c.id]?.n ?? 0).getTime();
  const due = cards.filter(c => isDue(prog.cards[c.id], now)).sort((a, b) => time(a) - time(b));
  const fresh = cards.filter(c => !prog.cards[c.id]);
  const later = cards
    .filter(c => prog.cards[c.id] && !isDue(prog.cards[c.id], now))
    .sort((a, b) => time(a) - time(b));
  return [...due, ...fresh, ...later].slice(0, size);
}
