import Link from 'next/link';
import { bildView } from '@/lib/bild';
import { TEST } from '@/lib/wissen/allgemeinwissen-test';
import { PERSONS } from '@/lib/wer-bin-ich';
import { PROMIS } from '@/lib/promis';
import { AW_LISTEN } from '@/lib/wissen/allgemeinwissen-listen';
import Tx from '@/components/Tx';

interface Game {
  href: string;
  title: [string, string];
  sub: [string, string];
  pics: string[]; // one picture, or four for a collage
  pos?: 'top' | 'center';
}

const wide = (i: number) => i === 0 || i === 3; // test and "Alle nennen" span the full width
const src = (key: string) => bildView(key)?.src ?? null;

// The games of Allgemeinwissen as large picture tiles: test, "Wer bin ich?", celebrity photos, "Alle nennen".
export default function AllgemeinHub() {
  const testTotal = Object.values(TEST).reduce((n, l) => n + l.length, 0);
  const games: Game[] = [
    { href: '/wissen/allgemeinwissen/test', title: ['General knowledge test', 'Allgemeinwissen-Test'], sub: [`30 questions, getting harder · ${testTotal} in the pool`, `30 Fragen, immer schwerer · ${testTotal} im Pool`], pics: ['golden-record'], pos: 'center' },
    { href: '/wissen/allgemeinwissen/wer-bin-ich', title: ['Who am I?', 'Wer bin ich?'], sub: [`${PERSONS.length} famous people, hint by hint`, `${PERSONS.length} Berühmtheiten, Tipp für Tipp`], pics: ['einstein'] },
    { href: '/wissen/allgemeinwissen/promis', title: ['Who is that?', 'Wer ist das?'], sub: [`${PROMIS.length} celebrity photos – type the name`, `${PROMIS.length} Promi-Fotos – Namen eintippen`], pics: ['taylor-swift', 'messi', 'obama', 'dicaprio'] },
    { href: '/wissen/allgemeinwissen/listen', title: ['Name them all', 'Alle nennen'], sub: [`${AW_LISTEN.length} typing quizzes against the clock`, `${AW_LISTEN.length} Tipp-Quizze gegen die Uhr`], pics: ['schule-von-athen'], pos: 'center' },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {games.map((g, i) => {
        const pics = g.pics.map(src).filter((s): s is string => !!s);
        return (
          <Link
            key={g.href}
            href={g.href}
            className={`group relative block rounded-2xl overflow-hidden border border-line bg-surface focus-visible:outline-2 focus-visible:outline-accent ${wide(i) ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}
          >
            {pics.length === 4 ? (
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {pics.map(p => (
                  // eslint-disable-next-line @next/next/no-img-element -- local photos
                  <img key={p} src={p} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                ))}
              </div>
            ) : pics[0] ? (
              // eslint-disable-next-line @next/next/no-img-element -- local pictures
              <img src={pics[0]} alt="" aria-hidden="true" loading="lazy" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${g.pos === 'center' ? 'object-center' : 'object-top'}`} />
            ) : null}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
              <p className={`font-semibold leading-tight tracking-tight text-balance ${wide(i) ? 'text-[22px]' : 'text-[17px]'}`}><Tx en={g.title[0]} de={g.title[1]} /></p>
              <p className="text-[12px] text-white/80 mt-0.5 leading-snug"><Tx en={g.sub[0]} de={g.sub[1]} /></p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
