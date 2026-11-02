'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { scoreResult, type Persona } from '@/lib/persoenlichkeit';
import Icon from '@/components/Icon';

export interface ResultView {
  id: string;
  src: string | null;
  credit: string;
  href: string;
}

// One "Who are you?" quiz: one question at a time, no right or wrong; the result links to its chapter.
export default function PersonaQuiz({ persona, views }: { persona: Persona; views: Record<string, ResultView> }) {
  const t = useT();
  const [picks, setPicks] = useState<number[]>([]);
  const done = picks.length === persona.questions.length;
  const q = persona.questions[picks.length];

  useEffect(() => {
    if (done || picks.length === 0) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [done, picks.length]);

  const result = done ? scoreResult(persona, picks) : null;
  const view = result ? views[result.id] : null;

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        {!done && (
          <>
            {picks.length === 0 ? (
              <div className="space-y-3">
                <Link href="/persoenlichkeit" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
                  <Icon name="chevronLeft" size={18} /> {t('Who are you?', 'Wer bist du?')}
                </Link>
                <div>
                  <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">{persona.title}</h1>
                  <p className="text-sm text-muted mt-1">{persona.blurb}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPicks([])}
                  aria-label={t('Start over', 'Neu beginnen')}
                  className="w-9 h-9 -ml-1 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-surface"
                >
                  <Icon name="x" size={20} />
                </button>
                <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full transition-[width] duration-300" style={{ width: `${Math.round((picks.length / persona.questions.length) * 100)}%` }} />
                </div>
                <span className="text-[13px] font-semibold text-muted tabular-nums">{picks.length + 1}/{persona.questions.length}</span>
              </div>
            )}
            <div className="space-y-4">
              <p className="text-xl md:text-[22px] text-ink leading-snug font-semibold tracking-tight">{q.q}</p>
              <div className="grid gap-2">
                {q.options.map(([text], i) => (
                  <button
                    key={text}
                    onClick={() => setPicks(p => [...p, i])}
                    className="min-h-13 px-4 py-3 rounded-xl border border-line bg-surface text-[15px] font-medium text-left text-ink hover:border-accent/50 hover:bg-accent-soft/40 transition-colors"
                  >
                    {text}
                  </button>
                ))}
              </div>
              {picks.length > 0 && (
                <button onClick={() => setPicks(p => p.slice(0, -1))} className="inline-flex items-center gap-1 h-9 text-sm font-medium text-muted hover:text-ink">
                  <Icon name="chevronLeft" size={16} /> {t('Previous question', 'Vorige Frage')}
                </button>
              )}
            </div>
          </>
        )}

        {result && view && (
          <div className="space-y-4">
            <Link href="/persoenlichkeit" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
              <Icon name="chevronLeft" size={18} /> {t('Who are you?', 'Wer bist du?')}
            </Link>
            <div className="bg-surface rounded-2xl border border-line overflow-hidden">
              {view.src && (
                // eslint-disable-next-line @next/next/no-img-element -- local pictures
                <img src={view.src} alt={result.name} className="w-full max-h-96 object-cover object-top bg-canvas" />
              )}
              <div className="p-5 space-y-3">
                <p className="text-xs font-semibold text-muted uppercase tracking-wider">{t('Your result', 'Dein Ergebnis')}</p>
                <div>
                  <h1 className="text-[26px] md:text-3xl font-bold text-ink tracking-tight">{result.name}</h1>
                  <p className="text-accent font-semibold mt-0.5">{result.tag}</p>
                </div>
                <p className="text-[15px] text-ink leading-relaxed">{result.text}</p>
                {view.credit && <p className="text-xs text-faint">{view.credit}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link href={view.href} className="h-12 flex items-center justify-center gap-2 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-colors">
                {t(`Read about ${result.name}`, `Mehr über ${result.name}`)} <Icon name="arrowRight" size={18} />
              </Link>
              <button onClick={() => setPicks([])} className="h-12 border border-line bg-surface hover:bg-canvas text-ink rounded-xl font-medium transition-colors">
                {t('Play again', 'Nochmal spielen')}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
