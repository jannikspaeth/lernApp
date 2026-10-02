@AGENTS.md

# Lern App — general-knowledge + language-learning web app

A small, personal learning app for German speakers with **subjects** — Geschichte, Geografie, Kunst,
Literatur, Wissenschaft, Musik, Politik, Philosophie & Religion (`/wissen/*`), games (world map quiz `/karte`,
timeline `/zeitstrahl`) — and **Sprachen** (Italian, Spanish, French: the full language app).
Started as a copy of the Italian app (github.com/jannikspaeth/learnItalian) but is a **separate project with
its own Supabase database and Vercel deployment** — never point it at the Italian app's database.
Plain, mobile-first UI in **English or German** (per-device switch 🇬🇧/🇩🇪, `lib/ui-lang.ts`:
`const t = useT(); t('English', 'Deutsch')` — every new UI string needs both; the help page uses `<Tx en de />`)
with German/Italian/Spanish/French content.
(Converted from an earlier Spanish app, github.com/mattiss01/spanisch; its Spanish content now
lives in `lib/es/` + `public/vocab-examples-es.json`.)

## Stack & environment

- **Next.js 16.2.9 (App Router, Turbopack)**, React 19, TypeScript, **Tailwind CSS v4**.
- **Supabase** (Postgres) for all persistence, via `@supabase/supabase-js` (service-role key,
  server-side only).
- Deployed on **Vercel** (own project). No test framework.
- Commands: `npm run dev`, `npm run build`, `npx tsc --noEmit`, `npm run lint`.

### Env vars
- `SUPABASE_URL` (or `NEXT_PUBLIC_SUPABASE_URL`) and `SUPABASE_SERVICE_ROLE_KEY` — required for
  all persistence; reads/writes throw if missing. `dbConfigured()` guards optional paths.
- `AUTH_SECRET` (≥ 32 chars) — signs the session cookie; every signed-in request fails without it.
- Template in `.env.example`; set them in the Vercel project env and in `.env.local` for `npm run dev`.

## Accounts, sign-in & multi-user model (important)

