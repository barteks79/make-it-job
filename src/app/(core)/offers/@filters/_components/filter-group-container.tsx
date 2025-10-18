import { fallbackCategories } from '@/config/filter';
import { FilterGroup } from './filter-group';
import { FilterOption } from './filter-option';
import { type FilterCategoriesT } from '@/lib/post/get-filter-categories';

export async function FilterGroupContainer({
  categoriesPromise
}: {
  categoriesPromise: FilterCategoriesT;
}) {
  const categories = await categoriesPromise;

  return (
    <>
      <FilterGroup label="Job Type">
        <ul className="flex flex-col gap-2.5">
          {categories.jobType.map((option, idx) => (
            <FilterOption key={idx} option={option} />
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup label="Work Type">
        <ul className="flex flex-col gap-2.5">
          {categories.workType.map((option, idx) => (
            <FilterOption key={idx} option={option} />
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup label="Experience">
        <ul className="flex flex-col gap-2.5">
          {categories.experience.map((option, idx) => (
            <FilterOption key={idx} option={option} />
          ))}
        </ul>
      </FilterGroup>
    </>
  );
}

export function FilterContainerSkeleton() {
  return (
    <>
      <FilterGroup label="Job Type">
        <ul className="flex flex-col gap-2.5">
          {fallbackCategories.jobType.map((option, idx) => (
            <FilterOption key={idx} option={option} />
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup label="Work Type">
        <ul className="flex flex-col gap-2.5">
          {fallbackCategories.workType.map((option, idx) => (
            <FilterOption key={idx} option={option} />
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup label="Experience">
        <ul className="flex flex-col gap-2.5">
          {fallbackCategories.experience.map((option, idx) => (
            <FilterOption key={idx} option={option} />
          ))}
        </ul>
      </FilterGroup>
    </>
  );
}
