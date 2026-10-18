'use client';

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/lib/use-profile';
import { useT } from '@/lib/ui-lang';
import { useLocalSetting } from '@/lib/use-local-setting';
import { getWissen, updateWissen } from '@/lib/storage';
import { Card, Subject, Topic, allCards, getSubject, quizOptions, topicOf } from '@/lib/wissen';
import {
  WissenProgress,
  emptyProgress,
  applyAnswer,
  summarize,
  pickRound,
  isMastered,
  ROUND_SIZE,
} from '@/lib/wissen/progress';
import QuizCard from './QuizCard';
import FlashCard from './FlashCard';
import Icon, { SUBJECT_ICONS, type IconName } from '@/components/Icon';

type Mode = 'quiz' | 'cards';

interface Session {
  title: string;
  pool: Card[]; // what "again" picks the next round from
  mixed: boolean;
  cards: Card[];
  mode: Mode;
  idx: number;
  right: number;
}

const MODE_KEY = 'lernapp_wissen_mode';
const isMode = (v: string): v is Mode => v === 'quiz' || v === 'cards';

export interface SubjectHistory {
  title: [string, string];
  sub: [string, string];
  node: ReactNode; // tile wall, rendered by the server page
}

export default function SubjectView({
  subjectId,
  hideTopics = false,
  history,
  onlyGroup,
  extra,
}: {
  subjectId: string;
  hideTopics?: boolean;
  history?: SubjectHistory;
  onlyGroup?: string; // show only the topics of this group (German group name): a category page
  extra?: ReactNode; // server-rendered links below the topics (category page)
}) {
  const full = getSubject(subjectId) as Subject;
  const subject = useMemo<Subject>(
    () => (onlyGroup ? { ...full, topics: full.topics.filter(tp => tp.group?.[1] === onlyGroup) } : full),
    [full, onlyGroup],
  );
  const { profile, ready } = useProfile();
  const router = useRouter();
  const t = useT();
  const [prog, setProg] = useState<WissenProgress>(emptyProgress());
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useLocalSetting<Mode>(MODE_KEY, 'quiz', isMode);
  const [session, setSession] = useState<Session | null>(null);
  const [openTopic, setOpenTopic] = useState<string | null>(null);
  const [saveError, setSaveError] = useState(false);

  useEffect(() => {
    if (ready && !profile) router.push('/login');
  }, [ready, profile, router]);

  useEffect(() => {
    if (!profile) return;
    let alive = true;
    getWissen().then(p => {
      if (alive) {
        setProg(p);
        setLoaded(true);
      }
    });
    return () => {
      alive = false;
    };
  }, [profile]);

  const cards = useMemo(() => allCards(subject), [subject]);
  const total = summarize(cards, prog);

  function start(title: string, pool: Card[], mixed = false) {
    const round = pickRound(pool, prog, ROUND_SIZE, mixed);
    if (round.length === 0) return;
    setSession({ title, pool, mixed, cards: round, mode, idx: 0, right: 0 });
    window.scrollTo({ top: 0 });
  }

  const answer = useCallback((card: Card, correct: boolean) => {
    setProg(p => ({ ...p, cards: { ...p.cards, [card.id]: applyAnswer(p.cards[card.id], correct) } }));
    updateWissen(p => {
      p.cards[card.id] = applyAnswer(p.cards[card.id], correct);
    })
      .then(() => setSaveError(false))
      .catch(() => setSaveError(true));
    setSession(s => s && { ...s, idx: s.idx + 1, right: s.right + (correct ? 1 : 0) });
  }, []);

  const name = t(...subject.name);
  const topicLabel = (c: Card) => {
    const tp = topicOf(subject, c.id);
    return tp.group ? `${t(...tp.group)} · ${t(...tp.name)}` : t(...tp.name);
  };

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-canvas flex items-center justify-center">
        <p className="text-muted text-sm">…</p>
      </main>
    );
  }

  const current = session && session.idx < session.cards.length ? session.cards[session.idx] : null;
  const finished = session && session.idx >= session.cards.length;
  const perfect = !!session && session.right === session.cards.length;

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <FocusMode on={!!current} />
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        {!current && (
          <div className="space-y-3">
            <Link href={onlyGroup ? `/wissen/${subject.id}` : '/faecher'} className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
              <Icon name="chevronLeft" size={18} /> {onlyGroup ? name : t('Subjects', 'Fächer')}
            </Link>
            <div className="flex items-center gap-4">
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${subject.color.bg} ${subject.color.text}`}>
                <Icon name={SUBJECT_ICONS[subject.id] ?? 'book'} size={24} />
              </span>
              <div className="min-w-0">
                <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight leading-tight">{onlyGroup ?? name}</h1>
                <p className="text-muted text-sm">{onlyGroup ? t(`${subject.topics.length} topics`, `${subject.topics.length} Themen`) : t(...subject.blurb)}</p>
              </div>
            </div>
          </div>
        )}

        {saveError && (
          <div className="bg-bad-soft border border-bad/30 rounded-xl p-3 text-sm text-bad">
            {t('Progress could not be saved.', 'Der Fortschritt konnte nicht gespeichert werden.')}
          </div>
        )}

        {session && current && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSession(null)}
                aria-label={t('Finish round', 'Runde beenden')}
                className="w-9 h-9 -ml-1 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-surface"
              >
                <Icon name="x" size={20} />
              </button>
              <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-[width] duration-300"
                  style={{ width: `${Math.round((session.idx / session.cards.length) * 100)}%` }}
                />
              </div>
              <span className="text-[13px] font-semibold text-muted tabular-nums">{session.idx + 1}/{session.cards.length}</span>
            </div>
            {session.mode === 'quiz' ? (
              <QuizCard
                key={current.id + session.idx}
                card={current}
                label={topicLabel(current)}
                options={quizOptions(current, topicOf(subject, current.id))}
                onResult={c => answer(current, c)}
              />
            ) : (
              <FlashCard
                key={current.id + session.idx}
                card={current}
                label={topicLabel(current)}
                onResult={c => answer(current, c)}
              />
            )}
          </div>
        )}

        {session && finished && (
          <div className="bg-surface rounded-2xl border border-line p-6 text-center space-y-4">
            <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center ${perfect ? 'bg-good-soft text-good' : 'bg-accent-soft text-accent'}`}>
              <Icon name={perfect ? 'check' : 'target'} size={28} strokeWidth={2} />
            </div>
            <div>
              <p className="text-3xl font-bold text-ink tabular-nums">{session.right} / {session.cards.length}</p>
              <p className="text-sm text-muted mt-1">{t('Round done', 'Runde geschafft')} · {session.title}</p>
            </div>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setSession(null)}
                className="h-11 px-4 border border-line hover:bg-canvas text-ink rounded-xl text-sm font-medium transition-colors"
              >
                {t('Done', 'Fertig')}
              </button>
              <button
                onClick={() => start(session.title, session.pool, session.mixed)}
                className="h-11 px-4 bg-accent hover:bg-accent-strong text-white rounded-xl text-sm font-semibold transition-colors"
              >
                {t('Next round', 'Nächste Runde')}
              </button>
            </div>
          </div>
        )}

        {!session && (
          <>
            <div className="rounded-2xl border border-line bg-surface p-5 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink">
                    {total.mastered} / {total.total} {t('learned', 'gelernt')}
                  </p>
                  <p className="text-[13px] text-muted mt-0.5">
                    {loaded
                      ? total.due > 0
                        ? t(`${total.due} due for review`, `${total.due} zur Wiederholung fällig`)
                        : t('Nothing due right now', 'Gerade nichts fällig')
                      : '…'}
                  </p>
                </div>
                <ModeToggle mode={mode} setMode={setMode} />
              </div>
              <ProgressBar value={total.mastered} max={total.total} />
              <button
                onClick={() => start(t('Mixed', 'Gemischt'), cards, true)}
                className="w-full h-12 flex items-center justify-center gap-2 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors"
              >
                {t(`Mixed round · ${ROUND_SIZE} cards`, `Gemischte Runde · ${ROUND_SIZE} Karten`)} <Icon name="arrowRight" size={18} />
              </button>
            </div>

            {!onlyGroup && subject.links?.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-3 bg-surface rounded-2xl border border-line p-4 hover:border-accent/40 transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  <Icon name={LINK_ICONS[l.href] ?? 'arrowRight'} size={20} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink">{t(...l.name)}</p>
                  <p className="text-[13px] text-muted">{t(...l.blurb)}</p>
                </div>
                <Icon name="chevronRight" size={18} className="text-faint" />
              </Link>
            ))}

            {history && (
              <section className="space-y-3">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-lg font-bold text-ink tracking-tight">{t(...history.title)}</h2>
                  <p className="text-[13px] text-muted">{t(...history.sub)}</p>
                </div>
                {history.node}
              </section>
            )}

            {(history || onlyGroup) && !hideTopics && (
              <section className="space-y-3">
                <div className="flex items-baseline justify-between gap-3 pt-2">
                  <h2 className="text-lg font-bold text-ink tracking-tight">{onlyGroup ? t('Topics', 'Themen') : t('Quick practice', 'Schnell üben')}</h2>
                  <p className="text-[13px] text-muted">{t('by topic', 'nach Thema')}</p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                  {subject.topics.map(topic => (
                    <TopicTile
                      key={topic.id}
                      topic={topic}
                      index={subject.topics.indexOf(topic) + 1}
                      prog={prog}
                      active={openTopic === topic.id}
                      onStart={() => start(topic.group ? `${t(...topic.group)} · ${t(...topic.name)}` : t(...topic.name), topic.cards, !!topic.shuffle)}
                      onList={() => setOpenTopic(o => (o === topic.id ? null : topic.id))}
                    />
                  ))}
                </div>
                {subject.topics.filter(tp => tp.id === openTopic).map(tp => (
                  <CardList key={tp.id} topic={tp} prog={prog} />
                ))}
              </section>
            )}

            {extra}

            {!hideTopics && !history && !onlyGroup && <div className="space-y-3">
              {subject.topics.map((topic, i) => (
                <div key={topic.id} className="space-y-3">
                {topic.group && topic.group !== subject.topics[i - 1]?.group && (
                  <h2 className="text-xs font-semibold text-muted uppercase tracking-wider pt-3">{t(...topic.group)}</h2>
                )}
                <TopicRow
                  topic={topic}
                  prog={prog}
                  open={openTopic === topic.id}
                  onToggle={() => setOpenTopic(o => (o === topic.id ? null : topic.id))}
                  onStart={() => start(topic.group ? `${t(...topic.group)} · ${t(...topic.name)}` : t(...topic.name), topic.cards, !!topic.shuffle)}
                />
                </div>
              ))}
            </div>}
          </>
        )}
      </div>
    </main>
  );
}

