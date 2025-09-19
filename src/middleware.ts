import { NextResponse, type NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

const authRoutes = ['/sign-in', '/sign-up'];
const privateRoutes = ['/dashboard/profile', '/bookmarks'];

export function middleware(request: NextRequest) {
  const session = getSessionCookie(request);

  // redirect to "/" if already logged in
  if (session && authRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // redirect to "/sign-in" if not authorized
  if (!session && privateRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // all routes except /api, /public, /_next/static, /_next/image, /icon.png
  matcher: ['/((?!api|public|_next/static|_next/image|icon.png).*)']
};
