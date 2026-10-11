'use client';

import { useState } from 'react';
import Link from 'next/link';
import { levelFor } from '@/lib/profiles';
import { LANGUAGES } from '@/lib/lang';
import { useProfile } from '@/lib/use-profile';
import { useStars } from '@/lib/use-stars';
import { formatStars } from '@/lib/race';
import { deleteProfile, logout } from '@/lib/storage';
import { useT } from '@/lib/ui-lang';
import UiLangToggle from '@/components/UiLangToggle';
import ThemeToggle from '@/components/ThemeToggle';
import { ChevronRight, Globe, LogOut } from 'lucide-react';
import { ACCOUNT } from '@/lib/sections';

// The signed-in account: languages, sign out, delete the account.
export default function AccountPage() {
  const { profile } = useProfile();
  const stars = useStars();
  const t = useT();
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function signOut() {
    setBusy(true);
    await logout();
    window.location.href = '/login';
  }

  async function remove() {
    if (!profile || busy) return;
    setBusy(true);
    setError('');
    try {
      await deleteProfile(profile.id);
      await logout();
      window.location.href = '/login';
    } catch {
      setError(t('Could not delete the account. Please try again.', 'Das Konto konnte nicht gelöscht werden. Bitte versuch es noch einmal.'));
      setBusy(false);
    }
  }

  const row = (href: string, label: string, Icon: React.ComponentType<{ className?: string }>, sub?: string) => (
    <Link key={href} href={href} className="flex items-center gap-3 px-4 py-3.5 hover:bg-canvas transition-colors">
      <Icon className="w-5 h-5 text-accent shrink-0" />
      <span className="flex-1 min-w-0">
        <span className="block text-[15px] text-ink">{label}</span>
        {sub && <span className="block text-xs text-muted">{sub}</span>}
      </span>
      <ChevronRight className="w-4 h-4 text-faint shrink-0" />
    </Link>
  );
  const languages = profile
    ? LANGUAGES.filter(l => levelFor(profile, l.id)).map(l => `${t(l.name, l.nameDe)} ${levelFor(profile, l.id)}`).join(' · ')
    : '';

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-xl mx-auto px-5 pt-6 md:pt-10 space-y-6">
        <div className="flex items-center gap-4">
          <span className="w-16 h-16 shrink-0 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-semibold">
            {profile ? profile.name.slice(0, 1).toUpperCase() : ''}
          </span>
          <div className="min-w-0">
            <h1 className="text-[28px] font-bold tracking-tight text-ink truncate">
              {profile ? profile.name + formatStars(stars[profile.id] ?? 0) : '…'}
            </h1>
            <p className="text-sm text-muted">{t('Your account', 'Dein Konto')}</p>
          </div>
        </div>

        <section className="bg-surface border border-line rounded-2xl divide-y divide-line-soft overflow-hidden">
          {row('/sprache', t('Language & level', 'Sprache & Niveau'), Globe, languages || t('No language set up yet', 'Noch keine Sprache eingerichtet'))}
          {ACCOUNT.map(a => row(a.href, t(a.label[0], a.label[1]), a.Icon))}
        </section>

        <section className="space-y-2">
          <p className="px-1 text-xs font-semibold uppercase tracking-wider text-muted">{t('App language', 'App-Sprache')}</p>
          <UiLangToggle />
        </section>

        <section className="space-y-2">
          <p className="px-1 text-xs font-semibold uppercase tracking-wider text-muted">{t('Appearance', 'Darstellung')}</p>
          <ThemeToggle />
        </section>

        <button
          onClick={signOut}
          disabled={busy}
          className="w-full h-12 rounded-xl font-semibold text-ink bg-surface border border-line hover:bg-canvas disabled:opacity-50 transition-colors inline-flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" /> {t('Sign out', 'Abmelden')}
        </button>

        {confirming ? (
          <div className="rounded-xl bg-bad-soft border border-bad/30 p-3 space-y-2">
            <p className="text-sm text-bad">
              {t(
                'Delete your account and all progress? This can’t be undone.',
                'Konto und allen Fortschritt löschen? Das lässt sich nicht rückgängig machen.',
              )}
            </p>
            {error && <p className="text-sm text-bad">{error}</p>}
            <div className="flex gap-2">
              <button
                onClick={() => setConfirming(false)}
                disabled={busy}
                className="flex-1 h-10 rounded-lg text-sm font-semibold text-ink bg-surface border border-line hover:bg-canvas"
              >
                {t('Cancel', 'Abbrechen')}
              </button>
              <button
                onClick={remove}
                disabled={busy}
                className="flex-1 h-10 rounded-lg text-sm font-semibold text-white bg-bad hover:bg-bad/90 disabled:opacity-50"
              >
                {busy ? t('Deleting…', 'Wird gelöscht …') : t('Delete for good', 'Endgültig löschen')}
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setConfirming(true)} className="block mx-auto h-10 text-xs text-muted hover:text-bad">
            {t('Delete account', 'Konto löschen')}
          </button>
        )}
      </div>
    </main>
  );
}