**Name + password accounts.** `/login` signs up (`POST /api/auth/register`) or in (`/api/auth/login`);
passwords are scrypt-hashed in the `accounts` table (`lib/auth.ts`), the session is an HttpOnly cookie
`lernapp_session` = `<profile id>.<expiry>.<HMAC(AUTH_SECRET)>` (1 year). `proxy.ts` (Next 16's middleware)
sends every page without a valid session to `/login` and answers 401 on `/api/*` (except `/api/auth/*`).
Every data route additionally checks **ownership** with `authorizedUserId(req)`: the `x-user-id` header's
profile part must equal the session's profile, so nobody can read or write another person's data.
Each account is also a profile (row `id='profiles'` in `race`: `{ profiles, levels, deleted }`; no built-ins).
`/profile` is the account page (languages, sign out, delete account → `DELETE /api/profiles` removes all
rows in every table and language, the knowledge progress, race entries and the account). The
profile id is mirrored in `localStorage['italienisch_profile']` (`useProfile` recovers it from
`/api/auth/me`), the chosen language (`'it' | 'es' | 'fr'`, `lib/lang.ts`) in `localStorage['italienisch_lang']`.
Flow: `/login` → `/` (subjects) → Sprachen: `/heute` (→ `/sprache` for language + level if needed).

- **Data per language:** `x-user-id` = `dataUserId(profile, lang)` → `jannik` for Italian (legacy,
  unchanged), `jannik:es` / `jannik:fr` for Spanish / French. That becomes the Supabase **`user_id`**, so every table
  isolates per person *and* language with no schema change.
- **Level per language:** `profile.levels[lang]` (`'A1'` | `'B1'`), chosen on `/sprache` and saved via
  `PUT /api/profiles`. Legacy `level` = Italian level. `isBeginner(profile, lang)`.
- Practice pages use `useLearner()` (`lib/use-profile.ts`): gives `{ profile, lang, beginner }` and
  redirects to `/login` / `/sprache` when something is missing.
- **Content per language** is loaded on demand: `usePack('vocab' | 'verbs', lang)` (`lib/content.ts`,
  packs in `lib/packs/`). Tenses per language in `lib/tenses.ts`; `normWord(s, lang)` strips that
  language's articles.
- **Spanish content** (`lib/es/`): 10k-word catalog + starter, every word with a `topic` (hand-written
  sections by theme, the frequency block classified word by word); `verb-catalog.ts` spells out
  presente/indefinido/futuro and a rule engine (`derivedForms`) derives perfecto, imperfecto,
  condicional, subjuntivo and imperativo from them; `grammar-exercises.ts` has 34 cloze sets A1–B1
  (same `GrammarTopic` type as Italian; example field is `target`).
- **French content** (`lib/fr/`): catalog + starter (~2,900 words, the Italian catalog translated with the
  same German meanings/topics/order), `public/vocab-examples-fr.json`, `verb-catalog.ts` (329 verbs, rule
  engine for all 7 tenses incl. -er spelling changes; être-agreement written `allé(e)` / `allé(e)s` /
  `assis(es)`, accepted either way by `conjugation-match.ts`), 34 grammar sets and the lessons.
- Which side of a card is asked is a per-device setting (`useQuizDirection`, localStorage):
  🇩🇪→🇮🇹 / 🇮🇹→🇩🇪 / Mixed (default). The SRS level stays one per word either way.
- `useProfile()` (`lib/use-profile.ts`) reads/sets the active profile and syncs across tabs.

## Knowledge subjects (`/`, `/wissen/[fach]`)

- `/` is the subject overview (`app/page.tsx`); `/wissen/[fach]` (static, `generateStaticParams`) renders
  `components/wissen/SubjectView.tsx`. The nav (`components/Navigation.tsx`) switches to subject items on
  `/` and `/wissen/*` and to the language items everywhere else.
- Content in `lib/wissen/<subject>.ts` (listed in `SUBJECTS`, `lib/wissen/index.ts`), German only: topics of cards
  `[question, answer, wrong answers?, info?]` built with `topic()`; optional `group` (heading in the topic list),
  `shuffle` (new cards in random order), card `img`, subject `links` (games shown above the topics). Card ids are positional
  (`<subject>.<topic>.<n>`) — **only append cards**, never insert/reorder. Without `wrong`, the quiz takes
  distractors from the topic's other answers (only for topics whose answers are all of one kind).
  New subject: add the file, list it in `SUBJECTS` (`lib/wissen/index.ts`) and its route in `sw.js` `ROUTES`.
- `/wissen/mix` (`MIX`): every topic of every subject, new cards shuffled; the hub's "Gemischte Runde".
- **Countries** (`lib/welt/`): `countries.ts` is **generated** by `node scripts/build-countries.mjs` from the
  `world-countries` package (ODbL) — all 193 UN members + VA, PS, XK, TW, with German names/capitals corrected in
  the script (edit there, never the generated file). The script also copies the flags (`flag-icons`, MIT) to
  `public/flags/<code>.svg` and the map (`world-atlas` 50m, Natural Earth) to `public/maps/`. Geografie's flag and
  capital topics are generated per continent from it (card id `geografie.flaggen.<ISO>` / `geografie.hauptstadt.<ISO>`).
- **World map quiz** `/karte` (`components/welt/`): `WorldMap` = d3-geo + topojson SVG with pan/wheel/pinch zoom,
  one projection + bounding box per region, round tap targets for tiny countries (Tuvalu isn't on the map).
  Modes: find the named country (3 tries) or type all names (`normName`, accepted spellings in `alt`; a name that
  begins another, e.g. "Niger", waits for Enter). Records per device in localStorage.
- **Timeline** `/zeitstrahl`: order 5 events from `lib/wissen/zeitstrahl.ts` (picked client-side only).
- Modes: **Quiz** (4 options) or **Flashcards** (reveal + self-grade), per-device choice. Rounds of 10:
  due first, then new (`pickRound`). SRS in `lib/wissen/progress.ts` (levels 0–6, 0/1/3/7/14/30/60 days,
  learned from level 4, wrong → level 1).
- Progress: one blob per profile (not per language) in the `race` table, row `wissen:<profile id>`
  (`/api/data/wissen`, `getWissen`/`updateWissen` in `lib/storage.ts`, queued read-modify-write).
  Not counted for the race.

## Installable & offline (PWA)

- `app/manifest.ts`, icons in `public/icon-*.png` + `app/apple-icon.png`, `viewport-fit=cover` with
  `env(safe-area-inset-*)` padding (`.safe-area-inset-bottom`, mobile `.pb-24` in `globals.css`).
- `public/sw.js` (registered in production by `components/OfflineSupport.tsx`): pages network-first with cached
  fallback (all routes pre-fetched with their `/_next/static` assets on install and on every online start),
  static assets cache-first, GET `/api/data/*` · `/api/race*` · `/api/profiles` network-first with the last
  answer cached **per `x-user-id`**. Offline PUT/POST to `/api/data/*` are queued in IndexedDB, answered
  `{ ok, queued }` and mirrored into the cached reads (PUT replaces, vocab POST upserts) so read-modify-writes
  keep working; the queue is flushed in order before any fresh read or write. `OfflineSupport` also preloads the
  current language's packs, examples, verb builder and the learner's data, and shows an offline/sync badge.
- Verb drills are built in the browser (`lib/conjugation-client.ts` → `lib/conjugation-exercise.ts`);
  `/api/exercise` only remains for old clients. Bump the cache names in `sw.js` if the cache format changes.

## Data flow

Client component → `lib/storage.ts` (fetch with `x-user-id`) → `app/api/data/*` route → `lib/db.ts`
(Supabase). `storage.ts` reads are tolerant (return fallback) for display, but **strict** before any
read-modify-write so a failed read can't overwrite real data with an empty list. Per-row writes
(vocab) avoid clobbering the whole list; JSONB-blob writes (conjugation/sentences/race) are read-modify-write.

### Supabase tables
- `vocab` — one row per user+word (SRS: levels 1–7 learning, 8 known; `next_review`, `last_reviewed`, `review_count`).
- `stats` — one row per user. Cumulative totals + `streak` + **`daily` jsonb** (Berlin-date → activity count).
- `conjugation`, `sentences`, `grammar` — one JSONB row per user (arrays of records).
- `race` — one global row **per language**: `id='global'` (Italian), `id='global-es'`, `id='global-fr'`, holding
  `{ dailyCounts, settledDates, highscores, stars, settledMonths }`. Also the `id='profiles'` row (see above) and
  one **extras** row per user+language, `id='extras:<user_id>'` (`UserExtras`: `mistakes`, `reading`, `rounds`;
  `/api/data/extras`, `updateExtras()` in `lib/storage.ts` queues read-modify-writes). Deleted with the profile.
- `accounts` — `profile_id`, unique `name_key` (lower-cased name), `password_hash`.

### ⚠️ Manual SQL migrations (no migrations dir — tables are created by hand)
Full setup for a fresh Supabase project in **`supabase/setup.sql`** (keep it in sync). Original tables:
```sql
create table if not exists vocab (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  norm_word text not null,
  word text not null,
  translation text not null,
  example text,
  level int not null default 1,
  next_review timestamptz,
  last_reviewed timestamptz,
  review_count int not null default 0,
  added_at timestamptz not null default now(),
  unique (user_id, norm_word)
);
create table if not exists stats (
  user_id text primary key,
  exercises_completed int not null default 0,
  correct_answers int not null default 0,
  total_answers int not null default 0,
  streak int not null default 0,
  last_activity timestamptz,
  exercises_by_type jsonb not null default '{}'::jsonb,
  daily jsonb not null default '{}'::jsonb
);
create table if not exists conjugation ( user_id text primary key, data jsonb not null default '[]'::jsonb );
create table if not exists sentences   ( user_id text primary key, data jsonb not null default '[]'::jsonb );
create table if not exists race        ( id text primary key, data jsonb not null default '{}'::jsonb );
create table if not exists grammar     ( user_id text primary key, data jsonb not null default '[]'::jsonb );

-- Lock the tables against the public (anon) API; the app uses the service_role
-- key server-side, which bypasses RLS.
alter table vocab       enable row level security;
alter table stats       enable row level security;
alter table conjugation enable row level security;
alter table sentences   enable row level security;
alter table race        enable row level security;
alter table grammar     enable row level security;
```

## Features / pages

- `/heute` — **Today** (start page of Sprachen): a mixed daily round (`lib/daily-round.ts`: 10 words due-first
  then new, 5 single verb forms, 5 grammar items, 2 sentences, 1 dictation) and **My mistakes** training. Every
  exercise records wrong answers via `recordMistakes()` (`lib/mistakes.ts`, builders per kind with stable ids);
  an item leaves the list after 2 correct answers in a row. Practice cards are shared in `components/practice/`.
- **Audio**: `lib/speech.ts` (browser `speechSynthesis`, voice per language, `speakableText` strips notes/variants)
  + `components/SpeakButton.tsx` on flashcards, word list, sentences, verb tables, grammar and lessons; per-device
  auto-play for vocab (`lib/use-autoplay.ts`). No speech recognition.
- `/lesen` — **Reading**: graded texts per language in `lib/reading/{it,es,fr}.ts` (18 it, 9 es, 9 fr) with
  tap-to-translate (`lib/reading/lookup.ts`: text glossary → `common-words.ts` → vocab catalog → every verb form
  from the `forms` pack → plural/feminine/-issimo/gerund/clitic heuristics), per-paragraph translation, audio and
  comprehension questions (`recordExercise('reading')`, 2 race points per question; progress in extras). Every
  word of every text must resolve — when adding a text, run a lookup over all tokens and fill its `glossary`.

- `/vokabeln` — Vocabulary: SRS flashcards (one at a time), **Learn in rounds of 20**, Review
  (shuffled), Words list. Daily goal banner. Beginners (A1) learn an ordered starter set first
  (`lib/vocab-starter.ts`) then flow into the full `lib/vocab-catalog.ts` (~2,900 words, A1–B1:
  hand-written core + `lib/vocab-b1.ts` B1 extension + `lib/vocab-imported.ts`, **generated** by `node scripts/import-vocab.mjs` from the Grund-/Ausbau-
  wortschatz CSVs in gitignored `scripts/data/`; correct entries in `scripts/vocab-import-fixes.mjs`
  and re-run — never edit the generated file). Word keys come from
  `normWord` (`lib/norm.ts`: strips il/lo/la/l'/i/gli/le/un/uno/una/un' + German articles).
- `/saetze` — translate example sentences (`public/vocab-examples.json`, keyed by `normWord`), plus a
  **Dictation** tab (listen → type, word-level diff in `lib/dictation.ts`).
- `/konjugation` — Verb conjugation from `lib/verb-catalog.ts`: short specs + a **rule engine**
  derives every tense up to B1 (presente, passato prossimo, imperfetto, futuro, imperativo,
  condizionale, congiuntivo); irregulars live in `IRREGULAR` (or via `base` for prefixed verbs).
  A per-device tense picker chooses what to drill (default: present for A1, else pres/pp/imperf; `TENSE_STORAGE_KEY`
  in `lib/tenses.ts`). Verbs have review intervals (`lib/verb-review.ts`: level 1–6, 1/3/7/14/30/60 days, a
  mistake resets to level 1; stored on the `ConjugationRecord`) and a "Review due verbs" button. Answer checking
  (`lib/conjugation-match.ts`) is **accent-insensitive** and accepts either ending of
  essere-participles written `andato/a` / `andati/e`.
  Every catalog word has a `topic` (`lib/vocab-topics.ts`); Learn can be narrowed to one topic
  (per-device choice) and the Words list grouped by topic. Imported words get their topic from
  `scripts/vocab-import-topics.mjs` (verbs auto-detected by ending).
- `/grammar` — two tabs: **Exercises** (34 hand-written cloze sets covering A1–B1 in
  `lib/grammar-exercises.ts`, grouped by level, each with rule + examples; choose/type modes, progress
  per topic in the `grammar` table) and **Lessons** (`lib/grammar-lessons.ts`; Italian: 29 lessons A1–B1 with a
  `level`, grouped by level, every exercise topic links one via `lessonId`; es/fr: first-steps lessons only).
- `/race` — **THE RACE**: global competitive leaderboard (see below).
- `/help`, `/profile`. Nav in `components/Navigation.tsx` (filters items by `onlyDirection`/`onlyLevel`).

## THE RACE (scoring model)

Global standings everyone sees; **one separate race per language** (`/api/race?lang=es`, racers =
profiles with a level or activity in that language).
- **Daily activity** per user = every vocab flashcard (+1) + every conjugated form (**half credit**,
  `round(total/2)`) + every grammar item (half credit) + every translated/dictated sentence (+2) + every reading
  question (+2), repeats included. Tracked in `stats.daily` (incremented in `recordExercise`),
  keyed by **Europe/Berlin date**.
- Each finished day awards **5/4/3/2/1** to the top daily scorers; **ties split the tiers evenly**;
  0 activity earns nothing. Logic is pure in `lib/race.ts` (`awardPoints`, `berlinDayStart`/`berlinToday`).
- `GET /api/race` is read-and-self-heal: it snapshots today's live count and **settles** finished days
  into cumulative `points` lazily (idempotent via `settledDates`) — no cron. It also keeps the top-5
  single-day records (`highscores`).

## Conventions & workflow

- **Day boundary is Europe/Berlin everywhere** (goal, daily counter, race settlement) — use
  `berlinToday()` / `berlinDayStart()` from `lib/race.ts`, not local time.
- Always `npx tsc --noEmit` and `npm run build` before committing.
- The user typically wants changes **committed and pushed to `main`** when done; **pushing to `main`
  auto-deploys to production** on Vercel. Branch off main if not told otherwise.
- Commit messages end with the Co-Authored-By trailer.
