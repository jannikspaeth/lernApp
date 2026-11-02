import Link from 'next/link';
import { PERSONAS } from '@/lib/persoenlichkeit';
import { bildView } from '@/lib/bild';
import Icon from '@/components/Icon';
import Tx from '@/components/Tx';

// "Who are you?" quizzes: one tile per quiz with four of its results as a picture mosaic.
export default function PersoenlichkeitPage() {
  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href="/faecher" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en="Subjects" de="Fächer" />
          </Link>
          <div>
            <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight"><Tx en="Who are you?" de="Wer bist du?" /></h1>
            <p className="text-sm text-muted mt-1">
              <Tx
                en="Ten questions, no right or wrong – and at the end a philosopher, painter, composer or writer who suits you, with a link to their chapter."
                de="Zehn Fragen ohne richtig oder falsch – am Ende steht ein Philosoph, Maler, Komponist oder Schriftsteller, der zu dir passt, mit Link zu seinem Kapitel."
              />
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {PERSONAS.map(p => (
            <Link key={p.id} href={`/persoenlichkeit/${p.id}`} className="group block bg-surface rounded-2xl border border-line overflow-hidden hover:border-accent/40 transition-colors">
              <div className="grid grid-cols-4 h-28 bg-canvas">
                {p.results.slice(0, 4).map(r => {
                  const src = bildView(r.img)?.src;
                  return src ? (
                    // eslint-disable-next-line @next/next/no-img-element -- local pictures
                    <img key={r.id} src={src} alt="" aria-hidden="true" className="w-full h-full object-cover object-top" />
                  ) : (
                    <span key={r.id} />
                  );
                })}
              </div>
              <div className="p-4">
                <p className="font-semibold text-ink">{p.title}</p>
                <p className="text-[13px] text-muted mt-0.5">{p.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
