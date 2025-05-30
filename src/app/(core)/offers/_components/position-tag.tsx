'use client';

import { useQuickFilters, type JobTag } from '@/store/quick-filters';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PositionTag({ tag }: { tag: JobTag }) {
	const { activeJobTags, toggleJobTag } = useQuickFilters();
	const isActive = activeJobTags.includes(tag);

	return (
		<Button
			variant="outline"
			onClick={() => toggleJobTag(tag)}
			className={cn(
				'text-xs md:text-sm text-muted-foreground/70 font-normal h-6 md:h-7 hover:bg-background hover:text-muted-foreground/70 cursor-pointer',
				{
					'text-primary border-primary font-medium hover:text-primary':
						isActive
				}
			)}
		>
			{tag}
		</Button>
	);
}
