import { NextRequest, NextResponse } from 'next/server';
import { authorizedUserId } from '@/lib/auth';
import { getGrammar, setGrammar } from '@/lib/db';
import { GrammarRecord } from '@/lib/types';

export async function GET(req: NextRequest) {
  const userId = authorizedUserId(req);
  if (!userId) return NextResponse.json({ error: 'Not allowed' }, { status: 401 });
  const data = await getGrammar(userId);
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const userId = authorizedUserId(req);
  if (!userId) return NextResponse.json({ error: 'Not allowed' }, { status: 401 });
  const data = (await req.json()) as GrammarRecord[];
  await setGrammar(userId, data);
  return NextResponse.json({ ok: true });
}
