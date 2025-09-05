'use client';

import { useOptimistic, startTransition } from 'react';
import { bookmarkPost } from '@/db/actions/bookmark-post';

import { Button } from '@/components/ui/button';
import { BookmarkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BookmarkButton({
  userId,
  postId,
  isBookmarked,
  className
}: {
  userId: string;
  postId: string;
  isBookmarked: boolean;
  className?: string;
}) {
  const [optimisticBookmarked, setOptimisticBookmarked] = useOptimistic<boolean>(isBookmarked);

  const handleBookmarkPost = async () => {
    startTransition(() => {
      setOptimisticBookmarked(prev => !prev);
    });

    await bookmarkPost({ postId, userId, isDelete: isBookmarked });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleBookmarkPost}
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
