'use client';

import type { ReactNode } from 'react';
import { useUiLang } from '@/lib/ui-lang';

// UI text in both interface languages, usable inside server components.
export default function Tx({ en, de }: { en: ReactNode; de: ReactNode }) {
  const [lang] = useUiLang();
  return <>{lang === 'de' ? de : en}</>;
}
