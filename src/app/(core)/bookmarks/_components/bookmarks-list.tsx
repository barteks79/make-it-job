'use client';

import { useOptimistic } from 'react';
import { type GetUserBookmarks } from '@/db/queries/bookmarks/get-user-bookmarks';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardAction } from '@/components/ui/card';
import { Send } from 'lucide-react';
import BookmarkButton from '../../offers/_components/job-card/bookmark-button';
import { createRelativeDate } from '@/lib/utils';

type BookmarkListItemProps = {
  bookmark: Awaited<GetUserBookmarks>[number];
  onRemove: (postId: string) => void;
};

function BookmarkListItem({ bookmark, onRemove }: BookmarkListItemProps) {
  return (
    <li>
      <Card className="py-3">
        <CardContent className="flex justify-between px-3">
          <div className="flex items-center gap-3.5">
            <div className="relative size-12 min-w-12 lg:size-16 lg:min-w-16">
              <Image className="rounded" src="/images/user-default1.jpg" alt="User" fill />
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold text-base lg:text-lg tracking-tight line-clamp-1">
                {bookmark.post.experience} {bookmark.post.position}, Netflix
              </h3>
              <p className="text-muted-foreground tracking-tight line-clamp-1 text-sm lg:text-base">
                {bookmark.post.description}
              </p>
            </div>
          </div>

          <CardAction className="flex flex-col justify-between ">
            <div className="text-muted-foreground tracking-tight line-clamp-1">
              {createRelativeDate(new Date(bookmark.post.createdAt))}
            </div>

            <div className="flex gap-1">
              <Button className="w-8 md:w-auto h-8 px-2 md:px-8">
                <Send className="size-4 md:hidden" />
                <span className="hidden md:inline">Apply</span>
              </Button>

              <BookmarkButton
                updatedParentUI={() => onRemove(bookmark.post.id)}
                postId={bookmark.post.id}
                isBookmarked={true}
                className="size-8"
              />
            </div>
          </CardAction>
        </CardContent>
      </Card>
    </li>
  );
}

export default function BookmarksList({ bookmarks }: { bookmarks: Awaited<GetUserBookmarks> }) {
  const [optimisticBookmarks, setOptimisticBookmarks] =
    useOptimistic<Awaited<GetUserBookmarks>>(bookmarks);

  const handleRemoveUIBookmark = (postId: string) => {
    setOptimisticBookmarks(prev => prev.filter(bookmark => bookmark.post.id !== postId));
  };

  return optimisticBookmarks.length > 0 ? (
    <ul className="flex flex-col gap-3">
      {optimisticBookmarks.map(row => (
        <BookmarkListItem key={row.post.id} bookmark={row} onRemove={handleRemoveUIBookmark} />
      ))}
    </ul>
  ) : (
    <p className="mt-4 text-center text-xl tracking-tight">Nothing here yet.</p>
  );
}
