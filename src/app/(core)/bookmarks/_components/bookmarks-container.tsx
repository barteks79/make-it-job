// import { getUserBookmarks } from '@/db/queries/bookmarks/get-user-bookmarks';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BookmarkButton from '../../offers/_components/job-card/bookmark-button';

export default async function BookmarksContainer(
  {
    // bookmarks
  }
) {
  // const resolved = await bookmarks;
  // console.log(resolved);

  return (
    <>
      {/* {resolved.map((row, idx) => ( */}
      <li key={1}>
        <article className="flex justify-between px-2.5 py-2 border rounded">
          <div className="flex items-center gap-3.5">
            <div className="relative size-16">
              <Image className="rounded" src="/images/user-default1.jpg" alt="User" fill />
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold text-lg tracking-tight">
                Senior Frontend Developer, Netflix
              </h3>
              <p className="text-muted-foreground tracking-tight line-clamp-1">
                Build stunning, interactive interfaces that redefine the streaming experience for
                millions.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-muted-foreground tracking-tight text-right">3 days ago</p>
            <div className="flex gap-1">
              <Button className="h-8 px-8">Apply</Button>
              <BookmarkButton
                isBookmarked={false}
                postId="a58cfafe-87ec-4397-ad9e-fe522a50b011"
                userId="a58cfafe-87ec-4397-ad9e-fe522a50b010"
                className="size-8"
              />
            </div>
          </div>
        </article>
      </li>
      {/* ))} */}
    </>
  );
}
