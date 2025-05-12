import { mockFilterCategories } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CategoryFilter from '@/app/(core)/offers/_components/category-filter';
import DateSelect from '@/app/(core)/offers/_components/date-select';
import ClearFiltersButton from '@/app/(core)/offers/_components/clear-filters-button';

export default function FilterSidebar() {
	return (
		<aside className="flex flex-col flex-1 bg-secondary w-64 border-x">
			<section className="flex justify-between items-center px-7 py-4 border-b">
				<h3 className="text-foreground font-semibold tracking-tight">
					Filters
				</h3>

				<ClearFiltersButton />
			</section>

			<section className="flex flex-col px-7">
				<CategoryFilter isCustom>
					<label className="font-medium text-sm">Post date</label>
					<DateSelect />
				</CategoryFilter>

				<CategoryFilter options={mockFilterCategories['jobType']}>
					Job Type
				</CategoryFilter>

				<CategoryFilter options={mockFilterCategories['workType']}>
					Work Type
				</CategoryFilter>

				<CategoryFilter options={mockFilterCategories['experience']}>
					Experience
				</CategoryFilter>

				<CategoryFilter isCustom>
					<label className="font-medium text-sm">Annual salary</label>

					<div className="flex flex-col items-center gap-2.5">
						<Input placeholder="$0" type="number" />
						<Input placeholder="$50000" type="number" />
					</div>

					<p className="text-secondary-foreground text-sm">
						In thousands of US dollars.
					</p>
				</CategoryFilter>
			</section>

			<section className="flex items-end flex-1 px-7 py-4">
				<Button className="w-full not-disabled:cursor-pointer">
					Apply (23)
				</Button>
			</section>
		</aside>
	);
}
