import { redirect } from 'next/navigation';

// The language app's "Profile" tab lives on /profile in this app.
export default function KontoPage() {
  redirect('/profile');
}