// Games linked from a subject → icon.
const LINK_ICONS: Record<string, IconName> = {
  '/karte': 'map',
  '/zeitstrahl': 'hourglass',
  '/weltgeschichte': 'globe',
};

// While a round runs, the tab bars step aside (see globals.css).
function FocusMode({ on }: { on: boolean }) {
  useEffect(() => {
    if (!on) return;
    document.body.dataset.focus = '1';
    return () => {
      delete document.body.dataset.focus;
    };
  }, [on]);
  return null;
}

function ModeToggle({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  const t = useT();
  const opts: [Mode, string][] = [
    ['quiz', t('Quiz', 'Quiz')],
    ['cards', t('Flashcards', 'Karteikarten')],
  ];
  return (
    <div className="flex bg-canvas rounded-lg border border-line p-0.5 text-xs shrink-0" role="group">
      {opts.map(([m, label]) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          aria-pressed={mode === m}
          className={`px-2.5 h-7 rounded-md font-medium transition-colors ${
            mode === m ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ProgressBar({ value, max }: { value: number; max: number }) {
  return (
    <div className="h-1.5 bg-line rounded-full overflow-hidden">
      <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${max ? (value / max) * 100 : 0}%` }} />
    </div>
  );
}

function TopicRow({
  topic,
  prog,
  open,
  onToggle,
  onStart,
}: {
  topic: Topic;
  prog: WissenProgress;
  open: boolean;
  onToggle: () => void;
  onStart: () => void;
}) {
  const t = useT();
  const s = summarize(topic.cards, prog);
  return (
    <div className="bg-surface rounded-2xl border border-line overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <span className="w-10 h-10 shrink-0 rounded-xl bg-canvas border border-line flex items-center justify-center text-xl" aria-hidden="true">{topic.icon}</span>
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <p className="font-semibold text-ink truncate">{t(...topic.name)}</p>
            <p className="text-xs text-muted tabular-nums shrink-0">
              {s.mastered}/{s.total}
              {s.due > 0 && <span className="text-warn ml-1.5">· {s.due} {t('due', 'fällig')}</span>}
            </p>
          </div>
          <div className="h-1.5 bg-line rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full" style={{ width: `${(s.mastered / s.total) * 100}%` }} />
          </div>
        </div>
      </div>
      <div className="flex border-t border-line text-sm">
        <button onClick={onToggle} aria-expanded={open} className="flex-1 h-11 text-muted hover:bg-canvas transition-colors">
          {open ? t('Hide cards', 'Karten ausblenden') : t('Show cards', 'Karten ansehen')}
        </button>
        <button
          onClick={onStart}
          className="flex-1 h-11 font-semibold text-accent hover:bg-canvas border-l border-line transition-colors inline-flex items-center justify-center gap-1.5"
        >
          {t('Practise', 'Üben')} <Icon name="arrowRight" size={16} />
        </button>
      </div>
      {open && <CardList topic={topic} prog={prog} bare />}
    </div>
  );
}

// All cards of a topic with the answer and the learning state.
function CardList({ topic, prog, bare = false }: { topic: Topic; prog: WissenProgress; bare?: boolean }) {
  const sameQ = topic.cards.every(c => c.q === topic.cards[0].q);
  return (
    <ul className={`divide-y divide-line-soft ${bare ? 'border-t border-line' : 'bg-surface rounded-2xl border border-line overflow-hidden'}`}>
      {topic.cards.map(c => (
        <li key={c.id} className="px-4 py-2.5 text-sm flex gap-2">
          <span className="w-4 shrink-0 pt-0.5" aria-hidden="true">
            {isMastered(prog.cards[c.id]) ? <Icon name="check" size={16} strokeWidth={2.25} className="text-good" /> : prog.cards[c.id] ? <span className="block w-2 h-2 mt-1.5 rounded-full bg-warn" /> : null}
          </span>
          {c.img && (
            // eslint-disable-next-line @next/next/no-img-element -- local SVG flags
            <img src={c.img} alt="" loading="lazy" className="h-6 w-8 object-cover rounded-sm border border-line shrink-0 mt-0.5" />
          )}
          <div>
            {!sameQ && <p className="text-muted">{c.q}</p>}
            <p className="font-medium text-ink">{c.a}</p>
            {c.info && <p className="text-xs text-muted mt-0.5">{c.info}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

// Small square tile for a practice topic: tap to practise, the list icon shows the cards.
function TopicTile({
  topic,
  index,
  prog,
  active,
  onStart,
  onList,
}: {
  topic: Topic;
  index: number;
  prog: WissenProgress;
  active: boolean;
  onStart: () => void;
  onList: () => void;
}) {
  const t = useT();
  const s = summarize(topic.cards, prog);
  const pct = s.total ? (s.mastered / s.total) * 100 : 0;
  return (
    <div className={`relative aspect-square rounded-2xl border bg-surface ${active ? 'border-accent' : 'border-line'} overflow-hidden`}>
      <button
        onClick={onStart}
        aria-label={`${t(...topic.name)} – ${t('Practise', 'Üben')}`}
        className="absolute inset-0 flex flex-col justify-between p-3 pb-4 text-left hover:bg-canvas transition-colors"
      >
        <span className="text-[26px] font-bold leading-none tracking-tight text-accent/25 tabular-nums" aria-hidden="true">{String(index).padStart(2, '0')}</span>
        <span>
          <span className="block text-[13px] font-semibold text-ink leading-tight text-balance">{t(...topic.name)}</span>
          <span className="block mt-1 text-[11px] text-muted tabular-nums">
            {s.mastered}/{s.total}
            {s.due > 0 && <span className="text-warn"> · {s.due}</span>}
          </span>
        </span>
      </button>
      <button
        onClick={onList}
        aria-label={t('Show cards', 'Karten ansehen')}
        aria-pressed={active}
        className="absolute top-1 right-1 w-7 h-7 rounded-lg flex items-center justify-center text-faint hover:text-ink hover:bg-canvas"
      >
        <Icon name="list" size={15} />
      </button>
      <div className="absolute bottom-0 inset-x-0 h-1 bg-line">
        <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
