'use client';

import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { MIX, SUBJECTS, allCards } from '@/lib/wissen';
import { summarize } from '@/lib/wissen/progress';
import type { FachTile } from '@/lib/wissen/faecher';
import { useWissenProgress } from '@/components/laender/EventProgress';
import { ContinueCard } from '@/components/wissen/TileWall';
import Icon, { SUBJECT_ICONS } from '@/components/Icon';

// The subject overview: one picture tile per subject, progress over chapters, cards and geography quizzes.
export default function FaecherWall({ tiles }: { tiles: Record<string, Omit<FachTile, 'id'>> }) {
  const t = useT();
  const prog = useWissenProgress();
  const mix = prog ? summarize(allCards(MIX), prog) : null;

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">{t('Subjects', 'Fächer')}</h1>
        <p className="text-sm text-muted mt-1">{t('History, art, science and more – chapters, pictures and quizzes.', 'Geschichte, Kunst, Wissenschaft und mehr – mit Kapiteln, Bildern und Quiz.')}</p>
      </header>

      <ContinueCard prefix="/" label={t('Pick up where you left off', 'Weiter, wo du warst')} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {SUBJECTS.map((s, i) => {
          const f = tiles[s.id];
          const cards = prog ? summarize(allCards(s), prog) : null;
          let pct: number | null = null;
          if (prog && cards && f) {
            let done = cards.mastered;
            let total = cards.total + f.deepTotal + f.geoTotal;
            if (f.prefixes.length) {
              for (const [k, c] of Object.entries(prog.cards)) {
                if (c.r > 0 && k.startsWith('land.') && f.prefixes.some(p => k.startsWith(p))) done++;
              }
            }
            if (f.geoTotal) {
              // Politik's typed lists are stored with the geography bests, under `pol-` ids.
              for (const [id, b] of Object.entries(prog.geo ?? {})) if (id.startsWith('pol-') === (s.id === 'politik')) done += b.solved;
            }
            total = Math.max(total, done);
            pct = total ? Math.round((done / total) * 100) : 0;
          }
          return (
            <Link
              key={s.id}
              href={`/wissen/${s.id}`}
              className={`group relative block aspect-[4/5] rounded-2xl overflow-hidden border border-line ${s.color.bg} focus-visible:outline-2 focus-visible:outline-accent`}
            >
              {f?.cover && (
                // eslint-disable-next-line @next/next/no-img-element -- local cover pictures
                <img
                  src={f.cover}
                  alt=""
                  aria-hidden="true"
                  loading={i < 4 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${f.pos === 'center' ? 'object-center' : 'object-top'}`}
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/5" />
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-2">
                <span className="w-8 h-8 rounded-xl bg-black/35 backdrop-blur-sm text-white flex items-center justify-center ring-1 ring-white/20">
                  <Icon name={SUBJECT_ICONS[s.id] ?? 'book'} size={17} />
                </span>
                {cards && cards.due > 0 && (
                  <span className="text-[11px] font-semibold tabular-nums text-white bg-warn/90 rounded-full px-2 py-0.5">
                    {cards.due} {t('due', 'fällig')}
                  </span>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                <p className="font-bold text-[19px] leading-tight tracking-tight">{t(...s.name)}</p>
                <p className="text-[12px] text-white/80 mt-0.5 leading-snug">{f ? t(...f.sub) : t(...s.blurb)}</p>
                <div className="flex items-center gap-2 mt-2.5">
                  <div className="flex-1 h-1 rounded-full bg-white/25 overflow-hidden">
                    <div className="h-full rounded-full bg-white" style={{ width: `${pct ?? 0}%` }} />
                  </div>
                  {pct != null && pct > 0 && <span className="text-[11px] font-semibold tabular-nums text-white/90">{pct} %</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href="/wissen/mix"
        className="flex items-center gap-4 p-4 rounded-2xl bg-ink hover:bg-ink/85 text-canvas transition-colors"
      >
        <span className="w-10 h-10 rounded-xl bg-canvas/15 flex items-center justify-center shrink-0">
          <Icon name="shuffle" size={20} />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-semibold">{t('Mixed round', 'Gemischte Runde')}</span>
          <span className="block text-[13px] text-canvas/70">
            {mix && mix.due > 0
              ? t(`${mix.due} questions due — from every subject`, `${mix.due} Fragen fällig – aus allen Fächern`)
              : t('10 questions from every subject', '10 Fragen quer durch alle Fächer')}
          </span>
        </span>
        <Icon name="arrowRight" size={20} />
      </Link>

      <Link href="/nachrichten" className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-line hover:border-accent/40 transition-colors">
        <span className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
          <Icon name="newspaper" size={20} />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-semibold text-ink">{t('News quiz', 'Nachrichten-Quiz')}</span>
          <span className="block text-[13px] text-muted">{t('Germany and the world: last week, month or half-year', 'Deutschland und die Welt: letzte Woche, letzter Monat, letztes halbes Jahr')}</span>
        </span>
        <Icon name="chevronRight" size={20} className="text-faint" />
      </Link>
    </div>
  );
}
