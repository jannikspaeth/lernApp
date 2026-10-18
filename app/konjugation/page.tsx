'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { getConjugationRecords, recordExercise, recordMistakes } from '@/lib/storage';
import { ConjugationRecord, ConjugationExercise } from '@/lib/types';
import { X, PartyPopper, SpellCheck, ChevronDown, TriangleAlert, Check } from 'lucide-react';
import Conjugation from '@/components/exercises/Conjugation';
import { TENSES_BY_LANG, defaultTenses, TENSE_STORAGE_KEY, TENSE_VALIDATORS } from '@/lib/tenses';
import { useLocalSetting } from '@/lib/use-local-setting';
import { useVerbShort } from '@/lib/use-verb-short';
import { hasCompoundTense, shortenExercise } from '@/lib/verb-parts';
import { useLearner } from '@/lib/use-profile';
import { usePack } from '@/lib/content';
import { getConjugationExercise } from '@/lib/conjugation-client';
import { useT, useUiLang, tenseName, T } from '@/lib/ui-lang';
import { dueVerbs, isVerbDue, verbDueDate } from '@/lib/verb-review';
import { pickRoundVerbs } from '@/lib/daily-round';
import { pickVerbStep, CLOZE_TEMPLATES_BY_LANG, VerbStep } from '@/lib/verb-cloze';
import { verbMistake } from '@/lib/mistakes';
import VerbClozeCard from '@/components/practice/VerbClozeCard';

type Tab = 'lernen' | 'all' | 'satze' | 'mistakes';
const SENTENCE_ROUND_SIZE = 8;
type VerbSort = 'alpha' | 'accuracy' | 'recent' | 'practiced';

// Score of the most recent attempt only (not lifetime cumulative). Each section
// stores the last attempt's questions (`pronouns`) and mistakes (`recentMistakes`),
// so the last try's correct count is `pronouns.length - recentMistakes.length` —
// consistent with how `mastered` is derived.
function lastTry(r: ConjugationRecord): { correct: number; total: number; pct: number } {
  let correct = 0;
  let total = 0;
  for (const s of r.sections) {
    const q = s.pronouns.length;
    total += q;
    correct += Math.max(0, q - s.recentMistakes.length);
  }
  return { correct, total, pct: total > 0 ? Math.round((correct / total) * 100) : 0 };
}

function accuracyOf(r: ConjugationRecord): number {
  const { correct, total } = lastTry(r);
  return total > 0 ? correct / total : 0;
}

function timeAgo(iso: string, t: T): string {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);
  if (min < 1) return t('just now', 'gerade eben');
  if (min < 60) return t(`${min} min. ago`, `vor ${min} Min.`);
  if (h < 24) return t(`${h} hr. ago`, `vor ${h} Std.`);
  return t(`${d} day${d === 1 ? '' : 's'} ago`, `vor ${d} Tag${d === 1 ? '' : 'en'}`);
}

function timeUntil(ms: number, t: T): string {
  const d = Math.ceil((ms - Date.now()) / 86400000);
  return d <= 1 ? t('tomorrow', 'morgen') : t(`in ${d} days`, `in ${d} Tagen`);
}

function TotalBar({ record }: { record: ConjugationRecord }) {
  const { pct } = lastTry(record);
  const color = pct === 100 ? 'bg-good' : pct >= 70 ? 'bg-warn' : 'bg-accent/70';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-line-soft rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-muted tabular-nums">{pct}%</span>
    </div>
  );
}

