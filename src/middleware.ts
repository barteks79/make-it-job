import { NextResponse, type NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

import { authClient } from '@/lib/auth/client';

const authRoutes = ['/sign-in', '/sign-up'];
const privateRoutes = ['/dashboard', '/bookmarks'];

export async function middleware(request: NextRequest) {
  const session = getSessionCookie(request);

  // log out if trying to access auth routes while logged in
  if (session && authRoutes.includes(request.nextUrl.pathname)) {
    await authClient.revokeSession({ token: session });
    return NextResponse.next();
  }

  // redirect to "/sign-in" if not authorized
  if (!session && privateRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // all routes except /api, /public, /_next/static, /_next/image, /icon.png
  matcher: ['/((?!api|public|_next/static|_next/image|icon.png).*)']
};
