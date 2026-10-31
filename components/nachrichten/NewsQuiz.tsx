'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { useLocalSetting } from '@/lib/use-local-setting';
import { NEWS_PERIODS, NEWS_REGIONS, newsDate, sourceLabel, type NewsQuestion, type NewsRegion } from '@/lib/nachrichten';
import { berlinToday } from '@/lib/race';
import type { Card } from '@/lib/wissen';
import QuizCard from '@/components/wissen/QuizCard';
import Icon from '@/components/Icon';

const ROUND = 10;
const SEEN_KEY = 'lernapp_news_seen'; // ids answered on this device, so a new round brings new questions

type Period = (typeof NEWS_PERIODS)[number]['id'];
const isRegion = (v: string): v is NewsRegion => NEWS_REGIONS.some(r => r.id === v);
const isPeriod = (v: string): v is Period => NEWS_PERIODS.some(p => p.id === v);

function readSeen(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]') as string[]);
  } catch {
    return new Set();
  }
}
function addSeen(id: string) {
  try {
    const s = readSeen();
    s.add(id);
    localStorage.setItem(SEEN_KEY, JSON.stringify([...s].slice(-3000)));
  } catch {}
}

const daysBefore = (today: string, n: number) => {
  const d = new Date(`${today}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
};

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

// Unseen first; over longer periods the big stories (p) are picked more often.
function pickRound(pool: NewsQuestion[], seen: Set<string>, days: number): NewsQuestion[] {
  const weight = (x: NewsQuestion) => (days > 31 ? x.p * x.p : x.p) * Math.random();
  const order = (xs: NewsQuestion[]) => [...xs].sort((a, b) => weight(b) - weight(a));
  const fresh = order(pool.filter(x => !seen.has(x.id)));
  const old = order(pool.filter(x => seen.has(x.id)));
  return shuffle([...fresh, ...old].slice(0, ROUND));
}

const toCard = (x: NewsQuestion): Card => ({
  id: x.id,
  q: x.q,
  a: x.a,
  wrong: x.w,
  info: `${newsDate(x.d)}: ${x.i}`,
  source: { href: x.src, label: sourceLabel(x.src) },
});

export default function NewsQuiz({ questions, updated }: { questions: NewsQuestion[]; updated: string | null }) {
  const t = useT();
  const [region, setRegion] = useLocalSetting<NewsRegion>('lernapp_news_region', 'de', isRegion);
  const [period, setPeriod] = useLocalSetting<Period>('lernapp_news_period', 'woche', isPeriod);
  const [today, setToday] = useState<string | null>(null);
  const [round, setRound] = useState<{ cards: NewsQuestion[]; idx: number; right: number } | null>(null);

  useEffect(() => setToday(berlinToday()), []);

  const days = NEWS_PERIODS.find(p => p.id === period)!.days;
  const pool = useMemo(() => {
    if (!today) return [];
    const from = daysBefore(today, days);
    return questions.filter(x => x.r === region && x.d >= from && x.d <= today);
  }, [questions, region, days, today]);

  // Categories in the chosen pool, most frequent first ("Politik 12 · Sport 5 …").
  const topics = useMemo(() => {
    const n = new Map<string, number>();
    for (const x of pool) n.set(x.k, (n.get(x.k) ?? 0) + 1);
    return [...n.entries()].sort((a, b) => b[1] - a[1]);
  }, [pool]);

  const counts = useMemo(() => {
    const out: Record<string, number> = {};
    if (!today) return out;
    for (const p of NEWS_PERIODS) {
      const from = daysBefore(today, p.days);
      out[p.id] = questions.filter(x => x.r === region && x.d >= from && x.d <= today).length;
    }
    return out;
  }, [questions, region, today]);

  useEffect(() => {
    if (!round) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [round]);

  const start = () => setRound({ cards: pickRound(pool, readSeen(), days), idx: 0, right: 0 });
  const current = round && round.idx < round.cards.length ? round.cards[round.idx] : null;
  const finished = round && !current;
  const regionName = t(...NEWS_REGIONS.find(r => r.id === region)!.name);
  const periodName = t(...NEWS_PERIODS.find(p => p.id === period)!.name);

  const optionsOf = (x: NewsQuestion) => shuffle([x.a, ...x.w]);

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        {!round && (
          <>
            <div className="space-y-3">
              <Link href="/faecher" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
                <Icon name="chevronLeft" size={18} /> {t('Subjects', 'Fächer')}
              </Link>
              <div>
                <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">{t('News quiz', 'Nachrichten-Quiz')}</h1>
                <p className="text-sm text-muted mt-1">
                  {t('What happened in Germany and the world – politics, economy, sport, science, culture and more. New questions every day.', 'Was ist in Deutschland und der Welt passiert – Politik, Wirtschaft, Sport, Wissenschaft, Kultur und mehr. Jeden Tag neue Fragen.')}
                </p>
              </div>
            </div>

            <div className="bg-surface rounded-2xl border border-line p-5 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted uppercase tracking-wider">{t('Region', 'Region')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {NEWS_REGIONS.map(r => (
                    <button
                      key={r.id}
                      onClick={() => setRegion(r.id)}
                      className={`h-12 rounded-xl border text-[15px] font-semibold flex items-center justify-center gap-2 transition-colors ${
                        region === r.id ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-canvas text-ink hover:border-accent/40'
                      }`}
                    >
                      <Icon name={r.id === 'de' ? 'flag' : 'globe'} size={18} /> {t(...r.name)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted uppercase tracking-wider">{t('Period', 'Zeitraum')}</p>
                <div className="grid grid-cols-3 gap-2">
                  {NEWS_PERIODS.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setPeriod(p.id)}
                      className={`min-h-12 py-2 px-2 rounded-xl border text-[14px] font-semibold leading-tight transition-colors ${
                        period === p.id ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-canvas text-ink hover:border-accent/40'
                      }`}
                    >
                      {t(...p.name)}
                      <span className="block text-[11px] font-medium text-muted tabular-nums mt-0.5">
                        {today ? `${counts[p.id] ?? 0} ${t('questions', 'Fragen')}` : '…'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={start}
                disabled={pool.length === 0}
                className="w-full h-12 flex items-center justify-center gap-2 bg-accent hover:bg-accent-strong disabled:opacity-50 text-white rounded-xl font-semibold transition-colors"
              >
                {t(`Start · ${Math.min(ROUND, pool.length)} questions`, `Los geht’s · ${Math.min(ROUND, pool.length)} Fragen`)} <Icon name="arrowRight" size={18} />
              </button>
              {topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {topics.map(([k, n]) => (
                    <span key={k} className="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-canvas border border-line text-[12px] text-muted">
                      {k} <span className="tabular-nums text-faint">{n}</span>
                    </span>
                  ))}
                </div>
              )}
              {today && pool.length === 0 && (
                <p className="text-[13px] text-muted text-center">{t('No questions for this period yet.', 'Für diesen Zeitraum gibt es noch keine Fragen.')}</p>
              )}
            </div>

            <p className="text-[12px] text-faint leading-relaxed">
              {t(
                'Sources: Wikipedia “Current events” (CC BY-SA), tagesschau.de and Deutschlandfunk. Questions are written for the app; every answer links its source.',
                'Quellen: Wikipedia „Current events“ (CC BY-SA), tagesschau.de und Deutschlandfunk. Die Fragen sind für die App formuliert; jede Antwort verlinkt ihre Quelle.',
              )}
              {updated && ` ${t('Last update', 'Zuletzt aktualisiert')}: ${newsDate(updated)}.`}
            </p>
          </>
        )}

        {round && current && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setRound(null)}
                aria-label={t('Finish round', 'Runde beenden')}
                className="w-9 h-9 -ml-1 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-surface"
              >
                <Icon name="x" size={20} />
              </button>
              <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full transition-[width] duration-300" style={{ width: `${Math.round((round.idx / round.cards.length) * 100)}%` }} />
              </div>
              <span className="text-[13px] font-semibold text-muted tabular-nums">{round.idx + 1}/{round.cards.length}</span>
            </div>
            <QuizCard
              key={current.id}
              card={toCard(current)}
              label={`${current.k} · ${newsDate(current.d)}`}
              options={optionsOf(current)}
              onResult={ok => {
                addSeen(current.id);
                setRound(r => r && { ...r, idx: r.idx + 1, right: r.right + (ok ? 1 : 0) });
              }}
            />
          </div>
        )}

        {round && finished && (
          <div className="bg-surface rounded-2xl border border-line p-6 text-center space-y-4">
            <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center ${round.right === round.cards.length ? 'bg-good-soft text-good' : 'bg-accent-soft text-accent'}`}>
              <Icon name={round.right === round.cards.length ? 'check' : 'newspaper'} size={28} strokeWidth={2} />
            </div>
            <div>
              <p className="text-3xl font-bold text-ink tabular-nums">{round.right} / {round.cards.length}</p>
              <p className="text-sm text-muted mt-1">{regionName} · {periodName}</p>
            </div>
            <div className="flex gap-2 justify-center">
              <button onClick={() => setRound(null)} className="h-11 px-4 border border-line hover:bg-canvas text-ink rounded-xl text-sm font-medium transition-colors">
                {t('Done', 'Fertig')}
              </button>
              <button onClick={start} className="h-11 px-4 bg-accent hover:bg-accent-strong text-white rounded-xl text-sm font-semibold transition-colors">
                {t('Next round', 'Nächste Runde')}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
