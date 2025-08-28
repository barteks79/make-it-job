import 'server-only';

import { db } from '..';
import { bookmarks } from '../schema/bookmarks';
import { eq, and } from 'drizzle-orm';

export const deleteBookmark = async ({ postId, userId }: { postId: string; userId: string }) => {
  await db.delete(bookmarks).where(and(eq(bookmarks.postId, postId), eq(bookmarks.userId, userId)));
};
