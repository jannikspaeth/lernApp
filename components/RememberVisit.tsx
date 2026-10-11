'use client';

import { useEffect, useMemo, useSyncExternalStore } from 'react';

// Remembers the last opened history chapter for the "Continue" card on the home page.
const KEY = 'lernapp_last_visit';

export type LastVisit = { href: string; title: string; context: string };

function readRaw(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

const noSubscribe = () => () => {};

// The last visit (null on the server and when nothing is stored).
export function useLastVisit(): LastVisit | null {
  const raw = useSyncExternalStore(noSubscribe, readRaw, () => null);
  return useMemo(() => {
    if (!raw) return null;
    try {
      return JSON.parse(raw) as LastVisit;
    } catch {
      return null;
    }
  }, [raw]);
}

export default function RememberVisit(visit: LastVisit) {
  const { href, title, context } = visit;
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ href, title, context }));
    } catch {
      // private mode or blocked storage: the card just stays hidden
    }
  }, [href, title, context]);
  return null;
}
