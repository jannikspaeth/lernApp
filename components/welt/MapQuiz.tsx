'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/ui-lang';
import { useLocalSetting } from '@/lib/use-local-setting';
import { CONTINENTS, COUNTRIES, countryNames, flagUrl, normName, type Country } from '@/lib/welt';
import { WorldMap, useMapShapes, type Fill, type RegionId } from './WorldMap';

type Mode = 'click' | 'type';

const REGION_IDS: RegionId[] = ['welt', 'europa', 'asien', 'afrika', 'nordamerika', 'suedamerika', 'ozeanien'];
const isRegion = (v: string): v is RegionId => (REGION_IDS as string[]).includes(v);
const isMode = (v: string): v is Mode => v === 'click' || v === 'type';
const BEST_KEY = 'lernapp_karte_best';
const MAX_TRIES = 3;

const BY_CODE = new Map(COUNTRIES.map(c => [c.code, c]));
// All accepted spellings with their country, to spot names that begin another
// name ("Niger" → "Nigeria"): those wait for Enter instead of being taken at once.
const ALL_NAMES: [string, string][] = COUNTRIES.flatMap(c => countryNames(c).map(n => [normName(n), c.code] as [string, string]));
const startsOther = (n: string, code: string) => ALL_NAMES.some(([m, c]) => c !== code && m !== n && m.startsWith(n));

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function readBest(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(BEST_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function saveBest(key: string, value: number): boolean {
  const best = readBest();
  if (best[key] != null && best[key] >= value) return false;
  try { localStorage.setItem(BEST_KEY, JSON.stringify({ ...best, [key]: value })); } catch {}
  return true;
}

const fmtTime = (ms: number) => {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

export default function MapQuiz() {
  const t = useT();
  const [region, setRegion] = useLocalSetting<RegionId>('lernapp_karte_region', 'europa', isRegion);
  const [mode, setMode] = useLocalSetting<Mode>('lernapp_karte_mode', 'click', isMode);
  const [playing, setPlaying] = useState(false);
  const { shapes, error } = useMapShapes(region);

  // Countries of the region that can be found on the map (Tuvalu is missing from it).
  const pool = useMemo(() => {
    if (!shapes) return [];
    const onMap = new Set(shapes.map(s => s.code).filter(Boolean));
    return COUNTRIES.filter(c => onMap.has(c.code) && (region === 'welt' || c.continent === region));
  }, [shapes, region]);

  const regionName = (r: RegionId) =>
    r === 'welt' ? t('Whole world', 'Ganze Welt') : t(...CONTINENTS.find(c => c.id === r)!.name);

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-4xl mx-auto p-4 md:p-5 space-y-4">
        <div>
          <Link href="/wissen/geografie" className="text-xs text-gray-400 hover:text-gray-600">← {t('Geography', 'Geografie')}</Link>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mt-1">
            <span>🗺️</span> {t('World map quiz', 'Weltkarten-Quiz')}
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
            ⚠ {t('The map could not be loaded.', 'Die Karte konnte nicht geladen werden.')}
          </div>
        )}

        {!playing && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">{t('Region', 'Region')}</p>
              <div className="flex flex-wrap gap-2">
                {REGION_IDS.map(r => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`px-3 py-1.5 rounded-xl text-sm font-medium border transition-colors ${
                      region === r ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {regionName(r)}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">{t('Mode', 'Modus')}</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {([
                  ['click', '👆', t('Find the country', 'Land finden'), t('A country is named — tap it on the map.', 'Ein Land wird genannt – tipp es auf der Karte an.')],
                  ['type', '⌨️', t('Name them all', 'Alle eintragen'), t('Type every country you know; it fills in on the map.', 'Tipp alle Länder ein, die du kennst – sie erscheinen auf der Karte.')],
                ] as const).map(([m, icon, name, blurb]) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`text-left p-3 rounded-xl border-2 transition-colors ${
                      mode === m ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{icon} {name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{blurb}</p>
                  </button>
                ))}
              </div>
            </div>
            <BestLine mode={mode} region={region} total={pool.length} />
            <button
              disabled={!shapes}
              onClick={() => setPlaying(true)}
              className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors disabled:opacity-50"
            >
              {shapes ? `${t('Start', 'Los geht’s')} · ${pool.length} ${t('countries', 'Länder')} →` : t('Loading map…', 'Karte lädt …')}
            </button>
          </div>
        )}

        {shapes && playing && mode === 'click' && (
          <ClickGame key={`click-${region}`} shapes={shapes} pool={pool} bestKey={`click:${region}`} onExit={() => setPlaying(false)} />
        )}
        {shapes && playing && mode === 'type' && (
          <TypeGame key={`type-${region}`} shapes={shapes} pool={pool} bestKey={`type:${region}`} onExit={() => setPlaying(false)} />
        )}
        {shapes && !playing && (
          <WorldMap shapes={shapes} fillOf={code => (code && pool.some(c => c.code === code) ? 'idle' : 'inactive')} />
        )}
        <p className="text-[11px] text-gray-400 text-center">
          {t('Drag to move, scroll or pinch to zoom. Map: Natural Earth / world-atlas.', 'Ziehen zum Verschieben, scrollen oder mit zwei Fingern zoomen. Karte: Natural Earth / world-atlas.')}
        </p>
      </div>
    </main>
  );
}

