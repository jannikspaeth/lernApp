import type { CountryHistory, HistEvent, Epoch } from './types';
import { DE } from './de';

export * from './types';

// Countries with a detailed history (epochs → events → info + quiz).
// Server-side only: pass the one event a page needs to client components.
export const DETAILED: Record<string, CountryHistory> = { DE };

export function detailedHistory(code: string): CountryHistory | null {
  return DETAILED[code.toUpperCase()] ?? null;
}

export function findEvent(code: string, eventId: string): { epoch: Epoch; event: HistEvent; next?: HistEvent; prev?: HistEvent } | null {
  const h = detailedHistory(code);
  if (!h) return null;
  const all = h.epochs.flatMap(epoch => epoch.events.map(event => ({ epoch, event })));
  const i = all.findIndex(x => x.event.id === eventId);
  if (i < 0) return null;
  return { ...all[i], next: all[i + 1]?.event, prev: all[i - 1]?.event };
}
