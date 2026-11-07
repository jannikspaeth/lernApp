import PromiQuiz, { type PromiPicture } from '@/components/raten/PromiQuiz';
import { PROMIS } from '@/lib/promis';
import { promiView } from '@/lib/promis/bilder';

// Celebrity picture quiz: only people whose photo was downloaded with a free licence take part.
export default function PromisPage() {
  const pictures: Record<string, PromiPicture> = {};
  for (const p of PROMIS) {
    const v = promiView(p.key);
    if (v) pictures[p.key] = { src: v.src, credit: v.credit };
  }
  return <PromiQuiz promis={PROMIS} pictures={pictures} />;
}
