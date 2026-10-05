import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES, flagUrl } from '@/lib/welt';
import { DETAILED, findEvent } from '@/lib/laender';
import { countryHistory } from '@/lib/welt/geschichte';
import EventView from '@/components/laender/EventView';

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
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto p-5 space-y-4">
        <div>
          <Link href={`/weltgeschichte/land/${code}`} className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600">
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
            <img src={flagUrl(c.code)} alt="" className="h-3 w-4 object-cover rounded-[2px]" />← {c.name} · {epoch.name}
          </Link>
          <p className="text-xs font-bold text-amber-700 mt-2">{ev.date}</p>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">{ev.title}</h1>
        </div>
        <EventView
          code={c.code}
          eventId={ev.id}
          text={ev.text}
          quiz={ev.quiz}
          sourceUrl={countryHistory(c.code)?.url}
          next={next && { href: `/weltgeschichte/land/${code}/${next.id}`, title: next.title }}
        />
      </div>
    </main>
  );
}
