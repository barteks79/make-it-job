import SalaryInputsProvider from '@/store/salary-inputs';
import { Suspense } from 'react';

import { getFilterCategories } from '@/db/queries/posts/get-filter-categories';
import { getAppliedFilters, type FilterSearchParams } from '@/lib/filter';
import FilterOption from './_components/filter-option';
import FilterGroup from './_components/filter-group';

import ApplySalaryButton from './_components/apply-salary-button';
import SalaryInputs from './_components/salary-inputs';
import DateSelect from './_components/date-select';
import ClearFiltersButton from './_components/clear-filters-button';

export default async function SidebarView({ searchParams }: { searchParams: FilterSearchParams }) {
  const currentFilters = await getAppliedFilters(searchParams);
  const categories = await getFilterCategories(currentFilters);

  return (
    <div className="hidden lg:block overflow-y-scroll bg-secondary border-r horizontal-scrollbar">
      <aside className="flex flex-col w-64 h-full">
        <SalaryInputsProvider>
          <section className="flex justify-between items-center px-7 py-4 border-b">
            <h3 className="text-foreground font-semibold tracking-tight">Filters</h3>
            <Suspense fallback={<p>Loading...</p>}>
              <ClearFiltersButton />
            </Suspense>
          </section>

          <section className="flex flex-col px-7 pb-6">
            <FilterGroup label="Post Date">
              <Suspense fallback={<p>Loading...</p>}>
                <DateSelect />
              </Suspense>
            </FilterGroup>

            <FilterGroup label="Job Type">
              <ul className="flex flex-col gap-2.5">
                {categories.jobType.map((option, idx) => (
                  <Suspense key={idx} fallback={<p>Loading...</p>}>
                    <FilterOption option={option} />
                  </Suspense>
                ))}
              </ul>
            </FilterGroup>

            <FilterGroup label="Work Type">
              <ul className="flex flex-col gap-2.5">
                {categories.workType.map((option, idx) => (
                  <Suspense key={idx} fallback={<p>Loading...</p>}>
                    <FilterOption option={option} />
                  </Suspense>
                ))}
              </ul>
            </FilterGroup>

            <FilterGroup label="Experience">
              <ul className="flex flex-col gap-2.5">
                {categories.experience.map((option, idx) => (
                  <Suspense key={idx} fallback={<p>Loading...</p>}>
                    <FilterOption option={option} />
                  </Suspense>
                ))}
              </ul>
            </FilterGroup>

            <FilterGroup label="Annual Salary">
              <Suspense fallback={<p>Loading...</p>}>
                <SalaryInputs />
              </Suspense>

              <p className="text-muted-foreground text-sm">In thousands of USD.</p>

              <Suspense fallback={<p>Loading...</p>}>
                <ApplySalaryButton />
              </Suspense>
            </FilterGroup>
          </section>
        </SalaryInputsProvider>
      </aside>
    </div>
  );
}
