'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useProfile } from '@/lib/use-profile';
import { useT } from '@/lib/ui-lang';
import { getWissen } from '@/lib/storage';
import { MIX, SUBJECTS, allCards } from '@/lib/wissen';
import { WissenProgress, summarize } from '@/lib/wissen/progress';
import Icon, { SUBJECT_ICONS } from '@/components/Icon';

// All knowledge subjects with their progress.
export default function FaecherPage() {
  const { profile } = useProfile();
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

  const mix = prog ? summarize(allCards(MIX), prog) : null;

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-3xl mx-auto px-5 pt-6 md:pt-10 space-y-6">
        <header>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">{t('Subjects', 'Fächer')}</h1>
          <p className="text-sm text-muted mt-1">{t('Flashcards and quizzes with spaced repetition.', 'Karteikarten und Quiz mit Wiederholung nach Plan.')}</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-3">
          {SUBJECTS.map(s => {
            const sum = prog ? summarize(allCards(s), prog) : null;
            const pct = sum && sum.total ? (sum.mastered / sum.total) * 100 : 0;
            return (
              <Link
                key={s.id}
                href={`/wissen/${s.id}`}
                className="rounded-2xl bg-surface border border-line p-4 space-y-3 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color.bg} ${s.color.text}`}>
                    <Icon name={SUBJECT_ICONS[s.id] ?? 'book'} size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{t(...s.name)}</p>
                    <p className="text-xs text-muted truncate">{t(...s.blurb)}</p>
                  </div>
                </div>
                <div className="h-1.5 bg-line rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-xs text-muted">
                  {sum ? `${sum.mastered} / ${sum.total} ${t('learned', 'gelernt')}` : `${allCards(s).length} ${t('cards', 'Karten')}`}
                  {sum && sum.due > 0 && <span className="text-warn"> · {sum.due} {t('due', 'fällig')}</span>}
                </p>
              </Link>
            );
          })}
        </div>

        <Link
          href="/wissen/mix"
          className="flex items-center gap-4 p-4 rounded-2xl bg-ink hover:bg-ink/85 text-canvas transition-colors"
        >
          <Icon name="shuffle" size={22} />
          <span className="flex-1 min-w-0">
            <span className="block font-semibold">{t('Mixed round', 'Gemischte Runde')}</span>
            <span className="block text-[13px] text-canvas/70">
              {mix && mix.due > 0
                ? t(`${mix.due} questions due — from every subject`, `${mix.due} Fragen fällig – aus allen Fächern`)
                : t('10 questions from every subject', '10 Fragen quer durch alle Fächer')}
            </span>
          </span>
          <Icon name="arrowRight" size={20} />
        </Link>
      </div>
    </main>
  );
}
