'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function NavItem({
	children,
	href,
	className
}: {
	children: ReactNode;
	href: string;
	className?: string;
}) {
	const pathname = usePathname();
	const isActive = pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={cn(
				'text-foreground/80 transition-colors',
				{ 'text-foreground hover:text-foreground/80': isActive },
				className
			)}
		>
			{children}
		</Link>
	);
}
