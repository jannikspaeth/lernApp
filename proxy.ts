import { NextRequest, NextResponse } from 'next/server';
import { sessionProfileId } from '@/lib/auth';

// Everything except the login page and the auth API needs a signed-in user:
// pages redirect to /login, API calls get 401. Per-user ownership of the data is
// checked again in each route (authorizedUserId).
export function proxy(req: NextRequest) {
  if (sessionProfileId(req)) return NextResponse.next();
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  }
  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: [
    // Skip the login page, auth API, Next internals and public files (icons, manifest, sw.js).
    '/((?!login|api/auth|_next/static|_next/image|manifest.webmanifest|sw.js|favicon.ico|apple-icon.png|icon-.*\\.png|.*\\.(?:svg|json)$).*)',
  ],
};
