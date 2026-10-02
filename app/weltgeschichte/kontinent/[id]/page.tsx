import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTINENTS, countriesIn, flagUrl, type Continent } from '@/lib/welt';
import { HISTORY_FETCHED, continentHistory } from '@/lib/welt/geschichte';
import { TIMELINES } from '@/lib/wissen/zeitstrahl';
import { Timeline, WikiArticle } from '@/components/welt/History';
import CountryMap from '@/components/welt/CountryMap';
import Tx from '@/components/Tx';

export const dynamicParams = false;

export function generateStaticParams() {
  return CONTINENTS.map(k => ({ id: k.id }));
}

export default async function KontinentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const k = CONTINENTS.find(x => x.id === id);
  if (!k) notFound();
  const text = continentHistory(k.id);
  const events = TIMELINES[k.id === 'nordamerika' || k.id === 'suedamerika' ? 'amerika' : (k.id as Exclude<Continent, 'nordamerika' | 'suedamerika'>)];
  const countries = countriesIn(k.id);

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto p-5 space-y-5">
        <div>
          <Link href="/weltgeschichte" className="text-xs text-gray-400 hover:text-gray-600">← <Tx en="World history" de="Weltgeschichte" /></Link>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mt-1">
            <span>{k.icon}</span> <Tx en={`History: ${k.name[0]}`} de={`Geschichte: ${k.name[1]}`} />
          </h1>
        </div>
        <CountryMap continent={k.id} />
        {text && <WikiArticle text={text} fetched={HISTORY_FETCHED} />}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide"><Tx en="Timeline" de="Zeitleiste" /></h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <Timeline events={events} />
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide"><Tx en="Countries" de="Länder" /> ({countries.length})</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {countries.map(c => (
              <Link
                key={c.code}
                href={`/weltgeschichte/land/${c.code.toLowerCase()}`}
                className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2 hover:shadow-md transition-shadow"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
                <img src={flagUrl(c.code)} alt="" loading="lazy" className="h-4 w-6 object-cover rounded-sm border border-gray-200 shrink-0" />
                <span className="text-sm text-gray-800 truncate">{c.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
