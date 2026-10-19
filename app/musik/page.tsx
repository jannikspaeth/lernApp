import { redirect } from 'next/navigation';

// The music history lives on the subject page.
export default function MusikPage() {
  redirect('/wissen/musik');
}
