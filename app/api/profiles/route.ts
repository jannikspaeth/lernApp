import { NextRequest, NextResponse } from 'next/server';
import { dbConfigured, deleteAccount, deleteProfile, getAllProfiles, setProfileLevel } from '@/lib/db';
import { isBuiltInProfile } from '@/lib/profiles';
import { clearSessionCookie, sessionProfileId } from '@/lib/auth';
import { isLang } from '@/lib/lang';

// All profiles, with their level per language (names only — no account data).
// New profiles are created by signing up (/api/auth/register).
export async function GET() {
  return NextResponse.json(await getAllProfiles());
}

// Set the signed-in profile's level for one language: { id, lang, level }.
export async function PUT(req: NextRequest) {
  if (!dbConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  const { id, lang, level } = (await req.json().catch(() => ({}))) as {
    id?: unknown;
    lang?: unknown;
    level?: unknown;
  };
  const all = await getAllProfiles();
  if (typeof id !== 'string' || id !== sessionProfileId(req) || !all.some(p => p.id === id) || !isLang(lang) || (level !== 'A1' && level !== 'B1')) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  await setProfileLevel(id, lang, level);
  return NextResponse.json({ profiles: await getAllProfiles() });
}

// Delete the signed-in account and all its progress in every language: { id }.
export async function DELETE(req: NextRequest) {
  if (!dbConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  const { id } = (await req.json().catch(() => ({}))) as { id?: unknown };
  if (typeof id !== 'string' || id !== sessionProfileId(req) || !(await getAllProfiles()).some(p => p.id === id)) {
    return NextResponse.json({ error: 'Unknown profile' }, { status: 404 });
  }
  await deleteProfile(id, isBuiltInProfile(id));
  await deleteAccount(id);
  const res = NextResponse.json({ profiles: await getAllProfiles() });
  clearSessionCookie(res);
  return res;
}
