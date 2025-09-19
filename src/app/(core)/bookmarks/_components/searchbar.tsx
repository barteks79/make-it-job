'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';
import { useDebouncedCallback } from '@/hooks/use-debounced-callback';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function Searchbar({
  delay,
  className,
  ...props
}: React.ComponentProps<typeof Input> & { delay: number }) {
  const [, setQuery] = useOptimisticFilter<string>('q', '');
  const debouncedQueryChange = useDebouncedCallback(setQuery, delay);

  return (
    <Input
      className={cn('', className)}
      onChange={e => debouncedQueryChange(e.target.value)}
      {...props}
    />
  );
}
