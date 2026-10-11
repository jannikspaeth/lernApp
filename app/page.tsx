'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useProfile } from '@/lib/use-profile';
import { useT } from '@/lib/ui-lang';
import { getWissen } from '@/lib/storage';
import { langInfo } from '@/lib/lang';
import { MIX, SUBJECTS, allCards } from '@/lib/wissen';
import { WissenProgress, summarize } from '@/lib/wissen/progress';
import Icon, { SUBJECT_ICONS, type IconName } from '@/components/Icon';
import { useLastVisit } from '@/components/RememberVisit';

// Home: continue where you left off, due reviews, then every subject at a glance.
export default function Home() {
  const { profile, lang } = useProfile();
  const t = useT();
  const [prog, setProg] = useState<WissenProgress | null>(null);
  const last = useLastVisit();

  useEffect(() => {
    if (!profile) return;
    let alive = true;
    getWissen().then(p => alive && setProg(p));
    return () => {
      alive = false;
    };
  }, [profile]);

  const info = lang ? langInfo(lang) : null;
  const mix = prog ? summarize(allCards(MIX), prog) : null;
  const hour = new Date().getHours();
  const greeting =
    hour < 11 ? t('Good morning', 'Guten Morgen') : hour < 18 ? t('Hello', 'Hallo') : t('Good evening', 'Guten Abend');

  const discover: { href: string; icon: IconName; name: string; blurb: string }[] = [
    { href: '/weltgeschichte', icon: 'globe', name: t('World history', 'Weltgeschichte'), blurb: t('Every country', 'Alle Länder') },
    { href: '/karte', icon: 'map', name: t('Map quiz', 'Weltkarte'), blurb: t('Find countries', 'Länder finden') },
    { href: '/zeitstrahl', icon: 'hourglass', name: t('Timeline', 'Zeitstrahl'), blurb: t('Order events', 'Ereignisse ordnen') },
  ];

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-6 md:pt-10 space-y-6">
        <header>
          <p className="text-sm font-medium text-muted">{greeting}{profile ? `, ${profile.name}` : ''}</p>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight mt-0.5">{t('What do you want to learn?', 'Was lernst du heute?')}</h1>
        </header>

        <div className="space-y-3">
          {last && (
            <Link
              href={last.href}
              className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-line hover:border-accent/40 transition-colors"
            >
              <span className="w-11 h-11 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                <Icon name="bookOpen" size={22} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-xs font-semibold text-muted">{t('Continue', 'Weiterlernen')}</span>
                <span className="block font-semibold text-ink truncate">{last.title}</span>
                <span className="block text-[13px] text-muted truncate">{last.context}</span>
              </span>
              <Icon name="chevronRight" size={20} className="text-faint" />
            </Link>
          )}
          <Link
            href="/wissen/mix"
            className="flex items-center gap-4 p-4 rounded-2xl bg-accent hover:bg-accent-strong text-white transition-colors"
          >
            <span className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <Icon name="shuffle" size={22} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-semibold">
                {mix && mix.due > 0
                  ? t(`${mix.due} reviews due`, `${mix.due} Wiederholungen fällig`)
                  : t('Mixed round', 'Gemischte Runde')}
              </span>
              <span className="block text-[13px] text-white/80">{t('10 questions from every subject', '10 Fragen quer durch alle Fächer')}</span>
            </span>
            <Icon name="arrowRight" size={20} />
          </Link>
        </div>

        <section className="space-y-2.5">
          <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">{t('Discover', 'Entdecken')}</h2>
          <div className="grid grid-cols-3 gap-2.5">
            {discover.map(g => (
              <Link
                key={g.href}
                href={g.href}
                className="rounded-2xl bg-surface border border-line p-3.5 hover:border-accent/40 transition-colors min-w-0"
              >
                <Icon name={g.icon} size={22} className="text-accent" />
                <p className="font-semibold text-ink mt-3 text-sm leading-tight">{g.name}</p>
                <p className="text-xs text-muted mt-0.5 truncate">{g.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-2.5">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">{t('Subjects', 'Fächer')}</h2>
            <Link href="/faecher" className="text-sm font-medium text-accent hover:text-accent-strong">{t('All', 'Alle')}</Link>
          </div>
          <div className="bg-surface rounded-2xl border border-line divide-y divide-line-soft overflow-hidden">
            {SUBJECTS.map(s => {
              const sum = prog ? summarize(allCards(s), prog) : null;
              const pct = sum && sum.total ? Math.round((sum.mastered / sum.total) * 100) : 0;
              return (
                <Link key={s.id} href={`/wissen/${s.id}`} className="flex items-center gap-3 px-4 py-3 hover:bg-canvas transition-colors">
                  <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.color.bg} ${s.color.text}`}>
                    <Icon name={SUBJECT_ICONS[s.id] ?? 'book'} size={19} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-medium text-ink">{t(...s.name)}</span>
                    {sum && sum.due > 0 && <span className="block text-xs text-warn">{sum.due} {t('due', 'fällig')}</span>}
                  </span>
                  <span className="text-[13px] text-muted tabular-nums">{prog ? `${pct} %` : ''}</span>
                  <Icon name="chevronRight" size={18} className="text-faint" />
                </Link>
              );
            })}
            <Link href="/heute" className="flex items-center gap-3 px-4 py-3 hover:bg-canvas transition-colors">
              <span className="w-9 h-9 rounded-lg flex items-center justify-center bg-accent-soft text-accent">
                <Icon name="languages" size={19} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-medium text-ink">{t('Languages', 'Sprachen')}</span>
                <span className="block text-xs text-muted truncate">
                  {info ? t(`Continue with ${info.name}`, `Weiter mit ${info.nameDe}`) : t('Italian, Spanish, French', 'Italienisch, Spanisch, Französisch')}
                </span>
              </span>
              <Icon name="chevronRight" size={18} className="text-faint" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
