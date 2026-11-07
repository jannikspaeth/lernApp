'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { useLocalSetting } from '@/lib/use-local-setting';
import type { Card } from '@/lib/wissen';
import { PER_LEVEL, RATINGS, TEST, TEST_LEVELS, type TestLevel, type TestQuestion } from '@/lib/wissen/allgemeinwissen-test';
import QuizCard from './QuizCard';
import Icon from '@/components/Icon';

const BEST_KEY = 'lernapp_aw_test_best';

interface Item { level: TestLevel; q: TestQuestion; options: string[] }

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

const SEEN_KEY = 'lernapp_aw_test_seen';

function readSeen(): Set<string> {
  try {
    const v = JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]');
    return new Set(Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : []);
  } catch {
    return new Set();
  }
}

// 10 questions per level, easy first. Questions already asked in earlier runs come back only once
// every question of that level has been asked (then that level starts over).
function draw(): Item[] {
  const seen = readSeen();
  const items = TEST_LEVELS.flatMap(l => {
    const pool = TEST[l.id];
    const fresh = shuffle(pool.filter(q => !seen.has(q[1])));
    let pick = fresh.slice(0, PER_LEVEL);
    if (pick.length < PER_LEVEL) {
      for (const q of pool) seen.delete(q[1]);
      const taken = new Set(pick.map(q => q[1]));
      pick = [...pick, ...shuffle(pool.filter(q => !taken.has(q[1]))).slice(0, PER_LEVEL - pick.length)];
    }
    return pick.map(q => ({ level: l.id, q, options: shuffle([q[2], ...q[3]]) }));
  });
  for (const it of items) seen.add(it.q[1]);
  try { localStorage.setItem(SEEN_KEY, JSON.stringify([...seen])); } catch { /* private mode: repeats are possible */ }
  return items;
}

const isScore = (v: string): v is `${number}` => /^\d+$/.test(v);

// The general-knowledge test: 30 questions getting harder, then a score per level and a rating.
export default function AllgemeinTest() {
  const t = useT();
  const total = PER_LEVEL * TEST_LEVELS.length;
  const [run, setRun] = useState<{ items: Item[]; idx: number; right: TestLevel[] } | null>(null);
  const [bestRaw, setBestRaw] = useLocalSetting<`${number}`>(BEST_KEY, '0', isScore);
  const best = Number(bestRaw);

  useEffect(() => {
    if (!run) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [run]);

  const current = run && run.idx < run.items.length ? run.items[run.idx] : null;
  const finished = run && !current;
  const score = run?.right.length ?? 0;

  const rating = [...RATINGS].reverse().find(r => score >= r.min)!;
  const card = (it: Item): Card => ({ id: it.q[1], q: it.q[1], a: it.q[2], wrong: it.q[3], info: it.q[4] });
  const levelName = (l: TestLevel) => TEST_LEVELS.find(x => x.id === l)!.name;

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        {!run && (
          <>
            <div className="space-y-3">
              <Link href="/wissen/allgemeinwissen" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
                <Icon name="chevronLeft" size={18} /> {t('General knowledge', 'Allgemeinwissen')}
              </Link>
              <div>
                <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">{t('General knowledge test', 'Allgemeinwissen-Test')}</h1>
                <p className="text-sm text-muted mt-1">
                  {t(
                    `${total} questions from geography, history, science, art, literature, music, politics, religion, sport and everyday life – ${PER_LEVEL} easy, ${PER_LEVEL} medium, ${PER_LEVEL} hard. At the end you get your rating.`,
                    `${total} Fragen aus Geografie, Geschichte, Wissenschaft, Kunst, Literatur, Musik, Politik, Religion, Sport und Alltag – ${PER_LEVEL} leichte, ${PER_LEVEL} mittlere, ${PER_LEVEL} schwere. Am Ende bekommst du deine Einstufung.`,
                  )}
                </p>
              </div>
            </div>
            <div className="bg-surface rounded-2xl border border-line p-5 space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                {TEST_LEVELS.map(l => (
                  <div key={l.id} className="rounded-xl bg-canvas border border-line py-3">
                    <p className="text-lg font-bold text-ink tabular-nums">{PER_LEVEL}</p>
                    <p className="text-[12px] text-muted">{l.name}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setRun({ items: draw(), idx: 0, right: [] })}
                className="w-full h-12 flex items-center justify-center gap-2 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors"
              >
                {t('Start the test', 'Test starten')} <Icon name="arrowRight" size={18} />
              </button>
              {best > 0 && (
                <p className="text-[13px] text-muted text-center">
                  {t('Your best on this device', 'Dein Bestwert auf diesem Gerät')}: <span className="font-semibold text-ink tabular-nums">{best} / {total}</span>
                </p>
              )}
            </div>
          </>
        )}

        {run && current && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setRun(null)}
                aria-label={t('Stop the test', 'Test abbrechen')}
                className="w-9 h-9 -ml-1 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-surface"
              >
                <Icon name="x" size={20} />
              </button>
              <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full transition-[width] duration-300" style={{ width: `${Math.round((run.idx / run.items.length) * 100)}%` }} />
              </div>
              <span className="text-[13px] font-semibold text-muted tabular-nums">{run.idx + 1}/{run.items.length}</span>
            </div>
            <QuizCard
              key={run.idx}
              card={card(current)}
              label={`${levelName(current.level)} · ${current.q[0]}`}
              options={current.options}
              onResult={ok => {
                const right = ok ? [...run.right, current.level] : run.right;
                if (run.idx + 1 === run.items.length && right.length > best) setBestRaw(`${right.length}`);
                setRun({ ...run, idx: run.idx + 1, right });
              }}
            />
          </div>
        )}

        {run && finished && (
          <div className="bg-surface rounded-2xl border border-line p-6 text-center space-y-5">
            <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-accent-soft text-accent">
              <Icon name="trophy" size={28} strokeWidth={2} />
            </div>
            <div>
              <p className="text-3xl font-bold text-ink tabular-nums">{score} / {total}</p>
              <p className="text-lg font-semibold text-accent mt-1">{rating.title}</p>
              <p className="text-sm text-muted mt-1 max-w-sm mx-auto">{rating.text}</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {TEST_LEVELS.map(l => (
                <div key={l.id} className="rounded-xl bg-canvas border border-line py-3">
                  <p className="text-lg font-bold text-ink tabular-nums">{run.right.filter(x => x === l.id).length}/{PER_LEVEL}</p>
                  <p className="text-[12px] text-muted">{l.name}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 justify-center">
              <Link href="/wissen/allgemeinwissen" className="h-11 px-4 flex items-center border border-line hover:bg-canvas text-ink rounded-xl text-sm font-medium transition-colors">
                {t('Practise topics', 'Themen üben')}
              </Link>
              <button onClick={() => setRun({ items: draw(), idx: 0, right: [] })} className="h-11 px-4 bg-accent hover:bg-accent-strong text-white rounded-xl text-sm font-semibold transition-colors">
                {t('New test', 'Neuer Test')}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
