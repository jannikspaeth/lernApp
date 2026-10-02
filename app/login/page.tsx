'use client';

import { useState } from 'react';
import { MAX_NAME_LENGTH } from '@/lib/profiles';
import { authenticate } from '@/lib/storage';
import { useT } from '@/lib/ui-lang';
import UiLangToggle from '@/components/UiLangToggle';

const MIN_PASSWORD_LENGTH = 6; // same as lib/auth.ts (server-only)

export default function LoginPage() {
  const [kind, setKind] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const t = useT();
  const register = kind === 'register';

  function message(code: string): string {
    switch (code) {
      case 'wrong_credentials': return t('Name or password is wrong.', 'Name oder Passwort ist falsch.');
      case 'name_taken': return t('This name is already taken.', 'Diesen Namen gibt es schon.');
      case 'invalid_name': return t('Please enter a name.', 'Bitte gib einen Namen ein.');
      case 'invalid_password':
        return t(`The password needs at least ${MIN_PASSWORD_LENGTH} characters.`, `Das Passwort braucht mindestens ${MIN_PASSWORD_LENGTH} Zeichen.`);
      default: {
        const detail = code.startsWith('failed: ') ? ` (${code.slice(8)})` : '';
        return t('That didn’t work. Please try again.', 'Das hat nicht geklappt. Bitte versuch es noch einmal.') + detail;
      }
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (register && password.length < MIN_PASSWORD_LENGTH) return setError(message('invalid_password'));
    if (register && password !== password2) {
      return setError(t('The passwords don’t match.', 'Die Passwörter stimmen nicht überein.'));
    }
    setBusy(true);
    setError('');
    try {
      await authenticate(kind, name.trim(), password);
      // Full load, so every hook and the service worker start with the new session.
      window.location.href = '/';
    } catch (err) {
      setError(message(err instanceof Error ? err.message : ''));
      setBusy(false);
    }
  }

  function switchKind() {
    setKind(k => (k === 'login' ? 'register' : 'login'));
    setError('');
    setPassword2('');
  }

  const input = 'w-full border border-gray-200 rounded-xl px-3 py-2.5 text-base focus:outline-none focus:border-red-300';

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pb-24 md:pb-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <p className="text-4xl mb-3">🎓</p>
          <h1 className="text-2xl font-bold text-gray-900">
            {register ? t('Create account', 'Konto erstellen') : t('Sign in', 'Anmelden')}
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {register
              ? t('Choose a name and a password.', 'Wähl einen Namen und ein Passwort.')
              : t('Welcome back to the learning app.', 'Willkommen zurück in der Lern-App.')}
          </p>
        </div>

        <form onSubmit={submit} className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-sm">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">{t('Name', 'Name')}</label>
            <input
              id="name"
              autoComplete="username"
              autoCapitalize="words"
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={MAX_NAME_LENGTH}
              className={input}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">{t('Password', 'Passwort')}</label>
            <input
              id="password"
              type="password"
              autoComplete={register ? 'new-password' : 'current-password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={input}
            />
          </div>
          {register && (
            <div className="space-y-1">
              <label htmlFor="password2" className="text-sm font-medium text-gray-700">
                {t('Repeat password', 'Passwort wiederholen')}
              </label>
              <input
                id="password2"
                type="password"
                autoComplete="new-password"
                value={password2}
                onChange={e => setPassword2(e.target.value)}
                className={input}
              />
            </div>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={!name.trim() || !password || busy}
            className="w-full rounded-xl py-3 font-semibold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 transition-colors"
          >
            {busy ? '…' : register ? t('Create account', 'Konto erstellen') : t('Sign in', 'Anmelden')}
          </button>
        </form>

        <button onClick={switchKind} className="block mx-auto text-sm text-gray-500 hover:text-gray-800">
          {register
            ? t('Already have an account? Sign in', 'Schon ein Konto? Anmelden')
            : t('New here? Create an account', 'Neu hier? Konto erstellen')}
        </button>
        <UiLangToggle />
      </div>
    </main>
  );
}
