'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const STATUS_TABS = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Accepted', value: 'accepted' },
  { label: 'Rejected', value: 'rejected' }
] as const;

const buildHref = (value: (typeof STATUS_TABS)[number]['value']) => {
  const basePath = '/dashboard/applications';
  if (value === 'all') {
    return basePath;
  }

  return `${basePath}?status=${value}`;
};

export function ApplicationTabs() {
  const searchParams = useSearchParams();
  const activeStatus = (searchParams.get('status') ?? 'all').toLowerCase();

  return (
    <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b">
      {STATUS_TABS.map(tab => {
        const isActive = activeStatus === tab.value;

        return (
          <Link
            key={tab.value}
            href={buildHref(tab.value)}
            className={cn(
              'py-2 border-b-2 border-transparent transition-colors duration-150 hover:text-foreground',
              {
                'text-foreground border-foreground': isActive
              }
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
