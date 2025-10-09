'use client';

import { useOptimistic } from 'react';
import { type GetUserBookmarks } from '@/db/queries/bookmarks/get-user-bookmarks';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardAction } from '@/components/ui/card';
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
            <div className="relative size-16">
              <Image className="rounded" src="/images/user-default1.jpg" alt="User" fill />
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold text-lg tracking-tight">
                {bookmark.post.experience} {bookmark.post.position}, Netflix
              </h3>
              <p className="text-muted-foreground tracking-tight line-clamp-1">
                {bookmark.post.description}
              </p>
            </div>
          </div>

          <CardAction className="flex flex-col justify-between">
            <p className="text-muted-foreground tracking-tight text-right">
              {createRelativeDate(new Date(bookmark.post.createdAt))}
            </p>

            <div className="flex gap-1">
              <Button className="h-8 px-8">Apply</Button>

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
