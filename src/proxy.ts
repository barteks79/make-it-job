import { NextResponse, type NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

const privateRoutes = ['/dashboard', '/bookmarks'];

export function proxy(request: NextRequest) {
  const session = getSessionCookie(request);

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
