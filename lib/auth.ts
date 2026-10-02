import { createHmac, randomBytes, scrypt as scryptCb, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import type { NextRequest, NextResponse } from 'next/server';
import { parseDataUserId } from './lang';

// Server-only: name + password accounts with a signed session cookie.
// The cookie holds `<profile id>.<expiry ms>.<HMAC>`; the secret is AUTH_SECRET.

const scrypt = promisify(scryptCb) as (pw: string, salt: Buffer, len: number) => Promise<Buffer>;

export const SESSION_COOKIE = 'lernapp_session';
const SESSION_DAYS = 365;
export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 200;

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s || s.length < 32) throw new Error('AUTH_SECRET is missing or shorter than 32 characters');
  return s;
}

// ─── passwords (scrypt, random salt; stored as `scrypt$<salt hex>$<hash hex>`) ──

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const hash = await scrypt(password, salt, 64);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [algo, saltHex, hashHex] = stored.split('$');
  if (algo !== 'scrypt' || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, 'hex');
  const actual = await scrypt(password, Buffer.from(saltHex, 'hex'), expected.length);
  return timingSafeEqual(actual, expected);
}

// ─── session token ──────────────────────────────────────────────────────────────

function sign(payload: string): string {
  return createHmac('sha256', secret()).update(payload).digest('base64url');
}

export function createSessionToken(profileId: string): string {
  const payload = `${profileId}.${Date.now() + SESSION_DAYS * 86_400_000}`;
  return `${payload}.${sign(payload)}`;
}

// Profile id of a valid, unexpired token — else null.
export function verifySessionToken(token: string | undefined): string | null {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [id, exp, sig] = parts;
  const expected = Buffer.from(sign(`${id}.${exp}`));
  const given = Buffer.from(sig);
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;
  if (!(Number(exp) > Date.now())) return null;
  return id;
}

export function sessionProfileId(req: NextRequest): string | null {
  return verifySessionToken(req.cookies.get(SESSION_COOKIE)?.value);
}

export function setSessionCookie(res: NextResponse, profileId: string): void {
  res.cookies.set(SESSION_COOKIE, createSessionToken(profileId), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DAYS * 86_400,
  });
}

export function clearSessionCookie(res: NextResponse): void {
  res.cookies.set(SESSION_COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 });
}

// The data user id a request may act as: the `x-user-id` header (profile id,
// optionally with a `:lang` suffix), but only when it belongs to the signed-in
// profile. Null → answer 401.
export function authorizedUserId(req: NextRequest): string | null {
  const me = sessionProfileId(req);
  const header = req.headers.get('x-user-id');
  if (!me || !header) return null;
  return parseDataUserId(header).profileId === me ? header : null;
}
