'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useProfile } from '@/lib/use-profile';
import { useStars } from '@/lib/use-stars';
import { formatStars } from '@/lib/race';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import UiLangToggle from '@/components/UiLangToggle';
import ThemeToggle from '@/components/ThemeToggle';
import Icon, { SUBJECT_ICONS, type IconName } from '@/components/Icon';
import { SUBJECTS } from '@/lib/wissen';

type Item = { href: string; label: readonly [string, string]; icon: IconName };
type Section = Item & { id: string; paths: string[]; sub?: readonly Item[] };

// Language tools (sub-navigation of "Languages").
const LANGUAGE_TOOLS: readonly Item[] = [
  { href: '/heute', label: ['Today', 'Heute'], icon: 'sun' },
  { href: '/ueben', label: ['Practise', 'Üben'], icon: 'target' },
  { href: '/vokabeln', label: ['Vocabulary', 'Vokabeln'], icon: 'book' },
  { href: '/konjugation', label: ['Verbs', 'Verben'], icon: 'type' },
  { href: '/grammar', label: ['Grammar', 'Grammatik'], icon: 'bookOpen' },
  { href: '/lesen', label: ['Reading', 'Lesen'], icon: 'newspaper' },
  { href: '/saetze', label: ['Sentences', 'Sätze'], icon: 'pen' },
  { href: '/race', label: ['The Race', 'Das Rennen'], icon: 'flag' },
  { href: '/erfolge', label: ['Achievements', 'Erfolge'], icon: 'trophy' },
];

const SUBJECT_TOOLS: readonly Item[] = [
  ...SUBJECTS.map(s => ({ href: `/wissen/${s.id}`, label: s.name, icon: SUBJECT_ICONS[s.id] ?? 'book' })),
  { href: '/wissen/mix', label: ['Mixed round', 'Gemischte Runde'], icon: 'shuffle' },
];

const SECTIONS: readonly Section[] = [
  { id: 'start', href: '/', label: ['Home', 'Start'], icon: 'home', paths: [] },
  { id: 'faecher', href: '/faecher', label: ['Subjects', 'Fächer'], icon: 'grid', paths: ['/faecher', '/wissen', '/weltgeschichte', '/karte', '/zeitstrahl'], sub: SUBJECT_TOOLS },
  {
    id: 'sprachen', href: '/heute', label: ['Languages', 'Sprachen'], icon: 'languages',
    paths: ['/heute', '/ueben', '/vokabeln', '/konjugation', '/grammar', '/lesen', '/saetze', '/race', '/erfolge', '/sprache'],
    sub: LANGUAGE_TOOLS,
  },
  { id: 'profil', href: '/profile', label: ['Profile', 'Profil'], icon: 'user', paths: ['/profile', '/konto', '/help'] },
];

const sectionOf = (path: string) =>
  path === '/' ? SECTIONS[0] : SECTIONS.find(s => s.paths.some(p => path.startsWith(p)));

const subActive = (path: string, href: string) =>
  href === '/heute' ? path.startsWith(href) : path === href || path.startsWith(href + '/');

