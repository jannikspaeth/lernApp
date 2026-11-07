import Link from 'next/link';
import WerBinIch, { type PersonPicture } from '@/components/raten/WerBinIch';
import { PERSONS } from '@/lib/wer-bin-ich';
import { bildView } from '@/lib/bild';
import Icon from '@/components/Icon';
import Tx from '@/components/Tx';

// "Wer bin ich?": guess the famous person, hint by hint from hard to easy.
export default function WerBinIchPage() {
  const pictures: Record<string, PersonPicture> = {};
  for (const p of PERSONS) {
    const b = bildView(p.img);
    pictures[p.id] = { src: b?.src ?? null, credit: b?.credit ?? '' };
  }
  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-5 pt-4 md:pt-8 space-y-6">
        <div className="space-y-3">
          <Link href="/wissen/allgemeinwissen" className="inline-flex items-center gap-1 -ml-1 h-9 pr-2 text-sm font-medium text-muted hover:text-ink">
            <Icon name="chevronLeft" size={18} /> <Tx en="General knowledge" de="Allgemeinwissen" />
          </Link>
          <div>
            <h1 className="text-[28px] md:text-3xl font-bold text-ink tracking-tight"><Tx en="Who am I?" de="Wer bin ich?" /></h1>
            <p className="text-sm text-muted mt-1">
              <Tx en="Guess the famous person: hint by hint, from hard to easy." de="Rate die berühmte Person – Tipp für Tipp, von schwer bis leicht." />
            </p>
          </div>
        </div>
        <WerBinIch persons={PERSONS} pictures={pictures} />
      </div>
    </main>
  );
}
