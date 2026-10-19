'use client';

import { useRef } from 'react';

// A listening example streamed from Wikimedia Commons. `start` skips a long silence or
// introduction; the native controls keep it accessible and work on every device.
export default function AudioClip({ sources, start = 0, className = '' }: { sources: { src: string; type: string }[]; start?: number; className?: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  return (
    <audio
      ref={ref}
      controls
      preload="none"
      className={`w-full h-11 ${className}`}
      onLoadedMetadata={() => {
        const a = ref.current;
        if (a && start > 0 && a.currentTime < 1) a.currentTime = start;
      }}
    >
      {sources.map(s => <source key={s.src} src={s.src} type={s.type} />)}
    </audio>
  );
}
