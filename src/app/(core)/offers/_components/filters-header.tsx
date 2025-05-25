import QuickFiltersProvider from '@/store/quick-filters';
import PositionTag from './position-tag';
import { Input } from '@/components/ui/input';

export default function FiltersHeader() {
	return (
		<header className="flex flex-col justify-center gap-2 px-7 py-4 bg-secondary border-b">
			<QuickFiltersProvider>
				<div className="flex gap-3">
					<Input
						placeholder="Search job"
						className="flex-1 bg-background"
					/>

					<Input
						placeholder="Search location"
						className="flex-1 bg-background"
					/>
				</div>

				<ul className="flex items-center gap-3">
					<li>
						<PositionTag tag="UI Designer" />
					</li>

					<li>
						<PositionTag tag="Frontend Developer" />
					</li>
				</ul>
			</QuickFiltersProvider>
		</header>
	);
}
