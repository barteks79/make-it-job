import { Suspense } from 'react';
import SalaryInputsProvider from '@/store/salary-inputs';

import { getFilterCategories } from '@/lib/post/get-filter-categories';
import { getAppliedFilters, type FilterSearchParams } from '@/lib/filter';
import FilterGroup from './_components/filter-group';
import FilterGroupContainer, {
  FilterContainerSkeleton
} from './_components/filter-group-container';

import SalaryInputs from './_components/salary-inputs';
import DateSelect from './_components/date-select';
import ApplySalaryButton from './_components/apply-salary-button';
import ClearFiltersButton from './_components/clear-filters-button';

export default async function SidebarView({ searchParams }: { searchParams: FilterSearchParams }) {
  const currentFilters = await getAppliedFilters(searchParams);
  const categories = getFilterCategories(currentFilters);

  return (
    <div className="hidden lg:block overflow-y-scroll bg-secondary border-r horizontal-scrollbar">
      <aside className="flex flex-col w-64 h-full">
        <SalaryInputsProvider>
          <section className="flex justify-between items-center px-7 py-4 border-b">
            <h3 className="text-foreground font-semibold tracking-tight">Filters</h3>
            <ClearFiltersButton />
          </section>

          <section className="flex flex-col px-7 pb-6">
            <FilterGroup label="Post Date">
              <DateSelect />
            </FilterGroup>

            <Suspense fallback={<FilterContainerSkeleton />}>
              <FilterGroupContainer categoriesPromise={categories} />
            </Suspense>

            <FilterGroup label="Annual Salary">
              <SalaryInputs />
              <p className="text-muted-foreground text-sm">In thousands of USD.</p>
              <ApplySalaryButton />
            </FilterGroup>
          </section>
        </SalaryInputsProvider>
      </aside>
    </div>
  );
}
