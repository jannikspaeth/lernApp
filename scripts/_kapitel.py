#!/usr/bin/env python3
"""Replace a country chapter's text + quiz from a plain spec file.

Usage: python3 scripts/_kapitel.py SPECFILE

Spec format (one item per line, blank lines ignored):
  FILE lib/laender/it/e1-antike.ts
  ID gruendung-etrusker
  T <paragraph>                        (repeat; becomes text[])
  L <question> => <answer> | <d1> / <d2> / <d3> || <info>   (leicht)
  M ...                                 (mittel)
  S ...                                 (schwer)
Several FILE/ID blocks may follow each other. Each level needs exactly 20 questions.
"""
import sys, re

def esc(s): return s.replace('\\', '\\\\').replace("'", "\\'")

def parse_q(line):
    body, _, info = line.partition(' || ')
    q, _, rest = body.partition(' => ')
    a, _, ds = rest.partition(' | ')
    d = [x.strip() for x in ds.split(' / ')]
    assert q and a and len(d) == 3, f'bad question: {line}'
    assert a not in d, f'answer among distractors: {line}'
    return q.strip(), a.strip(), d, info.strip()

def load(spec):
    blocks, cur = [], None
    for raw in open(spec, encoding='utf-8'):
        line = raw.rstrip('\n')
        if not line.strip() or line.startswith('#'): continue
        tag, _, rest = line.partition(' ')
        if tag == 'FILE': cur = {'file': rest.strip(), 'id': None, 'text': [], 'leicht': [], 'mittel': [], 'schwer': []}; blocks.append(cur)
        elif tag == 'ID': cur['id'] = rest.strip()
        elif tag == 'T': cur['text'].append(rest.strip())
        elif tag in ('L', 'M', 'S'): cur[{'L': 'leicht', 'M': 'mittel', 'S': 'schwer'}[tag]].append(parse_q(rest))
        else: raise SystemExit(f'unknown line: {line[:60]}')
    return blocks

def render(b, lines):
    i = [k for k, l in enumerate(lines) if l.strip() == f"id: '{b['id']}',"]
    assert len(i) == 1, f"id {b['id']} found {len(i)}x"
    i = i[0]
    t0 = next(k for k in range(i, len(lines)) if lines[k].strip() == 'text: [')
    t1 = next(k for k in range(t0, len(lines)) if lines[k].strip() == '],')
    ind = lines[t0][:len(lines[t0]) - len(lines[t0].lstrip())] + '  '
    q0 = next(k for k in range(t1, len(lines)) if lines[k].strip() == 'quiz: {')
    q1 = next(k for k in range(q0, len(lines)) if lines[k].strip() == '},')
    qind = lines[q0][:len(lines[q0]) - len(lines[q0].lstrip())] + '  '
    text = [f"{ind}'{esc(t)}'," for t in b['text']]
    quiz = []
    for lvl in ('leicht', 'mittel', 'schwer'):
        assert len(b[lvl]) == 20, (b['id'], lvl, len(b[lvl]))
        quiz.append(f'{qind}{lvl}: [')
        for q, a, d, info in b[lvl]:
            ds = ', '.join(f"'{esc(x)}'" for x in d)
            extra = f", '{esc(info)}'" if info else ''
            quiz.append(f"{qind}  ['{esc(q)}', '{esc(a)}', [{ds}]{extra}],")
        quiz.append(f'{qind}],')
    return lines[:t0 + 1] + text + lines[t1:q0 + 1] + quiz + lines[q1:]

for b in load(sys.argv[1]):
    src = open(b['file'], encoding='utf-8').read().split('\n')
    open(b['file'], 'w', encoding='utf-8').write('\n'.join(render(b, src)))
    print('ok', b['id'], len(''.join(b['text'])), 'chars,', len(b['text']), 'paragraphs')
