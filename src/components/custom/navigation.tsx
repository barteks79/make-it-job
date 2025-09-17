'use client';

import { authClient } from '@/lib/auth/client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import MainNavigation from './main-navigation';
import NavProfileDropdown from './nav-profile-dropdown';
import MobileNav from './mobile-nav';
import NavItem from './nav-item';

export default function Navigation() {
  const { data: auth } = authClient.useSession();

  return (
    <nav className="flex justify-between items-center border-b px-3 md:px-8 h-14">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="md:hidden">
          <MobileNav />
        </div>

        <Link href="/" className="font-flavors text-lg tracking-wider uppercase text-foreground">
          MakeITJob
        </Link>

        <MainNavigation />
      </div>

      <ul className="flex items-center gap-2 md:gap-3">
        {auth ? (
          <>
            <Button className="size-8" variant="outline" size="icon">
              <Plus />
            </Button>

            <NavProfileDropdown />
          </>
        ) : (
          <NavItem href="/sign-in">Sign In</NavItem>
        )}
      </ul>
    </nav>
  );
}
