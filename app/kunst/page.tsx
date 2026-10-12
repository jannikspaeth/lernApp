import Link from 'next/link';
import { KUNST } from '@/lib/kunst';
import { quizCounts, quizItems } from '@/lib/laender/types';
import EventStars from '@/components/laender/EventProgress';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';

export default function KunstPage() {
  const styles = KUNST.epochs.reduce((n, ep) => n + ep.events.length, 0);
  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href="/wissen/kunst" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en="Art" de="Kunst" />
          </Link>
          <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight"><Tx en="Art history" de="Kunstgeschichte" /></h1>
          <p className="text-sm text-muted">
            <Tx en={`${styles} styles with artists, works and quizzes`} de={`${styles} Stile mit Künstlern, Werken und Quizzen`} />
          </p>
        </div>
        {KUNST.epochs.map((ep, n) => (
          <section key={ep.id} className="space-y-2.5">
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-semibold text-accent tabular-nums">{String(n + 1).padStart(2, '0')}</span>
              <h2 className="font-semibold text-ink flex-1">{ep.name}</h2>
              <span className="text-[13px] text-muted shrink-0">{ep.period}</span>
            </div>
            <div className="bg-surface rounded-2xl border border-line divide-y divide-line-soft overflow-hidden">
              {ep.events.map(ev => (
                <Link key={ev.id} href={`/kunst/${ev.id}`} className="flex items-center gap-3 px-4 py-3.5 hover:bg-canvas transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-ink font-medium leading-snug">{ev.title}</p>
                    <p className="text-[13px] text-muted mt-0.5">
                      {ev.date}
                      {ev.subtopics && <> · {ev.subtopics.length} <Tx en="chapters" de="Kapitel" /></>}
                    </p>
                  </div>
                  <EventStars code="KUNST" items={quizItems(ev).map(i => ({ path: i.path, counts: quizCounts(i.quiz) }))} />
                  <Icon name="chevronRight" size={18} className="text-faint" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
