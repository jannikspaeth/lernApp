import { notFound } from 'next/navigation';
import { MIX, SUBJECTS, getSubject } from '@/lib/wissen';
import SubjectView from '@/components/wissen/SubjectView';
import TileWall, { ContinueCard } from '@/components/wissen/TileWall';
import { geschichteLandTiles, kunstEpochTiles, literaturLandTiles, musikGenreTiles } from '@/lib/wissen/tiles';
import { KUNST } from '@/lib/kunst';
import { LITERATUR } from '@/lib/literatur';
import { MUSIK } from '@/lib/musik';
import { categoryCover } from '@/lib/geografie/bilder';
import QuizList from '@/components/geo/QuizList';
import { QUIZZES } from '@/lib/geografie/quizzes';
import CategoryWall from '@/components/wissen/CategoryWall';
import { CATS } from '@/lib/geografie/cats';
import MoreCountries from '@/components/wissen/MoreCountries';
import { CONTINENTS, COUNTRIES, countryNames, normName } from '@/lib/welt';
import { DETAILED } from '@/lib/laender';

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
  if (fach === 'musik') {
    return {
      title: ['Music history', 'Musikgeschichte'] as [string, string],
      sub: [`${MUSIK.epochs.length} genres by era`, `${MUSIK.epochs.length} Genres, nach Epochen`] as [string, string],
      node: (
        <>
          <ContinueCard prefix="/musik/" label="Weiter in der Musikgeschichte" />
          <TileWall tiles={musikGenreTiles()} />
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
  if (fach === 'geschichte') {
    const tiles = geschichteLandTiles();
    return {
      title: ['History by country', 'Geschichte nach Ländern'] as [string, string],
      sub: [`${tiles.length} countries in depth`, `${tiles.length} Länder im Detail`] as [string, string],
      node: (
        <>
          <ContinueCard prefix="/weltgeschichte/land/" label="Weiter in der Geschichte" />
          <TileWall tiles={tiles} />
          <MoreCountries
            countries={COUNTRIES.filter(c => !(c.code in DETAILED)).map(c => ({ code: c.code, name: c.name, continent: c.continent, match: countryNames(c).map(normName).join(' ') }))}
            groups={CONTINENTS.map(k => ({ id: k.id, name: k.name }))}
          />
        </>
      ),
    };
  }
  if (fach === 'geografie') {
    const tiles = CATS.map((c, i) => {
      const quizIds = QUIZZES.filter(q => q.cat === c.id).map(q => q.id);
      const cover = categoryCover(c.id);
      return {
        key: c.id,
        href: `/wissen/geografie/${c.id}`,
        index: i + 1,
        title: c.group[1],
        sub: `${quizIds.length} Quizze`,
        tint: c.tint,
        cover,
        mosaic: !cover && c.id === 'flaggen' ? 'de fr it jp br za in au ca'.split(' ').map(x => `/flags/${x}.svg`) : undefined,
        quizIds,
      };
    });
    const quick = ['laender-welt', 'flaggen-europa', 'hauptstaedte-europa', 'umrisse-europa', 'us-staaten', 'achttausender']
      .flatMap(id => QUIZZES.filter(q => q.id === id))
      .map(q => ({ id: q.id, title: q.title, blurb: q.blurb, total: q.items.length, seconds: q.seconds, section: 'Direkt loslegen', art: q.art ?? [], cover: null }));
    return {
      title: ['Geography', 'Geografie'] as [string, string],
      sub: [`${QUIZZES.length} quizzes in ${tiles.length} categories`, `${QUIZZES.length} Quizze in ${tiles.length} Kategorien`] as [string, string],
      node: (
        <div className="space-y-8">
          <CategoryWall tiles={tiles} />
          <QuizList rows={quick} compactAll />
        </div>
      ),
    };
  }
  return null;
}

export default async function FachPage({ params }: { params: Promise<{ fach: string }> }) {
  const { fach } = await params;
  if (!getSubject(fach)) notFound();
  const h = history(fach);
  return <SubjectView subjectId={fach} hideTopics={fach === MIX.id || fach === 'geografie'} bare={fach === 'geografie'} history={h ?? undefined} />;
}
