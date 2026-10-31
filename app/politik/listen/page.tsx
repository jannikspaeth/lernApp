import Link from 'next/link';
import QuizList from '@/components/geo/QuizList';
import { POL_LISTEN, POL_LISTEN_COVERS } from '@/lib/politik/listen';
import { bildView } from '@/lib/bild';
import Tx from '@/components/Tx';
import Icon from '@/components/Icon';

// Politik: typed "name them all" quizzes (chancellors, presidents, popes …).
export default function PolListenPage() {
  const rows = POL_LISTEN.map(q => ({ id: q.id, title: q.title, blurb: q.blurb, total: q.items.length, seconds: q.seconds, section: q.section, art: [], cover: bildView(POL_LISTEN_COVERS[q.id] ?? '')?.src ?? null }));
  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href="/wissen/politik" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en="Politics" de="Politik" />
          </Link>
          <div>
            <h1 className="text-[28px] md:text-3xl font-bold text-ink leading-tight tracking-tight"><Tx en="Name them all" de="Alle nennen" /></h1>
            <p className="text-sm text-muted mt-1">
              <Tx en={`${rows.length} typing quizzes – chancellors, presidents, popes and more`} de={`${rows.length} Tipp-Quizze – Kanzler, Präsidenten, Päpste und mehr`} />
            </p>
          </div>
        </div>
        <QuizList rows={rows} base="/politik/listen" />
      </div>
    </main>
  );
}
