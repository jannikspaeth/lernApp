'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useProfile } from '@/lib/use-profile';
import { useStars } from '@/lib/use-stars';
import { formatStars } from '@/lib/race';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import UiLangToggle from '@/components/UiLangToggle';
import { SUBJECTS } from '@/lib/wissen';

// The first five are the mobile bottom bar (with `short` labels); the rest live under "More".
type NavItem = { href: string; label: readonly [string, string]; short: readonly [string, string]; icon: string };

const nav: readonly NavItem[] = [
  // Daily round + mistake training — the home page.
  { href: '/heute', label: ['Today', 'Heute'], short: ['Today', 'Heute'], icon: '☀️' },
  { href: '/vokabeln', label: ['Vocabulary', 'Vokabeln'], short: ['Words', 'Wörter'], icon: '📖' },
  { href: '/konjugation', label: ['Verbs', 'Verben'], short: ['Verbs', 'Verben'], icon: '🔤' },
  // Grammar exercises + the Grundlagen lessons.
  { href: '/grammar', label: ['Grammar', 'Grammatik'], short: ['Grammar', 'Grammatik'], icon: '📘' },
  // Global competitive leaderboard — everyone sees the same standings.
  { href: '/race', label: ['The Race', 'Das Rennen'], short: ['Race', 'Rennen'], icon: '🏁' },
  { href: '/lesen', label: ['Reading', 'Lesen'], short: ['Reading', 'Lesen'], icon: '📰' },
  { href: '/saetze', label: ['Sentences & Dictation', 'Sätze & Diktat'], short: ['Sentences', 'Sätze'], icon: '✍️' },
  { href: '/erfolge', label: ['Achievements', 'Erfolge'], short: ['Achievements', 'Erfolge'], icon: '🏆' },
  { href: '/help', label: ['Help', 'Hilfe'], short: ['Help', 'Hilfe'], icon: '❓' },
];

// Home + knowledge subjects (shown on / and /wissen/*); languages lead into the nav above.
// The first five are the mobile bottom bar.
const subjectItems = SUBJECTS.map(s => ({ href: `/wissen/${s.id}`, label: s.name, short: s.name, icon: s.icon }));
const subjectNav: readonly NavItem[] = [
  { href: '/', label: ['All subjects', 'Alle Fächer'], short: ['Home', 'Start'], icon: '🎓' },
  ...subjectItems.slice(0, 2),
  { href: '/karte', label: ['World map quiz', 'Weltkarten-Quiz'], short: ['Map', 'Karte'], icon: '🗺️' },
  { href: '/heute', label: ['Languages', 'Sprachen'], short: ['Languages', 'Sprachen'], icon: '🗣️' },
  ...subjectItems.slice(2),
  { href: '/wissen/mix', label: ['Mixed round', 'Gemischte Runde'], short: ['Mixed', 'Gemischt'], icon: '🎲' },
  { href: '/weltgeschichte', label: ['World history', 'Weltgeschichte'], short: ['World history', 'Weltgeschichte'], icon: '🌍' },
  { href: '/zeitstrahl', label: ['Timeline game', 'Zeitstrahl'], short: ['Timeline', 'Zeitstrahl'], icon: '⏳' },
];

const isActive = (path: string, href: string) => (href === '/' ? path === '/' : path.startsWith(href));

