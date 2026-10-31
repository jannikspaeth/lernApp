import NewsQuiz from '@/components/nachrichten/NewsQuiz';
import { NEWS } from '@/lib/nachrichten';

// News quiz: Germany / world × last week / month / 6 months. The pool is filtered by date in the browser.
export default function NachrichtenPage() {
  const updated = NEWS.reduce<string | null>((m, x) => (!m || x.d > m ? x.d : m), null);
  return <NewsQuiz questions={NEWS} updated={updated} />;
}
