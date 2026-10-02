import { NextRequest, NextResponse } from 'next/server';
import { authorizedUserId } from '@/lib/auth';
import { getWissen, setWissen } from '@/lib/db';
import { WissenProgress } from '@/lib/wissen/progress';

// x-user-id is the plain profile id here (knowledge progress isn't per language).
export async function GET(req: NextRequest) {
  const userId = authorizedUserId(req);
  if (!userId) return NextResponse.json({ error: 'Not allowed' }, { status: 401 });
  return NextResponse.json(await getWissen(userId));
}

export async function PUT(req: NextRequest) {
  const userId = authorizedUserId(req);
  if (!userId) return NextResponse.json({ error: 'Not allowed' }, { status: 401 });
  const data = (await req.json()) as WissenProgress;
  await setWissen(userId, data);
  return NextResponse.json({ ok: true });
}
