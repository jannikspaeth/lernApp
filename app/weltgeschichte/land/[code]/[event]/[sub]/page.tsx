import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES, flagUrl } from '@/lib/welt';
import { DETAILED, findEvent, findSubtopic } from '@/lib/laender';
import EventView from '@/components/laender/EventView';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';
import RememberVisit from '@/components/RememberVisit';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(DETAILED).flatMap(h =>
    h.epochs.flatMap(ep =>
      ep.events.flatMap(ev => (ev.subtopics ?? []).map(s => ({ code: h.code.toLowerCase(), event: ev.id, sub: s.id }))),
    ),
  );
}

export default async function SubtopicPage({ params }: { params: Promise<{ code: string; event: string; sub: string }> }) {
  const { code, event, sub } = await params;
  const c = COUNTRIES.find(x => x.code.toLowerCase() === code);
  const found = c && findSubtopic(c.code, event, sub);
  if (!c || !found) notFound();
  const { event: ev, sub: s, next } = found;
  const nextTopic = !next ? findEvent(c.code, event)?.next : undefined;
  const nextLink = next
    ? { href: `/weltgeschichte/land/${code}/${ev.id}/${next.id}`, title: next.title }
    : nextTopic && { href: `/weltgeschichte/land/${code}/${nextTopic.id}`, title: nextTopic.title };
  const i = ev.subtopics!.findIndex(x => x.id === s.id);

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <RememberVisit href={`/weltgeschichte/land/${code}/${ev.id}/${s.id}`} title={s.title} context={`${c.name} · ${ev.title}`} />
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-5">
        <div className="space-y-3">
          <Link href={`/weltgeschichte/land/${code}/${ev.id}`} className="inline-flex items-center gap-1.5 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} />
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
            <img src={flagUrl(c.code)} alt="" className="h-3.5 w-5 object-cover rounded-[3px] border border-line" />
            <span className="truncate">{ev.title}</span>
          </Link>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 h-6 inline-flex items-center rounded-md bg-surface border border-line text-xs font-semibold text-muted">
              <Tx en="Part" de="Teil" />&nbsp;{i + 1} / {ev.subtopics!.length}
            </span>
            {s.date && <span className="px-2 h-6 inline-flex items-center rounded-md bg-surface border border-line text-xs font-semibold text-muted">{s.date}</span>}
          </div>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight">{s.title}</h1>
        </div>
        <EventView
          code={c.code}
          path={`${ev.id}.${s.id}`}
          text={s.text}
          quiz={s.quiz}
          next={nextLink || undefined}
        />
      </div>
    </main>
  );
}