export default function Navigation() {
  const path = usePathname();
  const { profile, lang } = useProfile();
  const info = lang ? langInfo(lang) : null;
  const stars = useStars();
  const myStars = profile ? formatStars(stars[profile.id] ?? 0) : '';
  const [moreOpen, setMoreOpen] = useState(false);
  const t = useT();
  const langName = info ? t(info.name, info.nameDe) : '…';

  const wissenMode = path === '/' || ['/wissen', '/karte', '/zeitstrahl', '/weltgeschichte'].some(p => path.startsWith(p));
  const items = wissenMode ? subjectNav : nav;

  // Mobile: keep the core practice/engagement tabs visible; tuck the rest behind "More".
  const primary = items.slice(0, 5);
  const overflow = items.slice(5);
  const moreActive =
    overflow.some(o => isActive(path, o.href)) ||
    path.startsWith('/profile') ||
    path.startsWith('/sprache');

  // Close the "More" sheet on Escape.
  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMoreOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [moreOpen]);

  if (path === '/login') return null;

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-56 bg-white border-r border-gray-100 z-50">
        <div className="p-5 border-b border-gray-100">
          {wissenMode ? (
            <Link href="/" className="flex items-center gap-2.5">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-none">{profile ? profile.name : 'Lern App'}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t('Learning app', 'Lern-App')}</p>
              </div>
            </Link>
          ) : (
            <Link href="/sprache" title="Switch language" className="flex items-center gap-2.5">
              <span className="text-2xl">{info?.flag ?? '🌍'}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-none">
                  {profile ? profile.name + myStars : t('Language Learning', 'Sprachen lernen')}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{t('German', 'Deutsch')} → {langName}</p>
              </div>
            </Link>
          )}
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          {items.map(({ href, label: [labelEn, labelDe], icon }) => {
            const active = isActive(path, href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-red-50 text-red-700'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <span className="text-base">{icon}</span>
                {t(labelEn, labelDe)}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-100 space-y-2">
          <UiLangToggle />
          {!wissenMode && (
            <Link
              href="/"
              className="block text-xs text-gray-400 hover:text-gray-600 text-center transition-colors"
            >
              🎓 {t('All subjects', 'Alle Fächer')}
            </Link>
          )}
          <Link
            href="/sprache"
            className="block text-xs text-gray-400 hover:text-gray-600 text-center transition-colors"
          >
            {t('Switch Language', 'Sprache wechseln')}
          </Link>
          <Link
            href="/profile"
            className="block text-xs text-gray-400 hover:text-gray-600 text-center transition-colors"
          >
            👤 {t('Account', 'Konto')}
          </Link>
        </div>
      </aside>

      {/* ── Mobile "More" sheet ── */}
      {moreOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/30"
            onClick={() => setMoreOpen(false)}
          />
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl border-t border-gray-100 shadow-2xl max-h-[85dvh] overflow-y-auto overscroll-contain pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-gray-200" />
            <div className="p-2 pb-3">
              {overflow.map(({ href, label: [labelEn, labelDe], icon }) => {
                const active = isActive(path, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMoreOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{icon}</span>
                    {t(labelEn, labelDe)}
                  </Link>
                );
              })}
              {!wissenMode && (
                <Link
                  href="/"
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg">🎓</span>
                  {t('All subjects', 'Alle Fächer')}
                </Link>
              )}
              <Link
                href="/sprache"
                onClick={() => setMoreOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  path.startsWith('/sprache') ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{info?.flag ?? '🌍'}</span>
                {info ? t(`Learning ${info.name} · switch`, `${info.nameDe} · wechseln`) : t('Choose language', 'Sprache wählen')}
              </Link>
              <Link
                href="/profile"
                onClick={() => setMoreOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  path.startsWith('/profile') ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">👤</span>
                {profile ? profile.name + myStars : t('Profile', 'Profil')}
              </Link>
              <div className="px-4 pt-2">
                <UiLangToggle />
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Mobile bottom bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 flex safe-area-inset-bottom">
        {primary.map(({ href, short: [shortEn, shortDe], icon }) => {
          const active = isActive(path, href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMoreOpen(false)}
              className={`flex-1 min-w-0 flex flex-col items-center gap-0.5 py-3 text-[11px] font-medium transition-colors ${
                active ? 'text-red-700' : 'text-gray-400'
              }`}
            >
              <span className="text-xl">{icon}</span>
              {t(shortEn, shortDe)}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={() => setMoreOpen(o => !o)}
          className={`flex-1 min-w-0 flex flex-col items-center gap-0.5 py-3 text-[11px] font-medium transition-colors ${
            moreActive || moreOpen ? 'text-red-700' : 'text-gray-400'
          }`}
        >
          <span className="text-xl">☰</span>
          {t('More', 'Mehr')}
        </button>
      </nav>
    </>
  );
}
