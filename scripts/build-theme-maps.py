#!/usr/bin/env python3
"""Builds the thematic maps of Geografie from Natural Earth 10m (public domain):
public/maps/admin-<cc>.json (states/regions, property n), rivers.json and lakes.json (property n).
Usage: python3 scripts/build-theme-maps.py <folder with the Natural Earth geojson files>"""
import json, os, subprocess, sys, tempfile

src = sys.argv[1]
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = os.path.join(root, 'public', 'maps')
ms = os.path.join(root, 'node_modules', '.bin', 'mapshaper')

admin = json.load(open(os.path.join(src, 'ne_10m_admin_1_states_provinces.geojson')))['features']

# country → (field with the region name, names to leave out, simplification)
COUNTRIES = {
    'DE': ('name', [], '12%'), 'AT': ('name', [], '15%'), 'CH': ('name', [], '15%'),
    'IT': ('region', [], '8%'), 'FR': ('region', ['Guadeloupe', 'Guyane française', 'Martinique', 'Mayotte', 'Réunion'], '8%'),
    'ES': ('region', ['Ceuta', 'Melilla'], '8%'), 'US': ('name', ['District of Columbia'], '6%'),
    'CA': ('name', [], '4%'), 'BR': ('name', [], '6%'),
    'AU': ('name', ['Ashmore and Cartier Islands', 'Jervis Bay Territory', 'Lord Howe Island', 'Macquarie Island'], '6%'),
}

def run(args):
    subprocess.run([ms, '-i', *args, '-quiet'], check=True, stdout=subprocess.DEVNULL)

for cc, (field, skip, simp) in COUNTRIES.items():
    feats = []
    for f in admin:
        p = f['properties']
        if p.get('iso_a2') != cc:
            continue
        n = p.get(field)
        if not n or n in skip:
            continue
        feats.append({'type': 'Feature', 'properties': {'n': n}, 'geometry': f['geometry']})
    with tempfile.NamedTemporaryFile('w', suffix='.geojson', delete=False) as t:
        json.dump({'type': 'FeatureCollection', 'features': feats}, t)
    args = [t.name, '-dissolve', 'n', '-simplify', simp, 'keep-shapes']
    if cc == 'ES':  # move the Canary Islands next to the mainland, as an inset
        args += ['-affine', "where=n=='Canary Is.'", 'shift=6,7']
    args += ['-o', 'format=topojson', 'precision=0.001', os.path.join(out, f'admin-{cc.lower()}.json')]
    run(args)
    os.unlink(t.name)

RIVERS = ['Rhine', 'Danube', 'Elbe', 'Nile', 'Amazonas', 'Mississippi', 'Yangtze', 'Volga', 'Oder', 'Weser', 'Main', 'Mosel', 'Ems',
          'Yenisey', 'Ob', 'Irtysh', 'Huang', 'Paraná', 'Congo', 'Amur', 'Ganges', 'Mekong', 'Seine', 'Thames', 'Po', 'Loire', 'Rhône',
          'Tevere', 'Ebro', 'Tajo', 'Tejo', 'Indus', 'Euphrates', 'Tigris', 'Lena', 'Orinoco', 'Zambezi', 'Niger', 'Colorado', 'Murray',
          'Dnipro', 'Don', 'Mur', 'Inn']
rivers = json.load(open(os.path.join(src, 'ne_10m_rivers_lake_centerlines.geojson')))['features']
sel = [{'type': 'Feature', 'properties': {'n': f['properties']['name']}, 'geometry': f['geometry']} for f in rivers if f['properties'].get('name') in RIVERS]
with tempfile.NamedTemporaryFile('w', suffix='.geojson', delete=False) as t:
    json.dump({'type': 'FeatureCollection', 'features': sel}, t)
run([t.name, '-dissolve', 'n', '-simplify', '15%', '-o', 'format=topojson', 'precision=0.01', os.path.join(out, 'rivers.json')])

LAKES = ['Lake Superior', 'Lake Michigan', 'Lake Huron', 'Lake Erie', 'Lake Ontario', 'Lake Baikal', 'Lake Victoria', 'Lago Titicaca',
         'Bodensee', 'Lake Geneva', 'Lago di Garda', 'Lake Ladoga', 'Lake Balaton', 'Lake Tanganyika']
lakes = json.load(open(os.path.join(src, 'ne_10m_lakes.geojson')))['features']
sel = [{'type': 'Feature', 'properties': {'n': f['properties']['name']}, 'geometry': f['geometry']} for f in lakes if f['properties'].get('name') in LAKES]
with tempfile.NamedTemporaryFile('w', suffix='.geojson', delete=False) as t:
    json.dump({'type': 'FeatureCollection', 'features': sel}, t)
run([t.name, '-dissolve', 'n', '-simplify', '20%', 'keep-shapes', '-o', 'format=topojson', 'precision=0.01', os.path.join(out, 'lakes.json')])
print('ok')
