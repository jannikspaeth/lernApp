import { workView, type WorkView } from './kunst/works';
import { portraitView } from './literatur/portraits';
import { geschichteView } from './geschichte/portraits';
import { musikView } from './musik/portraits';

// A picture key used in a chapter (Subtopic.images) or a quiz card: an artwork from Kunst, an
// author portrait from Literatur, a person from Geschichte or a musician from Musik. The keys of
// all sets must stay distinct (scripts/check-literatur.ts and check-musik.ts check that).
export const bildView = (key: string): WorkView | null => workView(key) ?? portraitView(key) ?? geschichteView(key) ?? musikView(key);

// "Painter, year" below a picture — both parts are optional (many author portraits have neither).
export const bildCaption = (w: WorkView) => [w.artist, w.year].filter(Boolean).join(', ');
export type { WorkView };
