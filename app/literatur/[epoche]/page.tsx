import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LITERATUR, findEpoche } from '@/lib/literatur';
import { bildView } from '@/lib/bild';
import { quizCounts } from '@/lib/laender/types';
import EventStars from '@/components/laender/EventProgress';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';

export const dynamicParams = false;

export function generateStaticParams() {
  return LITERATUR.epochs.flatMap(land => land.events.map(ev => ({ epoche: ev.id })));
}

export default async function EpochePage({ params }: { params: Promise<{ epoche: string }> }) {
  const { epoche } = await params;
  const found = findEpoche(epoche);
  if (!found?.event.subtopics) notFound();
  const { land, event: ev, next } = found;
  const subs = ev.subtopics!;

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-5">
        <div className="space-y-3">
          <Link href={`/literatur/laender/${land.id}`} className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <span className="truncate">{land.name}</span>
          </Link>
          <span className="px-2 h-6 inline-flex items-center rounded-md bg-surface border border-line text-xs font-semibold text-muted">{ev.date}</span>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight">{ev.title}</h1>
        </div>
        <div className="space-y-3">
          {ev.text.map((p, i) => (
            <p key={i} className="text-[17px] leading-[1.7] text-ink/90">{p}</p>
          ))}
        </div>
        <section className="space-y-2.5">
          <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">
            <Tx en="Overview and authors" de="Überblick und Autoren" /> · {subs.length}
          </h2>
          <div className="bg-surface rounded-2xl border border-line divide-y divide-line-soft overflow-hidden">
            {subs.map((s, i) => {
              const thumb = s.images?.map(bildView).find(Boolean);
              return (
                <Link key={s.id} href={`/literatur/${ev.id}/${s.id}`} className="flex items-center gap-3 px-4 py-3 hover:bg-canvas transition-colors">
                  {thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element -- local portrait files
                    <img src={thumb.src} alt="" loading="lazy" className="w-12 h-12 shrink-0 rounded-lg object-cover border border-line" />
                  ) : (
                    <span className="w-12 h-12 shrink-0 rounded-lg border border-line text-muted text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-ink font-medium leading-snug">{s.title}</p>
                    {s.date && <p className="text-[13px] text-muted mt-0.5">{s.date}</p>}
                  </div>
                  <EventStars code="LIT" items={[{ path: `${ev.id}.${s.id}`, counts: quizCounts(s.quiz) }]} />
                  <Icon name="chevronRight" size={18} className="text-faint" />
                </Link>
              );
            })}
          </div>
        </section>
        {next && (
          <Link href={`/literatur/${next.id}`} className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl bg-surface border border-line hover:border-accent/40 transition-colors">
            <span className="min-w-0">
              <span className="block text-xs font-semibold text-muted"><Tx en="Next epoch" de="Nächste Epoche" /></span>
              <span className="block font-medium text-ink truncate">{next.title}</span>
            </span>
            <Icon name="arrowRight" size={18} className="text-accent" />
          </Link>
        )}
      </div>
    </main>
  );
}
