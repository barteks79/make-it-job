'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function NavItem({
	children,
	href
}: {
	children: ReactNode;
	href: string;
}) {
	const pathname = usePathname();
	const isActive = pathname.startsWith(href);

	return (
		<Link className={cn('')} href={href}>
			{children}
		</Link>
	);
}
