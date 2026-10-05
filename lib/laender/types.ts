import type { RawCard } from '../wissen/types';

// Detailed history of one country: epochs → events → info text + quiz in three
// levels. Ids are slugs and must stay stable (progress is stored under
// `land.<code>.<event>.<level>.<n>`, n = position — only append questions).

export type Level = 'leicht' | 'mittel' | 'schwer';
export const LEVELS: { id: Level; name: [string, string] }[] = [
  { id: 'leicht', name: ['Easy', 'Leicht'] },
  { id: 'mittel', name: ['Medium', 'Mittel'] },
  { id: 'schwer', name: ['Hard', 'Schwer'] },
];

export interface HistEvent {
  id: string;
  title: string;
  date: string;
  text: string[]; // paragraphs, written for the app
  quiz: Record<Level, RawCard[]>; // [question, answer, three wrong answers, info?]
}

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

export const questionId = (code: string, eventId: string, level: Level, n: number) =>
  `land.${code.toLowerCase()}.${eventId}.${level}.${n + 1}`;
