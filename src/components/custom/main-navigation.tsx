import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

import { Settings, User, Inbox, BriefcaseBusiness } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

export default function MainNavigation({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList className="gap-1">
        {isAuthenticated ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-1 w-[450px]">
                <ListItem title="Profile" href="/dashboard/profile" icon={User}>
                  Customize your public profile visible to employers.
                </ListItem>

                <ListItem title="Settings" href="/dashboard/settings" icon={Settings}>
                  Update your account and appearance settings.
                </ListItem>

                <ListItem title="Inbox" href="/dashboard/inbox" icon={Inbox}>
                  View your messages and notifications.
                </ListItem>

                <ListItem
                  title="Applications"
                  href="/dashboard/applications"
                  icon={BriefcaseBusiness}
                >
                  Track your job applications and their status.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : undefined}

        <NavigationMenuItem>
          <NavigationMenuTrigger>Offers</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-1 w-[450px]">
              <li className="row-span-3">
                <NavigationMenuLink className="grid place-items-center h-full" href="/offers">
                  <div className="flex flex-col gap-1 text-center">
                    <span className="text-base leading-none font-medium">All Offers</span>
                    <p className="text-muted-foreground text-sm leading-snug">
                      Surf all available offers and adjust filters with your preferences.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>

              <ListItem title="Web Development" href="/dashboard/profile">
                Building and maintaining web applications.
              </ListItem>

              <ListItem title="Graphics Design" href="/dashboard/settings">
                Creating visual content and user experiences design.
              </ListItem>

              <ListItem title="Cyber Security" href="/dashboard/inbox">
                Protecting systems, networks, and data from cyber attacks.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {isAuthenticated ? (
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/bookmarks">Bookmarks</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ) : undefined}

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  href: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  const Icon = icon;

  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex items-center gap-1.5">
            {Icon ? <Icon className="inline-block size-3.5 text-foreground" /> : undefined}
            <span className="text-sm leading-none font-medium">{title}</span>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
