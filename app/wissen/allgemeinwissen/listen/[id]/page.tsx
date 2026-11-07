import { notFound } from 'next/navigation';
import QuizRunner from '@/components/geo/QuizRunner';
import { AW_LISTEN, awListeById } from '@/lib/wissen/allgemeinwissen-listen';

export const dynamicParams = false;

export function generateStaticParams() {
  return AW_LISTEN.map(q => ({ id: q.id }));
}

export default async function AwListePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quiz = awListeById(id);
  if (!quiz) notFound();
  return <QuizRunner quiz={quiz} backHref="/wissen/allgemeinwissen/listen" backLabel="Alle nennen" />;
}
