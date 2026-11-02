// "Who are you?" quizzes: each answer gives a point to one or two results; the result with the most points wins and
// links to its chapter. Pictures are keys of lib/bild.ts. Check with `npx tsx scripts/check-persoenlichkeit.ts`.
import { PHILOSOPHEN } from './philosophen';
import { KUENSTLER } from './kuenstler';
import { KOMPONISTEN } from './komponisten';
import { SCHRIFTSTELLER } from './schriftsteller';

export type ChapterSet = 'kunst' | 'lit' | 'mus' | 'phi';

export interface PersonaResult {
  id: string;
  name: string;
  img: string; // picture key
  set: ChapterSet;
  path: string; // <event id>/<chapter id>
  tag: string; // one line: what kind of person this is
  text: string;
}

export interface PersonaQuestion {
  q: string;
  options: [text: string, results: string[]][];
}

export interface Persona {
  id: string;
  title: string;
  blurb: string;
  results: PersonaResult[];
  questions: PersonaQuestion[];
}

export const PERSONAS: Persona[] = [PHILOSOPHEN, KUENSTLER, KOMPONISTEN, SCHRIFTSTELLER];

export const findPersona = (id: string) => PERSONAS.find(p => p.id === id);

const BASE: Record<ChapterSet, string> = { kunst: '/kunst', lit: '/literatur', mus: '/musik', phi: '/philosophie' };
export const resultHref = (r: PersonaResult) => `${BASE[r.set]}/${r.path}`;

// Points per result for the chosen option indices; ties go to the result that scored last.
export function scoreResult(p: Persona, picks: number[]): PersonaResult {
  const pts = new Map<string, number>();
  const last = new Map<string, number>();
  picks.forEach((o, qi) => {
    for (const id of p.questions[qi].options[o][1]) {
      pts.set(id, (pts.get(id) ?? 0) + 1);
      last.set(id, qi);
    }
  });
  const best = [...p.results].sort((a, b) => (pts.get(b.id) ?? 0) - (pts.get(a.id) ?? 0) || (last.get(b.id) ?? -1) - (last.get(a.id) ?? -1));
  return best[0];
}
