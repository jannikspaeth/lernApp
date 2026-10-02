import { NextRequest, NextResponse } from 'next/server';
import { authorizedUserId } from '@/lib/auth';
import { getVocab, upsertVocabWord } from '@/lib/db';
import { VocabEntry } from '@/lib/types';

export async function GET(req: NextRequest) {
  const userId = authorizedUserId(req);
  if (!userId) return NextResponse.json({ error: 'Not allowed' }, { status: 401 });
  const data = await getVocab(userId);
  return NextResponse.json(data);
}

// Upsert a single word (per-row). Never rewrites the whole list.
export async function POST(req: NextRequest) {
  const userId = authorizedUserId(req);
  if (!userId) return NextResponse.json({ error: 'Not allowed' }, { status: 401 });
  const entry = (await req.json()) as VocabEntry;
  await upsertVocabWord(userId, entry);
  return NextResponse.json({ ok: true });
}
