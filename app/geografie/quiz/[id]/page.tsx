import { notFound } from 'next/navigation';
import QuizRunner from '@/components/geo/QuizRunner';
import { QUIZZES, quizById } from '@/lib/geografie/quizzes';
import { CATS } from '@/lib/geografie/cats';

export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZZES.map(q => ({ id: q.id }));
}

export default async function GeoQuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quiz = quizById(id);
  if (!quiz) notFound();
  const cat = CATS.find(c => c.id === quiz.cat)!;
  return <QuizRunner quiz={quiz} backHref={`/wissen/geografie/${cat.id}`} backLabel={cat.group[1]} />;
}
