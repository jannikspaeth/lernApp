import { NextResponse } from 'next/server';
import { checkTables } from '@/lib/db';

// Setup check (no login needed, never shows secret values): are the env vars set
// and can the database be reached? Open /api/auth/health in the browser.
export const dynamic = 'force-dynamic';

// Legacy Supabase keys are JWTs; their payload says which role they are for.
function jwtRole(key: string): string | undefined {
  try {
    return JSON.parse(Buffer.from(key.split('.')[1] ?? '', 'base64url').toString()).role;
  } catch {
    return undefined;
  }
}

export async function GET() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
  const secret = process.env.AUTH_SECRET ?? '';
  const env = {
    SUPABASE_URL: !url
      ? 'FEHLT'
      : /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(url.trim())
      ? 'ok'
      : `gesetzt, mit Pfad (${url.trim().replace(/^https:\/\/[^/]+/, '')}) – wird ignoriert, besser nur https://xxxx.supabase.co eintragen`,
    SUPABASE_SERVICE_ROLE_KEY: !key
      ? 'FEHLT'
      : key.startsWith('sb_publishable_')
      ? 'FALSCHER KEY: das ist der publishable key, gebraucht wird secret/service_role'
      : jwtRole(key) === 'anon'
      ? 'FALSCHER KEY: das ist der anon key, gebraucht wird service_role'
      : key !== key.trim()
      ? 'gesetzt, aber mit Leerzeichen am Anfang/Ende'
      : 'gesetzt',
    AUTH_SECRET: !secret ? 'FEHLT' : secret.length < 32 ? `zu kurz (${secret.length} Zeichen, mindestens 32)` : 'ok',
  };
  let database: Record<string, string> | string = 'nicht geprüft (Supabase-Variablen fehlen)';
  if (url && key) {
    try {
      database = await checkTables();
    } catch (err) {
      database = `FEHLER: ${err instanceof Error ? err.message : String(err)}`;
    }
  }
  return new NextResponse(JSON.stringify({ env, database }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
