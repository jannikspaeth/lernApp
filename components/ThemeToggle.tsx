'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme, type ThemePref } from '@/lib/theme';
import { useT } from '@/lib/ui-lang';

// System / light / dark switch.
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [pref, setPref] = useTheme();
  const t = useT();
  const options: [ThemePref, string, typeof Sun][] = [
    ['system', t('System', 'System'), Monitor],
    ['light', t('Light', 'Hell'), Sun],
    ['dark', t('Dark', 'Dunkel'), Moon],
  ];
  return (
    <div className={`flex gap-1 bg-canvas border border-line rounded-lg p-0.5 ${className}`} role="group" aria-label={t('Appearance', 'Darstellung')}>
      {options.map(([id, label, Icon]) => (
        <button
          key={id}
          type="button"
          aria-pressed={pref === id}
          onClick={() => setPref(id)}
          className={`flex-1 h-7 px-2 text-xs font-medium rounded-md transition-colors inline-flex items-center justify-center gap-1.5 ${
            pref === id ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink'
          }`}
        >
          <Icon className="w-3.5 h-3.5" />
          {label}
        </button>
      ))}
    </div>
  );
}
