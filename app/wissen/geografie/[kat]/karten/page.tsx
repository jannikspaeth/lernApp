import { notFound } from 'next/navigation';
import SubjectView from '@/components/wissen/SubjectView';
import { CATS } from '@/lib/geografie/cats';

export const dynamicParams = false;

export function generateStaticParams() {
  return CATS.map(c => ({ kat: c.id }));
}

// The multiple-choice cards of one category (spaced repetition, rounds of ten).
export default async function GeoCardsPage({ params }: { params: Promise<{ kat: string }> }) {
  const { kat } = await params;
  const cat = CATS.find(c => c.id === kat);
  if (!cat) notFound();
  return <SubjectView subjectId="geografie" onlyGroup={cat.group[1]} backHref={`/wissen/geografie/${cat.id}`} />;
}
