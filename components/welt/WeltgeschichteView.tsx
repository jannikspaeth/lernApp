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
    return `${r.icon} ${t(...r.name)}`;
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
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto p-5 space-y-5">
        <div>
          <Link href="/wissen/geschichte" className="text-xs text-gray-400 hover:text-gray-600">← {t('History', 'Geschichte')}</Link>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mt-1">
            <span>🌍</span> {t('World history', 'Weltgeschichte')}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {t('From the first humans to today — and the history of every country.', 'Von den ersten Menschen bis heute – und die Geschichte aller Länder.')}
          </p>
        </div>

        <div className="flex bg-white rounded-xl border border-gray-200 p-0.5 text-sm">
          {tabs.map(([id, name]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex-1 py-2 rounded-lg font-medium transition-colors ${tab === id ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-800'}`}
            >
              {name}
            </button>
          ))}
        </div>

        {tab === 'zeittafel' && (
          <div className="space-y-4">
            {intro}
            <div className="flex flex-wrap gap-1.5">
              {([['alle', '🌐 ' + t('All', 'Alle')], ...TIMELINE_REGIONS.map(r => [r.id, regionName(r.id)])] as [Pick, string][]).map(([id, name]) => (
                <button
                  key={id}
                  onClick={() => setRegion(id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                    region === id ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <Timeline events={events} showRegion={region === 'alle'} />
            </div>
            <Link href="/zeitstrahl" className="block text-center text-sm font-medium text-amber-700 hover:text-amber-800">
              ⏳ {t('Test yourself in the timeline game →', 'Im Zeitstrahl-Spiel üben →')}
            </Link>
          </div>
        )}

        {tab === 'kontinente' && (
          <div className="grid sm:grid-cols-2 gap-3">
            {CONTINENTS.map(k => (
              <Link
                key={k.id}
                href={`/weltgeschichte/kontinent/${k.id}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{k.icon}</span>
                <p className="font-semibold text-gray-900 mt-1">{t(...k.name)}</p>
                <p className="text-xs text-gray-500">
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
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-base bg-white focus:outline-none focus:border-amber-400"
            />
            {detailed.length > 0 && (
              <p className="text-xs text-gray-500">
                ★ {t('= detailed: epochs, events, info texts and quizzes', '= ausführlich: Epochen, Ereignisse, Infotexte und Quiz')}
              </p>
            )}
            {CONTINENTS.map(k => {
              const list = matches.filter(c => c.continent === k.id);
              if (!list.length) return null;
              return (
                <div key={k.id} className="space-y-2">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{t(...k.name)}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {list.map(c => (
                      <Link
                        key={c.code}
                        href={`/weltgeschichte/land/${c.code.toLowerCase()}`}
                        className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2 hover:shadow-md transition-shadow"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
                        <img src={flagUrl(c.code)} alt="" loading="lazy" className="h-4 w-6 object-cover rounded-sm border border-gray-200 shrink-0" />
                        <span className="text-sm text-gray-800 truncate flex-1">{c.name}</span>
                        {detailed.includes(c.code) && <span className="text-amber-500 text-xs" title={t('Detailed', 'Ausführlich')}>★</span>}
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
