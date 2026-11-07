import { redirect } from 'next/navigation';

// The personality quizzes were removed; old links lead to the guessing game.
export default function PersoenlichkeitPage() {
  redirect('/wissen/allgemeinwissen/wer-bin-ich');
}
