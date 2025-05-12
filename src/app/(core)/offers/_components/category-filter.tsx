'use client';

import slugify from 'slugify';
import { useOptimistic, startTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { createFilterQuery } from '@/lib/utils';

import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

import type { CategoryFilterOption } from '@/types/sidebar-filters';
import { type ReactNode } from 'react';

export default function CategoryFilter({
	children,
	isCustom = false,
	options
}: {
	children: ReactNode;
	isCustom?: boolean;
	options?: CategoryFilterOption[];
}) {
	return (
		<div className="flex flex-col gap-1.5 pt-4 pb-6 border-b last:border-none">
			{isCustom ? (
				children
			) : (
				<>
					<label className="font-medium text-sm">{children}</label>

					<ul className="flex flex-col gap-2.5">
						{options?.map((option, idx) => (
							<CategoryOption key={idx} option={option} />
						))}
					</ul>
				</>
			)}
		</div>
	);
}

function CategoryOption({ option }: { option: CategoryFilterOption }) {
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

	return (
		<li className="flex items-center gap-2.5">
			<Checkbox
				checked={optimisticIsChecked}
				onCheckedChange={(checked: boolean) => {
					startTransition(() => setOptimisticIsChecked(checked));

					const newUrl = createFilterQuery(
						searchParams,
						slugify(option.name, { lower: true })
					);

					router.push(`${pathname}?${newUrl}`);
				}}
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
