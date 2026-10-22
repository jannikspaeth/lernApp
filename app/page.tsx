import HomeView from '@/components/HomeView';
import { fachTiles } from '@/lib/wissen/faecher';
import { dailyPool, visitCovers } from '@/lib/wissen/home';

// Home: continue where you left off, due reviews, question of the day, then every subject at a glance.
export default function Home() {
  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-5 pt-6 md:pt-10">
        <HomeView tiles={fachTiles()} pool={dailyPool()} covers={visitCovers()} />
      </div>
    </main>
  );
}
