import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MUSIK, MUSIK_CODE, findKapitel, findEpoche } from '@/lib/musik';
import EventView from '@/components/laender/EventView';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';
import RememberVisit from '@/components/RememberVisit';

export const dynamicParams = false;

export function generateStaticParams() {
  return MUSIK.epochs.flatMap(land => land.events.flatMap(ev => (ev.subtopics ?? []).map(s => ({ epoche: ev.id, kapitel: s.id }))));
}

export default async function KapitelPage({ params }: { params: Promise<{ epoche: string; kapitel: string }> }) {
  const { epoche, kapitel } = await params;
  const found = findKapitel(epoche, kapitel);
  if (!found) notFound();
  const { event: ev, sub: s, next } = found;
  const nextEpoche = !next ? findEpoche(epoche)?.next : undefined;
  const nextLink = next
    ? { href: `/musik/${ev.id}/${next.id}`, title: next.title }
    : nextEpoche && { href: `/musik/${nextEpoche.id}`, title: nextEpoche.title };
  const i = ev.subtopics!.findIndex(x => x.id === s.id);

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <RememberVisit href={`/musik/${ev.id}/${s.id}`} title={s.title} context={`Musik · ${ev.title}`} />
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-5">
        <div className="space-y-3">
          <Link href={`/musik/${ev.id}`} className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <span className="truncate">{ev.title}</span>
          </Link>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 h-6 inline-flex items-center rounded-md bg-surface border border-line text-xs font-semibold text-muted">
              <Tx en="Part" de="Teil" />&nbsp;{i + 1} / {ev.subtopics!.length}
            </span>
            {s.date && <span className="px-2 h-6 inline-flex items-center rounded-md bg-surface border border-line text-xs font-semibold text-muted">{s.date}</span>}
          </div>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight">{s.title}</h1>
        </div>
        <EventView code={MUSIK_CODE} path={`${ev.id}.${s.id}`} text={s.text} quiz={s.quiz} images={s.images} audio={s.audio} next={nextLink || undefined} />
      </div>
    </main>
  );
}
