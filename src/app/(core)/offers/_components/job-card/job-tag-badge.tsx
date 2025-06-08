import { Badge } from '@/components/ui/badge';

export default function JobTagBadge({
	children
}: React.PropsWithChildren) {
	return (
		<li>
			<Badge
				variant="outline"
				className="bg-background text-secondary-foreground font-normal"
			>
				{children}
			</Badge>
		</li>
	);
}
