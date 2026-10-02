import { Card, Subject, Topic } from './types';
import { geschichte } from './geschichte';
import { geografie } from './geografie';
import { kunst } from './kunst';
import { literatur } from './literatur';
import { wissenschaft } from './wissenschaft';
import { musik } from './musik';
import { politik } from './politik';
import { philosophie } from './philosophie';

export type { Card, Subject, Topic } from './types';

export const SUBJECTS: Subject[] = [geschichte, geografie, kunst, literatur, wissenschaft, musik, politik, philosophie];

// Every topic of every subject in one: the mixed round across all subjects.
export const MIX: Subject = {
  id: 'mix',
  name: ['Mixed', 'Gemischt'],
  icon: '🎲',
  blurb: ['Questions from every subject', 'Fragen aus allen Fächern'],
  color: { bg: 'bg-gray-100', text: 'text-gray-800', bar: 'bg-gray-700', border: 'border-gray-200' },
  topics: SUBJECTS.flatMap(s => s.topics.map(t => ({ ...t, group: s.name }))),
};

export function getSubject(id: string): Subject | undefined {
  return id === MIX.id ? MIX : SUBJECTS.find(s => s.id === id);
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
