'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useProfile } from '@/lib/use-profile';
import { useT } from '@/lib/ui-lang';
import { getWissen } from '@/lib/storage';
import { langInfo } from '@/lib/lang';
import { SUBJECTS, allCards } from '@/lib/wissen';
import { WissenProgress, summarize } from '@/lib/wissen/progress';

// Home: every subject at a glance. Languages lead into the language app
// (/heute → language picker if none is set up yet).
export default function Home() {
  const { profile, lang } = useProfile();
  const t = useT();
  const [prog, setProg] = useState<WissenProgress | null>(null);

  useEffect(() => {
    if (!profile) return;
    let alive = true;
    getWissen().then(p => alive && setProg(p));
    return () => {
      alive = false;
    };
  }, [profile]);

  const info = lang ? langInfo(lang) : null;

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span>🎓</span> {t('Learn', 'Lernen')}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {profile ? t(`Hi ${profile.name}! What do you feel like today?`, `Hallo ${profile.name}! Worauf hast du heute Lust?`) : t('Pick a subject', 'Such dir ein Fach aus')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {SUBJECTS.map(s => {
            const sum = prog ? summarize(allCards(s), prog) : null;
            return (
              <Link
                key={s.id}
                href={`/wissen/${s.id}`}
                className={`rounded-2xl border ${s.color.border} ${s.color.bg} p-4 space-y-2 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{s.icon}</span>
                  <div className="min-w-0">
                    <p className={`font-bold ${s.color.text}`}>{t(...s.name)}</p>
                    <p className="text-xs text-gray-500 truncate">{t(...s.blurb)}</p>
                  </div>
                </div>
                <div className="h-1.5 bg-white/70 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${s.color.bar} rounded-full`}
                    style={{ width: `${sum ? (sum.mastered / sum.total) * 100 : 0}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  {sum ? `${sum.mastered} / ${sum.total} ${t('learned', 'gelernt')}` : `${allCards(s).length} ${t('cards', 'Karten')}`}
                  {sum && sum.due > 0 && <span className="text-amber-700"> · {sum.due} {t('due', 'fällig')}</span>}
                </p>
              </Link>
            );
          })}

          <Link
            href="/heute"
            className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-2 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl">{info?.flag ?? '🗣️'}</span>
              <div className="min-w-0">
                <p className="font-bold text-red-800">{t('Languages', 'Sprachen')}</p>
                <p className="text-xs text-gray-500 truncate">
                  {t('Italian, Spanish, French', 'Italienisch, Spanisch, Französisch')}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {info
                ? t(`Continue with ${info.name} →`, `Weiter mit ${info.nameDe} →`)
                : t('Vocabulary, verbs, grammar, reading →', 'Vokabeln, Verben, Grammatik, Lesen →')}
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
