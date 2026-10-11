import type { WikiText } from '@/lib/welt/geschichte';
import { formatYear, type TimelineEvent } from '@/lib/wissen/zeitstrahl';

// Building blocks of the world-history pages (no hooks: usable on the server).

export function WikiArticle({ text, fetched }: { text: WikiText; fetched: string }) {
  return (
    <article className="space-y-4">
      {text.paragraphs.map((p, i) => (
        <p key={i} className="text-[17px] leading-[1.75] text-ink/90">{p}</p>
      ))}
      <div className="pt-3 border-t border-line text-xs text-muted space-y-1">
        <p>
          Quelle: Wikipedia, Artikel „{text.title}“ und seine Autoren; Text unter{' '}
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
    <ol className="relative border-l border-line ml-2 space-y-4">
      {sorted.map((ev, i) => (
        <li key={i} className="ml-4">
          <span className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-surface" />
          <p className="text-xs font-semibold text-accent tabular-nums">
            {formatYear(ev.y, ev.ca)}
            {showRegion && ev.regionLabel && <span className="ml-2 font-medium text-muted">{ev.regionLabel}</span>}
          </p>
          <p className="text-ink">{ev.text}</p>
        </li>
      ))}
    </ol>
  );
}
