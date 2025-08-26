import { BriefcaseBusiness, Inbox, User, Settings } from 'lucide-react';
import SidebarLink from './sidebar-link';

export default function DashboardSidebar() {
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
    </aside>
  );
}
