'use server';

import { db } from '@/db';
import { bookmarks } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { cacheTag, cacheLife } from 'next/cache';

export async function getIsBookmarked(postId: string, userId: string | undefined) {
  'use cache';
  cacheTag(`bookmark:${postId}:${userId}`);
  cacheLife('hours');

  if (!userId) {
    return false;
  }

  const [bookmark] = await db
    .select()
    .from(bookmarks)
    .where(and(eq(bookmarks.postId, postId), eq(bookmarks.userId, userId)));

  return !!bookmark;
}
