'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';
import { Button } from '@/components/ui/button';

export default function DetailsButton({ postId }: { postId: string }) {
  const [, setOptimisticJobId] = useOptimisticFilter<string>('job', '');

  return (
    <Button onClick={() => setOptimisticJobId(postId)} className="cursor-pointer" variant="outline">
      Details
    </Button>
  );
}
