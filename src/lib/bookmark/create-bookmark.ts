import 'server-only';

import { db } from '@/db';
import { bookmarks } from '@/db/schema';

export const createBookmark = async ({ postId, userId }: { postId: string; userId: string }) => {
  await db.insert(bookmarks).values({ postId, userId });
};
