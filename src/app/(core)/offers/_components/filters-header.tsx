import QuickFiltersProvider from '@/store/quick-filters';
import { jobTags } from '@/config/job-tags';

import FilterInput from './filter-input';
import PositionTag from './position-tag';

export default function FiltersHeader() {
	return (
		<header className="flex flex-col gap-2 px-7 py-4 bg-secondary border-b">
			<QuickFiltersProvider>
				<div className="flex flex-col lg:flex-row gap-3">
					<FilterInput variant="search" placeholder="Search job" />
					<FilterInput variant="location" placeholder="Search location" />
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
