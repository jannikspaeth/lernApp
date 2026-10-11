'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { useLocalSetting } from '@/lib/use-local-setting';
import { updateWissen } from '@/lib/storage';
import { applyAnswer } from '@/lib/wissen/progress';
import { LEVELS, questionId, type Level } from '@/lib/laender/types';
import type { RawCard } from '@/lib/wissen/types';
import QuizCard from '@/components/wissen/QuizCard';
import Icon from '@/components/Icon';
import { levelDone, useWissenProgress } from './EventProgress';

type Tab = 'info' | 'quiz';
const isLevel = (v: string): v is Level => v === 'leicht' || v === 'mittel' || v === 'schwer';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// One historic event: info text and a quiz in three levels.
export default function EventView({
  code,
  path,
  text,
  quiz,
  next,
}: {
  code: string;
  path: string; // event id, or <event>.<subtopic>
  text: string[];
  quiz: Record<Level, RawCard[]>;
  next?: { href: string; title: string };
}) {
  const t = useT();
  const [tab, setTab] = useState<Tab>('info');
  const [level, setLevel] = useLocalSetting<Level>('lernapp_land_level', 'leicht', isLevel);
  const [run, setRun] = useState<{ level: Level; order: number[]; idx: number; right: number } | null>(null);
  const prog = useWissenProgress();
  const [doneNow, setDoneNow] = useState<Partial<Record<Level, boolean>>>({});
  const [saveError, setSaveError] = useState(false);

  const done = (l: Level) => doneNow[l] || levelDone(prog, code, path, l, quiz[l].length);

  function start(l: Level) {
    setLevel(l);
    setRun({ level: l, order: shuffle(quiz[l].map((_, i) => i)), idx: 0, right: 0 });
  }

  const current = run && run.idx < run.order.length ? run.order[run.idx] : null;
  const card = run && current != null ? quiz[run.level][current] : null;
  const options = useMemo(() => (card ? shuffle([card[1], ...(card[2] ?? [])]) : []), [card]);

  function answer(correct: boolean) {
    if (!run || current == null) return;
    const id = questionId(code, path, run.level, current);
    updateWissen(p => {
      p.cards[id] = applyAnswer(p.cards[id], correct);
    })
      .then(() => setSaveError(false))
      .catch(() => setSaveError(true));
    const right = run.right + (correct ? 1 : 0);
    const idx = run.idx + 1;
    if (idx >= run.order.length && right === run.order.length) setDoneNow(d => ({ ...d, [run.level]: true }));
    setRun({ ...run, idx, right });
  }

  const tabs: [Tab, string][] = [
    ['info', t('Read', 'Lesen')],
    ['quiz', t('Quiz', 'Quiz')],
  ];
  const minutes = Math.max(1, Math.round(text.join(' ').split(/\s+/).length / 200));

  return (
    <div className="space-y-5">
      <div className="flex bg-surface rounded-xl border border-line p-1 text-sm" role="tablist">
        {tabs.map(([id, name]) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 h-9 rounded-lg font-semibold transition-colors ${tab === id ? 'bg-ink text-canvas' : 'text-muted hover:text-ink'}`}
          >
            {name}
          </button>
        ))}
      </div>

      {tab === 'info' && (
        <div className="space-y-6">
          <p className="flex items-center gap-1.5 text-[13px] font-medium text-muted">
            <Icon name="clock" size={15} /> {t(`${minutes} min read`, `${minutes} Min. Lesezeit`)}
          </p>
          <article className="space-y-4">
            {text.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.75] text-ink/90">{p}</p>
            ))}
          </article>
          <button
            onClick={() => setTab('quiz')}
            className="w-full h-12 flex items-center justify-center gap-2 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors"
          >
            {t('Test yourself', 'Wissen testen')} <Icon name="arrowRight" size={18} />
          </button>
        </div>
      )}

      {tab === 'quiz' && !run && (
        <div className="bg-surface rounded-2xl border border-line p-4 space-y-4">
          <p className="text-sm font-semibold text-ink">{t('Choose a level', 'Schwierigkeit wählen')}</p>
          <div className="grid grid-cols-3 gap-2" role="radiogroup">
            {LEVELS.map(l => (
              <button
                key={l.id}
                role="radio"
                aria-checked={level === l.id}
                onClick={() => setLevel(l.id)}
                className={`h-16 rounded-xl border text-sm font-semibold transition-colors flex flex-col items-center justify-center gap-1 ${
                  level === l.id ? 'border-accent bg-accent-soft text-accent' : 'border-line text-muted hover:bg-canvas'
                }`}
              >
                {t(...l.name)}
                <Icon name={done(l.id) ? 'check' : 'star'} size={16} className={done(l.id) ? 'text-good' : 'text-line'} strokeWidth={2} />
              </button>
            ))}
          </div>
          <button
            onClick={() => start(level)}
            className="w-full h-12 flex items-center justify-center gap-2 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors"
          >
            {t(`Start · ${quiz[level].length} questions`, `Starten · ${quiz[level].length} Fragen`)} <Icon name="arrowRight" size={18} />
          </button>
          <p className="text-xs text-muted">
            {t('A check mark means: every question of this level answered correctly.', 'Ein Haken heißt: alle Fragen dieser Stufe richtig beantwortet.')}
          </p>
        </div>
      )}

      {tab === 'quiz' && run && card && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setRun(null)}
              aria-label={t('Finish quiz', 'Quiz beenden')}
              className="w-9 h-9 -ml-1 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-surface"
            >
              <Icon name="x" size={20} />
            </button>
            <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full transition-[width] duration-300" style={{ width: `${(run.idx / run.order.length) * 100}%` }} />
            </div>
            <span className="text-[13px] font-semibold text-muted tabular-nums">{run.idx + 1}/{run.order.length}</span>
          </div>
          <QuizCard
            key={`${run.level}-${current}-${run.idx}`}
            card={{ id: questionId(code, path, run.level, current!), q: card[0], a: card[1], ...(card[3] ? { info: card[3] } : {}) }}
            label={t(...LEVELS.find(l => l.id === run.level)!.name)}
            options={options}
            onResult={answer}
          />
        </div>
      )}

      {tab === 'quiz' && run && !card && (
        <div className="bg-surface rounded-2xl border border-line p-6 text-center space-y-4">
          <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center ${run.right === run.order.length ? 'bg-good-soft text-good' : 'bg-accent-soft text-accent'}`}>
            <Icon name={run.right === run.order.length ? 'check' : 'target'} size={28} strokeWidth={2} />
          </div>
          <div>
            <p className="text-3xl font-bold text-ink tabular-nums">{run.right} / {run.order.length}</p>
            <p className="text-sm text-muted mt-1">{t('correct answers', 'richtige Antworten')}</p>
          </div>
          {run.right === run.order.length && (
            <p className="text-sm font-semibold text-good">{t('Level complete!', 'Stufe geschafft!')}</p>
          )}
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => start(run.level)} className="h-11 px-4 border border-line hover:bg-canvas text-ink rounded-xl text-sm font-medium">
              {t('Again', 'Nochmal')}
            </button>
            {run.level !== 'schwer' && (
              <button
                onClick={() => start(run.level === 'leicht' ? 'mittel' : 'schwer')}
                className="h-11 px-4 bg-accent hover:bg-accent-strong text-white rounded-xl text-sm font-semibold"
              >
                {t('Next level', 'Nächste Stufe')}
              </button>
            )}
            {next && (
              <Link href={next.href} className="h-11 px-4 inline-flex items-center gap-1.5 bg-ink hover:bg-ink/85 text-canvas rounded-xl text-sm font-semibold">
                <span className="max-w-[14rem] truncate">{next.title}</span> <Icon name="arrowRight" size={16} />
              </Link>
            )}
          </div>
        </div>
      )}

      {saveError && (
        <p className="text-sm text-bad">{t('Progress could not be saved.', 'Der Fortschritt konnte nicht gespeichert werden.')}</p>
      )}
    </div>
  );
}
