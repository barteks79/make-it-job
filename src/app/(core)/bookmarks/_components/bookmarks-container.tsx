import { createRelativeDate } from '@/lib/utils';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BookmarkButton from '../../offers/_components/job-card/bookmark-button';
import { type GetUserBookmarks } from '@/db/queries/bookmarks/get-user-bookmarks';

export default async function BookmarksContainer({
  userId,
  bookmarks
}: {
  userId: string;
  bookmarks: GetUserBookmarks;
}) {
  const resolved = await bookmarks;

  return (
    <>
      {resolved.map(row => (
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
                  isBookmarked={false}
                  postId={row.post.id}
                  userId={userId}
                  className="size-8"
                />
              </div>
            </div>
          </article>
        </li>
      ))}
    </>
  );
}
