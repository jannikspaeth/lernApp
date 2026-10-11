'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { useLocalSetting } from '@/lib/use-local-setting';
import { CONTINENTS, COUNTRIES, flagUrl, normName } from '@/lib/welt';
import { TIMELINE_REGIONS, eventsOf, type TimelineRegion } from '@/lib/wissen/zeitstrahl';
import { Timeline } from './History';

type Tab = 'zeittafel' | 'kontinente' | 'laender';
const isTab = (v: string): v is Tab => v === 'zeittafel' || v === 'kontinente' || v === 'laender';
type Pick = TimelineRegion | 'alle';

// /weltgeschichte: the timeline of mankind, the continents and every country.
export default function WeltgeschichteView({ intro, detailed }: { intro: React.ReactNode; detailed: string[] }) {
  const t = useT();
  const [tab, setTab] = useLocalSetting<Tab>('lernapp_weltgeschichte_tab', 'zeittafel', isTab);
  const [region, setRegion] = useState<Pick>('alle');
  const [query, setQuery] = useState('');

  const regionName = (id: TimelineRegion) => {
    const r = TIMELINE_REGIONS.find(x => x.id === id)!;
    return t(...r.name);
  };
  const events = useMemo(
    () => eventsOf(region).map(e => ({ ...e, regionLabel: regionName(e.region) })),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- regionName only depends on t
    [region, t],
  );

  const q = normName(query);
  const matches = COUNTRIES.filter(c => !q || normName(c.name).includes(q) || c.alt.some(a => normName(a).includes(q)));

  const tabs: [Tab, string][] = [
    ['zeittafel', t('Timeline', 'Zeittafel')],
    ['kontinente', t('Continents', 'Kontinente')],
    ['laender', t('Countries', 'Länder')],
  ];

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto px-5 pt-6 md:pt-10 space-y-5">
        <div>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">
            {t('World history', 'Weltgeschichte')}
          </h1>
          <p className="text-muted text-sm mt-1">
            {t('From the first humans to today — and the history of every country.', 'Von den ersten Menschen bis heute – und die Geschichte aller Länder.')}
          </p>
        </div>

        <div className="flex bg-surface rounded-xl border border-line p-1 text-sm">
          {tabs.map(([id, name]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex-1 h-9 rounded-lg font-semibold transition-colors ${tab === id ? 'bg-ink text-white' : 'text-muted hover:text-ink'}`}
            >
              {name}
            </button>
          ))}
        </div>

        {tab === 'zeittafel' && (
          <div className="space-y-4">
            {intro}
            <div className="flex flex-wrap gap-1.5">
              {([['alle', t('All', 'Alle')], ...TIMELINE_REGIONS.map(r => [r.id, regionName(r.id)])] as [Pick, string][]).map(([id, name]) => (
                <button
                  key={id}
                  onClick={() => setRegion(id)}
                  className={`px-3 h-8 rounded-full text-[13px] font-medium border transition-colors ${
                    region === id ? 'bg-ink border-ink text-white' : 'bg-surface border-line text-muted hover:text-ink'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="bg-surface rounded-2xl border border-line p-5">
              <Timeline events={events} showRegion={region === 'alle'} />
            </div>
            <Link href="/zeitstrahl" className="block text-center text-sm font-medium text-accent hover:text-accent-strong">
              {t('Practise in the timeline game →', 'Im Zeitstrahl-Spiel üben →')}
            </Link>
          </div>
        )}

        {tab === 'kontinente' && (
          <div className="grid sm:grid-cols-2 gap-3">
            {CONTINENTS.map(k => (
              <Link
                key={k.id}
                href={`/weltgeschichte/kontinent/${k.id}`}
                className="bg-surface rounded-2xl border border-line p-4 hover:border-accent/40 transition-colors"
              >
                <p className="font-semibold text-ink">{t(...k.name)}</p>
                <p className="text-xs text-muted">
                  {COUNTRIES.filter(c => c.continent === k.id).length} {t('countries', 'Länder')}
                </p>
              </Link>
            ))}
          </div>
        )}

        {tab === 'laender' && (
          <div className="space-y-4">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t('Search country…', 'Land suchen …')}
              className="w-full border border-line rounded-xl px-3 py-2.5 text-base bg-surface focus:outline-none focus:border-accent"
            />
            {detailed.length > 0 && (
              <p className="text-xs text-muted">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent align-middle mr-1.5" />{t('detailed: epochs, chapters and quizzes', 'ausführlich: Epochen, Kapitel und Quiz')}
              </p>
            )}
            {CONTINENTS.map(k => {
              const list = matches.filter(c => c.continent === k.id);
              if (!list.length) return null;
              return (
                <div key={k.id} className="space-y-2">
                  <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">{t(...k.name)}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {list.map(c => (
                      <Link
                        key={c.code}
                        href={`/weltgeschichte/land/${c.code.toLowerCase()}`}
                        className="flex items-center gap-2 bg-surface rounded-xl border border-line px-3 py-2 hover:border-accent/40 transition-colors"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
                        <img src={flagUrl(c.code)} alt="" loading="lazy" className="h-4 w-6 object-cover rounded-sm border border-line shrink-0" />
                        <span className="text-sm text-ink truncate flex-1">{c.name}</span>
                        {detailed.includes(c.code) && <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" title={t('Detailed', 'Ausführlich')} />}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
