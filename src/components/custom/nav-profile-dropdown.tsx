import { type SessionUser } from '@/lib/auth';

import { Button } from '@/components/ui/button';
import CompanyLogo from './company-logo';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup
} from '@/components/ui/dropdown-menu';
import DropdownLink from '@/components/custom/dropdown-link';
import DropdownLogout from './dropdown-logout';

import { BriefcaseBusinessIcon, InboxIcon, UserIcon, SettingsIcon } from 'lucide-react';

export default function NavProfileDropdown({ user }: { user: SessionUser }) {
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
            <CompanyLogo
              image={user.image}
              providerImage={user.providerImage}
              className="size-10"
              alt="Profile Picture"
            />

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

        <DropdownLogout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
