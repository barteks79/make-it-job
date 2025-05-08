import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from '@/components/ui/select';

export default function DateSelect({
	defaultValue
}: {
	defaultValue?: 'anytime' | '3days' | 'week' | 'month';
}) {
	return (
		<Select defaultValue={defaultValue || 'anytime'}>
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
