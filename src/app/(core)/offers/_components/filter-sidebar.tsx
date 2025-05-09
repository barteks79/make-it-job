import CategoryFilter from '@/app/(core)/offers/_components/category-filter';
import DateSelect from '@/app/(core)/offers/_components/date-select';

export default function FilterSidebar() {
	return (
		<aside className="flex-1 bg-secondary w-64 border-x">
			<section className="flex justify-between items-center px-7 py-4 border-b">
				<h3 className="text-foreground font-semibold tracking-tight">
					Filters
				</h3>

				<button className="text-sm text-secondary-foreground cursor-pointer tracking-tight">
					Clear
				</button>
			</section>

			<section className="flex flex-col px-7">
				<CategoryFilter isCustom>
					<label className="font-medium text-sm">Post date</label>
					<DateSelect />
				</CategoryFilter>

				<CategoryFilter>Job Type</CategoryFilter>

				<CategoryFilter>Work Type</CategoryFilter>

				<CategoryFilter>Experience</CategoryFilter>

				<CategoryFilter isCustom>
					<label className="font-medium text-sm">Annual salary</label>
				</CategoryFilter>
			</section>
		</aside>
	);
}
