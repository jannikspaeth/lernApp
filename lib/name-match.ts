import { editDistance, normName, typoTolerance } from './welt';

// Typed person names: case, accents, spaces and small typos don't matter ("Mozzart", "einstien").
// `names` are the full name and further accepted spellings (e.g. the surname alone).
export function matchesName(input: string, names: string[]): boolean {
  const v = normName(input);
  if (!v) return false;
  return names.some(n => {
    const k = normName(n);
    if (!k) return false;
    if (k === v) return true;
    const tol = Math.min(typoTolerance(v.length), typoTolerance(k.length));
    return tol > 0 && editDistance(v, k, tol) <= tol;
  });
}
