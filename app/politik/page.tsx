import { redirect } from 'next/navigation';

// The politics chapters live on the subject page.
export default function PolitikPage() {
  redirect('/wissen/politik');
}
