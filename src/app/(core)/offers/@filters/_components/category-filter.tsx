import CategoryOption from './category-option';
import type { CategoryFilterOption } from '@/types/sidebar-filters';
import { type ReactNode } from 'react';

export default function CategoryFilter({
  children,
  isCustom = false,
  options
}: {
  children: ReactNode;
  isCustom?: boolean;
  options?: CategoryFilterOption[];
}) {
  return (
    <div className="flex flex-col gap-1.5 pt-4 pb-6 border-b last:border-none">
      {isCustom ? (
        children
      ) : (
        <>
          <label className="font-medium text-sm">{children}</label>

          <ul className="flex flex-col gap-2.5">
            {options?.map((option, idx) => (
              <CategoryOption key={idx} option={option} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
