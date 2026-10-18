import Link from 'next/link';
import { notFound } from 'next/navigation';
import SubjectView from '@/components/wissen/SubjectView';
import { CATS } from '@/lib/geografie/cats';
import Icon from '@/components/Icon';

export const dynamicParams = false;

export function generateStaticParams() {
  return CATS.map(c => ({ kat: c.id }));
}

// One category of Geografie: its topics as tiles, with the matching games below.
export default async function GeoCategoryPage({ params }: { params: Promise<{ kat: string }> }) {
  const { kat } = await params;
  const cat = CATS.find(c => c.id === kat);
  if (!cat) notFound();
  const extra = kat === 'spezial' ? (
    <Link href="/karte" className="flex items-center gap-3 bg-surface rounded-2xl border border-line p-4 hover:border-accent/40 transition-colors">
      <span className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center"><Icon name="map" size={20} /></span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-ink">Kartenquiz</p>
        <p className="text-[13px] text-muted">Länder auf der Weltkarte finden oder eintippen</p>
      </div>
      <Icon name="chevronRight" size={18} className="text-faint" />
    </Link>
  ) : undefined;
  return <SubjectView subjectId="geografie" onlyGroup={cat.group[1]} extra={extra} />;
}
