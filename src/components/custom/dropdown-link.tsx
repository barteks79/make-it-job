'use client';

import { useRouter } from 'next/navigation';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { type ReactNode } from 'react';

export default function DropdownLink({
	children,
	href
}: {
	children: ReactNode;
	href: string;
}) {
	const router = useRouter();

	return (
		<DropdownMenuItem onSelect={() => router.push(href)}>
			{children}
		</DropdownMenuItem>
	);
}
