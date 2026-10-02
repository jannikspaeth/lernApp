import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTINENTS, COUNTRIES, countriesIn, flagUrl } from '@/lib/welt';
import { HISTORY_FETCHED, countryHistory } from '@/lib/welt/geschichte';
import { WikiArticle } from '@/components/welt/History';
import CountryMap from '@/components/welt/CountryMap';
import Tx from '@/components/Tx';

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
  // Neighbours in the alphabetical list of the continent.
  const list = countriesIn(c.continent);
  const i = list.findIndex(x => x.code === c.code);
  const prev = list[i - 1];
  const next = list[i + 1];

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-2xl mx-auto p-5 space-y-5">
        <div>
          <Link href={`/weltgeschichte/kontinent/${k.id}`} className="text-xs text-gray-400 hover:text-gray-600">
            ← <Tx en={`History: ${k.name[0]}`} de={`Geschichte: ${k.name[1]}`} />
          </Link>
          <div className="flex items-center gap-3 mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
            <img src={flagUrl(c.code)} alt="" className="h-12 w-[4.5rem] object-cover rounded-md border border-gray-200 shadow-sm" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">{c.name}</h1>
              <p className="text-sm text-gray-500">
                {c.capital && <><Tx en="Capital" de="Hauptstadt" />: {c.capital} · </>}
                {c.area.toLocaleString('de-DE')} km²
              </p>
            </div>
          </div>
        </div>
        <CountryMap continent={c.continent} code={c.code} />
        {text ? (
          <WikiArticle text={text} fetched={HISTORY_FETCHED} />
        ) : (
          <p className="text-sm text-gray-500"><Tx en="No text for this country yet." de="Für dieses Land gibt es noch keinen Text." /></p>
        )}
        <div className="flex justify-between gap-2 text-sm">
          {prev ? (
            <Link href={`/weltgeschichte/land/${prev.code.toLowerCase()}`} className="text-gray-500 hover:text-gray-800 truncate">← {prev.name}</Link>
          ) : <span />}
          {next ? (
            <Link href={`/weltgeschichte/land/${next.code.toLowerCase()}`} className="text-gray-500 hover:text-gray-800 truncate text-right">{next.name} →</Link>
          ) : <span />}
        </div>
      </div>
    </main>
  );
}
