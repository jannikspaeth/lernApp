import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES, flagUrl } from '@/lib/welt';
import { DETAILED, findEvent, quizCounts } from '@/lib/laender';
import { countryHistory } from '@/lib/welt/geschichte';
import EventView from '@/components/laender/EventView';
import EventStars from '@/components/laender/EventProgress';
import Tx from '@/components/Tx';

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

        {ev.subtopics ? (
          <>
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
              {ev.text.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-gray-800">{p}</p>
              ))}
            </article>
            <section className="space-y-2">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                <Tx en="Parts" de="Unterthemen" /> ({ev.subtopics.length})
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50 overflow-hidden">
                {ev.subtopics.map((s, i) => (
                  <Link
                    key={s.id}
                    href={`/weltgeschichte/land/${code}/${ev.id}/${s.id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className="w-6 h-6 shrink-0 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      {s.date && <p className="text-xs font-bold text-amber-700">{s.date}</p>}
                      <p className="text-gray-900 font-medium leading-snug">{s.title}</p>
                    </div>
                    <EventStars code={c.code} items={[{ path: `${ev.id}.${s.id}`, counts: quizCounts(s.quiz) }]} />
                    <span className="text-gray-300">›</span>
                  </Link>
                ))}
              </div>
            </section>
            {next && (
              <Link href={`/weltgeschichte/land/${code}/${next.id}`} className="block text-right text-sm text-gray-500 hover:text-gray-800">
                <Tx en="Next topic" de="Nächstes Thema" />: {next.title} →
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
              sourceUrl={countryHistory(c.code)?.url}
              next={next && { href: `/weltgeschichte/land/${code}/${next.id}`, title: next.title }}
            />
          )
        )}
      </div>
    </main>
  );
}
