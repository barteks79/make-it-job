'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from '@/components/ui/select';

type DateSelectValue = 'anytime' | '3days' | 'week' | 'month';

export default function DateSelect() {
	const [optimisticValue, setOptimisticValue] =
		useOptimisticFilter<DateSelectValue>('date', 'anytime');

	return (
		<Select value={optimisticValue} onValueChange={setOptimisticValue}>
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
