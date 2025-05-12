'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';
import { cn } from '@/lib/utils';
import slugify from 'slugify';

import { Checkbox } from '@/components/ui/checkbox';
import type { CategoryFilterOption } from '@/types/sidebar-filters';

export default function CategoryOption({
	option
}: {
	option: CategoryFilterOption;
}) {
	const paramName = slugify(option.name, { lower: true });
	const [optimisticValue, setOptimisticValue] =
		useOptimisticFilter<boolean>(paramName, false);

	return (
		<li className="flex items-center gap-2.5">
			<Checkbox
				checked={!!optimisticValue}
				onCheckedChange={setOptimisticValue}
			/>

			<label
				className={cn('text-sm text-foreground flex-1', {
					'font-medium': optimisticValue
				})}
			>
				{option.name}
			</label>

			<span
				className={cn('text-sm text-muted-foreground', {
					'text-primary font-medium': optimisticValue
				})}
			>
				{option.quantity}
			</span>
		</li>
	);
}
