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

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pb-24 md:pb-6 md:ml-56">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <p className="text-4xl mb-3">👤</p>
          <h1 className="text-2xl font-bold text-gray-900">
            {profile ? profile.name + formatStars(stars[profile.id] ?? 0) : '…'}
          </h1>
          <p className="text-sm text-gray-400 mt-1">{t('Your account', 'Dein Konto')}</p>
        </div>

        {profile && (
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2">
            <p className="text-sm font-medium text-gray-700">{t('Languages', 'Sprachen')}</p>
            <p className="text-sm text-gray-500">
              {LANGUAGES.filter(l => levelFor(profile, l.id))
                .map(l => `${l.flag} ${levelFor(profile, l.id)}`)
                .join(' · ') || t('No language set up yet', 'Noch keine Sprache eingerichtet')}
            </p>
            <Link href="/sprache" className="inline-block text-sm text-red-700 hover:text-red-800 font-medium">
              {t('Choose language & level →', 'Sprache & Niveau wählen →')}
            </Link>
          </div>
        )}

        <div className="space-y-2">
          <Link
            href="/"
            className="block w-full text-center rounded-xl py-3 font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            🎓 {t('To the subjects', 'Zu den Fächern')}
          </Link>
          <button
            onClick={signOut}
            disabled={busy}
            className="w-full rounded-xl py-3 font-semibold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            {t('Sign out', 'Abmelden')}
          </button>
        </div>

        {confirming ? (
          <div className="rounded-xl bg-red-50 border border-red-100 p-3 space-y-2">
            <p className="text-sm text-red-800">
              {t(
                'Delete your account and all progress? This can’t be undone.',
                'Konto und allen Fortschritt löschen? Das lässt sich nicht rückgängig machen.',
              )}
            </p>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="flex gap-2">
              <button
                onClick={() => setConfirming(false)}
                disabled={busy}
                className="flex-1 rounded-lg py-1.5 text-sm font-semibold text-gray-600 bg-white hover:bg-gray-100"
              >
                {t('Cancel', 'Abbrechen')}
              </button>
              <button
                onClick={remove}
                disabled={busy}
                className="flex-1 rounded-lg py-1.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50"
              >
                {busy ? t('Deleting…', 'Wird gelöscht …') : t('Delete for good', 'Endgültig löschen')}
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setConfirming(true)} className="block mx-auto text-xs text-gray-400 hover:text-red-600">
            {t('Delete account', 'Konto löschen')}
          </button>
        )}
        <UiLangToggle />
      </div>
    </main>
  );
}
