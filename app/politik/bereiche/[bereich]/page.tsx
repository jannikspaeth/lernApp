import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POLITIK, findBereich } from '@/lib/politik';
import { polEpochTiles } from '@/lib/wissen/tiles';
import TileWall from '@/components/wissen/TileWall';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';

export const dynamicParams = false;

export function generateStaticParams() {
  return POLITIK.epochs.map(g => ({ bereich: g.id }));
}

export default async function BereichPage({ params }: { params: Promise<{ bereich: string }> }) {
  const { bereich: id } = await params;
  const land = findBereich(id);
  if (!land) notFound();
  const chapters = land.events.reduce((n, ev) => n + (ev.subtopics?.length ?? 0), 0);

  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href="/wissen/politik" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en="Politics" de="Politik" />
          </Link>
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight">{land.name}</h1>
              <p className="text-sm text-muted">{land.period} · {land.events.length} <Tx en="topics" de="Themen" /> · {chapters} <Tx en="chapters" de="Kapitel" /></p>
            </div>
          </div>
        </div>
        <TileWall tiles={polEpochTiles(land)} />
      </div>
    </main>
  );
}
