import type { WikiText } from '@/lib/welt/geschichte';
import Tx from '@/components/Tx';
import { formatYear, type TimelineEvent } from '@/lib/wissen/zeitstrahl';

// Building blocks of the world-history pages (no hooks: usable on the server).

export function WikiArticle({ text, fetched }: { text: WikiText; fetched: string }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
      {text.paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-gray-800">{p}</p>
      ))}
      <div className="pt-2 border-t border-gray-100 text-xs text-gray-400 space-y-1">
        <a href={text.url} target="_blank" rel="noopener noreferrer" className="inline-block font-medium text-sky-700 hover:text-sky-800">
          <Tx en="Read more on Wikipedia" de="Weiterlesen auf Wikipedia" />: „{text.title}“ ↗
        </a>
        <p>
          Quelle: Wikipedia, Artikel „{text.title}“ (
          <a href={text.url.replace(/#.*$/, '') + '?action=history'} target="_blank" rel="noopener noreferrer" className="underline">Autoren</a>
          ), Text unter{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 4.0</a>
          , gekürzt; Stand {new Date(fetched).toLocaleDateString('de-DE')}.
        </p>
      </div>
    </article>
  );
}

export function Timeline({ events, showRegion }: { events: (TimelineEvent & { regionLabel?: string })[]; showRegion?: boolean }) {
  const sorted = [...events].sort((a, b) => a.y - b.y);
  return (
    <ol className="relative border-l-2 border-amber-300 ml-3 space-y-3">
      {sorted.map((ev, i) => (
        <li key={i} className="ml-4">
          <span className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-amber-500" />
          <p className="text-xs font-bold text-amber-700">
            {formatYear(ev.y, ev.ca)}
            {showRegion && ev.regionLabel && <span className="ml-2 font-medium text-gray-400">{ev.regionLabel}</span>}
          </p>
          <p className="text-gray-900">{ev.text}</p>
        </li>
      ))}
    </ol>
  );
}
