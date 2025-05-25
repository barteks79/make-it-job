import QuickFiltersProvider from '@/store/quick-filters';
import PositionTag from './position-tag';
import { Input } from '@/components/ui/input';
import { jobTags } from '@/config/job-tags';

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
					{jobTags.map(tag => (
						<li key={tag}>
							<PositionTag tag={tag} />
						</li>
					))}
				</ul>
			</QuickFiltersProvider>
		</header>
	);
}
