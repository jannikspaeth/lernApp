'use client';

import { Globe, User } from 'lucide-react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/lib/use-profile';
import { LANGUAGES, Lang } from '@/lib/lang';
import { Level, levelFor } from '@/lib/profiles';
import { useT } from '@/lib/ui-lang';
import UiLangToggle from '@/components/UiLangToggle';

const LEVEL_LABEL: Record<Level, [string, string]> = {
  A1: ['Beginner (A1)', 'Anfänger (A1)'],
  B1: ['Intermediate (B1)', 'Fortgeschritten (B1)'],
};

// Second step after choosing a profile: which language to learn. Each language has
// its own level, progress and race; a first-time (or repeated) pick runs the
// placement test (/sprache/einstufungstest/[lang]) rather than a self-assessment.
export default function SprachePage() {
  const { profile, lang: current, setLang, ready } = useProfile();
  const router = useRouter();
  const t = useT();

  useEffect(() => {
    if (ready && !profile) router.push('/login');
  }, [ready, profile, router]);

  if (!ready || !profile) {
    return (
      <main className="min-h-screen bg-canvas flex items-center justify-center">
        <p className="text-muted text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  function start(l: Lang) {
    setLang(l);
    router.push('/heute');
  }

  function pick(l: Lang) {
    if (levelFor(profile, l)) start(l);
    else router.push(`/sprache/einstufungstest/${l}`);
  }

  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center p-6 pb-24 md:pb-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <Globe className="w-10 h-10 text-accent mx-auto mb-3" strokeWidth={1.5} />
          <h1 className="text-[28px] font-bold tracking-tight text-ink">{t('Hi', 'Hallo')} {profile.name}!</h1>
          <p className="text-sm text-muted mt-1">{t('Which language do you want to learn?', 'Welche Sprache möchtest du lernen?')}</p>
        </div>

        <div className="space-y-3">
          {LANGUAGES.map(l => {
            const level = levelFor(profile, l.id);
            const levelLabel = level ? t(...LEVEL_LABEL[level]) : undefined;
            return (
              <div
                key={l.id}
                className={`bg-surface border-2 rounded-2xl shadow-sm transition-colors ${
                  current === l.id ? 'border-accent/30' : 'border-line'
                }`}
              >
                <button
                  onClick={() => pick(l.id)}
                  className="w-full p-5 text-left flex items-center gap-4 rounded-2xl hover:bg-canvas transition-colors"
                >
                  <span className="text-4xl">{l.flag}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-ink text-lg">{t(l.name, l.nameDe)}</span>
                    <span className="block text-sm text-muted mt-0.5">
                      {levelLabel ?? t('Not started yet', 'Noch nicht begonnen')}
                    </span>
                  </span>
                  <span className="text-faint">→</span>
                </button>

                {level && (
                  <div className="px-5 pb-3 -mt-2 text-right">
                    <Link
                      href={`/sprache/einstufungstest/${l.id}`}
                      className="text-xs text-muted hover:text-ink"
                    >
                      {t('Retake placement test', 'Einstufungstest wiederholen')}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link href="/profile" className="flex items-center justify-center gap-1.5 h-10 text-sm text-muted hover:text-ink">
          <User className="w-4 h-4" /> {t('Account', 'Konto')}
        </Link>
        <UiLangToggle />
      </div>
    </main>
  );
}
