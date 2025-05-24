import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function FiltersHeader() {
	return (
		<header className="flex items-center px-7 h-28 bg-secondary border-b">
			<div className="flex flex-1 gap-4">
				<Input placeholder="Search job" className="flex-1 bg-background" />

				<Input
					placeholder="Search location"
					className="flex-1 bg-background"
				/>
			</div>
		</header>
	);
}
