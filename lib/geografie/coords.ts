// Coordinates [lon, lat] for the point maps of Geografie (rounded, enough for a map dot).
export const POINTS: Record<string, [number, number]> = {
  // mountains
  'Mount Everest': [86.925, 27.988], K2: [76.513, 35.881], 'Kangchendzönga': [88.147, 27.703], Lhotse: [86.933, 27.962], Makalu: [87.089, 27.889],
  'Cho Oyu': [86.661, 28.094], Dhaulagiri: [83.493, 28.697], Manaslu: [84.559, 28.55], 'Nanga Parbat': [74.589, 35.237], Annapurna: [83.82, 28.596],
  'Gasherbrum I': [76.696, 35.724], 'Broad Peak': [76.565, 35.811], 'Gasherbrum II': [76.653, 35.758], Shishapangma: [85.78, 28.353],
  Aconcagua: [-70.011, -32.653], Denali: [-151.007, 63.069], Kilimandscharo: [37.355, -3.066], Elbrus: [42.439, 43.355], 'Mount Vinson': [-85.617, -78.525],
  'Puncak Jaya': [137.158, -4.079], 'Mont Blanc': [6.865, 45.833], Zugspitze: [10.985, 47.421], 'Großglockner': [12.694, 47.075], Dufourspitze: [7.867, 45.937],
  Fuji: [138.727, 35.361], Ararat: [44.299, 39.702], 'Aoraki / Mount Cook': [170.142, -43.595], 'Mount Kenya': [37.308, -0.152], 'Mount Logan': [-140.406, 60.567],
  'Pico de Orizaba': [-97.268, 19.03], Teide: [-16.642, 28.272], Damavand: [52.109, 35.955], 'Mount Kosciuszko': [148.263, -36.456],
  // volcanoes (by name)
  Vesuv: [14.426, 40.821], 'Ätna': [14.995, 37.751], Stromboli: [15.213, 38.789], Krakatau: [105.423, -6.102], 'Mount St. Helens': [-122.191, 46.191],
  'Eyjafjallajökull': [-19.613, 63.633], 'Popocatépetl': [-98.622, 19.023], Pinatubo: [120.35, 15.143], Kilauea: [-155.287, 19.421], 'Mauna Loa': [-155.608, 19.475],
  'Mount Pelée': [-61.165, 14.809], Tambora: [117.993, -8.247], Cotopaxi: [-78.437, -0.681], 'Santorin (Thera)': [25.396, 36.404], 'Ojos del Salado': [-68.541, -27.109],
  Erebus: [167.153, -77.53], Merapi: [110.446, -7.541],
  // waterfalls (by the key of the quiz, without article)
  'Angel Falls (höchster Wasserfall der Erde)': [-62.536, 5.968], 'Victoriafälle': [25.857, -17.925], 'Niagarafälle': [-79.075, 43.08], 'Iguazú-Wasserfälle': [-54.444, -25.695],
  'Rheinfall (größter Wasserfall Mitteleuropas)': [8.615, 47.678], 'Krimmler Wasserfälle': [12.17, 47.208], Gullfoss: [-20.121, 64.326], Dettifoss: [-16.384, 65.814],
  'Yosemite Falls': [-119.597, 37.756], 'Kaieteur-Fälle': [-59.48, 5.175], 'Tugela-Fälle': [28.894, -28.752], 'Sutherland Falls': [167.716, -44.8],
  'Plitvicer Wasserfälle': [15.61, 44.88], 'Triberger Wasserfälle': [8.231, 48.13], 'Gavarnie-Fälle': [-0.009, 42.695],
  // deserts
  Sahara: [13, 23], Gobi: [105, 43], Kalahari: [22, -23], Namib: [15, -24], Atacama: [-69.5, -24], Mojave: [-116, 35], Thar: [71, 27], Negev: [34.8, 30.8],
  'Rub al-Chali': [50, 20], Taklamakan: [83, 39], 'Große Victoriawüste': [128, -29], Sonora: [-113, 32], Karakum: [59, 39], Danakil: [40.3, 14.2], 'Libysche Wüste': [25, 25],
  // cities
  Tokio: [139.69, 35.69], Delhi: [77.21, 28.61], Shanghai: [121.47, 31.23], Dhaka: [90.41, 23.81], 'São Paulo': [-46.63, -23.55], 'Mexiko-Stadt': [-99.13, 19.43],
  Kairo: [31.24, 30.04], Peking: [116.41, 39.9], Mumbai: [72.88, 19.08], Osaka: [135.5, 34.69], Chongqing: [106.55, 29.56], Karatschi: [67.01, 24.86],
  Istanbul: [28.98, 41.01], 'Buenos Aires': [-58.38, -34.6], Kolkata: [88.36, 22.57], Lagos: [3.38, 6.52], Kinshasa: [15.27, -4.44], Manila: [120.98, 14.6],
  Tianjin: [117.2, 39.13], 'Rio de Janeiro': [-43.17, -22.91],
  Berlin: [13.4, 52.52], Hamburg: [9.99, 53.55], 'München': [11.58, 48.14], 'Köln': [6.96, 50.94], 'Frankfurt am Main': [8.68, 50.11], Stuttgart: [9.18, 48.78],
  'Düsseldorf': [6.77, 51.23], Leipzig: [12.37, 51.34], Dortmund: [7.47, 51.51], Essen: [7.01, 51.46], Bremen: [8.8, 53.08], Dresden: [13.74, 51.05],
  Hannover: [9.73, 52.37], 'Nürnberg': [11.08, 49.45], Duisburg: [6.76, 51.43], Potsdam: [13.06, 52.39], Wiesbaden: [8.24, 50.08], Schwerin: [11.4, 53.63],
  Mainz: [8.27, 50.0], 'Saarbrücken': [6.99, 49.24], Magdeburg: [11.63, 52.12], Kiel: [10.12, 54.32], Erfurt: [11.03, 50.98],
};

