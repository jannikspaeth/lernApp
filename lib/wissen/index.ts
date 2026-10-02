import { Card, Subject, Topic } from './types';
import { geschichte } from './geschichte';
import { geografie } from './geografie';
import { kunst } from './kunst';
import { literatur } from './literatur';

export type { Card, Subject, Topic } from './types';

export const SUBJECTS: Subject[] = [geschichte, geografie, kunst, literatur];

export function getSubject(id: string): Subject | undefined {
  return SUBJECTS.find(s => s.id === id);
}

export function allCards(s: Subject): Card[] {
  return s.topics.flatMap(t => t.cards);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Answer + three wrong options, shuffled. Without hand-written wrong answers
// the other answers of the same topic are used.
export function quizOptions(card: Card, topic: Topic): string[] {
  const wrong =
    card.wrong ??
    shuffle([...new Set(topic.cards.map(c => c.a))].filter(a => a !== card.a)).slice(0, 3);
  return shuffle([card.a, ...wrong]);
}

export function topicOf(s: Subject, cardId: string): Topic {
  return s.topics.find(t => t.cards.some(c => c.id === cardId)) ?? s.topics[0];
}
