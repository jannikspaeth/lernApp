import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES, flagUrl } from '@/lib/welt';
import { DETAILED, findEvent, quizCounts } from '@/lib/laender';
import EventView from '@/components/laender/EventView';
import EventStars from '@/components/laender/EventProgress';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';
import RememberVisit from '@/components/RememberVisit';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(DETAILED).flatMap(h =>
    h.epochs.flatMap(ep => ep.events.map(ev => ({ code: h.code.toLowerCase(), event: ev.id }))),
  );
}

export default async function EventPage({ params }: { params: Promise<{ code: string; event: string }> }) {
  const { code, event } = await params;
  const c = COUNTRIES.find(x => x.code.toLowerCase() === code);
  const found = c && findEvent(c.code, event);
  if (!c || !found) notFound();
  const { epoch, event: ev, next } = found;

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      {!ev.subtopics && <RememberVisit href={`/weltgeschichte/land/${code}/${ev.id}`} title={ev.title} context={`${c.name} · ${epoch.name}`} />}
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-5">
        <div className="space-y-3">
          <Link href={`/weltgeschichte/land/${code}`} className="inline-flex items-center gap-1.5 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} />
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
            <img src={flagUrl(c.code)} alt="" className="h-3.5 w-5 object-cover rounded-[3px] border border-line" />
            <span className="truncate">{c.name} · {epoch.name}</span>
          </Link>
          <span className="px-2 h-6 inline-flex items-center rounded-md bg-surface border border-line text-xs font-semibold text-muted">{ev.date}</span>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight">{ev.title}</h1>
        </div>

        {ev.subtopics ? (
          <>
            <div className="space-y-3">
              {ev.text.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.7] text-ink/90">{p}</p>
              ))}
            </div>
            <section className="space-y-2.5">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">
                <Tx en="Chapters" de="Kapitel" /> · {ev.subtopics.length}
              </h2>
              <div className="bg-surface rounded-2xl border border-line divide-y divide-line-soft overflow-hidden">
                {ev.subtopics.map((s, i) => (
                  <Link
                    key={s.id}
                    href={`/weltgeschichte/land/${code}/${ev.id}/${s.id}`}
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-canvas transition-colors"
                  >
                    <span className="w-7 h-7 shrink-0 rounded-full border border-line text-muted text-xs font-semibold flex items-center justify-center">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-ink font-medium leading-snug">{s.title}</p>
                      {s.date && <p className="text-[13px] text-muted mt-0.5">{s.date}</p>}
                    </div>
                    <EventStars code={c.code} items={[{ path: `${ev.id}.${s.id}`, counts: quizCounts(s.quiz) }]} />
                    <Icon name="chevronRight" size={18} className="text-faint" />
                  </Link>
                ))}
              </div>
            </section>
            {next && (
              <Link
                href={`/weltgeschichte/land/${code}/${next.id}`}
                className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl bg-surface border border-line hover:border-accent/40 transition-colors"
              >
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-muted"><Tx en="Next topic" de="Nächstes Thema" /></span>
                  <span className="block font-medium text-ink truncate">{next.title}</span>
                </span>
                <Icon name="arrowRight" size={18} className="text-accent" />
              </Link>
            )}
          </>
        ) : (
          ev.quiz && (
            <EventView
              code={c.code}
              path={ev.id}
              text={ev.text}
              quiz={ev.quiz}
              next={next && { href: `/weltgeschichte/land/${code}/${next.id}`, title: next.title }}
            />
          )
        )}
      </div>
    </main>
  );
}
