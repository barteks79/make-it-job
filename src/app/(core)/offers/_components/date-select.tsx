'use client';

import { useOptimistic, startTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { createFilterQuery } from '@/lib/utils';

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from '@/components/ui/select';

type DateSelectValue = 'anytime' | '3days' | 'week' | 'month';

export default function DateSelect() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [optimisticValue, setOptimisticValue] = useOptimistic<
		DateSelectValue,
		DateSelectValue
	>(
		(searchParams.get('date') as DateSelectValue) ?? 'anytime',
		(state, newValue) => newValue
	);

	function handleValueChange(value: DateSelectValue) {
		startTransition(() => setOptimisticValue(value));
		const newUrl = createFilterQuery(searchParams, 'date', value);
		router.push(`${pathname}?${newUrl}`);
	}

	return (
		<Select value={optimisticValue} onValueChange={handleValueChange}>
			<SelectTrigger className="text-sm bg-background w-full" size="sm">
				<SelectValue placeholder="Select date" />
			</SelectTrigger>

			<SelectContent className="text-sm">
				<SelectItem value="anytime">Anytime</SelectItem>
				<SelectItem value="3days">Last 3 days</SelectItem>
				<SelectItem value="week">Last week</SelectItem>
				<SelectItem value="month">Last month</SelectItem>
			</SelectContent>
		</Select>
	);
}