function BestLine({ mode, region, total }: { mode: Mode; region: RegionId; total: number }) {
  const t = useT();
  const [best, setBest] = useState<number | null>(null);
  useEffect(() => {
    // localStorage is only readable after mount.
    const v = readBest()[`${mode}:${region}`];
    const id = setTimeout(() => setBest(v ?? null), 0);
    return () => clearTimeout(id);
  }, [mode, region]);
  if (best == null || !total) return null;
  return <p className="text-xs text-gray-500">🏆 {t('Your best', 'Dein Rekord')}: {best} / {total}</p>;
}

// ─── Find the country: one name at a time, tap it ──────────────────────────────

function ClickGame({
  shapes,
  pool,
  bestKey,
  onExit,
}: {
  shapes: Parameters<typeof WorldMap>[0]['shapes'];
  pool: Country[];
  bestKey: string;
  onExit: () => void;
}) {
  const t = useT();
  const [queue] = useState(() => shuffle(pool));
  const [idx, setIdx] = useState(0);
  const [tries, setTries] = useState(0);
  const [result, setResult] = useState<Record<string, 'found' | 'missed'>>({});
  const [wrong, setWrong] = useState<string | null>(null);
  const [newBest, setNewBest] = useState(false);
  const target = queue[idx];
  const done = idx >= queue.length;
  const revealed = !!target && tries >= MAX_TRIES;
  const score = Object.values(result).filter(r => r === 'found').length;
  const inPool = useMemo(() => new Set(pool.map(c => c.code)), [pool]);

  useEffect(() => {
    if (!wrong) return;
    const id = setTimeout(() => setWrong(null), 1400);
    return () => clearTimeout(id);
  }, [wrong]);

  function next(r: Record<string, 'found' | 'missed'>) {
    setResult(r);
    setTries(0);
    setWrong(null);
    const n = idx + 1;
    setIdx(n);
    if (n >= queue.length) setNewBest(saveBest(bestKey, Object.values(r).filter(x => x === 'found').length));
  }

  function onPick(code: string) {
    if (!target || revealed || result[code]) return;
    if (code === target.code) {
      next({ ...result, [code]: tries === 0 ? 'found' : 'missed' });
      return;
    }
    setWrong(code);
    const n = tries + 1;
    setTries(n);
    if (n >= MAX_TRIES) setResult(r => ({ ...r, [target.code]: 'missed' }));
  }

  const fillOf = (code: string | null): Fill => {
    if (!code || !inPool.has(code)) return 'inactive';
    if (revealed && code === target?.code) return 'reveal';
    if (code === wrong) return 'wrong';
    if (result[code] === 'found') return 'found';
    if (result[code] === 'missed') return 'missed';
    return 'idle';
  };

  return (
    <div className="space-y-3">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex items-center gap-3">
        {done ? (
          <div className="flex-1">
            <p className="font-semibold text-gray-900">
              🎉 {t('Done!', 'Fertig!')} {score} / {queue.length} {t('on the first try', 'beim ersten Versuch')}
            </p>
            {newBest && <p className="text-sm text-emerald-700">🏆 {t('New record!', 'Neuer Rekord!')}</p>}
          </div>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG flag */}
            <img src={flagUrl(target.code)} alt="" className="h-8 w-11 object-cover rounded border border-gray-200" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400">{t('Where is…', 'Wo liegt …')}</p>
              <p className="font-bold text-gray-900 text-lg leading-tight truncate">{target.name}</p>
            </div>
            <p className="text-xs text-gray-400 tabular-nums">{idx + 1}/{queue.length} · ✓ {score}</p>
          </>
        )}
      </div>

      {wrong && !done && (
        <p className="text-sm text-red-600 text-center">
          ✗ {t('That is', 'Das ist')} <strong>{BY_CODE.get(wrong)?.name}</strong>
          {!revealed && ` · ${t('tries left', 'noch')} ${MAX_TRIES - tries}`}
        </p>
      )}
      {revealed && (
        <p className="text-sm text-amber-700 text-center">
          {t('Here it is (orange).', 'Hier liegt es (orange).')}
        </p>
      )}

      <WorldMap
        shapes={shapes}
        fillOf={fillOf}
        titleOf={code => (result[code] ? BY_CODE.get(code)?.name ?? null : null)}
        onPick={onPick}
      />

      <div className="flex gap-2">
        <button onClick={onExit} className="flex-1 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors">
          {t('End', 'Beenden')}
        </button>
        {!done && (
          <button
            onClick={() => next({ ...result, [target.code]: 'missed' })}
            className="flex-1 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            {revealed ? t('Next →', 'Weiter →') : t('Skip', 'Überspringen')}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Name them all: type names, found countries fill in ─────────────────────────

function TypeGame({
  shapes,
  pool,
  bestKey,
  onExit,
}: {
  shapes: Parameters<typeof WorldMap>[0]['shapes'];
  pool: Country[];
  bestKey: string;
  onExit: () => void;
}) {
  const t = useT();
  const [value, setValue] = useState('');
  const [found, setFound] = useState<string[]>([]);
  const [gaveUp, setGaveUp] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);
  const [start, setStart] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const [newBest, setNewBest] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const finished = gaveUp || found.length === pool.length;

  // Every accepted spelling → country code.
  const lookup = useMemo(() => {
    const m = new Map<string, string>();
    for (const c of pool) for (const n of countryNames(c)) m.set(normName(n), c.code);
    return m;
  }, [pool]);
  const inPool = useMemo(() => new Set(pool.map(c => c.code)), [pool]);
  // Countries outside this region, to say "not here" instead of leaving the text.
  const elsewhere = useMemo(() => {
    const m = new Map<string, string>();
    for (const c of COUNTRIES) if (!inPool.has(c.code)) for (const n of countryNames(c)) m.set(normName(n), c.name);
    return m;
  }, [inPool]);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    if (start == null || finished) return;
    const id = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(id);
  }, [start, finished]);

  const finish = useCallback((count: number) => {
    setNewBest(saveBest(bestKey, count));
  }, [bestKey]);

  function onChange(v: string, submit = false) {
    if (finished) return;
    if (start == null) {
      const n = Date.now();
      setStart(n);
      setNow(n);
    }
    const n = normName(v);
    const code = lookup.get(n);
    const other = elsewhere.get(n);
    const anyCode = code ?? ALL_NAMES.find(([m]) => m === n)?.[1];
    if (anyCode && !submit && startsOther(n, anyCode)) {
      setValue(v);
      return;
    }
    if (other && !code) {
      setNote(t(`${other} isn't in this region`, `${other} liegt nicht in dieser Region`));
      setValue('');
      return;
    }
    if (code && found.includes(code)) {
      setNote(t(`${BY_CODE.get(code)?.name} is already on the map`, `${BY_CODE.get(code)?.name} ist schon eingetragen`));
      setValue('');
      return;
    }
    if (code) {
      setNote(null);
      const next = [...found, code];
      setFound(next);
      setFlash(code);
      setValue('');
      if (next.length === pool.length) {
        setNow(Date.now());
        finish(next.length);
      }
      return;
    }
    setValue(v);
  }

  useEffect(() => {
    if (!flash) return;
    const id = setTimeout(() => setFlash(null), 1500);
    return () => clearTimeout(id);
  }, [flash]);

  const fillOf = (code: string | null): Fill => {
    if (!code || !inPool.has(code)) return 'inactive';
    if (found.includes(code)) return 'found';
    return gaveUp ? 'missed' : 'idle';
  };

  const missing = pool.filter(c => !found.includes(c.code));

  return (
    <div className="space-y-3">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-gray-900 tabular-nums">
            {found.length} / {pool.length} {t('countries', 'Länder')}
          </span>
          <span className="text-gray-400 tabular-nums">⏱ {start ? fmtTime(now - start) : '0:00'}</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${(found.length / Math.max(1, pool.length)) * 100}%` }} />
        </div>
        {!finished ? (
          <input
            ref={inputRef}
            autoFocus
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => {
              if (e.key !== 'Enter') return;
              const before = value;
              onChange(value, true);
              // Enter with nothing recognised clears the field for a fresh try.
              if (normName(before) && !lookup.has(normName(before)) && !elsewhere.has(normName(before))) setValue('');
            }}
            placeholder={t('Type a country… (Enter clears)', 'Land eintippen … (Enter leert)')}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-base focus:outline-none focus:border-emerald-400"
          />
        ) : (
          <div className="text-sm">
            <p className="font-semibold text-gray-900">
              {found.length === pool.length ? `🎉 ${t('All found!', 'Alle gefunden!')}` : t('Result', 'Ergebnis')}: {found.length} / {pool.length}
              {start ? ` · ${fmtTime(now - start)}` : ''}
            </p>
            {newBest && <p className="text-emerald-700">🏆 {t('New record!', 'Neuer Rekord!')}</p>}
          </div>
        )}
        {flash && !finished && <p className="text-sm text-emerald-700">✓ {BY_CODE.get(flash)?.name}</p>}
        {note && !flash && !finished && <p className="text-sm text-amber-700">{note}</p>}
      </div>

      <WorldMap
        shapes={shapes}
        fillOf={fillOf}
        titleOf={code => (found.includes(code) || gaveUp ? BY_CODE.get(code)?.name ?? null : null)}
      />

      {gaveUp && missing.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">{t('Missing', 'Gefehlt haben')} ({missing.length})</p>
          <p className="text-sm text-gray-600 leading-relaxed">{missing.map(c => c.name).join(' · ')}</p>
        </div>
      )}

      <div className="flex gap-2">
        <button onClick={onExit} className="flex-1 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors">
          {t('End', 'Beenden')}
        </button>
        {!finished && (
          <button
            onClick={() => {
              setGaveUp(true);
              setNow(Date.now());
              finish(found.length);
            }}
            className="flex-1 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            {t('Give up · show missing', 'Aufgeben · fehlende zeigen')}
          </button>
        )}
      </div>
    </div>
  );
}
