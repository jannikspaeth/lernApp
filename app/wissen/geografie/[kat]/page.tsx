import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATS } from '@/lib/geografie/cats';
import { QUIZZES } from '@/lib/geografie/quizzes';
import QuizList from '@/components/geo/QuizList';
import Icon from '@/components/Icon';
import { getSubject } from '@/lib/wissen';

export const dynamicParams = false;

export function generateStaticParams() {
  return CATS.map(c => ({ kat: c.id }));
}

// One category of Geografie: the typed quizzes (Jetpunk style), then the multiple-choice cards.
export default async function GeoCategoryPage({ params }: { params: Promise<{ kat: string }> }) {
  const { kat } = await params;
  const cat = CATS.find(c => c.id === kat);
  if (!cat) notFound();
  const rows = QUIZZES.filter(q => q.cat === kat).map(q => ({ id: q.id, title: q.title, blurb: q.blurb, total: q.items.length, seconds: q.seconds, section: q.section }));
  const cardCount = getSubject('geografie')!.topics.filter(tp => tp.group?.[1] === cat.group[1]).reduce((n, tp) => n + tp.cards.length, 0);
  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href="/wissen/geografie" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> Geografie
          </Link>
          <div>
            <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight leading-tight">{cat.group[1]}</h1>
            <p className="text-muted text-sm mt-1">{cat.blurb[1]}</p>
          </div>
        </div>
        {kat === 'spezial' && (
          <Link href="/karte" className="flex items-center gap-3 bg-surface rounded-2xl border border-line p-4 hover:border-accent/40 transition-colors">
            <span className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center"><Icon name="map" size={20} /></span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-ink">Kartenquiz</p>
              <p className="text-[13px] text-muted">Länder auf der Weltkarte anklicken oder eintippen</p>
            </div>
            <Icon name="chevronRight" size={18} className="text-faint" />
          </Link>
        )}
        {rows.length > 0 && <QuizList rows={rows} />}
        {cardCount > 0 && (
          <Link href={`/wissen/geografie/${kat}/karten`} className="flex items-center gap-3 bg-surface rounded-2xl border border-line p-4 hover:border-accent/40 transition-colors">
            <span className="w-10 h-10 rounded-xl bg-canvas border border-line text-ink flex items-center justify-center"><Icon name="list" size={20} /></span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-ink">Fragen mit Antwortauswahl</p>
              <p className="text-[13px] text-muted">{cardCount} Karten mit Wiederholungsplan, als Runden à 10</p>
            </div>
            <Icon name="chevronRight" size={18} className="text-faint" />
          </Link>
        )}
      </div>
    </main>
  );
}
