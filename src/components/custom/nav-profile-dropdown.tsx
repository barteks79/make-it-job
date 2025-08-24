'use client';

import { useRouter } from 'next/navigation';

import { authClient } from '@/lib/auth/client';
import { type SessionUser } from '@/lib/auth';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

import { BriefcaseBusinessIcon, InboxIcon, UserIcon, SettingsIcon, LogOutIcon } from 'lucide-react';
import DropdownLink from '@/components/custom/dropdown-link';

export default function NavProfileDropdown({ user }: { user: SessionUser }) {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        }
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="size-8">
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-60" align="end" sideOffset={6}>
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="size-10 rounded-lg">
              <AvatarImage className="object-cover object-center" src="/images/user-default1.jpg" />
              <AvatarFallback className="rounded-lg">Profile picture</AvatarFallback>
            </Avatar>

            <div className="grid flex-1 text-sm">
              <span className="truncate font-semibold">{user.name}</span>
              <span className="truncate text-foreground/80">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownLink href="/applications">
            <BriefcaseBusinessIcon />
            Applications
          </DropdownLink>

          <DropdownLink href="/inbox">
            <InboxIcon />
            Inbox
          </DropdownLink>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownLink href="/profile">
            <UserIcon />
            Profile
          </DropdownLink>

          <DropdownLink href="/settings">
            <SettingsIcon />
            Settings
          </DropdownLink>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
