import FaecherWall from '@/components/wissen/FaecherWall';
import { fachTiles } from '@/lib/wissen/faecher';

// All knowledge subjects as picture tiles with their progress.
export default function FaecherPage() {
  return (
    <main className="md:ml-56 min-h-screen bg-canvas pb-24 md:pb-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-5 pt-6 md:pt-10 space-y-5">
        <FaecherWall tiles={fachTiles()} />
      </div>
    </main>
  );
}
