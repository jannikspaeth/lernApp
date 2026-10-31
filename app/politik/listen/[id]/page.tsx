import { notFound } from 'next/navigation';
import QuizRunner from '@/components/geo/QuizRunner';
import { POL_LISTEN, polListeById } from '@/lib/politik/listen';

export const dynamicParams = false;

export function generateStaticParams() {
  return POL_LISTEN.map(q => ({ id: q.id }));
}

export default async function PolListePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quiz = polListeById(id);
  if (!quiz) notFound();
  return <QuizRunner quiz={quiz} backHref="/politik/listen" backLabel="Alle nennen" />;
}
