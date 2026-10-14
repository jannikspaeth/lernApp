import { workView, type WorkView } from './kunst/works';
import { portraitView } from './literatur/portraits';

// A picture key used in a chapter (Subtopic.images) or a quiz card: an artwork from
// Kunst or an author portrait from Literatur. The keys of both sets must stay distinct
// (scripts/check-literatur.ts checks that).
export const bildView = (key: string): WorkView | null => workView(key) ?? portraitView(key);

// "Painter, year" below a picture — both parts are optional (many author portraits have neither).
export const bildCaption = (w: WorkView) => [w.artist, w.year].filter(Boolean).join(', ');
export type { WorkView };
