import Link from 'next/link';
import { notFound } from 'next/navigation';
import { KUNST } from '@/lib/kunst';
import { kunstStilTiles } from '@/lib/wissen/tiles';
import TileWall from '@/components/wissen/TileWall';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';

export const dynamicParams = false;

export function generateStaticParams() {
  return KUNST.epochs.map(e => ({ epoche: e.id }));
}

export default async function KunstEpochePage({ params }: { params: Promise<{ epoche: string }> }) {
  const { epoche } = await params;
  const ep = KUNST.epochs.find(e => e.id === epoche);
  if (!ep) notFound();

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href="/wissen/kunst" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en="Art" de="Kunst" />
          </Link>
          <div>
            <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight">{ep.name}</h1>
            <p className="text-sm text-muted">{ep.period} · {ep.events.length} <Tx en="styles" de="Stile" /></p>
          </div>
        </div>
        <TileWall tiles={kunstStilTiles(ep)} />
      </div>
    </main>
  );
}
