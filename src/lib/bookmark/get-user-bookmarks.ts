'use server';

import { db } from '@/db';
import { posts, bookmarks } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';
import { cacheTag, cacheLife } from 'next/cache';

export const getUserBookmarks = async ({
  userId,
  order
}: {
  userId: string;
  order: 'recent' | 'latest';
}) => {
  'use cache';
  cacheTag(`bookmarks:${userId}`);
  cacheLife('hours');

  return db
    .select()
    .from(posts)
    .innerJoin(bookmarks, eq(posts.id, bookmarks.postId))
    .where(eq(bookmarks.userId, userId))
    .orderBy(asc(order === 'latest' ? posts.createdAt : bookmarks.createdAt));
};

export type GetUserBookmarks = ReturnType<typeof getUserBookmarks>;
