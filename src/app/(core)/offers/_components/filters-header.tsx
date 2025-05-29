import QuickFiltersProvider from '@/store/quick-filters';
import PositionTag from './position-tag';
import { Input } from '@/components/ui/input';
import { jobTags } from '@/config/job-tags';

export default function FiltersHeader() {
	return (
		<header className="flex flex-col gap-2 px-7 py-4 bg-secondary border-b">
			<QuickFiltersProvider>
				<div className="flex gap-3">
					<Input placeholder="Search job" className="bg-background" />
					<Input placeholder="Search location" className="bg-background" />
				</div>

				<div className="overflow-x-auto horizontal-scrollbar">
					<ul className="flex w-full gap-3">
						{jobTags.map(tag => (
							<li key={tag}>
								<PositionTag tag={tag} />
							</li>
						))}
					</ul>
				</div>
			</QuickFiltersProvider>
		</header>
	);
}