// German names → the region names in the Natural Earth maps (public/maps/admin-<cc>.json).
export const SHAPE_NAMES: Record<string, string> = {
  'Luzern': 'Lucerne', 'Freiburg': 'Fribourg', 'Freiburg (Fribourg)': 'Fribourg', 'St. Gallen': 'Sankt Gallen', 'Tessin': 'Ticino', 'Waadt': 'Vaud', 'Wallis': 'Valais',
  'Neuenburg': 'Neuchâtel', 'Genf': 'Genève',
  'Aostatal': "Valle d'Aosta", 'Piemont': 'Piemonte', 'Lombardei': 'Lombardia', 'Trentino-Südtirol': 'Trentino-Alto Adige', 'Venetien': 'Veneto',
  'Friaul-Julisch Venetien': 'Friuli-Venezia Giulia', 'Ligurien': 'Liguria', 'Toskana': 'Toscana', 'Umbrien': 'Umbria', 'Marken': 'Marche', 'Latium': 'Lazio',
  'Abruzzen': 'Abruzzo', 'Kampanien': 'Campania', 'Apulien': 'Apulia', 'Basilikata': 'Basilicata', 'Kalabrien': 'Calabria', 'Sizilien': 'Sicily', 'Sardinien': 'Sardegna',
  'Korsika': 'Corse', 'Okzitanien': 'Occitanie', 'Provence-Alpes-Côte d’Azur': "Provence-Alpes-Côte-d'Azur",
  'Andalusien': 'Andalucía', 'Aragonien': 'Aragón', 'Asturien': 'Asturias', 'Balearen': 'Islas Baleares', 'Baskenland': 'País Vasco', 'Kanarische Inseln': 'Canary Is.',
  'Kantabrien': 'Cantabria', 'Kastilien-La Mancha': 'Castilla-La Mancha', 'Kastilien und León': 'Castilla y León', 'Katalonien': 'Cataluña', 'Galicien': 'Galicia',
  'Navarra': 'Foral de Navarra', 'Valencia': 'Valenciana',
  'Kalifornien': 'California', 'Washington (Bundesstaat)': 'Washington',
  'Neufundland und Labrador': 'Newfoundland and Labrador', 'Nordwest-Territorien': 'Northwest Territories', 'Tasmanien': 'Tasmania',
};

// German river names → names in public/maps/rivers.json.
export const RIVER_NAMES: Record<string, string[]> = {
  Nil: ['Nile'], Amazonas: ['Amazonas'], Jangtse: ['Yangtze'], Mississippi: ['Mississippi'], Jenissei: ['Yenisey'], 'Gelber Fluss': ['Huang'], 'Gelbe Fluss (Huang He)': ['Huang'],
  Ob: ['Ob', 'Irtysh'], 'Paraná': ['Paraná'], Kongo: ['Congo'], Amur: ['Amur'], Rhein: ['Rhine'], Elbe: ['Elbe'], Donau: ['Danube'], Main: ['Main'], Weser: ['Weser'],
  Oder: ['Oder'], Mosel: ['Mosel'], Ems: ['Ems'], Wolga: ['Volga'], Ganges: ['Ganges'], Mekong: ['Mekong'], 'Rhône': ['Rhône'], Seine: ['Seine'], Loire: ['Loire'],
  Po: ['Po'], Tiber: ['Tevere'], Ebro: ['Ebro'], Tejo: ['Tajo', 'Tejo'], Themse: ['Thames'], Indus: ['Indus'], 'Euphrat und Tigris (als Schatt al-Arab)': ['Euphrates', 'Tigris'],
  Lena: ['Lena'], Orinoco: ['Orinoco'], Sambesi: ['Zambezi'], Niger: ['Niger'], 'Colorado River': ['Colorado'], Murray: ['Murray'], Dnepr: ['Dnipro'], Don: ['Don'],
};
