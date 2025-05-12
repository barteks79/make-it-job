'use client';

import { useOptimistic, startTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { createFilterQuery, cn } from '@/lib/utils';
import slugify from 'slugify';

import { Checkbox } from '@/components/ui/checkbox';
import type { CategoryFilterOption } from '@/types/sidebar-filters';

export default function CategoryOption({
	option
}: {
	option: CategoryFilterOption;
}) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [optimisticIsChecked, setOptimisticIsChecked] = useOptimistic<
		boolean,
		boolean
	>(
		searchParams.get(slugify(option.name, { lower: true })) === 'true',
		(state, newIsChecked) => newIsChecked
	);

	function handleCheckedChange(checked: boolean) {
		startTransition(() => setOptimisticIsChecked(checked));

		const newUrl = createFilterQuery(
			searchParams,
			slugify(option.name, { lower: true }),
			checked ? 'true' : undefined
		);

		router.push(`${pathname}?${newUrl}`);
	}

	return (
		<li className="flex items-center gap-2.5">
			<Checkbox
				checked={optimisticIsChecked}
				onCheckedChange={handleCheckedChange}
			/>

			<label
				className={cn('text-sm text-foreground flex-1', {
					'font-medium': optimisticIsChecked
				})}
			>
				{option.name}
			</label>

			<span
				className={cn('text-sm text-muted-foreground', {
					'text-primary font-medium': optimisticIsChecked
				})}
			>
				{option.quantity}
			</span>
		</li>
	);
}
