import WeltgeschichteView from '@/components/welt/WeltgeschichteView';
import { WikiArticle } from '@/components/welt/History';
import { HISTORY_FETCHED, continentHistory } from '@/lib/welt/geschichte';
import { DETAILED } from '@/lib/laender';

export default function WeltgeschichtePage() {
  const intro = continentHistory('welt');
  return (
    <WeltgeschichteView
      intro={intro && <WikiArticle text={intro} fetched={HISTORY_FETCHED} />}
      detailed={Object.keys(DETAILED)}
    />
  );
}
