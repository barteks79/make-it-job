import BookmarksList from './bookmarks-list';
import { type GetUserBookmarks } from '@/db/queries/bookmarks/get-user-bookmarks';

export default async function BookmarksContainer({
  query,
  bookmarks
}: {
  query: string | undefined;
  bookmarks: GetUserBookmarks;
}) {
  const resolved = await bookmarks;
  const filteredBookmarks = resolved.filter(bookmark => searchBookmark(bookmark, query));

  return <BookmarksList bookmarks={filteredBookmarks} />;
}

function searchBookmark({ post }: Awaited<GetUserBookmarks>[number], query: string | undefined) {
  return `${post.position} ${post.experience} ${post.description}`
    .toLowerCase()
    .includes(query?.toLowerCase() || '');
}
