import SalaryInputsProvider from '@/store/salary-inputs';
import { MOCK_FILTER_CATEGORIES } from '@/data/mock/filter-categories';

import ApplySalaryButton from './_components/apply-salary-button';
import SalaryInputs from './_components/salary-inputs';
import CategoryFilter from './_components/category-filter';
import DateSelect from './_components/date-select';
import ClearFiltersButton from './_components/clear-filters-button';

export const dynamic = 'force-dynamic';

export default function SidebarView() {
  return (
    <div className="hidden lg:block overflow-y-scroll bg-secondary border-r horizontal-scrollbar">
      <aside className="flex flex-col w-64 h-full">
        <SalaryInputsProvider>
          <section className="flex justify-between items-center px-7 py-4 border-b">
            <h3 className="text-foreground font-semibold tracking-tight">Filters</h3>

            <ClearFiltersButton />
          </section>

          <section className="flex flex-col px-7 pb-6">
            <CategoryFilter isCustom>
              <label className="font-medium text-sm">Post date</label>
              <DateSelect />
            </CategoryFilter>

            <CategoryFilter options={MOCK_FILTER_CATEGORIES['jobType']}>Job Type</CategoryFilter>

            <CategoryFilter options={MOCK_FILTER_CATEGORIES['workType']}>Work Type</CategoryFilter>

            <CategoryFilter options={MOCK_FILTER_CATEGORIES['experience']}>
              Experience
            </CategoryFilter>

            <CategoryFilter isCustom>
              <label className="font-medium text-sm">Annual salary</label>
              <SalaryInputs />
              <p className="text-muted-foreground text-sm">In thousands of US dollars.</p>
            </CategoryFilter>

            <ApplySalaryButton />
          </section>
        </SalaryInputsProvider>
      </aside>
    </div>
  );
}
