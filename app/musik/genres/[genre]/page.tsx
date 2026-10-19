import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MUSIK, findGenre } from '@/lib/musik';
import { musikEpochTiles } from '@/lib/wissen/tiles';
import TileWall from '@/components/wissen/TileWall';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';

export const dynamicParams = false;

export function generateStaticParams() {
  return MUSIK.epochs.map(g => ({ genre: g.id }));
}

export default async function GenrePage({ params }: { params: Promise<{ genre: string }> }) {
  const { genre: id } = await params;
  const land = findGenre(id);
  if (!land) notFound();
  const chapters = land.events.reduce((n, ev) => n + (ev.subtopics?.length ?? 0), 0);

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href="/wissen/musik" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en="Music" de="Musik" />
          </Link>
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight">{land.name}</h1>
              <p className="text-sm text-muted">{land.period} · {land.events.length} <Tx en="eras" de="Epochen" /> · {chapters} <Tx en="chapters" de="Kapitel" /></p>
            </div>
          </div>
        </div>
        <TileWall tiles={musikEpochTiles(land)} />
      </div>
    </main>
  );
}
