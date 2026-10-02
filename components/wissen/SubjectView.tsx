'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
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

type Mode = 'quiz' | 'cards';

interface Session {
  title: string;
  pool: Card[]; // what "again" picks the next round from
  cards: Card[];
  mode: Mode;
  idx: number;
  right: number;
}

const MODE_KEY = 'lernapp_wissen_mode';
const isMode = (v: string): v is Mode => v === 'quiz' || v === 'cards';

export default function SubjectView({ subjectId }: { subjectId: string }) {
  const subject = getSubject(subjectId) as Subject;
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

  function start(title: string, pool: Card[]) {
    const round = pickRound(pool, prog);
    if (round.length === 0) return;
    setSession({ title, pool, cards: round, mode, idx: 0, right: 0 });
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

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">…</p>
      </main>
    );
  }

  const current = session && session.idx < session.cards.length ? session.cards[session.idx] : null;
  const finished = session && session.idx >= session.cards.length;

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <Link href="/" className="text-xs text-gray-400 hover:text-gray-600">← {t('All subjects', 'Alle Fächer')}</Link>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mt-1">
            <span>{subject.icon}</span> {name}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">{t(...subject.blurb)}</p>
        </div>

        {saveError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
            ⚠ {t('Progress could not be saved.', 'Der Fortschritt konnte nicht gespeichert werden.')}
          </div>
        )}

        {session && current && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="font-medium text-gray-600">{session.title}</span>
              <div className="flex items-center gap-3">
                <span className="tabular-nums">{session.idx + 1} / {session.cards.length}</span>
                <button onClick={() => setSession(null)} className="hover:text-gray-600 transition-colors">
                  {t('Finish', 'Beenden')}
                </button>
              </div>
            </div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${subject.color.bar} rounded-full transition-all`}
                style={{ width: `${Math.round((session.idx / session.cards.length) * 100)}%` }}
              />
            </div>
            {session.mode === 'quiz' ? (
              <QuizCard
                key={current.id + session.idx}
                card={current}
                label={t(...topicOf(subject, current.id).name)}
                options={quizOptions(current, topicOf(subject, current.id))}
                onResult={c => answer(current, c)}
              />
            ) : (
              <FlashCard
                key={current.id + session.idx}
                card={current}
                label={t(...topicOf(subject, current.id).name)}
                onResult={c => answer(current, c)}
              />
            )}
          </div>
        )}

        {session && finished && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center space-y-4">
            <p className="text-4xl">{session.right === session.cards.length ? '🎉' : '💪'}</p>
            <p className="font-semibold text-gray-900">{t('Round done!', 'Runde geschafft!')}</p>
            <p className="text-sm text-gray-500">
              {t('Correct', 'Richtig')}: <span className="font-semibold text-gray-800">{session.right} / {session.cards.length}</span>
            </p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setSession(null)}
                className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors"
              >
                {t('Done', 'Fertig')}
              </button>
              <button
                onClick={() => start(session.title, session.pool)}
                className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                {t('Next round →', 'Nächste Runde →')}
              </button>
            </div>
          </div>
        )}

        {!session && (
          <>
            <div className={`rounded-2xl border ${subject.color.border} ${subject.color.bg} p-5 space-y-3`}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className={`font-semibold ${subject.color.text}`}>
                    {total.mastered} / {total.total} {t('learned', 'gelernt')}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {loaded
                      ? total.due > 0
                        ? t(`${total.due} due for review`, `${total.due} zur Wiederholung fällig`)
                        : t('Nothing due right now', 'Gerade nichts fällig')
                      : '…'}
                  </p>
                </div>
                <ModeToggle mode={mode} setMode={setMode} />
              </div>
              <ProgressBar value={total.mastered} max={total.total} color={subject.color.bar} />
              <button
                onClick={() => start(t('Mixed', 'Gemischt'), cards)}
                className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
              >
                {t(`Mixed round (${ROUND_SIZE})`, `Gemischte Runde (${ROUND_SIZE})`)} →
              </button>
            </div>

            <div className="space-y-3">
              {subject.topics.map(topic => (
                <TopicRow
                  key={topic.id}
                  subject={subject}
                  topic={topic}
                  prog={prog}
                  open={openTopic === topic.id}
                  onToggle={() => setOpenTopic(o => (o === topic.id ? null : topic.id))}
                  onStart={() => start(t(...topic.name), topic.cards)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function ModeToggle({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  const t = useT();
  const opts: [Mode, string][] = [
    ['quiz', t('Quiz', 'Quiz')],
    ['cards', t('Flashcards', 'Karteikarten')],
  ];
  return (
    <div className="flex bg-white rounded-xl border border-gray-200 p-0.5 text-xs shrink-0">
      {opts.map(([m, label]) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
            mode === m ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ProgressBar({ value, max, color }: { value: number; max: number; color: string }) {
  return (
    <div className="h-1.5 bg-white/70 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${max ? (value / max) * 100 : 0}%` }} />
    </div>
  );
}

function TopicRow({
  subject,
  topic,
  prog,
  open,
  onToggle,
  onStart,
}: {
  subject: Subject;
  topic: Topic;
  prog: WissenProgress;
  open: boolean;
  onToggle: () => void;
  onStart: () => void;
}) {
  const t = useT();
  const s = summarize(topic.cards, prog);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <span className="text-2xl">{topic.icon}</span>
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <p className="font-semibold text-gray-900 truncate">{t(...topic.name)}</p>
            <p className="text-xs text-gray-400 tabular-nums shrink-0">
              {s.mastered}/{s.total}
              {s.due > 0 && <span className="text-amber-600 ml-1.5">· {s.due} {t('due', 'fällig')}</span>}
            </p>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full ${subject.color.bar} rounded-full`} style={{ width: `${(s.mastered / s.total) * 100}%` }} />
          </div>
        </div>
      </div>
      <div className="flex border-t border-gray-100 text-sm">
        <button onClick={onToggle} className="flex-1 py-2.5 text-gray-500 hover:bg-gray-50 transition-colors">
          {open ? t('Hide cards', 'Karten ausblenden') : t('Show cards', 'Karten ansehen')}
        </button>
        <button
          onClick={onStart}
          className={`flex-1 py-2.5 font-semibold ${subject.color.text} hover:bg-gray-50 border-l border-gray-100 transition-colors`}
        >
          {t('Practise', 'Üben')} →
        </button>
      </div>
      {open && (
        <ul className="border-t border-gray-100 divide-y divide-gray-50">
          {topic.cards.map(c => (
            <li key={c.id} className="px-4 py-2.5 text-sm flex gap-2">
              <span className="w-4 shrink-0">{isMastered(prog.cards[c.id]) ? '✅' : prog.cards[c.id] ? '🔸' : ''}</span>
              <div>
                <p className="text-gray-600">{c.q}</p>
                <p className="font-medium text-gray-900">{c.a}</p>
                {c.info && <p className="text-xs text-gray-400 mt-0.5">{c.info}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
