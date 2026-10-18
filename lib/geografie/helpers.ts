import { topic, type RawCard, type Topic } from '../wissen/types';

export const S = 'geografie';

// "key → answer" pairs as a topic: the question comes from a template, wrong
// options are taken from the other answers of the topic.
export function pairs(
  id: string,
  name: [string, string],
  group: [string, string],
  question: string | ((key: string) => string),
  rows: [key: string, answer: string, info?: string][],
  opts: { icon?: string; shuffle?: boolean } = {},
): Topic {
  const q = typeof question === 'string' ? (k: string) => question.replace('{k}', k) : question;
  const t = topic(S, id, name, opts.icon ?? '', rows.map(([k, a, info]): RawCard => [q(k), a, null, info ?? null]), group);
  return opts.shuffle ? { ...t, shuffle: true } : t;
}

// Fully written cards: [question, answer, wrong[], info?].
export function cards(id: string, name: [string, string], group: [string, string], raw: RawCard[], icon = ''): Topic {
  return topic(S, id, name, icon, raw, group);
}

// True/false statements: [statement, true?, explanation].
export function trueFalse(id: string, name: [string, string], group: [string, string], rows: [string, boolean, string][]): Topic {
  return topic(S, id, name, '', rows.map(([q, ok, info]): RawCard => [q, ok ? 'Wahr' : 'Falsch', [ok ? 'Falsch' : 'Wahr'], info]), group);
}
