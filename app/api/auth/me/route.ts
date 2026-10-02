import { NextRequest, NextResponse } from 'next/server';
import { getAllProfiles } from '@/lib/db';
import { sessionProfileId } from '@/lib/auth';

// The signed-in profile, or 401.
export async function GET(req: NextRequest) {
  const id = sessionProfileId(req);
  const profile = id ? (await getAllProfiles()).find(p => p.id === id) : undefined;
  if (!profile) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  return NextResponse.json({ profile });
}
