import 'server-only';

import { db } from '..';
import { bookmarks } from '../schema';

export const addBookmark = async ({ postId, userId }: { postId: string; userId: string }) => {
  await db.insert(bookmarks).values({ postId, userId });
};
