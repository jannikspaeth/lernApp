import { notFound } from 'next/navigation';
import { MIX, SUBJECTS, getSubject } from '@/lib/wissen';
import SubjectView from '@/components/wissen/SubjectView';
import TileWall, { ContinueCard } from '@/components/wissen/TileWall';
import { geschichteLandTiles, kunstEpochTiles, literaturLandTiles } from '@/lib/wissen/tiles';
import { KUNST } from '@/lib/kunst';
import { LITERATUR } from '@/lib/literatur';
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
    const subject = getSubject('geografie')!;
    const tiles = CATS.map((c, i) => {
      const topics = subject.topics.filter(tp => tp.group?.[1] === c.group[1]);
      const art = c.id === 'flaggen' ? ['de', 'jp', 'br', 'za'].map(x => `/flags/${x}.svg`)
        : c.id === 'laender' ? ['it', 'jp', 'br', 'au'].map(x => `/umriss/${x}.svg`)
        : [];
      return { key: c.id, href: `/wissen/geografie/${c.id}`, index: i + 1, title: c.group[1], sub: `${QUIZZES.filter(q => q.cat === c.id).length} Quizze · ${c.blurb[1]}`, quizIds: QUIZZES.filter(q => q.cat === c.id).map(q => q.id), tint: c.tint, art, cards: topics.flatMap(tp => tp.cards.map(cd => ({ id: cd.id }))) };
    });
    return {
      title: ['Geography by theme', 'Geografie nach Themen'] as [string, string],
      sub: [`${tiles.length} categories`, `${tiles.length} Kategorien`] as [string, string],
      node: <CategoryWall tiles={tiles} />,
    };
  }
  return null;
}

export default async function FachPage({ params }: { params: Promise<{ fach: string }> }) {
  const { fach } = await params;
  if (!getSubject(fach)) notFound();
  const h = history(fach);
  return <SubjectView subjectId={fach} hideTopics={fach === MIX.id || fach === 'geografie'} history={h ?? undefined} />;
}