export default function Navigation() {
  const path = usePathname() ?? '';
  const { profile, lang } = useProfile();
  const info = lang ? langInfo(lang) : null;
  const stars = useStars();
  const t = useT();

  if (path === '/login') return null;

  const current = sectionOf(path);
  const sub = current?.sub;
  const langLabel = info ? t(info.name, info.nameDe) : t('Choose language', 'Sprache wählen');

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-56 bg-surface border-r border-line z-50">
        <Link href="/" className="flex items-center gap-2.5 px-5 h-16 border-b border-line">
          <span className="w-8 h-8 rounded-lg bg-ink text-canvas flex items-center justify-center text-sm font-bold">L</span>
          <span className="font-semibold text-ink tracking-tight">{t('Learning app', 'Lern-App')}</span>
        </Link>
        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5" aria-label={t('Main navigation', 'Hauptnavigation')}>
          {SECTIONS.map(s => {
            const active = current?.id === s.id;
            return (
              <div key={s.id}>
                <Link
                  href={s.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-3 px-3 h-10 rounded-lg text-sm font-medium transition-colors ${
                    active ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-canvas hover:text-ink'
                  }`}
                >
                  <Icon name={s.icon} size={18} />
                  {t(...s.label)}
                </Link>
                {active && s.sub && (
                  <div className="mt-0.5 mb-2 ml-[1.375rem] pl-3 border-l border-line space-y-0.5">
                    {s.id === 'sprachen' && (
                      <Link href="/sprache" className="flex items-center gap-2 px-2 h-8 rounded-md text-xs font-semibold text-ink hover:bg-canvas">
                        {info?.flag && <span aria-hidden="true">{info.flag}</span>}
                        {langLabel}
                        <span className="ml-auto text-muted font-medium">{t('switch', 'wechseln')}</span>
                      </Link>
                    )}
                    {s.sub.map(it => {
                      const on = subActive(path, it.href);
                      return (
                        <Link
                          key={it.href}
                          href={it.href}
                          aria-current={on ? 'page' : undefined}
                          className={`flex items-center gap-2 px-2 h-8 rounded-md text-[13px] transition-colors ${
                            on ? 'text-ink font-semibold bg-canvas' : 'text-muted hover:text-ink hover:bg-canvas'
                          }`}
                        >
                          <Icon name={it.icon} size={15} />
                          <span className="truncate">{t(...it.label)}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="p-3 border-t border-line space-y-2">
          {profile && (
            <Link href="/profile" className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-canvas">
              <span className="w-8 h-8 rounded-full bg-accent-soft text-accent flex items-center justify-center text-sm font-semibold">
                {profile.name.slice(0, 1).toUpperCase()}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-ink truncate">{profile.name}</span>
                <span className="block text-xs text-muted">{formatStars(stars[profile.id] ?? 0) || t('No stars yet', 'Noch keine Sterne')}</span>
              </span>
            </Link>
          )}
          <UiLangToggle />
          <ThemeToggle />
          <Link href="/help" className="flex items-center justify-center gap-1.5 text-xs text-muted hover:text-ink h-8">
            <Icon name="help" size={14} /> {t('Help', 'Hilfe')}
          </Link>
        </div>
      </aside>

      {/* ── Mobile: sub-navigation of the current section ── */}
      {sub && (
        <nav
          aria-label={t('Section navigation', 'Bereichsnavigation')}
          className="app-tabs md:hidden sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-line"
        >
          <div className="flex gap-1.5 overflow-x-auto px-4 py-2 [scrollbar-width:none]">
            {current?.id === 'sprachen' && (
              <Link
                href="/sprache"
                className={`shrink-0 flex items-center gap-1.5 px-3 h-9 rounded-full border text-[13px] font-semibold ${
                  path.startsWith('/sprache') ? 'bg-ink text-canvas border-ink' : 'bg-surface border-line text-ink'
                }`}
              >
                {info?.flag && <span aria-hidden="true">{info.flag}</span>}
                {langLabel}
              </Link>
            )}
            {sub.map(it => {
              const on = subActive(path, it.href);
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  aria-current={on ? 'page' : undefined}
                  className={`shrink-0 flex items-center gap-1.5 px-3 h-9 rounded-full border text-[13px] font-medium transition-colors ${
                    on ? 'bg-ink text-canvas border-ink' : 'bg-surface border-line text-muted'
                  }`}
                >
                  <Icon name={it.icon} size={15} />
                  {t(...it.label)}
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      {/* ── Mobile bottom bar ── */}
      <nav
        aria-label={t('Main navigation', 'Hauptnavigation')}
        className="app-tabs md:hidden fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur border-t border-line z-50 flex safe-area-inset-bottom"
      >
        {SECTIONS.map(s => {
          const active = current?.id === s.id;
          return (
            <Link
              key={s.id}
              href={s.href}
              aria-current={active ? 'page' : undefined}
              className={`flex-1 min-w-0 flex flex-col items-center gap-1 pt-2.5 pb-2 text-[11px] font-medium transition-colors ${
                active ? 'text-accent' : 'text-muted'
              }`}
            >
              <Icon name={s.icon} size={22} strokeWidth={active ? 2 : 1.75} />
              {t(...s.label)}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
