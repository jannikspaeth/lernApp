import type { RawCard } from '../wissen/types';

// Detailed history of one country: epochs → events (topics) → info text + quiz in
// three levels; a topic can instead be split into subtopics, each with its own
// text and quiz. Ids are slugs and must stay stable (progress is stored under
// `land.<code>.<event>[.<subtopic>].<level>.<n>`, n = position — only append questions).

export type Level = 'leicht' | 'mittel' | 'schwer';
export const LEVELS: { id: Level; name: [string, string] }[] = [
  { id: 'leicht', name: ['Easy', 'Leicht'] },
  { id: 'mittel', name: ['Medium', 'Mittel'] },
  { id: 'schwer', name: ['Hard', 'Schwer'] },
];

export type Quiz = Record<Level, RawCard[]>; // [question, answer, three wrong answers, info?]

export interface Subtopic {
  id: string;
  title: string;
  date?: string;
  text: string[];
  quiz: Quiz;
}

export interface HistEvent {
  id: string;
  title: string;
  date: string;
  text: string[]; // paragraphs, written for the app (with subtopics: a short introduction)
  quiz?: Quiz; // a topic without subtopics has its own quiz
  subtopics?: Subtopic[];
}

// Everything with a quiz inside a topic, with its progress path.
export function quizItems(ev: HistEvent): { path: string; quiz: Quiz }[] {
  if (ev.subtopics?.length) return ev.subtopics.map(s => ({ path: `${ev.id}.${s.id}`, quiz: s.quiz }));
  return ev.quiz ? [{ path: ev.id, quiz: ev.quiz }] : [];
}

export const quizCounts = (q: Quiz): Record<Level, number> => ({
  leicht: q.leicht.length,
  mittel: q.mittel.length,
  schwer: q.schwer.length,
});

export interface Epoch {
  id: string;
  name: string;
  period: string;
  events: HistEvent[];
}

export interface CountryHistory {
  code: string;
  epochs: Epoch[];
}

// `path` = event id, or `<event>.<subtopic>` for a subtopic.
export const questionId = (code: string, path: string, level: Level, n: number) =>
  `land.${code.toLowerCase()}.${path}.${level}.${n + 1}`;
