# Tägliche Nachrichten-Routine (News-Quiz `/nachrichten`)

Diese Anleitung führt die geplante Claude-Routine jeden Morgen aus. Sie ergänzt `lib/nachrichten/fragen.json`
um die Fragen zum Vortag und pusht nach `main`, worauf Vercel neu deployt.

## Ablauf

1. `python3 scripts/nachrichten-quellen.py` – gibt das Material des Vortags aus (Europe/Berlin):
   Wikipedia „Portal:Current events“ (Welt) und tagesschau.de Inland, Wirtschaft und Ausland.
   Fehlen Tage (Lücke seit dem jüngsten Datum in `fragen.json`), diese Tage als Argumente übergeben:
   `python3 scripts/nachrichten-quellen.py 2026-11-02 2026-11-03`.
2. Daraus pro Tag **3–6 Fragen für Deutschland** (`"r": "de"`) und **3–6 für die Welt** (`"r": "welt"`) schreiben,
   ans Ende von `lib/nachrichten/fragen.json` anhängen (bestehende Einträge nie ändern oder umsortieren).
3. Einträge löschen, deren Datum älter als 200 Tage ist.
4. `npx tsx scripts/check-nachrichten.ts` muss `OK` melden, dann `npx tsc --noEmit`.
5. Committen (`Nachrichten-Quiz: Fragen vom <Datum>`, mit Co-Authored-By-Zeile) und `git push origin main`.
   Gab es keine neuen Meldungen, nichts committen.

## Format eines Eintrags

```json
{ "id": "2026-11-02.de.1", "d": "2026-11-02", "r": "de", "k": "Politik",
  "q": "Wer wurde am 2. November 2026 …?", "a": "Richtige Antwort",
  "w": ["Falsch 1", "Falsch 2", "Falsch 3"],
  "i": "Ein, zwei Sätze Hintergrund – was danach wichtig ist.",
  "src": "https://www.tagesschau.de/…", "p": 2 }
```

- `id` = `<Datum>.<Region>.<laufende Nummer an diesem Tag>`; nie eine vorhandene id wiederverwenden.
- `d` = Datum des Ereignisses (nicht des Abrufs).
- `k` ∈ Politik, Wirtschaft, Gesellschaft, Wissenschaft, Sport, Kultur, Katastrophen, Konflikte, Recht, Umwelt.
- `p` = Wichtigkeit: 3 = große Geschichte des Monats (Wahlen, Rücktritte, Kriege, Rekorde), 2 = wichtig, 1 = Randnotiz.
  Fürs 6-Monats-Quiz werden 3er bevorzugt.
- `src` = die Quelle, aus der die Fakten stammen (tagesschau-URL oder die Wikipedia-Tagesseite).

## Regeln für gute Fragen

- **Nur Fakten, die in der Quelle stehen.** Nichts aus dem eigenen Gedächtnis ergänzen, keine Prognosen,
  keine laufenden Entwicklungen („Wer führt in den Umfragen?“).
- **Jede Frage steht für sich**: Sie nennt Person, Ort und Zeit („Anfang November 2026“, „am 2. November 2026“),
  nie „gestern“, „diese Woche“, „er“ oder „das Land“. Das Prüfskript lehnt relative Zeitangaben ab.
- Deutschland: Bundes- und Landespolitik, Wirtschaft, Gesellschaft, Sport und Kultur mit Deutschlandbezug.
  Welt: internationale Politik, Wahlen, Konflikte, Wissenschaft, große Katastrophen, Weltsport.
  Keine reinen Kriminalfälle ohne politische Bedeutung, keine Börsen-Tagesbewegungen, keine Promi-Klatschthemen.
- **Falsche Antworten**: gleiche Art wie die richtige (Person ↔ Person, Land ↔ Land, Zahl ↔ Zahl), plausibel,
  aber eindeutig falsch – nichts, was ebenfalls stimmen könnte, keine Scherzantworten.
- Zahlen sinnvoll runden und die falschen Zahlen deutlich abweichen lassen.
- Deutsch, sachlich, ohne Wertung; Namen in deutscher Schreibweise (Selenskyj, Lawrow).
