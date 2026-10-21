import { redirect } from 'next/navigation';

// The science history lives on the subject page.
export default function WissenschaftPage() {
  redirect('/wissen/wissenschaft');
}
