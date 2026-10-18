import { redirect } from 'next/navigation';

// The history lives on the subject page now.
export default function KunstPage() {
  redirect('/wissen/kunst');
}
