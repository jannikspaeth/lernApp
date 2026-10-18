'use client';

import { useState, useEffect, useCallback } from 'react';
import { getRace } from '@/lib/storage';
import { useProfile } from '@/lib/use-profile';
import { useT, useUiLang } from '@/lib/ui-lang';
import { langInfo } from '@/lib/lang';
import Stars from '@/components/Stars';
import { RaceResponse, RaceHistory } from '@/lib/types';
import { Crown, Flame, Flag, TrendingUp, Medal, Clock, Star } from 'lucide-react';

const REFRESH_MS = 20000;

// One colour per racer (by sorted index), mid-tones that read on light and dark:
// blue, orange, green, violet, pink. Used for the token on the track and the
// matching line in the progress chart.
const LINE_COLORS = ['#3B6BF5', '#E8710A', '#12A16B', '#8B5CF6', '#D9467A'];

function fmtPoints(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

// 'YYYY-MM' -> e.g. "June 2026". Parsed as local midnight so the month doesn't shift.
function fmtMonth(month: string, loc: string): string {
  const d = new Date(`${month}-01T00:00:00`);
  if (isNaN(d.getTime())) return month;
  return d.toLocaleDateString(loc, { month: 'long', year: 'numeric' });
}

// Days remaining in the current month's race, today included (so the last day
// reads "1 day left"). Uses the Berlin `month`/`today` the API returns — both are
// plain date strings, so there are no timezone pitfalls.
function daysLeftInMonth(month: string, today: string): number {
  const [y, m] = month.split('-').map(Number);
  const todayDay = Number(today.slice(8, 10));
  if (!y || !m || !todayDay) return 0;
  const lastDay = new Date(Date.UTC(y, m, 0)).getUTCDate(); // m is 1-based ⇒ last day of month
  return Math.max(0, lastDay - todayDay + 1);
}

// 'YYYY-MM-DD' -> e.g. "17 Jun". Parsed as local midnight so the date doesn't shift.
function fmtDate(iso: string, loc: string): string {
  const d = new Date(`${iso}T00:00:00`);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(loc, { day: 'numeric', month: 'short' });
}

// Hand-rolled cumulative line chart (no chart lib — matches the app's UI style).
function ProgressOverTime({
  history,
  colorOf,
}: {
  history: RaceHistory;
  colorOf: (id: string) => string;
}) {
  const t = useT();
  const [uiLang] = useUiLang();
  const loc = uiLang === 'de' ? 'de-DE' : 'en-GB';
  const { dates, series } = history;
  const empty = series.length === 0 || dates.length === 0;

  // viewBox geometry; the SVG scales to its container width.
  const W = 320,
    H = 170,
    PL = 30,
    PR = 12,
    PT = 12,
    PB = 22;
  const n = dates.length;
  const yMax = Math.max(1, ...series.map(s => s.cumulative[s.cumulative.length - 1] ?? 0));
  const x = (i: number) => (n <= 1 ? PL : PL + (i / (n - 1)) * (W - PL - PR));
  const y = (v: number) => H - PB - (v / yMax) * (H - PT - PB);

  // x tick labels: first, middle, last.
  const tickIdx = n <= 1 ? [0] : [...new Set([0, Math.floor((n - 1) / 2), n - 1])];

  return (
    <section className="bg-surface rounded-3xl border border-line p-5 space-y-3">
      <h2 className="font-display text-xl text-ink flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-accent" /> {t('Progress over time', 'Verlauf')}
      </h2>

      {empty ? (
        <p className="text-sm text-muted py-3 text-center">
          {t('No activity yet — start learning to grow your line!', 'Noch keine Aktivität – fang an zu lernen, damit deine Linie wächst!')}
        </p>
      ) : (
        <>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Cumulative learning over time">
            {/* y baseline + top gridline with labels */}
            {[0, yMax].map((v, k) => (
              <g key={k}>
                <line x1={PL} x2={W - PR} y1={y(v)} y2={y(v)} stroke="var(--chart-grid)" strokeWidth={1} />
                <text x={PL - 4} y={y(v) + 3} textAnchor="end" fontSize={8} fill="var(--color-faint)">
                  {Math.round(v)}
                </text>
              </g>
            ))}

            {/* one line per racer */}
            {series.map(s => {
              const color = colorOf(s.id);
              const last = s.cumulative.length - 1;
              if (n === 1) {
                return <circle key={s.id} cx={x(0)} cy={y(s.cumulative[0])} r={3} fill={color} />;
              }
              const pts = s.cumulative.map((v, i) => `${x(i)},${y(v)}`).join(' ');
              return (
                <g key={s.id}>
                  <polyline
                    points={pts}
                    fill="none"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <circle cx={x(last)} cy={y(s.cumulative[last])} r={2.5} fill={color} />
                </g>
              );
            })}

            {/* x tick labels */}
            {tickIdx.map(i => (
              <text
                key={i}
                x={x(i)}
                y={H - 6}
                textAnchor={i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'}
                fontSize={8}
                fill="var(--color-faint)"
              >
                {fmtDate(dates[i], loc)}
              </text>
            ))}
          </svg>

          {/* legend: colored swatch + name + current total */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {[...series]
              .sort(
                (a, b) =>
                  (b.cumulative[b.cumulative.length - 1] ?? 0) -
                  (a.cumulative[a.cumulative.length - 1] ?? 0)
              )
              .map(s => (
                <span key={s.id} className="flex items-center gap-1.5 text-xs text-muted">
                  <span
                    className="inline-block w-3 h-0.5 rounded-full"
                    style={{ backgroundColor: colorOf(s.id) }}
                  />
                  <span className="font-medium text-ink">{s.name}</span>
                  <span className="tabular-nums text-muted">
                    {s.cumulative[s.cumulative.length - 1] ?? 0}
                  </span>
                </span>
              ))}
          </div>
          <p className="text-[11px] text-muted pt-1">
            {t('Total flashcards & conjugations practiced, added up day by day.', 'Alle geübten Karten und Verbformen, Tag für Tag aufaddiert.')}
          </p>
        </>
      )}
    </section>
  );
}

export default function RacePage() {
  const t = useT();
  const [uiLang] = useUiLang();
  const loc = uiLang === 'de' ? 'de-DE' : 'en-GB';
  // Each language has its own race; the board shows the one being learned.
  const { lang } = useProfile();
  const [race, setRace] = useState<RaceResponse | null>(null);
  const [loaded, setLoaded] = useState(false);

  const refresh = useCallback(async () => {
    setRace(await getRace());
    setLoaded(true);
  }, []);

  // Live: refresh on mount, on focus, and on an interval while the tab is open.
  useEffect(() => {
    refresh();
    const onFocus = () => refresh();
    window.addEventListener('focus', onFocus);
    const id = setInterval(refresh, REFRESH_MS);
    return () => {
      window.removeEventListener('focus', onFocus);
      clearInterval(id);
    };
  }, [refresh]);

  if (!loaded || !race) {
    return (
      <main className="md:ml-56 min-h-screen bg-canvas flex items-center justify-center">
        <p className="text-muted text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const { month, today, racers, highscores, personalBests, history } = race;
  // Personal bests of people who aren't already in the top-5 leaderboard.
  const topNames = new Set(highscores.map(h => h.name));
  const otherBests = personalBests.filter(b => !topNames.has(b.name));
  // Cars race relative to the current month's leader (no fixed finish line).
  const leaderPoints = Math.max(0, ...racers.map(r => r.points));
  const daysLeft = daysLeftInMonth(month, today);
  // Map each racer id to its car color index (standings order) so chart lines match.
  const colorIndex = new Map(racers.map((r, i) => [r.id, i]));
  const colorOf = (id: string) =>
    LINE_COLORS[(colorIndex.get(id) ?? 0) % LINE_COLORS.length];
  // "Today so far" ordered by today's count (most active first), only those active.
  const todayActive = [...racers]
    .filter(r => r.todayCount > 0)
    .sort((a, b) => b.todayCount - a.todayCount);
  const maxToday = Math.max(1, ...todayActive.map(r => r.todayCount));

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-3xl text-ink flex items-center gap-2">
            {t('The Race', 'Das Rennen')}
            {lang && <span title={t(`${langInfo(lang).name} race`, `Rennen auf ${langInfo(lang).nameDe}`)}>{langInfo(lang).flag}</span>}
          </h1>
          <p className="text-muted text-sm mt-0.5">
            {t(
              'Most points this calendar month wins a star — then it resets on the 1st. Most learning each day scores 5 · 4 · 3 · 2 · 1; flashcards, verbs, grammar and sentences count.',
              'Wer in diesem Kalendermonat die meisten Punkte hat, gewinnt einen Stern – am 1. geht es von vorn los. Wer am Tag am meisten lernt, bekommt 5 · 4 · 3 · 2 · 1 Punkte; Karten, Verben, Grammatik und Sätze zählen.',
            )}
          </p>
        </div>

        {/* ===== Cars racing the month's leader ===== */}
        <section className="bg-surface rounded-3xl border border-line p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">{t('Standings', 'Stand')}</h2>
            <div className="text-right leading-tight">
              <p className="text-xs font-medium text-muted">{fmtMonth(month, loc)}</p>
              {daysLeft > 0 && (
                <p className="text-[11px] text-muted">
                  <Clock className="inline w-3 h-3 -mt-0.5" /> {t(`${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} left`, `noch ${daysLeft} ${daysLeft === 1 ? 'Tag' : 'Tage'}`)}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-3">
            {racers.map((r, i) => {
              const pct = leaderPoints > 0 ? r.points / leaderPoints : 0;
              const color = LINE_COLORS[i % LINE_COLORS.length];
              const leader = i === 0 && r.points > 0;
              return (
                <div key={r.id}>
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-sm font-semibold text-ink flex items-center gap-1.5 min-w-0">
                      {leader && <Crown className="w-4 h-4 text-warn shrink-0" aria-label={t('Leader', 'Spitze')} />}
                      <span className="truncate">{r.name}<Stars n={r.stars} /></span>
                      {r.streak > 0 && (
                        <span
                          className="inline-flex items-center gap-0.5 rounded-full bg-accent-soft px-1.5 py-0.5 text-[11px] font-bold leading-none text-accent tabular-nums shrink-0"
                          title={t(`${r.streak}-day streak`, `${r.streak} Tage in Folge`)}
                          aria-label={t(`${r.streak}-day streak`, `${r.streak} Tage in Folge`)}
                        >
                          <Flame className="w-3 h-3" aria-hidden />
                          {r.streak}
                        </span>
                      )}
                    </span>
                    <span className="text-sm font-bold tabular-nums text-ink shrink-0">
                      {fmtPoints(r.points)}
                    </span>
                  </div>
                  <div className="relative h-9 rounded-full bg-line-soft overflow-hidden">
                    {/* finish line */}
                    <Flag className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" aria-hidden />
                    {/* dashed track */}
                    <div className="absolute left-4 right-9 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-line" />
                    {/* racer token */}
                    <span
                      className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-sm transition-all duration-700 select-none"
                      style={{ left: `calc(0.25rem + ${pct} * (100% - 3.5rem))`, background: color }}
                      aria-hidden
                    >
                      {r.name.slice(0, 1).toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== Today so far (live) ===== */}
        <section className="bg-surface rounded-3xl border border-line p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">{t('Today so far', 'Heute bisher')}</h2>
            <span className="flex items-center gap-1 text-xs text-good font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-good animate-pulse" /> live
            </span>
          </div>

          {todayActive.length === 0 ? (
            <p className="text-sm text-muted py-3 text-center">
              {t('No activity yet today. Be the first!', 'Heute noch keine Aktivität. Sei der/die Erste!')}
            </p>
          ) : (
            <div className="space-y-2.5">
              {todayActive.map((r, i) => (
                <div key={r.id} className="flex items-center gap-3">
                  <span className="text-xs text-muted w-4 tabular-nums">{i + 1}.</span>
                  <span className="text-sm font-medium text-ink w-20 shrink-0 truncate">
                    {r.name}
                  </span>
                  <div className="flex-1 h-2 bg-line-soft rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${Math.round((r.todayCount / maxToday) * 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted tabular-nums w-10 text-right">
                    {r.todayCount}
                  </span>
                  <span
                    className="text-xs font-semibold text-good tabular-nums w-10 text-right"
                    title={t('Points if the day ended now', 'Punkte, wenn der Tag jetzt enden würde')}
                  >
                    +{fmtPoints(r.todayPoints)}
                  </span>
                </div>
              ))}
            </div>
          )}
          <p className="text-[11px] text-muted pt-1">
            {t('Points are locked in at the end of each day (Europe/Berlin time).', 'Die Punkte werden am Ende jedes Tages vergeben (deutsche Zeit).')}
          </p>
        </section>

        {/* ===== All-time daily records ===== */}
        <section className="bg-surface rounded-3xl border border-line p-5 space-y-3">
          <h2 className="font-display text-xl text-ink flex items-center gap-2">
            <Medal className="w-5 h-5 text-accent" /> {t('Daily records', 'Tagesrekorde')}
          </h2>
          {highscores.length === 0 ? (
            <p className="text-sm text-muted py-2 text-center">{t('No records yet — go set one!', 'Noch keine Rekorde – stell einen auf!')}</p>
          ) : (
            <div className="space-y-2">
              {highscores.map((h, i) => {
                const medal = ['bg-warn', 'bg-faint', 'bg-accent/70'][i];
                return (
                  <div key={`${h.date}-${h.name}-${i}`} className="flex items-center gap-3">
                    <span className="w-6 text-center text-sm shrink-0">
                      {medal ? (
                        <span className={`inline-flex w-6 h-6 rounded-full ${medal} text-white text-xs font-bold items-center justify-center`}>{i + 1}</span>
                      ) : (
                        <span className="text-muted">{i + 1}.</span>
                      )}
                    </span>
                    <span className="text-sm font-semibold text-ink flex-1 truncate">
                      {h.name}
                    </span>
                    <span className="text-xs text-muted tabular-nums shrink-0">
                      {fmtDate(h.date, loc)}
                    </span>
                    <span className="text-sm font-bold text-ink tabular-nums w-10 text-right shrink-0">
                      {h.count}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {otherBests.length > 0 && (
            <div className="pt-1 space-y-2">
              <p className="text-[11px] font-semibold text-muted uppercase tracking-wide">
                {t('Personal bests', 'Persönliche Rekorde')}
              </p>
              {otherBests.map(h => (
                <div key={`pb-${h.name}`} className="flex items-center gap-3">
                  <Star className="w-4 h-4 mx-1 shrink-0 text-faint" />
                  <span className="text-sm font-medium text-muted flex-1 truncate">{h.name}</span>
                  <span className="text-xs text-muted tabular-nums shrink-0">{fmtDate(h.date, loc)}</span>
                  <span className="text-sm font-bold text-ink tabular-nums w-10 text-right shrink-0">
                    {h.count}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p className="text-[11px] text-muted pt-1">{t('Highest single-day scores ever.', 'Die höchsten Tageswerte aller Zeiten.')}</p>
        </section>

        {/* ===== Progress over time (cumulative) ===== */}
        <ProgressOverTime history={history} colorOf={colorOf} />
      </div>
    </main>
  );
}
