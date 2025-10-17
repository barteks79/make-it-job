'use server';

import { db } from '@/db';
import { bookmarks } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { unstable_cache } from 'next/cache';

const _getIsBookmarked = async (postId: string, userId: string | undefined) => {
  if (!userId) {
    return false;
  }

  const [bookmark] = await db
    .select()
    .from(bookmarks)
    .where(and(eq(bookmarks.postId, postId), eq(bookmarks.userId, userId)));

  return !!bookmark;
};

export const getIsBookmarked = async (postId: string, userId: string | undefined) => {
  return unstable_cache(() => _getIsBookmarked(postId, userId), [`bookmark:${postId}:${userId}`], {
    tags: [`bookmark:${postId}:${userId}`],
    revalidate: 3600
  })();
};
