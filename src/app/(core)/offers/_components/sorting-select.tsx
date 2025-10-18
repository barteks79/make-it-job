'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger
} from '@/components/ui/select';

type SortOptions = 'latest' | 'relevance' | 'high-low' | 'low-high';

export function SortingSelect() {
  const [optimisticValue, setOptimisticValue] = useOptimisticFilter<SortOptions>(
    'sort',
    'relevance'
  );

  return (
    <Select value={optimisticValue} onValueChange={setOptimisticValue}>
      <SelectTrigger size="sm" className="w-45">
        <SelectValue>
          <p className="text-sm text-muted-foreground">
            Sort by:
            <span className="ml-2 text-foreground font-medium">
              {optimisticValue.at(0)?.toUpperCase() + optimisticValue.slice(1)}
            </span>
          </p>
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="latest">Latest</SelectItem>
        <SelectItem value="relevance">Relevance</SelectItem>
        <SelectItem value="high-low">Salary (high-low)</SelectItem>
        <SelectItem value="low-high">Salary (low-high)</SelectItem>
      </SelectContent>
    </Select>
  );
}
