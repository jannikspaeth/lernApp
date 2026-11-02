import { notFound } from 'next/navigation';
import PersonaQuiz, { type ResultView } from '@/components/persoenlichkeit/PersonaQuiz';
import { PERSONAS, findPersona, resultHref } from '@/lib/persoenlichkeit';
import { bildView } from '@/lib/bild';

export const dynamicParams = false;

export function generateStaticParams() {
  return PERSONAS.map(p => ({ id: p.id }));
}

export default async function PersonaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const persona = findPersona(id);
  if (!persona) notFound();
  const views: Record<string, ResultView> = {};
  for (const r of persona.results) {
    const b = bildView(r.img);
    views[r.id] = { id: r.id, src: b?.src ?? null, credit: b?.credit ?? '', href: resultHref(r) };
  }
  return <PersonaQuiz persona={persona} views={views} />;
}
