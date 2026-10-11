import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTINENTS, COUNTRIES, countriesIn, flagUrl } from '@/lib/welt';
import { HISTORY_FETCHED, countryHistory } from '@/lib/welt/geschichte';
import { WikiArticle } from '@/components/welt/History';
import CountryMap from '@/components/welt/CountryMap';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';
import EventStars from '@/components/laender/EventProgress';
import { detailedHistory, quizItems, quizCounts } from '@/lib/laender';

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRIES.map(c => ({ code: c.code.toLowerCase() }));
}

export default async function LandPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const c = COUNTRIES.find(x => x.code.toLowerCase() === code);
  if (!c) notFound();
  const k = CONTINENTS.find(x => x.id === c.continent)!;
  const text = countryHistory(c.code);
  const detailed = detailedHistory(c.code);
  // Neighbours in the alphabetical list of the continent.
  const list = countriesIn(c.continent);
  const i = list.findIndex(x => x.code === c.code);
  const prev = list[i - 1];
  const next = list[i + 1];

  const chapters = detailed ? detailed.epochs.reduce((n, ep) => n + ep.events.reduce((m, ev) => m + (ev.subtopics?.length ?? 1), 0), 0) : 0;

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href={`/weltgeschichte/kontinent/${k.id}`} className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en={k.name[0]} de={k.name[1]} />
          </Link>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
            <img src={flagUrl(c.code)} alt="" className="h-11 w-16 object-cover rounded-lg border border-line" />
            <div className="min-w-0">
              <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight">{c.name}</h1>
              <p className="text-sm text-muted">
                {detailed ? (
                  <><Tx en={`${detailed.epochs.length} epochs · ${chapters} chapters`} de={`${detailed.epochs.length} Epochen · ${chapters} Kapitel`} /></>
                ) : (
                  <>{c.capital && <><Tx en="Capital" de="Hauptstadt" />: {c.capital} · </>}{c.area.toLocaleString('de-DE')} km²</>
                )}
              </p>
            </div>
          </div>
        </div>
        <CountryMap continent={c.continent} code={c.code} />
        {detailed && (
          <section className="space-y-5">
            {detailed.epochs.map((ep, n) => (
              <div key={ep.id} className="space-y-2.5">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-semibold text-accent tabular-nums">{String(n + 1).padStart(2, '0')}</span>
                  <h2 className="font-semibold text-ink flex-1">{ep.name}</h2>
                  <span className="text-[13px] text-muted shrink-0">{ep.period}</span>
                </div>
                <div className="bg-surface rounded-2xl border border-line divide-y divide-line-soft overflow-hidden">
                  {ep.events.map(ev => (
                    <Link
                      key={ev.id}
                      href={`/weltgeschichte/land/${code}/${ev.id}`}
                      className="flex items-center gap-3 px-4 py-3.5 hover:bg-canvas transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-ink font-medium leading-snug">{ev.title}</p>
                        <p className="text-[13px] text-muted mt-0.5">
                          {ev.date}
                          {ev.subtopics && <> · {ev.subtopics.length} <Tx en="chapters" de="Kapitel" /></>}
                        </p>
                      </div>
                      <EventStars code={c.code} items={quizItems(ev).map(i => ({ path: i.path, counts: quizCounts(i.quiz) }))} />
                      <Icon name="chevronRight" size={18} className="text-faint" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}
        {text && !detailed && <WikiArticle text={text} fetched={HISTORY_FETCHED} />}
        {!text && !detailed && (
          <p className="text-sm text-muted"><Tx en="No text for this country yet." de="Für dieses Land gibt es noch keinen Text." /></p>
        )}
        <div className="flex justify-between gap-2 text-sm pt-2">
          {prev ? (
            <Link href={`/weltgeschichte/land/${prev.code.toLowerCase()}`} className="inline-flex items-center gap-1 h-10 text-muted hover:text-ink min-w-0">
              <Icon name="chevronLeft" size={16} /> <span className="truncate">{prev.name}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/weltgeschichte/land/${next.code.toLowerCase()}`} className="inline-flex items-center gap-1 h-10 text-muted hover:text-ink min-w-0">
              <span className="truncate">{next.name}</span> <Icon name="chevronRight" size={16} />
            </Link>
          ) : <span />}
        </div>
      </div>
    </main>
  );
}
