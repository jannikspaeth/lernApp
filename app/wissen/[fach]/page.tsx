import { notFound } from 'next/navigation';
import { MIX, SUBJECTS, getSubject } from '@/lib/wissen';
import SubjectView from '@/components/wissen/SubjectView';
import TileWall, { ContinueCard } from '@/components/wissen/TileWall';
import { kunstEpochTiles, literaturLandTiles } from '@/lib/wissen/tiles';
import { KUNST } from '@/lib/kunst';
import { LITERATUR } from '@/lib/literatur';

export const dynamicParams = false;

export function generateStaticParams() {
  return [...SUBJECTS, MIX].map(s => ({ fach: s.id }));
}

// Subjects whose history is the main part of the page: a wall of tiles above the practice topics.
function history(fach: string) {
  if (fach === 'literatur') {
    return {
      title: ['Literary history', 'Literaturgeschichte'] as [string, string],
      sub: [`${LITERATUR.epochs.length} countries by epoch`, `${LITERATUR.epochs.length} Länder, nach Epochen`] as [string, string],
      node: (
        <>
          <ContinueCard prefix="/literatur/" label="Weiter in der Literaturgeschichte" />
          <TileWall tiles={literaturLandTiles()} />
        </>
      ),
    };
  }
  if (fach === 'kunst') {
    return {
      title: ['Art history', 'Kunstgeschichte'] as [string, string],
      sub: [`${KUNST.epochs.length} epochs, from antiquity to architecture`, `${KUNST.epochs.length} Epochen, von der Antike bis zur Architektur`] as [string, string],
      node: (
        <>
          <ContinueCard prefix="/kunst/" label="Weiter in der Kunstgeschichte" />
          <TileWall tiles={kunstEpochTiles()} />
        </>
      ),
    };
  }
  return null;
}

export default async function FachPage({ params }: { params: Promise<{ fach: string }> }) {
  const { fach } = await params;
  if (!getSubject(fach)) notFound();
  const h = history(fach);
  return <SubjectView subjectId={fach} hideTopics={fach === MIX.id} history={h ?? undefined} />;
}