export default function KonjugationPage() {
  const { profile, lang, beginner, ready } = useLearner();
  const verbPack = usePack('verbs', lang);
  const t = useT();
  const [uiLang] = useUiLang();

  const [records, setRecords] = useState<ConjugationRecord[]>([]);
  // Verbs finished in this visit — known even while their save is still running.
  const doneHere = useRef<Set<string>>(new Set());
  const [tab, setTab] = useState<Tab>('lernen');
  const [practicing, setPracticing] = useState<string | null>(null);
  const [exercise, setExercise] = useState<ConjugationExercise | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  // "Sätze" tab: a short round of cloze sentences instead of the full table.
  const [clozeSteps, setClozeSteps] = useState<VerbStep[] | null>(null);
  const [clozeIdx, setClozeIdx] = useState(0);
  const [clozeTally, setClozeTally] = useState({ c: 0, t: 0 });
  const [clozeLoading, setClozeLoading] = useState(false);
  // Ordered list of active sort keys; each is a tie-breaker for the previous one.
  const [tenseChoice, setTenseChoice] = useLocalSetting<string>(TENSE_STORAGE_KEY[lang], '', TENSE_VALIDATORS[lang]);
  const [short, setShort] = useVerbShort();
  const [sorts, setSorts] = useState<{ key: VerbSort; dir: 'asc' | 'desc' }[]>([
    { key: 'recent', dir: 'desc' },
  ]);

  // Click cycles a key: off → natural dir → opposite dir → off. Newly activated
  // keys append as the lowest-priority tie-breaker.
  const naturalDir = (key: VerbSort): 'asc' | 'desc' => (key === 'alpha' ? 'asc' : 'desc');
  function cycleSort(key: VerbSort) {
    setSorts(prev => {
      const i = prev.findIndex(s => s.key === key);
      if (i < 0) return [...prev, { key, dir: naturalDir(key) }];
      const cur = prev[i];
      if (cur.dir === naturalDir(key)) {
        const next = [...prev];
        next[i] = { key, dir: cur.dir === 'asc' ? 'desc' : 'asc' };
        return next;
      }
      return prev.filter(s => s.key !== key); // already flipped → remove
    });
  }

  const refresh = useCallback(async () => setRecords(await getConjugationRecords()), []);
  useEffect(() => { refresh(); }, [refresh]);

  // Focus mode while learning a verb: the tab bar steps aside (see globals.css).
  const learning = practicing === '__new__';
  useEffect(() => {
    if (!learning) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [learning]);

  if (!ready || !profile || !verbPack) {
    return (
      <main className="md:ml-56 min-h-screen bg-canvas flex items-center justify-center">
        <p className="text-muted text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const catalog = verbPack.verbs;
  const TENSES = TENSES_BY_LANG[lang];
  const tenses: string[] = tenseChoice ? tenseChoice.split(',') : defaultTenses(lang, beginner);
  // With the short form on, the compound tense is asked as auxiliary + participle.
  const shortLabels = { aux: t('Auxiliary', 'Hilfsverb'), participle: t('Participle', 'Partizip') };
  const shown = exercise && short ? shortenExercise(lang, exercise, shortLabels) : exercise;

  function toggleTense(id: string) {
    const next = tenses.includes(id) ? tenses.filter(t => t !== id) : [...tenses, id];
    if (next.length === 0) return; // keep at least one tense
    setTenseChoice(TENSES.map(t => t.id).filter(t => next.includes(t)).join(','));
  }

  const withMistakes = records.filter(r =>
    r.sections.some(s => s.recentMistakes.length > 0)
  );
  const cmpBy = (key: VerbSort, a: ConjugationRecord, b: ConjugationRecord): number => {
    if (key === 'alpha') return a.verb.localeCompare(b.verb);
    if (key === 'accuracy') return accuracyOf(a) - accuracyOf(b);
    if (key === 'practiced') return a.totalAttempts - b.totalAttempts;
    return new Date(a.lastAttempted).getTime() - new Date(b.lastAttempted).getTime();
  };
  const displayed = [...(tab === 'mistakes' ? withMistakes : records)].sort((a, b) => {
    for (const { key, dir } of sorts) {
      const cmp = cmpBy(key, a, b);
      if (cmp !== 0) return dir === 'asc' ? cmp : -cmp;
    }
    return 0;
  });
  const mastered = records.filter(r => r.mastered).length;

  const due = dueVerbs(records);
  const learnedVerbs = new Set(records.map(r => r.verb.toLowerCase()));
  const unseenCount = catalog.filter(v => !learnedVerbs.has(v.infinitive.toLowerCase())).length;

  // Next verb in the Learn panel: a given (due) verb, or the next new one.
  async function startNew(verb?: string, known?: string[]) {
    setPracticing('__new__');
    setExercise(null);
    setError('');
    setLoading(true);
    try {
      const knownVerbs = known ?? records.map(r => r.verb);
      setExercise(await getConjugationExercise({ lang, verb, knownVerbs, beginner, tenses }));
    } catch {
      setError(t('Could not load the verb.', 'Das Verb konnte nicht geladen werden.'));
    } finally {
      setLoading(false);
    }
  }

  function toggleExpand(id: string) {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  async function startPractice(record: ConjugationRecord) {
    if (practicing === record.id) {
      setPracticing(null);
      setExercise(null);
      return;
    }
    setPracticing(record.id);
    setExercise(null);
    setError('');
    setLoading(true);

    try {
      setExercise(await getConjugationExercise({ lang, verb: record.verb, beginner, tenses }));
    } catch {
      setError(t('Could not load the verb.', 'Das Verb konnte nicht geladen werden.'));
    } finally {
      setLoading(false);
    }
  }

  // A background save failed: say so (offline writes are queued and don't fail).
  function saveFailed() {
    setError(t('Could not save the last verb.', 'Das letzte Verb konnte nicht gespeichert werden.'));
  }

  // "Sätze" tab: a short round of cloze sentences (tense hidden, inferred from
  // context) across a handful of verbs. Only wrong answers go to "My mistakes";
  // unlike the table, this doesn't move the verbs' review schedule.
  async function startSentences() {
    setClozeLoading(true);
    setError('');
    try {
      const verbs = pickRoundVerbs(records, catalog, SENTENCE_ROUND_SIZE);
      const exercises = await Promise.all(
        verbs.map(v => getConjugationExercise({ lang, verb: v, beginner, tenses }).catch(() => null)),
      );
      const templates = CLOZE_TEMPLATES_BY_LANG[lang];
      const steps = exercises
        .filter((ex): ex is ConjugationExercise => !!ex?.sections?.length)
        .map(ex => {
          const rec = records.find(r => r.verb === ex.verb);
          return pickVerbStep(ex, templates, {
            forceCloze: true,
            missedPronoun: tense => rec?.sections.find(rs => rs.tense === tense)?.recentMistakes[0]?.pronoun,
          });
        });
      setClozeSteps(steps);
      setClozeIdx(0);
      setClozeTally({ c: 0, t: 0 });
    } catch {
      setError(t('Could not load the sentences.', 'Die Sätze konnten nicht geladen werden.'));
    } finally {
      setClozeLoading(false);
    }
  }

  function handleClozeResult(correct: boolean, userAnswer: string) {
    const step = clozeSteps![clozeIdx];
    if (!correct) recordMistakes([verbMistake({ ...step, userAnswer })]);
    const tally = { c: clozeTally.c + (correct ? 1 : 0), t: clozeTally.t + 1 };
    setClozeTally(tally);
    const next = clozeIdx + 1;
    setClozeIdx(next);
    if (next >= clozeSteps!.length) {
      recordExercise('conjugation', tally.c, tally.t).catch(() => {});
    }
  }

  // "Save & next verb" in Learn: the next due (or new) verb opens at once while
  // the result is stored in the background.
  function handleLearnComplete(correct: number, total: number, saved: Promise<ConjugationRecord[]>) {
    if (exercise) doneHere.current.add(exercise.verb);
    const nextDue = dueVerbs(records).find(r => !doneHere.current.has(r.verb));
    const known = [...new Set([...records.map(r => r.verb), ...doneHere.current])];
    startNew(nextDue?.verb, known);
    saved.then(setRecords, saveFailed);
    recordExercise('conjugation', correct, total).catch(() => {});
  }

  // Reviewing a verb from the list: close the panel, save in the background.
  function handleReviewComplete(correct: number, total: number, saved: Promise<ConjugationRecord[]>) {
    setPracticing(null);
    setExercise(null);
    saved.then(setRecords, saveFailed);
    recordExercise('conjugation', correct, total).catch(() => {});
  }

  // Learning a verb: nothing but the drill (focus mode).
  if (learning) {
    const stop = () => { setPracticing(null); setExercise(null); };
    return (
      <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-4">
          <div className="flex items-center gap-3">
            <button
              onClick={stop}
              aria-label={t('Finish', 'Beenden')}
              title={t('Finish', 'Beenden')}
              className="w-11 h-11 -ml-2 shrink-0 rounded-full flex items-center justify-center text-muted hover:bg-line-soft transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <p className="flex-1 text-xs font-semibold uppercase tracking-wider text-muted">
              {t('Verbs', 'Verben')} · {catalog.length - unseenCount}/{catalog.length} {t('learned', 'gelernt')}
            </p>
            {exercise && !loading && (
              <button
                onClick={() => startNew(due.find(r => r.verb !== exercise.verb)?.verb)}
                className="text-xs font-semibold text-muted hover:text-ink px-2 py-2"
              >
                {t('Skip', 'Überspringen')}
              </button>
            )}
          </div>
          {loading && (
            <p className="text-center text-sm text-muted animate-pulse py-4">{t('Loading…', 'Lädt …')}</p>
          )}
          {error && <div className="bg-bad-soft rounded-xl p-3 text-sm text-bad">{error}</div>}
          {exercise && !loading && (
            <Conjugation
              key={`${exercise.verb}-${short ? 'short' : 'full'}`}
              exercise={shown!}
              lang={lang}
              onComplete={handleLearnComplete}
              continueLabel={t('Save & next verb', 'Speichern & nächstes Verb')}
            />
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-3xl text-ink">{t('Verbs', 'Verben')}</h1>
          <p className="text-muted text-sm mt-0.5">
            {t('Practice conjugations and review mistakes', 'Konjugieren üben und Fehler wiederholen')}
          </p>
        </div>

        {/* Tense picker */}
        <div className="bg-surface rounded-xl border border-line shadow-sm p-4 space-y-2">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide">{t('Tenses to practise', 'Zeitformen zum Üben')}</p>
          <div className="flex flex-wrap gap-1.5">
            {TENSES.map(t => {
              const on = tenses.includes(t.id);
              return (
                <button
                  key={t.id}
                  onClick={() => { toggleTense(t.id); setPracticing(null); setExercise(null); }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    on ? 'bg-accent text-white' : 'bg-line-soft text-muted hover:bg-line'
                  }`}
                >
                  {t.label}
                  <span className={`ml-1 text-[10px] ${on ? 'opacity-70' : 'text-muted'}`}>{t.level}</span>
                </button>
              );
            })}
          </div>
          {hasCompoundTense(lang, tenses) && (
            <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
              <input
                type="checkbox"
                checked={short}
                onChange={e => { setShort(e.target.checked); setPracticing(null); setExercise(null); }}
                className="mt-0.5 w-4 h-4 accent-red-700"
              />
              <span className="text-xs text-gray-600 leading-snug">
                <span className="font-semibold text-gray-800">
                  {t('Compound tense: just the parts', 'Zusammengesetzte Zeit: nur die Bausteine')}
                </span>
                <span className="block text-gray-400">
                  {t(
                    'Asks the auxiliary and the participle once instead of all six persons.',
                    'Fragt Hilfsverb und Partizip einmal ab statt aller sechs Personen.',
                  )}
                </span>
              </span>
            </label>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface rounded-xl p-3 border border-line shadow-sm text-center">
            <p className="text-xl font-bold text-ink">{records.length}</p>
            <p className="text-xs text-muted mt-0.5">{t('Verbs learned', 'Verben gelernt')}</p>
          </div>
          <div className="bg-surface rounded-xl p-3 border border-line shadow-sm text-center">
            <p className="text-xl font-bold text-good">{mastered}</p>
            <p className="text-xs text-muted mt-0.5">{t('Mastered', 'Gemeistert')}</p>
          </div>
          <div className="bg-surface rounded-xl p-3 border border-line shadow-sm text-center">
            <p className="text-xl font-bold text-bad">{withMistakes.length}</p>
            <p className="text-xs text-muted mt-0.5">{t('With errors', 'Mit Fehlern')}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-line-soft rounded-xl p-1">
          {([
            ['lernen', t('Learn', 'Lernen')],
            ['all', t('All Verbs', 'Alle Verben')],
            ['satze', t('Sentences', 'Sätze')],
            ['mistakes', t('Errors', 'Fehler')],
          ] as const).map(([id, label]) => (
            <button
              key={id}
              onClick={() => { setTab(id); setPracticing(null); setExercise(null); }}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                tab === id ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink'
              }`}
            >
              {label}
              {id === 'mistakes' && withMistakes.length > 0 && (
                <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full bg-accent-soft text-accent">
                  {withMistakes.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Lernen tab ── */}
        {tab === 'lernen' && (
          <div className="bg-surface rounded-xl border border-line shadow-sm p-5 space-y-4">
            <div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-ink">{unseenCount}</span> {t('of', 'von')}{' '}
                <span className="font-semibold text-ink">{catalog.length}</span>{' '}
                {t('verbs not practiced yet', 'Verben noch nicht geübt')}
              </p>
              <div className="mt-2 h-2 bg-line-soft rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all"
                  style={{ width: `${Math.round(((catalog.length - unseenCount) / catalog.length) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-muted mt-1">
                {catalog.length - unseenCount} {t('learned', 'gelernt')} · {mastered} {t('mastered', 'gemeistert')}
              </p>
            </div>

            <div className="space-y-2">
              {due.length > 0 && (
                <button
                  onClick={() => startNew(due[0].verb)}
                  className="w-full py-3 border-2 border-accent text-accent hover:bg-accent-soft rounded-full font-semibold transition-colors"
                >
                  {t('Review due verbs', 'Fällige Verben wiederholen')} ({due.length}) →
                </button>
              )}
              <button
                onClick={() => startNew()}
                className="w-full py-3 bg-accent hover:bg-accent-strong text-white rounded-full font-semibold transition-colors"
              >
                {unseenCount > 0 ? t('Learn next verb →', 'Nächstes Verb lernen →') : t('Review random verb →', 'Zufälliges Verb wiederholen →')}
              </button>
              <p className="text-[11px] text-muted text-center">
                {t(
                  'Verbs come back for review: soon after a mistake, less often once you get them right.',
                  'Verben kommen zur Wiederholung zurück: bald nach einem Fehler, seltener, wenn du sie kannst.',
                )}
              </p>
            </div>
          </div>
        )}

        {/* ── Sätze tab ── */}
        {tab === 'satze' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-4">
            {!clozeSteps || clozeIdx >= clozeSteps.length ? (
              <>
                {clozeSteps && clozeIdx >= clozeSteps.length && (
                  <div className="text-center py-2">
                    <PartyPopper className="w-8 h-8 text-red-700 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">
                      {clozeTally.c}/{clozeTally.t} {t('correct', 'richtig')}
                    </p>
                  </div>
                )}
                <p className="text-sm text-gray-500">
                  {t(
                    'A sentence with the verb missing — you have to work out which tense fits, not just the form.',
                    'Ein Satz mit fehlendem Verb – du musst erkennen, welche Zeitform passt, nicht nur die Form.',
                  )}
                </p>
                {error && <div className="bg-red-50 rounded-xl p-3 text-sm text-red-700">{error}</div>}
                <button
                  onClick={startSentences}
                  disabled={clozeLoading}
                  className="w-full py-3 bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white rounded-full font-semibold transition-colors"
                >
                  {clozeLoading
                    ? t('Loading…', 'Lädt …')
                    : clozeSteps
                    ? t('Practice again →', 'Nochmal üben →')
                    : t('Practice verbs in sentences →', 'Verben im Satz üben →')}
                </button>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold text-gray-400 text-center">
                  {clozeIdx + 1}/{clozeSteps.length}
                </p>
                <VerbClozeCard
                  key={clozeIdx}
                  step={clozeSteps[clozeIdx]}
                  lang={lang}
                  onResult={handleClozeResult}
                />
              </>
            )}
          </div>
        )}

        {/* Empty states for other tabs */}
        {(tab === 'all' || tab === 'mistakes') && displayed.length === 0 && (
          <div className="text-center py-14">
            {tab === 'mistakes' ? <PartyPopper className="w-10 h-10 text-accent mx-auto mb-3" /> : <SpellCheck className="w-10 h-10 text-accent mx-auto mb-3" />}
            <p className="text-sm text-muted font-medium">
              {tab === 'mistakes' ? t('No errors – all mastered!', 'Keine Fehler – alles gemeistert!') : t('No verbs practiced yet.', 'Noch keine Verben geübt.')}
            </p>
          </div>
        )}

        {/* Sort controls */}
        {(tab === 'all' || tab === 'mistakes') && displayed.length > 0 && (
          <div className="flex items-center justify-end gap-1 flex-wrap">
            {([
              ['alpha', 'A–Z'],
              ['accuracy', t('Accuracy', 'Genauigkeit')],
              ['practiced', t('Practiced', 'Geübt')],
              ['recent', t('Recent', 'Zuletzt')],
            ] as [VerbSort, string][]).map(([id, label]) => {
              const idx = sorts.findIndex(s => s.key === id);
              const active = idx >= 0;
              const dir = active ? sorts[idx].dir : null;
              return (
                <button
                  key={id}
                  onClick={() => cycleSort(id)}
                  title={t('Tap to add/flip/remove. Multiple can combine.', 'Antippen: hinzufügen/umdrehen/entfernen. Mehrere kombinierbar.')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    active ? 'bg-accent text-white' : 'bg-line-soft text-muted hover:bg-line'
                  }`}
                >
                  {/* priority number only shown when more than one sort is active */}
                  {active && sorts.length > 1 && (
                    <span className="tabular-nums opacity-70 mr-1">{idx + 1}</span>
                  )}
                  {label}{dir ? (dir === 'asc' ? ' ↑' : ' ↓') : ''}
                </button>
              );
            })}
          </div>
        )}

        {/* Verb cards */}
        {(tab === 'all' || tab === 'mistakes') && (
        <div className="space-y-3">
          {displayed.map(record => {
            const isPracticing = practicing === record.id;
            const isExpanded = expanded.has(record.id);
            const totalMistakes = record.sections.reduce(
              (sum, s) => sum + s.recentMistakes.length,
              0
            );

            return (
              <div
                key={record.id}
                className={`bg-surface rounded-xl border-2 shadow-sm transition-colors ${
                  isPracticing ? 'border-accent/40' : 'border-line'
                }`}
              >
                <div className="p-4 space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-ink text-lg">{record.verb}</span>
                        {record.mastered ? (
                          <span className="text-xs bg-good-soft text-good px-2 py-0.5 rounded-md font-medium">
                            <Check className="w-3.5 h-3.5 inline -mt-0.5 mr-0.5" />{t('Mastered', 'Gemeistert')}
                          </span>
                        ) : totalMistakes > 0 ? (
                          <span className="text-xs bg-bad-soft text-bad px-2 py-0.5 rounded-md font-medium">
                            <TriangleAlert className="w-3.5 h-3.5 inline -mt-0.5 mr-0.5" />{totalMistakes} {totalMistakes === 1 ? t('error', 'Fehler') : t('errors', 'Fehler')}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-xs text-muted mt-0.5">
                        {record.sections.length} {t('tenses', 'Zeitformen')} · {record.totalAttempts}× {t('practiced', 'geübt')} ·{' '}
                        {timeAgo(record.lastAttempted, t)} ·{' '}
                        {isVerbDue(record) ? (
                          <span className="text-warn font-medium">{t('due for review', 'fällig')}</span>
                        ) : (
                          <>{t('review', 'Wiederholung')} {timeUntil(verbDueDate(record), t)}</>
                        )}
                      </p>
                    </div>
                    <button
                      onClick={() => startPractice(record)}
                      className={`shrink-0 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        isPracticing
                          ? 'bg-line-soft text-muted'
                          : 'bg-accent-soft text-accent hover:bg-accent-soft'
                      }`}
                    >
                      {isPracticing ? t('Close', 'Schließen') : t('Review', 'Üben')}
                    </button>
                  </div>

                  {/* Accuracy bar */}
                  <TotalBar record={record} />

                  {/* Per-tense breakdown toggle */}
                  <button
                    onClick={() => toggleExpand(record.id)}
                    className="text-xs text-muted hover:text-ink transition-colors"
                  >
                    <span className="inline-flex items-center gap-1">
                      {isExpanded
                        ? t('Hide tenses', 'Zeitformen ausblenden')
                        : t(`Show ${record.sections.length} tenses`, `${record.sections.length} Zeitformen zeigen`)}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="space-y-2 pt-1">
                      {record.sections.map(s => {
                        const pct =
                          s.totalQuestions > 0
                            ? Math.round((s.totalCorrect / s.totalQuestions) * 100)
                            : 0;
                        return (
                          <div key={s.tense} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-muted font-medium">{tenseName(s.tenseName_de, uiLang)}</span>
                              <span
                                className={`font-semibold ${
                                  pct === 100
                                    ? 'text-good'
                                    : pct >= 70
                                    ? 'text-warn'
                                    : 'text-accent'
                                }`}
                              >
                                {s.totalCorrect}/{s.totalQuestions}
                              </span>
                            </div>
                            {s.recentMistakes.length > 0 && (
                              <div className="pl-2 space-y-0.5">
                                {s.recentMistakes.map((m, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs">
                                    <span className="text-muted w-32 shrink-0">{m.pronoun}</span>
                                    <span className="text-bad line-through">{m.userAnswer || '–'}</span>
                                    <span className="text-faint">→</span>
                                    <span className="text-good font-medium">{m.correct}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Inline practice */}
                {isPracticing && (
                  <div className="border-t border-line p-4">
                    {loading && (
                      <p className="text-center text-sm text-muted animate-pulse py-6">
                        {t('Loading exercise…', 'Übung lädt …')}
                      </p>
                    )}
                    {error && (
                      <div className="bg-bad-soft rounded-xl p-3 text-sm text-bad">{error}</div>
                    )}
                    {exercise && !loading && (
                      <Conjugation
                        key={short ? 'short' : 'full'}
                        exercise={shown!}
                        lang={lang}
                        onComplete={handleReviewComplete}
                        continueLabel={t('Save & close', 'Speichern & schließen')}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        )}
      </div>
    </main>
  );
}
