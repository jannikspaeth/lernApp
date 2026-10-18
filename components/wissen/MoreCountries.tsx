'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { normName } from '@/lib/welt';

export interface MoreCountry { code: string; name: string; continent: string; match: string }
export interface MoreGroup { id: string; name: [string, string] }

// All other countries (short article each), below the wall of in-depth countries.
export default function MoreCountries({ countries, groups }: { countries: MoreCountry[]; groups: MoreGroup[] }) {
  const t = useT();
  const [query, setQuery] = useState('');
  const q = normName(query);
  const list = countries.filter(c => !q || c.match.includes(q));
  return (
    <section className="space-y-3">
      <div className="pt-2">
        <h2 className="text-lg font-bold text-ink tracking-tight">{t('More countries', 'Weitere Länder')}</h2>
        <p className="text-[13px] text-muted">{t(`A short history article for each of ${countries.length} more countries`, `Ein Kurzartikel zur Geschichte von ${countries.length} weiteren Ländern`)}</p>
      </div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={t('Search country…', 'Land suchen …')}
        className="w-full border border-line rounded-xl px-3 py-2.5 text-base bg-surface focus:outline-none focus:border-accent"
      />
      {groups.map(g => {
        const items = list.filter(c => c.continent === g.id);
        if (!items.length) return null;
        return (
          <div key={g.id} className="space-y-2">
            <h3 className="text-xs font-semibold text-muted uppercase tracking-wider">{t(...g.name)}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {items.map(c => (
                <Link
                  key={c.code}
                  href={`/weltgeschichte/land/${c.code.toLowerCase()}`}
                  className="flex items-center gap-2 bg-surface rounded-xl border border-line px-3 py-2 hover:border-accent/40 transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
                  <img src={`/flags/${c.code.toLowerCase()}.svg`} alt="" loading="lazy" className="h-4 w-6 object-cover rounded-sm border border-line shrink-0" />
                  <span className="text-sm text-ink truncate">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
      {list.length === 0 && <p className="text-sm text-muted">{t('No country found.', 'Kein Land gefunden.')}</p>}
    </section>
  );
}
