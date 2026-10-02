import { notFound } from 'next/navigation';
import { MIX, SUBJECTS, getSubject } from '@/lib/wissen';
import SubjectView from '@/components/wissen/SubjectView';

export const dynamicParams = false;

export function generateStaticParams() {
  return [...SUBJECTS, MIX].map(s => ({ fach: s.id }));
}

export default async function FachPage({ params }: { params: Promise<{ fach: string }> }) {
  const { fach } = await params;
  if (!getSubject(fach)) notFound();
  return <SubjectView subjectId={fach} hideTopics={fach === MIX.id} />;
}
