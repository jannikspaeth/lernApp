import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES, flagUrl } from '@/lib/welt';
import { DETAILED, findEvent, findSubtopic } from '@/lib/laender';
import { countryHistory } from '@/lib/welt/geschichte';
import EventView from '@/components/laender/EventView';
import Tx from '@/components/Tx';

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
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto p-5 space-y-4">
        <div>
          <Link href={`/weltgeschichte/land/${code}/${ev.id}`} className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600">
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
            <img src={flagUrl(c.code)} alt="" className="h-3 w-4 object-cover rounded-[2px]" />← {ev.title}
          </Link>
          <p className="text-xs font-bold text-amber-700 mt-2">
            <Tx en="Part" de="Teil" /> {i + 1}/{ev.subtopics!.length}
            {s.date && ` · ${s.date}`}
          </p>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">{s.title}</h1>
        </div>
        <EventView
          code={c.code}
          path={`${ev.id}.${s.id}`}
          text={s.text}
          quiz={s.quiz}
          sourceUrl={countryHistory(c.code)?.url}
          next={nextLink || undefined}
        />
      </div>
    </main>
  );
}
