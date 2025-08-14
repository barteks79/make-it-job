'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';
import slugify from 'slugify';
import { cn } from '@/lib/utils';

import { Checkbox } from '@/components/ui/checkbox';
import type { JobType, Experience, WorkType } from '@/types/job-post';

type Option = { type: JobType | Experience | WorkType; count: number };

export default function FilterOption({ option }: { option: Option }) {
  const paramName = slugify(option.type, { lower: true });
  const [optimisticValue, setOptimisticValue] = useOptimisticFilter<boolean>(paramName, false);
  const isEnabled = option.count > 0;

  return (
    <li className="flex items-center gap-2.5">
      <Checkbox
        disabled={!isEnabled}
        checked={!!optimisticValue}
        onCheckedChange={setOptimisticValue}
        className="cursor-pointer"
      />

      <label
        className={cn('text-sm text-foreground flex-1', {
          'font-medium': optimisticValue,
          'text-muted-foreground': !isEnabled
        })}
      >
        {option.type}
      </label>

      <span
        className={cn('text-sm text-muted-foreground', {
          'text-primary font-medium': optimisticValue,
          'text-muted-foreground/75': !isEnabled
        })}
      >
        {option.count}
      </span>
    </li>
  );
}
