import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

import type { CategoryFilterOption } from '@/types/sidebar-filters';
import { type ReactNode } from 'react';

export default function CategoryFilter({
	children,
	isCustom = false,
	options = [
		{ isChecked: true, name: 'Option 1', quantity: 6 },
		{ isChecked: false, name: 'Option 2', quantity: 0 }
	]
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
	return (
		<li className="flex items-center gap-2.5">
			<Checkbox id={option.name} defaultChecked={option.isChecked} />

			<label
				htmlFor={option.name}
				className={cn('text-sm text-foreground flex-1', {
					'font-medium': option.isChecked
				})}
			>
				{option.name}
			</label>

			<span
				className={cn('text-sm text-muted-foreground', {
					'text-primary font-medium': option.isChecked
				})}
			>
				{option.quantity}
			</span>
		</li>
	);
}
