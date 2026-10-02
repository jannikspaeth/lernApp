import { NextRequest, NextResponse } from 'next/server';
import { dbConfigured, getAccountByName, getAllProfiles } from '@/lib/db';
import { setSessionCookie, verifyPassword } from '@/lib/auth';

// Sign in with { name, password }. Same answer for an unknown name and a wrong
// password, so names can't be probed.
export async function POST(req: NextRequest) {
  try {
    return await handle(req);
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error('login failed:', detail);
    return NextResponse.json({ error: 'server', detail }, { status: 500 });
  }
}

async function handle(req: NextRequest): Promise<NextResponse> {
  if (!dbConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  const body = (await req.json().catch(() => ({}))) as { name?: unknown; password?: unknown };
  const name = typeof body.name === 'string' ? body.name : '';
  const password = typeof body.password === 'string' ? body.password : '';
  const account = name && password ? await getAccountByName(name) : null;
  if (!account || !(await verifyPassword(password, account.passwordHash))) {
    return NextResponse.json({ error: 'wrong_credentials' }, { status: 401 });
  }
  const profiles = await getAllProfiles();
  const profile = profiles.find(p => p.id === account.profileId);
  if (!profile) return NextResponse.json({ error: 'wrong_credentials' }, { status: 401 });

  const res = NextResponse.json({ profile, profiles });
  setSessionCookie(res, profile.id);
  return res;
}
