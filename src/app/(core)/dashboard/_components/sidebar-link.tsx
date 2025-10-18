'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'flex items-center text-muted-foreground gap-2.5 px-3 py-2 text-sm rounded-md hover:bg-background hover:text-foreground hover:shadow-xs transition-colors duration-75',
          {
            'text-foreground bg-background shadow-xs': pathname === href
          }
        )}
      >
        {children}
      </Link>
    </li>
  );
}
