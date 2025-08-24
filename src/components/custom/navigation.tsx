import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import NavProfileDropdown from './nav-profile-dropdown';
import MobileNav from './mobile-nav';
import NavItem from './nav-item';

export default async function Navigation() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  return (
    <nav className="flex justify-between items-center border-b px-3 md:px-8 h-14">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="md:hidden">
          <MobileNav isAuthenticated={!!session} />
        </div>

        <Link href="/" className="font-flavors text-lg tracking-wider uppercase text-foreground">
          MakeITJob
        </Link>

        <ul className="hidden md:flex md:items-center gap-6 ">
          <NavItem href="/dashboard">Dashboard</NavItem>
          <NavItem href="/offers">Offers</NavItem>
          <NavItem href="/bookmarks">Bookmarks</NavItem>
          <NavItem href="/pricing">Pricing</NavItem>
        </ul>
      </div>

      <ul className="flex items-center gap-2 md:gap-3">
        {session ? (
          <>
            <Button className="size-8" variant="outline" size="icon">
              <Plus />
            </Button>

            <NavProfileDropdown user={session.user} />
          </>
        ) : (
          <NavItem href="/sign-in">Sign In</NavItem>
        )}
      </ul>
    </nav>
  );
}
