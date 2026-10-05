import type { CountryHistory, HistEvent, Epoch } from './types';
import { DE } from './de';
import { FR } from './fr';
import { GB } from './gb';
import { IT } from './it';
import { ES } from './es';
import { AT } from './at';
import { CH } from './ch';
import { PL } from './pl';
import { NL } from './nl';
import { US } from './us';
import { RU } from './ru';
import { GR } from './gr';
import { PT } from './pt';
import { SE } from './se';
import { CZ } from './cz';
import { HU } from './hu';
import { UA } from './ua';
import { TR } from './tr';
import { CA } from './ca';
import { MX } from './mx';
import { BR } from './br';
import { AR } from './ar';
import { AU } from './au';

export * from './types';

// Countries with a detailed history (epochs → events → info + quiz).
// Server-side only: pass the one event a page needs to client components.
export const DETAILED: Record<string, CountryHistory> = { DE, FR, GB, IT, ES, AT, CH, PL, NL, US, RU, GR, PT, SE, CZ, HU, UA, TR, CA, MX, BR, AR, AU };

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
