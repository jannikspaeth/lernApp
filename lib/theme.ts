'use client';

import { useCallback, useSyncExternalStore } from 'react';

// Colour theme per device: follow the system, or always light / dark.
// Applied as html[data-theme] (none = system); the inline script in app/layout.tsx
// sets it before the first paint so there is no flash.

export type ThemePref = 'system' | 'light' | 'dark';

export const THEME_KEY = 'lernapp_theme';
const EVENT = 'lernapp-theme-changed';

function read(): ThemePref {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === 'light' || v === 'dark' ? v : 'system';
  } catch {
    return 'system';
  }
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}

export function applyTheme(pref: ThemePref) {
  const el = document.documentElement;
  if (pref === 'system') delete el.dataset.theme;
  else el.dataset.theme = pref;
}

export function useTheme(): [ThemePref, (p: ThemePref) => void] {
  const pref = useSyncExternalStore(subscribe, read, () => 'system' as ThemePref);
  const set = useCallback((p: ThemePref) => {
    try {
      if (p === 'system') localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, p);
    } catch {}
    applyTheme(p);
    window.dispatchEvent(new Event(EVENT));
  }, []);
  return [pref, set];
}

// Runs inline in <head> before React: same logic as applyTheme, no imports.
export const THEME_SCRIPT = `try{var t=localStorage.getItem('${THEME_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;
