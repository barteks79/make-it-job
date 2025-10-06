'use client';

import { useOptimistic } from 'react';
import { type GetUserBookmarks } from '@/db/queries/bookmarks/get-user-bookmarks';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BookmarkButton from '../../offers/_components/job-card/bookmark-button';
import { createRelativeDate } from '@/lib/utils';

export default function BookmarksList({ bookmarks }: { bookmarks: Awaited<GetUserBookmarks> }) {
  const [optimisticBookmarks, setOptimisticBookmarks] =
    useOptimistic<Awaited<GetUserBookmarks>>(bookmarks);

  const handleRemoveUIBookmark = (postId: string) => {
    setOptimisticBookmarks(prev => prev.filter(bookmark => bookmark.post.id !== postId));
  };

  return optimisticBookmarks.length > 0 ? (
    <ul className="flex flex-col gap-3">
      {optimisticBookmarks.map(row => (
        <li key={row.post.id}>
          <article className="flex justify-between px-2.5 py-2 border rounded">
            <div className="flex items-center gap-3.5">
              <div className="relative size-16">
                <Image className="rounded" src="/images/user-default1.jpg" alt="User" fill />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-lg tracking-tight">
                  {row.post.experience} {row.post.position}, Netflix
                </h3>
                <p className="text-muted-foreground tracking-tight line-clamp-1">
                  {row.post.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <p className="text-muted-foreground tracking-tight text-right">
                {createRelativeDate(new Date(row.post.createdAt))}
              </p>

              <div className="flex gap-1">
                <Button className="h-8 px-8">Apply</Button>

                <BookmarkButton
                  updatedParentUI={() => handleRemoveUIBookmark(row.post.id)}
                  postId={row.post.id}
                  isBookmarked={true}
                  className="size-8"
                />
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  ) : (
    <p className="mt-4 text-center text-xl tracking-tight">Nothing here yet.</p>
  );
}
