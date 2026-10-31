'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useProfile } from '@/lib/use-profile';
import { useT } from '@/lib/ui-lang';
import { langInfo } from '@/lib/lang';
import { MIX, SUBJECTS, allCards, getSubject } from '@/lib/wissen';
import { summarize } from '@/lib/wissen/progress';
import type { FachTile } from '@/lib/wissen/faecher';
import type { DailyQuestion } from '@/lib/wissen/home';
import { useWissenProgress } from '@/components/laender/EventProgress';
import { useLastVisit } from '@/components/RememberVisit';
import Icon, { SUBJECT_ICONS } from '@/components/Icon';

type Tiles = Record<string, Omit<FachTile, 'id'>>;

// Berlin-independent day number: the question of the day changes at local midnight.
const dayNumber = () => {
  const d = new Date();
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000);
};

function Cover({ src, pos = 'top', eager }: { src: string | null; pos?: 'top' | 'center' | 'face'; eager?: boolean }) {
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local cover pictures
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading={eager ? 'eager' : 'lazy'}
      className={`absolute inset-0 w-full h-full object-cover ${pos === 'center' ? 'object-center' : pos === 'face' ? 'object-[50%_28%]' : 'object-top'}`}
    />
  );
}

// Home: continue, reviews, question of the day, subjects, discover, languages.
export default function HomeView({ tiles, pool, covers }: { tiles: Tiles; pool: DailyQuestion[]; covers: Record<string, string | null> }) {
  const { profile, lang } = useProfile();
  const t = useT();
  const prog = useWissenProgress();
  const last = useLastVisit();

  const mix = prog ? summarize(allCards(MIX), prog) : null;
  const info = lang ? langInfo(lang) : null;
  const hour = new Date().getHours();
  const greeting =
    hour < 11 ? t('Good morning', 'Guten Morgen') : hour < 18 ? t('Hello', 'Hallo') : t('Good evening', 'Guten Abend');

  // Longest matching path prefix gives the picture of the last visited page.
  const lastCover = useMemo(() => {
    if (!last) return null;
    const k = Object.keys(covers)
      .filter(p => last.href === p || last.href.startsWith(`${p}/`))
      .sort((a, b) => b.length - a.length)[0];
    return k ? covers[k] : null;
  }, [last, covers]);

  return (
    <div className="space-y-7">
      <header>
        <p className="text-sm font-medium text-muted">{greeting}{profile ? `, ${profile.name}` : ''}</p>
        <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight mt-0.5">{t('What do you want to learn?', 'Was lernst du heute?')}</h1>
      </header>

      <div className="space-y-3">
        {last && (
          <Link
            href={last.href}
            className="group relative block h-44 md:h-52 rounded-3xl overflow-hidden border border-line bg-ink focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Cover src={lastCover} pos="face" eager />
            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
              <span className="self-start text-[11px] font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-sm rounded-full px-2.5 py-1">
                {t('Continue', 'Weiterlernen')}
              </span>
              <div className="max-w-[80%]">
                <p className="font-bold text-[22px] leading-tight tracking-tight line-clamp-2">{last.title}</p>
                <p className="text-[13px] text-white/75 mt-1 truncate">{last.context}</p>
              </div>
            </div>
            <span className="absolute right-4 bottom-4 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <Icon name="arrowRight" size={20} />
            </span>
          </Link>
        )}

        <Link
          href="/wissen/mix"
          className="flex items-center gap-4 p-4 rounded-2xl bg-accent hover:bg-accent-strong text-white transition-colors"
        >
          <span className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <Icon name="shuffle" size={22} />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block font-semibold">
              {mix && mix.due > 0 ? t(`${mix.due} reviews due`, `${mix.due} Wiederholungen fällig`) : t('Mixed round', 'Gemischte Runde')}
            </span>
            <span className="block text-[13px] text-white/80">{t('10 questions from every subject', '10 Fragen quer durch alle Fächer')}</span>
          </span>
          <Icon name="arrowRight" size={20} />
        </Link>

        <Link href="/nachrichten" className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-line hover:border-accent/40 transition-colors">
          <span className="w-11 h-11 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
            <Icon name="newspaper" size={22} />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block font-semibold text-ink">{t('News quiz', 'Nachrichten-Quiz')}</span>
            <span className="block text-[13px] text-muted">{t('What happened in Germany and the world – new every day', 'Was in Deutschland und der Welt passiert ist – jeden Tag neu')}</span>
          </span>
          <Icon name="chevronRight" size={20} className="text-faint" />
        </Link>
      </div>

      {pool.length > 0 && <DailyCard pool={pool} />}

      <section className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-ink tracking-tight">{t('Subjects', 'Fächer')}</h2>
          <Link href="/faecher" className="text-sm font-medium text-accent hover:text-accent-strong">{t('All', 'Alle')}</Link>
        </div>
        <div className="-mx-4 sm:mx-0 px-4 sm:px-0 flex sm:grid sm:grid-cols-4 gap-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SUBJECTS.map((s, i) => {
            const f = tiles[s.id];
            const due = prog ? summarize(allCards(s), prog).due : 0;
            return (
              <Link
                key={s.id}
                href={`/wissen/${s.id}`}
                className={`group relative shrink-0 w-[38%] sm:w-auto aspect-[4/5] snap-start rounded-2xl overflow-hidden border border-line ${s.color.bg}`}
              >
                <Cover src={f?.cover ?? null} pos={f?.pos} eager={i < 3} />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent" />
                <span className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-black/35 backdrop-blur-sm text-white flex items-center justify-center ring-1 ring-white/20">
                  <Icon name={SUBJECT_ICONS[s.id] ?? 'book'} size={15} />
                </span>
                {due > 0 && (
                  <span className="absolute top-2 right-2 min-w-6 h-6 px-1.5 rounded-full bg-warn text-white text-[11px] font-bold tabular-nums flex items-center justify-center">{due}</span>
                )}
                <p className="absolute inset-x-0 bottom-0 p-2.5 font-semibold text-[15px] leading-tight text-white">{t(...s.name)}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-ink tracking-tight">{t('Discover', 'Entdecken')}</h2>
        <div className="grid grid-cols-3 gap-3">
          <DiscoverTile href="/weltgeschichte" img="/geo/cover-machu.jpg" icon="globe" title={t('World history', 'Weltgeschichte')} sub={t('Every country', 'Alle Länder')} />
          <DiscoverTile href="/karte" flags icon="map" title={t('Map quiz', 'Weltkarte')} sub={t('Find countries', 'Länder finden')} />
          <DiscoverTile href="/zeitstrahl" img="/kunst/kolosseum.jpg" icon="hourglass" title={t('Timeline', 'Zeitstrahl')} sub={t('Order events', 'Ereignisse ordnen')} />
        </div>
      </section>

      <Link href="/heute" className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-line hover:border-accent/40 transition-colors">
        <span className="flex -space-x-2 shrink-0">
          {['it', 'es', 'fr'].map(c => (
            // eslint-disable-next-line @next/next/no-img-element -- flag files
            <img key={c} src={`/flags/${c}.svg`} alt="" className="w-8 h-8 rounded-full object-cover ring-2 ring-surface" />
          ))}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-semibold text-ink">{t('Languages', 'Sprachen')}</span>
          <span className="block text-[13px] text-muted truncate">
            {info ? t(`Continue with ${info.name}`, `Weiter mit ${info.nameDe}`) : t('Italian, Spanish, French', 'Italienisch, Spanisch, Französisch')}
          </span>
        </span>
        <Icon name="chevronRight" size={20} className="text-faint" />
      </Link>
    </div>
  );
}

function DiscoverTile({ href, img, flags, icon, title, sub }: { href: string; img?: string; flags?: boolean; icon: 'globe' | 'map' | 'hourglass'; title: string; sub: string }) {
  return (
    <Link href={href} className="group relative block aspect-[4/5] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-ink">
      {img && <Cover src={img} pos="center" />}
      {flags && (
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-75">
          {'de fr it jp br za in au ca'.split(' ').map(c => (
            // eslint-disable-next-line @next/next/no-img-element -- flag files
            <img key={c} src={`/flags/${c}.svg`} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          ))}
        </div>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />
      <span className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-black/35 backdrop-blur-sm text-white flex items-center justify-center ring-1 ring-white/20">
        <Icon name={icon} size={15} />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-2.5 text-white">
        <p lang="de" className="font-semibold text-[13.5px] leading-tight hyphens-auto break-words">{title}</p>
        <p className="text-[11px] text-white/75 truncate">{sub}</p>
      </div>
    </Link>
  );
}

// One question a day from the in-depth chapters; answering reveals the info and a link to the chapter.
function DailyCard({ pool }: { pool: DailyQuestion[] }) {
  const t = useT();
  const day = dayNumber();
  const q = pool[day % pool.length];
  const options = useMemo(() => {
    const all = [q.a, ...q.wrong];
    const r = day % 4;
    return [...all.slice(r), ...all.slice(0, r)];
  }, [q, day]);
  const [chosen, setChosen] = useState<string | null>(null);
  const subject = getSubject(q.fach);

  return (
    <section className="rounded-3xl bg-surface border border-line overflow-hidden">
      <div className="relative h-36 md:h-44 bg-ink">
        <Cover src={q.img} pos="face" />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-3 flex items-end justify-between gap-3 text-white">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">{t('Question of the day', 'Frage des Tages')}</p>
            <p className="text-[13px] text-white/90 truncate">{subject ? t(...subject.name) : ''} · {q.chapter}</p>
          </div>
          <span className="w-8 h-8 rounded-lg bg-black/35 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/20 shrink-0">
            <Icon name={SUBJECT_ICONS[q.fach] ?? 'book'} size={16} />
          </span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <p className="font-semibold text-ink text-[17px] leading-snug">{q.q}</p>
        <div className="grid gap-2">
          {options.map(o => {
            const state = !chosen ? 'idle' : o === q.a ? 'right' : o === chosen ? 'wrong' : 'dim';
            return (
              <button
                key={o}
                type="button"
                disabled={!!chosen}
                onClick={() => setChosen(o)}
                className={`text-left px-4 py-3 rounded-xl border text-[15px] transition-colors ${
                  state === 'idle'
                    ? 'border-line bg-canvas text-ink hover:border-accent/50'
                    : state === 'right'
                      ? 'border-good bg-good-soft text-ink font-semibold'
                      : state === 'wrong'
                        ? 'border-bad bg-bad-soft text-ink'
                        : 'border-line-soft bg-canvas text-muted'
                }`}
              >
                {o}
              </button>
            );
          })}
        </div>
        {chosen && (
          <div className="space-y-3 pt-1">
            <p className={`text-sm font-semibold ${chosen === q.a ? 'text-good' : 'text-bad'}`}>
              {chosen === q.a ? t('Correct!', 'Richtig!') : t(`Not quite – it's “${q.a}”.`, `Leider nicht – richtig ist „${q.a}“.`)}
            </p>
            {q.info && <p className="text-sm text-muted leading-relaxed">{q.info}</p>}
            <Link href={q.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong">
              {t('Read the chapter', 'Zum Kapitel')} <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
