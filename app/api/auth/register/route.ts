import { NextRequest, NextResponse } from 'next/server';
import { createAccount, dbConfigured, getAccountByName, getProfilesRow, setProfilesRow } from '@/lib/db';
import { MAX_NAME_LENGTH, PROFILES, Profile, mergeProfiles, profileIdFor } from '@/lib/profiles';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, hashPassword, setSessionCookie } from '@/lib/auth';

// Sign up with { name, password }: creates the profile + account and signs in.
export async function POST(req: NextRequest) {
  if (!dbConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  const body = (await req.json().catch(() => ({}))) as { name?: unknown; password?: unknown };
  const name = typeof body.name === 'string' ? body.name.trim().replace(/\s+/g, ' ') : '';
  const password = typeof body.password === 'string' ? body.password : '';
  if (!name || name.length > MAX_NAME_LENGTH) {
    return NextResponse.json({ error: 'invalid_name' }, { status: 400 });
  }
  if (password.length < MIN_PASSWORD_LENGTH || password.length > MAX_PASSWORD_LENGTH) {
    return NextResponse.json({ error: 'invalid_password' }, { status: 400 });
  }

  // Strict read so a failed read can't overwrite the list with just the new entry.
  const row = await getProfilesRow();
  const all = mergeProfiles(row.profiles, row.levels, row.deleted);
  if ((await getAccountByName(name)) || all.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    return NextResponse.json({ error: 'name_taken' }, { status: 409 });
  }

  // Never reuse an id (deleted profiles stay out of the race history).
  const taken = new Set([...PROFILES, ...row.profiles].map(p => p.id).concat(row.deleted));
  const profile: Profile = { id: profileIdFor(name, taken), name };
  await createAccount(profile.id, name, await hashPassword(password));
  row.profiles.push(profile);
  await setProfilesRow(row);

  const res = NextResponse.json({ profile, profiles: mergeProfiles(row.profiles, row.levels, row.deleted) });
  setSessionCookie(res, profile.id);
  return res;
}
