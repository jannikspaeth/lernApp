# Rename question texts in lib/laender/<code>/*.ts: stdin lines "old ==> new". Aborts (writes nothing) unless each old matches exactly once.
import sys, glob
code = sys.argv[1]
files = {p: open(p).read() for p in glob.glob(f'lib/laender/{code}/*.ts' if '/' not in code else f'{code}/*.ts')}
def esc(s): return s.replace('\\', '\\\\').replace("'", "\\'")
for line in sys.stdin.read().splitlines():
    if not line.strip(): continue
    old, new = [x.strip() for x in line.split('==>')]
    key = "['" + esc(old) + "',"
    hits = [(p, s.count(key)) for p, s in files.items() if key in s]
    if sum(c for _, c in hits) != 1:
        print('NOT UNIQUE/FOUND:', old, hits); sys.exit(1)
    p = hits[0][0]
    files[p] = files[p].replace(key, "['" + esc(new) + "',")
for p, s in files.items():
    if open(p).read() != s: open(p, 'w').write(s)
print('ok')
