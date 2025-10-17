'use client';

import { useOptimistic, startTransition } from 'react';
import { toggleBookmark } from '@/lib/bookmark/toggle-bookmark';

import { Button } from '@/components/ui/button';
import { BookmarkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BookmarkButton({
  postId,
  isBookmarked = true,
  updatedParentUI,
  className,
  ...props
}: {
  postId: string;
  isBookmarked: boolean;
  updatedParentUI?: () => void;
  className?: string;
} & React.ComponentProps<typeof Button>) {
  const [optimisticBookmarked, setOptimisticBookmarked] = useOptimistic<boolean>(isBookmarked);

  const handleToggleBookmark = async () => {
    startTransition(() => {
      setOptimisticBookmarked(prev => !prev);
      // Middleware call to update UI in parent component
      if (updatedParentUI) updatedParentUI();
    });

    await toggleBookmark({ postId, isDelete: isBookmarked });
  };

  return (
    <Button
      {...props}
      variant="outline"
      size="icon"
      onClick={handleToggleBookmark}
      className={cn('size-7 cursor-pointer', className, {
        'border-destructive/15 dark:bg-destructive/10 bg-destructive/10 hover:bg-destructive/15 hover:dark:bg-destructive/15':
          optimisticBookmarked
      })}
    >
      <BookmarkIcon
        className={cn('pointer-events-none text-muted-foreground', {
          'fill-destructive text-destructive': optimisticBookmarked
        })}
      />
    </Button>
  );
}
