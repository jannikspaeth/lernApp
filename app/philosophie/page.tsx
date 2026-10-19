import { redirect } from 'next/navigation';

// The philosophy lives on the subject page.
export default function PhilosophiePage() {
  redirect('/wissen/philosophie');
}
