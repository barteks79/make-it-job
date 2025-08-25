import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';

import { type SessionUser } from '@/lib/auth';
import SidebarLink from './sidebar-link';

import { ChevronsLeftRightIcon, BriefcaseBusiness, Inbox, User, Settings } from 'lucide-react';
import CompanyLogo from '@/components/custom/company-logo';

export default function DashboardSidebar({ user }: { user: SessionUser }) {
  return (
    <aside className="relative flex flex-col gap-6 p-4 w-65 bg-secondary border-r h-full">
      <section className="flex flex-col gap-2">
        <h3 className="pl-2 text-sm uppercase text-muted-foreground">Dashboard</h3>

        <ul className="flex flex-col gap-1">
          <SidebarLink href="/dashboard/applications">
            <BriefcaseBusiness className="size-3.5" />
            Applications
          </SidebarLink>

          <SidebarLink href="/dashboard/inbox">
            <Inbox className="size-3.5" />
            Inbox
          </SidebarLink>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="pl-2 text-sm uppercase text-muted-foreground">Account</h3>

        <ul className="flex flex-col gap-1 h-full">
          <SidebarLink href="/dashboard/profile">
            <User className="size-3.5" />
            Profile
          </SidebarLink>

          <SidebarLink href="/dashboard/settings">
            <Settings className="size-3.5" />
            Settings
          </SidebarLink>
        </ul>
      </section>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative left-0 bottom-0 flex justify-between items-center hover:bg-background p-2 rounded-md transition-colors">
            <div className="flex items-center gap-2">
              <CompanyLogo
                image={user.image}
                providerImage={user.providerImage}
                className="size-8 rounded-lg"
                alt="User logo"
              />

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="text-muted-foreground truncate text-xs">{user.email}</span>
              </div>
            </div>

            <ChevronsLeftRightIcon className="rotate-90 size-4" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          side="right"
          align="end"
          sideOffset={5}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2">
              <CompanyLogo
                image={undefined}
                providerImage={'/images/user-default1.jpg'}
                className="size-8 rounded-lg"
                alt="User logo"
              />

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="text-muted-foreground truncate text-xs">{user.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </aside>
  );
}
