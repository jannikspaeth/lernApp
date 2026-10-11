import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTINENTS, countriesIn, flagUrl, type Continent } from '@/lib/welt';
import { HISTORY_FETCHED, continentHistory } from '@/lib/welt/geschichte';
import { TIMELINES } from '@/lib/wissen/zeitstrahl';
import { Timeline, WikiArticle } from '@/components/welt/History';
import CountryMap from '@/components/welt/CountryMap';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';

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
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-2">
          <Link href="/weltgeschichte" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en="World history" de="Weltgeschichte" />
          </Link>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight">
            <Tx en={k.name[0]} de={k.name[1]} />
          </h1>
        </div>
        <CountryMap continent={k.id} />
        {text && <WikiArticle text={text} fetched={HISTORY_FETCHED} />}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wide"><Tx en="Timeline" de="Zeitleiste" /></h2>
          <div className="bg-surface rounded-2xl border border-line p-5">
            <Timeline events={events} />
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wide"><Tx en="Countries" de="Länder" /> ({countries.length})</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {countries.map(c => (
              <Link
                key={c.code}
                href={`/weltgeschichte/land/${c.code.toLowerCase()}`}
                className="flex items-center gap-2 bg-surface rounded-xl border border-line px-3 py-2 hover:border-accent/40 transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
                <img src={flagUrl(c.code)} alt="" loading="lazy" className="h-4 w-6 object-cover rounded-sm border border-line shrink-0" />
                <span className="text-sm text-ink truncate">{c.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
