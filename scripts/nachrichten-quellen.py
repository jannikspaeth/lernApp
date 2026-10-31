#!/usr/bin/env python3
"""Prints the raw material for the news quiz of the given days (default: yesterday, Europe/Berlin):
Wikipedia "Portal:Current events" (world, cleaned wikitext) and the tagesschau.de API (Inland, Wirtschaft,
Ausland) with title, first sentence and URL. Used by the daily routine (scripts/nachrichten-routine.md).
Usage: python3 scripts/nachrichten-quellen.py [YYYY-MM-DD ...]"""
import datetime, json, re, sys, time, urllib.parse, urllib.request
from zoneinfo import ZoneInfo

UA = {'User-Agent': 'LernAppNewsQuiz/1.0 (https://github.com/jannikspaeth/lernApp)'}
MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


def get(url):
    for k in range(4):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60))
        except Exception as e:  # rate limits: wait and retry
            print(f'# retry {url}: {e}', file=sys.stderr)
            time.sleep(10 * (k + 1))
    return {}


def clean(s):
    s = re.sub(r'<ref[^>]*/>', '', s)
    s = re.sub(r'<ref[^>]*>.*?</ref>', '', s, flags=re.S)
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S)
    s = re.sub(r'\[https?://\S+ \(([^)]*)\)\]', r'(\1)', s)
    s = re.sub(r'\[https?://\S+[^\]]*\]', '', s)
    s = re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]*)\]\]', r'\1', s)
    s = re.sub(r"'''?", '', s)
    s = re.sub(r'\{\{[^{}]*\}\}', '', s)
    return s


def wikipedia(day):
    title = f'Portal:Current events/{day.year} {MONTHS[day.month - 1]} {day.day}'
    url = 'https://en.wikipedia.org/w/api.php?' + urllib.parse.urlencode(dict(
        action='query', prop='revisions', rvprop='content', rvslots='main', titles=title, format='json', formatversion=2))
    page = get(url).get('query', {}).get('pages', [{}])[0]
    text = page.get('revisions', [{}])[0].get('slots', {}).get('main', {}).get('content', '')
    src = 'https://en.wikipedia.org/wiki/' + title.replace(' ', '_')
    return src, clean(text)


def tagesschau(day, ressort):
    out, url = [], f'https://www.tagesschau.de/api2u/news?ressort={ressort}&date={day:%y%m%d}'
    d = get(url)
    for n in d.get('news', []):
        if n.get('date', '')[:10] == day.isoformat():
            out.append(f"- {n.get('title')} | {n.get('firstSentence') or ''} | {n.get('shareURL') or n.get('detailsweb')}")
    return out


def main():
    days = [datetime.date.fromisoformat(a) for a in sys.argv[1:]] or [
        datetime.datetime.now(ZoneInfo('Europe/Berlin')).date() - datetime.timedelta(days=1)]
    for day in days:
        src, text = wikipedia(day)
        print(f'=== {day} · WELT · {src}\n{text.strip() or "(noch keine Einträge)"}\n')
        for r in ['inland', 'wirtschaft', 'ausland']:
            lines = tagesschau(day, r)
            print(f'=== {day} · TAGESSCHAU {r.upper()}\n' + ('\n'.join(lines) or '(keine Meldungen)') + '\n')


if __name__ == '__main__':
    main()
