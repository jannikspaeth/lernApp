# Like scripts/_fix.py, but Q replacement lines use dump format: "question => answer | d1 / d2 / d3"
import sys
p = sys.argv[1]
src = open(p).read()
def esc(s): return s.strip().replace('\\', '\\\\').replace("'", "\\'")
def esc_old(s): return s.replace("'", "\\'")
for b in sys.stdin.read().split('\n----\n'):
    b = b.strip('\n')
    if not b: continue
    head, new = b.split('\n', 1)
    kind, old = head[0], head[2:]
    if kind == 'Q':
        q, rest = new.split(' => ', 1)
        a, ds = rest.split(' | ', 1)
        info = None
        if ' || ' in ds: ds, info = ds.split(' || ', 1)
        ds = [d for d in ds.split(' / ')]
        line = "['%s', '%s', [%s]%s]," % (esc(q), esc(a), ', '.join("'%s'" % esc(d) for d in ds), (", '%s'" % esc(info)) if info else '')
        lines = src.split('\n')
        key = "['" + esc_old(old) + "'"
        hits = [i for i, l in enumerate(lines) if l.strip().startswith(key)]
        if len(hits) != 1:
            print('Q NOT UNIQUE/FOUND:', old, len(hits)); sys.exit(1)
        l = lines[hits[0]]
        indent = l[:len(l) - len(l.lstrip())]
        lines[hits[0]] = indent + line
        src = '\n'.join(lines)
    else:
        o = esc_old(old); n = esc_old(new)
        if o not in src:
            print('T NOT FOUND:', old[:100]); sys.exit(1)
        src = src.replace(o, n, 1)
open(p, 'w').write(src)
print('ok', p)
