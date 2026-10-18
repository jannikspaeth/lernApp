'use client';

import { useState, useEffect, useCallback } from 'react';
import { GRAMMAR_LEVELS, GrammarTopic } from '@/lib/grammar-exercises';
import { LESSONS_BY_LANG, TOPICS_BY_LANG } from '@/lib/grammar-by-lang';
import { getGrammarRecords, recordExercise } from '@/lib/storage';
import { GrammarRecord } from '@/lib/types';
import { useLearner } from '@/lib/use-profile';
import { langInfo } from '@/lib/lang';
import { X, BookMarked, ChevronRight } from 'lucide-react';
import GrammarExercise from '@/components/exercises/GrammarExercise';
import SpeakButton from '@/components/SpeakButton';
import Icon from '@/components/LangIcon';
import { useT } from '@/lib/ui-lang';

type Tab = 'exercises' | 'lessons';

export default function GrammarPage() {
  const { profile, lang, ready } = useLearner();
  const t = useT();
  const GRAMMAR_LESSONS = LESSONS_BY_LANG[lang];
  const GRAMMAR_TOPICS = TOPICS_BY_LANG[lang];
  const hasExercises = GRAMMAR_TOPICS.length > 0;
  const [tabChoice, setTab] = useState<Tab>('exercises');
  const tab: Tab = hasExercises ? tabChoice : 'lessons';
  // First lesson open by default; the rest collapsed.
  const [open, setOpen] = useState<Set<string>>(new Set([GRAMMAR_LESSONS[0]?.id]));
  const [records, setRecords] = useState<GrammarRecord[]>([]);
  const [practicing, setPracticing] = useState<string | null>(null);
  const [showMistakes, setShowMistakes] = useState<Set<string>>(new Set());

  const refresh = useCallback(async () => setRecords(await getGrammarRecords()), []);
  useEffect(() => { refresh(); }, [refresh]);

  // Focus mode while practising a topic: the tab bar steps aside (see globals.css).
  const focused = practicing !== null && tab === 'exercises';
  useEffect(() => {
    if (!focused) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [focused]);

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-canvas flex items-center justify-center">
        <p className="text-muted text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const recordOf = new Map(records.map(r => [r.id, r]));
  const mastered = GRAMMAR_TOPICS.filter(t => recordOf.get(t.id)?.mastered).length;
  const active = practicing ? GRAMMAR_TOPICS.find(t => t.id === practicing) : undefined;
  // Languages whose lessons carry a level get them grouped A1 / A2 / B1.
  const lessonsByLevel = GRAMMAR_LESSONS.every(l => l.level);

  function toggle(set: Set<string>, update: (s: Set<string>) => void, id: string) {
    const next = new Set(set);
    if (next.has(id)) next.delete(id); else next.add(id);
    update(next);
  }

  function openLesson(id: string) {
    setPracticing(null);
    setTab('lessons');
    setOpen(prev => new Set(prev).add(id));
  }

  async function handleComplete(correct: number, total: number) {
    await recordExercise('grammar', correct, total).catch(() => {});
    await refresh();
  }

  function topicCard(tp: GrammarTopic) {
    const rec = recordOf.get(tp.id);
    const pct = rec && rec.lastTotal > 0 ? Math.round((rec.lastCorrect / rec.lastTotal) * 100) : null;
    const lesson = tp.lessonId ? GRAMMAR_LESSONS.find(l => l.id === tp.lessonId) : undefined;
    return (
      <div
        key={tp.id}
        className="bg-surface rounded-xl border border-line shadow-sm p-4 space-y-3"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-semibold text-ink flex items-center gap-2">
              <Icon name={tp.icon} className="w-4 h-4 text-bad" />
              <span>{tp.title}</span>
            </p>
            <p className="text-xs text-muted mt-0.5">
              {tp.items.length} {t('sentences', 'Sätze')}
              {rec && ` · ${rec.totalAttempts}× ${t('practised', 'geübt')}`}
              {rec?.mastered && ` · ${t('mastered', 'gemeistert')}`}
            </p>
          </div>
          <button
            onClick={() => setPracticing(tp.id)}
            className="shrink-0 text-sm font-medium px-3 py-1.5 rounded-lg bg-accent-soft text-accent hover:bg-accent-soft transition-colors"
          >
            {rec ? t('Practise', 'Üben') : t('Start', 'Starten')}
          </button>
        </div>

        {pct !== null && (
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-line-soft rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${pct === 100 ? 'bg-good' : pct >= 70 ? 'bg-warn' : 'bg-accent/70'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs text-muted tabular-nums">
              {t('last', 'zuletzt')} {rec!.lastCorrect}/{rec!.lastTotal}
            </span>
          </div>
        )}

        <div className="flex items-center gap-3 text-xs">
          {lesson && (
            <button onClick={() => openLesson(lesson.id)} className="text-accent hover:underline">
              <BookMarked className="inline w-3.5 h-3.5 -mt-0.5" /> {t('Lesson', 'Lektion')}: {lesson.title}
            </button>
          )}
          {rec && rec.recentMistakes.length > 0 && (
            <button
              onClick={() => toggle(showMistakes, setShowMistakes, tp.id)}
              className="text-accent hover:underline"
            >
              {(() => {
                const n = rec.recentMistakes.length;
                const en = `${n} mistake${n === 1 ? '' : 's'}`;
                return showMistakes.has(tp.id)
                  ? t(`Hide ${en}`, `${n} Fehler ausblenden`)
                  : t(`Show ${en}`, `${n} Fehler anzeigen`);
              })()}
            </button>
          )}
        </div>

        {rec && showMistakes.has(tp.id) && (
          <div className="space-y-1 pt-1">
            {rec.recentMistakes.map((m, i) => (
              <p key={i} className="text-xs text-muted">
                {m.prompt.replace('___', '＿')}{' '}
                <span className="text-bad line-through">{m.userAnswer || '–'}</span>{' '}
                <span className="text-good font-medium">{m.correct}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }

  function renderLesson(lesson: (typeof GRAMMAR_LESSONS)[number]) {
    const isOpen = open.has(lesson.id);
    return (
      <section
        key={lesson.id}
        className="bg-surface rounded-2xl border border-line shadow-sm overflow-hidden"
      >
        <button
          onClick={() => toggle(open, setOpen, lesson.id)}
          className="w-full flex items-center justify-between gap-3 p-5 text-left hover:bg-canvas transition-colors"
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <Icon name={lesson.icon} className="w-5 h-5 shrink-0 text-red-700" />
            <span className="min-w-0">
              <span className="block font-bold text-ink text-base">{lesson.title}</span>
              <span className="block text-xs text-muted mt-0.5">{lesson.intro}</span>
            </span>
          </span>
          <ChevronRight
            className={`w-4 h-4 text-faint transition-transform shrink-0 ${isOpen ? 'rotate-90' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="px-5 pb-5 space-y-4 border-t border-line-soft pt-4">
            {lesson.sections.map((s, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">
                  {s.heading}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.body}</p>
                {s.examples && s.examples.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {s.examples.map((ex, j) => (
                      <div
                        key={j}
                        className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 bg-canvas rounded-lg px-3 py-2"
                      >
                        <SpeakButton text={ex.target} lang={lang} className="self-center" />
                        <span className="font-semibold text-ink text-sm">{ex.target}</span>
                        <span className="text-faint text-sm">→</span>
                        <span className="text-muted text-sm">{ex.de}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  // Practising a topic: nothing but the exercise (focus mode).
  if (focused && active) {
    return (
      <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPracticing(null)}
              aria-label={t('All topics', 'Alle Themen')}
              title={t('All topics', 'Alle Themen')}
              className="w-11 h-11 -ml-2 shrink-0 rounded-full flex items-center justify-center text-muted hover:bg-line-soft transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t('Grammar', 'Grammatik')} · {active.level}
            </p>
          </div>
          <h1 className="text-3xl text-ink">{active.title}</h1>
          <GrammarExercise
            key={active.id}
            topic={active}
            lang={lang}
            onComplete={handleComplete}
            onDone={() => setPracticing(null)}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-3xl text-ink">{t('Grammar', 'Grammatik')}</h1>
          <p className="text-muted text-sm mt-0.5">
            {tab === 'exercises'
              ? t(`${mastered} of ${GRAMMAR_TOPICS.length} topics mastered · A1 to B1`, `${mastered} von ${GRAMMAR_TOPICS.length} Themen gemeistert · A1 bis B1`)
              : lessonsByLevel
                ? t(`${GRAMMAR_LESSONS.length} lessons from A1 to B1 – short explanations with examples to listen to.`, `${GRAMMAR_LESSONS.length} Lektionen von A1 bis B1 – kurz erklärt, mit Beispielen zum Anhören.`)
                : t(`First steps in ${langInfo(lang).name} – explained in German.`, `Die ersten Schritte auf ${langInfo(lang).nameDe} – kurz erklärt.`)}
          </p>
        </div>

        {hasExercises && (
        <div className="flex gap-1 bg-line-soft rounded-xl p-1">
          {([
            ['exercises', t('Exercises', 'Übungen')],
            ['lessons', t('Lessons', 'Lektionen')],
          ] as [Tab, string][]).map(([id, label]) => (
            <button
              key={id}
              onClick={() => { setTab(id); setPracticing(null); }}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                tab === id ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        )}

        {/* ===== EXERCISES ===== */}
        {tab === 'exercises' && (
          <div className="space-y-6">
            {GRAMMAR_LEVELS.map(level => {
              const topics = GRAMMAR_TOPICS.filter(t => t.level === level.id);
              const done = topics.filter(t => recordOf.get(t.id)?.mastered).length;
              return (
                <section key={level.id} className="space-y-3">
                  <h2 className="flex items-baseline justify-between px-1">
                    <span className="text-sm font-bold text-ink">{level.label}</span>
                    <span className="text-xs text-muted">{done}/{topics.length} {t('mastered', 'gemeistert')}</span>
                  </h2>
                  {topics.map(topicCard)}
                </section>
              );
            })}
          </div>
        )}

        {/* ===== LESSONS ===== */}
        {tab === 'lessons' &&
          (lessonsByLevel
            ? GRAMMAR_LEVELS.map(level => {
                const lessons = GRAMMAR_LESSONS.filter(l => l.level === level.id);
                if (lessons.length === 0) return null;
                return (
                  <section key={level.id} className="space-y-3">
                    <h2 className="text-sm font-bold text-ink px-1">{level.label}</h2>
                    {lessons.map(renderLesson)}
                  </section>
                );
              })
            : GRAMMAR_LESSONS.map(renderLesson))}
      </div>
    </main>
  );
}
