'use client';

import { useUiLang } from '@/lib/ui-lang';

// English / Deutsch switch for the app's interface language.
export default function UiLangToggle({ className = '' }: { className?: string }) {
  const [lang, setLang] = useUiLang();
  return (
    <div className={`flex gap-1 bg-canvas border border-line rounded-lg p-0.5 ${className}`} role="group" aria-label="Sprache der Oberfläche">
      {([
        ['de', 'Deutsch'],
        ['en', 'English'],
      ] as const).map(([id, label]) => (
        <button
          key={id}
          type="button"
          aria-pressed={lang === id}
          onClick={() => setLang(id)}
          className={`flex-1 h-7 px-2 text-xs font-medium rounded-md transition-colors ${
            lang === id ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
