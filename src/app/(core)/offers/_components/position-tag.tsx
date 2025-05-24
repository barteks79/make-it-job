import { type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PositionTag({
	children,
	tag,
	isActive
}: {
	children: ReactNode;
	tag: string;
	isActive?: boolean;
}) {
	return (
		<Button
			variant="outline"
			className={cn(
				'text-sm text-muted-foreground/70 font-normal h-7 hover:bg-background hover:text-muted-foreground/70 cursor-pointer',
				{
					'text-primary border-primary font-medium hover:text-primary':
						isActive
				}
			)}
		>
			{children}
		</Button>
	);
}
