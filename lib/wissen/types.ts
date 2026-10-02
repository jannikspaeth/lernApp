// Knowledge subjects (Geschichte, Geografie, Kunst, Literatur): question cards
// grouped into topics. Content is German; subject/topic names come in both UI
// languages.

export interface Card {
  id: string; // `<subject>.<topic>.<n>` — stable, progress is stored under it
  q: string;
  a: string;
  // Three wrong answers for the quiz. Missing → taken from the other answers of
  // the same topic (only for topics whose answers are all of one kind).
  wrong?: string[];
  info?: string; // shown after answering
}

export interface Topic {
  id: string;
  name: [string, string]; // [en, de]
  icon: string;
  cards: Card[];
}

export interface Subject {
  id: string;
  name: [string, string];
  icon: string;
  blurb: [string, string];
  // Full Tailwind class strings (must stay literal so Tailwind picks them up).
  color: { bg: string; text: string; bar: string; border: string };
  topics: Topic[];
}

// Compact card notation: c('Frage', 'Antwort', ['falsch', 'falsch', 'falsch'], 'Info').
export type RawCard = [q: string, a: string, wrong?: string[] | null, info?: string];

// Build a topic; card ids are the 1-based position, so only ever append new
// cards (inserting or reordering would mix up stored progress).
export function topic(
  subjectId: string,
  id: string,
  name: [string, string],
  icon: string,
  raw: RawCard[],
): Topic {
  return {
    id,
    name,
    icon,
    cards: raw.map(([q, a, wrong, info], i) => ({
      id: `${subjectId}.${id}.${i + 1}`,
      q,
      a,
      ...(wrong ? { wrong } : {}),
      ...(info ? { info } : {}),
    })),
  };
}
