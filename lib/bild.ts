import { workView, type WorkView } from './kunst/works';
import { portraitView } from './literatur/portraits';
import { geschichteView } from './geschichte/portraits';
import { musikView } from './musik/portraits';
import { philoView } from './philosophie/portraits';
import { wisView } from './wissenschaft/bilder';
import { polView } from './politik/bilder';

// A picture key used in a chapter (Subtopic.images) or a quiz card: an artwork from Kunst, an
// author portrait from Literatur, a person from Geschichte, a musician from Musik, a philosopher from Philosophie or a picture from Wissenschaft. The keys
// of all sets must stay distinct (scripts/check-literatur.ts, check-musik.ts, check-philosophie.ts and check-wissenschaft.ts check that).
export const bildView = (key: string): WorkView | null => workView(key) ?? portraitView(key) ?? geschichteView(key) ?? musikView(key) ?? philoView(key) ?? wisView(key) ?? polView(key);

// "Painter, year" below a picture — both parts are optional (many author portraits have neither).
export const bildCaption = (w: WorkView) => [w.artist, w.year].filter(Boolean).join(', ');
export type { WorkView };
