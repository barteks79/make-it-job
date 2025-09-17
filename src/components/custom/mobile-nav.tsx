'use client';

import { authClient } from '@/lib/auth/client';

import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from '@/components/ui/drawer';
import { MenuIcon } from 'lucide-react';
import NavItem from './nav-item';

export default function MobileNav() {
  const { data: auth } = authClient.useSession();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="grid place-content-center size-8 cursor-pointer">
          <MenuIcon />
        </button>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-5 px-6 pb-4">
        <div className="flex flex-col gap-3">
          <NavItem className="text-xl" href="/">
            Home
          </NavItem>

          <NavItem className="text-xl" href="/offers">
            Offers
          </NavItem>

          {auth ? (
            <NavItem className="text-xl" href="/bookmarks">
              Bookmarks
            </NavItem>
          ) : undefined}
        </div>

        <div className="flex flex-col gap-3">
          {auth ? (
            <>
              <DrawerTitle className="text-2xl">Dashboard</DrawerTitle>

              <NavItem className="text-xl" href="/dashboard/applications">
                Applications
              </NavItem>

              <NavItem className="text-xl" href="/dashboard/inbox">
                Inbox
              </NavItem>

              <NavItem className="text-xl" href="/dashboard/profile">
                Profile
              </NavItem>

              <NavItem className="text-xl" href="/dashboard/settings">
                Settings
              </NavItem>
            </>
          ) : (
            <>
              <DrawerTitle className="text-2xl">Authenticate</DrawerTitle>

              <NavItem className="text-xl" href="/sign-in">
                Login
              </NavItem>

              <NavItem className="text-xl" href="/sign-up">
                Sign Up
              </NavItem>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
