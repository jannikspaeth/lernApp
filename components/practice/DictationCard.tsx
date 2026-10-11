'use client';

import { useEffect, useRef, useState } from 'react';
import { compareDictation, DictationResult } from '@/lib/dictation';
import { speak, SLOW_RATE } from '@/lib/speech';
import type { Lang } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { Volume2, Turtle, Headphones } from 'lucide-react';
import FeedbackBar from './FeedbackBar';

// ─── Dictation (listen → type) ─────────────────────────────────────────────────

export interface DictationItem {
  key: string;
  text: string; // sentence in the target language
  de: string;
}

export default function DictationCard({
  item,
  lang,
  position,
  total,
  onDone,
}: {
  item: DictationItem;
  lang: Lang;
  position: number;
  total: number;
  onDone: (item: DictationItem, typed: string, result: DictationResult) => void;
}) {
  const [typed, setTyped] = useState('');
  const t = useT();
  const [result, setResult] = useState<DictationResult | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Play the sentence as soon as the card appears.
  useEffect(() => {
    speak(item.text, lang);
    inputRef.current?.focus();
  }, [item.text, lang]);

  function check() {
    if (result) return;
    setResult(compareDictation(item.text, typed));
  }

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-sm p-5 space-y-4">
      <div className="flex justify-between text-xs text-muted">
        <span className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-muted"><Headphones className="w-4 h-4" /> {t('Write what you hear', 'Schreib auf, was du hörst')}</span>
        <span className="tabular-nums">{position} / {total}</span>
      </div>

      <div className="flex items-center justify-center gap-3 py-2">
        <button
          type="button"
          onClick={() => speak(item.text, lang)}
          className="h-14 px-6 rounded-full bg-accent hover:bg-accent-strong text-white text-lg font-semibold transition-colors inline-flex items-center gap-2"
        >
          <Volume2 className="w-5 h-5" /> {t('Play', 'Abspielen')}
        </button>
        <button
          type="button"
          onClick={() => speak(item.text, lang, { rate: SLOW_RATE })}
          className="h-14 px-6 rounded-full bg-accent-soft hover:bg-accent-soft text-accent text-lg font-semibold transition-colors inline-flex items-center gap-2"
        >
          <Turtle className="w-5 h-5" /> {t('Slow', 'Langsam')}
        </button>
      </div>

      {!result ? (
        <>
          <textarea
            ref={inputRef}
            value={typed}
            onChange={e => setTyped(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); check(); }
            }}
            rows={2}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder={t('Type the sentence…', 'Schreib den Satz …')}
            className="w-full border border-line rounded-2xl p-3 text-base bg-canvas outline-none focus:border-accent transition-colors resize-none"
          />
          <button
            onClick={check}
            className="w-full h-12 bg-accent hover:bg-accent-strong text-white rounded-full font-semibold transition-colors"
          >
            {t('Check', 'Prüfen')}
          </button>
        </>
      ) : (
        <>
          <div className="rounded-2xl bg-canvas p-3">
            <p className="text-[11px] font-semibold text-muted uppercase tracking-wider">{t('What you wrote', 'Dein Text')}</p>
            <p className="mt-1 text-base leading-relaxed flex flex-wrap gap-x-1.5 gap-y-1">
              {result.words.map((w, i) =>
                w.status === 'ok' ? (
                  <span key={i} className="text-ink">{w.expected}</span>
                ) : w.status === 'accent' ? (
                  <span key={i} className="text-warn underline decoration-dotted" title={`${t('You wrote', 'Du hast geschrieben')}: ${w.typed}`}>
                    {w.expected}
                  </span>
                ) : w.status === 'wrong' ? (
                  <span key={i}>
                    <span className="text-bad line-through">{w.typed}</span>{' '}
                    <span className="text-good font-semibold">{w.expected}</span>
                  </span>
                ) : w.status === 'missing' ? (
                  <span key={i} className="text-good font-semibold bg-good-soft rounded px-0.5">{w.expected}</span>
                ) : (
                  <span key={i} className="text-bad line-through">{w.typed}</span>
                ),
              )}
            </p>
            {result.words.some(w => w.status === 'accent') && (
              <p className="text-[11px] text-warn mt-1.5">{t('Dotted: right word, check the accent.', 'Gepunktet: richtiges Wort, achte auf den Akzent.')}</p>
            )}
          </div>
          <FeedbackBar
            correct={result.perfect}
            title={result.perfect ? t('Perfect!', 'Perfekt!') : t(`${result.correct} of ${result.total} words right`, `${result.correct} von ${result.total} Wörtern richtig`)}
            onNext={() => onDone(item, typed, result)}
          >
            <p className="text-base font-semibold">{item.text}</p>
            <p className="text-sm text-muted italic">{item.de}</p>
          </FeedbackBar>
        </>
      )}
    </div>
  );
}
